import { query, command } from "$app/server";
import { db } from "$lib/server/db";
import { blog, contact, postView } from "$lib/server/db/schema";
import { eq, desc, sql } from "drizzle-orm";
import { z } from "zod";

export const getPosts = query(async () => {
	return db.select().from(blog).orderBy(desc(blog.createdAt));
});

export const getPostBySlug = query(z.string(), async (slug) => {
	const [post] = await db.select().from(blog).where(eq(blog.slug, slug)).limit(1);
	return post ?? null;
});

const createPostSchema = z.object({
	title: z.string().min(1),
	slug: z.string().min(1),
	content: z.string().min(1)
});

export const createPost = command(createPostSchema, async (input) => {
	const [newPost] = await db.insert(blog).values(input).returning();
	return newPost;
});

const updatePostSchema = z.object({
	slug: z.string().min(1),
	title: z.string().min(1),
	content: z.string().min(1)
});

export const updatePost = command(updatePostSchema, async (input) => {
	const { slug, title, content } = input;
	const [updated] = await db.update(blog).set({ title, content }).where(eq(blog.slug, slug)).returning();
	return updated;
});

const deletePostSchema = z.object({
	slug: z.string().min(1)
});

export const deletePost = command(deletePostSchema, async (input) => {
	await db.delete(blog).where(eq(blog.slug, input.slug));
	return { ok: true };
});

export const getContacts = query(async () => {
	return db.select().from(contact).orderBy(desc(contact.id));
});

/**
 * Reads vs rereads. `post_view` holds one row per (post, session), so counting
 * rows per slug gives unique readers, and `blog.rereads` gives how many of the
 * views were repeats.
 */
export const getAnalytics = query(async () => {
	const posts = await db.select().from(blog).orderBy(desc(blog.views));

	const readersPerSlug = await db
		.select({ slug: postView.slug, readers: sql<number>`count(*)` })
		.from(postView)
		.groupBy(postView.slug);

	const readers = new Map(readersPerSlug.map((row) => [row.slug, Number(row.readers)]));

	const [unique] = await db
		.select({ readers: sql<number>`count(distinct ${postView.sessionId})` })
		.from(postView);

	let views = 0;
	let rereads = 0;

	const rows = posts.map((post) => {
		const postViews = post.views ?? 0;
		const postRereads = post.rereads ?? 0;
		views += postViews;
		rereads += postRereads;
		return {
			slug: post.slug,
			title: post.title ?? post.slug,
			views: postViews,
			rereads: postRereads,
			// A view that is not a reread was a distinct reader's first read.
			reads: postViews - postRereads,
			readers: readers.get(post.slug) ?? 0
		};
	});

	return {
		posts: rows,
		totals: {
			views,
			reads: views - rereads,
			rereads,
			uniqueReaders: Number(unique?.readers ?? 0)
		}
	};
});

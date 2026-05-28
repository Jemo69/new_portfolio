import { query, command } from "$app/server";
import { db } from "$lib/server/db";
import { blog, contact } from "$lib/server/db/schema";
import { eq, desc } from "drizzle-orm";
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

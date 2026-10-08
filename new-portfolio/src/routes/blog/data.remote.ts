import { query, command } from "$app/server";
import { db } from "$lib/server/db";
import { blog, postView } from "$lib/server/db/schema";
import  { z } from 'zod'
import { eq, desc, sql } from "drizzle-orm";



export const getBlog = query(async()=>{
    const BlogPosts = await db.select().from(blog).orderBy(desc(blog.createdAt))
    return BlogPosts
})

const SlugSchema = z.string().min(3).max(255)

export const GetBlogBySlug = query(
    SlugSchema,
    async (slug) => { 
      const BlogPost = await db.select().from(blog).where(eq(blog.slug , slug)).limit(1)
        return BlogPost
     }
)

const RecordViewSchema = z.object({
	slug: z.string().min(3).max(255),
	sessionId: z.string().min(8).max(128)
})

/**
 * Credits a view, but only after the browser has already verified it is a new
 * visit rather than a refresh.
 *
 * The session id the browser embedded in its token decides how the view is
 * classified: the first time a session touches a post it is a **read**, every
 * later time it is a **reread**. Both increment `views`, only rereads increment
 * `rereads`, so `views - rereads` is always the number of distinct readers.
 *
 * Returns the resulting counts, or nulls when the post does not exist.
 */
export const recordView = command(RecordViewSchema, async ({ slug, sessionId }) => {
	const [post] = await db.select({ id: blog.id }).from(blog).where(eq(blog.slug, slug)).limit(1);
	if (!post) return { views: null, rereads: null, kind: null };

	const now = new Date();

	// viewCount comes back as 1 when this is a fresh row (first read) and
	// > 1 when the session already had history for this post (reread).
	const [session] = await db
		.insert(postView)
		.values({
			slug,
			sessionId,
			viewCount: 1,
			firstViewedAt: now,
			lastViewedAt: now
		})
		.onConflictDoUpdate({
			target: [postView.slug, postView.sessionId],
			set: { viewCount: sql`${postView.viewCount} + 1`, lastViewedAt: now }
		})
		.returning({ viewCount: postView.viewCount });

	const kind = (session?.viewCount ?? 1) > 1 ? 'reread' : 'read';

	const [updated] = await db
		.update(blog)
		.set({
			views: sql`${blog.views} + 1`,
			...(kind === 'reread' ? { rereads: sql`${blog.rereads} + 1` } : {})
		})
		.where(eq(blog.slug, slug))
		.returning({ views: blog.views, rereads: blog.rereads });

	return {
		views: updated?.views ?? null,
		rereads: updated?.rereads ?? 0,
		kind
	};
})

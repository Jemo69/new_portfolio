import { query, command } from "$app/server";
import { db } from "$lib/server/db";
import { blog } from "$lib/server/db/schema";
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
	slug: z.string().min(3).max(255)
})

/**
 * Credits a view, but only after the browser has already verified it is a new
 * visit rather than a refresh. Returns the resulting count, or null when the
 * view was not counted (unknown post).
 */
export const recordView = command(RecordViewSchema, async ({ slug }) => {
	const [updated] = await db
		.update(blog)
		.set({ views: sql`${blog.views} + 1` })
		.where(eq(blog.slug, slug))
		.returning({ views: blog.views });

	return { views: updated?.views ?? null };
})

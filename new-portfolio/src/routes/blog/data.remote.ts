import { query } from "$app/server";
import { db } from "$lib/server/db";
import { blog } from "$lib/server/db/schema";
import  { z } from 'zod'
import { eq } from "drizzle-orm";



export const getBlog = query(async()=>{
    const BlogPosts = await db.select().from(blog)
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

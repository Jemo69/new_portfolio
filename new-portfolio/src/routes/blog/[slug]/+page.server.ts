import { error } from '@sveltejs/kit';
import { GetBlogBySlug } from '../data.remote'; // Assuming you have an API function
import { db } from '$lib/server/db';
import { blog } from '$lib/server/db/schema';
import { eq, sql } from 'drizzle-orm';

export const load = async ({ params } : any) => {
  const post = await GetBlogBySlug(params.slug);
  
  // 1. CRITICAL CHECK: If the post is not found, throw a SvelteKit error.
  if (!post || post.length === 0) {
    // This is the mandated way to return a 404 (Not Found) page in SvelteKit
    throw error(404, 'Blog post not found!'); 
  }

  // Increment views
  await db.update(blog)
    .set({ views: sql`${blog.views} + 1` })
    .where(eq(blog.slug, params.slug));

  // 2. MANDATORY RETURN: The component expects the returned data object.
  // Ensure the shape matches what you use in +page.svelte (e.g., data.post)
  return {
    post: post[0] // Return the single post object for easier use
  };
};


import { error } from '@sveltejs/kit';
import { GetBlogBySlug } from '../data.remote'; // Assuming you have an API function

export const load = async ({ params } : any) => {
  const post = await GetBlogBySlug(params.slug);
  
  // 1. CRITICAL CHECK: If the post is not found, throw a SvelteKit error.
  if (!post) {
    // This is the mandated way to return a 404 (Not Found) page in SvelteKit
    throw error(404, 'Blog post not found!'); 
  }

  // 2. MANDATORY RETURN: The component expects the returned data object.
  // Ensure the shape matches what you use in +page.svelte (e.g., data.post)
  return {
    post // { post: { title: "..." } }
  };
};

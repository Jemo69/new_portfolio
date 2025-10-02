import { warn } from "console";
import type { PageServerLoad } from "./$types";
import { GetBlogBySlug } from "../data.remote";
export const load : PageServerLoad = async ({params }) => {
    const postSlug = params.slug
    const post = GetBlogBySlug(postSlug)
    return { 
     post 
     }
}

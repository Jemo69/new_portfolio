import { json } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { eq } from 'drizzle-orm';
import { blog } from '$lib/server/db/schema';
import type { RequestHandler } from './$types';
import { SECRET_CODE } from '$env/static/private';

export const GET: RequestHandler = async ({ request }) => {

    const custom = request.headers.get('Jemo')
    // const Sercetcode = env.SECRET_CODE
    const Sercetcode = SECRET_CODE
    if (!custom){
        return json({error : "not authencated something"}, {status : 401})
    }
    if (custom != Sercetcode){
        return json({error : "not authencated", "custom":custom , "code":Sercetcode}, {status : 401})
    }

	try {
		const blogPost = await db.select().from(blog);
		return json(blogPost , { status: 200 });
	} catch (error) {
		return json({ error: 'Failed to fetch blog post' }, { status: 500 });
	}
};

export const POST: RequestHandler = async ({ request }) => {
    const custom = request.headers.get('Jemo')
    // const Sercetcode = env.SECRET_CODE
    const Sercetcode = SECRET_CODE
    if (!custom){
        return json({error : "not authencated something"}, {status : 401})
    }
    if (custom != Sercetcode){
        return json({error : "not authencated", "custom":custom , "code":Sercetcode}, {status : 401})
    }
	const { title, slug, content } = await request.json();

	if (!title || !slug || !content) {
		return json({ error: 'Missing required fields' }, { status: 400 });
	}

	try {
		const [newBlog] = await db.insert(blog).values({ title, slug, content }).returning();
		return json(newBlog, { status: 201 });
	} catch (error) {
		return json({ error: 'Failed to create blog post' }, { status: 500 });
	}
};

export const DELETE  : RequestHandler = async ({request}) => { 

    const custom = request.headers.get('Jemo')
    // const Sercetcode = env.SECRET_CODE
    const Sercetcode = SECRET_CODE
    if (!custom){
        return json({error : "not authencated something"}, {status : 401})
    }
    if (custom != Sercetcode){
        return json({error : "not authencated", "custom":custom , "code":Sercetcode}, {status : 401})
    }
const { slug } = await request.json();
    if ( !slug ){
        return json({error : 'Not found '}, { status: 400})
    }
    try{
        db.delete(blog).where(eq(blog.slug , slug))
        return json({"blog":"it gone"} , {status:201})
    }
    catch(error){
        return json({error: 'there is an error '})
    }

}


import { json } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { eq } from 'drizzle-orm';
import { blog } from '$lib/server/db/schema';
import type { RequestHandler } from './$types';
import { request } from 'http';
import { error } from 'console';

export const POST: RequestHandler = async ({ request }) => {
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


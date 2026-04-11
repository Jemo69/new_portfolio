import { error } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { blog } from '$lib/server/db/schema';
import { eq, sql } from 'drizzle-orm';

export const load = async ({ params }: { params: { slug: string } }) => {
	const post = await db.select().from(blog).where(eq(blog.slug, params.slug)).limit(1);

	if (!post || post.length === 0) {
		throw error(404, 'Blog post not found!');
	}

	await db
		.update(blog)
		.set({ views: sql`${blog.views} + 1` })
		.where(eq(blog.slug, params.slug));

	return {
		post: post[0]
	};
};
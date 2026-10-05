import { error } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { blog } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';
import type { PageServerLoad } from './$types';

// Views are deliberately NOT counted here. This load runs on hover preloads,
// refreshes, back/forward and every bot hit, so incrementing in it credits
// views that never happened. The client claims a view first (see $lib/views)
// and only then calls recordView.
export const load: PageServerLoad = async ({ params }) => {
	const post = await db.select().from(blog).where(eq(blog.slug, params.slug)).limit(1);

	if (!post || post.length === 0) {
		throw error(404, 'Blog post not found!');
	}

	return {
		post: { ...post[0], views: post[0].views ?? 0 }
	};
};

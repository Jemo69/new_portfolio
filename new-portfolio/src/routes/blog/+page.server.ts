import type { PageServerLoad } from './$types';
import { db } from '$lib/server/db';
import { blog } from '$lib/server/db/schema';

export const load: PageServerLoad = async () => {
	const posts = await db.select().from(blog);
	return { posts };
};
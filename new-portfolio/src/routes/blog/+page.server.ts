import type { PageServerLoad } from './$types';
import { db } from '$lib/server/db';
import { blog } from '$lib/server/db/schema';
import { desc } from 'drizzle-orm';

export const load: PageServerLoad = async () => {
	const posts = await db.select().from(blog).orderBy(desc(blog.createdAt));
	return { posts };
};
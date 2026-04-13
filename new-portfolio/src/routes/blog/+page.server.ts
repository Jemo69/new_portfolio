import type { PageServerLoad } from './$types';
import { db } from '$lib/server/db';
import { blog } from '$lib/server/db/schema';
import { desc } from 'drizzle-orm';

// Sorting blog posts by creation date (newest first)
export const load: PageServerLoad = async () => {
	const posts = await db.select().from(blog).orderBy(desc(blog.createdAt));
	return { posts };
};
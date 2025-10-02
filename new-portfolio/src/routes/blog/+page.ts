import type { PageLoad } from './$types';
import { posts } from '$lib/blog-data';

export const load: PageLoad = () => {
	return {
		posts
	};
};
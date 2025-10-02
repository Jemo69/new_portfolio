import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { GetBlogBySlug } from '../data.remote';

export const load: PageLoad = ({ params }) => {
    const post =  GetBlogBySlug(params.slug)

	if (!post) {
		throw error(404, 'Not found');
	}

	return {
		post
	};
};

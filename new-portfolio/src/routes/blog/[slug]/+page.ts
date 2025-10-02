import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { GetBlogBySlug } from '../data.remote';

export const load: PageLoad = async({ params }) => {
    const post =  await  GetBlogBySlug(params.slug)

	if (!post) {
		throw error(404, 'Not found');
	}

	return {
		post
	};
};

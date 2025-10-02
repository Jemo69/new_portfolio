import type { PageLoad } from './$types';
import { getBlog } from './data.remote';
export const load: PageLoad = () => {
    const posts = getBlog()
	return {
		posts
	};
};

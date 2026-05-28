import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ cookies, url }) => {
	const session = cookies.get('admin_session');
	if (session !== 'authenticated' && !url.pathname.startsWith('/admin/login') && !url.pathname.startsWith('/admin/logout')) {
		throw redirect(307, '/admin/login');
	}
};

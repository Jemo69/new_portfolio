import { redirect } from '@sveltejs/kit';
import { SECRET_CODE } from '$env/static/private';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ cookies }) => {
	const session = cookies.get('admin_session');
	if (session === 'authenticated') {
		throw redirect(307, '/admin');
	}
};

export const actions: Actions = {
	default: async ({ cookies, request }) => {
		const formData = await request.formData();
		const password = formData.get('password')?.toString();

		if (password !== SECRET_CODE) {
			return { error: 'Invalid password' };
		}

		cookies.set('admin_session', 'authenticated', {
			path: '/admin',
			httpOnly: true,
			sameSite: 'strict',
			maxAge: 60 * 60 * 24
		});

		throw redirect(303, '/admin');
	}
};

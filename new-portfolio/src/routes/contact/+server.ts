import { env } from '$env/dynamic/private';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	const rawUrl = env.SOURCE_RESUME;
	const githubToken = env.GITHUB_PRIVATE_TOKEN;

	if (!githubToken) {
		return new Response('GitHub token not found', { status: 500 });
	}

	if (!rawUrl) {
		return new Response('Resume URL not found', { status: 500 });
	}

	const response = await fetch(rawUrl, {
		headers: {
			Authorization: `token ${githubToken}`,
			Accept: 'application/vnd.github.v3.raw'
		}
	});

	if (!response.ok) {
		return new Response('Failed to fetch resume', { status: response.status });
	}

	const blob = await response.blob();

	return new Response(blob, {
		headers: {
			'Content-Type': 'application/pdf',
			'Content-Disposition': 'attachment; filename="resume.pdf"',
			'Cache-Control': 'no-cache, no-store, must-revalidate',
			'Pragma': 'no-cache',
			'Expires': '0'
		}
	});
};

import { db } from '$lib/server/db';
import { blog } from '$lib/server/db/schema';

export const GET = async () => {
	const posts = await db.select().from(blog);
	const siteUrl = 'https://new-portfolio-ten-amber.vercel.app';
	
	const pages = [
		'',
		'/blog',
		'/about',
		'/contact'
	];

	const sitemap = `<?xml version="1.0" encoding="UTF-8" ?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
			.map(
				(page) => `
    <url>
        <loc>${siteUrl}${page}</loc>
        <changefreq>weekly</changefreq>
        <priority>${page === '' ? '1.0' : '0.8'}</priority>
    </url>`
			)
			.join('')}
    ${posts
			.map(
				(post) => `
    <url>
        <loc>${siteUrl}/blog/${post.slug}</loc>
        <changefreq>monthly</changefreq>
        <priority>0.6</priority>
    </url>`
			)
			.join('')}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
};

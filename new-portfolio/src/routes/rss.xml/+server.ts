import { db } from '$lib/server/db';
import { blog } from '$lib/server/db/schema';

export const GET = async () => {
	const posts = await db.select().from(blog);

	const siteUrl ='https://new-portfolio-ten-amber.vercel.app/';
	const siteTitle = 'Jemo\'s Blog';
	const siteDescription = 'A personal blog about technology and development';

	const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
	<title><![CDATA[${siteTitle}]]></title>
	<link>${siteUrl}</link>
	<description><![CDATA[${siteDescription}]]></description>
	<atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
	${posts
		.map(
			(post) => `
	<item>
		<title><![CDATA[${post.title}]]></title>
		<link>${siteUrl}/blog/${post.slug}</link>
		<guid isPermaLink="true">${siteUrl}/blog/${post.slug}</guid>
		<description><![CDATA[${post.content?.slice(0, 200).replace(/[#*_`]/g, '') || ''}]]></description>
		<pubDate>${post.createdAt ? new Date(post.createdAt).toUTCString() : new Date().toUTCString()}</pubDate>
	</item>`
		)
		.join('')}
</channel>
</rss>`;

	return new Response(rss, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
};

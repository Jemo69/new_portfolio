import { db } from '$lib/server/db';
import { blog } from '$lib/server/db/schema';
import { desc } from 'drizzle-orm';

export const GET = async () => {
	const posts = await db.select().from(blog).orderBy(desc(blog.createdAt));

	const siteUrl ='https://new-portfolio-ten-amber.vercel.app';
	const siteTitle = 'JEMO CORE // JEREMY PORTFOLIO';
	const siteDescription = 'Tactical Web Development and Software Engineering insights from Jeremy Nwachukwu.';

	const formatDate = (date: any) => {
		if (!date) return new Date().toUTCString();
		// Handle both string dates and timestamps
		if (typeof date === 'number') {
			return new Date(date).toUTCString();
		}
		const d = typeof date === 'string' ? date.replace(/^"|"$/g, '') : date;
		const parsed = new Date(d);
		return isNaN(parsed.getTime()) ? new Date().toUTCString() : parsed.toUTCString();
	};

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
		<pubDate>${formatDate(post.createdAt)}</pubDate>
	</item>`
		)
		.join('')}
</channel>
</rss>`;

	return new Response(rss, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'no-cache, no-store, must-revalidate',
			'Pragma': 'no-cache',
			'Expires': '0'
		}
	});
};

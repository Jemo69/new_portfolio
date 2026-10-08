import { sql } from 'drizzle-orm';
import { sqliteTable, integer, text, uniqueIndex } from 'drizzle-orm/sqlite-core';

export const user = sqliteTable('user', {
	id: integer('id').primaryKey(),
	email: text('email').notNull(),
	password: text('password').notNull()
});

export const blog = sqliteTable('blog', {
	id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
	title: text('title'),
	slug: text('slug').unique().notNull(),
	content: text('content'),
	views: integer('views').default(0),
	// Views that were a repeat from a session which had already read the post.
	// Reads are always `views - rereads`, so there is no third counter to drift.
	rereads: integer('rereads').default(0),
	// Drizzle `mode: 'timestamp'` stores seconds (matching every existing row).
	// `default(new Date())` was used before: it re-freezes a different literal on
	// every `db:generate`, which emitted a bogus ALTER COLUMN each time and left
	// new rows with a text date that read back as Invalid Date.
	createdAt: integer('created_at', { mode: 'timestamp' }).default(sql`(unixepoch())`)
});

/**
 * One row per (post, session). This is what turns a raw view counter into
 * analytics: the first row for a session on a post is a read, every later one
 * is a reread, and counting rows gives unique readers per post.
 */
export const postView = sqliteTable(
	'post_view',
	{
		id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
		slug: text('slug').notNull(),
		sessionId: text('session_id').notNull(),
		viewCount: integer('view_count').notNull().default(1),
		firstViewedAt: integer('first_viewed_at', { mode: 'timestamp' }).notNull(),
		lastViewedAt: integer('last_viewed_at', { mode: 'timestamp' }).notNull()
	},
	(table) => [uniqueIndex('post_view_slug_session_unique').on(table.slug, table.sessionId)]
);

export const contact = sqliteTable('contact', {
	// `autoincrement: true` matches the live table; omitting it made generate
	// emit a full table recreation of `contact` on every run.
	id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
	name: text('name'),
	email: text('email'),
	message: text('message')
});

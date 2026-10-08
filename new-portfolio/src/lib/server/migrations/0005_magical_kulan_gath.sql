CREATE TABLE `post_view` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`slug` text NOT NULL,
	`session_id` text NOT NULL,
	`view_count` integer DEFAULT 1 NOT NULL,
	`first_viewed_at` integer NOT NULL,
	`last_viewed_at` integer NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `post_view_slug_session_unique` ON `post_view` (`slug`,`session_id`);--> statement-breakpoint
DROP INDEX "blog_slug_unique";--> statement-breakpoint
DROP INDEX "post_view_slug_session_unique";--> statement-breakpoint
ALTER TABLE `blog` ALTER COLUMN "created_at" TO "created_at" integer DEFAULT (unixepoch());--> statement-breakpoint
CREATE UNIQUE INDEX `blog_slug_unique` ON `blog` (`slug`);--> statement-breakpoint
ALTER TABLE `blog` ADD `rereads` integer DEFAULT 0;
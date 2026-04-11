CREATE TABLE `blog` (
	`id` integer,
	`title` text,
	`slug` text NOT NULL,
	`content` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `blog_slug_unique` ON `blog` (`slug`);--> statement-breakpoint
CREATE TABLE `user` (
	`id` integer PRIMARY KEY NOT NULL,
	`email` text NOT NULL,
	`password` text NOT NULL
);

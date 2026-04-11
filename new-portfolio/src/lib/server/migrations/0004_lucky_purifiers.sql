PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_blog` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text,
	`slug` text NOT NULL,
	`content` text,
	`views` integer DEFAULT 0,
	`created_at` integer DEFAULT '"2026-04-11T18:40:33.864Z"'
);
--> statement-breakpoint
INSERT INTO `__new_blog`("id", "title", "slug", "content", "views", "created_at") SELECT "id", "title", "slug", "content", "views", "created_at" FROM `blog`;--> statement-breakpoint
DROP TABLE `blog`;--> statement-breakpoint
ALTER TABLE `__new_blog` RENAME TO `blog`;--> statement-breakpoint
PRAGMA foreign_keys=ON;--> statement-breakpoint
CREATE UNIQUE INDEX `blog_slug_unique` ON `blog` (`slug`);
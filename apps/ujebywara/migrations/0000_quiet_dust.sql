CREATE TABLE `shortenedLinks` (
	`id` text PRIMARY KEY NOT NULL,
	`created_at` integer DEFAULT (strftime('%s', 'now')),
	`fullUrl` text,
	`shortCode` text
);

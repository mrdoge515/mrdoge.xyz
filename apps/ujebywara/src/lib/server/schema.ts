import { sql } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const shortenedLinks = sqliteTable('shortenedLinks', {
  id: text('id').primaryKey(),
  createdAt: integer('created_at', { mode: 'timestamp' }).default(
    sql`(strftime('%s', 'now'))`,
  ),
  fullUrl: text('fullUrl'),
  shortCode: text('shortCode'),
});

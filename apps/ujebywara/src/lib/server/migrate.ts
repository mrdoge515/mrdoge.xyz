import { migrate } from 'drizzle-orm/libsql/migrator';
import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client/web';
import * as dotenv from 'dotenv';
dotenv.config();

async function main() {
  const db = drizzle(
    createClient({
      url: process.env.TURSO_URL || '',
      authToken: process.env.TURSO_TOKEN,
    }),
  );
  console.log('[i] Migrating');

  await migrate(db, { migrationsFolder: 'migrations' });
  console.log('[i] Migration completed');

  process.exit(0);
}

main().catch((e) => {
  console.log('[!] Migration failed');
  console.error(e);

  process.exit(1);
});

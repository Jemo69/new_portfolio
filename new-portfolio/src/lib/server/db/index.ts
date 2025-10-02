import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import * as schema from './schema';
import { env } from '$env/dynamic/private';


if (!env.DATABASE_URL) throw new Error('DATABASE_URL is not set');
if (!env.DB_TOKEN) throw new Error('DB_TOKEN is not set ')

const client = createClient({ url: env.DATABASE_URL, authToken:env.DB_TOKEN });

export const db = drizzle(client, { schema });

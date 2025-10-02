import { defineConfig } from 'drizzle-kit';
import * as dotenv from 'dotenv';
dotenv.config();

if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is not set');
if (!process.env.DB_TOKEN) throw new Error('DB_TOKEN is not set');

export default defineConfig({
	schema: './src/lib/server/db/schema.ts',
	dialect: 'turso',
    out: "./src/lib/server/migrations/",
	dbCredentials: { 
		url: process.env.DATABASE_URL,
		authToken: process.env.DB_TOKEN
	},
	verbose: true,
	strict: true
});

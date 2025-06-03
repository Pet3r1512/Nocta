import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';

const databaseUrl = import.meta.env.VITE_DATABASE_URL || import.meta.env.DATABASE_URL;

const sql = neon(databaseUrl);

const db = drizzle(sql);

export default db
import { sql } from '@vercel/postgres';
import { drizzle } from 'drizzle-orm/vercel-postgres';
import * as schema from './schema';

type Database = typeof schema;
export const db = drizzle<Database>(sql)

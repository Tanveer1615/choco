import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

export const connection = postgres(
  "postgresql://postgres.ipswfeeafxmndqdzqwnk:Tanveer@8373@aws-0-us-east-1.pooler.supabase.com:6543/postgres"
);

export const db = drizzle(connection);

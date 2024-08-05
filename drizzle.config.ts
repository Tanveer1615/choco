import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/lib/db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://postgres.ipswfeeafxmndqdzqwnk:Tanveer@8373@aws-0-us-east-1.pooler.supabase.com:6543/postgres",
  },
});

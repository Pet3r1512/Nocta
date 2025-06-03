import { defineConfig } from "drizzle-kit";

if (!process.env.VITE_DATABASE_URL || !process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL environment variable is not set");
}

export default defineConfig({
    dialect: "postgresql",
    schema: ["./app/db/schemas/auth-schema.ts"],
    dbCredentials: {
        url: process.env.VITE_DATABASE_URL || process.env.DATABASE_URL
    },
});

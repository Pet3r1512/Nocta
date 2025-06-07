import { defineConfig } from "drizzle-kit";

const databaseUrl = process.env.VITE_DATABASE_URL

if (!databaseUrl) {
    throw new Error("DATABASE_URL environment variable is not set");
}

export default defineConfig({
    dialect: "postgresql",
    schema: ["./app/db/schemas/auth-schema.ts"],
    dbCredentials: {
        url: databaseUrl
    },
});

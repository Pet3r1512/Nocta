import { defineConfig } from "drizzle-kit";

const databaseUrl = process.env.VITE_DATABASE_URL as string

export default defineConfig({
    dialect: "postgresql",
    schema: ["./app/db/schemas/auth-schema.ts"],
    dbCredentials: {
        url: databaseUrl
    },
});

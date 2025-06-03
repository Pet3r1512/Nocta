import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import db from "~/db/db";
import { reactStartCookies } from "better-auth/react-start";
import { schema } from "~/db/schemas/auth-schema";

export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg",
        schema,
    }),
    emailAndPassword: {
        enabled: true
    },
    socialProviders: {
        google: {
            clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID as string || import.meta.env.GOOGLE_CLIENT_ID,
            clientSecret: import.meta.env.VITE_GOOGLE_CLIENT_SECRET as string || import.meta.env.GOOGLE_CLIENT_SECRET,
        },
    },
    plugins: [reactStartCookies()],
});
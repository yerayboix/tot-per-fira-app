import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { db } from "./db";
import * as schema from "./db/schema/auth";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "sqlite",
    schema: schema,
    usersTable: "user",
  }),
  emailAndPassword: {
    enabled: true,
  },
  user: {
    additionalFields: {
      role: {
        type: "string",
        defaultValue: "user",
        required: false,
      },
    },
  },
  secret: process.env.BETTER_AUTH_SECRET || "your-secret-key",
  baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3001",
  plugins: [nextCookies()], // Plugin para manejar cookies automáticamente
}); 
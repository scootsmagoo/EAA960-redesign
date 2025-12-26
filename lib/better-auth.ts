import { betterAuth } from "better-auth"
import { twoFactor, admin } from "better-auth/plugins"
import { Pool } from "pg"

// Initialize database connection
const pool = process.env.DATABASE_URL
  ? new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: process.env.DATABASE_URL?.includes("localhost") 
        ? false 
        : { rejectUnauthorized: false },
    })
  : null

if (!pool && process.env.NODE_ENV === "production") {
  throw new Error("DATABASE_URL is required in production")
}

// BetterAuth configuration with MFA
export const auth = betterAuth({
  database: pool || undefined,
  baseURL: process.env.BETTER_AUTH_URL || process.env.NEXT_PUBLIC_BETTER_AUTH_URL || "http://localhost:3000",
  basePath: "/api/auth",
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false, // Disabled for now - can enable when email is configured
  },
  plugins: [
    twoFactor(),
    admin(),
  ],
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24, // 1 day
  },
})

export type Session = typeof auth.$Infer.Session


import { betterAuth } from "better-auth"
import { twoFactor, admin } from "better-auth/plugins"
import { Pool } from "pg"
import 'dotenv/config'

// Initialize database connection
const pool = process.env.DATABASE_URL
  ? new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: process.env.DATABASE_URL?.includes("localhost") 
        ? false 
        : { rejectUnauthorized: false },
    })
  : null

// BetterAuth configuration with MFA
const auth = betterAuth({
  database: pool || undefined,
  baseURL: process.env.BETTER_AUTH_URL || process.env.NEXT_PUBLIC_BETTER_AUTH_URL || "http://localhost:3000",
  basePath: "/api/auth",
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false,
  },
  plugins: [
    twoFactor(),
    admin(),
  ],
  session: {
    expiresIn: 60 * 60 * 24 * 7,
    updateAge: 60 * 60 * 24,
  },
})

export default auth

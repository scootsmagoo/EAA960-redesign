import { betterAuth } from "better-auth"
import { twoFactor, admin } from "better-auth/plugins"
import { Pool } from "pg"

// Lazy initialization of database connection to avoid build-time errors
let _pool: Pool | null = null

function getPool(): Pool | null {
  if (_pool) return _pool
  
  if (process.env.DATABASE_URL) {
    try {
      const connectionString = process.env.DATABASE_URL
      
      // Log connection attempt (without sensitive data)
      console.log('Creating database pool:', {
        hasUrl: !!connectionString,
        urlPrefix: connectionString.substring(0, 30) + '...',
        isLocalhost: connectionString.includes('localhost'),
      })
      
      _pool = new Pool({
        connectionString: connectionString,
        ssl: connectionString.includes("localhost") 
          ? false 
          : { rejectUnauthorized: false },
        // Add connection timeout for Supabase
        connectionTimeoutMillis: 10000,
        // Test connection on creation
        max: 1, // Start with 1 connection for testing
      })
      
      // Test the connection immediately
      _pool.query('SELECT NOW()').catch((err) => {
        console.error('Initial database connection test failed:', {
          message: err.message,
          code: (err as any)?.code,
          detail: (err as any)?.detail,
        })
        _pool = null // Reset pool on error
      })
      
      // Handle runtime errors
      _pool.on('error', (err) => {
        console.error('Unexpected database pool error:', {
          message: err.message,
          code: (err as any)?.code,
          detail: (err as any)?.detail,
        })
        _pool = null // Reset pool on error
      })
    } catch (error) {
      console.error('Failed to create database pool:', {
        error,
        message: error instanceof Error ? error.message : 'Unknown error',
        code: (error as any)?.code,
      })
      _pool = null
    }
  } else {
    console.warn('DATABASE_URL not set - Better Auth will run without database')
  }
  
  return _pool
}

// Determine the base URL for authentication
// Priority: explicit env var > Vercel URL > localhost
function getBaseURL(): string {
  // If explicitly set, use that
  if (process.env.BETTER_AUTH_URL) {
    return process.env.BETTER_AUTH_URL
  }
  if (process.env.NEXT_PUBLIC_BETTER_AUTH_URL) {
    return process.env.NEXT_PUBLIC_BETTER_AUTH_URL
  }
  
  // For Vercel deployments, use the deployment URL
  // VERCEL_URL is available server-side (no NEXT_PUBLIC_ prefix needed)
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }
  
  // Fallback for local development
  return "http://localhost:3000"
}

// Get the secret for Better Auth (required for production)
// Note: We allow a default during module initialization to allow builds to complete.
// The secret will be validated at runtime in API route handlers.
function getSecret(): string {
  if (process.env.BETTER_AUTH_SECRET) {
    return process.env.BETTER_AUTH_SECRET
  }
  
  // Always allow a default during module initialization (build time)
  // Runtime validation happens in API route handlers
  if (process.env.NODE_ENV === 'development') {
    console.warn('⚠️  BETTER_AUTH_SECRET not set. Using default secret for development only.')
  }
  
  return 'dev-secret-change-in-production'
}

// BetterAuth configuration with MFA
// Note: database may be undefined during build, but that's okay
// The actual database operations happen at runtime
export const auth = betterAuth({
  database: getPool() || undefined,
  baseURL: getBaseURL(),
  basePath: "/api/auth",
  secret: getSecret(),
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


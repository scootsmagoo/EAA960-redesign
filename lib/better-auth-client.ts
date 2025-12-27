"use client"

import { createAuthClient } from "better-auth/react"
import { adminClient } from "better-auth/client/plugins"

// Determine the base URL for authentication
// Priority: current origin (for same-origin requests) > explicit env var > Vercel preview URL > localhost
function getBaseURL(): string {
  // For client-side, always use the current origin to avoid CORS issues
  // This ensures same-origin requests work correctly on all deployments
  if (typeof window !== 'undefined') {
    return window.location.origin
  }
  
  // Server-side rendering fallbacks
  // If explicitly set, use that (useful for SSR)
  if (process.env.NEXT_PUBLIC_BETTER_AUTH_URL) {
    return process.env.NEXT_PUBLIC_BETTER_AUTH_URL
  }
  
  // For Vercel deployments, use the deployment URL
  if (process.env.NEXT_PUBLIC_VERCEL_URL) {
    return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  }
  
  // Fallback for local development
  return "http://localhost:3000"
}

export const authClient = createAuthClient({
  baseURL: getBaseURL(),
  plugins: [adminClient()],
})

export const {
  signIn,
  signUp,
  signOut,
  useSession,
  admin,
} = authClient


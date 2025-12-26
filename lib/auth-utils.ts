/**
 * Authentication utility functions
 * Helper functions for checking user roles and permissions
 */

import { useSession } from "@/lib/better-auth-client"

export type UserRole = "admin" | "member" | "user"

/**
 * Check if the current user has admin role
 */
export function useIsAdmin(): boolean {
  const { data: session } = useSession()
  // BetterAuth stores role in session.user.role or session.user.data.role
  // Adjust based on your BetterAuth configuration
  const role = (session?.user as any)?.role || (session?.user as any)?.data?.role
  return role === "admin"
}

/**
 * Check if the current user has a specific role
 */
export function useHasRole(role: UserRole): boolean {
  const { data: session } = useSession()
  const userRole = (session?.user as any)?.role || (session?.user as any)?.data?.role
  return userRole === role
}

/**
 * Server-side function to check if user is admin
 * Use this in server components or API routes
 */
export async function isAdmin(session: any): Promise<boolean> {
  if (!session?.user) return false
  const role = (session.user as any)?.role || (session.user as any)?.data?.role
  return role === "admin"
}


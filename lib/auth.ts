/**
 * Squarespace Authentication Helper
 * 
 * This module provides utilities to check if a user is authenticated
 * via Squarespace's Member Areas system.
 * 
 * IMPORTANT: For this to work properly, your Next.js site must be hosted
 * on the same domain as your Squarespace site (eaa690.org) or a subdomain.
 * Cookies are domain-specific and won't be accessible across different domains.
 * 
 * If hosting on a different domain, you'll need to:
 * 1. Use Squarespace's Member Areas API (if available)
 * 2. Implement a server-side proxy to check authentication
 * 3. Use OAuth/SSO integration
 */

export function isAuthenticated(): boolean {
  if (typeof window === 'undefined') {
    return false
  }

  // Squarespace sets various cookies when a user is logged in
  // Common cookies include: ss_sq, ss_cid, ss_cvr, etc.
  // The most reliable way is to check for the presence of Squarespace session cookies
  const cookies = document.cookie.split(';')
  
  // Check for Squarespace authentication cookies
  // Squarespace uses various cookie names:
  // - ss_sq (session)
  // - ss_cid (client ID) 
  // - ss_cvr (visitor record)
  // - ss_cvt (visitor type)
  // - ss_cpvisit (visit tracking)
  // - Member area specific cookies
  const squarespaceCookies = cookies.some(cookie => {
    const [name] = cookie.trim().split('=')
    return (
      name.startsWith('ss_') || 
      name.includes('squarespace') ||
      name.includes('sqsp') ||
      name === 'crumb' // Squarespace CSRF token
    )
  })

  // Also check if there's a member session cookie
  const hasMemberSession = cookies.some(cookie => {
    const [name] = cookie.trim().split('=')
    return name.includes('member') || name.includes('account') || name.includes('auth')
  })

  // Check for authenticated user indicator
  // Squarespace may set a cookie indicating logged-in status
  const hasAuthCookie = cookies.some(cookie => {
    const [name, value] = cookie.trim().split('=')
    return (
      (name.includes('authenticated') || name.includes('logged_in')) &&
      value === 'true'
    )
  })

  return squarespaceCookies || hasMemberSession || hasAuthCookie
}

export function getLoginUrl(redirectTo?: string): string {
  const baseUrl = 'https://www.eaa690.org/account/login'
  const returnUrl = redirectTo 
    ? `${typeof window !== 'undefined' ? window.location.origin : ''}${redirectTo}`
    : typeof window !== 'undefined' 
      ? window.location.href 
      : '/'
  
  return `${baseUrl}?noredirect=true&returnUrl=${encodeURIComponent(returnUrl)}`
}

export function getLogoutUrl(): string {
  return 'https://www.eaa690.org/account/logout'
}


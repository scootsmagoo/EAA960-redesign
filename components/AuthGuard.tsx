'use client'

import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { isAuthenticated, getLoginUrl } from '@/lib/auth'

interface AuthGuardProps {
  children: React.ReactNode
  requireAuth?: boolean
}

export default function AuthGuard({ children, requireAuth = false }: AuthGuardProps) {
  const [isAuth, setIsAuth] = useState<boolean | null>(null)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (requireAuth) {
      const checkAuth = () => {
        const authenticated = isAuthenticated()
        setIsAuth(authenticated)
        
        if (!authenticated) {
          // Redirect to login with return URL
          const loginUrl = getLoginUrl(pathname)
          window.location.href = loginUrl
        }
      }

      checkAuth()
      
      // Check periodically in case cookies are set after page load
      const interval = setInterval(checkAuth, 1000)
      
      return () => clearInterval(interval)
    } else {
      setIsAuth(true)
    }
  }, [requireAuth, pathname])

  if (requireAuth && isAuth === false) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-eaa-blue mx-auto mb-4"></div>
          <p className="text-gray-600">Checking authentication...</p>
        </div>
      </div>
    )
  }

  return <>{children}</>
}


'use client'

import { useState } from 'react'
import AuthGuard from '@/components/AuthGuard'
import { useSession } from '@/lib/better-auth-client'
import Link from 'next/link'

export default function AccountPage() {
  const { data: session } = useSession()
  const [mfaEnabled, setMfaEnabled] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // TODO: Implement MFA enable/disable functionality
  // This will require additional BetterAuth API calls
  const handleToggleMFA = async () => {
    setIsLoading(true)
    // MFA setup will be implemented when BetterAuth MFA API is available
    setTimeout(() => {
      setMfaEnabled(!mfaEnabled)
      setIsLoading(false)
    }, 1000)
  }

  return (
    <AuthGuard requireAuth={true}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-eaa-blue mb-8">Account Settings</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold text-eaa-blue mb-4">Profile Information</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <p className="text-gray-900">{session?.user?.name || 'Not set'}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <p className="text-gray-900">{session?.user?.email}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Account Created
              </label>
              <p className="text-gray-900">
                {session?.user?.createdAt 
                  ? new Date(session.user.createdAt).toLocaleDateString()
                  : 'N/A'}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold text-eaa-blue mb-4">Security</h2>
          
          <div className="flex items-center justify-between py-4 border-b">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Two-Factor Authentication</h3>
              <p className="text-sm text-gray-500">
                Add an extra layer of security to your account
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <span className={`text-sm ${mfaEnabled ? 'text-green-600' : 'text-gray-500'}`}>
                {mfaEnabled ? 'Enabled' : 'Disabled'}
              </span>
              <button
                onClick={handleToggleMFA}
                disabled={isLoading}
                className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-eaa-blue focus:ring-offset-2 ${
                  mfaEnabled ? 'bg-eaa-blue' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                    mfaEnabled ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>

          <div className="mt-4">
            <Link
              href="/account/change-password"
              className="text-eaa-blue hover:text-eaa-light-blue font-medium"
            >
              Change Password →
            </Link>
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-eaa-blue mb-2">Need Help?</h3>
          <p className="text-gray-700 mb-4">
            If you need assistance with your account, please contact the chapter administrator.
          </p>
          <Link
            href="/contact"
            className="text-eaa-blue hover:text-eaa-light-blue font-medium"
          >
            Contact Us →
          </Link>
        </div>
      </div>
    </AuthGuard>
  )
}


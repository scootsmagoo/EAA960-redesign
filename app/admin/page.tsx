import AdminGuard from '@/components/AdminGuard'

export default function AdminPage() {
  return (
    <AdminGuard>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-eaa-blue mb-8">Admin Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-eaa-blue mb-2">User Management</h2>
            <p className="text-gray-600 mb-4">Manage user accounts and permissions</p>
            <button className="px-4 py-2 bg-eaa-blue text-white rounded-md hover:bg-eaa-light-blue">
              Manage Users
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-eaa-blue mb-2">Content Management</h2>
            <p className="text-gray-600 mb-4">Edit site content and pages</p>
            <button className="px-4 py-2 bg-eaa-blue text-white rounded-md hover:bg-eaa-light-blue">
              Manage Content
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-eaa-blue mb-2">Settings</h2>
            <p className="text-gray-600 mb-4">Configure site settings</p>
            <button className="px-4 py-2 bg-eaa-blue text-white rounded-md hover:bg-eaa-light-blue">
              Site Settings
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-eaa-blue mb-4">Quick Actions</h2>
          <div className="space-y-2">
            <button className="block w-full text-left px-4 py-2 hover:bg-gray-50 rounded-md">
              View All Users
            </button>
            <button className="block w-full text-left px-4 py-2 hover:bg-gray-50 rounded-md">
              View System Logs
            </button>
            <button className="block w-full text-left px-4 py-2 hover:bg-gray-50 rounded-md">
              Backup Database
            </button>
          </div>
        </div>
      </div>
    </AdminGuard>
  )
}


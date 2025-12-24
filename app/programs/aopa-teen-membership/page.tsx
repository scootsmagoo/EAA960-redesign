export default function AOPATeenMembershipPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-eaa-blue mb-8">AOPA Teen Membership</h1>
      
      <div className="prose max-w-none">
        <p className="text-lg text-gray-700 mb-6">
          EAA 690 is proud to support teen aviation enthusiasts through the AOPA (Aircraft Owners and Pilots Association)
          Teen Membership program. This program provides young aviators with resources, opportunities, and a community
          to help them pursue their passion for aviation.
        </p>

        <h2 className="text-2xl font-bold text-eaa-blue mt-8 mb-4">Benefits</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
          <li>Access to AOPA resources and publications</li>
          <li>Scholarship opportunities</li>
          <li>Networking with other young aviators</li>
          <li>Educational resources and materials</li>
          <li>Support for flight training</li>
        </ul>

        <h2 className="text-2xl font-bold text-eaa-blue mt-8 mb-4">How to Join</h2>
        <p className="text-gray-700 mb-6">
          For more information about the AOPA Teen Membership program, please contact us through our{' '}
          <a href="/contact" className="text-eaa-light-blue hover:underline">contact page</a> or visit the{' '}
          <a href="https://www.aopa.org" target="_blank" rel="noopener noreferrer" className="text-eaa-light-blue hover:underline">
            AOPA website
          </a>.
        </p>
      </div>
    </div>
  )
}


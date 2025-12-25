export default function BylawsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-eaa-blue mb-8">Bylaws & Minutes</h1>
      
      <div className="prose max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-eaa-blue mb-4">Chapter Bylaws</h2>
          <p className="text-gray-700 mb-6">
            The bylaws of EAA 690 govern the operations and structure of our chapter. These documents outline the
            rules, procedures, and organizational structure that guide our activities.
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-bold text-eaa-blue mb-4">Accessing Bylaws</h3>
            <p className="text-gray-700 mb-4">
              Chapter bylaws are available to all members. If you need access to the current bylaws, please{' '}
              <a href="/contact" className="text-eaa-light-blue hover:underline">contact us</a>.
            </p>
            <p className="text-gray-700">
              Bylaws are reviewed periodically and may be amended by the membership according to the procedures
              outlined in the bylaws themselves.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-eaa-blue mb-4">Meeting Minutes</h2>
          <p className="text-gray-700 mb-6">
            Meeting minutes from Board of Directors meetings and general membership meetings are maintained as part
            of our chapter records. These minutes document the discussions, decisions, and actions taken during
            meetings.
          </p>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-xl font-bold text-eaa-blue mb-4">Recent Minutes</h3>
            <p className="text-gray-700 mb-4">
              Minutes from recent meetings are available to chapter members. To access meeting minutes, please{' '}
              <a href="/contact" className="text-eaa-light-blue hover:underline">contact us</a> or check with
              chapter leadership.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Board of Directors Meeting Minutes</li>
              <li>General Membership Meeting Minutes</li>
              <li>Annual Meeting Minutes</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-eaa-blue mb-4">Document Requests</h2>
          <p className="text-gray-700 mb-4">
            If you need copies of bylaws or meeting minutes, please{' '}
            <a href="/contact" className="text-eaa-light-blue hover:underline">contact us</a> with your request.
            We&apos;ll be happy to provide you with the documents you need.
          </p>
        </section>

        <section className="bg-eaa-yellow text-eaa-blue p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Member Access</h3>
          <p className="mb-2">
            All chapter members have the right to review chapter bylaws and meeting minutes. These documents help
            ensure transparency and accountability in chapter operations.
          </p>
          <p>
            If you have questions about bylaws or minutes, or if you&apos;d like to propose changes, please don&apos;t
            hesitate to reach out to chapter leadership.
          </p>
        </section>
      </div>
    </div>
  )
}


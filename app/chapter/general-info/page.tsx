export default function GeneralInfoPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-eaa-blue mb-8">General Information</h1>
      
      <div className="prose max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-eaa-blue mb-4">About EAA 690</h2>
          <p className="text-gray-700 mb-4">
            EAA 690 is a Chapter of the Experimental Aircraft Association, located at Briscoe Field (KLZU) in
            Lawrenceville, Georgia. Founded in 1980, we are an IRS-approved 501(c)(3) non-profit entity dedicated to
            promoting aviation and supporting our community.
          </p>
          <p className="text-gray-700">
            With over 250 members, we have been awarded EAA&apos;s top level Gold Chapter status, recognizing our
            commitment to excellence in promoting aviation education, youth programs, and community engagement.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-eaa-blue mb-4">Location</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 mb-2">
              <strong>Address:</strong><br />
              690 Airport Road<br />
              Hangar 1, Briscoe Field<br />
              Lawrenceville, Ga. 30046
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Airport:</strong> Briscoe Field (KLZU)
            </p>
            <p className="text-gray-700">
              <strong>Phone:</strong>{' '}
              <a href="tel:4048572492" className="text-eaa-light-blue hover:underline">
                (404) 857-2492
              </a>
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-eaa-blue mb-4">Regular Activities</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>1st Saturday Pancake Breakfast and Aviation Program (monthly)</li>
            <li>Monthly chapter meetings</li>
            <li>Young Eagles flights</li>
            <li>Fly-outs to various destinations</li>
            <li>Youth build programs</li>
            <li>Historical aircraft visits (B-17 &quot;Aluminum Overcast&quot;, Ford Tri-Motor, etc.)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-eaa-blue mb-4">Membership</h2>
          <p className="text-gray-700 mb-4">
            Membership in EAA 690 is open to anyone with an interest in aviation. You do not need to own an aircraft
            to join. We welcome pilots, builders, enthusiasts, and anyone who shares our passion for aviation.
          </p>
          <p className="text-gray-700">
            To join or renew your membership, please visit our{' '}
            <a href="/join" className="text-eaa-light-blue hover:underline">membership page</a> or{' '}
            <a href="/contact" className="text-eaa-light-blue hover:underline">contact us</a> for more information.
          </p>
        </section>
      </div>
    </div>
  )
}


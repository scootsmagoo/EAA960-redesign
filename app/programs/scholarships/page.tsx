export default function ScholarshipsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-eaa-blue mb-8">Scholarships</h1>
      
      <div className="prose max-w-none">
        <section className="mb-8">
          <p className="text-lg text-gray-700 mb-6">
            EAA 690 is committed to supporting aviation education through scholarship programs. Our scholarships
            help deserving students pursue their dreams of flight training, aviation education, and careers in
            aviation.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-eaa-blue mb-4">Available Scholarships</h2>
          <p className="text-gray-700 mb-4">
            EAA 690 offers scholarships to support various aspects of aviation education and training:
          </p>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>
                <strong>Flight Training Scholarships:</strong> Financial assistance for students pursuing pilot
                certificates and ratings.
              </li>
              <li>
                <strong>Aviation Education Scholarships:</strong> Support for students enrolled in aviation-related
                degree programs.
              </li>
              <li>
                <strong>Youth Program Scholarships:</strong> Assistance for youth participating in aviation programs
                and activities.
              </li>
              <li>
                <strong>Technical Training Scholarships:</strong> Support for students pursuing aircraft maintenance
                and technical aviation careers.
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-eaa-blue mb-4">Eligibility</h2>
          <p className="text-gray-700 mb-4">
            Scholarship eligibility requirements vary by program. Generally, applicants should:
          </p>
          
          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Demonstrate a genuine interest in aviation</li>
              <li>Show academic achievement or potential</li>
              <li>Be actively pursuing aviation education or training</li>
              <li>Meet any age or program-specific requirements</li>
              <li>Submit a complete application by the deadline</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-eaa-blue mb-4">Application Process</h2>
          <p className="text-gray-700 mb-4">
            Scholarship applications are typically accepted on an annual basis. The application process includes:
          </p>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Complete the scholarship application form</li>
              <li>Submit required documentation (transcripts, letters of recommendation, etc.)</li>
              <li>Write a personal statement or essay</li>
              <li>Meet application deadlines</li>
            </ol>
          </div>
          
          <p className="text-gray-700">
            Scholarship recipients are selected by the chapter&apos;s scholarship committee based on established
            criteria including academic achievement, aviation interest, financial need, and potential for success.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-eaa-blue mb-4">Application Deadlines</h2>
          <p className="text-gray-700 mb-4">
            Scholarship application deadlines vary by program. For information about current scholarship opportunities,
            application deadlines, and requirements, please{' '}
            <a href="/contact" className="text-eaa-light-blue hover:underline">contact us</a>.
          </p>
          <p className="text-gray-700">
            You can also check our <a href="/news" className="text-eaa-light-blue hover:underline">news page</a> or{' '}
            <a href="/calendar" className="text-eaa-light-blue hover:underline">calendar</a> for scholarship
            announcements and deadlines.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-eaa-blue mb-4">Supporting Scholarships</h2>
          <p className="text-gray-700 mb-4">
            EAA 690 scholarships are made possible through the generosity of chapter members, donors, and fundraising
            activities. If you&apos;re interested in supporting our scholarship program through donations or
            fundraising, please{' '}
            <a href="/contact" className="text-eaa-light-blue hover:underline">contact us</a>.
          </p>
          <p className="text-gray-700">
            Donations to our scholarship fund help ensure that financial barriers don&apos;t prevent deserving
            students from pursuing their aviation dreams.
          </p>
        </section>

        <section className="bg-eaa-yellow text-eaa-blue p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Investing in the Future of Aviation</h3>
          <p className="mb-2">
            Scholarships are an investment in the future of aviation. By supporting students in their aviation
            education and training, we help ensure a strong and vibrant aviation community for years to come.
          </p>
          <p>
            Interested in applying for a scholarship or supporting our scholarship program?{' '}
            <a href="/contact" className="underline hover:text-eaa-light-blue">Contact us</a> to learn more!
          </p>
        </section>
      </div>
    </div>
  )
}


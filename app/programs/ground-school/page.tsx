export default function GroundSchoolPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-eaa-blue mb-8">Ground School</h1>
      
      <div className="prose max-w-none">
        <section className="mb-8">
          <p className="text-lg text-gray-700 mb-6">
            EAA 690 offers comprehensive ground school training for aspiring pilots. Our ground school program
            provides the knowledge and preparation needed to pass FAA written exams and become a safe, competent pilot.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-eaa-blue mb-4">Program Overview</h2>
          <p className="text-gray-700 mb-4">
            Our ground school covers all the essential topics required for pilot certification, including:
          </p>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Aerodynamics and aircraft systems</li>
              <li>Weather and meteorology</li>
              <li>Navigation and flight planning</li>
              <li>Airspace and regulations</li>
              <li>Radio communications</li>
              <li>Emergency procedures</li>
              <li>Human factors and aeromedical factors</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-eaa-blue mb-4">Course Formats</h2>
          <p className="text-gray-700 mb-4">
            Ground school courses are offered in various formats to accommodate different learning styles and schedules:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-eaa-blue mb-2">In-Person Classes</h3>
              <p className="text-gray-700">
                Traditional classroom instruction with experienced instructors and hands-on learning opportunities.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-eaa-blue mb-2">Online Resources</h3>
              <p className="text-gray-700">
                Access to online ground school materials and resources for self-paced study.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-eaa-blue mb-4">Who Can Participate</h2>
          <p className="text-gray-700 mb-4">
            Ground school is open to anyone interested in learning to fly, whether you&apos;re pursuing a private
            pilot certificate, instrument rating, or simply want to expand your aviation knowledge.
          </p>
          <p className="text-gray-700">
            Young Eagles participants who have completed their first flight are eligible for free online ground
            school through the EAA Young Eagles program.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-eaa-blue mb-4">Schedule and Registration</h2>
          <p className="text-gray-700 mb-4">
            Ground school classes are typically scheduled throughout the year. For information about upcoming
            courses, schedules, and registration, please{' '}
            <a href="/contact" className="text-eaa-light-blue hover:underline">contact us</a> or check our{' '}
            <a href="/calendar" className="text-eaa-light-blue hover:underline">calendar</a> for class dates.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-eaa-blue mb-4">Instructors</h2>
          <p className="text-gray-700 mb-4">
            Our ground school instructors are experienced pilots and educators who are passionate about aviation
            and dedicated to helping students succeed. They bring real-world experience and knowledge to the classroom.
          </p>
        </section>

        <section className="bg-eaa-yellow text-eaa-blue p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Start Your Aviation Journey</h3>
          <p className="mb-2">
            Ground school is the foundation of your pilot training. Whether you&apos;re just beginning or looking
            to advance your ratings, our ground school program will provide you with the knowledge you need.
          </p>
          <p>
            Ready to get started? <a href="/contact" className="underline hover:text-eaa-light-blue">Contact us</a> to learn more about our ground school program!
          </p>
        </section>
      </div>
    </div>
  )
}


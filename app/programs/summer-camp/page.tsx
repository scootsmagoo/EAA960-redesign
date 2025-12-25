export default function SummerCampPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-eaa-blue mb-8">Aviation STEM Summer Camp</h1>
      
      <div className="prose max-w-none">
        <section className="mb-8">
          <p className="text-lg text-gray-700 mb-6">
            EAA 690 offers exciting Aviation STEM Summer Camps for kids ages 12-18 in the Atlanta Metro area
            (Lawrenceville, Gwinnett County, GA). Our camps combine hands-on aviation activities with STEM education,
            providing an unforgettable summer experience.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-eaa-blue mb-4">Camp Overview</h2>
          <p className="text-gray-700 mb-4">
            Our Aviation STEM Summer Camps provide participants with a comprehensive introduction to aviation through
            a combination of classroom learning, hands-on activities, and flight experiences.
          </p>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-xl font-bold text-eaa-blue mb-4">What Campers Will Experience</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Introduction to aviation principles and aerodynamics</li>
              <li>Hands-on aircraft building and construction projects</li>
              <li>Flight simulators and aviation technology</li>
              <li>Young Eagles flight experience (weather permitting)</li>
              <li>Aviation career exploration</li>
              <li>Team-building activities</li>
              <li>Aviation safety and procedures</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-eaa-blue mb-4">Age Groups</h2>
          <p className="text-gray-700 mb-4">
            Camps are designed for different age groups to ensure age-appropriate activities and learning:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-eaa-blue mb-2">Ages 12-14</h3>
              <p className="text-gray-700">
                Introduction to aviation with hands-on projects and basic flight concepts.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-eaa-blue mb-2">Ages 15-18</h3>
              <p className="text-gray-700">
                More advanced aviation topics, flight planning, and career exploration.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-eaa-blue mb-4">Camp Details</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-bold text-eaa-blue mb-4">Location</h3>
            <p className="text-gray-700 mb-2">
              <strong>EAA 690 Hangar</strong><br />
              690 Airport Road<br />
              Hangar 1, Briscoe Field<br />
              Lawrenceville, Georgia 30046
            </p>
            <p className="text-gray-700">
              <strong>Airport:</strong> Briscoe Field (KLZU)
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-xl font-bold text-eaa-blue mb-4">Schedule</h3>
            <p className="text-gray-700 mb-2">
              Summer camps are typically held during June and July. Specific dates and times vary by year.
            </p>
            <p className="text-gray-700">
              Camps may be offered as day camps or multi-day programs. Check with us for current year schedules.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-eaa-blue mb-4">Registration</h2>
          <p className="text-gray-700 mb-4">
            Registration for summer camps typically opens in the spring. Space is limited, so early registration
            is encouraged.
          </p>
          
          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-bold text-eaa-blue mb-4">To Register or Get More Information</h3>
            <p className="text-gray-700 mb-4">
              For information about upcoming summer camps, registration, fees, and schedules, please{' '}
              <a href="/contact" className="text-eaa-light-blue hover:underline">contact us</a>.
            </p>
            <p className="text-gray-700">
              You can also check our <a href="/news" className="text-eaa-light-blue hover:underline">news page</a> or{' '}
              <a href="/calendar" className="text-eaa-light-blue hover:underline">calendar</a> for camp announcements.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-eaa-blue mb-4">What to Bring</h2>
          <p className="text-gray-700 mb-4">
            Campers should come prepared for a day of learning and fun:
          </p>
          
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Lunch and snacks (unless provided)</li>
            <li>Water bottle</li>
            <li>Comfortable clothing appropriate for working with tools and aircraft</li>
            <li>Closed-toe shoes</li>
            <li>Sunscreen and hat (for outdoor activities)</li>
            <li>Notebook and pen</li>
            <li>Enthusiasm and curiosity!</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-eaa-blue mb-4">Safety</h2>
          <p className="text-gray-700 mb-4">
            Safety is our top priority. All camp activities are supervised by experienced instructors and volunteers.
            Campers will receive safety briefings and instruction before participating in any activities.
          </p>
        </section>

        <section className="bg-eaa-yellow text-eaa-blue p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-2">An Unforgettable Summer Experience</h3>
          <p className="mb-2">
            Our Aviation STEM Summer Camps provide a unique opportunity for young people to explore aviation,
            learn new skills, and discover potential career paths. It&apos;s an experience they&apos;ll remember
            for a lifetime!
          </p>
          <p>
            Ready to sign up? <a href="/contact" className="underline hover:text-eaa-light-blue">Contact us</a> to
            learn more about our summer camp programs!
          </p>
        </section>
      </div>
    </div>
  )
}


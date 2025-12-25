export default function VMCIMCClubPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-eaa-blue mb-8">VMC/IMC Club</h1>
      
      <div className="prose max-w-none">
        <section className="mb-8">
          <p className="text-lg text-gray-700 mb-6">
            The VMC/IMC Club at EAA 690 is dedicated to improving pilot proficiency in Visual Meteorological Conditions
            (VMC) and Instrument Meteorological Conditions (IMC). Our club provides a supportive environment for pilots
            to enhance their skills, share experiences, and learn from each other.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-eaa-blue mb-4">What is VMC/IMC?</h2>
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-eaa-blue mb-2">VMC - Visual Meteorological Conditions</h3>
              <p className="text-gray-700">
                Weather conditions that allow flight under visual flight rules (VFR). Pilots can see and avoid other
                aircraft and navigate by visual reference to the ground.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-eaa-blue mb-2">IMC - Instrument Meteorological Conditions</h3>
              <p className="text-gray-700">
                Weather conditions that require flight under instrument flight rules (IFR). Pilots must rely on
                aircraft instruments for navigation and control, as visual reference is limited or unavailable.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-eaa-blue mb-4">Club Activities</h2>
          <p className="text-gray-700 mb-4">
            The VMC/IMC Club organizes various activities to help pilots improve their skills:
          </p>
          
          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Monthly Meetings:</strong> Educational presentations and discussions on VMC/IMC topics,
                weather, and flight safety.
              </li>
              <li>
                <strong>Scenario-Based Training:</strong> Practice sessions using flight simulators and real-world
                scenarios.
              </li>
              <li>
                <strong>Weather Briefings:</strong> Group weather analysis and discussion to improve weather
                interpretation skills.
              </li>
              <li>
                <strong>Flight Reviews:</strong> Opportunities to practice and review VMC and IMC procedures.
              </li>
              <li>
                <strong>Guest Speakers:</strong> Presentations by experienced pilots, instructors, and aviation
                professionals.
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-eaa-blue mb-4">Who Can Join</h2>
          <p className="text-gray-700 mb-4">
            The VMC/IMC Club is open to all pilots, regardless of experience level:
          </p>
          
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Private pilots looking to improve their skills</li>
            <li>Instrument-rated pilots maintaining proficiency</li>
            <li>Pilots working toward instrument ratings</li>
            <li>Any pilot interested in weather and flight safety</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-eaa-blue mb-4">Benefits of Membership</h2>
          <p className="text-gray-700 mb-4">
            Joining the VMC/IMC Club provides numerous benefits:
          </p>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Improved weather decision-making skills</li>
              <li>Enhanced flight safety awareness</li>
              <li>Opportunities to practice and maintain proficiency</li>
              <li>Networking with other pilots</li>
              <li>Access to educational resources and materials</li>
              <li>Supportive learning environment</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-eaa-blue mb-4">Meeting Schedule</h2>
          <p className="text-gray-700 mb-4">
            VMC/IMC Club meetings are typically held monthly. For information about meeting dates, times, and
            locations, please{' '}
            <a href="/contact" className="text-eaa-light-blue hover:underline">contact us</a> or check our{' '}
            <a href="/calendar" className="text-eaa-light-blue hover:underline">calendar</a>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-eaa-blue mb-4">Getting Involved</h2>
          <p className="text-gray-700 mb-4">
            To join the VMC/IMC Club or learn more about upcoming activities, please{' '}
            <a href="/contact" className="text-eaa-light-blue hover:underline">contact us</a>. You can also
            attend one of our meetings to see what the club is all about.
          </p>
          <p className="text-gray-700">
            All EAA 690 members are welcome to participate, and we encourage pilots of all experience levels to
            join us.
          </p>
        </section>

        <section className="bg-eaa-yellow text-eaa-blue p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Continuous Learning and Improvement</h3>
          <p className="mb-2">
            Aviation is a continuous learning process, and the VMC/IMC Club provides a great opportunity to
            improve your skills, learn from others, and stay current with best practices in weather flying and
            instrument procedures.
          </p>
          <p>
            Ready to improve your VMC/IMC skills? <a href="/contact" className="underline hover:text-eaa-light-blue">Contact us</a> to learn more about the VMC/IMC Club!
          </p>
        </section>
      </div>
    </div>
  )
}


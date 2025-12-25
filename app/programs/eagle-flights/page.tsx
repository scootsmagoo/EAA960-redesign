export default function EagleFlightsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-eaa-blue mb-8">Eagle Flights</h1>
      
      <div className="prose max-w-none">
        <section className="mb-8">
          <p className="text-lg text-gray-700 mb-6">
            Eagle Flights is a program designed to give adults (18 and older) their first experience in a general
            aviation aircraft. Similar to the Young Eagles program for youth, Eagle Flights provides an opportunity
            for adults to discover the joy of flight.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-eaa-blue mb-4">What is an Eagle Flight?</h2>
          <p className="text-gray-700 mb-4">
            An Eagle Flight is a free introductory flight experience for adults who have never flown in a small
            aircraft before. These flights are made possible through the generosity of EAA 690 member volunteer
            pilots who donate their time and aircraft.
          </p>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-xl font-bold text-eaa-blue mb-4">What to Expect</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Pre-flight walk-around and aircraft orientation</li>
              <li>Introduction to basic flight controls</li>
              <li>A 15-20 minute flight experience</li>
              <li>Post-flight discussion and certificate</li>
              <li>Information about learning to fly</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-eaa-blue mb-4">Eligibility</h2>
          <p className="text-gray-700 mb-4">
            Eagle Flights are available to adults 18 years of age and older who have never flown in a small
            general aviation aircraft before. Participants must be in good health and able to enter and exit
            the aircraft safely.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-eaa-blue mb-4">How to Request an Eagle Flight</h2>
          <p className="text-gray-700 mb-4">
            Eagle Flight requests can be submitted through our chapter. To request an Eagle Flight, please{' '}
            <a href="/contact" className="text-eaa-light-blue hover:underline">contact us</a> with the following
            information:
          </p>
          
          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Your name and contact information</li>
              <li>Your age</li>
              <li>Preferred dates/times (if any)</li>
              <li>Any questions or special considerations</li>
            </ul>
          </div>
          
          <p className="text-gray-700">
            Flights are typically scheduled during our monthly pancake breakfast events or other chapter activities.
            Check our <a href="/calendar" className="text-eaa-light-blue hover:underline">calendar</a> for upcoming
            events where Eagle Flights may be available.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-eaa-blue mb-4">Weather and Safety</h2>
          <p className="text-gray-700 mb-4">
            All Eagle Flights are subject to weather conditions and pilot availability. Safety is our top priority,
            and flights will only be conducted when conditions are safe and suitable for flight.
          </p>
          <p className="text-gray-700">
            If weather conditions are not suitable on your scheduled date, we will work with you to reschedule
            your Eagle Flight for another time.
          </p>
        </section>

        <section className="bg-eaa-yellow text-eaa-blue p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Take Your First Flight</h3>
          <p className="mb-2">
            Don&apos;t let age stop you from experiencing the joy of flight! Eagle Flights provide adults with
            the same exciting opportunity that Young Eagles offers to youth.
          </p>
          <p>
            Ready to take your first flight? <a href="/contact" className="underline hover:text-eaa-light-blue">Contact us</a> today to request your Eagle Flight!
          </p>
        </section>
      </div>
    </div>
  )
}


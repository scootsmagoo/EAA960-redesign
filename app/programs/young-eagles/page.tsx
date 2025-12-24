export default function YoungEaglesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-eaa-blue mb-8">Young Eagles Program</h1>
      
      <div className="prose max-w-none">
        <p className="text-lg text-gray-700 mb-6">
          The Young Eagles program was launched in 1992 to give interested young people, ages 8-17, an opportunity to
          go flying in a general aviation airplane. These flights are offered free of charge and are made possible through
          the generosity of EAA member volunteer pilots who participate in the Young Eagles program.
        </p>

        <h2 className="text-2xl font-bold text-eaa-blue mt-8 mb-4">What to Expect</h2>
        <p className="text-gray-700 mb-4">
          During a Young Eagles flight, a young person will:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
          <li>Receive a pre-flight walk-around of the aircraft</li>
          <li>Learn about the aircraft and how it works</li>
          <li>Experience the joy of flight</li>
          <li>Receive a certificate and logbook entry</li>
          <li>Become eligible for free online ground school</li>
        </ul>

        <h2 className="text-2xl font-bold text-eaa-blue mt-8 mb-4">How to Participate</h2>
        <p className="text-gray-700 mb-6">
          Young Eagles flights are typically offered during our monthly pancake breakfast events and other special
          occasions. To register for a flight, please contact us through our{' '}
          <a href="/contact" className="text-eaa-light-blue hover:underline">contact page</a> or check our{' '}
          <a href="/calendar" className="text-eaa-light-blue hover:underline">calendar</a> for upcoming events.
        </p>

        <div className="bg-eaa-yellow text-eaa-blue p-6 rounded-lg mt-8">
          <h3 className="text-xl font-bold mb-2">Important Information</h3>
          <p className="mb-2">
            <strong>Age Requirement:</strong> Participants must be between 8 and 17 years old
          </p>
          <p className="mb-2">
            <strong>Parental Consent:</strong> A parent or guardian must be present and sign a consent form
          </p>
          <p>
            <strong>Weather:</strong> Flights are subject to weather conditions and pilot availability
          </p>
        </div>
      </div>
    </div>
  )
}


export default function VisitUsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-eaa-blue mb-8">Visit Us</h1>
      
      <div className="prose max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-eaa-blue mb-4">Location</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <p className="text-gray-700 mb-2">
              <strong>EAA 690</strong><br />
              690 Airport Road<br />
              Hangar 1, Briscoe Field<br />
              Lawrenceville, Georgia 30046
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
          <h2 className="text-2xl font-bold text-eaa-blue mb-4">Directions</h2>
          <p className="text-gray-700 mb-4">
            Briscoe Field is located in Lawrenceville, Georgia, approximately 30 miles northeast of Atlanta. The airport
            is easily accessible by car and has parking available for visitors.
          </p>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="font-bold text-eaa-blue mb-2">From Atlanta:</h3>
            <p className="text-gray-700">
              Take I-85 North to Exit 115 (GA-316/Athens). Follow GA-316 East, then take the exit for GA-20/Lawrenceville.
              Follow signs to Briscoe Field.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-eaa-blue mb-4">When to Visit</h2>
          <p className="text-gray-700 mb-4">
            We welcome visitors! The best times to visit are:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li><strong>1st Saturday of each month:</strong> Pancake Breakfast (8:00 AM - 10:00 AM) and Aviation Program (10:00 AM)</li>
            <li><strong>Monthly meetings:</strong> Check our <a href="/calendar" className="text-eaa-light-blue hover:underline">calendar</a> for dates</li>
            <li><strong>Special events:</strong> Fly-outs, aircraft visits, and other special occasions</li>
          </ul>
          <p className="text-gray-700">
            For specific event times and dates, please check our{' '}
            <a href="/calendar" className="text-eaa-light-blue hover:underline">calendar</a> or{' '}
            <a href="/contact" className="text-eaa-light-blue hover:underline">contact us</a>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-eaa-blue mb-4">What to Expect</h2>
          <p className="text-gray-700 mb-4">
            When you visit EAA 690, you&apos;ll find:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Friendly members eager to share their passion for aviation</li>
            <li>Interesting aircraft on display</li>
            <li>Educational programs and presentations</li>
            <li>Delicious breakfast (on pancake breakfast days)</li>
            <li>Opportunities to learn about aviation and get involved</li>
          </ul>
        </section>

        <section className="bg-eaa-yellow text-eaa-blue p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-2">First Time Visitor?</h3>
          <p className="mb-2">
            If you&apos;re visiting for the first time, don&apos;t hesitate to introduce yourself! Our members are always
            happy to welcome new faces and answer questions about the chapter, aviation, or our programs.
          </p>
          <p>
            We look forward to meeting you!
          </p>
        </section>
      </div>
    </div>
  )
}


export default function OutreachPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-eaa-blue mb-8">Outreach</h1>
      
      <div className="prose max-w-none">
        <section className="mb-8">
          <p className="text-lg text-gray-700 mb-6">
            EAA 690 is committed to community outreach and aviation education. Our outreach programs bring aviation
            to schools, community events, and organizations throughout the Atlanta metro area, inspiring the next
            generation of aviators and sharing our passion for flight.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-eaa-blue mb-4">Programs and Activities</h2>
          <p className="text-gray-700 mb-4">
            Our outreach efforts include a variety of programs designed to engage and educate:
          </p>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>
                <strong>School Visits:</strong> Chapter members visit local schools to present aviation programs,
                discuss careers in aviation, and inspire students to pursue their dreams.
              </li>
              <li>
                <strong>Community Events:</strong> We participate in air shows, festivals, and community gatherings
                to share aviation with the public.
              </li>
              <li>
                <strong>Career Days:</strong> Presentations at career days and job fairs highlighting opportunities
                in aviation and aerospace.
              </li>
              <li>
                <strong>Scout Programs:</strong> Special programs for Boy Scouts, Girl Scouts, and other youth
                organizations working on aviation-related badges and activities.
              </li>
              <li>
                <strong>Airport Tours:</strong> Guided tours of Briscoe Field and our hangar facilities for groups
                interested in learning about aviation.
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-eaa-blue mb-4">Request an Outreach Event</h2>
          <p className="text-gray-700 mb-4">
            Schools, organizations, and community groups are welcome to request an outreach event. We can tailor
            presentations to your group&apos;s age level and interests.
          </p>
          
          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-bold text-eaa-blue mb-4">What to Include in Your Request</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Organization name and type</li>
              <li>Group size and age range</li>
              <li>Preferred dates and times</li>
              <li>Location (we can come to you or host at the airport)</li>
              <li>Specific topics or areas of interest</li>
              <li>Contact information</li>
            </ul>
          </div>
          
          <p className="text-gray-700">
            To request an outreach event, please{' '}
            <a href="/contact" className="text-eaa-light-blue hover:underline">contact us</a> with the details
            above. We&apos;ll work with you to create an engaging and educational experience for your group.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-eaa-blue mb-4">Volunteer Opportunities</h2>
          <p className="text-gray-700 mb-4">
            Chapter members are always welcome to participate in outreach activities. Whether you&apos;re a pilot,
            builder, or aviation enthusiast, there are opportunities to share your passion and knowledge.
          </p>
          <p className="text-gray-700">
            If you&apos;re interested in volunteering for outreach events, please{' '}
            <a href="/contact" className="text-eaa-light-blue hover:underline">contact us</a> or speak with
            chapter leadership at our next meeting.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-eaa-blue mb-4">Impact</h2>
          <p className="text-gray-700 mb-4">
            Through our outreach programs, EAA 690 reaches hundreds of students and community members each year,
            inspiring interest in aviation and supporting STEM education. Our efforts help:
          </p>
          
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Introduce youth to aviation careers and opportunities</li>
            <li>Support STEM education in local schools</li>
            <li>Build connections between the aviation community and the public</li>
            <li>Promote general aviation and its benefits</li>
            <li>Encourage participation in aviation programs</li>
          </ul>
        </section>

        <section className="bg-eaa-yellow text-eaa-blue p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-2">Bringing Aviation to Your Community</h3>
          <p className="mb-2">
            EAA 690 is proud to serve our community through outreach and education. We believe that sharing our
            passion for aviation helps inspire the next generation and strengthens the aviation community.
          </p>
          <p>
            Interested in bringing aviation to your school or organization?{' '}
            <a href="/contact" className="underline hover:text-eaa-light-blue">Contact us</a> to schedule an
            outreach event!
          </p>
        </section>
      </div>
    </div>
  )
}


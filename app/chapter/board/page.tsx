export default function BoardPage() {
  const boardMembers = [
    {
      name: 'President',
      role: 'President',
      description: 'Leads the chapter and presides over meetings',
    },
    {
      name: 'Vice President',
      role: 'Vice President',
      description: 'Assists the president and presides in their absence',
    },
    {
      name: 'Secretary',
      role: 'Secretary',
      description: 'Maintains chapter records and meeting minutes',
    },
    {
      name: 'Treasurer',
      role: 'Treasurer',
      description: 'Manages chapter finances and budget',
    },
    {
      name: 'Board Member',
      role: 'Board Member',
      description: 'Represents chapter members on the board',
    },
  ]

  const committees = [
    'Finance',
    'BOT (Board of Trustees)',
    'Food Service',
    'Membership',
    'Publicity',
    'Scholarship',
    'Summer Camp',
    'Young Eagles/Eagles',
    'Youth Program',
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-eaa-blue mb-8">Board of Directors</h1>
      
      <div className="prose max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-eaa-blue mb-4">Current Board Members</h2>
          <p className="text-gray-700 mb-6">
            The EAA 690 Board of Directors is responsible for overseeing chapter operations, making strategic decisions,
            and ensuring the chapter continues to serve its members and the aviation community effectively.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {boardMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-eaa-yellow">
                <h3 className="text-xl font-bold text-eaa-blue mb-2">{member.role}</h3>
                <p className="text-gray-600 mb-2">{member.name}</p>
                <p className="text-gray-700 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-eaa-blue mb-4">Committees</h2>
          <p className="text-gray-700 mb-4">
            The board oversees various committees that manage different aspects of chapter operations:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {committees.map((committee, index) => (
              <li key={index}>{committee}</li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-eaa-blue mb-4">Board Meetings</h2>
          <p className="text-gray-700 mb-4">
            The Board of Directors meets regularly to discuss chapter business, review committee reports, and make
            decisions regarding chapter operations. Board meetings are typically held monthly.
          </p>
          <p className="text-gray-700 mb-4">
            For information about upcoming board meetings, please check our{' '}
            <a href="/chapter/agenda" className="text-eaa-light-blue hover:underline">agenda page</a> or{' '}
            <a href="/calendar" className="text-eaa-light-blue hover:underline">calendar</a>.
          </p>
        </section>

        <section className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-eaa-blue mb-4">Contact the Board</h3>
          <p className="text-gray-700 mb-4">
            If you have questions or concerns you&apos;d like to bring to the board&apos;s attention, please{' '}
            <a href="/contact" className="text-eaa-light-blue hover:underline">contact us</a> or attend a board meeting.
          </p>
          <p className="text-gray-700">
            Member-submitted items can be added to the board meeting agenda. Please contact us in advance to ensure
            your item is included.
          </p>
        </section>
      </div>
    </div>
  )
}


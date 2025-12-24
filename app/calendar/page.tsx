export default function CalendarPage() {
  const upcomingEvents = [
    {
      date: 'December 6, 2025',
      time: '8:00 AM - 10:00 AM',
      title: '1st Saturday Pancake Breakfast',
      description: 'Breakfast served 8:00 to 10:00 AM, Program at 10:00 AM',
      location: 'Briscoe Field (KLZU)',
    },
    {
      date: 'January 3, 2026',
      time: '8:00 AM - 10:00 AM',
      title: '1st Saturday Pancake Breakfast',
      description: 'Monthly pancake breakfast and aviation program',
      location: 'Briscoe Field (KLZU)',
    },
    {
      date: 'February 7, 2026',
      time: '8:00 AM - 10:00 AM',
      title: '1st Saturday Pancake Breakfast',
      description: 'Monthly pancake breakfast and aviation program',
      location: 'Briscoe Field (KLZU)',
    },
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-eaa-blue mb-8">Calendar</h1>

      <div className="space-y-6">
        {upcomingEvents.map((event, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-eaa-yellow">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <h2 className="text-2xl font-bold text-eaa-blue">{event.title}</h2>
              <div className="text-gray-600 mt-2 md:mt-0">
                <p className="font-semibold">{event.date}</p>
                <p>{event.time}</p>
              </div>
            </div>
            <p className="text-gray-700 mb-2">{event.description}</p>
            <p className="text-gray-600">
              <strong>Location:</strong> {event.location}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-blue-50 p-6 rounded-lg">
        <h2 className="text-xl font-bold text-eaa-blue mb-4">Regular Events</h2>
        <ul className="space-y-2 text-gray-700">
          <li>
            <strong>1st Saturday of each month:</strong> Pancake Breakfast and Aviation Program
          </li>
          <li>
            <strong>Monthly meetings:</strong> Check our newsletter for dates and times
          </li>
          <li>
            <strong>Fly-outs:</strong> Regularly scheduled throughout the year
          </li>
        </ul>
      </div>
    </div>
  )
}


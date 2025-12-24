export default function KudosPage() {
  const kudos = [
    {
      name: 'John Smith',
      title: 'Outstanding Volunteer',
      content: 'Thank you to John for his exceptional work organizing our recent fly-out event.',
      date: 'November 2025',
    },
    {
      name: 'Jane Doe',
      title: 'Young Eagles Coordinator',
      content: 'Jane has done an amazing job coordinating our Young Eagles program this year.',
      date: 'October 2025',
    },
    {
      name: 'Bob Johnson',
      title: 'Hangar Maintenance',
      content: 'Bob has been instrumental in keeping our hangar facilities in excellent condition.',
      date: 'September 2025',
    },
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-eaa-blue mb-8">Kudos</h1>

      <div className="mb-8">
        <p className="text-lg text-gray-700">
          Recognizing the outstanding contributions of our members and volunteers who make EAA 690 a success.
        </p>
      </div>

      <div className="space-y-6">
        {kudos.map((kudo, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-eaa-yellow">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h2 className="text-xl font-bold text-eaa-blue">{kudo.name}</h2>
                <p className="text-gray-600 font-semibold">{kudo.title}</p>
              </div>
              <span className="text-sm text-gray-500">{kudo.date}</span>
            </div>
            <p className="text-gray-700">{kudo.content}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-blue-50 p-6 rounded-lg">
        <h2 className="text-xl font-bold text-eaa-blue mb-4">Nominate Someone</h2>
        <p className="text-gray-700">
          Know someone who deserves recognition?{' '}
          <a href="/contact" className="text-eaa-light-blue hover:underline">Contact us</a> to nominate them for kudos.
        </p>
      </div>
    </div>
  )
}


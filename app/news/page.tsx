export default function NewsPage() {
  const newsItems = [
    {
      date: 'December 2025',
      title: 'December Pancake Breakfast Speaker Announced',
      content: 'Jeff Lange will present "Performance Enhancement for My Sonerai Skyeracer" at our December 6th breakfast program.',
    },
    {
      date: 'November 2025',
      title: 'Breakfast Price Update',
      content: 'Please note that breakfast prices have increased to $10/each. We appreciate your continued support!',
    },
    {
      date: 'October 2025',
      title: 'Gold Chapter Status Maintained',
      content: 'EAA 690 has once again achieved Gold Chapter status, recognizing our commitment to promoting aviation.',
    },
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-eaa-blue mb-8">News</h1>

      <div className="space-y-8">
        {newsItems.map((item, index) => (
          <article key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-500">{item.date}</span>
            </div>
            <h2 className="text-2xl font-bold text-eaa-blue mb-3">{item.title}</h2>
            <p className="text-gray-700">{item.content}</p>
          </article>
        ))}
      </div>

      <div className="mt-12 bg-blue-50 p-6 rounded-lg">
        <h2 className="text-xl font-bold text-eaa-blue mb-4">Stay Updated</h2>
        <p className="text-gray-700 mb-4">
          For the latest news and updates, be sure to check our{' '}
          <a href="/newsletter" className="text-eaa-light-blue hover:underline">newsletter</a> and follow us on social media.
        </p>
      </div>
    </div>
  )
}


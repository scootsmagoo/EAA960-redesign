export default function MediaPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-eaa-blue mb-8">Media</h1>

      <div className="mb-8">
        <p className="text-lg text-gray-700">
          Browse photos and videos from EAA 690 events, fly-outs, and activities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400">Photo Placeholder</span>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-eaa-blue">Event Photo {item}</h3>
              <p className="text-sm text-gray-600 mt-1">From our recent events</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 p-6 rounded-lg">
        <h2 className="text-xl font-bold text-eaa-blue mb-4">Share Your Photos</h2>
        <p className="text-gray-700 mb-4">
          Have photos from EAA 690 events? We&apos;d love to see them! Please{' '}
          <a href="/contact" className="text-eaa-light-blue hover:underline">contact us</a> to share your photos.
        </p>
      </div>
    </div>
  )
}


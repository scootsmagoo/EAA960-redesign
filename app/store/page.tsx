export default function StorePage() {
  const storeItems = [
    {
      name: 'EAA 690 T-Shirt',
      price: '$25.00',
      description: 'Official EAA 690 chapter t-shirt',
      image: '/placeholder-tshirt.jpg',
    },
    {
      name: 'EAA 690 Hat',
      price: '$20.00',
      description: 'Official EAA 690 chapter hat',
      image: '/placeholder-hat.jpg',
    },
    {
      name: 'Chapter Pin',
      price: '$5.00',
      description: 'EAA 690 chapter pin',
      image: '/placeholder-pin.jpg',
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-eaa-blue mb-8">Store</h1>

      <div className="mb-8">
        <p className="text-lg text-gray-700">
          Show your support for EAA 690 with our official chapter merchandise. All proceeds support chapter activities
          and programs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {storeItems.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-64 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400">Image Placeholder</span>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold text-eaa-blue mb-2">{item.name}</h2>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-eaa-blue">{item.price}</span>
                <button className="bg-eaa-yellow text-eaa-blue px-6 py-2 rounded-md font-semibold hover:bg-yellow-400 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-blue-50 p-6 rounded-lg">
        <h2 className="text-xl font-bold text-eaa-blue mb-4">Payment Information</h2>
        <p className="text-gray-700">
          All transactions are secured through Stripe, which is certified to the highest compliance standards.
          For questions about orders or to purchase items in person, please{' '}
          <a href="/contact" className="text-eaa-light-blue hover:underline">contact us</a>.
        </p>
      </div>
    </div>
  )
}


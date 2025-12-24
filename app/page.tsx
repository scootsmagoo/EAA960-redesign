import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold text-eaa-blue mb-6">
              Welcome to EAA 690
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              EAA 690 is a Chapter of the Experimental Aircraft Association, located at{' '}
              <strong>Briscoe Field (KLZU)</strong> in Lawrenceville, Georgia. A diverse chapter with over{' '}
              <strong>250 members</strong>, awarded EAA&apos;s top level{' '}
              <strong>Gold Chapter status</strong>, we offer a wide range of aviation-related activities on a regular basis.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              While the Pancake Breakfast and our monthly meetings are the norm, we are also heavily involved in youth education
              through EAA&apos;s Young Eagles program and our youth build programs, regularly conduct fly-outs, and host historical
              aircraft such as EAA&apos;s B-17 &quot;Aluminum Overcast&quot; and the Ford Tri-Motor.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Founded in 1980, the chapter is an <strong>IRS-approved 501(c)(3) non-profit entity</strong>.{' '}
              <Link href="/newsletter" className="text-eaa-light-blue underline hover:text-eaa-blue">
                Here&apos;s a link to our latest newsletter for your perusal…
              </Link>
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/donate"
                className="bg-eaa-yellow text-eaa-blue px-8 py-3 rounded-full font-bold text-lg hover:bg-yellow-400 transition-colors text-center"
              >
                DONATE TODAY!
              </Link>
              <Link
                href="/join"
                className="bg-eaa-yellow text-eaa-blue px-8 py-3 rounded-full font-bold text-lg hover:bg-yellow-400 transition-colors text-center"
              >
                Join/Renew EAA 690!
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-48 h-48 bg-eaa-yellow rounded-full flex items-center justify-center shadow-lg">
              <div className="text-center">
                <div className="text-eaa-blue font-bold text-2xl mb-2">GOLD</div>
                <div className="text-eaa-blue font-bold text-xl">CHAPTER</div>
                <div className="text-eaa-blue text-sm mt-2">EAA 020-202</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pancake Breakfast Section */}
      <section className="bg-eaa-blue text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">
            1ST SATURDAY PANCAKE BREAKFAST AND AVIATION PROGRAM
          </h2>
          <div className="text-center space-y-4">
            <p className="text-lg">
              Hosted by the Gwinnett EAA Chapter 690 of the Experimental Aircraft Association.
            </p>
            <div className="bg-white text-eaa-blue p-6 rounded-lg max-w-2xl mx-auto">
              <p className="text-2xl font-bold mb-2">December 6, 2025</p>
              <p className="text-xl mb-4">Breakfast served 8:00 to 10:00 AM</p>
              <p className="text-xl mb-4">Program at 10:00 AM</p>
              <p className="text-red-600 font-bold text-lg">
                ⚠️ PLEASE NOTE: BREAKFAST HAS INCREASED TO $10/EACH!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* December Presentation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-eaa-blue mb-4">DECEMBER 6 PRESENTATION</h2>
          <h3 className="text-xl font-bold text-gray-800 mb-6">Jeff Lange</h3>
          <h4 className="text-lg font-semibold text-gray-700 mb-4">
            &quot;Performance Enhancement for My Sonerai Skyeracer&quot;
          </h4>
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-4">
              Jeff started flying in 1997, after a few years of being an avid RC model builder and flyer. He possesses an
              academic background in both music and Aircraft Maintenance (A&P).
            </p>
            <p className="text-gray-700 mb-4">
              Jeff has +30 years as an application engineer for large audio system installations, such as arenas and stadiums.
            </p>
            <p className="text-gray-700 mb-4">
              He started building his Sonerai soon after obtaining his PPL in 1998 and first flew it in 2003. For nine years
              Jeff was a crew chief at the Reno Air Races maintaining a Thunder Mustang, RV Rocket 6, Super Glasair and a L-39 Jet.
            </p>
            <p className="text-gray-700">
              He is currently working on five other aircraft projects. The next one slated for completion is a Glasair 1 TD.
            </p>
            <p className="text-gray-700 mt-4">
              Jeff also finds time between work and 5 airplane projects to fly his Sonerai I and IIL.
            </p>
          </div>
        </div>
      </section>

      {/* Cookie Consent Banner Component */}
      <CookieBanner />
    </div>
  )
}

function CookieBanner() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          By using this website, you agree to our use of cookies. We use cookies to provide you with a great experience and to
          help our website run effectively.
        </p>
        <div className="flex gap-3">
          <button className="bg-white text-gray-800 px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors">
            Accept
          </button>
          <button className="bg-gray-700 text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-600 transition-colors">
            Decline
          </button>
        </div>
      </div>
    </div>
  )
}


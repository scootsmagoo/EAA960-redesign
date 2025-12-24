import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-eaa-blue text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Image
              src="/logo.png"
              alt="EAA 690 Logo"
              width={80}
              height={80}
              className="h-20 w-auto mb-4"
            />
            <h3 className="text-lg font-bold mb-4">EAA 690</h3>
            <p className="text-sm text-gray-300">
              A Chapter of the Experimental Aircraft Association, located at Briscoe Field (KLZU) in Lawrenceville, Georgia.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/chapter" className="hover:text-eaa-yellow transition-colors">
                  Chapter Info
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-eaa-yellow transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/calendar" className="hover:text-eaa-yellow transition-colors">
                  Calendar
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-eaa-yellow transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <p className="text-sm text-gray-300">
              690 Airport Road<br />
              Hangar 1, Briscoe Field<br />
              Lawrenceville, Ga. 30046<br />
              <a href="tel:4048572492" className="hover:text-eaa-yellow transition-colors">
                (404) 857-2492
              </a>
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-300">
          <p>© {new Date().getFullYear()} EAA 690. All rights reserved.</p>
          <p className="mt-2">Founded in 1980. IRS-approved 501(c)(3) non-profit entity.</p>
        </div>
      </div>
    </footer>
  )
}


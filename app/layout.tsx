import type { Metadata } from 'next'
import { PT_Serif } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const ptSerif = PT_Serif({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pt-serif',
})

export const metadata: Metadata = {
  title: 'EAA 690 - Experimental Aircraft Association Chapter 690',
  description: 'EAA 690 is a Chapter of the Experimental Aircraft Association, located at Briscoe Field (KLZU) in Lawrenceville, Georgia.',
  icons: {
    icon: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={ptSerif.className}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}


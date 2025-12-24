'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-eaa-blue mb-8">Contact Us</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-bold text-eaa-blue mb-6">Get in Touch</h2>
          
          <div className="space-y-4 mb-8">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Location</h3>
              <p className="text-gray-700">
                690 Airport Road<br />
                Hangar 1, Briscoe Field<br />
                Lawrenceville, Ga. 30046
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Phone</h3>
              <p className="text-gray-700">
                <a href="tel:4048572492" className="text-eaa-light-blue hover:underline">
                  (404) 857-2492
                </a>
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-700">
                <a href="mailto:info@eaa690.org" className="text-eaa-light-blue hover:underline">
                  info@eaa690.org
                </a>
              </p>
            </div>
          </div>

          <div className="bg-eaa-blue text-white p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-4">Visit Us</h3>
            <p className="mb-4">
              We welcome visitors! Our chapter meets regularly, and we&apos;d love to have you join us. Check our{' '}
              <a href="/calendar" className="text-eaa-yellow hover:underline">calendar</a> for upcoming events.
            </p>
            <p>
              All transactions are secured through Stripe, which is certified to the highest compliance standards.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold text-eaa-blue mb-6">Send us a Message</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-eaa-blue focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-eaa-blue focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-eaa-blue focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject *
              </label>
              <select
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-eaa-blue focus:border-transparent"
              >
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="membership">Membership</option>
                <option value="programs">Programs</option>
                <option value="events">Events</option>
                <option value="donation">Donation</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-eaa-blue focus:border-transparent"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-eaa-yellow text-eaa-blue px-6 py-3 rounded-md font-bold hover:bg-yellow-400 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}


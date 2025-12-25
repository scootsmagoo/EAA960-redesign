'use client'

import { useState } from 'react'

export default function YoungEaglesPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    childName: '',
    childAge: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    const mailtoLink = `mailto:brian.falony@eaa690.org?subject=Young Eagles Inquiry from ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0AChild's Name: ${formData.childName}%0D%0AChild's Age: ${formData.childAge}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`
    window.location.href = mailtoLink
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-eaa-blue mb-8">Young Eagles Program</h1>
      
      <div className="prose max-w-none">
        <p className="text-lg text-gray-700 mb-6">
          The Young Eagles program was launched in 1992 to give interested young people, ages 8-17, an opportunity to
          go flying in a general aviation airplane. These flights are offered free of charge and are made possible through
          the generosity of EAA member volunteer pilots who participate in the Young Eagles program.
        </p>

        <h2 className="text-2xl font-bold text-eaa-blue mt-8 mb-4">What to Expect</h2>
        <p className="text-gray-700 mb-4">
          During a Young Eagles flight, a young person will:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
          <li>Receive a pre-flight walk-around of the aircraft</li>
          <li>Learn about the aircraft and how it works</li>
          <li>Experience the joy of flight</li>
          <li>Receive a certificate and logbook entry</li>
          <li>Become eligible for free online ground school</li>
        </ul>

        <h2 className="text-2xl font-bold text-eaa-blue mt-8 mb-4">How to Participate</h2>
        <p className="text-gray-700 mb-6">
          Young Eagles flights are typically offered during our monthly pancake breakfast events and other special
          occasions. To register for a flight, please use the contact form below or check our{' '}
          <a href="/calendar" className="text-eaa-light-blue hover:underline">calendar</a> for upcoming events.
        </p>

        <div className="bg-eaa-yellow text-eaa-blue p-6 rounded-lg mt-8">
          <h3 className="text-xl font-bold mb-2">Important Information</h3>
          <p className="mb-2">
            <strong>Age Requirement:</strong> Participants must be between 8 and 17 years old
          </p>
          <p className="mb-2">
            <strong>Parental Consent:</strong> A parent or guardian must be present and sign a consent form
          </p>
          <p>
            <strong>Weather:</strong> Flights are subject to weather conditions and pilot availability
          </p>
        </div>

        <section className="mt-8">
          <h2 className="text-2xl font-bold text-eaa-blue mb-4">Contact the Young Eagles Coordinator</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-700 mb-4">
              For questions about the Young Eagles program or to register for a flight, please contact:
            </p>
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold text-eaa-blue mb-2">Brian Falony</h3>
              <p className="text-gray-700 mb-2">Chapter Young Eagles Coordinator</p>
              <p className="text-gray-700 mb-4">
                <a 
                  href="mailto:brian.falony@eaa690.org" 
                  className="text-eaa-light-blue hover:underline font-semibold"
                >
                  E-mail Brian
                </a>
              </p>
              <p className="text-sm text-gray-600">
                Brian can help you with registration, answer questions about the program, and provide information
                about upcoming Young Eagles flight opportunities.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name *
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
                  Your Email *
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
                  Phone Number
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
                <label htmlFor="childName" className="block text-sm font-medium text-gray-700 mb-1">
                  Child&apos;s Name *
                </label>
                <input
                  type="text"
                  id="childName"
                  name="childName"
                  required
                  value={formData.childName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-eaa-blue focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="childAge" className="block text-sm font-medium text-gray-700 mb-1">
                  Child&apos;s Age *
                </label>
                <input
                  type="number"
                  id="childAge"
                  name="childAge"
                  required
                  min="8"
                  max="17"
                  value={formData.childAge}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-eaa-blue focus:border-transparent"
                />
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
                  placeholder="Please include any questions, preferred dates, or special considerations..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-eaa-blue focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-eaa-yellow text-eaa-blue px-6 py-3 rounded-md font-bold hover:bg-yellow-400 transition-colors"
              >
                Send Message to Brian
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  )
}


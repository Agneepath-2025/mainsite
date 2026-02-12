'use client';

import Link from 'next/link';
import AboutUsSection from './home-components/about-us';
import CampusMap from './home-components/CampusMap';
import { SectionActivationProvider } from './home-components/SectionActivationContext';
import ReelSection from './home-components/ReelSection';
import EventSection from './home-components/EventSection';

export default function Home() {
  return (
    <SectionActivationProvider>
      {/* Beige background */}
      <div className="fixed inset-0 z-0" style={{ backgroundColor: '#f3ebe0' }} />
      
      <main className="relative z-20 min-h-screen overflow-auto">
        {/* Hero Reel Section */}
        <ReelSection src="/reel.webm" shrinkRange={600} />

        {/* About Us Section */}
        <section className="w-full py-8 md:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <AboutUsSection />
          </div>
        </section>

        {/* Events Section */}
        <section className="w-full py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-4xl sm:text-6xl font-bold mb-8 sm:mb-12 text-center" style={{ color: '#242a4a' }}>
              SPORT EVENTS
            </h2>
            <EventSection />
          </div>
        </section>

        {/* Campus Map Section */}
        <section className="w-full py-8 md:py-12" style={{ backgroundColor: '#1a2a5e' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-4xl sm:text-6xl font-bold mb-8 sm:mb-12 text-center" style={{ color: '#ffffff' }}>
              CAMPUS MAP
            </h2>
            <div>
              <CampusMap />
            </div>
          </div>
        </section>

        {/* Contact & Footer Section */}
        <section className="w-full bg-gray-900 text-white py-6 md:py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center" style={{ color: '#ffffff' }}>
              Get in Touch
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">
              {/* Quick Links */}
              <div>
                <h3 className="text-sm font-bold mb-3" style={{ color: '#d74f2a' }}>
                  Quick Links
                </h3>
                <ul className="space-y-1 text-xs md:text-sm">
                  <li>
                    <Link href="/" className="text-gray-300 hover:text-white transition">
                      Home
                    </Link>
                  </li>
                  <li>
                    <a href="https://docs.google.com/spreadsheets/d/1g4IkiOpeFkf-dH0b8FSKZ1uDoicRNHV5rVANyc8ZyYY/edit?usp=sharing" className="text-gray-300 hover:text-white transition">
                      Accommodations
                    </a>
                  </li>
                  <li>
                    <a href="/gallery" className="text-gray-300 hover:text-white transition">
                      Gallery
                    </a>
                  </li>
                  <li>
                    <a href="/live-scores" className="text-gray-300 hover:text-white transition">
                      Live Scores
                    </a>
                  </li>
                  <li>
                    <a href="/meet-the-team" className="text-gray-300 hover:text-white transition">
                      Meet The Team
                    </a>
                  </li>
                  <li>
                    <a href="/policy-guidelines" className="text-gray-300 hover:text-white transition">
                      Policy & Guidelines
                    </a>
                  </li>
                </ul>
              </div>

              {/* Location */}
              <div>
                <h3 className="text-sm font-bold mb-3" style={{ color: '#d74f2a' }}>
                  Location
                </h3>
                <div className="text-gray-300 text-xs md:text-sm leading-relaxed">
                  <p className="font-semibold mb-2">Ashoka University</p>
                  <p>Plot No. 2, Rajiv Gandhi Education City</p>
                  <p>P.O. Rai, Sonepat</p>
                  <p>Haryana - 131029 (India)</p>
                  {/* Phone Number */}
                  <p className="mt-2 font-semibold">Phone Number: +91 97173 67728</p>
                </div>
              </div>

              {/* Social / Email */}
              <div className="flex justify-center md:justify-end gap-4 sm:justify-start md:justify-end pt-2 sm:pt-0 sm:col-span-2 md:col-span-1">
                <a 
                  href="mailto:agneepath@ashoka.edu.in" 
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-opacity-20 hover:bg-orange-500 transition duration-300"
                  style={{ backgroundColor: '#d74f2a', opacity: 0.9 }}
                  title="Email"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.instagram.com/ashokaagneepath/" 
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-opacity-20 hover:bg-orange-500 transition duration-300"
                  style={{ backgroundColor: '#d74f2a', opacity: 0.9 }}
                  title="Instagram"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center text-gray-500 text-xs border-t border-gray-700 mt-6 sm:mt-8 pt-4 sm:pt-5">
              <p>&copy; {new Date().getFullYear()} Agneepath. All rights reserved.</p>
            </div>
          </div>
        </section>
      </main>
    </SectionActivationProvider>
  );
}

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4" style={{ color: '#d74f2a' }}>
              Agneepath
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              A sports festival celebrating excellence, teamwork, and the spirit of competition across our campus.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4" style={{ color: '#d74f2a' }}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/accommodations" className="text-gray-300 hover:text-white transition">
                  Accommodations
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-white transition">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/live-scores" className="text-gray-300 hover:text-white transition">
                  Live Scores
                </Link>
              </li>
              <li>
                <Link href="/meet-the-team" className="text-gray-300 hover:text-white transition">
                  Meet The Team
                </Link>
              </li>
              <li>
                <Link href="/policy-guidelines" className="text-gray-300 hover:text-white transition">
                  Policy & Guidelines
                </Link>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-lg font-bold mb-4" style={{ color: '#d74f2a' }}>
              Location
            </h3>
            <div className="text-gray-300 text-sm leading-relaxed">
              <p className="font-semibold mb-2">Ashoka University</p>
              <p>Plot No. 2</p>
              <p>Rajiv Gandhi Education City</p>
              <p>National Capital Region</p>
              <p>P.O. Rai, Sonepat</p>
              <p>Haryana - 131029</p>
              <p>(India)</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Agneepath. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

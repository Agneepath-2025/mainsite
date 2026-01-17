'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/meet-the-team", label: "Meet the Team" },
    { href: "/live-scores", label: "Live Scores" },
    { href: "/accommodations", label: "Accommodation" },
    { href: "/policy-guidelines", label: "Policy & Guidelines" },
    { href: "/gallery", label: "Gallery" },
  ];

  return (
    <header className="sticky top-0 z-50 p-4" style={{ backgroundColor: '#2C355D' }}>
      <div className="max-w-7xl mx-auto flex items-center justify-between md:justify-start">
        {/* LEFT: LOGO */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0">
          <Image
            src="/logo-final.png"
            alt="Agneepath"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="text-lg font-semibold" style={{ color: '#F3EBE0' }}>
            Agneepath
          </span>
        </Link>

        {/* MIDDLE: PAGES - Desktop only - Always visible on md and up */}
        {!isMobile && (
          <nav className="flex items-center gap-8 ml-32">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base transition hover:text-orange-400"
                style={{ color: '#F3EBE0' }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}

        {/* RIGHT: REGISTER + Mobile Menu Button */}
        <div className="flex items-center gap-4 ml-auto md:ml-0">
          {/* Desktop Register Button */}
          {!isMobile && (
            <Link
              href="https://register.agneepath.co.in/"
              className="bg-orange-500 hover:bg-orange-600 text-white text-base px-5 py-2 rounded-full font-medium transition"
            >
              Register
            </Link>
          )}

          {/* Mobile Menu Button - Only on mobile */}
          {isMobile && (
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-10 h-10 hover:bg-gray-700 rounded-md transition flex items-center justify-center"
              aria-label="Toggle menu"
              type="button"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
                style={{ color: '#F3EBE0' }}
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu - Only on mobile */}
      {isMobile && isMenuOpen && (
        <div className="border-t border-gray-700" style={{ backgroundColor: '#2C355D' }}>
          <nav className="px-4 py-2 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm py-2 px-3 hover:bg-gray-700 hover:text-orange-400 rounded-md transition"
                style={{ color: '#F3EBE0' }}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://register.agneepath.co.in/"
              className="block bg-orange-500 hover:bg-orange-600 text-white text-sm px-3 py-2 rounded-full font-medium text-center transition mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Register
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

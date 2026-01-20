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
    {
      href: "https://docs.google.com/spreadsheets/d/1g4IkiOpeFkf-dH0b8FSKZ1uDoicRNHV5rVANyc8ZyYY",
      label: "Accommodation",
      external: true,
    },
    { href: "/policy-guidelines", label: "Policy & Guidelines" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact-us", label: "Contact Us" },
  ];

  return (
    <header className="sticky top-0 z-50 p-4" style={{ backgroundColor: '#2C355D' }}>
      <div className="max-w-7.5xl mx-auto flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0">
          <Image
            src="/logo-final.png"
            alt="Agneepath"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="text-lg font-semibold" style={{ color: '#F3EBE0' }}>
            AGNEEPATH
          </span>
        </Link>

        {/* DESKTOP NAV */}
        {!isMobile && (
          <nav className="flex items-center gap-10 flex-1 justify-center">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base transition hover:text-orange-400"
                  style={{ color: '#F3EBE0' }}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base transition hover:text-orange-400"
                  style={{ color: '#F3EBE0' }}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>
        )}

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-25">
          {!isMobile && (
            <Link
              href="https://register.agneepath.co.in/"
              className="bg-orange-500 hover:bg-orange-600 text-white text-base px-5 py-2 rounded-full font-medium transition"
            >
              Register
            </Link>
          )}

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

      {/* MOBILE MENU */}
      {isMobile && isMenuOpen && (
        <div className="border-t border-gray-700" style={{ backgroundColor: '#2C355D' }}>
          <nav className="px-4 py-2 space-y-1">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm py-2 px-3 hover:bg-gray-700 hover:text-orange-400 rounded-md transition"
                  style={{ color: '#F3EBE0' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm py-2 px-3 hover:bg-gray-700 hover:text-orange-400 rounded-md transition"
                  style={{ color: '#F3EBE0' }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}

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

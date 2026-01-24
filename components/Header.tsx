'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
        {/* LOGO - pushed to left */}
        <Link href="/" className="flex items-center gap-5 flex-shrink-0">
          <Image src="/logo-final.png" alt="Agneepath" width={40} height={40} />
          <span className="text-lg font-semibold text-[#F3EBE0] whitespace-nowrap pr-18">
            AGNEEPATH
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex flex-wrap items-center gap-9 flex-1 justify-start">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base flex-shrink-0 transition hover:text-orange-400 text-[#F3EBE0] whitespace-nowrap"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-base flex-shrink-0 transition hover:text-orange-400 text-[#F3EBE0] whitespace-nowrap"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* RIGHT SIDE REGISTER / HAMBURGER */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <Link
            href="https://register.agneepath.co.in/"
            className="hidden md:block bg-orange-500 hover:bg-orange-600 text-white text-base px-5 py-2 rounded-full font-medium transition whitespace-nowrap"
          >
            Register
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 hover:bg-gray-700 rounded-md transition flex items-center justify-center"
            aria-label="Toggle menu"
            type="button"
          >
            <svg
              className="w-6 h-6 text-[#F3EBE0]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-700" style={{ backgroundColor: '#2C355D' }}>
          <nav className="px-4 py-2 space-y-1">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-sm py-2 px-3 rounded-md transition hover:bg-gray-700 hover:text-orange-400 text-[#F3EBE0]"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-sm py-2 px-3 rounded-md transition hover:bg-gray-700 hover:text-orange-400 text-[#F3EBE0]"
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              href="https://register.agneepath.co.in/"
              onClick={() => setIsMenuOpen(false)}
              className="block mt-2 bg-orange-500 hover:bg-orange-600 text-white text-sm px-3 py-2 rounded-full text-center font-medium transition"
            >
              Register
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

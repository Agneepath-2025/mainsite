'use client';

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b" style={{ backgroundColor: 'var(--background)', borderColor: '#e0d5c7' }}>
      <div className="max-w-7xl mx-auto h-20 px-4 flex items-center">

        {/* LEFT: LOGO */}
        <Link href="/" className="flex items-center gap-3">
         <Image
  src="/logo-final.png"
  alt="Agneepath"
  width={40}
  height={40}
  className="object-contain"
/>

          <span className="text-lg font-semibold" style={{ color: 'var(--agneepath-primary-dark)' }}>
            Agneepath
          </span>
        </Link>

        {/* MIDDLE: PAGES */}
       <nav className="flex items-center gap-8 ml-32">

          <Link href="/" className="text-base hover:transition-colors" style={{ color: 'var(--agneepath-secondary-dark)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--agneepath-accent-orange)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--agneepath-secondary-dark)'}>Home</Link>
          <Link href="/meet-the-team" className="text-base hover:transition-colors" style={{ color: 'var(--agneepath-secondary-dark)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--agneepath-accent-orange)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--agneepath-secondary-dark)'}>Meet the Team</Link>
          <Link href="/live-scores" className="text-base hover:transition-colors" style={{ color: 'var(--agneepath-secondary-dark)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--agneepath-accent-orange)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--agneepath-secondary-dark)'}>Live Scores</Link>
          <Link href="/accommodations" className="text-base hover:transition-colors" style={{ color: 'var(--agneepath-secondary-dark)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--agneepath-accent-orange)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--agneepath-secondary-dark)'}>Accommodation</Link>
          <Link href="/policy-guidelines" className="text-base hover:transition-colors" style={{ color: 'var(--agneepath-secondary-dark)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--agneepath-accent-orange)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--agneepath-secondary-dark)'}>Policy & Guidelines</Link>
          <Link href="/gallery" className="text-base hover:transition-colors" style={{ color: 'var(--agneepath-secondary-dark)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--agneepath-accent-orange)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--agneepath-secondary-dark)'}>Gallery</Link>
        </nav>

        {/* RIGHT: REGISTER */}
        <div className="ml-auto">
          <Link
            href="https://register.agneepath.co.in/"
            className="text-white text-base px-5 py-2 rounded-full font-medium hover:shadow-lg transition-all"
            style={{ backgroundColor: 'var(--agneepath-accent-orange)' }}
          >
            Register
          </Link>
        </div>

      </div>
    </header>
  );
}

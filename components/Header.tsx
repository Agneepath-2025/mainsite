import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#1f2a44] border-b border-white/10">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center">
        {/* LEFT: LOGO */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/logo-final.png"
            alt="Agneepath logo"
            width={60}
            height={40}
            className="object-contain"
          />
        </Link>

        {/* NAV: PAGES */}
        <nav className="hidden md:flex items-center gap-8 ml-30">
          <Link href="/" className="text-white/80 hover:text-white transition">
            Home
          </Link>

          <Link
            href="/meet-the-team"
            className="text-white/80 hover:text-white transition"
          >
            Meet the Team
          </Link>

          <Link
            href="/live-scores"
            className="text-white/80 hover:text-white transition"
          >
            Live Scores
          </Link>

          {/* CHANGED */}
          <Link
            href="/accommodation"
            className="text-white/80 hover:text-white transition"
          >
            Accommodation
          </Link>

          <Link
            href="/policy-guidelines"
            className="text-white/80 hover:text-white transition"
          >
            Policy & Guidelines
          </Link>

          <Link
            href="/gallery"
            className="text-white/80 hover:text-white transition"
          >
            Gallery
          </Link>

          <Link
            href="/contact-us"
            className="text-white/80 hover:text-white transition"
          >
            Contact Us
          </Link>
        </nav>

        {/* RIGHT: REGISTER */}
        <div className="ml-auto shrink-0">
          <Link
            href="https://register.agneepath.co.in/"
            className="rounded-full bg-[#ff6e1a] text-white px-5 py-2 font-medium hover:bg-white/90 transition"
          >
            Register
          </Link>
        </div>
      </div>
    </header>
  );
}

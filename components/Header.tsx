import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#242A4A] border-b border-white/10">
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
          <span className="text-white text-lg font-semibold">
            Agneepath
          </span>
        </Link>

        {/* MIDDLE: PAGES */}
        <nav className="flex items-center gap-8 ml-32">
          <Link href="/" className="text-white/90 hover:text-white">Home</Link>
          <Link href="/meet-the-team" className="text-white/90 hover:text-white">Meet the Team</Link>
          <Link href="/live-scores" className="text-white/90 hover:text-white">Live Scores</Link>
          <Link href="/accommodations" className="text-white/90 hover:text-white">Accommodation</Link>
          <Link href="/policy-guidelines" className="text-white/90 hover:text-white">
            Policy & Guidelines
          </Link>
          <Link href="/gallery" className="text-white/90 hover:text-white">Gallery</Link>
        </nav>

        {/* RIGHT: REGISTER */}
        <div className="ml-auto">
          <Link
            href="https://register.agneepath.co.in/"
            className="bg-white text-[#242A4A] hover:bg-white/90 px-5 py-2 rounded-full font-medium"
          >
            Register
          </Link>
        </div>

      </div>
    </header>
  );
}

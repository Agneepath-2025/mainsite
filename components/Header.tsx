import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black">
      <div className="max-w-7xl mx-auto h-14 px-6 flex items-center">

        {/* LEFT: LOGO */}
        <Link href="/" className="flex items-center gap-10">
          <Image
            src="/logo.png"
            alt="Agneepath"
            width={24}
            height={24}
          />
          <span className="text-white text-lg font-semibold">
            Agneepath
          </span>
        </Link>

        {/* MIDDLE: PAGES */}
        <nav className="flex items-center gap-8 ml-8">
          <Link href="/" className="text-white text-base">Home</Link>
          <Link href="/meet-the-team" className="text-white text-base">Meet the Team</Link>
          <Link href="/live-scores" className="text-white text-base">Live Scores</Link>
          <Link href="/accommodations" className="text-white text-base">Accommodation</Link>
          <Link href="/sponsors" className="text-white text-base">Sponsors</Link>
          <Link href="/gallery" className="text-white text-base">Gallery</Link>
        </nav>

        {/* RIGHT: REGISTER */}
        <div className="ml-auto">
          <Link
            href="https://register.agneepath.co.in/SignIn"
            className="bg-orange-500 hover:bg-orange-600 text-white text-base px-5 py-2 rounded-full font-medium"
          >
            Register
          </Link>
        </div>

      </div>
    </header>
  );
}

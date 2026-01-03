import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
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

          <span className="text-black text-lg font-semibold">
            Agneepath
          </span>
        </Link>

        {/* MIDDLE: PAGES */}
       <nav className="flex items-center gap-8 ml-32">

          <Link href="/" className="text-black text-base hover:text-orange-500">Home</Link>
          <Link href="/meet-the-team" className="text-black text-base hover:text-orange-500">Meet the Team</Link>
          <Link href="/live-scores" className="text-black text-base hover:text-orange-500">Live Scores</Link>
          <Link href="/accommodations" className="text-black text-base hover:text-orange-500">Accommodation</Link>
          <Link href="/policy-guidelines" className="text-black text-base hover:text-orange-500">Policy & Guidelines</Link>
          <Link href="/gallery" className="text-black text-base hover:text-orange-500">Gallery</Link>
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

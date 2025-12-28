"use client";

import AnimatedHeroBackground from "@/components/AnimatedHeroBackground";

export default function AccommodationsPage() {
  return (
    <main className="min-h-screen">
      {/* HERO SECTION */}
      <section className="relative min-h-[45vh] pt-28 md:pt-32 bg-gradient-to-br from-orange-50 via-white to-yellow-50 flex items-center overflow-hidden">
        <AnimatedHeroBackground />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-orange-600 mb-4">
            Accommodation & Travel
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Accommodation information for participants attending Agneepath 7.0.
          </p>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div
            className="border rounded-2xl p-16 text-center bg-orange-50
                       transition-all duration-300
                       hover:bg-orange-100 hover:border-orange-400 hover:shadow-md"
          >
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-orange-500 text-white text-2xl">
              🏨
            </div>

            <h2 className="text-3xl font-semibold text-black mb-2">
              Accommodation Allotment
            </h2>

            <p className="text-gray-600 max-w-md mx-auto mb-8">
              Accommodation details are available in a private sheet shared with
              registered participants.
            </p>

            <a
              href="https://docs.google.com/spreadsheets/d/1g4IkiOpeFkf-dH0b8FSKZ1uDoicRNHV5rVANyc8ZyYY"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-orange-500 px-8 py-3 text-white text-lg font-medium hover:bg-orange-600 transition"
            >
              Open Accommodation Sheet
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-800 bg-black">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <p className="text-center text-sm text-gray-400">
            Developed by{" "}
            <a
              href="https://github.com/shristi2217/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white hover:text-orange-400 hover:underline transition-colors"
            >
              Shristi Sharma
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}

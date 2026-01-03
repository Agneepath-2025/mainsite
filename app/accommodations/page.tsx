"use client";

import { motion } from "framer-motion";
/*import AnimatedHeroBackground from "@/components/AnimatedHeroBackground";*/

export default function AccommodationsPage() {
  return (
    <main className="min-h-screen bg-[#242A4A]">
     
      {/* HERO SECTION */}
      <section className="relative min-h-[45vh] pt-28 md:pt-32 flex items-center bg-[#242A4A] overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 max-w-6xl mx-auto px-6 text-center"
        >
          <h1 className="text-5xl font-bold text-white mb-4">
            Accommodation
          </h1>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Accommodation information for participants attending Agneepath 7.0.
          </p>
        </motion.div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-16 bg-[#242A4A]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-xl p-16 text-center bg-[#2C355D] ring-1 ring-white/5">

            <h2 className="text-3xl font-semibold text-white mb-2">
              Accommodation Allotment
            </h2>

            <p className="text-gray-300 max-w-md mx-auto mb-8">
              Accommodation details are available in a private sheet shared with
              registered participants.
            </p>

            <a
              href="https://docs.google.com/spreadsheets/d/1g4IkiOpeFkf-dH0b8FSKZ1uDoicRNHV5rVANyc8ZyYY"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-[#FFA543] px-8 py-3 text-black text-lg font-medium
                         hover:bg-[#FFB866] transition"
            >
              Open Accommodation Sheet
            </a>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-700 bg-black">
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

"use client";

import { motion } from "framer-motion";

export default function AccommodationsPage() {
  return (
    <main className="min-h-screen bg-[#fefcfb] text-gray-800">

      {/* PAGE HEADER */}
      <section className="pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto px-6 text-center"
        >
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#242A4A] mb-6 tracking-tight">
  ACCOMMODATION
</h1>

<p className="font-normal text-gray-600">
  Here’s a curated list of accommodation options near Ashoka.
</p>

        </motion.div>
      </section>

      {/* ACCOMMODATION CARD */}
      <section className="pb-32 px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="
            bg-[#2c355d]
            rounded-2xl
            shadow-lg
            max-w-6xl
            mx-auto
            text-center
            flex
            flex-col
            justify-center
            min-h-[320px]
            px-10
            py-16
          "
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            NOTE:
          </h2>

          {/* ORANGE ACCENT */}
          <div className="h-1 w-16 bg-orange-400 mx-auto mb-8" />

          <p className="mb-10 text-sm md:text-base text-gray-300 italic leading-relaxed max-w-3xl mx-auto">
  NOTE: Ashoka University will not be providing accommodation to athletes. However, please find a list of recommended hotels near the Ashoka campus. Ashoka University or Agneepath shall not be responsible for any delays or cancellations by the hotels. Kindly book your stay by yourself in advance. Ashoka shuttles will run to and from Azadpur Metro Station and the recommended hotels. The transport schedule will be shared closer to the dates of the events and shall depend on the match schedule.
</p>

          <a
            href="https://docs.google.com/spreadsheets/d/1g4IkiOpeFkf-dH0b8FSKZ1uDoicRNHV5rVANyc8ZyYY"
            target="_blank"
            rel="noopener noreferrer"
            className="
              mx-auto
              inline-flex
              items-center
              justify-center
              h-12
              w-[220px]
              rounded-full
              bg-white
              text-[#2c355d]
              text-base
              font-medium
              hover:bg-white/90
              transition
            "
          >
            Open Allotment Sheet
          </a>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 bg-[#fefcfb]">
  <div className="max-w-7xl mx-auto px-6 py-6">
    <p className="text-center text-sm text-gray-500">
      Developed by{" "}
      <a
        href="https://github.com/shristi2217"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-[#242A4A] transition-colors hover:text-[#ff6e1a]"
      >
        Shristi Sharma
      </a>
    </p>
  </div>
</footer>
    </main>
  );
}

"use client";

import { motion } from "framer-motion";

export default function LiveScoresPage() {
  return (
    <main className="min-h-screen bg-[#fefcfb] text-gray-800">

      {/* HERO SECTION — SAME AS ABOUT US */}
      <section className="relative min-h-[45vh] pt-24 md:pt-20 flex items-center bg-[#fefcfb]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto px-6 text-center"
        >
         <h1 className="text-5xl md:text-6xl font-extrabold text-[#242A4A] mb-6 tracking-tight">
  LIVE SCORES
</h1>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Track real-time scores and updates from all events at Agneepath 7.0.
          </p>
        </motion.div>
      </section>

      {/* CONTENT */}
      {/* CONTENT */}
<section className="py-20">
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    className="
      max-w-6xl
      mx-auto
      px-10
      bg-[#2c355d]
      rounded-2xl
      shadow-lg
      text-center
      flex
      flex-col
      justify-center
      min-h-[320px]
      py-20
    "
  >
    <h2 className="text-3xl font-bold text-white mb-6">
      Coming Soon
    </h2>

    <div className="h-1 w-24 bg-orange-400 mx-auto mb-8" />

    <p className="text-gray-200 text-lg leading-relaxed max-w-3xl mx-auto">
      Live score tracking will be available during the event. Stay tuned
      for real-time updates across all matches and competitions.
    </p>
  </motion.div>
</section>


      {/* FOOTER */}
      <footer className="border-t border-gray-200 bg-[#fefcfb]">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <p className="text-center text-sm text-gray-500">
            Developed by{" "}
            <span className="font-semibold text-[#242A4A]">
              Nitin S
            </span>
          </p>
        </div>
      </footer>

    </main>
  );
}

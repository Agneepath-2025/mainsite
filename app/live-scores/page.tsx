"use client";

import { motion } from "framer-motion";

export default function LiveScoresPage() {
  return (
    <main className="min-h-screen bg-[#fefcfb] text-gray-800">
      {/* HERO SECTION */}
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
      <section className="py-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-7xl mx-auto px-6"
        >
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden" style={{ height: 'calc(100vh - 200px)', minHeight: '600px' }}>
            <iframe
              src="https://playfanup.in/tournaments?fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnkY7WEwUuRJAZJJ_KtH1VsjX3ERTHJWjn4Mtz2hzRQDlieNh8j0IVRucfOwU_aem_GkHPxGABwJkWaxf0V5Lsyw"
              className="w-full h-full border-0"
              title="Live Tournament Scores"
              allowFullScreen
            />
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 bg-[#fefcfb]">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <p className="text-center text-sm text-gray-500">
            Developed by{" "}
            <a
              href="https://github.com/28nitin07"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#242A4A] transition-colors hover:text-[#ff6e1a]"
            >
              Nitin S
            </a>
            {" and "}
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

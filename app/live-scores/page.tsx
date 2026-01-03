"use client";

import { motion } from "framer-motion";
import { Trophy, Clock } from "lucide-react";

import AnimatedHeroBackground from "@/components/AnimatedHeroBackground";

export default function LiveScoresPage() {
  return (
    <main className="min-h-screen bg-[#242A4A]">
      

      {/* HERO SECTION */}
      <section className="relative min-h-[45vh] pt-24 md:pt-20 flex items-center bg-[#242A4A] overflow-hidden">
        <AnimatedHeroBackground className="absolute inset-0 opacity-20" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="text-5xl font-bold text-white mb-4">
              Live Scores
            </h1>

            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Track real-time scores and updates from all events at Agneepath 7.0.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-16 bg-[#242A4A]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl p-16 text-center bg-[#2C355D]"
          >
            {/* Icon */}
            <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-[#FFA543] text-[#242A4A]">
              <Trophy className="w-10 h-10" />
            </div>

            <h2 className="text-3xl font-semibold text-white mb-3">
              Coming Soon
            </h2>

            <p className="text-gray-300 max-w-xl mx-auto mb-8">
              Live score tracking will be available during the event. Stay tuned
              for real-time updates across all matches and competitions.
            </p>

            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#242A4A] border border-[#FFA543]/40">
              <Clock className="w-5 h-5 text-[#FFA543]" />
              <span className="text-sm font-medium text-[#FFA543]">
                Live during Agneepath 7.0
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-700 bg-black">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <p className="text-center text-sm text-gray-400">
            Developed by{" "}
            <a
              href="https://github.com/28nitin07"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white hover:text-[#FFA543] hover:underline transition-colors"
            >
              Nitin S
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}

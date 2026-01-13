"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutUsPage() {
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
          <h1 className="text-3xl md:text-5xl font-bold text-[#242A4A] mb-6 tracking-tight">
            About Agneepath
          </h1>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Ashoka University&apos;s premier inter-college sports festival,
            driven by passion, competition, and sportsmanship.
          </p>
        </motion.div>
      </section>

      {/* CONTENT */}
      <section className="max-w-5xl mx-auto px-6 py-20 space-y-24">

        {/* CARD 1 */}
        <div className="bg-[#2c355d] rounded-2xl shadow-lg p-10 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Welcome to Agneepath 6.0
          </h2>
          <div className="h-1 w-24 bg-orange-400 mb-6" />

          <p className="leading-relaxed mb-4 text-gray-200">
            Agneepath is an annual inter-college sports festival that celebrates
            the spirit of competition, sportsmanship, and excellence.
          </p>

          <p className="leading-relaxed text-gray-200">
            The name <span className="font-medium text-white">Agneepath</span>{" "}
            translates to &quot;The Path of Fire,&quot; symbolizing passion,
            determination, and fierce competitive spirit.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="bg-[#2c355d] rounded-2xl shadow-lg p-10 text-white">
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <div className="h-1 w-24 bg-orange-400 mb-6" />

          <p className="leading-relaxed text-gray-200">
            To create a platform where young athletes can showcase their talents,
            forge lasting friendships, and experience true sportsmanship.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="bg-[#2c355d] rounded-2xl shadow-lg p-10 text-white">
          <h2 className="text-3xl font-bold mb-4">Event Highlights</h2>
          <div className="h-1 w-24 bg-orange-400 mb-6" />

          <ul className="space-y-3 text-gray-200">
            <li>
              <span className="font-semibold text-white">20+ Sports:</span> Cricket to chess
            </li>
            <li>
              <span className="font-semibold text-white">3 Days:</span> February 14–16, 2025
            </li>
            <li>
              <span className="font-semibold text-white">
                Multiple Institutions:
              </span>{" "}
              Across the region
            </li>
            <li>
              <span className="font-semibold text-white">
                Professional Organization:
              </span>{" "}
              Top facilities
            </li>
          </ul>
        </div>

        {/* CARD 4 */}
        <div className="bg-[#2c355d] rounded-2xl shadow-lg p-10 text-white">
          <h2 className="text-3xl font-bold mb-4">
            What Makes Agneepath Special
          </h2>
          <div className="h-1 w-24 bg-orange-400 mb-6" />

          <ul className="list-disc ml-6 space-y-2 text-gray-200">
            <li>Fair play and transparent judging</li>
            <li>Inclusive participation</li>
            <li>Well-organized schedules</li>
            <li>Live updates and leaderboards</li>
            <li>Cultural evenings</li>
          </ul>
        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-[#fefcfb]">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <p className="text-center text-sm text-gray-500">
            Developed by{" "}
            <span className="font-semibold text-[#242A4A]">
              Shristi Sharma
            </span>
          </p>
        </div>
      </footer>
    </main>
  );
}

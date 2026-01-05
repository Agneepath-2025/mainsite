"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

export default function AboutUsSection() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center px-6"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-agni-yellow/10 via-transparent to-agni-orange/10" />

      <motion.div
        className="relative z-10 max-w-4xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-5xl font-bold mb-6 text-white-700">
          About Agneepath
        </h2>

        <p className="text-xl leading-relaxed text-white-700 mb-6">
          Agneepath is not just a sports fest — it is a journey.
          Inspired by the Olympic flame, it represents resilience,
          unity, and the relentless pursuit of excellence.
        </p>

        <p className="text-lg text-white-600">
          As the torch moves forward, it lights up talent,
          determination, and sportsmanship across our campus.
          Every step forward is powered by passion,
          teamwork, and the spirit to rise.
        </p>
      </motion.div>
    </section>
  );
}

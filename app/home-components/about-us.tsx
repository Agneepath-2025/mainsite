'use client';
// cleanup: removed LogoScroller reference


import { motion } from "framer-motion";
import { useRef } from "react";

export default function AboutUsSection() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={ref}
      className="relative w-full text-center"
    >
      <motion.div
        className="relative z-10 w-full max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-4xl sm:text-6xl font-bold mb-8 sm:mb-12" style={{ color: '#242a4a' }}>
          ABOUT AGNEEPATH
        </h2>

        <p className="text-xl sm:text-2xl leading-relaxed" style={{ color: '#2f2f2f' }}>
          Agneepath is not just a sports fest, it is a journey.
          Inspired by the Olympic flame, it represents resilience,
          unity, and the relentless pursuit of excellence.
        </p>

        <p className="text-xl sm:text-2xl leading-relaxed" style={{ color: '#2f2f2f' }}>
          As the torch moves forward, it lights up talent,
          determination, and sportsmanship across our campus.
          Every step forward is powered by passion,
          teamwork, and the spirit to rise.
        </p>

        {/* Accent line */}
        <div className="mt-6 sm:mt-8 h-1 w-24 mx-auto" style={{ backgroundColor: '#d74f2a' }} />
      </motion.div>
    </section>
  );
}
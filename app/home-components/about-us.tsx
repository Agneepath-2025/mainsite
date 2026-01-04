"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function AboutUsSection() {
  const ref = useRef<HTMLDivElement>(null);

  // State to hold the actual scrollYProgress from useScroll
  const [scrollYProgress, setScrollYProgress] = useState(null);

  // Because `useScroll` requires a target (ref), but ref might be null on first render,
  // we do a trick: we use a dummy scrollYProgress first, then update when ref is ready

  // Create scroll tracking only when ref.current is defined
  const scrollData = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Update state only when ref is set
  useEffect(() => {
    if (!ref.current) return;

    // Subscribe to scrollYProgress changes
    const unsubscribe = scrollData.scrollYProgress.onChange((v) => {
      setScrollYProgress(v);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [ref.current]); // Runs again if ref changes

  // Fallback: if no scrollYProgress yet, default to 0
  const progressValue = scrollYProgress ?? 0;

  // Use motion value from scroll progress for animation
  const opacity = useTransform(
    scrollData.scrollYProgress ?? 0,
    [0, 0.2, 0.7, 1],
    [0, 1, 1, 0]
  );

  const y = useTransform(
    scrollData.scrollYProgress ?? 0,
    [0, 0.2, 0.7, 1],
    [80, 0, 0, -80]
  );

  const scale = useTransform(
    scrollData.scrollYProgress ?? 0,
    [0, 0.3, 0.7, 1],
    [0.95, 1, 1, 0.98]
  );

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center px-6"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-agni-yellow/10 via-transparent to-agni-orange/10" />

      <motion.div
        style={{ opacity, y, scale }}
        className="relative z-10 max-w-4xl"
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

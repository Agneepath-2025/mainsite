'use client';

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ReelSectionProps {
  src: string;
  shrinkRange?: number; // pixels to scroll before it fully shrinks
}

export default function ReelSection({ src, shrinkRange = 500 }: ReelSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initialize once

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // progress = 0 → 1 over the shrinkRange
  const progress = Math.min(Math.max(scrollY / shrinkRange, 0), 1);

  // scale from 1 → 0.5
  const scale = 1 - progress * 0.5;
  // opacity from 1 → 0
  const opacity = 1 - progress;

  return (
    <motion.section
      ref={sectionRef}
      style={{ scale, opacity }}
      className="fixed top-0 left-0 w-full h-screen z-10 overflow-hidden"
    >
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      />
    </motion.section>
  );
}

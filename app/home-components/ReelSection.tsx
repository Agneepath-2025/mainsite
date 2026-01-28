'use client';

import { useEffect, useRef } from 'react';

interface ReelSectionProps {
  src: string;
  shrinkRange?: number;
}

export default function ReelSection({ src, shrinkRange = 0 }: ReelSectionProps) {
  const effectRef = useRef<HTMLDivElement>(null);

  // SAFE scroll effect (never touches video)
  useEffect(() => {
    if (shrinkRange <= 0) return;

    const el = effectRef.current;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const progress = Math.min(window.scrollY / shrinkRange, 1);
          if (el) el.style.opacity = `${1 - progress * 0.3}`;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [shrinkRange]);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* ✅ VIDEO MUST ALWAYS EXIST IN DOM */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/poster.webp"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={src.replace('.webm', '.mp4')} type="video/mp4" />
        <source src={src} type="video/webm" />
      </video>

      {/* Overlay / effects layer */}
      <div
        ref={effectRef}
        className="relative z-10 w-full h-full pointer-events-none"
      />
    </section>
  );
}

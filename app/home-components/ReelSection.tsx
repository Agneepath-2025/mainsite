'use client';

import { useState, useEffect } from 'react';

export default function ReelSection({ src, shrinkRange = 0 }: { src: string; shrinkRange?: number }) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const progress = Math.min(scrolled / shrinkRange, 1);
      setScrollProgress(progress);
    };

    if (shrinkRange > 0) {
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [shrinkRange]);

  const scale = 1 - scrollProgress * 0.2; // Shrinks to 80% at full scroll
  const opacity = 1 - scrollProgress * 0.3; // Fades to 70% opacity

  return (
    <section className="w-full h-screen overflow-hidden" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div
        style={{
          transform: `scale(${scale})`,
          opacity,
          transformOrigin: 'center',
          transition: 'transform 0.1s ease-out, opacity 0.1s ease-out',
          width: '100%',
          height: '100%',
        }}
        className="overflow-hidden"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src={src} type="video/mp4" />
        </video>
      </div>
    </section>
  );
}

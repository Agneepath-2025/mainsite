'use client';

import { useEffect, useState } from 'react';

interface ReelSectionProps {
  src: string;
  shrinkRange?: number;
}

export default function ReelSection({ src, shrinkRange = 0 }: ReelSectionProps) {
  const [loaded, setLoaded] = useState(false);

  // Lazy load video
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setLoaded(true),
      { threshold: 0.25 }
    );

    const el = document.getElementById('reel-wrapper');
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  // Scroll shrink/fade effect
  useEffect(() => {
    if (shrinkRange <= 0) return;

    const reel = document.getElementById('reel-wrapper');
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY;
          const progress = Math.min(scrolled / shrinkRange, 1);
          if (reel) {
            reel.style.transform = `scale(${1 - progress * 0.2})`;
            reel.style.opacity = `${1 - progress * 0.3}`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [shrinkRange]);

  return (
    <section className="w-full h-screen overflow-hidden flex items-center justify-center">
      <div
        id="reel-wrapper"
        style={{
          width: '100%',
          height: '100%',
          transformOrigin: 'center',
          transition: 'transform 0.1s ease-out, opacity 0.1s ease-out',
        }}
        className="overflow-hidden"
      >
        {loaded && (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/poster.png"
            className="w-full h-full object-cover"
          >
            <source src={src} type="video/mp4" />
          </video>
        )}
      </div>
    </section>
  );
}

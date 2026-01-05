'use client';

import { useEffect, useState } from 'react';

export default function LightingOverlay() {
  const [lightY, setLightY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(window.scrollY / maxScroll, 1);
      setLightY(progress * window.innerHeight);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-10"
      style={{
        background:
          `radial-gradient(circle at 80px ${lightY}px, rgba(255 255 255 / 0.15) 0%, transparent 240px),
           radial-gradient(circle at calc(100% - 80px) ${lightY}px, rgba(255 255 255 / 0.15) 0%, transparent 240px),
           radial-gradient(circle at 50% 80vh, rgba(0 0 0 / 0.55) 0%, rgba(0 0 0 / 0.85) 90%)`,
      }}
    />
  );
}

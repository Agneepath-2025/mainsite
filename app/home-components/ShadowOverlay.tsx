'use client';

import { useEffect, useState } from 'react';

export default function ShadowOverlay() {
  const [y, setY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(window.scrollY / max, 1);
      setY(progress * window.innerHeight);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className="fixed inset-0 z-10 pointer-events-none"
      style={{
        background:
          `radial-gradient(circle at 80px ${y}px, rgba(255 255 255 / 0.15) 0%, transparent 240px),
           radial-gradient(circle at calc(100% - 80px) ${y}px, rgba(255 255 255 / 0.15) 0%, transparent 240px),
           radial-gradient(circle at 50% 80vh, rgba(0 0 0 / 0.55) 0%, rgba(0 0 0 / 0.85) 90%)`,
      }}
    />
  );
}

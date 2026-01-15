'use client';

import { useEffect, useState } from 'react';

export default function SwimmingPoolBackground() {
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
    <div className="absolute inset-0">
      {/* Base pool colors */}
      <div className="absolute inset-0 bg-#242A4A" />

      {/* Floodlights (white blurred glow) */}
      <div
        className="absolute left-0 w-[260px] h-[420px] blur-[120px] bg-white/40"
        style={{ top: lightY - 210 }}
      />
      <div
        className="absolute right-0 w-[260px] h-[420px] blur-[120px] bg-white/40"
        style={{ top: lightY - 210 }}
      />
    </div>
  );
}

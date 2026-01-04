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
      <div className="absolute inset-0 bg-blue-700" />
      <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,#2f93c7,#2f93c7_24px,#4fc3f7_24px,#4fc3f7_48px)]" />
      <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,#2f93c7,#2f93c7_24px,#4fc3f7_24px,#4fc3f7_48px)]" />

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

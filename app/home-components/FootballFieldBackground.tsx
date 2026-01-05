'use client';

import { useEffect, useState } from 'react';

export default function FootballFieldBackground() {
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
      {/* Field base */}
      <div className="absolute inset-0 bg-green-800" />
      <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,#1f6f1f,#1f6f1f_40px,#2f8f2f_40px,#2f8f2f_80px)]" />

      {/* Center line */}
      <div className="absolute top-0 bottom-0 left-1/2 w-[4px] bg-white/60" />

      {/* Center circle */}
      <div className="absolute top-1/2 left-1/2 w-48 h-48 border-[4px] border-white/60 rounded-full -translate-x-1/2 -translate-y-1/2" />

      {/* Floodlights */}
      <div
        className="absolute left-0 w-[300px] h-[450px] blur-[130px] bg-white/45"
        style={{ top: lightY - 225 }}
      />
      <div
        className="absolute right-0 w-[300px] h-[450px] blur-[130px] bg-white/45"
        style={{ top: lightY - 225 }}
      />
    </div>
  );
}

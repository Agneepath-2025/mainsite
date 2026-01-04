'use client';

import { useSectionActivation } from './SectionActivationContext';

export default function ChessboardBackground() {
  const { progress } = useSectionActivation();
  const active = progress >= 0.66;

  const maskY = active ? ((progress - 0.66) / 0.34) * window.innerHeight : 0;

  return (
    <div
      className="absolute inset-0 transition-opacity duration-500"
      style={{
        opacity: active ? 1 : 0,
        WebkitMaskImage: active
          ? `radial-gradient(circle 400px at 50% ${maskY}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)`
          : 'none',
        maskImage: active
          ? `radial-gradient(circle 400px at 50% ${maskY}px, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)`
          : 'none',
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
      }}
    >
      <div className="grid w-full h-full grid-cols-8 grid-rows-8">
        {Array.from({ length: 64 }).map((_, i) => (
          <div
            key={i}
            className={
              (i + Math.floor(i / 8)) % 2 === 0
                ? 'bg-gray-800'
                : 'bg-gray-400'
            }
          />
        ))}
      </div>
    </div>
  );
}

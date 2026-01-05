'use client';

import React from 'react';

type Theme = 'locker' | 'strategy' | 'final';

export default function ThemedBackground({ activeTheme }: { activeTheme: Theme }) {
  const themes = {
    locker: {
      color: '#fbbf24', // warm yellow-orange
      shape: (
        <rect
          x="10"
          y="10"
          width="320"
          height="160"
          rx="20"
          ry="20"
          fill="#fbbf24"
          fillOpacity="0.3"
          stroke="#fbbf24"
          strokeWidth="3"
        />
      ),
    },
    strategy: {
      color: '#06b6d4', // cyan blue
      shape: (
        <circle
          cx="170"
          cy="90"
          r="80"
          fill="#06b6d4"
          fillOpacity="0.3"
          stroke="#06b6d4"
          strokeWidth="3"
        />
      ),
    },
    final: {
      color: '#ef4444', // red
      shape: (
        <ellipse
          cx="170"
          cy="90"
          rx="140"
          ry="70"
          fill="#ef4444"
          fillOpacity="0.3"
          stroke="#ef4444"
          strokeWidth="3"
        />
      ),
    },
  };

  const theme = themes[activeTheme];

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 flex justify-center items-center">
      {/* Stadium floodlight glow */}
      <div
        className="absolute rounded-full blur-[100px] opacity-80 transition-opacity duration-700"
        style={{ backgroundColor: theme.color, width: 600, height: 600 }}
      />
      {/* The thematic shape */}
      <svg
        width="360"
        height="180"
        viewBox="0 0 340 180"
        className="relative"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {theme.shape}
      </svg>
    </div>
  );
}

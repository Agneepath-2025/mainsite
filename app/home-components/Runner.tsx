'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Runner.module.css';

const FRAME_SIZE = 32; // single frame size in sprite
const SCALE = 2; // runner scaling
const COLS = 4; // sprite sheet columns
const TOTAL_FRAMES = 8; // total frames in sprite sheet

export default function Runner() {
  const [frame, setFrame] = useState(0);
  const [y, setY] = useState(0);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      // Scroll progress 0 → 1
      const progress = Math.min(scrollY / maxScroll, 1);

      // Runner vertical position
      const runnerHeight = FRAME_SIZE * SCALE;
      const maxY = window.innerHeight - runnerHeight - 20;
      setY(progress * maxY);

      // Scroll direction for frame animation
      const direction = scrollY > lastScrollY.current ? 1 : -1;
      lastScrollY.current = scrollY;

      // Animate frames
      setFrame((prev) => {
        let next = prev + direction;
        if (next < 0) next = TOTAL_FRAMES - 1;
        if (next >= TOTAL_FRAMES) next = 0;
        return next;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate sprite position
  const col = frame % COLS;
  const row = Math.floor(frame / COLS);

  return (
    <div
      className={styles.runner}
      style={{
        position: 'fixed', // keep runner visible while scrolling
        left: '20px',
        width: FRAME_SIZE,
        height: FRAME_SIZE,
        transform: `translateY(${y}px) scale(${SCALE})`,
        transformOrigin: 'top left',
        backgroundImage: `url('/runner.png')`, // your sprite sheet
        backgroundPosition: `-${col * FRAME_SIZE}px -${row * FRAME_SIZE}px`,
        backgroundSize: `${COLS * FRAME_SIZE}px auto`,
        zIndex: 30,
        pointerEvents: 'none',
      }}
    />
  );
}

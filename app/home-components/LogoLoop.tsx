'use client';

import { useCallback, useEffect, useMemo, useRef, useState, memo } from 'react';

const ANIMATION_CONFIG = {
  SMOOTH_TAU: 0.25,
  MIN_COPIES: 2,
  COPY_HEADROOM: 2,
};

const cx = (...parts: (string | false | undefined)[]) =>
  parts.filter(Boolean).join(' ');

const toCssLength = (value?: number | string) =>
  typeof value === 'number' ? `${value}px` : value;

export type LogoItem =
  | {
      node: React.ReactNode;
      title?: string;
      href?: string;
      ariaLabel?: string;
    }
  | {
      src: string;
      alt?: string;
      href?: string;
      title?: string;
      width?: number;
      height?: number;
    };

interface LogoLoopProps {
  logos: LogoItem[];
  speed?: number;
  direction?: 'left' | 'right' | 'up' | 'down';
  width?: string | number;
  logoHeight?: number;
  gap?: number;
  pauseOnHover?: boolean;
  hoverSpeed?: number;
  fadeOut?: boolean;
  fadeOutColor?: string;
  scaleOnHover?: boolean;
  ariaLabel?: string;
  className?: string;
  style?: React.CSSProperties;
}

const LogoLoop = memo(function LogoLoop({
  logos,
  speed = 120,
  direction = 'left',
  width = '100%',
  logoHeight = 32,
  gap = 32,
  pauseOnHover,
  hoverSpeed,
  fadeOut,
  fadeOutColor,
  scaleOnHover,
  ariaLabel = 'Partner logos',
  className,
  style,
}: LogoLoopProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const seqRef = useRef<HTMLUListElement>(null);

  const [seqSize, setSeqSize] = useState(0);
  const [copyCount, setCopyCount] = useState(2);
  const [isHovered, setIsHovered] = useState(false);

  const isVertical = direction === 'up' || direction === 'down';

  const velocity = useMemo(() => {
    const dir =
      direction === 'left' || direction === 'up' ? 1 : -1;
    return speed * dir;
  }, [speed, direction]);

  useEffect(() => {
    if (!seqRef.current || !containerRef.current) return;

    const resize = () => {
      const rect = seqRef.current!.getBoundingClientRect();
      const size = isVertical ? rect.height : rect.width;
      setSeqSize(size);

      const viewport = isVertical
        ? containerRef.current!.clientHeight
        : containerRef.current!.clientWidth;

      const copies =
        Math.ceil(viewport / size) + ANIMATION_CONFIG.COPY_HEADROOM;

      setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, copies));
    };

    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, [logos, isVertical]);

  useEffect(() => {
    let raf: number;
    let offset = 0;
    let last = performance.now();

    const animate = (time: number) => {
      const dt = (time - last) / 1000;
      last = time;

      const target =
        isHovered && hoverSpeed !== undefined
          ? hoverSpeed
          : pauseOnHover && isHovered
          ? 0
          : velocity;

      offset = (offset + target * dt) % seqSize;

      if (trackRef.current && seqSize) {
        trackRef.current.style.transform = isVertical
          ? `translateY(${-offset}px)`
          : `translateX(${-offset}px)`;
      }

      raf = requestAnimationFrame(animate);
    };

    if (seqSize) raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [velocity, seqSize, isHovered, hoverSpeed, pauseOnHover, isVertical]);

  const renderLogo = (item: LogoItem, key: string) => {
    const content =
      'node' in item ? (
        item.node
      ) : (
        <img
          src={item.src}
          alt={item.alt ?? ''}
          className="h-[var(--logo-height)] w-auto object-contain"
          draggable={false}
        />
      );

    return (
      <li
        key={key}
        className={cx(
          'flex-none flex items-center justify-center',
          isVertical ? 'mb-[var(--logo-gap)]' : 'mr-[var(--logo-gap)]',
          scaleOnHover && 'transition-transform hover:scale-110'
        )}
      >
        {item.href ? (
          <a href={item.href} target="_blank" rel="noreferrer">
            {content}
          </a>
        ) : (
          content
        )}
      </li>
    );
  };

  return (
    <div
      ref={containerRef}
      className={cx(
        'relative overflow-hidden',
        isVertical ? 'h-full' : 'w-full',
        className
      )}
      style={{
        ...style,
        width: toCssLength(width),
        ['--logo-gap' as any]: `${gap}px`,
        ['--logo-height' as any]: `${logoHeight}px`,
        ...(fadeOutColor && { ['--fade-color' as any]: fadeOutColor }),
      }}
      aria-label={ariaLabel}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        ref={trackRef}
        className={cx(
          'flex',
          isVertical ? 'flex-col' : 'flex-row'
        )}
      >
        {Array.from({ length: copyCount }).map((_, i) => (
          <ul
            key={i}
            ref={i === 0 ? seqRef : undefined}
            className={cx(
              'flex',
              isVertical ? 'flex-col' : 'flex-row'
            )}
          >
            {logos.map((l, j) => renderLogo(l, `${i}-${j}`))}
          </ul>
        ))}
      </div>
    </div>
  );
});

export default LogoLoop;

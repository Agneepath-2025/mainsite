'use client';

import LogoLoop from './LogoLoop';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from 'react-icons/si';

const logos = [
  { node: <SiReact />, title: 'React' },
  { node: <SiNextdotjs />, title: 'Next.js' },
  { node: <SiTypescript />, title: 'TypeScript' },
  { node: <SiTailwindcss />, title: 'Tailwind CSS' },
];

export default function LogoScroller() {
  return (
    <section className="relative w-full overflow-hidden py-16">
      <LogoLoop
        logos={logos}
        speed={120}
        direction="left"
        logoHeight={42}
        gap={48}
        fadeOut
        scaleOnHover
        ariaLabel="Technology partners"
      />
    </section>
  );
}

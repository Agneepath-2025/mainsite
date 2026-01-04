'use client';

import { useSectionActivation } from './SectionActivationContext';

export default function ActivatableSection({
  children,
  start,
  end,
}: {
  children: React.ReactNode;
  start: number;
  end: number;
}) {
  const { progress } = useSectionActivation();

  // activation 0 → 1 while runner is inside
  const raw = (progress - start) / (end - start);
  const activation = Math.min(Math.max(raw, 0), 1);

  return (
    <div
      style={{
        opacity: 0.7 + 0.3 * activation, // subtle fade-in
        transition: 'opacity 0.3s ease',
      }}
      className="relative w-full overflow-hidden rounded-lg"
    >
      {children}
    </div>
  );
}

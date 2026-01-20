'use client';

import Image from 'next/image';
import { useState, useCallback } from 'react';

type Venue = {
  id: number;
  name: string;
  sports: string[];
  dates: string;
  top: string;
  left: string;
};

const VENUES: Venue[] = [
  {
    id: 1,
    name: 'Outdoor Field',
    sports: [
      'Futsal - Sunken Field',
      'Volleyball - Volleyball Field',
      'Basketball - Basketball Court',
    ],
    dates: '1 Feb 2026',
    top: '43%',
    left: '32%',
  },
  {
    id: 2,
    name: 'Sports MPH',
    sports: [
      'Chess - Agneepath Room',
      'Pool - Pool Room',
      'Snooker - Pool Room',
      'Squash - Squash Court',
      'Shooting - Shooting Range',
      'Badminton - Sports MPH',
      'Table Tennis - Table Tennis Room',
      'Basketball - Basketball Court',
    ],
    dates: '31 Jan 2026',
    top: '60%',
    left: '71%',
  },
  {
    id: 3,
    name: 'Football Field',
    sports: ['Football', 'Cricket'],
    dates: '31 Jan 2026',
    top: '31%',
    left: '65%',
  },
  {
    id: 4,
    name: 'Tennis Court',
    sports: ['Tennis'],
    dates: '31 Jan 2026',
    top: '35%',
    left: '17%',
  },
];

export default function CampusMap() {
  const [activeId, setActiveId] = useState<number | null>(null);

  const closeAll = useCallback(() => {
    setActiveId(null);
  }, []);

  const toggleVenue = useCallback((id: number) => {
    setActiveId((prev) => (prev === id ? null : id));
  }, []);

  return (
    <div className="relative w-full" onClick={closeAll}>
      {/* MAP */}
      <Image
        src="/campus-map.png"
        alt="Campus Map"
        width={2500}
        height={1500}
        priority
        className="w-full rounded-xl pointer-events-none"
      />

      {/* HOTSPOTS */}
      {VENUES.map((venue) => {
        const isActive = activeId === venue.id;
        const leftPercent = parseInt(venue.left);
        const popupSideClass =
          leftPercent > 70
            ? 'right-full mr-2 md:left-6 md:right-auto'
            : 'left-full ml-2 md:left-6 md:right-auto';

        return (
          <div
            key={venue.id}
            className="absolute z-50 -translate-x-1 -translate-y-2 md:translate-x-0 md:translate-y-0"
            style={{ top: venue.top, left: venue.left }}
            onClick={(e) => e.stopPropagation()} // prevent map click
          >
            {/* DOT */}
            <button
              onClick={() => toggleVenue(venue.id)}
              aria-label={venue.name}
              className="w-2 h-2 md:w-4 md:h-4 rounded-full bg-[#d74f2a] animate-pulse cursor-pointer"
            />

            {/* INFO CARD */}
            {isActive && (
              <div
                className={`
                  absolute top-1/2 -translate-y-1/2
                  ${popupSideClass}
                  inline-flex
                  flex-col
                  min-w-[150px]
                  max-w-[90vw]
                  rounded-xl
                  bg-white/90
                  backdrop-blur-xl
                  border border-white/40
                  shadow-2xl
                  p-3
                  text-black
                  z-50
                  whitespace-nowrap
                `}
              >
                {/* ARROW */}
                <div
                  className={`
                    absolute top-1/2 -translate-y-1/2
                    ${leftPercent > 70 ? 'right-1 md:-left-2 rotate-45' : '-left-1 md:-left-2 rotate-45'}
                    w-3 h-3 md:w-4 md:h-4
                    bg-white/90
                    border-l border-b border-white/40
                  `}
                />

                <h4 className="font-bold text-lg mb-2">{venue.name}</h4>

                <ul className="flex flex-col space-y-1 text-sm">
                  {venue.sports.map((sport) => (
                    <li key={sport} className="whitespace-nowrap">
                      {sport}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

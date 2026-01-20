"use client";

import Image from "next/image";
import { useState, useCallback } from "react";

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
    name: "Outdoor Field",
    sports: [
      "Futsal - Sunken Field",
      "Volleyball - Volleyball Field",
      "Basketball - Basketball Court",
    ],
    dates: "1 Feb 2026",
    top: "43%",
    left: "32%",
  },
  {
    id: 2,
    name: "Sports MPH",
    sports: [
      "Chess - Agneepath Room",
      "Pool - Pool Room",
      "Snooker - Pool Room",
      "Squash - Squash Court",
      "Shooting - Shooting Range",
      "Badminton - Sports MPH",
      "Table Tennis - Table Tennis Room",
      "Basketball - Basketball Court",
    ],
    dates: "31 Jan 2026",
    top: "60%",
    left: "71%",
  },
  {
    id: 3,
    name: "Football Field",
    sports: ["Football", "Cricket"],
    dates: "31 Jan 2026",
    top: "31%",
    left: "65%",
  },
  {
    id: 4,
    name: "Tennis Court",
    sports: ["Tennis"],
    dates: "31 Jan 2026",
    top: "35%",
    left: "17%",
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
    <div
      className="relative"
      onClick={closeAll} // ✅ click anywhere closes popups
    >
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

        return (
          <div
            key={venue.id}
            className="
              absolute z-50
              -translate-x-1 -translate-y-2
              md:translate-x-0 md:translate-y-0
            "
            style={{ top: venue.top, left: venue.left }}
            onClick={(e) => e.stopPropagation()} // ✅ prevent map click
          >
            {/* DOT */}
            <button
              onClick={() => toggleVenue(venue.id)}
              aria-label={venue.name}
              className="
                w-2 h-2 md:w-4 md:h-4
                rounded-full
                bg-[#d74f2a]
                animate-pulse
                cursor-pointer
              "
            />

            {/* INFO CARD */}
            {isActive && (
              <div
                className="
                  absolute left-5 md:left-6
                  top-1/2 -translate-y-1/2
                  min-w-[200px] md:min-w-[220px]
                  rounded-xl
                  bg-white/70
                  backdrop-blur-xl
                  border border-white/40
                  shadow-2xl
                  p-4
                  text-black
                "
              >
                {/* ARROW */}
                <div
                  className="
                    absolute -left-2
                    top-1/2 -translate-y-1/2
                    w-4 h-4
                    bg-white/70
                    rotate-45
                    border-l border-b border-white/40
                  "
                />

                <h4 className="font-bold text-lg mb-2">
                  {venue.name}
                </h4>

                <ul className="text-sm list-disc list-inside space-y-0.5">
                  {venue.sports.map((sport) => (
                    <li key={sport}>{sport}</li>
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

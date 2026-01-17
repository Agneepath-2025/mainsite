"use client";

import { useState } from "react";
import Image from "next/image";

type Venue = {
  id: number;
  name: string;
  sports: string[];
  dates: string;
  top: string;
  left: string;
};

const venues: Venue[] = [
  {
    id: 1,
    name: "Outdoor Field",
    sports: ["Futsal - Sunken Field", "Volleyball - Volleyball Field", "Basketball - Basketball Court"],
    dates: "1 Feb 2026",
    top: "43%",
    left: "32%",
  },
  {
    id: 2,
    name: "Sports MPH",
    sports: ["Chess - Agneepath Room", "Pool - Pool Room", "Snooker - Pool Room", "Squash - Squash Court", "Shooting - Shooting Range", "Badminton - Sports MPH", "Table Tennis - Table Tennis Room", "Basketball - Basketball Court"],
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
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="relative">
      {/* Map */}
      <Image
        src="/campus-map.png"
        alt="Campus Map"
        width={2500}
        height={1500}
        className="rounded-xl w-full pointer-events-none"
        priority
      />

      {/* Hotspots */}
      {venues.map((venue) => (
        <div
          key={venue.id}
          className="absolute z-50"
          style={{ top: venue.top, left: venue.left }}
        >
          <button
            onClick={() =>
              setActive(active === venue.id ? null : venue.id)
            }
            className="
              w-4 h-4
              rounded-full
              animate-pulse
              cursor-pointer
            "
            style={{ backgroundColor: '#d74f2a' }}
            aria-label={venue.name}
          />

          {active === venue.id && (
            <div
              className="
                absolute left-6 top-1/2 -translate-y-1/2
                min-w-[220px]            
                rounded-xl
                bg-white/70
                backdrop-blur-xl
                border border-white/40
                shadow-2xl
                p-4
                text-black
              "
            >
              <div
                className="
                  absolute -left-2 top-1/2 -translate-y-1/2
                  w-6 h-4
                  bg-white/70
                  rotate-45
                  border-l border-b border-white/40
                "
              />

              <h4 className="font-bold text-lg mb-2">
                {venue.name}
              </h4>

              <div className="mb-2">
                <ul className="text-sm list-disc list-inside">
                  {venue.sports.map((sport) => (
                    <li key={sport}>{sport}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

"use client";

import { useState } from "react";

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
    name: "Main Stadium",
    sports: ["Football", "Athletics"],
    dates: "1 Feb 2026",
    top: "65%",
    left: "50%",
  },
  {
    id: 2,
    name: "Indoor Sports Hall",
    sports: ["Badminton", "Table Tennis"],
    dates: "31 Jan 2026",
    top: "35%",
    left: "60%",
  },
];

export default function CampusMap() {
  const [active, setActive] = useState<number | null>(null);

  return (
      <div className="relative">
        {/* Map */}
        <img
          src="/campus-map.jpg"
          alt="Campus Map"
          className="rounded-xl w-full pointer-events-none"
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
                bg-orange-500
                animate-pulse
                cursor-pointer
              "
              aria-label={venue.name}
            />

            {/* Fancy tooltip */}
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
                {/* Arrow */}
                <div
                  className="
                    absolute -left-2 top-1/2 -translate-y-1/2
                    w-4 h-4
                    bg-white/70
                    rotate-45
                    border-l border-b border-white/40
                  "
                />

                <h4 className="font-bold text-lg mb-2">
                  {venue.name}
                </h4>

                <div className="mb-2">
                  <p className="text-sm font-semibold mb-1">
                    Sports
                  </p>
                  <ul className="text-sm list-disc list-inside">
                    {venue.sports.map((sport) => (
                      <li key={sport}>{sport}</li>
                    ))}
                  </ul>
                </div>

                <p className="text-sm">
                  <span className="font-semibold">Dates:</span>{" "}
                  {venue.dates}
                </p>
              </div>
            )}
          </div>
        ))}

        <p className="mt-6 text-sm opacity-90 text-gray-700">
          Click a venue dot to view sports and dates.
        </p>
      </div>
    );
}

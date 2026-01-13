"use client";

import Masonry from "@/components/Masonry";

export default function GalleryPage() {
  const items = [
    {
      id: "1",
      img: "/gallery/1.jpg",
      url: "/gallery/1.jpg",
      height: 400,
    },
    {
      id: "2",
      img: "/gallery/2.jpg",
      url: "/gallery/2.jpg",
      height: 500,
    },
    {
      id: "3",
      img: "/gallery/3.jpg",
      url: "/gallery/3.jpg",
      height: 350,
    },
    {
      id: "4",
      img: "/gallery/4.jpg",
      url: "/gallery/4.jpg",
      height: 450,
    },
    {
      id: "5",
      img: "/gallery/5.jpg",
      url: "/gallery/5.jpg",
      height: 380,
    },
    {
      id: "6",
      img: "/gallery/6.jpg",
      url: "/gallery/6.jpg",
      height: 520,
    },
  ];

  return (
    <main className="min-h-screen bg-[#fefcfb]">

      {/* HEADER — SAME AS CONTACT / ABOUT */}
      <section className="pt-32 pb-20 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-[#242A4A] mb-4">
          Gallery
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Moments captured from previous Agneepath events.
        </p>
      </section>

      {/* MASONRY */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto relative min-h-[600px]">
          <Masonry
            items={items}
            animateFrom="bottom"
            stagger={0.06}
            scaleOnHover={true}
            hoverScale={0.95}
            blurToFocus={true}
            colorShiftOnHover={false}
          />
        </div>
      </section>

    </main>
  );
}

"use client";

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#242A4A] text-white">

      {/* HERO */}
      <section className="pt-32 md:pt-40 pb-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Gallery
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Moments captured from previous Agneepath events.
        </p>
      </section>

      {/* FEATURED SECTION */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* VERTICAL FEATURE */}
          <div className="md:row-span-2 rounded-2xl bg-[#2c355d] flex items-center justify-center text-gray-300 h-[420px] md:h-auto">
            Vertical Feature
          </div>

          {/* RIGHT STACK */}
          <div className="rounded-2xl bg-[#2c355d] flex items-center justify-center text-gray-300 h-[200px]">
            Horizontal
          </div>
          <div className="rounded-2xl bg-[#2c355d] flex items-center justify-center text-gray-300 h-[200px]">
            Horizontal
          </div>

        </div>
      </section>

      {/* MAIN GALLERY GRID */}
      <section className="pb-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="rounded-2xl bg-[#2c355d] h-[200px] flex items-center justify-center text-gray-400 uppercase tracking-wide text-sm"
              >
                Image {i + 1}
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}

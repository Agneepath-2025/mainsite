"use client";

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#242A4A]">
      {/* HERO */}
      <section className="pt-32 md:pt-40 pb-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Gallery
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Moments captured from previous Agneepath events.
        </p>
      </section>

      {/* GALLERY */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div
            className="
              grid
              grid-cols-4
              grid-rows-3
              gap-4
              auto-rows-[180px]
              md:auto-rows-[200px]
            "
          >
            {/* BIG IMAGE */}
            <div className="col-span-2 row-span-2 rounded-xl bg-[#2C355D] flex items-center justify-center text-gray-400">
              Large Image
            </div>

            {/* RIGHT STACK */}
            <div className="col-span-2 rounded-xl bg-[#2C355D] flex items-center justify-center text-gray-400">
              Image
            </div>
            <div className="col-span-2 rounded-xl bg-[#2C355D] flex items-center justify-center text-gray-400">
              Image
            </div>

            {/* BOTTOM ROW */}
            <div className="rounded-xl bg-[#2C355D] flex items-center justify-center text-gray-400">
              Image
            </div>
            <div className="rounded-xl bg-[#2C355D] flex items-center justify-center text-gray-400">
              Image
            </div>
            <div className="rounded-xl bg-[#2C355D] flex items-center justify-center text-gray-400">
              Image
            </div>
            <div className="rounded-xl bg-[#2C355D] flex items-center justify-center text-gray-400">
              Image
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

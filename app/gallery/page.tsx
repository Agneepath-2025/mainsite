"use client";

import { motion } from "framer-motion";

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#fefcfb] text-gray-800">

      {/* PAGE HEADER */}
      <section className="pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto px-6 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#242A4A] mb-6 tracking-tight">
  GALLERY
</h1>
          <p className="text-lg md:text-xl text-gray-600">
            Moments captured from previous Agneepath events.
          </p>
        </motion.div>
      </section>

      {/* GALLERY GRID */}
      <section className="pb-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-3 auto-rows-[200px] gap-6">

            {/* ROW 1 */}
            <Image src="/gallery/v2.jpg" />
            <Image src="/gallery/v3.jpg" />
            <Image src="/gallery/v4.jpg" />

            {/* LEFT VERTICAL */}
            <Image src="/gallery/v1.jpg" vertical />

            {/* ROW 2 */}
            <Image src="/gallery/v5.jpg" />
            <Image src="/gallery/v6.jpg" />

            {/* ROW 3 */}
            <Image src="/gallery/v7.jpg" />
            <Image src="/gallery/v9.jpg" />

            {/* ROW 4 */}
            <Image src="/gallery/v10.jpg" />
            <Image src="/gallery/v11.jpg" />

            {/* RIGHT VERTICAL */}
            <Image src="/gallery/v8.png" vertical />

            {/* ROW 5 */}
            <Image src="/gallery/v12.jpg" />
            <Image src="/gallery/v13.jpg" />

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 bg-[#fefcfb]">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <p className="text-center text-sm text-gray-500">
            Developed by{" "}
            <span className="font-semibold text-[#242A4A]">
              Shristi Sharma
            </span>
          </p>
        </div>
      </footer>

    </main>
  );
}

/* IMAGE COMPONENT */
function Image({
  src,
  vertical = false,
}: {
  src: string;
  vertical?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl overflow-hidden bg-[#2c355d] ${
        vertical ? "row-span-2" : ""
      }`}
    >
      <img
        src={src}
        alt="Gallery image"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

"use client";

import { motion } from "framer-motion";

export default function AccommodationsPage() {
  return (
    <main className="min-h-screen bg-[#F3EBE0]">

      {/* HERO SECTION */}
      {/* HERO SECTION */}
{/* HERO SECTION */}
<section className="pt-32 pb-28 bg-[#2C355D]">
  <div className="flex items-center justify-center">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-center px-6"
    >
      <h1 className="text-5xl md:text-6xl font-semibold text-white tracking-tight">
        Accommodation
      </h1>
    </motion.div>
  </div>
</section>


      {/* CONTENT SECTION */}
      <section className="py-32 bg-[#F3EBE0]">
        <div className="max-w-3xl mx-auto px-6 text-center">

          {/* INFO TEXT */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="
              mb-12
              text-lg
              md:text-xl
              text-[#242A4A]/80
              leading-relaxed
            "
          >
            Accommodation details for Agneepath 7.0 participants are shared
            through an official allotment sheet.
          </motion.p>

          {/* BUTTON */}
          <motion.a
            href="https://docs.google.com/spreadsheets/d/1g4IkiOpeFkf-dH0b8FSKZ1uDoicRNHV5rVANyc8ZyYY"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="
              inline-flex
              items-center
              justify-center
              rounded-full
              bg-[#FFA543]
              px-14
              py-4
              text-lg
              font-medium
              text-[#242A4A]
              shadow-sm
            "
          >
            Open Sheet
          </motion.a>

          {/* UPDATED TEXT */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-sm text-[#242A4A]/60"
          >
            Updated regularly
          </motion.p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-black/10 bg-black">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <p className="text-center text-sm text-gray-400">
            Developed by{" "}
            <a
              href="https://github.com/shristi2217/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white hover:underline"
            >
              Shristi Sharma
            </a>
          </p>
        </div>
      </footer>

    </main>
  );
}

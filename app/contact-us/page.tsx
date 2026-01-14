"use client";

import { motion } from "framer-motion";

export default function AccommodationsPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-[#242A4A] mb-6 tracking-tight">
            CONTACT US
          </h1>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Get in touch with us for queries related to Agneepath 7.0.
          </p>
        </motion.div>
      </section>

      {/* SIDE-BY-SIDE PORTRAIT CARDS */}
      <section className="pb-32 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 justify-items-center">

          {/* FAQ CARD */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="
              bg-[#2c355d]
              rounded-xl
              shadow-lg
              w-full
              max-w-md
              min-h-[440px]
              px-8
              py-14
              text-center
              flex
              flex-col
              justify-between
            "
          >
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                FAQs
              </h2>

              <div className="h-1 w-12 bg-orange-400 mx-auto mb-8" />

              <p className="text-gray-200 text-base leading-relaxed">
                Find answers to common questions about registration,
                eligibility, travel, and event logistics.
              </p>
            </div>

            <a
              href="https://docs.google.com/document/d/1TKIYuEGHbD_hrPn2x2dTvhsdldG7SUXjTemGYi4DpWc/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto inline-flex items-center justify-center h-11 px-8 rounded-full bg-white text-[#2c355d] font-medium hover:bg-white/90 transition"
            >
              View FAQs
            </a>
          </motion.div>

          {/* CONTACT CARD */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="
              bg-[#2c355d]
              rounded-xl
              shadow-lg
              w-full
              max-w-md
              min-h-[440px]
              px-8
              py-14
              text-center
              flex
              flex-col
              justify-between
            "
          >
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Contact Info
              </h2>

              <div className="h-1 w-12 bg-orange-400 mx-auto mb-8" />

              <p className="text-gray-200 text-base leading-relaxed">
                Still need help? Reach out to us directly and our team
                will assist you.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href="mailto:agneepath@example.com"
                className="inline-flex items-center justify-center h-11 rounded-full bg-white text-[#2c355d] font-medium hover:bg-white/90 transition"
              >
                Email Us
              </a>

              <a
                href="tel:+919716767728"
                className="inline-flex items-center justify-center h-11 rounded-full bg-white text-[#2c355d] font-medium hover:bg-white/90 transition"
              >
                📞 +91 97173 67728
              </a>
            </div>
          </motion.div>

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

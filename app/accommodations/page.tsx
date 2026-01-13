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
            Contact Us
          </h1>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Information for Agneepath 7.0 participants regarding accommodation,
            travel, and related queries.
          </p>
        </motion.div>
      </section>

      {/* ACCOMMODATION CARD */}
      <section className="pb-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="
            bg-[#2c355d]
            rounded-2xl
            shadow-lg
            max-w-6xl
            mx-auto
            text-center
            flex
            flex-col
            justify-center
            min-h-[320px]
            px-10
            py-16
          "
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Accommodation Sheet
          </h2>

          {/* SMALL ORANGE LINE (ABOUT US STYLE) */}
          <div className="h-1 w-16 bg-orange-400 mx-auto mb-8" />

          <p className="mb-10 text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
            Accommodation details for Agneepath 7.0 participants are shared
            through an official allotment sheet.
          </p>

          <a
            href="https://docs.google.com/spreadsheets/d/1g4IkiOpeFkf-dH0b8FSKZ1uDoicRNHV5rVANyc8ZyYY"
            target="_blank"
            rel="noopener noreferrer"
            className="
              mx-auto
              inline-flex
              items-center
              justify-center
              h-12
              w-[220px]
              rounded-full
              bg-white
              text-[#2c355d]
              text-base
              font-medium
              hover:bg-white/90
              transition
            "
          >
            Open Allotment Sheet
          </a>
        </motion.div>
      </section>

      {/* FAQ CARD */}
      <section className="pb-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="
            bg-[#2c355d]
            rounded-2xl
            shadow-lg
            max-w-6xl
            mx-auto
            text-center
            flex
            flex-col
            justify-center
            min-h-[260px]
            px-10
            py-16
          "
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>

          {/* SMALL ORANGE LINE */}
          <div className="h-1 w-16 bg-orange-400 mx-auto mb-6" />

          <p className="text-gray-200 text-lg max-w-3xl mx-auto mb-8">
            Find answers to common questions about registration, eligibility,
            accommodation, and event logistics.
          </p>

          <a
            href="https://docs.google.com/document/d/1TKIYuEGHbD_hrPn2x2dTvhsdldG7SUXjTemGYi4DpWc/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="
              mx-auto
              inline-flex
              items-center
              justify-center
              h-12
              w-[180px]
              rounded-full
              bg-white
              text-[#2c355d]
              font-medium
              hover:bg-white/90
              transition
            "
          >
            View FAQs
          </a>
        </motion.div>
      </section>

      {/* STILL HAVE QUESTIONS CARD */}
      <section className="pb-32 px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="
            bg-[#2c355d]
            rounded-2xl
            shadow-lg
            max-w-6xl
            mx-auto
            text-center
            flex
            flex-col
            justify-center
            min-h-[260px]
            px-10
            py-16
          "
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Still Have Questions?
          </h2>

          {/* SMALL ORANGE LINE */}
          <div className="h-1 w-16 bg-orange-400 mx-auto mb-6" />

          <p className="text-gray-200 text-lg max-w-3xl mx-auto mb-10">
            Don’t hesitate to reach out — our team is happy to help.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:agneepath@example.com"
              className="
                inline-flex
                items-center
                justify-center
                h-12
                w-[180px]
                rounded-full
                bg-white
                text-[#2c355d]
                font-medium
                hover:bg-white/90
                transition
              "
            >
              Email Us
            </a>

            <a
              href="tel:+919876543210"
              className="
                inline-flex
                items-center
                justify-center
                h-12
                w-[200px]
                rounded-full
                bg-white
                text-[#2c355d]
                font-medium
                hover:bg-white/90
                transition
              "
            >
              📞 +91 97173 67728
            </a>
          </div>
        </motion.div>
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

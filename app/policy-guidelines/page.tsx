"use client";

import { motion } from "framer-motion";

export default function PolicyGuidelinesPage() {
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
            POLICY AND GUIDELINES
          </h1>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Please go through the following rules, guidelines, and documents
            carefully before participating in Agneepath 7.0.
          </p>
        </motion.div>
      </section>

      {/* CONTENT – CARDS */}
      <section className="pb-36 px-20">
        <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 justify-items-center">

          {/* GENERAL GUIDELINES */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-[#2c355d] rounded-xl shadow-lg w-full max-w-sm min-h-[560px] px-8 py-14 text-center flex flex-col justify-between"
          >
            <div className="flex flex-col flex-grow text-center">
  
  {/* HEADING (TOP) */}
  <h2 className="text-3xl font-bold text-white">
    General Guidelines
  </h2>
  <div className="h-1 w-12 bg-orange-400 mx-auto mt-4 mb-6" />

  {/* SUBTEXT (CENTERED) */}
  <div className="flex flex-grow items-center">
    <p className="text-gray-200 text-lg leading-relaxed">
      These guidelines outline the basic rules, expectations, and
      responsibilities all participants must follow.
    </p>
  </div>

</div>

            <a
              href="https://docs.google.com/document/d/1vjkK5Rh2fB7HpC8miKEmWBNkz8sJT2Lo/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto inline-flex items-center justify-center h-11 px-8 rounded-full bg-white text-[#2c355d] font-medium hover:bg-white/90 transition"
            >
              View Guidelines
            </a>
          </motion.div>

          {/* RULEBOOK */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-[#2c355d] rounded-xl shadow-lg w-full max-w-sm min-h-[520px] px-8 py-14 text-center flex flex-col justify-between"
          >
           <div className="flex flex-col flex-grow text-center">
  
  {/* HEADING (TOP) */}
  <h2 className="text-3xl font-bold text-white">
    Rulebook
  </h2>
  <div className="h-1 w-12 bg-orange-400 mx-auto mt-4 mb-6" />

  {/* SUBTEXT (CENTERED) */}
  <div className="flex flex-grow items-center justify-center">
    <p className="text-gray-200 text-lg leading-relaxed">
      The complete rulebook covering all sports and regulations.
    </p>
  </div>

</div>


            <a
              href="/docs/rulebook.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto inline-flex items-center justify-center h-11 px-8 rounded-full bg-white text-[#2c355d] font-medium hover:bg-white/90 transition"
            >
              Open Rulebook
            </a>
          </motion.div>

          {/* CODE OF CONDUCT */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-[#2c355d] rounded-xl shadow-lg w-full max-w-sm min-h-[520px] px-8 py-14 text-center flex flex-col justify-between"
          >
           <div className="flex flex-col flex-grow text-center">
  
  {/* HEADING (TOP) */}
  <h2 className="text-3xl font-bold text-white">
    Code of Conduct
  </h2>
  <div className="h-1 w-12 bg-orange-400 mx-auto mt-4 mb-6" />

  {/* SUBTEXT (CENTERED) */}
  <div className="flex flex-grow items-center justify-center">
    <p className="text-gray-200 text-lg leading-relaxed">
      Ensures a safe, respectful, and inclusive environment
      for everyone at Agneepath.
    </p>
  </div>

</div>


            <a
              href="https://docs.google.com/document/d/1qZKYqNN7WHD1kCCZ1UGNht5CHiJN503Fzb8kP_v8S6Q/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto inline-flex items-center justify-center h-11 px-8 rounded-full bg-white text-[#2c355d] font-medium hover:bg-white/90 transition"
            >
              View Code
            </a>
          </motion.div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 bg-[#fefcfb]">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <p className="text-center text-sm text-gray-500">
            Developed by{" "}
            <a
              href="https://github.com/shristi2217"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#242A4A] hover:text-[#ff6e1a]"
            >
              Shristi Sharma
            </a>
          </p>
        </div>
      </footer>

    </main>
  );
}

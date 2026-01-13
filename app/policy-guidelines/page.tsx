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
            Policies & Guidelines
          </h1>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Please go through the following rules, guidelines, and documents
            carefully before participating in Agneepath 7.0.
          </p>
        </motion.div>
      </section>

      {/* CONTENT */}
      <section className="pb-32 px-6 space-y-20">

        {/* GENERAL GUIDELINES */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-6xl mx-auto bg-[#2c355d] rounded-2xl shadow-lg px-10 py-20 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            General Guidelines
          </h2>

          {/* SMALL ORANGE LINE */}
          <div className="h-1 w-16 bg-orange-400 mx-auto mb-8" />

          <p className="text-gray-200 text-lg max-w-3xl mx-auto mb-10">
            These guidelines outline the basic rules, expectations, and
            responsibilities all participants must follow to ensure a smooth,
            fair, and enjoyable event experience.
          </p>

          <a
            href="https://docs.google.com/document/d/1vjkK5Rh2fB7HpC8miKEmWBNkz8sJT2Lo/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-12 px-10 rounded-full bg-white text-[#2c355d] font-medium hover:bg-white/90 transition"
          >
            View General Guidelines
          </a>
        </motion.div>

        {/* CODE OF CONDUCT */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="max-w-6xl mx-auto bg-[#2c355d] rounded-2xl shadow-lg px-10 py-20 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Code of Conduct
          </h2>

          {/* SMALL ORANGE LINE */}
          <div className="h-1 w-16 bg-orange-400 mx-auto mb-8" />

          <p className="text-gray-200 text-lg max-w-3xl mx-auto mb-10">
            These rules ensure a safe, respectful, and inclusive environment
            for all participants, spectators, and organizers.
          </p>

          <a
            href="https://docs.google.com/document/d/1qZKYqNN7WHD1kCCZ1UGNht5CHiJN503Fzb8kP_v8S6Q/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-12 px-10 rounded-full bg-white text-[#2c355d] font-medium hover:bg-white/90 transition"
          >
            View Code of Conduct
          </a>
        </motion.div>

        {/* RULEBOOK */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="max-w-6xl mx-auto bg-[#2c355d] rounded-2xl shadow-lg px-10 py-20 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Rulebook
          </h2>

          {/* SMALL ORANGE LINE */}
          <div className="h-1 w-16 bg-orange-400 mx-auto mb-8" />

          <p className="text-gray-200 text-lg max-w-3xl mx-auto mb-10">
            The complete rulebook for all events can be accessed below.
          </p>

          <a
            href="/docs/rulebook.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-12 px-10 rounded-full bg-white text-[#2c355d] font-medium hover:bg-white/90 transition"
          >
            Open Rulebook
          </a>
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

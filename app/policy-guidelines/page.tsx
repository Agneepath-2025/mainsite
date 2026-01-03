"use client";

import { motion } from "framer-motion";
import AnimatedHeroBackground from "@/components/AnimatedHeroBackground";

export default function PolicyGuidelinesPage() {
  return (
    <main className="min-h-screen bg-[#242A4A]">
      {/* HERO SECTION */}
      <section className="relative min-h-[45vh] pt-24 md:pt-20 bg-[#242A4A] flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-0 pointer-events-none">
          <AnimatedHeroBackground />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 max-w-6xl mx-auto px-6 text-center"
        >
          <h1 className="text-5xl font-bold text-[#FFA543] mb-4">
            Policies & Guidelines
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Please go through the following rules, guidelines, and documents
            carefully before participating.
          </p>
        </motion.div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-12 bg-[#242A4A]">
        <div className="max-w-6xl mx-auto px-6 space-y-8">

          {/* General Guidelines */}
          <div className="border border-[#3A4473] rounded-2xl p-8 bg-[#2C355D] transition-all duration-300 hover:bg-[#343E6A] hover:border-[#FFA543] hover:shadow-md">
            <h2 className="text-2xl font-semibold text-white mb-3">
              General Guidelines
            </h2>

            <p className="text-gray-300 mb-6">
              These guidelines outline the basic rules, expectations, and
              responsibilities all participants must follow to ensure a smooth,
              fair, and enjoyable event experience.
            </p>

            <a
              href="https://docs.google.com/document/d/1vjkK5Rh2fB7HpC8miKEmWBNkz8sJT2Lo/edit?usp=sharing&ouid=109418510091904212620&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-[#FFA543] px-6 py-3 text-black font-semibold hover:bg-[#ffb866] transition"
            >
              View General Guidelines
            </a>
          </div>

          {/* Code of Conduct */}
          <div className="border border-[#3A4473] rounded-2xl p-8 bg-[#2C355D] transition-all duration-300 hover:bg-[#343E6A] hover:border-[#FFA543] hover:shadow-md">
            <h2 className="text-2xl font-semibold text-white mb-3">
              Code of Conduct (CoC)
            </h2>

            <p className="text-gray-300 mb-6">
              These guidelines ensure a safe, respectful, and inclusive
              environment for all participants, spectators, and organizers
              throughout the event.
            </p>

            <a
              href="https://docs.google.com/document/d/1qZKYqNN7WHD1kCCZ1UGNht5CHiJN503Fzb8kP_v8S6Q/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-[#FFA543] px-6 py-3 text-black font-semibold hover:bg-[#ffb866] transition"
            >
              View Code of Conduct
            </a>
          </div>

          {/* Sports-Specific Guidelines */}
          <div className="border border-[#3A4473] rounded-2xl p-8 bg-[#2C355D] transition-all duration-300 hover:bg-[#343E6A] hover:border-[#FFA543] hover:shadow-md">
            <h2 className="text-2xl font-semibold text-white mb-3">
              Sports-Specific Guidelines
            </h2>
            <p className="text-gray-300 mb-6">
              Detailed sport-wise rules and guidelines are available in the brochure.
            </p>
            <a
              href="/docs/sports-guidelines.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-[#FFA543] px-6 py-3 text-black font-semibold hover:bg-[#ffb866] transition"
            >
              View Sports Guidelines
            </a>
          </div>

          {/* Rulebook */}
          <div className="border border-[#3A4473] rounded-2xl p-8 bg-[#2C355D] transition-all duration-300 hover:bg-[#343E6A] hover:border-[#FFA543] hover:shadow-md">
            <h2 className="text-2xl font-semibold text-white mb-3">
              Rulebook
            </h2>
            <p className="text-gray-300 mb-6">
              The complete rulebook for all events can be accessed below.
            </p>
            <a
              href="/docs/rulebook.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-[#FFA543] px-6 py-3 text-black font-semibold hover:bg-[#ffb866] transition"
            >
              Open Rulebook
            </a>
          </div>

          {/* FAQs */}
          <div className="border border-[#3A4473] rounded-2xl p-8 bg-[#2C355D] transition-all duration-300 hover:bg-[#343E6A] hover:border-[#FFA543] hover:shadow-md">
            <h2 className="text-2xl font-semibold text-white mb-3">
              FAQs
            </h2>
            <p className="text-gray-300 mb-6">
              Common questions regarding participation, rules, and logistics.
            </p>
            <a
              href="https://docs.google.com/document/d/1TKIYuEGHbD_hrPn2x2dTvhsdldG7SUXjTemGYi4DpWc/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-[#FFA543] px-8 py-3 text-black font-semibold hover:bg-[#ffb866] transition"
            >
              View FAQs
            </a>
          </div>

        </div>
      </section>
    </main>
  );
}

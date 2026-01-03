"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { teamMembers, verticals } from "@/lib/team-data";
import { User } from "lucide-react";
import Image from "next/image";


export default function TeamPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
        delayChildren: 0,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  const getTeamByVertical = (verticalName: string) =>
    teamMembers.filter((member) => member.vertical === verticalName);

  return (
    <div className="min-h-screen bg-[#242A4A]">
     

      {/* HERO SECTION */}
      <section className="relative min-h-[45vh] pt-24 md:pt-20 flex items-center bg-[#242A4A]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto px-6 text-center"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Meet the Team
          </h1>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            The passionate individuals behind Ashoka University&apos;s premier sports festival.
          </p>
        </motion.div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-16 bg-[#242A4A]">
        <div className="max-w-7xl mx-auto px-6">
          {verticals.map((vertical) => {
            const members = getTeamByVertical(vertical.name);
            if (members.length === 0) return null;

            return (
              <motion.div
                key={vertical.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px", amount: 0.1 }}
                transition={{ duration: 0.3 }}
                className="mb-24 last:mb-0"
              >
                {/* Vertical Header */}
                <div className="mb-14 text-center">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {vertical.name}
                  </h2>
                  <p className="text-sm text-gray-300 max-w-xl mx-auto">
                    {vertical.description}
                  </p>
                </div>

                {/* Team Grid */}
                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.1 }}
                  className="
                    grid
                    justify-center
                    row-gap-10
                    [column-gap:clamp(1.5rem,4vw,4rem)]
                    [grid-template-columns:repeat(auto-fit,minmax(260px,260px))]
                  "
                >
                  {members.map((member) => (
                    <motion.div key={member.id} variants={item}>
                      <Card
                        className="
                          w-[260px]
                          h-[360px]
                          bg-[#2C355D]
                          border border-white/10
                          hover:border-white/40
                          transition-all duration-300
                          flex flex-col
                        "
                      >
                        <div className="relative aspect-square bg-[#242A4A] overflow-hidden">
                          {member.image ? (
                            <Image
                              src={member.image}
                              alt={member.name}
                              fill
                              className="object-cover transition-transform duration-500"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <User className="w-24 h-24 text-gray-300" />
                            </div>
                          )}
                        </div>

                        <div className="p-4 bg-[#2C355D]">
                          <h3 className="font-bold text-white">
                            {member.name}
                          </h3>
                          <p className="text-sm text-gray-300">
                            {member.role}
                          </p>

                          <div className="flex justify-center mt-16">
                            <div className="h-px w-16 bg-white/10" />
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>

                {(vertical.name === "Fest Secretaries" ||
                  vertical.name === "Deputy Fest Secretaries") && (
                  <div className="flex justify-center mt-20">
                    <div className="h-px w-48 bg-white/10" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <p className="text-center text-sm text-gray-400">
            Developed by{" "}
            <a
              href="https://github.com/28nitin07"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white hover:text-[#FFA543] hover:underline transition-colors"
            >
              Nitin S
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

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
    <div className="min-h-screen bg-[#FFFDF9]">
      {/* HERO SECTION */}
      <section className="relative min-h-[25vh] pt-16 sm:pt-20 md:pt-24 flex items-center justify-center bg-[#FFFDF9]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto px-4 sm:px-6 text-center w-full flex flex-col items-center"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#242A4A] mb-3 sm:mb-6 tracking-tight">
  MEET THE TEAM
</h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
            The passionate individuals behind Ashoka University&apos;s premier sports festival.
          </p>
        </motion.div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-8 sm:py-12 md:py-16 bg-[#FFFDF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
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
                className="mb-12 sm:mb-16 md:mb-24 last:mb-0"
              >
                {/* Vertical Header */}
                <div className="mb-8 sm:mb-10 md:mb-14 text-center">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#9A1B1F] mb-2 sm:mb-3 tracking-tight">
  {vertical.name}
</h2>

                 <p className="text-xs sm:text-sm md:text-base text-[#242A4A]/70 max-w-xl mx-auto">

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
    grid-cols-1
    justify-center
    row-gap-16 sm:row-gap-8 md:row-gap-10
    [column-gap:clamp(1.5rem,3vw,2rem)] sm:[column-gap:clamp(1.5rem,4vw,4rem)]
    sm:[grid-template-columns:repeat(auto-fit,minmax(240px,260px))]
  "
>




                  {members.map((member) => (
                   <motion.div
  key={member.id}
  variants={item}
  className="mb-6 sm:mb-0"

>
<Card
  className="
    w-full
    max-w-[360px]
    aspect-[3/4]
    bg-[#2C355D]
    border border-white/10
    hover:border-white/40
    transition-all duration-300
    flex flex-col
    rounded-xl
    overflow-hidden
  "
>




                    <div className="relative aspect-[4/5] bg-[#242A4A] overflow-hidden rounded-t-xl">
                          {member.image ? (
                            <Image
  src={member.image}
  alt={member.name}
  fill
  loading="lazy"
  placeholder="blur"
  blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Crect fill='%23242A4A' width='400' height='400'/%3E%3C/svg%3E"
  className={`
    object-cover
     origin-center
    ${member.imageScale ?? "scale-100"}
    ${member.imageTransform ?? ""}
    ${member.imagePosition ?? "object-top"}
  `}
 />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <User className="w-24 h-24 text-gray-300" />
                            </div>
                          )}
                        </div>

                        <div className="p-2 sm:p-4 bg-[#2C355D] flex flex-col flex-grow">

                         <h3 className="font-bold text-white text-xs sm:text-base line-clamp-2">
                            {member.name}
                          </h3>
                         <p className="text-xs text-gray-300 line-clamp-2">
                            {member.role}
                          </p>

                          <div className="flex justify-center mt-auto pt-2 sm:pt-4">
                            <div className="h-px w-8 sm:w-16 bg-white/10" />
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>

                {(vertical.name === "Fest Secretaries" ||
                  vertical.name === "Deputy Fest Secretaries") && (
                  <div className="flex justify-center mt-10 sm:mt-16 md:mt-20">
                    <div className="h-px w-20 sm:w-32 md:w-48 bg-gray-300/40" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-[#FFFDF9]">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
    <p className="text-center text-sm text-gray-500">
      Developed by{" "}
      <a
        href="https://github.com/28nitin07"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-[#242A4A] transition-colors hover:text-[#FFA543]"
      >
        Nitin S
      </a>
    </p>
  </div>
</footer>

    </div>
  );
}

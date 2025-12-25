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
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const getTeamByVertical = (verticalName: string) => {
    return teamMembers.filter((member) => member.vertical === verticalName);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <p className="text-sm font-medium text-gray-500 tracking-wide uppercase mb-4">
              Agneepath 7.0
            </p>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Meet the Team
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              The passionate individuals behind Ashoka University's premier sports festival.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Team Sections */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        {verticals.map((vertical, verticalIndex) => {
          const members = getTeamByVertical(vertical.name);
          
          if (members.length === 0) return null;

          return (
            <motion.div
              key={vertical.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: verticalIndex * 0.1 }}
              className="mb-24 last:mb-0"
            >
              {/* Vertical Header */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
                  {vertical.name}
                </h2>
                <p className="text-sm text-gray-500">{vertical.description}</p>
              </div>

              {/* Team Members Grid */}
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              >
                {members.map((member) => (
                  <motion.div
                    key={member.id}
                    variants={item}
                  >
                    <Card className="group relative overflow-hidden border border-gray-200 hover:border-gray-400 hover:shadow-lg transition-all duration-300">
                      {/* Image Container */}
                      <div className="relative aspect-square bg-gray-50 overflow-hidden">
                        {/* Gradient overlay on hover */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                          initial={false}
                        />
                        
                        {member.image ? (
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                            priority={false}
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <User className="w-24 h-24 text-gray-300" />
                          </div>
                        )}
                      </div>

                      {/* Member Info */}
                      <div className="p-4 bg-white">
                        <h3 className="font-semibold text-gray-900 text-base mb-1">
                          {member.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {member.role}
                        </p>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

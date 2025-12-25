"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { teamMembers, verticals } from "@/lib/team-data";
import { User } from "lucide-react";
import Image from "next/image";
import { ScrollProgress } from "@/components/scroll-progress";

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
      transition: {
        duration: 0.3,
      }
    },
  };

  const getTeamByVertical = (verticalName: string) => {
    return teamMembers.filter((member) => member.vertical === verticalName);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      <ScrollProgress />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 -left-20 w-72 h-72 bg-gradient-to-br from-orange-400/20 to-red-400/20 rounded-full blur-3xl"
            animate={{ 
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute top-40 -right-20 w-96 h-96 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full blur-3xl"
            animate={{ 
              x: [0, -50, 0],
              y: [0, 40, 0],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
            >
              <p className="text-sm font-medium text-white tracking-wide uppercase">
                🔥 Agneepath 7.0
              </p>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 bg-clip-text text-transparent mb-6 tracking-tight">
              Meet the Team
            </h1>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              The passionate individuals behind Ashoka University&apos;s premier sports festival.
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
              viewport={{ once: true, margin: "-100px", amount: 0.1 }}
              transition={{ duration: 0.3 }}
              className="mb-24 last:mb-0"
            >
              {/* Vertical Header */}
              <div className="mb-10 relative">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-8 bg-gradient-to-b from-orange-500 to-red-500 rounded-full" />
                  <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                    {vertical.name}
                  </h2>
                </div>
                <p className="text-sm text-gray-600 ml-5">{vertical.description}</p>
              </div>

              {/* Team Members Grid */}
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              >
                {members.map((member) => (
                  <motion.div
                    key={member.id}
                    variants={item}
                  >
                    <Card className="group relative overflow-hidden border-2 border-gray-200 hover:border-orange-400 hover:shadow-2xl hover:shadow-orange-200/50 transition-all duration-300">
                      {/* Image Container */}
                      <div className="relative aspect-square bg-gradient-to-br from-orange-50 to-red-50 overflow-hidden">
                        {/* Colorful gradient overlay on hover */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-t from-orange-600/80 via-red-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
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
                      <div className="p-4 bg-white group-hover:bg-gradient-to-br group-hover:from-orange-50 group-hover:to-white transition-colors duration-300">
                        <h3 className="font-bold text-gray-900 group-hover:text-orange-700 text-base mb-1 transition-colors">
                          {member.name}
                        </h3>
                        <p className="text-sm text-gray-600 group-hover:text-orange-600 transition-colors">
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

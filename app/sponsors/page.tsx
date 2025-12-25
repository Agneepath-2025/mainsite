"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { sponsors } from "@/lib/sponsors-data";
import { Building2 } from "lucide-react";
import Image from "next/image";
import { ScrollProgress } from "@/components/scroll-progress";

export default function SponsorsPage() {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-orange-50">
      <ScrollProgress />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-br from-yellow-400/20 to-orange-400/20 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 15, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-1/3 -right-20 w-96 h-96 bg-gradient-to-br from-red-400/20 to-orange-400/20 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 20, repeat: Infinity }}
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
              className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 rounded-full"
            >
              <p className="text-sm font-medium text-white tracking-wide uppercase">
                🤝 Agneepath 7.0
              </p>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent mb-6 tracking-tight">
              Our Sponsors
            </h1>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Partnering with excellence to bring you the best sports fest experience at Ashoka University.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Sponsors Grid */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {sponsors.map((sponsor) => {
          const Component = sponsor.website ? motion.a : motion.div;
          const linkProps = sponsor.website ? {
            href: sponsor.website,
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": `Visit ${sponsor.name} website`
          } : {};
          
          return (
            <Component
              key={sponsor.id}
              {...linkProps}
              variants={item}
              whileHover={sponsor.website ? { y: -8, scale: 1.02 } : { scale: 1.02 }}
              whileTap={sponsor.website ? { scale: 0.98 } : undefined}
              className={sponsor.website ? "cursor-pointer" : "cursor-default"}
            >
              <Card className="group relative overflow-hidden border-2 border-gray-200 hover:border-orange-400 hover:shadow-2xl hover:shadow-orange-200/50 transition-all duration-300">
                <div className="relative aspect-square bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 flex items-center justify-center overflow-hidden">
                  {/* Colorful gradient overlay on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                  
                  {sponsor.logo ? (
                    <Image
                      src={sponsor.logo}
                      alt={`${sponsor.name} logo`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-contain p-8 group-hover:scale-110 transition-transform duration-300"
                      priority={false}
                    />
                  ) : (
                    <Building2 className="w-16 h-16 text-gray-300 group-hover:text-gray-400 transition-colors duration-300" />
                  )}
                </div>
                
                {/* Sponsor name overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-orange-600/90 via-red-600/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white font-bold text-sm drop-shadow-lg">{sponsor.name}</p>
                </div>
              </Card>
            </Component>
          );
        })}
        </motion.div>
      </div>
    </div>
  );
}

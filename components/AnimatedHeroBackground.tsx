"use client";

import { motion } from "framer-motion";

export default function AnimatedHeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-br from-orange-400/20 to-yellow-400/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 18, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/3 -right-20 w-96 h-96 bg-gradient-to-br from-red-400/20 to-orange-400/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 22, repeat: Infinity }}
      />
    </div>
  );
}

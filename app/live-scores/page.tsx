"use client";

import { motion } from "framer-motion";
import { ScrollProgress } from "@/components/scroll-progress";
import { Trophy, Clock } from "lucide-react";

export default function LiveScoresPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50">
      <ScrollProgress />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-br from-red-400/20 to-orange-400/20 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 15, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-1/3 -right-20 w-96 h-96 bg-gradient-to-br from-yellow-400/20 to-red-400/20 rounded-full blur-3xl"
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
              className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 rounded-full"
            >
              <p className="text-sm font-medium text-white tracking-wide uppercase">
                🏆 Live Updates
              </p>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent mb-6 tracking-tight">
              Live Scores
            </h1>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Track real-time scores and updates from all events at Agneepath 7.0.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Live Scores Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative"
        >
          {/* Coming Soon Card */}
          <div className="bg-white rounded-3xl shadow-2xl shadow-orange-200/50 border-2 border-gray-200 p-12 md:p-20 text-center relative overflow-hidden">
            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 opacity-50" />
            
            <div className="relative z-10">
              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className="inline-flex items-center justify-center w-24 h-24 mb-8 bg-gradient-to-br from-red-500 to-orange-500 rounded-full"
              >
                <Trophy className="w-12 h-12 text-white" />
              </motion.div>

              {/* Coming Soon Text */}
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-4"
              >
                Coming Soon
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
              >
                Live score tracking will be available during the event. Stay tuned for real-time updates on all matches and competitions!
              </motion.p>

              {/* Info Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-100 to-red-100 rounded-full border border-orange-200"
              >
                <Clock className="w-5 h-5 text-orange-600" />
                <span className="text-sm font-medium text-orange-700">
                  Live during Agneepath 7.0
                </span>
              </motion.div>
            </div>

            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-red-500/10 to-transparent rounded-br-full" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-orange-500/10 to-transparent rounded-tl-full" />
          </div>

          {/* Iframe placeholder (commented out for later use) */}
          {/* 
          <div className="bg-white rounded-3xl shadow-2xl shadow-orange-200/50 border-2 border-gray-200 overflow-hidden">
            <iframe
              src="YOUR_LIVE_SCORE_TRACKER_URL"
              className="w-full h-[800px]"
              title="Live Score Tracker"
              frameBorder="0"
              allowFullScreen
            />
          </div>
          */}
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-black">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <p className="text-center text-sm text-gray-400">
            Developed by{" "}
            <a
              href="https://github.com/28nitin07"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white hover:text-orange-400 hover:underline transition-colors"
            >
              Nitin S
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

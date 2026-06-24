"use client";

import { motion } from "framer-motion";

export function PulsatingDot() {
  return (
    <div className="flex items-center gap-2.5 font-sans font-medium text-slate-700">
      <div className="relative flex h-2.5 w-2.5 items-center justify-center">
        {/* Pulsing Ripple Effect */}
        <motion.span
          className="absolute h-full w-full rounded-full bg-emerald-400"
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.6, 0, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Solid Center Dot */}
        <span className="relative block h-2 w-2 rounded-full bg-emerald-500" />
      </div>
    </div>
  );
}

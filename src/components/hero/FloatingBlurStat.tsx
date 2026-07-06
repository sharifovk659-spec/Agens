"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

type FloatingBlurStatProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export default function FloatingBlurStat({
  children,
  className = "",
  delay = 0,
}: FloatingBlurStatProps) {
  return (
    <motion.div
      className={`absolute rounded-3xl border border-white/5 bg-white/[0.04] px-5 py-3 shadow-card backdrop-blur-2xl ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 4 + delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

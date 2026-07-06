"use client";

import { motion } from "framer-motion";
import { FaEye } from "react-icons/fa";

type ViewPillProps = {
  value: string;
  className?: string;
  delay?: number;
};

export default function ViewPill({ value, className = "", delay = 0 }: ViewPillProps) {
  return (
    <motion.div
      className={`absolute flex items-center gap-1.5 rounded-full border border-gold/15 bg-dark-900/80 px-3 py-1.5 shadow-card backdrop-blur-md ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
    >
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4 + delay, repeat: Infinity, ease: "easeInOut" }}
        className="flex items-center gap-1.5"
      >
        <FaEye className="text-[10px] text-gold" />
        <span className="text-xs font-bold text-gold">{value}</span>
      </motion.div>
    </motion.div>
  );
}

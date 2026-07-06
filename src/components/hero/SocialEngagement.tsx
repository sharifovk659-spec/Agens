"use client";

import { motion } from "framer-motion";
import { FaComment, FaHeart, FaPaperPlane } from "react-icons/fa";

const stats = [
  { icon: FaHeart, value: "1,5M" },
  { icon: FaComment, value: "1 536" },
  { icon: FaPaperPlane, value: "" },
];

export default function SocialEngagement() {
  return (
    <motion.div
      className="absolute left-[4%] top-[38%] z-[6] hidden flex-col gap-4 lg:flex xl:left-[14%]"
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      {stats.map(({ icon: Icon, value }) => (
        <div key={value || "share"} className="flex flex-col items-center gap-1">
          <Icon className="text-xl text-white/80" />
          {value && (
            <span className="text-[10px] font-semibold text-white/60">{value}</span>
          )}
        </div>
      ))}
    </motion.div>
  );
}

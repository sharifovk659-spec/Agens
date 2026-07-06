"use client";

import { motion } from "framer-motion";
import LaurelIcon from "@/components/founder/LaurelIcon";
import type { FOUNDER_ACHIEVEMENTS } from "@/lib/founder";

type AchievementItem = (typeof FOUNDER_ACHIEVEMENTS)[number];

type AchievementBadgeProps = {
  item: AchievementItem;
  index: number;
};

export default function AchievementBadge({ item, index }: AchievementBadgeProps) {
  return (
    <motion.div
      className="flex flex-col items-center rounded-[20px] border border-gold/10 bg-card-gradient px-3 py-4 text-center shadow-card sm:px-4 sm:py-5"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ scale: 1.03 }}
    >
      <LaurelIcon className="mb-2 h-5 w-10 text-gold/70" />
      <p className="text-xl font-extrabold leading-none text-gold sm:text-2xl">
        {item.value}
        {item.unit ? (
          <span className="ml-1 text-sm font-semibold text-gold sm:text-base">
            {item.unit}
          </span>
        ) : null}
      </p>
      <p className="mt-2 text-[11px] leading-snug text-muted sm:text-xs">
        {item.label}
      </p>
    </motion.div>
  );
}

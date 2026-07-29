"use client";

import { motion } from "framer-motion";
import LaurelIcon from "@/components/founder/LaurelIcon";
import { useLanguage } from "@/lib/i18n/context";
import type { FOUNDER_ACHIEVEMENTS } from "@/lib/founder";

type AchievementItem = (typeof FOUNDER_ACHIEVEMENTS)[number];

type AchievementBadgeProps = {
  item: AchievementItem;
  index: number;
};

export default function AchievementBadge({ item, index }: AchievementBadgeProps) {
  const { t } = useLanguage();
  const label = t.founder.achievements[item.id] ?? item.label;

  return (
    <motion.div
      className="flex flex-col items-center rounded-[16px] border border-gold/10 bg-card-gradient px-2.5 py-3.5 text-center shadow-card sm:rounded-[20px] sm:px-4 sm:py-5"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ scale: 1.03 }}
    >
      <LaurelIcon className="mb-1.5 h-4 w-8 text-gold/70 sm:mb-2 sm:h-5 sm:w-10" />
      <p className="text-lg font-extrabold leading-none text-gold sm:text-xl sm:text-2xl">
        {item.value}
        {item.unit ? (
          <span className="ml-1 text-xs font-semibold text-gold sm:text-sm sm:text-base">
            {item.unit}
          </span>
        ) : null}
      </p>
      <p className="mt-1.5 text-[10px] leading-snug text-muted sm:mt-2 sm:text-[11px] sm:text-xs">
        {label}
      </p>
    </motion.div>
  );
}

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
      className="flex items-center gap-1.5 sm:gap-2"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <LaurelIcon side="left" className="h-10 w-5 shrink-0 text-gold sm:h-12 sm:w-6" />

      <div className="min-w-0 flex-1 text-center">
        <p className="text-[13px] font-extrabold leading-tight tracking-tight text-beige sm:text-sm sm:text-base">
          <span className="text-gold">
            {item.value}
            {item.unit ? ` ${item.unit}` : ""}
          </span>
        </p>
        <p className="mt-0.5 text-[10px] leading-snug text-muted sm:text-[11px] sm:text-xs">
          {label}
        </p>
      </div>

      <LaurelIcon side="right" className="h-10 w-5 shrink-0 text-gold sm:h-12 sm:w-6" />
    </motion.div>
  );
}

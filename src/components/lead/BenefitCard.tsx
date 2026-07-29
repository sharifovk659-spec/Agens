"use client";

import { motion } from "framer-motion";
import { HiCheck } from "react-icons/hi";
import { useLanguage } from "@/lib/i18n/context";
import type { LEAD_BENEFITS } from "@/lib/form";

type BenefitItem = (typeof LEAD_BENEFITS)[number];

type BenefitCardProps = {
  item: BenefitItem;
  index: number;
};

export default function BenefitCard({ item, index }: BenefitCardProps) {
  const { t } = useLanguage();
  const copy = t.contact.benefits[item.id] ?? {
    title: item.title,
    description: item.description,
  };

  return (
    <motion.div
      className="flex gap-3 rounded-[16px] border border-gold/10 bg-card-gradient p-3.5 shadow-card sm:gap-4 sm:rounded-[20px] sm:p-4 sm:p-5"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      whileHover={{ scale: 1.01 }}
    >
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold sm:h-9 sm:w-9">
        <HiCheck className="text-base sm:text-lg" />
      </div>
      <div className="min-w-0">
        <h3 className="text-sm font-bold text-gold sm:text-base">{copy.title}</h3>
        <p className="mt-1 text-[11px] leading-relaxed text-muted sm:text-xs sm:text-sm">
          {copy.description}
        </p>
      </div>
    </motion.div>
  );
}

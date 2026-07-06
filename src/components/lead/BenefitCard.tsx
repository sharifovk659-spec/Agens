"use client";

import { motion } from "framer-motion";
import { HiCheck } from "react-icons/hi";
import type { LEAD_BENEFITS } from "@/lib/form";

type BenefitItem = (typeof LEAD_BENEFITS)[number];

type BenefitCardProps = {
  item: BenefitItem;
  index: number;
};

export default function BenefitCard({ item, index }: BenefitCardProps) {
  return (
    <motion.div
          className="flex gap-4 rounded-[20px] border border-gold/10 bg-card-gradient p-4 shadow-card sm:p-5"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold">
        <HiCheck className="text-lg" />
      </div>
      <div>
        <h3 className="text-sm font-bold text-gold sm:text-base">{item.title}</h3>
        <p className="mt-1 text-xs leading-relaxed text-muted sm:text-sm">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

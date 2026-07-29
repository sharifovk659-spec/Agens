"use client";

import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import CaseCard from "@/components/cases/CaseCard";
import DualRowMarquee from "@/components/ui/DualRowMarquee";
import { useLanguage } from "@/lib/i18n/context";
import { AGENCY_CASES } from "@/lib/cases";

export default function AgencyCases() {
  const { t } = useLanguage();

  return (
    <section id="cases" className="relative overflow-hidden py-10 sm:py-12 lg:py-16">
      <div className="absolute inset-0 bg-dark-gradient" />
      <div className="absolute inset-0 bg-radial-glow opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <motion.div
          className="mb-6 sm:mb-8 sm:mb-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading text-3xl sm:text-4xl sm:text-5xl lg:text-6xl">
            {t.cases.title}
          </h2>
          <p className="mt-2 flex items-center gap-2 text-sm text-muted sm:mt-3 sm:text-base">
            {t.cases.hint}
            <HiArrowRight className="shrink-0 text-gold" />
          </p>
        </motion.div>
      </div>

      <DualRowMarquee speed={36} className="px-4 sm:px-6">
        {AGENCY_CASES.map((item, i) => (
          <CaseCard key={item.id} item={item} index={i} />
        ))}
      </DualRowMarquee>
    </section>
  );
}

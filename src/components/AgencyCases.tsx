"use client";

import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import CaseCard from "@/components/cases/CaseCard";
import { AGENCY_CASES } from "@/lib/cases";

export default function AgencyCases() {
  return (
    <section id="cases" className="relative overflow-hidden py-10 sm:py-12 lg:py-16">
      <div className="absolute inset-0 bg-dark-gradient" />
      <div className="absolute inset-0 bg-radial-glow opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          className="mb-8 sm:mb-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading text-4xl sm:text-5xl lg:text-6xl">
            AGENCY CASES
          </h2>
          <p className="mt-3 flex items-center gap-2 text-sm text-muted sm:text-base">
            Scroll to the right
            <HiArrowRight className="text-gold" />
          </p>
        </motion.div>

        <div className="cases-scroll -mx-4 px-4 sm:-mx-6 sm:px-6">
          {AGENCY_CASES.map((item, i) => (
            <CaseCard key={item.id} item={item} index={i} />
          ))}
        </div>

        <p className="mt-4 hidden text-center text-xs text-white/30 md:block">
          Click on the story to learn more about the case
        </p>
      </div>
    </section>
  );
}

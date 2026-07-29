"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/context";
import { HERO_STATS } from "@/lib/stats";

export default function StatsSection() {
  const { t } = useLanguage();

  return (
    <section className="relative py-8 sm:py-12 lg:py-14">
      <div className="absolute inset-0 bg-dark" />
      <div className="gold-line absolute inset-x-0 top-0" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 gap-2.5 sm:gap-4 lg:grid-cols-4">
          {HERO_STATS.map((stat, i) => (
            <motion.article
              key={stat.id}
              className="card-hover p-3.5 sm:p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <p className="font-display text-2xl font-bold text-gold sm:text-3xl sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1.5 text-[11px] leading-snug text-beige-muted sm:mt-2 sm:text-xs sm:text-sm sm:leading-relaxed">
                {t.stats[stat.id]}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import AchievementBadge from "@/components/founder/AchievementBadge";
import FounderPhotoCard from "@/components/founder/FounderPhotoCard";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/lib/i18n/context";
import { FOUNDER, FOUNDER_ACHIEVEMENTS } from "@/lib/founder";

export default function FounderSection() {
  const { t } = useLanguage();

  return (
    <section id="founder" className="relative overflow-hidden py-10 sm:py-12 lg:py-16">
      <div className="absolute inset-0 bg-dark" />
      <div className="absolute inset-0 bg-radial-glow opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">
          <FounderPhotoCard />

          <div className="min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="eyebrow mb-3">{t.founder.eyebrow}</p>
              <h2 className="section-heading break-words">{FOUNDER.name}</h2>
              <p className="mt-2 text-sm text-muted sm:text-base">{t.founder.role}</p>
            </motion.div>

            <div className="mt-6 grid grid-cols-2 gap-2.5 sm:mt-8 sm:gap-4 lg:mt-10">
              {FOUNDER_ACHIEVEMENTS.map((item, i) => (
                <AchievementBadge key={item.id} item={item} index={i} />
              ))}
            </div>

            <motion.div
              className="mt-6 sm:mt-8 lg:mt-10"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              <Button href="#contact" className="w-full sm:w-auto">
                {t.cta}
                <HiArrowRight className="text-lg" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

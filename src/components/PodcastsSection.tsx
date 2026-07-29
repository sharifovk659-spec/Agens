"use client";

import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import PodcastCard from "@/components/podcasts/PodcastCard";
import InfiniteMarquee from "@/components/ui/InfiniteMarquee";
import { useLanguage } from "@/lib/i18n/context";
import { PODCASTS } from "@/lib/podcasts";

export default function PodcastsSection() {
  const { t } = useLanguage();

  return (
    <section id="reels" className="relative overflow-hidden py-10 sm:py-12 lg:py-16">
      <div className="absolute inset-0 bg-dark-gradient" />
      <div className="absolute inset-0 bg-radial-glow opacity-25" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <motion.div
          className="mb-6 sm:mb-8 sm:mb-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl">
            {t.reels.title}
          </h2>
          <p className="mt-2 flex items-center gap-2 text-sm text-muted sm:mt-3 sm:text-base">
            {t.reels.hint}
            <HiArrowRight className="shrink-0 text-gold" />
          </p>
        </motion.div>
      </div>

      <InfiniteMarquee speed={28} className="px-4 sm:px-6" pauseOnHover>
        {PODCASTS.map((item, i) => (
          <PodcastCard key={item.id} item={item} index={i} />
        ))}
      </InfiniteMarquee>
    </section>
  );
}

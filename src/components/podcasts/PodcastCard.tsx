"use client";

import { motion } from "framer-motion";
import LazyYouTube from "@/components/podcasts/LazyYouTube";
import { useLanguage } from "@/lib/i18n/context";
import type { Podcast } from "@/lib/podcasts";

type PodcastCardProps = {
  item: Podcast;
  index: number;
};

export default function PodcastCard({ item, index }: PodcastCardProps) {
  const { t } = useLanguage();
  const title = t.reels.items[item.id] ?? item.title;

  return (
    <motion.article
      className={`shrink-0 ${
        item.short ? "w-[180px] sm:w-[220px] sm:w-[240px]" : "w-[280px] sm:w-[340px] lg:w-[360px]"
      }`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
    >
      <div className="rounded-[20px] border border-gold/15 bg-card-gradient p-3 shadow-premium sm:rounded-[28px] sm:p-5">
        <p className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-gold/60 sm:text-[11px]">
          {t.reels.client}
        </p>
        <h3 className="mb-3 line-clamp-2 text-xs font-bold leading-snug text-beige sm:mb-4 sm:text-sm sm:text-base">
          {title}
        </h3>
        <div className="relative">
          <LazyYouTube videoId={item.videoId} title={title} short={item.short} />
        </div>
      </div>
    </motion.article>
  );
}

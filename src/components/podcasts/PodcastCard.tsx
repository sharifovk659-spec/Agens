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
      className="group relative w-[180px] shrink-0 sm:w-[220px] sm:w-[240px]"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
    >
      <div className="relative aspect-[9/16] overflow-hidden rounded-[22px] border border-gold/15 bg-dark shadow-card transition-[border-color,box-shadow,transform] duration-700 ease-out group-hover:-translate-y-1.5 group-hover:border-gold/45 group-hover:shadow-glow sm:rounded-[28px]">
        <LazyYouTube
          videoId={item.videoId}
          title={title}
          short={item.short}
          fillParent
        />

        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          aria-hidden
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,155,92,0.22)_0%,transparent_70%)]" />
          <div className="absolute inset-0 ring-1 ring-inset ring-gold/35" />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-4 p-3 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 sm:p-4">
          <p className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-gold/70 sm:text-[11px]">
            {t.reels.client}
          </p>
          <h3 className="line-clamp-3 text-sm font-bold leading-snug text-beige sm:text-base">
            {title}
          </h3>
        </div>
      </div>
    </motion.article>
  );
}

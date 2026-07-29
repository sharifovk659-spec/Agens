"use client";

import { motion } from "framer-motion";
import LazyYouTube from "@/components/podcasts/LazyYouTube";
import type { Podcast } from "@/lib/podcasts";

type PodcastCardProps = {
  item: Podcast;
  index: number;
};

export default function PodcastCard({ item, index }: PodcastCardProps) {
  return (
    <motion.article
      className={`shrink-0 snap-start ${
        item.short ? "w-[220px] sm:w-[240px]" : "w-[300px] sm:w-[340px] lg:w-[360px]"
      }`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
    >
      <div className="rounded-[24px] border border-gold/15 bg-card-gradient p-4 shadow-premium sm:rounded-[28px] sm:p-5">
        <p className="mb-1 text-[11px] font-semibold uppercase tracking-widest text-gold/60">
          {item.client}
        </p>
        <h3 className="mb-4 line-clamp-2 text-sm font-bold leading-snug text-beige sm:text-base">
          {item.title}
        </h3>
        <div className="relative">
          <LazyYouTube
            videoId={item.videoId}
            title={item.title}
            short={item.short}
          />
        </div>
      </div>
    </motion.article>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import type { AgencyCase } from "@/lib/cases";

type CaseCardProps = {
  item: AgencyCase;
  index: number;
};

export default function CaseCard({ item, index }: CaseCardProps) {
  const href = item.videoId
    ? `https://www.youtube.com/shorts/${item.videoId}`
    : undefined;

  const media = (
    <div className="relative aspect-[9/16] overflow-hidden rounded-[28px] border border-gold/15 bg-dark shadow-card transition-shadow duration-300 group-hover:border-gold/30 group-hover:shadow-premium">
      <Image
        src={item.image}
        alt={item.name}
        fill
        sizes="270px"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
        quality={90}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent" />

      {item.video && (
        <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold/40 bg-background/55 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
          <FaPlay className="ml-0.5 text-sm text-gold" />
        </div>
      )}

      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
        <div className="mb-2 flex flex-wrap gap-1.5">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-gold/30 bg-gold/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-gold"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-base font-bold text-gold sm:text-lg">{item.name}</h3>
        <p className="mt-1 line-clamp-3 text-xs leading-relaxed text-muted sm:text-[13px]">
          {item.result}
        </p>
      </div>
    </div>
  );

  return (
    <motion.article
      className="group relative w-[220px] shrink-0 snap-start sm:w-[250px] lg:w-[270px]"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      whileHover={{ scale: 1.02 }}
    >
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
          aria-label={`Open reel: ${item.name}`}
        >
          {media}
        </a>
      ) : (
        media
      )}
    </motion.article>
  );
}

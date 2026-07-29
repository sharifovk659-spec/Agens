"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HiArrowUpRight } from "react-icons/hi2";
import { useLanguage } from "@/lib/i18n/context";
import type { Resource } from "@/lib/resources";

type ResourceCardProps = {
  item: Resource;
  index: number;
};

export default function ResourceCard({ item, index }: ResourceCardProps) {
  const { t } = useLanguage();
  const copy = t.resources.items[item.id] ?? {
    title: item.title,
    description: item.description,
  };

  return (
    <motion.a
      href={item.href}
      target={item.href.startsWith("http") ? "_blank" : undefined}
      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group relative w-[240px] shrink-0 overflow-hidden rounded-2xl border border-gold/15 bg-card-gradient shadow-card transition-[border-color,box-shadow] duration-300 hover:border-gold/35 hover:shadow-premium sm:w-[300px] lg:w-[360px]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: Math.min(index, 4) * 0.06 }}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={item.image}
          alt={copy.title}
          fill
          sizes="(max-width: 640px) 240px, 360px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          quality={95}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      <div className="p-4 sm:p-5">
        <div className="mb-2 flex items-start justify-between gap-2 sm:gap-3">
          <h3 className="text-sm font-bold leading-snug text-gold sm:text-base sm:text-lg">
            {copy.title}
          </h3>
          <HiArrowUpRight className="mt-0.5 shrink-0 text-base text-beige-muted transition-colors group-hover:text-gold sm:text-lg" />
        </div>
        <p className="line-clamp-3 text-[11px] leading-relaxed text-beige-muted sm:text-xs sm:text-sm">
          {copy.description}
        </p>
      </div>
    </motion.a>
  );
}

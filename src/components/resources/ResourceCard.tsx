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
      className="group relative block w-[200px] shrink-0 sm:w-[240px] sm:w-[260px] lg:w-[280px]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: Math.min(index, 4) * 0.06 }}
    >
      <div className="relative aspect-[9/16] overflow-hidden rounded-[22px] border border-gold/15 bg-dark shadow-card transition-[border-color,box-shadow,transform] duration-700 ease-out group-hover:-translate-y-1.5 group-hover:border-gold/45 group-hover:shadow-glow sm:rounded-[28px]">
        <Image
          src={item.image}
          alt={copy.title}
          fill
          sizes="(max-width: 640px) 200px, 280px"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.1]"
          loading="lazy"
          quality={95}
        />

        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          aria-hidden
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,155,92,0.22)_0%,transparent_70%)]" />
          <div className="absolute inset-0 ring-1 ring-inset ring-gold/35" />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/35 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="absolute inset-x-0 bottom-0 translate-y-4 p-3 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 sm:p-4 sm:p-5">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-base font-bold leading-snug text-gold sm:text-lg">
              {copy.title}
            </h3>
            <HiArrowUpRight className="mt-0.5 shrink-0 text-lg text-gold/90" />
          </div>
          <p className="mt-2 text-xs leading-relaxed text-beige sm:text-sm">
            {copy.description}
          </p>
        </div>
      </div>
    </motion.a>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/context";
import type { AgencyCase } from "@/lib/cases";

type CaseCardProps = {
  item: AgencyCase;
  index: number;
};

export default function CaseCard({ item, index }: CaseCardProps) {
  const { t } = useLanguage();
  const copy = t.cases.items[item.id] ?? {
    name: item.name,
    result: item.result,
  };

  return (
    <motion.article
      className="group relative w-[180px] shrink-0 sm:w-[220px] sm:w-[250px] lg:w-[270px]"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: Math.min(index, 6) * 0.05 }}
    >
      <div className="relative aspect-[9/16] overflow-hidden rounded-[22px] border border-gold/15 bg-dark shadow-card transition-[border-color,box-shadow,transform] duration-700 ease-out group-hover:-translate-y-1.5 group-hover:border-gold/50 group-hover:shadow-glow sm:rounded-[28px]">
        <Image
          src={item.image}
          alt={copy.name}
          fill
          sizes="(max-width: 640px) 180px, 270px"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.12]"
          loading="lazy"
          quality={95}
        />

        {/* Hover glow */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          aria-hidden
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,155,92,0.26)_0%,transparent_70%)]" />
          <div className="absolute inset-0 ring-1 ring-inset ring-gold/40" />
        </div>

        {/* Text + gradient — hidden until hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="absolute inset-x-0 bottom-0 translate-y-4 p-3 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 sm:p-4 sm:p-5">
          <div className="mb-1.5 flex flex-wrap gap-1 sm:mb-2 sm:gap-1.5">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-gold/30 bg-gold/10 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-gold sm:px-2 sm:text-[10px]"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-sm font-bold text-gold sm:text-base sm:text-lg">
            {copy.name}
          </h3>
          <p className="mt-1 line-clamp-3 text-[11px] leading-relaxed text-muted sm:text-xs sm:text-[13px]">
            {copy.result}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

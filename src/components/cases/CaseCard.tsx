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
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.14]"
          loading="lazy"
          quality={95}
        />

        {/* Hover glow — visible only on mouse over */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          aria-hidden
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,155,92,0.28)_0%,transparent_70%)]" />
          <div className="absolute inset-0 ring-1 ring-inset ring-gold/40" />
        </div>

        {/* Text always hidden — image-only slides */}
        <span className="sr-only">
          {copy.name}. {copy.result}
        </span>
      </div>
    </motion.article>
  );
}

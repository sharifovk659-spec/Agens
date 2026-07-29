"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HiCheck } from "react-icons/hi";
import { useLanguage } from "@/lib/i18n/context";
import { SITE } from "@/lib/constants";
import { FOUNDER } from "@/lib/founder";

export default function FounderPhotoCard() {
  const { t } = useLanguage();

  return (
    <motion.div
      className="relative mx-auto w-full max-w-md lg:max-w-none"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative">
        {/* Thick site-color frame (gold/beige, not sample lime) */}
        <div className="overflow-hidden rounded-[28px] border-[6px] border-beige/90 bg-dark shadow-premium sm:rounded-[36px] sm:border-[8px]">
          <div className="relative aspect-[3/4] overflow-hidden rounded-[22px] sm:rounded-[28px]">
            <Image
              src={FOUNDER.photo}
              alt={FOUNDER.name}
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-cover object-top"
              loading="lazy"
              quality={95}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
          </div>
        </div>

        {/* Instagram pill — overlaid on photo */}
        <a
          href={SITE.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-[18%] left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full border border-gold/20 bg-beige px-3 py-2 shadow-premium transition hover:bg-gold-light sm:bottom-[20%] sm:gap-2.5 sm:px-4 sm:py-2.5"
        >
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold text-background sm:h-6 sm:w-6">
            <HiCheck className="text-[10px] sm:text-xs" />
          </span>
          <span className="text-left leading-tight">
            <span className="block text-[9px] text-background/60 sm:text-[10px]">
              {t.founder.myInstagram}
            </span>
            <span className="block text-xs font-bold text-background sm:text-sm">
              {SITE.instagramHandle}
            </span>
          </span>
        </a>

        {/* Quote card — overlaps bottom-left */}
        <motion.div
          className="absolute -bottom-4 left-0 z-20 max-w-[92%] rounded-2xl border border-gold/15 bg-dark/95 px-3 py-3 shadow-premium backdrop-blur-md sm:-bottom-6 sm:max-w-[85%] sm:rounded-3xl sm:px-4 sm:py-4 lg:-left-3"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.5 }}
        >
          <div className="flex gap-2.5 sm:gap-3">
            <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border border-gold/30 sm:h-11 sm:w-11">
              <Image
                src={FOUNDER.photo}
                alt=""
                fill
                sizes="44px"
                className="object-cover object-top"
              />
            </div>
            <p className="text-[11px] leading-relaxed text-muted sm:text-xs sm:text-[13px]">
              &ldquo;{t.founder.testimonial}&rdquo;
            </p>
          </div>
        </motion.div>
      </div>

      {/* Spacer so quote doesn't collide with next content on mobile */}
      <div className="h-16 sm:h-20" aria-hidden />
    </motion.div>
  );
}

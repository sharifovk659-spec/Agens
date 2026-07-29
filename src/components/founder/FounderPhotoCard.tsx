"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { useLanguage } from "@/lib/i18n/context";
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
      <motion.div
        className="absolute -top-2 left-2 right-2 z-20 rounded-2xl border border-gold/15 bg-background/95 px-3 py-2.5 shadow-premium backdrop-blur-md sm:left-4 sm:right-auto sm:max-w-[260px] sm:px-4 sm:py-3 lg:-left-4 lg:top-6"
        initial={{ opacity: 0, y: -12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <p className="text-[11px] leading-relaxed text-muted sm:text-xs sm:text-[13px]">
          &ldquo;{t.founder.testimonial}&rdquo;
        </p>
      </motion.div>

      <div className="relative mt-14 overflow-hidden rounded-[28px] bg-gold-gradient p-2.5 pt-3 shadow-glow sm:mt-20 sm:rounded-[36px] sm:p-4">
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
        </div>

        <a
          href={FOUNDER.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2.5 flex items-center justify-center gap-2 rounded-2xl bg-background/90 px-3 py-2.5 text-sm font-medium text-gold transition-colors hover:bg-background sm:mt-3 sm:px-4"
        >
          <FaInstagram className="text-gold" />
          {FOUNDER.handle}
        </a>
      </div>
    </motion.div>
  );
}

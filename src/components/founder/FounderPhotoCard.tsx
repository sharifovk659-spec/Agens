"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FOUNDER } from "@/lib/founder";

export default function FounderPhotoCard() {
  return (
    <motion.div
      className="relative mx-auto w-full max-w-md lg:max-w-none"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Testimonial bubble */}
      <motion.div
        className="absolute -top-2 left-2 right-2 z-20 rounded-2xl border border-white/10 bg-dark-900/95 px-4 py-3 shadow-premium backdrop-blur-md sm:left-4 sm:right-auto sm:max-w-[260px] lg:-left-4 lg:top-6"
        initial={{ opacity: 0, y: -12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <p className="text-xs leading-relaxed text-muted sm:text-[13px]">
          &ldquo;{FOUNDER.testimonial}&rdquo;
        </p>
      </motion.div>

      {/* Lime photo card */}
      <div className="relative mt-16 overflow-hidden rounded-[32px] bg-gold-gradient p-3 pt-4 shadow-glow sm:mt-20 sm:rounded-[36px] sm:p-4">
        <div className="relative aspect-[3/4] overflow-hidden rounded-[24px] sm:rounded-[28px]">
          <Image
            src={FOUNDER.photo}
            alt={FOUNDER.name}
            fill
            sizes="(max-width: 768px) 100vw, 420px"
            className="object-cover object-top"
            loading="lazy"
          />
        </div>

        {/* Instagram badge */}
        <a
          href={FOUNDER.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 flex items-center justify-center gap-2 rounded-2xl bg-dark-900/90 px-4 py-2.5 text-sm font-medium text-gold transition-colors hover:bg-dark-900"
        >
          <FaInstagram className="text-gold" />
          {FOUNDER.handle}
        </a>
      </div>
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";
import { HiCheck } from "react-icons/hi";

type HeroCtaButtonProps = {
  href?: string;
};

export default function HeroCtaButton({ href = "#contact" }: HeroCtaButtonProps) {
  return (
    <motion.a
      href={href}
      className="inline-flex items-center gap-3 rounded-full bg-gold px-6 py-3.5 text-sm font-bold text-gold-deep shadow-cta transition-[transform,background-color] duration-300 hover:bg-gold-light sm:px-8 sm:py-4 sm:text-base"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold-deep sm:h-8 sm:w-8">
        <HiCheck className="text-sm text-gold sm:text-base" />
      </span>
      Start working with us
    </motion.a>
  );
}

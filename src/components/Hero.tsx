"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi";
import Button from "@/components/ui/Button";
import AccountScrollColumn from "@/components/hero/AccountScrollColumn";
import LaurelIcon from "@/components/hero/LaurelIcon";
import MoneyLayer from "@/components/hero/MoneyLayer";
import SocialEngagement from "@/components/hero/SocialEngagement";
import ViewPill from "@/components/hero/ViewPill";
import { useLanguage } from "@/lib/i18n/context";
import {
  CITY_IMAGE,
  HERO_VIEWS,
  LEFT_ACCOUNT_IMAGES,
  RIGHT_ACCOUNT_IMAGES,
} from "@/lib/hero";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-radial-glow" />

      <div className="absolute inset-x-0 bottom-0 h-[45%] opacity-20 sm:h-[50%] sm:opacity-25">
        <Image
          src={CITY_IMAGE}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-bottom blur-[3px]"
          loading="lazy"
          aria-hidden
        />
      </div>

      <div className="absolute inset-0 bg-cinematic-overlay" />
      <div className="absolute bottom-0 left-0 top-0 hidden w-px bg-gold-line opacity-40 sm:block" />
      <div className="absolute bottom-0 right-0 top-0 hidden w-px bg-gold-line opacity-40 sm:block" />

      <MoneyLayer />
      <AccountScrollColumn images={LEFT_ACCOUNT_IMAGES} side="left" />
      <AccountScrollColumn images={RIGHT_ACCOUNT_IMAGES} side="right" />
      <div className="hidden lg:block">
        <SocialEngagement />
      </div>

      {HERO_VIEWS.map((v, i) => (
        <ViewPill key={v.value} value={v.value} className={v.className} delay={0.3 + i * 0.08} />
      ))}

      <div className="relative z-[10] mx-auto w-full max-w-4xl px-4 pb-10 pt-24 text-center sm:px-8 sm:pb-12 sm:pt-32 lg:px-12">
        <div className="pointer-events-none absolute inset-x-0 top-[22%] bottom-[4%] -z-10 rounded-[32px] bg-[radial-gradient(ellipse_at_center,rgba(6,5,4,0.72)_0%,rgba(6,5,4,0.35)_50%,transparent_75%)] sm:inset-x-[-4%]" />

        <motion.p
          className="eyebrow mb-3 px-2 sm:mb-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t.hero.eyebrow}
        </motion.p>

        <motion.h1
          className="font-display text-[clamp(2.1rem,12vw,7.5rem)] font-bold leading-[0.95] tracking-[0.04em] text-beige sm:tracking-[0.08em]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          QIMAT
          <br />
          <span className="text-gradient-gold">AGENCY</span>
        </motion.h1>

        <motion.div
          className="mx-auto mt-4 flex max-w-md items-center justify-center gap-2 px-2 sm:mt-5 sm:gap-3 sm:max-w-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <LaurelIcon className="hidden h-4 w-7 shrink-0 text-gold/70 xs:block sm:block" />
          <p className="text-xs leading-snug text-beige drop-shadow-[0_1px_10px_rgba(6,5,4,0.75)] sm:text-sm sm:text-base">
            {t.hero.subtitle}
          </p>
          <LaurelIcon className="hidden h-4 w-7 shrink-0 scale-x-[-1] text-gold/70 sm:block" />
        </motion.div>

        <motion.p
          className="mx-auto mt-4 max-w-lg px-1 text-sm leading-relaxed text-beige/95 drop-shadow-[0_1px_12px_rgba(6,5,4,0.8)] sm:mt-5 sm:text-base"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {t.hero.description}
        </motion.p>

        <motion.div
          className="mt-7 flex justify-center sm:mt-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="relative inline-flex w-fit max-w-full flex-col items-stretch gap-3 rounded-2xl border border-gold/20 bg-background/92 px-3 py-3 shadow-premium backdrop-blur-xl sm:flex-row sm:items-center sm:gap-3 sm:px-4 sm:py-3.5">
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_center,rgba(200,155,92,0.08)_0%,transparent_72%)]" />
            <Button href="#contact" className="relative z-[1] w-full whitespace-nowrap sm:w-auto">
              {t.cta}
            </Button>
            <Button href="#cases" variant="outline" className="relative z-[1] w-full whitespace-nowrap sm:w-auto">
              {t.viewCases}
              <HiArrowRight />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

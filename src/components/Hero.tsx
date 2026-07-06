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
import {
  CITY_IMAGE,
  HERO_VIEWS,
  LEFT_ACCOUNT_IMAGES,
  RIGHT_ACCOUNT_IMAGES,
} from "@/lib/hero";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-radial-glow" />

      <div className="absolute inset-x-0 bottom-0 h-[50%] opacity-25">
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
      <div className="absolute bottom-0 left-0 top-0 w-px bg-gold-line opacity-40" />
      <div className="absolute bottom-0 right-0 top-0 w-px bg-gold-line opacity-40" />

      <MoneyLayer />
      <AccountScrollColumn images={LEFT_ACCOUNT_IMAGES} side="left" />
      <AccountScrollColumn images={RIGHT_ACCOUNT_IMAGES} side="right" />
      <SocialEngagement />

      {HERO_VIEWS.map((v, i) => (
        <ViewPill key={v.value} value={v.value} className={v.className} delay={0.3 + i * 0.08} />
      ))}

      <div className="relative z-[10] mx-auto max-w-4xl px-4 pt-28 text-center sm:px-8 sm:pt-32 lg:px-12">
        <div className="pointer-events-none absolute inset-x-[-4%] top-[28%] bottom-[8%] -z-10 rounded-[32px] bg-[radial-gradient(ellipse_at_center,rgba(6,5,4,0.62)_0%,rgba(6,5,4,0.28)_50%,transparent_72%)]" />

        <motion.p
          className="eyebrow mb-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Social Media Agency
        </motion.p>

        <motion.h1
          className="font-display text-[clamp(2.5rem,11vw,7.5rem)] font-bold leading-[0.95] tracking-[0.06em] text-beige sm:tracking-[0.08em]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          BRAND
          <br />
          <span className="text-gradient-gold">BOOST</span>
        </motion.h1>

        <motion.div
          className="mx-auto mt-5 flex items-center justify-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <LaurelIcon className="h-4 w-7 text-gold/70" />
          <p className="text-sm text-beige drop-shadow-[0_1px_10px_rgba(6,5,4,0.75)] sm:text-base">
            The UAE Record-Breaking Agency
          </p>
          <LaurelIcon className="h-4 w-7 scale-x-[-1] text-gold/70" />
        </motion.div>

        <motion.p
          className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-beige/95 drop-shadow-[0_1px_12px_rgba(6,5,4,0.8)] sm:text-base"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          We not only bring followers and popularity — we scale clients&apos;
          businesses through social media
        </motion.p>

        <motion.div
          className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button href="#contact">Start working with us</Button>
          <Button href="#cases" variant="outline">
            View cases
            <HiArrowRight />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

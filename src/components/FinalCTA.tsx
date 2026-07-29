"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HiArrowRight } from "react-icons/hi";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/lib/i18n/context";

const STUDIO_IMAGE =
  "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&q=60&auto=format&fit=crop&fm=webp";

export default function FinalCTA() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20">
      <div className="absolute inset-0 bg-background">
        <Image
          src={STUDIO_IMAGE}
          alt=""
          fill
          sizes="100vw"
          className="scale-110 object-cover opacity-30 blur-2xl"
          loading="lazy"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
        <div className="absolute inset-0 bg-radial-glow opacity-40" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <motion.h2
          className="font-display text-2xl font-bold leading-tight tracking-wide text-beige sm:text-3xl sm:text-4xl lg:text-5xl"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t.finalCta.before}{" "}
          <span className="text-gold">{t.finalCta.highlight}</span>
        </motion.h2>

        <motion.div
          className="mt-7 flex justify-center sm:mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Button href="#contact" className="w-full max-w-sm sm:w-auto">
            {t.cta}
            <HiArrowRight className="text-lg" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

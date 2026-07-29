"use client";

import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import ResourceCard from "@/components/resources/ResourceCard";
import Button from "@/components/ui/Button";
import InfiniteMarquee from "@/components/ui/InfiniteMarquee";
import { useLanguage } from "@/lib/i18n/context";
import { RESOURCES } from "@/lib/resources";

export default function ResourcesSection() {
  const { t } = useLanguage();

  return (
    <section id="academy" className="relative overflow-hidden py-10 sm:py-12 lg:py-16">
      <div className="absolute inset-0 bg-dark" />
      <div className="absolute inset-0 bg-radial-glow opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        <motion.div
          className="mb-8 flex flex-col gap-4 sm:mb-10 sm:mb-12 sm:flex-row sm:items-end sm:justify-between sm:gap-5"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="min-w-0">
            <p className="eyebrow mb-3">{t.resources.eyebrow}</p>
            <h2 className="section-heading max-w-xl break-words">
              {t.resources.title}
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted sm:mt-4 sm:text-base">
              {t.resources.description}
            </p>
          </div>

          <Button href="#contact" className="w-full shrink-0 self-start sm:w-auto sm:self-auto">
            {t.cta}
            <HiArrowRight className="text-lg" />
          </Button>
        </motion.div>
      </div>

      <InfiniteMarquee speed={32} className="px-4 sm:px-8 lg:px-12" pauseOnHover>
        {RESOURCES.map((item, i) => (
          <ResourceCard key={item.id} item={item} index={i} />
        ))}
      </InfiniteMarquee>
    </section>
  );
}

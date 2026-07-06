"use client";

import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import ResourceCard from "@/components/resources/ResourceCard";
import Button from "@/components/ui/Button";
import { RESOURCES } from "@/lib/resources";

export default function ResourcesSection() {
  return (
    <section id="academy" className="relative overflow-hidden py-10 sm:py-12 lg:py-16">
      <div className="absolute inset-0 bg-dark" />
      <div className="absolute inset-0 bg-radial-glow opacity-30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
        <motion.div
          className="mb-10 flex flex-col gap-5 sm:mb-12 sm:flex-row sm:items-end sm:justify-between"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <p className="eyebrow mb-3">Free Resources</p>
            <h2 className="section-heading max-w-xl">
              Valuable free materials
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted sm:text-base">
              Guides, templates and proven strategies to grow your brand and
              scale your business through social media.
            </p>
          </div>

          <Button href="#contact" className="shrink-0 self-start sm:self-auto">
            Start working with us
            <HiArrowRight className="text-lg" />
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          {RESOURCES.map((item, i) => (
            <ResourceCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

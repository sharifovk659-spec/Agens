"use client";

import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import PodcastCard from "@/components/podcasts/PodcastCard";
import { PODCASTS } from "@/lib/podcasts";

export default function PodcastsSection() {
  return (
    <section className="relative overflow-hidden py-10 sm:py-12 lg:py-16">
      <div className="absolute inset-0 bg-dark-gradient" />
      <div className="absolute inset-0 bg-radial-glow opacity-25" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          className="mb-8 sm:mb-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl">
            Podcasts with our clients
          </h2>
          <p className="mt-3 flex items-center gap-2 text-sm text-muted sm:text-base">
            Scroll to explore
            <HiArrowRight className="text-gold" />
          </p>
        </motion.div>

        <div className="cases-scroll -mx-4 px-4 sm:-mx-6 sm:px-6">
          {PODCASTS.map((item, i) => (
            <PodcastCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

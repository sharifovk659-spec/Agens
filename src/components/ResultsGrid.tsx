"use client";

import Image from "next/image";
import StatCard from "@/components/results/StatCard";
import { DOLLAR_IMAGE } from "@/lib/hero";
import { STATS } from "@/lib/results";

export default function ResultsGrid() {
  return (
    <section id="services" className="relative overflow-hidden bg-background py-10 sm:py-12 lg:py-16">
      <div className="absolute inset-0 bg-dark-gradient" />
      <div className="absolute inset-0 bg-radial-glow opacity-25" />

      {/* Soft money atmosphere — form only, site palette on cards */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.18]" aria-hidden>
        <Image
          src={DOLLAR_IMAGE}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center blur-[2px] saturate-50 brightness-[0.55]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      <div className="relative z-[2] mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-3 sm:gap-3.5 lg:grid-cols-3 lg:grid-rows-3 lg:gap-4">
          {STATS.map((stat, i) => (
            <StatCard key={stat.id} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

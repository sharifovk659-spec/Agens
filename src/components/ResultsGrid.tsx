"use client";

import StatCard from "@/components/results/StatCard";
import { STATS } from "@/lib/results";

export default function ResultsGrid() {
  return (
    <section id="services" className="relative overflow-hidden bg-background py-10 sm:py-12 lg:py-16">
      <div className="absolute inset-0 bg-dark-gradient" />
      <div className="absolute inset-0 bg-radial-glow opacity-30" />

      <div className="relative z-[2] mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-2.5 sm:gap-3.5 lg:grid-cols-3 lg:grid-rows-3 lg:gap-3.5">
          {STATS.map((stat, i) => (
            <StatCard key={stat.id} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HiArrowUpRight } from "react-icons/hi2";
import type { Resource } from "@/lib/resources";

type ResourceCardProps = {
  item: Resource;
  index: number;
};

export default function ResourceCard({ item, index }: ResourceCardProps) {
  return (
    <motion.a
      href={item.href}
      target={item.href.startsWith("http") ? "_blank" : undefined}
      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="card-hover group relative flex min-h-[180px] flex-col p-5 sm:p-6"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
    >
      <div className="mb-3 flex items-center gap-2.5">
        <span className="text-sm text-gold">◇</span>
        <h3 className="text-base font-bold text-gold sm:text-lg">{item.title}</h3>
      </div>

      <p className="flex-1 text-xs leading-relaxed text-beige-muted sm:text-sm">
        {item.description}
      </p>

      <span className="mt-4 flex justify-end text-beige-muted transition-colors duration-300 group-hover:text-gold">
        <HiArrowUpRight className="text-lg" />
      </span>

      <div className="relative mt-4 hidden aspect-[16/10] overflow-hidden rounded-xl border border-gold/15 sm:block">
        <Image
          src={item.image}
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          className="object-cover object-top opacity-70 transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
      </div>
    </motion.a>
  );
}

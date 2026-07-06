"use client";

import { motion } from "framer-motion";
import { HiCheck } from "react-icons/hi";
import type { StatItem } from "@/lib/results";

type StatCardProps = {
  stat: StatItem;
  index: number;
};

function IconBox({
  icon: Icon,
  position,
  featured = false,
}: {
  icon: StatItem["icon"];
  position: StatItem["iconPosition"];
  featured?: boolean;
}) {
  const pos =
    position === "bottom-left"
      ? "bottom-4 left-4 top-auto right-auto"
      : "right-4 top-4";

  return (
    <div
      className={`absolute flex h-9 w-9 items-center justify-center rounded-xl ${
        featured
          ? "relative mb-0 bg-gold/10 text-gold"
          : `bg-gold/[0.06] text-gold/70 ${pos}`
      }`}
    >
      <Icon className="text-base" />
    </div>
  );
}

export default function StatCard({ stat, index }: StatCardProps) {
  const {
    value,
    label,
    icon,
    featured,
    prefix,
    valueSuffix,
    subLabel,
    iconPosition = "top-right",
  } = stat;

  const Icon = icon;

  if (featured) {
    const parts = value.split(",");
    const line1 =
      parts.length > 1 ? `${parts.slice(0, -1).join(",")},` : value;
    const line2 = parts.length > 1 ? parts[parts.length - 1] : null;

    return (
      <motion.article
        className={`@container relative flex min-h-[300px] flex-col items-center justify-between overflow-hidden rounded-[28px] border border-gold/20 bg-card-gradient px-4 py-7 text-center shadow-glow sm:min-h-[360px] sm:px-6 sm:py-8 ${stat.gridClass}`}
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
      >
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gold/10 text-gold">
          <Icon className="text-xl" />
        </div>

        <div className="flex w-full max-w-full flex-1 flex-col items-center justify-center px-1 py-4">
          <p
            className="w-full font-serif font-bold leading-[1.05] tracking-tight text-gold"
            style={{ fontSize: "clamp(1.35rem, 10cqi, 2.5rem)" }}
          >
            <span className="block">{line1}</span>
            {line2 && <span className="block">{line2}</span>}
          </p>
          <p className="mt-3 w-full max-w-[240px] text-sm leading-relaxed text-muted sm:text-[15px]">
            {label}
          </p>
        </div>

        <a
          href="#contact"
          className="inline-flex w-full max-w-[280px] items-center justify-center gap-2.5 rounded-xl border border-gold/30 bg-gold px-5 py-3 text-xs font-bold uppercase tracking-widest text-background shadow-cta transition-opacity hover:bg-gold-light sm:text-sm"
        >
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-background">
            <HiCheck className="text-sm text-gold" />
          </span>
          <span className="truncate">Start working with us</span>
        </a>
      </motion.article>
    );
  }

  const isSales = stat.id === "sales";
  const isTop3 = stat.id === "top3";

  return (
    <motion.article
      className={`group relative flex overflow-hidden rounded-[28px] border border-gold/10 bg-card-gradient p-5 shadow-card sm:p-6 ${
        isTop3 ? "min-h-[220px] lg:min-h-[260px]" : "min-h-[150px] sm:min-h-[165px]"
      } ${stat.gridClass}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ scale: 1.01 }}
    >
      <IconBox icon={icon} position={iconPosition} />

      <div
        className={`flex h-full w-full flex-col ${
          isTop3 ? "justify-start pb-10" : "justify-end"
        } ${iconPosition === "bottom-left" ? (isTop3 ? "pt-1" : "pb-12") : "pr-11"}`}
      >
        {isTop3 ? (
          <>
            <p className="text-sm font-semibold leading-snug text-gold sm:text-[15px]">
              <span className="text-3xl font-extrabold">{value}</span> {label}
            </p>
            {subLabel && (
              <p className="mt-3 text-[10px] leading-relaxed text-muted sm:text-[11px]">
                {subLabel}
              </p>
            )}
          </>
        ) : (
          <>
            {prefix && (
              <p className="mb-1 text-xs font-medium text-muted">{prefix}</p>
            )}

            {isSales ? (
              <div className="leading-tight">
                <p className="text-[clamp(1.35rem,2.8vw,1.85rem)] font-extrabold text-gold">
                  {value}
                </p>
                {valueSuffix && (
                  <p className="text-[clamp(1.1rem,2.2vw,1.5rem)] font-extrabold text-gold">
                    {valueSuffix}
                  </p>
                )}
              </div>
            ) : (
              <p className="text-[clamp(1.35rem,3vw,2rem)] font-extrabold leading-tight text-gold">
                {value}
              </p>
            )}

            <p className="mt-2 text-xs leading-relaxed text-muted sm:text-[13px]">
              {label}
            </p>
          </>
        )}
      </div>
    </motion.article>
  );
}

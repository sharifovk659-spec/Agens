"use client";

import { motion } from "framer-motion";
import { HiCheck } from "react-icons/hi";
import { useLanguage } from "@/lib/i18n/context";
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
      ? "bottom-3 left-3 top-auto right-auto sm:bottom-4 sm:left-4"
      : "right-3 top-3 sm:right-4 sm:top-4";

  return (
    <div
      className={`absolute flex h-8 w-8 items-center justify-center rounded-xl sm:h-9 sm:w-9 ${
        featured
          ? "relative mb-0 bg-gold/10 text-gold"
          : `bg-gold/[0.06] text-gold/70 ${pos}`
      }`}
    >
      <Icon className="text-sm sm:text-base" />
    </div>
  );
}

function getLabel(
  id: string,
  t: ReturnType<typeof useLanguage>["t"]
): { label: string; prefix?: string; subLabel?: string } {
  switch (id) {
    case "sales":
      return { label: t.results.salesLabel, prefix: t.results.salesPrefix };
    case "top3":
      return { label: t.results.top3Label, subLabel: t.results.top3Sub };
    case "views":
      return { label: t.results.viewsLabel };
    case "agencies":
      return { label: t.results.agenciesLabel };
    case "followers-500k":
      return { label: t.results.followers500Label };
    case "followers-100k":
      return { label: t.results.followers100Label };
    case "revenue":
      return { label: t.results.revenueLabel };
    default:
      return { label: "" };
  }
}

export default function StatCard({ stat, index }: StatCardProps) {
  const { t } = useLanguage();
  const { value, icon, featured, valueSuffix, iconPosition = "top-right" } = stat;
  const { label, prefix, subLabel } = getLabel(stat.id, t);
  const Icon = icon;

  if (featured) {
    const parts = value.split(",");
    const line1 =
      parts.length > 1 ? `${parts.slice(0, -1).join(",")},` : value;
    const line2 = parts.length > 1 ? parts[parts.length - 1] : null;

    return (
      <motion.article
        className={`@container relative flex min-h-[260px] flex-col items-center justify-between overflow-hidden rounded-[24px] border border-gold/20 bg-card-gradient px-3 py-6 text-center shadow-glow sm:min-h-[360px] sm:rounded-[28px] sm:px-6 sm:py-8 ${stat.gridClass}`}
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gold/10 text-gold sm:h-11 sm:w-11">
          <Icon className="text-lg sm:text-xl" />
        </div>

        <div className="flex w-full max-w-full flex-1 flex-col items-center justify-center px-1 py-3 sm:py-4">
          <p
            className="w-full break-words font-serif font-bold leading-[1.05] tracking-tight text-gold"
            style={{ fontSize: "clamp(1.2rem, 9cqi, 2.5rem)" }}
          >
            <span className="block">{line1}</span>
            {line2 && <span className="block">{line2}</span>}
          </p>
          <p className="mt-2 w-full max-w-[240px] text-xs leading-relaxed text-muted sm:mt-3 sm:text-sm sm:text-[15px]">
            {label}
          </p>
        </div>

        <a
          href="#contact"
          className="inline-flex w-full max-w-[280px] items-center justify-center gap-2 rounded-xl border border-gold/30 bg-gold px-4 py-2.5 text-[10px] font-bold uppercase tracking-widest text-background shadow-cta transition-opacity hover:bg-gold-light sm:gap-2.5 sm:px-5 sm:py-3 sm:text-xs sm:text-sm"
        >
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-background sm:h-6 sm:w-6">
            <HiCheck className="text-xs text-gold sm:text-sm" />
          </span>
          <span className="truncate">{t.results.startCta}</span>
        </a>
      </motion.article>
    );
  }

  const isSales = stat.id === "sales";
  const isTop3 = stat.id === "top3";

  return (
    <motion.article
      className={`group relative flex overflow-hidden rounded-[24px] border border-gold/10 bg-card-gradient p-4 shadow-card sm:rounded-[28px] sm:p-6 ${
        isTop3 ? "min-h-[200px] lg:min-h-[260px]" : "min-h-[140px] sm:min-h-[165px]"
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
          isTop3 ? "justify-start pb-8 sm:pb-10" : "justify-end"
        } ${iconPosition === "bottom-left" ? (isTop3 ? "pt-1" : "pb-10 sm:pb-12") : "pr-9 sm:pr-11"}`}
      >
        {isTop3 ? (
          <>
            <p className="text-xs font-semibold leading-snug text-gold sm:text-sm sm:text-[15px]">
              <span className="text-2xl font-extrabold sm:text-3xl">{value}</span>{" "}
              {label}
            </p>
            {subLabel && (
              <p className="mt-2 text-[10px] leading-relaxed text-muted sm:mt-3 sm:text-[11px]">
                {subLabel}
              </p>
            )}
          </>
        ) : (
          <>
            {prefix && (
              <p className="mb-1 text-[11px] font-medium text-muted sm:text-xs">
                {prefix}
              </p>
            )}

            {isSales ? (
              <div className="leading-tight">
                <p className="text-[clamp(1.2rem,4vw,1.85rem)] font-extrabold text-gold">
                  {value}
                </p>
                {valueSuffix && (
                  <p className="text-[clamp(1rem,3.5vw,1.5rem)] font-extrabold text-gold">
                    {valueSuffix}
                  </p>
                )}
              </div>
            ) : (
              <p className="text-[clamp(1.2rem,4vw,2rem)] font-extrabold leading-tight text-gold">
                {value}
              </p>
            )}

            <p className="mt-2 text-[11px] leading-relaxed text-muted sm:text-xs sm:text-[13px]">
              {label}
            </p>
          </>
        )}
      </div>
    </motion.article>
  );
}

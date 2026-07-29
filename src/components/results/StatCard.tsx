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
}: {
  icon: StatItem["icon"];
  position: StatItem["iconPosition"];
}) {
  const pos =
    position === "bottom-left"
      ? "bottom-3 left-3 top-auto right-auto sm:bottom-4 sm:left-4"
      : "right-3 top-3 sm:right-4 sm:top-4";

  return (
    <div
      className={`absolute flex h-9 w-9 items-center justify-center rounded-2xl bg-gold/[0.08] text-gold/80 sm:h-10 sm:w-10 ${pos}`}
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
        className={`@container relative flex min-h-[280px] flex-col items-center justify-between overflow-hidden rounded-[28px] border border-gold/40 bg-gold-gradient px-4 py-7 text-center shadow-glow sm:min-h-[380px] sm:rounded-[36px] sm:px-7 sm:py-9 ${stat.gridClass}`}
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
      >
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-background/15 text-background sm:h-12 sm:w-12">
          <Icon className="text-xl sm:text-2xl" />
        </div>

        <div className="flex w-full max-w-full flex-1 flex-col items-center justify-center px-1 py-3 sm:py-4">
          <p
            className="w-full break-words font-display font-bold leading-[1.05] tracking-tight text-background"
            style={{ fontSize: "clamp(1.35rem, 9cqi, 2.65rem)" }}
          >
            <span className="block">{line1}</span>
            {line2 && <span className="block">{line2}</span>}
          </p>
          <p className="mt-2 w-full max-w-[260px] text-xs leading-relaxed text-background/75 sm:mt-3 sm:text-sm sm:text-[15px]">
            {label}
          </p>
        </div>

        <a
          href="#contact"
          className="inline-flex w-full max-w-[300px] items-center justify-center gap-2 rounded-2xl border border-background/20 bg-background px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-gold shadow-premium transition-opacity hover:bg-dark sm:gap-2.5 sm:px-5 sm:py-3.5 sm:text-xs sm:text-sm"
        >
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold sm:h-6 sm:w-6">
            <HiCheck className="text-xs text-background sm:text-sm" />
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
      className={`group relative flex overflow-hidden rounded-[28px] border border-gold/10 bg-card-gradient p-4 shadow-card sm:rounded-[36px] sm:p-6 ${
        isTop3 ? "min-h-[200px] lg:min-h-[280px]" : "min-h-[150px] sm:min-h-[170px]"
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
        } ${iconPosition === "bottom-left" ? (isTop3 ? "pt-1" : "pb-10 sm:pb-12") : "pr-10 sm:pr-12"}`}
      >
        {isTop3 ? (
          <>
            <p className="text-xs font-semibold leading-snug text-beige sm:text-sm sm:text-[15px]">
              <span className="text-2xl font-extrabold text-gold sm:text-3xl">{value}</span>{" "}
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
                <p className="text-[clamp(1.25rem,4vw,1.9rem)] font-extrabold text-gold">
                  {value}
                </p>
                {valueSuffix && (
                  <p className="text-[clamp(1rem,3.5vw,1.55rem)] font-extrabold text-gold">
                    {valueSuffix}
                  </p>
                )}
              </div>
            ) : (
              <p className="text-[clamp(1.25rem,4vw,2.05rem)] font-extrabold leading-tight text-gold">
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

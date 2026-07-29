"use client";

import Image from "next/image";
import { SITE } from "@/lib/constants";

type SiteLogoProps = {
  className?: string;
  priority?: boolean;
};

/** Sharp circular logo — less zoom, readable at native quality */
export default function SiteLogo({
  className = "h-[82px] w-[82px] sm:h-[92px] sm:w-[92px]",
  priority = false,
}: SiteLogoProps) {
  return (
    <span
      className={`relative block shrink-0 overflow-hidden rounded-full border border-gold/40 bg-black shadow-glow ${className}`}
    >
      <Image
        src={SITE.logo}
        alt={SITE.name}
        width={1024}
        height={1024}
        unoptimized
        className="h-full w-full object-contain object-center p-[9px] sm:p-[10px]"
        priority={priority}
      />
    </span>
  );
}

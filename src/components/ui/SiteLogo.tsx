"use client";

import Image from "next/image";
import { SITE } from "@/lib/constants";

type SiteLogoProps = {
  className?: string;
  sizes?: string;
  priority?: boolean;
};

/** Sharp circular logo — original asset, no optimizer blur */
export default function SiteLogo({
  className = "h-[78px] w-[78px] sm:h-[86px] sm:w-[86px]",
  sizes = "172px",
  priority = false,
}: SiteLogoProps) {
  return (
    <span
      className={`relative block shrink-0 overflow-hidden rounded-full border border-gold/35 bg-black shadow-glow ${className}`}
    >
      <Image
        src={SITE.logo}
        alt={SITE.name}
        fill
        unoptimized
        sizes={sizes}
        className="scale-[1.12] object-contain object-center p-[2px]"
        priority={priority}
      />
    </span>
  );
}

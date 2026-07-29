"use client";

import { Children } from "react";
import InfiniteMarquee from "@/components/ui/InfiniteMarquee";

type DualRowMarqueeProps = {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  rowClassName?: string;
};

/** Top row → left, bottom row → right */
export default function DualRowMarquee({
  children,
  speed = 32,
  className = "",
  rowClassName = "",
}: DualRowMarqueeProps) {
  const items = Children.toArray(children);
  const row1 = items.filter((_, i) => i % 2 === 0);
  const row2 = items.filter((_, i) => i % 2 === 1);

  const topRow = row1.length > 0 ? row1 : items;
  const bottomRow = row2.length > 0 ? row2 : items;

  return (
    <div className={`flex flex-col gap-3 sm:gap-4 ${className}`}>
      <InfiniteMarquee speed={speed} direction="left" className={rowClassName} pauseOnHover={false}>
        {topRow}
      </InfiniteMarquee>
      <InfiniteMarquee
        speed={speed * 0.92}
        direction="right"
        className={rowClassName}
        pauseOnHover={false}
      >
        {bottomRow}
      </InfiniteMarquee>
    </div>
  );
}

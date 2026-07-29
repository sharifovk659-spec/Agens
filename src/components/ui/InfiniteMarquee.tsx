"use client";

import { Children, useEffect, useRef, useState } from "react";

type InfiniteMarqueeProps = {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  /** Default false — continuous motion, no empty pause at the end */
  pauseOnHover?: boolean;
};

export default function InfiniteMarquee({
  children,
  speed = 40,
  className = "",
  pauseOnHover = false,
}: InfiniteMarqueeProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const groupRef = useRef<HTMLDivElement>(null);
  const [copies, setCopies] = useState(4);
  const items = Children.toArray(children);

  useEffect(() => {
    const measure = () => {
      const group = groupRef.current;
      const viewport = viewportRef.current;
      if (!group || !viewport) return;
      const groupW = group.getBoundingClientRect().width;
      const viewW = viewport.clientWidth;
      if (groupW <= 0) return;
      // Always enough sets to fill the viewport + seamless loop buffer
      setCopies(Math.max(4, Math.ceil(viewW / groupW) + 2));
    };

    measure();
    const ro = new ResizeObserver(measure);
    if (viewportRef.current) ro.observe(viewportRef.current);
    if (groupRef.current) ro.observe(groupRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [items.length]);

  useEffect(() => {
    const track = trackRef.current;
    const group = groupRef.current;
    if (!track || !group) return;

    let raf = 0;
    let x = 0;
    let paused = false;
    let last = performance.now();

    const step = (now: number) => {
      const dt = Math.min(32, now - last) / 1000;
      last = now;
      if (!paused) {
        const loopW = group.getBoundingClientRect().width;
        if (loopW > 0) {
          x -= speed * dt;
          // Wrap without jump — never leave an empty trail
          while (x <= -loopW) x += loopW;
          track.style.transform = `translate3d(${x}px,0,0)`;
        }
      }
      raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);

    const onEnter = () => {
      if (pauseOnHover) paused = true;
    };
    const onLeave = () => {
      paused = false;
      last = performance.now();
    };

    track.addEventListener("pointerenter", onEnter);
    track.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      track.removeEventListener("pointerenter", onEnter);
      track.removeEventListener("pointerleave", onLeave);
    };
  }, [speed, pauseOnHover, copies]);

  return (
    <div ref={viewportRef} className={`marquee-mask relative overflow-hidden ${className}`}>
      <div ref={trackRef} className="flex w-max will-change-transform">
        {Array.from({ length: copies }, (_, i) => (
          <div
            key={i}
            ref={i === 0 ? groupRef : undefined}
            className="flex shrink-0 gap-4 pr-4"
            aria-hidden={i > 0}
          >
            {items}
          </div>
        ))}
      </div>
    </div>
  );
}

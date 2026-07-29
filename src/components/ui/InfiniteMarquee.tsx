"use client";

import { useEffect, useRef } from "react";

type InfiniteMarqueeProps = {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  pauseOnHover?: boolean;
};

export default function InfiniteMarquee({
  children,
  speed = 40,
  className = "",
  pauseOnHover = true,
}: InfiniteMarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let raf = 0;
    let x = 0;
    let paused = false;
    let last = performance.now();

    const step = (now: number) => {
      const dt = Math.min(32, now - last) / 1000;
      last = now;
      if (!paused) {
        const half = track.scrollWidth / 2;
        if (half > 0) {
          x -= speed * dt;
          if (Math.abs(x) >= half) x += half;
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
  }, [speed, pauseOnHover]);

  return (
    <div className={`marquee-mask relative overflow-hidden ${className}`}>
      <div ref={trackRef} className="flex w-max will-change-transform">
        <div className="flex shrink-0 gap-4 pr-4">{children}</div>
        <div className="flex shrink-0 gap-4 pr-4" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}

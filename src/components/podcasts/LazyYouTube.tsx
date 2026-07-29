"use client";

import { useState } from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

type LazyYouTubeProps = {
  videoId: string;
  title: string;
  short?: boolean;
  fillParent?: boolean;
};

export default function LazyYouTube({
  videoId,
  title,
  short = false,
  fillParent = false,
}: LazyYouTubeProps) {
  const [playing, setPlaying] = useState(false);
  const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  const sizeClass = fillParent
    ? "absolute inset-0 h-full w-full rounded-none"
    : `relative w-full rounded-xl ${short ? "aspect-[9/16]" : "aspect-video"}`;

  if (playing) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className={`${sizeClass} ${fillParent ? "" : "rounded-xl"}`}
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className={`group overflow-hidden bg-dark ${sizeClass}`}
      aria-label={`Play: ${title}`}
    >
      <Image
        src={thumbnail}
        alt={title}
        fill
        sizes="(max-width: 640px) 240px, 360px"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
        loading="lazy"
        unoptimized
      />
      <div className="absolute inset-0 bg-background/20 transition group-hover:bg-background/10" />
      <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold/40 bg-background/80 shadow-play backdrop-blur-sm transition-transform group-hover:scale-110 sm:h-14 sm:w-14">
        <FaPlay className="ml-0.5 text-gold sm:ml-1" />
      </div>
    </button>
  );
}

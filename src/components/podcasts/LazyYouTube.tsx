"use client";

import Image from "next/image";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";

type LazyYouTubeProps = {
  videoId: string;
  title: string;
  short?: boolean;
};

export default function LazyYouTube({
  videoId,
  title,
  short = false,
}: LazyYouTubeProps) {
  const [playing, setPlaying] = useState(false);
  const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  if (playing) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="absolute inset-0 h-full w-full rounded-xl"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className={`group relative w-full overflow-hidden rounded-xl bg-dark ${
        short ? "aspect-[9/16]" : "aspect-video"
      }`}
      aria-label={`Play: ${title}`}
    >
      <Image
        src={thumbnail}
        alt={title}
        fill
        sizes="(max-width: 640px) 85vw, 360px"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
        unoptimized
      />
      <div className="absolute inset-0 bg-background/25 transition group-hover:bg-background/10" />
      <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold/40 bg-background/70 shadow-play backdrop-blur-sm transition-transform group-hover:scale-110">
        <FaPlay className="ml-1 text-gold" />
      </div>
    </button>
  );
}

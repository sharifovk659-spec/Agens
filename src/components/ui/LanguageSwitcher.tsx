"use client";

import { useState } from "react";
import type { Lang } from "@/lib/constants";

const LANGS: { id: Lang; label: string }[] = [
  { id: "ru", label: "RU" },
  { id: "tj", label: "TJ" },
  { id: "en", label: "EN" },
];

export default function LanguageSwitcher() {
  const [active, setActive] = useState<Lang>("en");

  return (
    <div className="flex items-center rounded-full border border-gold/25 bg-background/40 p-1">
      {LANGS.map(({ id, label }) => (
        <button
          key={id}
          type="button"
          onClick={() => setActive(id)}
          className={`rounded-full px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.15em] transition-colors duration-300 xl:px-3 xl:text-xs ${
            active === id
              ? "bg-gold/20 text-gold"
              : "text-beige-muted hover:text-beige"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

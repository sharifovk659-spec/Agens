"use client";

import { useLanguage } from "@/lib/i18n/context";
import type { Lang } from "@/lib/i18n/types";

const LANGS: { id: Lang; label: string }[] = [
  { id: "ru", label: "RU" },
  { id: "tj", label: "TJ" },
  { id: "en", label: "EN" },
];

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center rounded-full border border-gold/25 bg-background/40 p-1">
      {LANGS.map(({ id, label }) => (
        <button
          key={id}
          type="button"
          onClick={() => setLang(id)}
          className={`rounded-full px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.15em] transition-colors duration-300 xl:px-3 xl:text-xs ${
            lang === id
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

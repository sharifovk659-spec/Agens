"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { useLanguage } from "@/lib/i18n/context";
import { SITE } from "@/lib/constants";

const NAV = [
  { key: "cases" as const, href: "#cases" },
  { key: "services" as const, href: "#services" },
  { key: "about" as const, href: "#founder" },
  { key: "academy" as const, href: "#academy" },
  { key: "contact" as const, href: "#contact" },
];

export default function Header() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled
          ? "border-b border-gold/10 bg-background/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[80px] max-w-7xl items-center justify-between px-4 sm:h-[88px] sm:px-6 lg:px-12">
        <a
          href="#"
          className="relative block h-[76px] w-[76px] shrink-0 overflow-hidden rounded-full border border-gold/30 bg-black shadow-glow sm:h-[84px] sm:w-[84px]"
          aria-label={SITE.name}
        >
          <Image
            src={SITE.logo}
            alt={SITE.name}
            fill
            sizes="84px"
            className="scale-[1.65] object-cover object-[center_18%]"
            priority
            quality={100}
          />
        </a>

        <nav className="hidden items-center gap-6 xl:gap-8 lg:flex">
          {NAV.map(({ key, href }) => (
            <a key={href} href={href} className="nav-link">
              {t.nav[key]}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <motion.a
            href="#contact"
            className="rounded-full border border-gold/40 px-4 py-2 text-[10px] uppercase tracking-[0.15em] text-beige transition-colors duration-300 hover:border-gold hover:bg-gold/10 hover:text-gold xl:text-xs"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {t.cta}
          </motion.a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-gold/20 text-beige"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t.common.closeMenu : t.common.openMenu}
          >
            {open ? <HiX className="text-xl" /> : <HiMenu className="text-xl" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 top-[72px] z-40 overflow-y-auto bg-background/98 backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            <nav className="flex flex-col gap-5 px-6 py-8 sm:px-8">
              {NAV.map(({ key, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="text-sm uppercase tracking-[0.2em] text-beige-muted transition-colors hover:text-gold"
                >
                  {t.nav[key]}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex w-fit max-w-full rounded-full border border-gold/40 px-5 py-2.5 text-center text-xs uppercase tracking-[0.15em] text-beige"
              >
                {t.cta}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

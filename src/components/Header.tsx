"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { NAV_LINKS, SITE } from "@/lib/constants";

export default function Header() {
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
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-8 lg:px-12">
        <a
          href="#"
          className="font-display text-lg font-bold tracking-[0.08em] text-beige sm:text-xl"
        >
          {SITE.name}
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map(({ label, href }) => (
            <a key={href} href={href} className="nav-link">
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LanguageSwitcher />
          <motion.a
            href="#contact"
            className="rounded-full border border-gold/40 px-4 py-2 text-[10px] uppercase tracking-[0.15em] text-beige transition-colors duration-300 hover:border-gold hover:bg-gold/10 hover:text-gold xl:text-xs"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Start working with us
          </motion.a>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-gold/20 text-beige lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <HiX className="text-xl" /> : <HiMenu className="text-xl" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 top-16 z-40 bg-background/98 backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            <nav className="flex flex-col gap-6 px-8 py-10">
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="text-sm uppercase tracking-[0.2em] text-beige-muted transition-colors hover:text-gold"
                >
                  {label}
                </a>
              ))}
              <div className="pt-4">
                <LanguageSwitcher />
              </div>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex w-fit rounded-full border border-gold/40 px-5 py-2.5 text-xs uppercase tracking-[0.15em] text-beige"
              >
                Start working with us
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

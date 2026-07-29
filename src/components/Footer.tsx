"use client";

import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { useLanguage } from "@/lib/i18n/context";
import { SITE } from "@/lib/constants";

const STUDIO_IMAGE =
  "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80&auto=format&fit=crop&fm=webp";

const NAV = [
  { key: "cases" as const, href: "#cases" },
  { key: "services" as const, href: "#services" },
  { key: "about" as const, href: "#founder" },
  { key: "academy" as const, href: "#academy" },
  { key: "contact" as const, href: "#contact" },
];

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const links = [
    { label: SITE.phone, href: SITE.phoneTel, icon: HiOutlinePhone },
    { label: SITE.email, href: `mailto:${SITE.email}`, icon: HiOutlineMail },
    {
      label: "Instagram",
      href: SITE.instagram,
      icon: FaInstagram,
      external: true,
    },
  ];

  return (
    <footer className="border-t border-gold/10 bg-background pb-24 sm:pb-10">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-8 sm:py-12 lg:px-12">
        <div className="grid gap-8 sm:gap-10 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="relative h-12 w-12 overflow-hidden rounded-full border border-gold/30 sm:h-11 sm:w-11">
                <Image
                  src={SITE.logo}
                  alt={SITE.name}
                  fill
                  sizes="48px"
                  className="object-cover"
                  quality={95}
                />
              </span>
              <div className="min-w-0">
                <p className="font-display text-xl font-bold tracking-wide text-beige sm:text-2xl">
                  {SITE.name}
                </p>
                <p className="mt-0.5 text-sm text-beige-muted">{SITE.tagline}</p>
              </div>
            </div>
            <div className="relative mt-5 aspect-[16/10] overflow-hidden rounded-xl border border-gold/15 sm:mt-6">
              <Image
                src={STUDIO_IMAGE}
                alt="Studio"
                fill
                sizes="400px"
                className="object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div>
            <p className="form-label">{t.footer.navigation}</p>
            <nav className="mt-3 flex flex-col gap-2">
              {NAV.map(({ key, href }) => (
                <a
                  key={href}
                  href={href}
                  className="text-sm text-beige-muted transition-colors duration-300 hover:text-gold"
                >
                  {t.nav[key]}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="form-label">{t.footer.contacts}</p>
            <nav className="mt-3 flex flex-col gap-3">
              {links.map(({ label, href, icon: Icon, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-2 break-all text-sm text-beige-muted transition-colors duration-300 hover:text-gold"
                >
                  <Icon className="shrink-0 text-gold/70" />
                  {label}
                </a>
              ))}
              <a
                href="#"
                className="text-sm text-beige-muted transition-colors hover:text-gold"
              >
                {t.footer.privacy}
              </a>
            </nav>
          </div>
        </div>

        <div className="gold-line my-6 sm:my-8" />

        <div className="flex flex-col items-center justify-between gap-3 text-center text-xs text-beige-muted sm:flex-row sm:text-left">
          <p>
            © {year} {SITE.name}. {t.footer.rights}
          </p>
          <p>
            {t.footer.credit}{" "}
            <a
              href="https://yadgarov.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold transition-colors hover:text-gold-light"
            >
              yadgarov.dev
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

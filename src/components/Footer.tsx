import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { NAV_LINKS, SITE } from "@/lib/constants";

const STUDIO_IMAGE =
  "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80&auto=format&fit=crop&fm=webp";

const links = [
  {
    label: SITE.phone,
    href: SITE.phoneTel,
    icon: HiOutlinePhone,
  },
  {
    label: SITE.email,
    href: `mailto:${SITE.email}`,
    icon: HiOutlineMail,
  },
  {
    label: "Instagram",
    href: SITE.instagram,
    icon: FaInstagram,
    external: true,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gold/10 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl font-bold tracking-wide text-beige">
              {SITE.name}
            </p>
            <p className="mt-1 text-sm text-beige-muted">{SITE.tagline}</p>
            <div className="relative mt-6 aspect-[16/10] overflow-hidden rounded-xl border border-gold/15">
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
            <p className="form-label">Navigation</p>
            <nav className="mt-3 flex flex-col gap-2">
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  className="text-sm text-beige-muted transition-colors duration-300 hover:text-gold"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="form-label">Contacts</p>
            <nav className="mt-3 flex flex-col gap-3">
              {links.map(({ label, href, icon: Icon, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-2 text-sm text-beige-muted transition-colors duration-300 hover:text-gold"
                >
                  <Icon className="text-gold/70" />
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="gold-line my-8" />

        <div className="flex flex-col items-center justify-between gap-3 text-center text-xs text-beige-muted sm:flex-row sm:text-left">
          <p>© {year} {SITE.name}. All rights reserved.</p>
          <p>
            Site development —{" "}
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

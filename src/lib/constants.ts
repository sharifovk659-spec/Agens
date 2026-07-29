export const SITE = {
  name: "Qimat Agency",
  tagline: "Marketing Agency",
  email: "hello@brandboost.ae",
  whatsapp: "https://wa.me/971504865709",
  instagram: "https://www.instagram.com/qimat.agency_/?hl=ru",
  phone: "+971 50 486 5709",
  phoneTel: "tel:+971504865709",
  logo: "/images/brand/logo.jpg",
} as const;

export const NAV_LINKS = [
  { label: "Cases", href: "#cases" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#founder" },
  { label: "Academy", href: "#academy" },
  { label: "Contact", href: "#contact" },
] as const;

export type Lang = "ru" | "tj" | "en";

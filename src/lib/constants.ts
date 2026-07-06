export const SITE = {
  name: "Brand Boost",
  tagline: "Social Media Agency",
  email: "hello@brandboost.ae",
  whatsapp: "https://wa.me/971504865709",
  instagram: "https://instagram.com/brandboost",
  phone: "+971 50 486 5709",
  phoneTel: "tel:+971504865709",
} as const;

export const NAV_LINKS = [
  { label: "Cases", href: "#cases" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#founder" },
  { label: "Academy", href: "#academy" },
  { label: "Contact", href: "#contact" },
] as const;

export type Lang = "ru" | "tj" | "en";

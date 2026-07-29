import { SITE } from "@/lib/constants";

export const FOUNDER = {
  name: "Emir Gurbanov",
  role: "Founder & CEO",
  instagram: SITE.instagram,
  handle: `@${SITE.instagramHandle}`,
  photo: "/images/brand/founder.jpg",
  testimonial:
    "Starting a personal brand is never too late. I scaled mine into the best agency in Dubai — now our clients get 6 years of experience and real results.",
} as const;

export const FOUNDER_ACHIEVEMENTS = [
  { id: "years", value: "5", unit: "years", label: "of experience in social media marketing" },
  { id: "followers", value: "585,000", unit: "", label: "followers across social media platforms" },
  { id: "views", value: "200,000,000", unit: "", label: "views on social media platforms" },
  { id: "clients", value: "40+", unit: "", label: "clients worked with" },
  { id: "contracts", value: "10+", unit: "", label: "ongoing long-term contracts" },
  { id: "partner", value: "Twice", unit: "", label: "a media partner at major conferences" },
] as const;

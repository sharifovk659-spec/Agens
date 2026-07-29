export type Resource = {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
};

export const RESOURCES: Resource[] = [
  {
    id: "clinic-cover",
    title: "Clinic cover system for premium positioning",
    description:
      "Ready visual direction for covers that make your clinic stand out in the feed",
    href: "#contact",
    image: "/images/clinic/cover.jpg",
  },
  {
    id: "service-list",
    title: "Service list creatives that sell",
    description:
      "Clear offer presentation format to turn attention into bookings",
    href: "#contact",
    image: "/images/clinic/list.jpg",
  },
  {
    id: "dentistry-content",
    title: "Dentistry content that builds trust",
    description:
      "Content framework for clinics: trust, proof and high-intent leads",
    href: "#contact",
    image: "/images/clinic/dentistry.jpg",
  },
  {
    id: "before-after-pack",
    title: "Before & after pack for social proof",
    description:
      "Transformation creatives that increase inquiries and appointments",
    href: "#contact",
    image: "/images/clinic/before-after.jpg",
  },
];

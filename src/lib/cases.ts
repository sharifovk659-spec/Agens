export type AgencyCase = {
  id: string;
  name: string;
  result: string;
  tags: string[];
  image: string;
};

export const AGENCY_CASES: AgencyCase[] = [
  {
    id: "cover",
    name: "Clinic Cover",
    result: "Premium visual identity and content cover for clinic positioning",
    tags: ["Cover", "Brand"],
    image: "/images/clinic/cover.jpg",
  },
  {
    id: "dentistry",
    name: "Dentistry Clinic",
    result: "Full content system for dentistry — trust, leads and bookings",
    tags: ["Dentistry", "Leads"],
    image: "/images/clinic/dentistry.jpg",
  },
  {
    id: "price-list",
    name: "Service List",
    result: "Clear offer presentation that converts viewers into clients",
    tags: ["Offer", "Sales"],
    image: "/images/clinic/list.jpg",
  },
  {
    id: "before-after",
    name: "Before & After",
    result: "Transformation content that builds trust and social proof",
    tags: ["Before", "After"],
    image: "/images/clinic/before-after.jpg",
  },
  {
    id: "before-after-main",
    name: "Before & After",
    result: "Premium before/after creative",
    tags: ["Before", "After"],
    image: "/images/clinic/before-after-main.jpg",
  },
  {
    id: "before-after-1",
    name: "Before & After",
    result: "Case 01 — transformation result",
    tags: ["Before", "After"],
    image: "/images/clinic/before-after-1.jpg",
  },
  {
    id: "before-after-2",
    name: "Before & After",
    result: "Case 02 — transformation result",
    tags: ["Before", "After"],
    image: "/images/clinic/before-after-2.jpg",
  },
  {
    id: "before-after-3",
    name: "Before & After",
    result: "Case 03 — transformation result",
    tags: ["Before", "After"],
    image: "/images/clinic/before-after-3.jpg",
  },
];

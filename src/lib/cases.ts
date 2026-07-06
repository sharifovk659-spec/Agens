export type AgencyCase = {
  id: string;
  name: string;
  result: string;
  tags: string[];
  image: string;
  video?: boolean;
};

export const AGENCY_CASES: AgencyCase[] = [
  {
    id: "broker-sales",
    name: "Dubai Broker",
    result: "90 million AED in sales as a new broker — power of personal brand",
    tags: ["Real Estate", "Sales"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&q=80",
    video: true,
  },
  {
    id: "realestate-100k",
    name: "Real Estate Agent",
    result: "100,000 followers with 17 videos organically in Dubai",
    tags: ["Organic", "Followers"],
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&q=80",
    video: true,
  },
  {
    id: "javi-280k",
    name: "Javi",
    result: "280,000+ followers in 1 month & 8,000+ inquiries from 1 video",
    tags: ["Viral", "Leads"],
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&q=80",
    video: true,
  },
  {
    id: "yacht-rental",
    name: "Yacht Rental UAE",
    result: "#1 yacht rental business — +35,000 followers from 1 video",
    tags: ["Luxury", "UAE"],
    image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=400&q=80",
    video: true,
  },
  {
    id: "vaka-gmz",
    name: "Vaka GMZ",
    result: "750,000 followers gained in just 7 months",
    tags: ["Growth", "Brand"],
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&q=80",
    video: true,
  },
  {
    id: "sharjah-agent",
    name: "Sharjah Agent",
    result: "AED 6,000,000 in sales after only 6 videos",
    tags: ["Commission", "Sales"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80",
    video: true,
  },
  {
    id: "cosmetology",
    name: "Cosmetology Clinic",
    result: "5x revenue growth within 8 months of content strategy",
    tags: ["Beauty", "Revenue"],
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&q=80",
  },
  {
    id: "football-academy",
    name: "Football Academy",
    result: "From unknown to Top-3 most famous in the niche",
    tags: ["Sports", "Top-3"],
    image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=400&q=80",
    video: true,
  },
];

export type Podcast = {
  id: string;
  title: string;
  videoId: string;
  client: string;
};

export const PODCASTS: Podcast[] = [
  {
    id: "broker-90m",
    title: "90M AED in sales — power of personal brand",
    videoId: "LXb3EKWsInQ",
    client: "Dubai Broker",
  },
  {
    id: "realestate-organic",
    title: "100K followers with 17 organic videos",
    videoId: "ScMzIvxBSi4",
    client: "Real Estate Agent",
  },
  {
    id: "javi-viral",
    title: "280K followers in 1 month — client Javi",
    videoId: "e-ORhEE9VVg",
    client: "Javi",
  },
  {
    id: "yacht-luxury",
    title: "#1 yacht rental in UAE — growth story",
    videoId: "aqz-KE-bpKQ",
    client: "Yacht Rental",
  },
  {
    id: "agency-scale",
    title: "From zero to agency owner via social media",
    videoId: "kXYiU_JCYtU",
    client: "Former Employee",
  },
  {
    id: "content-strategy",
    title: "How we 5x revenue in 8 months",
    videoId: "fJ9rUzIMcZQ",
    client: "Cosmetology Clinic",
  },
];

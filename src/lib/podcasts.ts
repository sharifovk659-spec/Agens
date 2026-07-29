export type Podcast = {
  id: string;
  title: string;
  videoId: string;
  client: string;
  short?: boolean;
};

export const PODCASTS: Podcast[] = [
  {
    id: "reel-1",
    title: "Client reel — real results from social media",
    videoId: "UPaq2ExX-JQ",
    client: "Brand Boost Client",
    short: true,
  },
  {
    id: "reel-2",
    title: "Growth case — content that brings leads",
    videoId: "JoKILpmHkFI",
    client: "Brand Boost Client",
    short: true,
  },
  {
    id: "reel-3",
    title: "Behind the scenes — working with clients",
    videoId: "4KsbbkYA79I",
    client: "Brand Boost Client",
    short: true,
  },
];

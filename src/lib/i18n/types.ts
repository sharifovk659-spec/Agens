export type Lang = "ru" | "tj" | "en";

export type Dictionary = {
  nav: { cases: string; services: string; about: string; academy: string; contact: string };
  cta: string;
  viewCases: string;
  hero: {
    eyebrow: string;
    subtitle: string;
    description: string;
  };
  stats: Record<string, string>;
  results: {
    salesPrefix: string;
    salesLabel: string;
    top3Label: string;
    top3Sub: string;
    viewsLabel: string;
    agenciesLabel: string;
    followers500Label: string;
    followers100Label: string;
    revenueLabel: string;
    startCta: string;
  };
  founder: {
    eyebrow: string;
    role: string;
    myInstagram: string;
    testimonial: string;
    achievements: Record<string, string>;
  };
  cases: {
    title: string;
    hint: string;
    items: Record<string, { name: string; result: string }>;
  };
  reels: {
    title: string;
    hint: string;
    client: string;
    items: Record<string, string>;
  };
  resources: {
    eyebrow: string;
    title: string;
    description: string;
    items: Record<string, { title: string; description: string }>;
  };
  contact: {
    titleLine1: string;
    titleLine2: string;
    description: string;
    apply: string;
    formTitle: string;
    name: string;
    phone: string;
    instagram: string;
    email: string;
    income: string;
    privacy: string;
    privacyLink: string;
    submit: string;
    thanks: string;
    benefits: Record<string, { title: string; description: string }>;
    incomeOptions: string[];
    errors: {
      nameRequired: string;
      nameShort: string;
      phoneRequired: string;
      phoneInvalid: string;
      igRequired: string;
      igInvalid: string;
      emailRequired: string;
      emailInvalid: string;
      incomeRequired: string;
      privacyRequired: string;
    };
  };
  finalCta: { before: string; highlight: string };
  footer: {
    navigation: string;
    contacts: string;
    privacy: string;
    rights: string;
    credit: string;
  };
  common: {
    openMenu: string;
    closeMenu: string;
  };
};

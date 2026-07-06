export const LEAD_BENEFITS = [
  {
    id: "followers",
    title: "Gain 10,000+ followers",
    description: "Build a loyal audience that trusts your brand",
  },
  {
    id: "popular",
    title: "Become popular in your niche",
    description: "Stand out as the go-to expert in your industry",
  },
  {
    id: "views",
    title: "Reach 1M+ monthly views",
    description: "Get your content seen by the right people",
  },
  {
    id: "leads",
    title: "2–10x your leads",
    description: "Turn attention into qualified inbound inquiries",
  },
  {
    id: "income",
    title: "2–10x your personal income",
    description: "Scale revenue through organic social media growth",
  },
] as const;

export const INCOME_OPTIONS = [
  "USD $0 – $5,000",
  "USD $5,000 – $10,000",
  "USD $10,000 – $20,000",
  "USD $20,000 – $40,000",
  "USD $40,000 – $60,000",
  "Over $60,000",
] as const;

export type LeadFormData = {
  name: string;
  phone: string;
  instagram: string;
  email: string;
  income: string;
  privacy: boolean;
};

export type LeadFormErrors = Partial<Record<keyof LeadFormData, string>>;

export function validateLeadForm(data: LeadFormData): LeadFormErrors {
  const errors: LeadFormErrors = {};

  if (!data.name.trim()) {
    errors.name = "Name is required";
  } else if (data.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters";
  }

  if (!data.phone.trim()) {
    errors.phone = "Phone is required";
  } else if (data.phone.replace(/\D/g, "").length < 8) {
    errors.phone = "Enter a valid phone number";
  }

  if (!data.instagram.trim()) {
    errors.instagram = "Instagram handle is required";
  } else if (!/^@?[\w.]{2,30}$/.test(data.instagram.trim())) {
    errors.instagram = "Enter a valid @handle";
  }

  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = "Enter a valid email address";
  }

  if (!data.income) {
    errors.income = "Please select your monthly income";
  }

  if (!data.privacy) {
    errors.privacy = "You must agree to the Privacy Policy";
  }

  return errors;
}

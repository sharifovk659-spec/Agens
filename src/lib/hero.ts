export const ACCOUNT_SCREENSHOTS = [
  "/images/accounts/account-01.png",
  "/images/accounts/account-02.png",
  "/images/accounts/account-03.png",
  "/images/accounts/account-04.png",
  "/images/accounts/account-05.png",
  "/images/accounts/account-06.png",
  "/images/accounts/account-07.png",
  "/images/accounts/account-08.png",
  "/images/accounts/account-09.png",
  "/images/accounts/account-10.png",
  "/images/accounts/account-11.png",
  "/images/accounts/account-12.png",
  "/images/accounts/account-13.png",
  "/images/accounts/account-14.png",
  "/images/accounts/account-15.png",
  "/images/accounts/account-16.png",
  "/images/accounts/account-17.png",
  "/images/accounts/account-18.png",
  "/images/accounts/account-19.png",
  "/images/accounts/account-20.png",
] as const;

const half = Math.ceil(ACCOUNT_SCREENSHOTS.length / 2);

export const LEFT_ACCOUNT_IMAGES = ACCOUNT_SCREENSHOTS.slice(0, half);
export const RIGHT_ACCOUNT_IMAGES = ACCOUNT_SCREENSHOTS.slice(half);

export const HERO_VIEWS = [
  { value: "8 M", className: "left-[20%] top-[18%] z-[7] hidden md:block" },
  { value: "10,8 M", className: "left-[12%] top-[40%] z-[7] hidden lg:block" },
  { value: "79,1 M", className: "right-[20%] top-[14%] z-[7] hidden md:block" },
  { value: "14,3 M", className: "right-[12%] top-[46%] z-[7] hidden lg:block" },
] as const;

export type FloatingBill = {
  width: number;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  rotate: number;
  blur: number;
  opacity: number;
  objectPosition: string;
  delay: string;
};

export const FLOATING_BILLS: FloatingBill[] = [
  { width: 340, bottom: "-12%", left: "-14%", rotate: -32, blur: 14, opacity: 0.5, objectPosition: "25% 75%", delay: "0s" },
  { width: 260, bottom: "18%", left: "2%", rotate: -18, blur: 3, opacity: 0.9, objectPosition: "45% 65%", delay: "0.8s" },
  { width: 200, top: "30%", left: "-10%", rotate: 24, blur: 10, opacity: 0.35, objectPosition: "70% 50%", delay: "1.5s" },
  { width: 380, bottom: "-10%", right: "-12%", rotate: 26, blur: 12, opacity: 0.55, objectPosition: "55% 80%", delay: "0.3s" },
  { width: 270, bottom: "22%", right: "1%", rotate: -22, blur: 2, opacity: 0.92, objectPosition: "60% 70%", delay: "1s" },
  { width: 220, top: "32%", right: "-8%", rotate: 15, blur: 8, opacity: 0.4, objectPosition: "80% 45%", delay: "2s" },
  { width: 180, bottom: "8%", left: "28%", rotate: -8, blur: 6, opacity: 0.3, objectPosition: "50% 55%", delay: "1.2s" },
  { width: 160, bottom: "12%", right: "30%", rotate: 10, blur: 5, opacity: 0.35, objectPosition: "40% 60%", delay: "1.8s" },
];

export const DOLLAR_IMAGE = "/images/dollar.webp";

export const CITY_IMAGE =
  "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=60&auto=format&fit=crop&fm=webp";

import type { IconType } from "react-icons";
import {
  FaAward,
  FaBriefcase,
  FaChartLine,
  FaEye,
  FaHandHoldingUsd,
  FaShieldAlt,
  FaUserPlus,
} from "react-icons/fa";

export type IconPosition = "top-right" | "bottom-left";

export type StatItem = {
  id: string;
  value: string;
  label: string;
  icon: IconType;
  featured?: boolean;
  prefix?: string;
  valueSuffix?: string;
  subLabel?: string;
  iconPosition?: IconPosition;
  gridClass: string;
};

export const STATS: StatItem[] = [
  {
    id: "sales",
    value: "500 Million",
    valueSuffix: "AED",
    prefix: "Over",
    label: "in sales achieved for clients within the last 2.5 years in Dubai",
    icon: FaAward,
    iconPosition: "bottom-left",
    gridClass: "lg:col-start-1 lg:row-start-1",
  },
  {
    id: "top3",
    value: "9",
    label: "clients went from unknown to Top-3 most famous",
    subLabel:
      "in their niche (Real Estate, Company Formation, Luxury Rent a Car, Luxury Yacht Rental, Football Academy, Cosmetology, Volleyball Academy, Renovation Company, Entertainment)",
    icon: FaShieldAlt,
    iconPosition: "bottom-left",
    gridClass: "lg:col-start-1 lg:row-start-2 lg:row-span-2",
  },
  {
    id: "views",
    value: "2,000,000,000",
    label: "views generated for clients",
    icon: FaEye,
    featured: true,
    gridClass: "lg:col-start-2 lg:row-start-1 lg:row-span-2",
  },
  {
    id: "agencies",
    value: "4",
    label:
      "clients went from employed to starting their own agencies and business within 2–10 months of working with us",
    icon: FaBriefcase,
    iconPosition: "top-right",
    gridClass: "lg:col-start-2 lg:row-start-3",
  },
  {
    id: "followers-500k",
    value: "500,000",
    label: "followers gained through 60 videos created for a single client",
    icon: FaUserPlus,
    iconPosition: "top-right",
    gridClass: "lg:col-start-3 lg:row-start-1",
  },
  {
    id: "followers-100k",
    value: "100,000",
    label: "followers achieved in just 17 videos (UAE record)",
    icon: FaHandHoldingUsd,
    iconPosition: "top-right",
    gridClass: "lg:col-start-3 lg:row-start-2",
  },
  {
    id: "revenue",
    value: "5x",
    label: "revenue growth achieved for existing businesses",
    icon: FaChartLine,
    iconPosition: "top-right",
    gridClass: "lg:col-start-3 lg:row-start-3",
  },
];

import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import FloatingContact from "@/components/FloatingContact";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Brand Boost — Social Media Agency",
  description:
    "We scale personal brands and businesses through social media. Premium social media marketing agency.",
  keywords: [
    "social media agency",
    "personal brand",
    "brand boost",
    "instagram marketing",
    "content creation",
  ],
  openGraph: {
    title: "Brand Boost — Social Media Agency",
    description:
      "We scale personal brands and businesses through social media.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brand Boost — Social Media Agency",
    description:
      "We scale personal brands and businesses through social media.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="font-sans">
        {children}
        <FloatingContact />
      </body>
    </html>
  );
}

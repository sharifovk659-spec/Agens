import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import FloatingContact from "@/components/FloatingContact";
import Providers from "@/components/Providers";
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
  title: "Qimat Agency — Marketing Agency",
  description:
    "We scale personal brands and businesses through social media. Premium social media marketing agency in Dubai.",
  keywords: [
    "social media agency",
    "personal brand",
    "qimat agency",
    "instagram marketing",
    "content creation",
  ],
  openGraph: {
    title: "Qimat Agency — Marketing Agency",
    description:
      "We scale personal brands and businesses through social media.",
    type: "website",
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Qimat Agency — Marketing Agency",
    description:
      "We scale personal brands and businesses through social media.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="overflow-x-hidden font-sans">
        <Providers>
          {children}
          <FloatingContact />
        </Providers>
      </body>
    </html>
  );
}

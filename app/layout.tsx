import type { Metadata } from "next";
import { Montserrat, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BottomFade from "@/components/layout/BottomFade";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://www.mindstormglobaledu.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Mindstorm Strategic Consulting | Global Education Excellence",
    template: "%s | Mindstorm Strategic Consulting",
  },
  description:
    "Your gateway to global education. Study in Canada, Australia, Europe, Russia & UAE with complete professional guidance. University admissions, visa processing, and pre-departure support.",
  keywords: [
    "study abroad",
    "overseas education",
    "university admissions",
    "visa processing",
    "study in Canada",
    "study in Australia",
    "study in Europe",
    "Mindstorm",
    "education consultancy",
    "Dubai",
    "international students",
    "study visa",
  ],
  authors: [{ name: "Mindstorm Strategic Consulting", url: BASE_URL }],
  creator: "Mindstorm Strategic Consulting",
  publisher: "Mindstorm Strategic Consulting",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Mindstorm Strategic Consulting",
    title: "Mindstorm Strategic Consulting | Global Education Excellence",
    description:
      "Your gateway to global education. Study in Canada, Australia, Europe, Russia & UAE with complete professional guidance.",
    images: [
      {
        url: "/MindStorm Global 256x256.png",
        width: 256,
        height: 256,
        alt: "Mindstorm Strategic Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mindstorm Strategic Consulting | Global Education Excellence",
    description:
      "Your gateway to global education. Study in Canada, Australia, Europe, Russia & UAE with complete professional guidance.",
    images: ["/MindStorm Global 256x256.png"],
  },
  icons: {
    icon: "/MindStorm Global 256x256.png",
    apple: "/MindStorm Global 256x256.png",
    shortcut: "/MindStorm Global 256x256.png",
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${geistMono.variable} h-full antialiased overflow-x-hidden`}
    >
      <body className="min-h-full flex flex-col bg-black text-[var(--color-text)] overflow-x-hidden">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <BottomFade />
      </body>
    </html>
  );
}

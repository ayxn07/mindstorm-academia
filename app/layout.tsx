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

export const metadata: Metadata = {
  title: "Mindstorm Strategic Consulting | Global Education Excellence",
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
  ],
  icons: {
    icon: "/MindStorm Global 256x256.png",
    apple: "/MindStorm Global 256x256.png",
    shortcut: "/MindStorm Global 256x256.png",
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
      className={`${montserrat.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-[var(--color-text)]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <BottomFade />
      </body>
    </html>
  );
}

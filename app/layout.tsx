import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-[var(--color-text)]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

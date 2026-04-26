import type { Metadata } from "next";
import SuccessClient from "./SuccessClient";

export const metadata: Metadata = {
  title: "Application Submitted",
  description:
    "Your study abroad application has been received. Save your reference number and continue on WhatsApp.",
  robots: { index: false, follow: false },
};

interface PageProps {
  searchParams: Promise<{ ref?: string }>;
}

export default async function SuccessPage({ searchParams }: PageProps) {
  const { ref } = await searchParams;
  return <SuccessClient reference={ref ?? null} />;
}

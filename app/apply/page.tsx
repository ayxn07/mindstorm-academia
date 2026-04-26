import type { Metadata } from "next";
import ApplyForm from "./ApplyForm";

const BASE_URL = "https://www.mindstormglobaledu.com";

export const metadata: Metadata = {
  title: "Apply for Study Abroad",
  description:
    "Start your study abroad application with Mindstorm — fill in your details, study preferences, and required services. Get your reference number instantly.",
  alternates: { canonical: `${BASE_URL}/apply` },
  openGraph: {
    title: "Apply for Study Abroad | Mindstorm",
    description:
      "Begin your international study journey. Submit your application and a counsellor will get back to you within 24 hours.",
    url: `${BASE_URL}/apply`,
    type: "website",
  },
};

const SLUG_TO_PREFERRED: Record<string, string> = {
  canada: "canada",
  australia: "australia",
  uk: "uk",
  usa: "usa",
  europe: "europe",
  "new-zealand": "new_zealand",
  germany: "germany",
  russia: "russia",
  uae: "uae",
  singapore: "singapore",
};

interface PageProps {
  searchParams: Promise<{ from?: string }>;
}

export default async function ApplyPage({ searchParams }: PageProps) {
  const { from } = await searchParams;
  const fromSlug = from && SLUG_TO_PREFERRED[from] ? SLUG_TO_PREFERRED[from] : null;
  return <ApplyForm initialCountry={fromSlug} originPage={from ?? null} />;
}

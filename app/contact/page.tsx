import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/ContactMap";
import TestimonialsMasonry from "@/components/testimonials/TestimonialsMasonry";
import FAQAccordion from "@/components/faq/FAQAccordion";

const BASE_URL = "https://www.mindstormglobaledu.com";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Mindstorm Strategic Consulting. Book a free consultation, visit our offices, or reach out online. We're here to help you start your international education journey.",
  keywords: [
    "contact Mindstorm",
    "book free consultation",
    "education consultancy contact",
    "study abroad enquiry",
    "Mindstorm Dubai office",
    "international education help",
  ],
  alternates: {
    canonical: `${BASE_URL}/contact`,
  },
  openGraph: {
    title: "Contact Us | Mindstorm Strategic Consulting",
    description:
      "Book a free consultation or visit our offices. Expert guidance for your international education journey.",
    url: `${BASE_URL}/contact`,
    type: "website",
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
    title: "Contact Us | Mindstorm Strategic Consulting",
    description:
      "Book a free consultation or visit our offices. Expert guidance for your international education journey.",
    images: ["/MindStorm Global 256x256.png"],
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <ContactMap />
      <TestimonialsMasonry />
      <FAQAccordion />
    </>
  );
}

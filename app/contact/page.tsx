import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/ContactMap";
import TestimonialsMasonry from "@/components/testimonials/TestimonialsMasonry";
import FAQAccordion from "@/components/faq/FAQAccordion";

export const metadata: Metadata = {
  title: "Contact Us | Mindstorm Strategic Consulting",
  description:
    "Get in touch with Mindstorm Strategic Consulting. Book a free consultation, visit our offices, or reach out online. We're here to help you start your international education journey.",
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

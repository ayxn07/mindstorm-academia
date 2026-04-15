"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";

const footerLinks = [
  {
    title: "Study Abroad",
    links: [
      { label: "Canada", href: "/study/canada" },
      { label: "Australia", href: "/study/australia" },
      { label: "Europe", href: "/study/europe" },
      { label: "Russia", href: "/study/russia" },
      { label: "UAE", href: "/study/uae" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "University Admissions", href: "/services" },
      { label: "Visa Processing", href: "/services" },
      { label: "Documentation & SOP", href: "/services" },
      { label: "Career Guidance", href: "/career-guidance" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Process", href: "/process" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-[var(--glass-border)] bg-black">
      {/* Decorative top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent opacity-60" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="section-container py-16 md:py-20"
      >
        {/* Top row: logo + columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand column */}
          <motion.div variants={fadeInUp} className="lg:col-span-2">
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/Mindstorm-Logo.jpg"
                alt="Mindstorm Strategic Consulting"
                width={200}
                height={56}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-[var(--color-text-muted)] text-sm leading-relaxed max-w-sm mb-6">
              Empowering students with access to global education opportunities
              through structured, transparent, and professional guidance.
            </p>
            <div className="flex items-center gap-2 text-xs text-[var(--color-text-dim)]">
              <span className="inline-block w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse" />
              Dubai &middot; Bangalore &middot; Mohali
            </div>
          </motion.div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <motion.div key={col.title} variants={fadeInUp}>
              <h4 className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-wider mb-4">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          variants={fadeInUp}
          className="mt-14 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-xs text-[var(--color-text-dim)]">
            &copy; {new Date().getFullYear()} Mindstorm Strategic Consulting FZ-LLC.
            All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-xs text-[var(--color-text-dim)] hover:text-[var(--color-primary)] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-xs text-[var(--color-text-dim)] hover:text-[var(--color-primary)] transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}

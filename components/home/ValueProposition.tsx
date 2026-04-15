"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  viewportOnce,
  lineDraw,
} from "@/lib/animations";
import TiltCard from "@/components/ui/TiltCard";

const propositions = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    title: "Strategic University Selection",
    description:
      "We map your academic profile against global university databases to identify the best-fit institutions for your goals, budget, and career aspirations.",
    image:
      "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    title: "Strong Documentation",
    description:
      "Our expert documentation team crafts compelling SOPs, LORs, and resumes that make your application stand out to admission committees.",
    image:
      "https://images.pexels.com/photos/5408684/pexels-photo-5408684.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Efficient Processing",
    description:
      "Our structured workflow ensures no deadlines are missed and every step is executed with precision and speed from application to visa.",
    image:
      "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "High-Quality Visa Support",
    description:
      "Our visa experts guide you through documentation, financial requirements, and interview preparation with proven strategies.",
    image:
      "https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

export default function ValueProposition() {
  return (
    <section className="relative py-0">
      <motion.div
        variants={lineDraw}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="w-full h-px bg-gradient-to-r from-transparent via-[var(--color-primary)]/20 to-transparent"
      />

      <div className="section-container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-16"
        >
          <motion.p
            variants={fadeInUp}
            className="text-[var(--color-primary)] text-sm font-medium tracking-widest uppercase mb-3"
          >
            Our Approach
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-text)] mb-5"
          >
            We Build International{" "}
            <span className="text-gradient-gold">Academic Pathways</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-[var(--color-text-muted)] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            At Mindstorm Global, we don&apos;t just process applications &mdash; we
            architect complete international education journeys through
            strategic planning and expert execution.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {propositions.map((item, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <TiltCard className="h-full" tiltIntensity={12}>
                <div className="group relative h-full rounded-2xl card-3d overflow-hidden">
                  {/* Image */}
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)] mb-4 group-hover:bg-[var(--color-primary)]/20 transition-colors duration-300">
                      {item.icon}
                    </div>
                    <h3 className="text-base font-semibold text-[var(--color-text)] mb-2 group-hover:text-[var(--color-primary)] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

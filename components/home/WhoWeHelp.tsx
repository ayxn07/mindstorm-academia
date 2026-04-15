"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";
import TiltCard from "@/components/ui/TiltCard";

const studentTypes = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c0 1.657 2.686 3 6 3s6-1.343 6-3v-5" />
      </svg>
    ),
    title: "High School Graduates",
    description:
      "Fresh out of school and ready for global exposure? We help you secure admission to top undergraduate programs worldwide.",
    image:
      "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Undergraduate Applicants",
    description:
      "Looking for your bachelor's degree abroad? We connect you with universities that match your academic interests and career goals.",
    image:
      "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        <line x1="8" y1="7" x2="16" y2="7" />
        <line x1="8" y1="11" x2="14" y2="11" />
      </svg>
    ),
    title: "Postgraduate Aspirants",
    description:
      "Take your career to the next level with a master's or PhD from a globally ranked university with strong research opportunities.",
    image:
      "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "Global Exposure Seekers",
    description:
      "Want an international experience that broadens your horizons? We design academic pathways that open doors to global careers.",
    image:
      "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

export default function WhoWeHelp() {
  return (
    <section className="relative">
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
            Who We Serve
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-text)] mb-5"
          >
            Built for <span className="text-gradient-gold">Every Ambition</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-[var(--color-text-muted)] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Whether you&apos;re just finishing school or looking to advance your
            career with a postgraduate degree, we have the expertise to guide you.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {studentTypes.map((item, i) => (
            <motion.div key={i} variants={fadeInUp}>
              <TiltCard className="h-full" tiltIntensity={8}>
                <div className="group relative flex gap-0 h-full rounded-2xl card-3d overflow-hidden">
                  {/* Left image strip */}
                  <div className="relative hidden sm:block w-32 flex-shrink-0 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="128px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/60" />
                  </div>

                  {/* Content */}
                  <div className="flex gap-4 p-6 sm:p-7">
                    <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)] group-hover:bg-[var(--color-primary)]/20 transition-colors duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2 group-hover:text-[var(--color-primary)] transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
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

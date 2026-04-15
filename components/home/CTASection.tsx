"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  buttonHover,
  viewportOnce,
} from "@/lib/animations";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden">
      <div className="section-container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative rounded-3xl glass p-10 sm:p-14 md:p-20 text-center overflow-hidden"
        >
          {/* Background glows */}
          <div className="absolute top-0 left-1/4 w-[300px] h-[300px] rounded-full bg-[var(--color-primary)] opacity-[0.04] blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-[250px] h-[250px] rounded-full bg-[var(--color-primary)] opacity-[0.03] blur-[100px]" />

          <motion.p
            variants={fadeInUp}
            className="text-[var(--color-primary)] text-sm font-medium tracking-widest uppercase mb-4"
          >
            Start Your Journey
          </motion.p>

          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-text)] mb-6 max-w-3xl mx-auto leading-tight"
          >
            Take the First Step Toward Your{" "}
            <span className="text-gradient-gold">
              International Education
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-[var(--color-text-muted)] text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-10"
          >
            Connect with our expert counselors for a free consultation and
            discover the best academic pathway for your future.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.div
              variants={buttonHover}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[var(--color-primary)] text-black font-semibold text-base hover:bg-[var(--color-primary-light)] transition-colors duration-200 shadow-lg shadow-[var(--color-primary)]/20"
              >
                Apply Now
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </motion.div>
            <motion.div
              variants={buttonHover}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[var(--glass-border)] text-[var(--color-text)] font-medium text-base hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors duration-200"
              >
                Speak to an Expert
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

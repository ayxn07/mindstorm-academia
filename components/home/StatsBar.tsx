"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";
import CountUp from "@/components/CountUp";

const stats = [
  { value: 500, suffix: "+", label: "Students Placed" },
  { value: 120, suffix: "+", label: "Partner Universities" },
  { value: 5, suffix: "", label: "Countries" },
  { value: 95, suffix: "%", label: "Visa Success Rate" },
];

export default function StatsBar() {
  return (
    <section className="relative">
      {/* Top & bottom shimmer lines */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--color-primary)]/20 to-transparent" />

      <div className="relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 bg-[var(--color-primary)]/[0.02]" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="section-container py-16 md:py-20"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--color-primary)] mb-2 tabular-nums">
                  <CountUp
                    to={stat.value}
                    from={0}
                    duration={2.5}
                    delay={i * 0.15}
                    separator=","
                    className="tabular-nums"
                  />
                  {stat.suffix}
                </div>
                <p className="text-sm sm:text-base text-[var(--color-text-muted)]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--color-primary)]/20 to-transparent" />
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";

const stats = [
  { value: 500, suffix: "+", label: "Students Placed" },
  { value: 120, suffix: "+", label: "Partner Universities" },
  { value: 5, suffix: "", label: "Countries" },
  { value: 95, suffix: "%", label: "Visa Success Rate" },
];

function AnimatedCounter({
  value,
  suffix,
  duration = 2,
}: {
  value: number;
  suffix: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const increment = value / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

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
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--color-primary)] mb-2">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                  />
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

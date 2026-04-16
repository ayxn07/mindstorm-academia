"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  viewportOnce,
  lineDraw,
} from "@/lib/animations";
import CountUp from "@/components/CountUp";
import ShinyText from "@/components/ShinyText";

const stats = [
  { value: 500, suffix: "+", label: "Students Placed Globally" },
  { value: 120, suffix: "+", label: "Partner Universities" },
  { value: 5, suffix: "", label: "Countries Covered" },
  { value: 95, suffix: "%", label: "Visa Success Rate" },
  { value: 10, suffix: "+", label: "Years of Experience" },
  { value: 3, suffix: "", label: "Office Locations" },
];

export default function AboutStats() {
  return (
    <section className="relative">
      {/* Top divider */}
      <motion.div
        variants={lineDraw}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="w-full h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(215,190,89,0.2) 50%, transparent 100%)",
        }}
      />

      <div className="relative overflow-hidden">
        {/* Subtle background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "rgba(215,190,89,0.015)" }}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="section-container py-16 md:py-20"
        >
          <motion.div
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <div className="mb-3">
              <ShinyText
                text="Our Impact"
                color="#d7be59"
                shineColor="#f5ecc8"
                speed={3}
                spread={120}
                className="text-sm font-medium tracking-widest uppercase"
              />
            </div>
            <h2
              className="text-2xl sm:text-3xl font-bold"
              style={{ color: "#eeeeee" }}
            >
              Mindstorm by the{" "}
              <span className="text-gradient-gold">Numbers</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="text-center"
              >
                <div
                  className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 tabular-nums"
                  style={{ color: "#d7be59" }}
                >
                  <CountUp
                    to={stat.value}
                    from={0}
                    duration={2.5}
                    delay={i * 0.1}
                    separator=","
                    className="tabular-nums"
                  />
                  {stat.suffix}
                </div>
                <p
                  className="text-xs sm:text-sm"
                  style={{ color: "#999" }}
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom divider */}
      <motion.div
        variants={lineDraw}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="w-full h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(215,190,89,0.2) 50%, transparent 100%)",
        }}
      />
    </section>
  );
}

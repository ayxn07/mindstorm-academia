"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";
import ShinyText from "@/components/ShinyText";
import BorderGlow from "@/components/BorderGlow";
import CountUp from "@/components/CountUp";

const timelineData = [
  {
    period: "Fall Intake",
    month: "Sep",
    deadline: "Mar \u2013 Jun",
    processing: "3\u20134 months",
    progress: 85,
  },
  {
    period: "Winter Intake",
    month: "Jan",
    deadline: "Aug \u2013 Oct",
    processing: "3\u20134 months",
    progress: 80,
  },
  {
    period: "Spring Intake",
    month: "May",
    deadline: "Nov \u2013 Jan",
    processing: "2\u20133 months",
    progress: 70,
  },
  {
    period: "Rolling Admissions",
    month: "Ongoing",
    deadline: "Varies by university",
    processing: "Continuous",
    progress: 50,
  },
];

const stats = [
  { value: 98, suffix: "%", label: "Visa Approval Rate" },
  { value: 500, suffix: "+", label: "Universities Partnered" },
  { value: 15000, suffix: "+", label: "Students Placed" },
  { value: 5, suffix: "", label: "Countries Covered" },
];

export default function ProcessTimeline() {
  return (
    <section className="relative overflow-hidden">
      <div className="section-container">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="mb-3">
            <ShinyText
              text="Timeline"
              color="#d7be59"
              shineColor="#f5ecc8"
              speed={3}
              spread={120}
              className="text-sm font-medium tracking-widest uppercase"
            />
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5"
            style={{ color: "#eeeeee" }}
          >
            Typical{" "}
            <span className="text-gradient-gold">Processing Timeline</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "#999" }}
          >
            Plan your journey ahead with our intake-wise processing schedule.
            Each intake has specific windows — here&apos;s what to expect.
          </motion.p>
        </motion.div>

        {/* Timeline — horizontal scroll on mobile */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative mb-20"
        >
          {/* Connecting line behind cards */}
          <motion.div
            variants={fadeInUp}
            className="hidden md:block absolute top-1/2 left-0 right-0 h-px -translate-y-1/2 z-0"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(215,190,89,0.25) 15%, rgba(215,190,89,0.25) 85%, transparent 100%)",
            }}
          />

          <div
            className="flex gap-5 overflow-x-auto pb-4 md:pb-0 md:overflow-visible md:grid md:grid-cols-4 scrollbar-hide max-w-5xl mx-auto"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {timelineData.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="relative z-10 flex-shrink-0 w-[280px] md:w-auto"
                style={{ scrollSnapAlign: "start" }}
              >
                {/* Node dot */}
                <div
                  className="hidden md:flex items-center justify-center mx-auto mb-5 w-4 h-4 rounded-full"
                  style={{
                    background: "#d7be59",
                    boxShadow: "0 0 12px rgba(215,190,89,0.4)",
                  }}
                >
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: "#0a0a0a" }}
                  />
                </div>

                <BorderGlow
                  backgroundColor="#0a0a0a"
                  borderRadius={30}
                  glowColor="45 70 60"
                  colors={["#d7be59", "#e5d285", "#b89e3a"]}
                  edgeSensitivity={3}
                  glowRadius={25}
                  glowIntensity={3}
                  coneSpread={30}
                  className="h-full"
                >
                  <div
                    className="p-6 sm:p-7 flex flex-col gap-4"
                    style={{ borderRadius: 30 }}
                  >
                    {/* Period header */}
                    <div>
                      <span
                        className="text-xs font-medium tracking-widest uppercase"
                        style={{ color: "#999" }}
                      >
                        {item.period}
                      </span>
                      <h3
                        className="text-2xl font-bold mt-1"
                        style={{ color: "#d7be59" }}
                      >
                        {item.month}
                      </h3>
                    </div>

                    {/* Divider */}
                    <div
                      className="w-full h-px"
                      style={{ background: "rgba(215,190,89,0.12)" }}
                    />

                    {/* Key dates */}
                    <div className="flex flex-col gap-2">
                      <div>
                        <span
                          className="text-xs uppercase tracking-wider"
                          style={{ color: "#666" }}
                        >
                          Application Deadline
                        </span>
                        <p
                          className="text-sm font-medium mt-0.5"
                          style={{ color: "#eeeeee" }}
                        >
                          {item.deadline}
                        </p>
                      </div>
                      <div>
                        <span
                          className="text-xs uppercase tracking-wider"
                          style={{ color: "#666" }}
                        >
                          Processing Time
                        </span>
                        <p
                          className="text-sm font-medium mt-0.5"
                          style={{ color: "#eeeeee" }}
                        >
                          {item.processing}
                        </p>
                      </div>
                    </div>

                    {/* Progress indicator */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span
                          className="text-[11px] uppercase tracking-wider"
                          style={{ color: "#666" }}
                        >
                          Demand Level
                        </span>
                        <span
                          className="text-[11px] font-medium"
                          style={{ color: "#d7be59" }}
                        >
                          {item.progress}%
                        </span>
                      </div>
                      <div
                        className="w-full h-1.5 rounded-full overflow-hidden"
                        style={{ background: "rgba(215,190,89,0.1)" }}
                      >
                        <motion.div
                          className="h-full rounded-full"
                          style={{
                            background:
                              "linear-gradient(90deg, #b89e3a, #d7be59, #e5d285)",
                          }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.progress}%` }}
                          viewport={viewportOnce}
                          transition={{
                            duration: 1.2,
                            delay: i * 0.15,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </BorderGlow>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Success Rate Stats */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.div
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <h3
              className="text-2xl sm:text-3xl md:text-4xl font-bold"
              style={{ color: "#eeeeee" }}
            >
              Our <span className="text-gradient-gold">Success Rate</span>
            </h3>
            <p
              className="text-sm sm:text-base mt-3 max-w-lg mx-auto"
              style={{ color: "#777" }}
            >
              Numbers that reflect our commitment to every student&apos;s journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {stats.map((stat, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <BorderGlow
                  backgroundColor="#0a0a0a"
                  borderRadius={24}
                  glowColor="45 70 60"
                  colors={["#d7be59", "#e5d285", "#b89e3a"]}
                  edgeSensitivity={3}
                  glowRadius={25}
                  glowIntensity={3}
                  coneSpread={30}
                >
                  <div
                    className="relative overflow-hidden p-6 sm:p-8 text-center"
                    style={{ borderRadius: 24 }}
                  >
                    {/* Decorative watermark */}
                    <span
                      className="absolute -top-4 -right-2 select-none pointer-events-none font-bold font-mono"
                      style={{
                        fontSize: 100,
                        lineHeight: 1,
                        color: "rgba(215,190,89,0.04)",
                      }}
                    >
                      {stat.suffix === "%" ? "%" : "#"}
                    </span>
                    <div
                      className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 tabular-nums relative z-[1]"
                      style={{ color: "#d7be59" }}
                    >
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
                    <p
                      className="text-xs sm:text-sm font-medium tracking-wide uppercase relative z-[1]"
                      style={{ color: "#999" }}
                    >
                      {stat.label}
                    </p>
                  </div>
                </BorderGlow>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

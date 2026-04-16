"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";
import SpotlightCard from "@/components/SpotlightCard";
import ShinyText from "@/components/ShinyText";

const pillars = [
  {
    label: "Our Mission",
    title: "Empower Every Student",
    description:
      "To provide structured, transparent, and professional guidance that empowers students to access world-class education opportunities across the globe. We bridge the gap between ambition and achievement through expert-driven consulting.",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    watermark: (
      <svg
        width="220"
        height="220"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    accent: "Precision-Driven",
  },
  {
    label: "Our Vision",
    title: "Global Education Access",
    description:
      "To become the most trusted education consultancy in the MENA region and beyond, recognized for our integrity, success rates, and the transformative impact we create in the lives of students and their families worldwide.",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    watermark: (
      <svg
        width="220"
        height="220"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    accent: "Future-Forward",
  },
  {
    label: "Our Values",
    title: "Integrity First",
    description:
      "Transparency, honesty, and student-first thinking define everything we do. No hidden fees, no false promises — just genuine, professional guidance backed by deep expertise and a commitment to delivering real results.",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    watermark: (
      <svg
        width="220"
        height="220"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    accent: "Trust-Centered",
  },
];

export default function MissionVisionValues() {
  return (
    <section className="relative overflow-hidden">
      {/* Decorative ambient glow */}
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(215,190,89,0.03) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="section-container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-20"
        >
          <motion.div variants={fadeInUp} className="mb-3">
            <ShinyText
              text="What Drives Us"
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
            Mission, Vision &{" "}
            <span className="text-gradient-gold">Values</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "#999" }}
          >
            The principles that guide every decision we make and every student
            we serve.
          </motion.p>
        </motion.div>

        {/* Stacked full-width pillar cards */}
        <div className="flex flex-col gap-8 max-w-5xl mx-auto">
          {pillars.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              custom={index}
            >
              <SpotlightCard
                className="relative group"
                spotlightColor="rgba(215, 190, 89, 0.12)"
              >
                {/* Watermark icon in background */}
                <div
                  className="absolute pointer-events-none opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-700"
                  style={{
                    color: "#d7be59",
                    right: index % 2 === 0 ? "-20px" : "auto",
                    left: index % 2 !== 0 ? "-20px" : "auto",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                >
                  {item.watermark}
                </div>

                {/* Top gold line accent */}
                <div
                  className="absolute top-0 left-8 right-8 h-px"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(215,190,89,0.3), transparent)",
                  }}
                />

                <div
                  className={`relative flex flex-col ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } items-center gap-8 md:gap-12 p-2 sm:p-4`}
                >
                  {/* Icon block */}
                  <div className="flex-shrink-0 flex flex-col items-center gap-4">
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      {/* Glow ring behind icon */}
                      <div
                        className="absolute inset-0 rounded-full"
                        style={{
                          background:
                            "radial-gradient(circle, rgba(215,190,89,0.15) 0%, transparent 70%)",
                          transform: "scale(2.5)",
                          filter: "blur(20px)",
                        }}
                      />
                      <div
                        className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(215,190,89,0.12) 0%, rgba(215,190,89,0.03) 100%)",
                          border: "1px solid rgba(215,190,89,0.2)",
                          color: "#d7be59",
                        }}
                      >
                        {item.icon}
                      </div>
                    </motion.div>
                    {/* Accent tag */}
                    <span
                      className="text-[10px] font-semibold tracking-[0.25em] uppercase px-3 py-1 rounded-full"
                      style={{
                        background: "rgba(215,190,89,0.08)",
                        color: "#d7be59",
                        border: "1px solid rgba(215,190,89,0.15)",
                      }}
                    >
                      {item.accent}
                    </span>
                  </div>

                  {/* Text content */}
                  <div
                    className={`flex-1 ${
                      index % 2 === 0
                        ? "text-center md:text-left"
                        : "text-center md:text-right"
                    }`}
                  >
                    <span
                      className="text-xs font-medium tracking-[0.2em] uppercase mb-2 block"
                      style={{ color: "rgba(215,190,89,0.6)" }}
                    >
                      {item.label}
                    </span>
                    <h3
                      className="text-2xl sm:text-3xl font-bold mb-4 group-hover:text-[#d7be59] transition-colors duration-500"
                      style={{ color: "#eeeeee" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-sm sm:text-base leading-relaxed max-w-xl"
                      style={{
                        color: "#999",
                        marginLeft: index % 2 !== 0 ? "auto" : undefined,
                      }}
                    >
                      {item.description}
                    </p>

                    {/* Bottom decorative line */}
                    <motion.div
                      className="mt-6 h-px rounded-full"
                      style={{
                        background:
                          "linear-gradient(90deg, rgba(215,190,89,0.4), rgba(215,190,89,0.05))",
                        maxWidth: "120px",
                        marginLeft: index % 2 !== 0 ? "auto" : undefined,
                      }}
                      initial={{ scaleX: 0, originX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 + index * 0.15 }}
                    />
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

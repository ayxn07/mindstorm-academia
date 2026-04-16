"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";
import SpotlightCard from "@/components/SpotlightCard";
import ShinyText from "@/components/ShinyText";

const strengths = [
  {
    title: "Direct University Partnerships",
    shortTitle: "University Network",
    description:
      "We maintain direct relationships with admissions offices at 120+ universities. This gives us real-time insights into intake availability, scholarship deadlines, and admission requirements that most consultancies don't have access to.",
    stat: "120+",
    statLabel: "Partner Universities",
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c0 1 4 3 6 3s6-2 6-3v-5" />
      </svg>
    ),
  },
  {
    title: "Country-Specific Expert Teams",
    shortTitle: "Specialist Teams",
    description:
      "Unlike generalist agencies, we have dedicated teams for each destination country. Our Canada team knows Canadian immigration inside-out, our Europe specialists navigate the Bologna Process, and our UAE experts understand local accreditation requirements.",
    stat: "5+",
    statLabel: "Specialist Desks",
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: "End-to-End Management",
    shortTitle: "Full Service",
    description:
      "From the first consultation to airport pick-up in your destination city, we manage every aspect. Profile assessment, university shortlisting, application filing, documentation, visa processing, and pre-departure briefing — all under one roof.",
    stat: "100%",
    statLabel: "Process Coverage",
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Ethical & Transparent Operations",
    shortTitle: "Ethical Practice",
    description:
      "We believe in earned trust. Our fee structures are published upfront, our success rates are verifiable, and we never recommend a university based on commission incentives. Our recommendations are purely merit-based.",
    stat: "0",
    statLabel: "Hidden Fees",
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
];

export default function CoreStrengths() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden">
      {/* Decorative ambient glows */}
      <div
        className="absolute right-0 top-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(215,190,89,0.02) 0%, transparent 60%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute left-0 bottom-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(215,190,89,0.015) 0%, transparent 60%)",
          filter: "blur(60px)",
        }}
      />

      <div className="section-container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="mb-3">
            <ShinyText
              text="What Sets Us Apart"
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
            Our Core{" "}
            <span className="text-gradient-gold">Strengths</span>
          </motion.h2>
        </motion.div>

        {/* 2x2 Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {strengths.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              custom={i}
            >
              <SpotlightCard
                className="relative group cursor-pointer h-full"
                spotlightColor="rgba(215, 190, 89, 0.10)"
              >
                {/* Corner accent */}
                <div
                  className="absolute top-0 right-0 w-20 h-20 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(225deg, rgba(215,190,89,0.08) 0%, transparent 60%)",
                  }}
                />

                <div
                  className="relative"
                  onClick={() =>
                    setExpandedIndex(expandedIndex === i ? null : i)
                  }
                >
                  {/* Header row: icon + stat */}
                  <div className="flex items-start justify-between mb-6">
                    <motion.div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center"
                      style={{
                        background:
                          "linear-gradient(135deg, rgba(215,190,89,0.12) 0%, rgba(215,190,89,0.04) 100%)",
                        border: "1px solid rgba(215,190,89,0.15)",
                        color: "#d7be59",
                      }}
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      {item.icon}
                    </motion.div>

                    {/* Stat badge */}
                    <div className="text-right">
                      <div
                        className="text-3xl sm:text-4xl font-bold leading-none"
                        style={{ color: "#d7be59" }}
                      >
                        {item.stat}
                      </div>
                      <div
                        className="text-[10px] font-medium tracking-wider uppercase mt-1"
                        style={{ color: "rgba(215,190,89,0.5)" }}
                      >
                        {item.statLabel}
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-[#d7be59] transition-colors duration-500"
                    style={{ color: "#eeeeee" }}
                  >
                    {item.title}
                  </h3>

                  {/* Short description (always visible) */}
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#999" }}
                  >
                    {item.description.slice(0, 100)}...
                  </p>

                  {/* Expandable full description */}
                  <AnimatePresence>
                    {expandedIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p
                          className="text-sm leading-relaxed pt-2"
                          style={{ color: "#bbb" }}
                        >
                          {item.description.slice(100)}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Expand indicator */}
                  <div className="flex items-center gap-2 mt-5">
                    <motion.div
                      className="w-6 h-6 rounded-full flex items-center justify-center"
                      style={{
                        border: "1px solid rgba(215,190,89,0.25)",
                        color: "#d7be59",
                      }}
                      animate={{
                        rotate: expandedIndex === i ? 45 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <line x1="6" y1="2" x2="6" y2="10" />
                        <line x1="2" y1="6" x2="10" y2="6" />
                      </svg>
                    </motion.div>
                    <span
                      className="text-xs tracking-wider uppercase"
                      style={{ color: "rgba(215,190,89,0.4)" }}
                    >
                      {expandedIndex === i ? "Less" : "Read more"}
                    </span>
                  </div>
                </div>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-8 right-8 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(215,190,89,0.3), transparent)",
                  }}
                />
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Bottom connecting line */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div
            className="w-px h-12"
            style={{
              background:
                "linear-gradient(180deg, rgba(215,190,89,0.3), transparent)",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}

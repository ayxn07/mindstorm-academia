"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  viewportOnce,
  lineDraw,
} from "@/lib/animations";
import BorderGlow from "@/components/BorderGlow";
import ShinyText from "@/components/ShinyText";

const steps = [
  {
    number: "01",
    title: "Free Consultation",
    description:
      "Book a no-obligation session with our counselors. We assess your academic profile, goals, and preferences to recommend the best path forward.",
  },
  {
    number: "02",
    title: "University Shortlisting",
    description:
      "Based on your profile, we shortlist 5-8 best-fit universities across your preferred countries, considering rankings, fees, scholarships, and career outcomes.",
  },
  {
    number: "03",
    title: "Application & Documents",
    description:
      "We handle the complete application — from online forms and SOP writing to transcript verification and submission. Every detail is managed with precision.",
  },
  {
    number: "04",
    title: "Offer Letter & Confirmation",
    description:
      "Once you receive offer letters, we help you compare options, accept the best offer, pay tuition deposits, and confirm your enrollment.",
  },
  {
    number: "05",
    title: "Visa & Travel Prep",
    description:
      "Our visa team prepares your complete application, conducts mock interviews, and guides you through financial documentation. We also handle pre-departure orientation.",
  },
  {
    number: "06",
    title: "Arrival & Beyond",
    description:
      "We coordinate airport pick-up, accommodation check-in, and provide ongoing support as you settle into your new academic life abroad.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden">
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

      {/* Decorative glow */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(215,190,89,0.02) 0%, transparent 70%)",
          filter: "blur(80px)",
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
              text="How It Works"
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
            Your Journey in{" "}
            <span className="text-gradient-gold">6 Simple Steps</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "#999" }}
          >
            A structured, transparent process designed to take the stress out
            of studying abroad.
          </motion.p>
        </motion.div>

        {/* Steps grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {steps.map((step, i) => (
            <motion.div key={i} variants={fadeInUp}>
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
                  className="group relative h-full p-7 sm:p-8 flex flex-col"
                  style={{ borderRadius: 30 }}
                >
                  {/* Step number */}
                  <span
                    className="text-5xl sm:text-6xl font-bold font-mono mb-4 opacity-15 group-hover:opacity-30 transition-opacity duration-300"
                    style={{ color: "#d7be59" }}
                  >
                    {step.number}
                  </span>

                  {/* Title */}
                  <h3
                    className="text-lg font-bold mb-3 group-hover:text-[#d7be59] transition-colors duration-300"
                    style={{ color: "#eeeeee" }}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#999" }}
                  >
                    {step.description}
                  </p>

                  {/* Connecting line indicator */}
                  {i < steps.length - 1 && (
                    <div
                      className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-px"
                      style={{ background: "rgba(215,190,89,0.15)" }}
                    />
                  )}
                </div>
              </BorderGlow>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

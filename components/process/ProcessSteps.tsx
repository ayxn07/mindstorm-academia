"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  viewportOnce,
  lineDraw,
} from "@/lib/animations";
import BorderGlow from "@/components/BorderGlow";
import ShinyText from "@/components/ShinyText";

const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    description:
      "We begin with a comprehensive one-on-one session to understand your academic background, career aspirations, budget, and preferred destinations.",
    image:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Initial consultation session",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#d7be59"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <line x1="9" y1="10" x2="15" y2="10" />
        <line x1="12" y1="7" x2="12" y2="13" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Profile Assessment",
    description:
      "Our experts evaluate your academic records, test scores, extracurriculars, and work experience to identify the strongest university matches.",
    image:
      "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Profile assessment evaluation",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#d7be59"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "University Selection",
    description:
      "We curate a personalized shortlist of universities and programs aligned with your profile, goals, and budget across our partner institutions.",
    image:
      "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "University campus selection",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#d7be59"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c0 1.1 2.7 3 6 3s6-1.9 6-3v-5" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Application & Documentation",
    description:
      "Our team handles SOP drafting, LOR guidance, application form filling, transcript evaluation, and submission to all selected universities.",
    image:
      "https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Application documentation process",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#d7be59"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Visa Processing",
    description:
      "From financial documentation to interview preparation, we guide you through the complete visa application process with a near-perfect approval rate.",
    image:
      "https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Visa processing and preparation",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#d7be59"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <circle cx="8" cy="12" r="2.5" />
        <line x1="14" y1="9" x2="20" y2="9" />
        <line x1="14" y1="12" x2="20" y2="12" />
        <line x1="14" y1="15" x2="18" y2="15" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Pre-Departure & Arrival",
    description:
      "We prepare you with accommodation guidance, travel planning, airport pickup coordination, and cultural orientation for a smooth transition.",
    image:
      "https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Pre-departure travel preparation",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#d7be59"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z" />
      </svg>
    ),
  },
];

export default function ProcessSteps() {
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

      {/* Decorative background glow */}
      <div
        className="absolute left-0 top-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(215,190,89,0.02) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />
      <div
        className="absolute right-0 top-2/3 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(215,190,89,0.015) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="section-container">
        {/* Section header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-20"
        >
          <motion.div variants={fadeInUp} className="mb-3">
            <ShinyText
              text="Step by Step"
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
            Your Path to{" "}
            <span className="text-gradient-gold">Global Education</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "#999" }}
          >
            A proven six-step process that transforms your study-abroad dream
            into reality &mdash; with expert guidance at every milestone.
          </motion.p>
        </motion.div>

        {/* Steps — alternating layout with vertical connecting line */}
        <div
          className="relative max-w-6xl mx-auto"
          style={{ paddingBottom: 20 }}
        >
          {/* Vertical connecting line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-px"
            style={{
              top: 0,
              bottom: 0,
              background:
                "linear-gradient(180deg, transparent 0%, #d7be59 10%, rgba(215,190,89,0.4) 50%, #d7be59 90%, transparent 100%)",
              transformOrigin: "top center",
            }}
          />

          <div className="space-y-24 lg:space-y-32">
            {steps.map((step, i) => {
              const isOdd = i % 2 === 0; // odd steps (1,3,5) => index 0,2,4 => image left
              const imageVariants = isOdd ? fadeInLeft : fadeInRight;
              const contentVariants = isOdd ? fadeInRight : fadeInLeft;

              return (
                <div key={i} className="relative">
                  {/* Center dot on the vertical line */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={viewportOnce}
                    transition={{
                      duration: 0.5,
                      delay: 0.2,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 items-center justify-center"
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: "50%",
                      background:
                        "radial-gradient(circle, #181818 40%, #0a0a0a 100%)",
                      border: "2px solid rgba(215,190,89,0.4)",
                      boxShadow:
                        "0 0 20px rgba(215,190,89,0.15), inset 0 0 12px rgba(215,190,89,0.05)",
                    }}
                  >
                    {step.icon}
                  </motion.div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
                    {/* Image side */}
                    <motion.div
                      variants={imageVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={viewportOnce}
                      className={
                        isOdd
                          ? "order-1"
                          : "order-1 lg:order-2"
                      }
                    >
                      <div className="relative">
                        <div className="relative z-[1]">
                          <BorderGlow
                            backgroundColor="#0a0a0a"
                            borderRadius={30}
                            glowColor="45 70 60"
                            colors={["#d7be59", "#e5d285", "#b89e3a"]}
                            edgeSensitivity={3}
                            glowRadius={25}
                            glowIntensity={3}
                            coneSpread={30}
                          >
                            <div
                              className="relative overflow-hidden"
                              style={{ borderRadius: 30 }}
                            >
                              <div className="relative h-[280px] sm:h-[340px]">
                                <Image
                                  src={step.image}
                                  alt={step.alt}
                                  fill
                                  className="object-cover"
                                  sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                                <div
                                  className="absolute inset-0"
                                  style={{
                                    background:
                                      "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)",
                                  }}
                                />
                              </div>
                            </div>
                          </BorderGlow>
                        </div>
                      </div>
                    </motion.div>

                    {/* Content side */}
                    <motion.div
                      variants={contentVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={viewportOnce}
                      className={
                        isOdd
                          ? "order-2"
                          : "order-2 lg:order-1"
                      }
                    >
                      <div className={`relative space-y-5 ${isOdd ? "lg:pl-20" : "lg:pl-20 lg:pr-16"}`}>
                        {/* Watermark number behind content */}
                        <span
                          className="absolute top-0 select-none pointer-events-none font-bold font-mono"
                          style={{
                            fontSize: 140,
                            lineHeight: 1,
                            color: "rgba(215,190,89,0.04)",
                            right: isOdd ? 0 : undefined,
                            left: isOdd ? undefined : 0,
                            zIndex: 0,
                          }}
                        >
                          {step.number}
                        </span>
                        {/* Step number + icon row (mobile) */}
                        <div
                          className="flex items-center gap-4"
                          style={{ marginBottom: 4 }}
                        >
                          {/* Icon circle (visible on mobile, hidden on lg where it's on the line) */}
                          <div
                            className="flex lg:hidden items-center justify-center shrink-0"
                            style={{
                              width: 48,
                              height: 48,
                              borderRadius: "50%",
                              background:
                                "radial-gradient(circle, #181818 40%, #0a0a0a 100%)",
                              border: "2px solid rgba(215,190,89,0.4)",
                              boxShadow:
                                "0 0 16px rgba(215,190,89,0.1)",
                            }}
                          >
                            {step.icon}
                          </div>
                          <span
                            className="text-sm font-semibold tracking-widest uppercase font-mono"
                            style={{ color: "#d7be59" }}
                          >
                            Step {step.number}
                          </span>
                        </div>

                        {/* Title */}
                        <h3
                          className="text-2xl sm:text-3xl font-bold"
                          style={{ color: "#eeeeee" }}
                        >
                          {step.title}
                        </h3>

                        {/* Description */}
                        <p
                          className="text-base leading-relaxed"
                          style={{ color: "#999" }}
                        >
                          {step.description}
                        </p>

                        {/* Decorative accent line */}
                        <div
                          className="w-16 h-0.5 rounded-full"
                          style={{
                            background:
                              "linear-gradient(90deg, #d7be59, rgba(215,190,89,0.2))",
                          }}
                        />
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

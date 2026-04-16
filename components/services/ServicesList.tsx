"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  viewportOnce,
  lineDraw,
} from "@/lib/animations";
import BorderGlow from "@/components/BorderGlow";
import ShinyText from "@/components/ShinyText";

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="8.5" cy="7" r="4" />
        <path d="M20 8v6" />
        <path d="M23 11h-6" />
      </svg>
    ),
    title: "Profile Assessment & Counseling",
    description:
      "Our journey begins with an in-depth evaluation of your academic background, career goals, financial capacity, and personal preferences. We create a personalized academic roadmap that aligns your aspirations with realistic opportunities.",
    highlights: [
      "Academic & career profiling",
      "Country & university shortlisting",
      "Budget analysis & planning",
    ],
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    title: "University Selection & Admission",
    description:
      "Leveraging our direct partnerships with 120+ universities, we strategically match you with institutions that offer the best fit. We handle the entire application process — from submissions to follow-ups.",
    highlights: [
      "120+ partner universities",
      "Direct admission channels",
      "Application tracking & follow-up",
    ],
    image: "https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    title: "Documentation & SOP Writing",
    description:
      "Our expert writers craft compelling Statements of Purpose, Letters of Recommendation, and resumes tailored to specific university and program requirements.",
    highlights: [
      "Custom SOPs & LORs",
      "Resume & CV formatting",
      "Document verification",
    ],
    image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "Visa Processing & Support",
    description:
      "Our visa experts guide you through the complete application process — from financial documentation to embassy interview preparation — for the highest probability of approval.",
    highlights: [
      "95% visa success rate",
      "Financial proof guidance",
      "Interview preparation",
    ],
    image: "https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Test Preparation Guidance",
    description:
      "Whether you need IELTS, TOEFL, PTE, GRE, or GMAT preparation, we connect you with top-rated coaching resources and provide strategic study plans.",
    highlights: [
      "IELTS / TOEFL / PTE coaching",
      "GRE / GMAT strategies",
      "Score-target planning",
    ],
    image: "https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
    title: "Financial Planning & Scholarships",
    description:
      "We help you plan finances, identify scholarship opportunities, understand loan options, and prepare financial documentation. Complete transparency from day one.",
    highlights: [
      "Scholarship identification",
      "Education loan guidance",
      "Financial documentation",
    ],
    image: "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: "Pre-Departure & Arrival Support",
    description:
      "Comprehensive pre-departure briefings covering accommodation, banking, insurance, local transportation, cultural orientation, and airport pick-up coordination.",
    highlights: [
      "Pre-departure orientation",
      "Accommodation assistance",
      "Airport pick-up coordination",
    ],
    image: "https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Career Guidance & Mentoring",
    description:
      "Career counseling to help you choose the right program aligned with global job market trends, including industry insights and long-term career planning.",
    highlights: [
      "Industry-aligned guidance",
      "International career planning",
      "Mentor network access",
    ],
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
];

export default function ServicesList() {
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

      {/* Decorative glows */}
      <div
        className="absolute left-0 top-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(215,190,89,0.02) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />
      <div
        className="absolute right-0 bottom-1/3 w-[400px] h-[400px] rounded-full pointer-events-none"
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
              text="Our Services"
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
            Everything You Need to{" "}
            <span className="text-gradient-gold">Study Abroad</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "#999" }}
          >
            We offer a complete suite of services designed to eliminate every
            obstacle between you and your dream university.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <BorderGlow
                backgroundColor="#0a0a0a"
                borderRadius={30}
                glowColor="45 70 60"
                colors={["#d7be59", "#e5d285", "#b89e3a"]}
                edgeSensitivity={3}
                glowRadius={35}
                glowIntensity={3}
                coneSpread={30}
                className="h-full"
              >
                <div
                  className="group relative h-full flex flex-col overflow-hidden"
                  style={{ borderRadius: 30 }}
                >
                  {/* Image thumbnail at top of card */}
                  <div className="relative h-44 w-full overflow-hidden flex-shrink-0">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-7 sm:p-8 flex flex-col">
                    {/* Icon + Title row */}
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                        style={{
                          background: "rgba(215,190,89,0.08)",
                          border: "1px solid rgba(215,190,89,0.15)",
                          color: "#d7be59",
                        }}
                      >
                        {service.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3
                          className="text-lg sm:text-xl font-bold group-hover:text-[#d7be59] transition-colors duration-300"
                          style={{ color: "#eeeeee" }}
                        >
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p
                      className="text-sm sm:text-base leading-relaxed mb-5"
                      style={{ color: "#999" }}
                    >
                      {service.description}
                    </p>

                    {/* Highlights */}
                    <div className="mt-auto flex flex-wrap gap-2">
                      {service.highlights.map((hl, j) => (
                        <span
                          key={j}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
                          style={{
                            background: "rgba(215,190,89,0.06)",
                            border: "1px solid rgba(215,190,89,0.12)",
                            color: "#d7be59",
                          }}
                        >
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          {hl}
                        </span>
                      ))}
                    </div>

                    {/* Hover accent */}
                    <div
                      className="absolute left-0 top-[11rem] bottom-8 w-0.5 rounded-full opacity-0 group-hover:opacity-40 transition-all duration-500"
                      style={{ background: "#d7be59" }}
                    />
                  </div>
                </div>
              </BorderGlow>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

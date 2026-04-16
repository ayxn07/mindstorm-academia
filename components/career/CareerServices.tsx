"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";
import ShinyText from "@/components/ShinyText";
import BorderGlow from "@/components/BorderGlow";

const services = [
  {
    title: "Psychometric Assessment",
    description:
      "Comprehensive aptitude and personality tests to identify your strengths, interests, and ideal career paths in the global market.",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24 4C18.48 4 14 8.48 14 14c0 3.52 1.84 6.62 4.6 8.38C15.08 23.96 13 27.08 13 30.6V34h22v-3.4c0-3.52-2.08-6.64-5.6-8.22C32.16 20.62 34 17.52 34 14c0-5.52-4.48-10-10-10z"
          stroke="#d7be59"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 18c0-2.21 1.79-4 4-4s4 1.79 4 4"
          stroke="#d7be59"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle cx="20" cy="13" r="1.5" fill="#d7be59" />
        <circle cx="28" cy="13" r="1.5" fill="#d7be59" />
        <path
          d="M18 38h12M20 42h8"
          stroke="#d7be59"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M24 34v4"
          stroke="#d7be59"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Course & Major Selection",
    description:
      "Expert guidance on choosing the right academic program aligned with your career goals, market demand, and personal interests.",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 10a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V10z"
          stroke="#d7be59"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M32 14h4a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2H14"
          stroke="#d7be59"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 14h12M14 20h12M14 26h8"
          stroke="#d7be59"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M14 32l3 3 5-6"
          stroke="#d7be59"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Industry Insights",
    description:
      "Access real-time data on job market trends, salary benchmarks, and in-demand skills across Canada, Australia, Europe, Russia, and UAE.",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 40h36"
          stroke="#d7be59"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M10 40V28"
          stroke="#d7be59"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <rect
          x="8"
          y="28"
          width="5"
          height="12"
          rx="1"
          stroke="#d7be59"
          strokeWidth="1.8"
        />
        <rect
          x="16"
          y="22"
          width="5"
          height="18"
          rx="1"
          stroke="#d7be59"
          strokeWidth="1.8"
        />
        <rect
          x="24"
          y="16"
          width="5"
          height="24"
          rx="1"
          stroke="#d7be59"
          strokeWidth="1.8"
        />
        <rect
          x="32"
          y="10"
          width="5"
          height="30"
          rx="1"
          stroke="#d7be59"
          strokeWidth="1.8"
        />
        <path
          d="M8 24l8-6 8-4 10-6"
          stroke="#d7be59"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="2 3"
        />
        <circle cx="38" cy="8" r="2.5" fill="#d7be59" opacity="0.6" />
      </svg>
    ),
  },
  {
    title: "Resume & Portfolio Building",
    description:
      "Professional resume crafting, portfolio development, and LinkedIn optimization tailored for international job markets.",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="8"
          y="6"
          width="24"
          height="32"
          rx="2"
          stroke="#d7be59"
          strokeWidth="1.8"
        />
        <path
          d="M14 14h12M14 20h12M14 26h8"
          stroke="#d7be59"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <rect
          x="14"
          y="30"
          width="12"
          height="4"
          rx="1"
          stroke="#d7be59"
          strokeWidth="1.5"
          opacity="0.5"
        />
        <path
          d="M36 14l4-4v24a2 2 0 0 1-2 2h-6"
          stroke="#d7be59"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M36 14h-4v-4"
          stroke="#d7be59"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="20" cy="42" r="2" fill="#d7be59" opacity="0.4" />
      </svg>
    ),
  },
  {
    title: "Interview Preparation",
    description:
      "Mock interviews, communication coaching, and cultural etiquette training to help you ace university and scholarship interviews.",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24 8c-1.5 0-3 .5-3 2v14c0 1.5 1.5 2 3 2s3-.5 3-2V10c0-1.5-1.5-2-3-2z"
          stroke="#d7be59"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 20v4a8 8 0 0 0 16 0v-4"
          stroke="#d7be59"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M24 32v4M20 36h8"
          stroke="#d7be59"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M10 12a2 2 0 0 1 2-2h4"
          stroke="#d7be59"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.4"
        />
        <path
          d="M38 12a2 2 0 0 0-2-2h-4"
          stroke="#d7be59"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.4"
        />
        <circle cx="12" cy="40" r="1.5" fill="#d7be59" opacity="0.3" />
        <circle cx="36" cy="40" r="1.5" fill="#d7be59" opacity="0.3" />
        <circle cx="24" cy="42" r="1.5" fill="#d7be59" opacity="0.3" />
      </svg>
    ),
  },
  {
    title: "Post-Graduation Planning",
    description:
      "Strategic career roadmap development including work permit guidance, job placement support, and immigration pathway planning.",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="24"
          cy="24"
          r="16"
          stroke="#d7be59"
          strokeWidth="1.8"
        />
        <path
          d="M24 12v12l6 6"
          stroke="#d7be59"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.3"
        />
        <path
          d="M24 8l2-3M24 8l-2-3"
          stroke="#d7be59"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M24 24l-8-4"
          stroke="#d7be59"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M24 24l4-10"
          stroke="#d7be59"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="24" cy="24" r="2.5" fill="#d7be59" />
        <path
          d="M36 8l4 2M12 8l-4 2"
          stroke="#d7be59"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.4"
        />
        <path
          d="M40 24h2M6 24h2M24 40v2"
          stroke="#d7be59"
          strokeWidth="1.8"
          strokeLinecap="round"
          opacity="0.5"
        />
      </svg>
    ),
  },
];

export default function CareerServices() {
  return (
    <section className="relative overflow-hidden">
      {/* Ambient decorative glows */}
      <div
        className="absolute left-0 top-1/4 w-[500px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(215,190,89,0.02) 0%, transparent 60%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute right-0 bottom-1/4 w-[400px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(215,190,89,0.015) 0%, transparent 60%)",
          filter: "blur(60px)",
        }}
      />

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
              text="What We Offer"
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
            Our Career{" "}
            <span className="text-gradient-gold">Guidance Services</span>
          </motion.h2>
        </motion.div>

        {/* Services Grid — 2 columns, 3 rows */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {services.map((service, i) => (
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
              >
                <div
                  style={{
                    borderRadius: 30,
                    padding: "36px 32px",
                    minHeight: "240px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    position: "relative",
                  }}
                >
                  {/* Icon container */}
                  <div
                    style={{
                      width: 64,
                      height: 64,
                      borderRadius: 16,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background:
                        "linear-gradient(135deg, rgba(215,190,89,0.12) 0%, rgba(215,190,89,0.04) 100%)",
                      border: "1px solid rgba(215,190,89,0.15)",
                      flexShrink: 0,
                    }}
                  >
                    {service.icon}
                  </div>

                  {/* Gold accent line */}
                  <div
                    style={{
                      width: 40,
                      height: 2,
                      borderRadius: 1,
                      background:
                        "linear-gradient(90deg, #d7be59, rgba(215,190,89,0.2))",
                    }}
                  />

                  {/* Title */}
                  <h3
                    style={{
                      color: "#ffffff",
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      lineHeight: 1.3,
                      margin: 0,
                    }}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      color: "#999999",
                      fontSize: "0.9rem",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {service.description}
                  </p>
                </div>
              </BorderGlow>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

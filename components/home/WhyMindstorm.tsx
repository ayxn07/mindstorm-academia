"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";
import BorderGlow from "@/components/BorderGlow";
import ShinyText from "@/components/ShinyText";

const reasons = [
  {
    number: "01",
    title: "Established International Network",
    description:
      "We have built strong partnerships with leading universities across 5+ countries, giving your application an edge with direct institutional connections.",
  },
  {
    number: "02",
    title: "Structured Application Workflow",
    description:
      "Our proven step-by-step process covers every stage — from profile assessment to visa approval — ensuring nothing falls through the cracks.",
  },
  {
    number: "03",
    title: "Dedicated Student Advisors",
    description:
      "Every student is assigned a dedicated counselor who understands their unique profile, providing personalized guidance throughout the entire journey.",
  },
  {
    number: "04",
    title: "Transparent & Professional",
    description:
      "No hidden fees, no false promises. We operate with complete transparency, keeping you informed at every step with honest assessments and clear timelines.",
  },
  {
    number: "05",
    title: "Multi-Country Expertise",
    description:
      "Whether it's Canada, Australia, Europe, Russia, or UAE — our specialized teams understand the unique requirements and opportunities each country offers.",
  },
];

export default function WhyMindstorm() {
  return (
    <section className="relative overflow-hidden">
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
              text="Why Choose Us"
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
            Why <span className="text-gradient-gold">Mindstorm Global</span>
          </motion.h2>
        </motion.div>

        <div className="space-y-5 max-w-4xl mx-auto">
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              variants={i % 2 === 0 ? fadeInLeft : fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <BorderGlow
                backgroundColor="#0a0a0a"
                borderRadius={30}
                glowColor="45 70 60"
                colors={["#d7be59", "#e5d285", "#b89e3a"]}
                edgeSensitivity={3}
                glowRadius={35}
                glowIntensity={3}
                coneSpread={30}
              >
                <div className="group relative flex items-start gap-6 sm:gap-8 p-6 sm:p-8" style={{ borderRadius: 30 }}>
                  {/* Number */}
                  <span
                    className="flex-shrink-0 text-4xl sm:text-5xl font-bold font-mono opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                    style={{ color: "#d7be59" }}
                  >
                    {item.number}
                  </span>
                  {/* Content */}
                  <div>
                    <h3
                      className="text-xl font-semibold mb-2 group-hover:text-[#d7be59] transition-colors duration-300"
                      style={{ color: "#eeeeee" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base leading-relaxed" style={{ color: "#999" }}>
                      {item.description}
                    </p>
                  </div>
                  {/* Left accent bar */}
                  <div
                    className="absolute left-0 top-6 bottom-6 w-0.5 rounded-full opacity-0 group-hover:opacity-40 transition-all duration-500"
                    style={{ background: "#d7be59" }}
                  />
                </div>
              </BorderGlow>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

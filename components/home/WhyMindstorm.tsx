"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";
import TiltCard from "@/components/ui/TiltCard";

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
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[var(--color-primary)] opacity-[0.02] blur-[120px]" />

      <div className="section-container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-16"
        >
          <motion.p
            variants={fadeInUp}
            className="text-[var(--color-primary)] text-sm font-medium tracking-widest uppercase mb-3"
          >
            Why Choose Us
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-text)] mb-5"
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
              <TiltCard tiltIntensity={6} glareEnabled={true}>
                <div className="group relative flex items-start gap-6 sm:gap-8 p-6 sm:p-8 rounded-2xl card-3d">
                  {/* Number */}
                  <span className="flex-shrink-0 text-4xl sm:text-5xl font-bold font-mono text-[var(--color-primary)] opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                    {item.number}
                  </span>
                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--color-text)] mb-2 group-hover:text-[var(--color-primary)] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  {/* Left accent bar */}
                  <div className="absolute left-0 top-6 bottom-6 w-0.5 rounded-full bg-[var(--color-primary)] opacity-0 group-hover:opacity-40 transition-all duration-500" />
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

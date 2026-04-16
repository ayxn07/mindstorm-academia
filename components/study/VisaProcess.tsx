"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";
import BorderGlow from "@/components/BorderGlow";
import ShinyText from "@/components/ShinyText";
import type { CountryData } from "@/data/countries";

interface Props {
  country: CountryData;
}

export default function VisaProcess({ country }: Props) {
  const { visaProcess } = country;

  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute right-0 top-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(215,190,89,0.02) 0%, transparent 60%)",
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
              text="Visa Guide"
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
            Visa{" "}
            <span className="text-gradient-gold">Process</span>
          </motion.h2>
        </motion.div>

        {/* Visa type + processing time info bar */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-4xl mx-auto mb-10"
        >
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
            <div className="group relative overflow-hidden" style={{ borderRadius: 30 }}>
              <div className="absolute inset-0">
                <Image
                  src={country.galleryImages[0]}
                  alt="Visa process"
                  fill
                  className="object-cover opacity-10 group-hover:opacity-15 transition-opacity duration-700"
                  sizes="800px"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]/70" />
              </div>
              <div className="relative p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(215,190,89,0.1)",
                      border: "1px solid rgba(215,190,89,0.2)",
                      color: "#d7be59",
                    }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs tracking-wider uppercase block" style={{ color: "#888" }}>
                      Visa Type
                    </span>
                    <span className="text-base sm:text-lg font-bold" style={{ color: "#eeeeee" }}>
                      {visaProcess.visaType}
                    </span>
                  </div>
                </div>
                <div
                  className="h-8 w-px hidden sm:block"
                  style={{ background: "rgba(215,190,89,0.15)" }}
                />
                <div className="text-center sm:text-right">
                  <span className="text-xs tracking-wider uppercase block" style={{ color: "#888" }}>
                    Processing Time
                  </span>
                  <span className="text-lg sm:text-xl font-bold" style={{ color: "#d7be59" }}>
                    {visaProcess.processingTime}
                  </span>
                </div>
              </div>
            </div>
          </BorderGlow>
        </motion.div>

        {/* Steps grid - 2 columns on desktop */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5">
          {visaProcess.steps.map((step, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
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
                glowRadius={25}
                glowIntensity={3}
                coneSpread={30}
                className="h-full"
              >
                <div
                  className="group h-full p-6 sm:p-7 flex flex-col"
                  style={{ borderRadius: 30 }}
                >
                  {/* Step number with line accent */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                      style={{
                        background: "linear-gradient(135deg, rgba(215,190,89,0.15), rgba(215,190,89,0.05))",
                        border: "1px solid rgba(215,190,89,0.25)",
                        color: "#d7be59",
                      }}
                    >
                      {step.step}
                    </div>
                    <div
                      className="flex-1 h-px"
                      style={{ background: "linear-gradient(90deg, rgba(215,190,89,0.2), transparent)" }}
                    />
                  </div>
                  <h3
                    className="text-base sm:text-lg font-bold mb-2 group-hover:text-[#d7be59] transition-colors duration-300"
                    style={{ color: "#eeeeee" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#999" }}
                  >
                    {step.description}
                  </p>
                </div>
              </BorderGlow>
            </motion.div>
          ))}
        </div>

        {/* Work rights note */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-4xl mx-auto mt-8"
        >
          <div
            className="p-6 rounded-2xl flex items-start gap-4"
            style={{
              background: "rgba(215,190,89,0.04)",
              border: "1px solid rgba(215,190,89,0.12)",
            }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{
                background: "rgba(215,190,89,0.1)",
                border: "1px solid rgba(215,190,89,0.15)",
                color: "#d7be59",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
            </div>
            <div>
              <span
                className="text-xs tracking-widest uppercase block mb-1"
                style={{ color: "rgba(215,190,89,0.6)" }}
              >
                Work Rights
              </span>
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: "#ccc" }}
              >
                {country.workRights}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

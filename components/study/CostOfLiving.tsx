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

const costIcons = [
  <svg key="0" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  <svg key="1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>,
  <svg key="2" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,
  <svg key="3" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
  <svg key="4" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>,
  <svg key="5" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>,
];

export default function CostOfLiving({ country }: Props) {
  const { costOfLiving } = country;

  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] pointer-events-none"
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
              text="Financial Planning"
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
            Cost of{" "}
            <span className="text-gradient-gold">Living & Tuition</span>
          </motion.h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Tuition hero card with image background */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mb-8"
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
              <div className="group relative overflow-hidden" style={{ borderRadius: 30 }}>
                <div className="absolute inset-0">
                  <Image
                    src={country.overviewImage}
                    alt="Tuition"
                    fill
                    className="object-cover opacity-15 group-hover:opacity-20 transition-opacity duration-700"
                    sizes="1000px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-[#0a0a0a]/60" />
                </div>
                <div className="relative p-8 sm:p-10 flex flex-col sm:flex-row items-center gap-8">
                  <div className="text-center sm:text-left flex-1">
                    <span
                      className="text-xs tracking-widest uppercase block mb-2"
                      style={{ color: "rgba(215,190,89,0.6)" }}
                    >
                      Annual Tuition Range
                    </span>
                    <div
                      className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3"
                      style={{ color: "#d7be59" }}
                    >
                      {costOfLiving.tuitionRange}
                    </div>
                    <p
                      className="text-sm max-w-lg leading-relaxed"
                      style={{ color: "#999" }}
                    >
                      {costOfLiving.scholarshipNote}
                    </p>
                  </div>
                  {/* Decorative coin/money icon */}
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(215,190,89,0.08)",
                      border: "1px solid rgba(215,190,89,0.15)",
                    }}
                  >
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#d7be59" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="1" x2="12" y2="23" />
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </div>
                </div>
              </div>
            </BorderGlow>
          </motion.div>

          {/* Living costs grid - visual cards with icons */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {costOfLiving.items.map((item, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <BorderGlow
                  backgroundColor="#0a0a0a"
                  borderRadius={24}
                  glowColor="45 70 60"
                  colors={["#d7be59", "#e5d285", "#b89e3a"]}
                  edgeSensitivity={3}
                  glowRadius={20}
                  glowIntensity={2}
                  coneSpread={30}
                  className="h-full"
                >
                  <div className="group h-full p-5 flex items-start gap-4" style={{ borderRadius: 24 }}>
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                      style={{
                        background: "rgba(215,190,89,0.08)",
                        border: "1px solid rgba(215,190,89,0.12)",
                        color: "#d7be59",
                      }}
                    >
                      {costIcons[i % costIcons.length]}
                    </div>
                    <div>
                      <div
                        className="text-xs tracking-wider uppercase mb-1.5"
                        style={{ color: "#888" }}
                      >
                        {item.category}
                      </div>
                      <div
                        className="text-base font-semibold group-hover:text-[#d7be59] transition-colors duration-300"
                        style={{ color: "#eeeeee" }}
                      >
                        {item.range}
                      </div>
                    </div>
                  </div>
                </BorderGlow>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

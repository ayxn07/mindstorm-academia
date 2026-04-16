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

/* One image per university - uses country gallery + overview images as a pool */
function getUniImage(country: CountryData, index: number): string {
  const pool = [country.overviewImage, ...country.galleryImages];
  return pool[index % pool.length];
}

export default function TopUniversities({ country }: Props) {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(215,190,89,0.02) 0%, transparent 60%)",
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
              text="Top Institutions"
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
            Partner{" "}
            <span className="text-gradient-gold">Universities</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "#999" }}
          >
            We work directly with leading institutions in{" "}
            {country.name} to give you the best chances of
            admission.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {country.universities.map((uni, i) => (
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
                  className="group relative h-full flex flex-col overflow-hidden"
                  style={{ borderRadius: 30 }}
                >
                  {/* Image header */}
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={getUniImage(country, i)}
                      alt={uni.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
                    {/* Ranking badge overlaid on image */}
                    <div
                      className="absolute top-4 left-5 inline-flex px-3 py-1.5 rounded-full text-[10px] font-medium tracking-wider uppercase backdrop-blur-md"
                      style={{
                        background: "rgba(215,190,89,0.25)",
                        border: "1px solid rgba(215,190,89,0.35)",
                        color: "#d7be59",
                      }}
                    >
                      {uni.ranking}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3
                      className="text-lg font-bold mb-1 group-hover:text-[#d7be59] transition-colors duration-300"
                      style={{ color: "#eeeeee" }}
                    >
                      {uni.name}
                    </h3>

                    <p
                      className="text-xs mb-4 flex items-center gap-1.5"
                      style={{ color: "#888" }}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      {uni.location}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {uni.programs.map((prog, j) => (
                        <span
                          key={j}
                          className="text-[10px] px-2 py-1 rounded-full"
                          style={{
                            background: "rgba(255,255,255,0.05)",
                            color: "#bbb",
                            border: "1px solid rgba(255,255,255,0.08)",
                          }}
                        >
                          {prog}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </BorderGlow>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

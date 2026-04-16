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
import CountUp from "@/components/CountUp";
import type { CountryData } from "@/data/countries";

interface Props {
  country: CountryData;
}

export default function CountryOverview({ country }: Props) {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute left-0 top-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(215,190,89,0.02) 0%, transparent 60%)",
          filter: "blur(80px)",
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
              text="Overview"
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
            Why{" "}
            <span className="text-gradient-gold">{country.name}</span>?
          </motion.h2>
        </motion.div>

        {/* Split layout: Image mosaic + Text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto mb-16 items-start">
          {/* Image mosaic */}
          <motion.div
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
            >
              <div className="p-3" style={{ borderRadius: 30 }}>
                <div className="grid grid-cols-2 gap-3">
                  {/* Large image spanning full height */}
                  <div className="relative rounded-[22px] overflow-hidden" style={{ height: 340 }}>
                    <Image
                      src={country.overviewImage}
                      alt={`${country.name} overview`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  {/* Two stacked smaller images */}
                  <div className="flex flex-col gap-3">
                    <div className="relative rounded-[22px] overflow-hidden" style={{ height: 163 }}>
                      <Image
                        src={country.galleryImages[0]}
                        alt={`${country.name} campus`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>
                    <div className="relative rounded-[22px] overflow-hidden" style={{ height: 163 }}>
                      <Image
                        src={country.galleryImages[1]}
                        alt={`${country.name} city`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>
                  </div>
                </div>
              </div>
            </BorderGlow>
          </motion.div>

          {/* Text content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg leading-relaxed mb-8"
              style={{ color: "#999" }}
            >
              {country.overview.description}
            </motion.p>

            {/* Highlights */}
            <div className="space-y-3">
              {country.overview.highlights.map((highlight, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="flex items-start gap-3 p-4 rounded-2xl"
                  style={{
                    background: "rgba(215,190,89,0.04)",
                    border: "1px solid rgba(215,190,89,0.1)",
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="flex-shrink-0 mt-0.5"
                  >
                    <path
                      d="M16.667 5L7.5 14.167 3.333 10"
                      stroke="#d7be59"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span
                    className="text-sm leading-relaxed"
                    style={{ color: "#ccc" }}
                  >
                    {highlight}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-4xl mx-auto"
        >
          {country.stats.map((stat, i) => (
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
                  className="p-6 text-center"
                  style={{ borderRadius: 30 }}
                >
                  <div
                    className="text-2xl sm:text-3xl font-bold mb-1"
                    style={{ color: "#d7be59" }}
                  >
                    {/^\d/.test(stat.value) ? (
                      <CountUp
                        from={0}
                        to={parseInt(stat.value.replace(/[^0-9]/g, ""))}
                        duration={2.5}
                        delay={i * 0.15}
                        separator=","
                      />
                    ) : (
                      stat.value
                    )}
                    {stat.value.includes("+") && "+"}
                    {stat.value.includes("%") && "%"}
                  </div>
                  <div
                    className="text-xs tracking-wider uppercase"
                    style={{ color: "#999" }}
                  >
                    {stat.label}
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

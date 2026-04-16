"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  viewportOnce,
  buttonHover,
} from "@/lib/animations";
import ShinyText from "@/components/ShinyText";
import BorderGlow from "@/components/BorderGlow";
import type { CountryData } from "@/data/countries";

interface Props {
  country: CountryData;
}

export default function CountryCTA({ country }: Props) {
  return (
    <section className="relative overflow-hidden">
      <div className="section-container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative max-w-4xl mx-auto text-center"
        >
          {/* Glass container */}
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
          <div
            className="relative p-10 sm:p-14 overflow-hidden"
            style={{ borderRadius: 30 }}
          >
            {/* Glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(215,190,89,0.05) 0%, transparent 70%)",
              }}
            />

            <div className="relative z-10">
              <motion.div variants={fadeInUp} className="mb-3">
                <ShinyText
                  text="Get Started"
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
                Ready to Study in{" "}
                <span className="text-gradient-gold">
                  {country.name}
                </span>
                ?
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
                style={{ color: "#999" }}
              >
                Book a free consultation with our {country.name}{" "}
                specialist team and take the first step toward your
                international education journey.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <motion.div
                  variants={buttonHover}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold tracking-wide uppercase transition-all duration-300"
                    style={{
                      background:
                        "linear-gradient(135deg, #d7be59, #b89e3a)",
                      color: "#000",
                      boxShadow:
                        "0 4px 20px rgba(215,190,89,0.3)",
                    }}
                  >
                    Free Consultation
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </Link>
                </motion.div>

                <motion.div
                  variants={buttonHover}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold tracking-wide uppercase transition-all duration-300"
                    style={{
                      background: "transparent",
                      color: "#d7be59",
                      border: "1px solid rgba(215,190,89,0.3)",
                    }}
                  >
                    View All Services
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
          </BorderGlow>
        </motion.div>
      </div>
    </section>
  );
}

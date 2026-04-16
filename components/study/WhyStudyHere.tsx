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

const icons = [
  <svg key="0" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c0 1 4 3 6 3s6-2 6-3v-5" /></svg>,
  <svg key="1" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>,
  <svg key="2" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>,
  <svg key="3" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></svg>,
];

export default function WhyStudyHere({ country }: Props) {
  const items = country.whyStudy;

  return (
    <section className="relative overflow-hidden">
      <style>{`
        .wsh-bento {
          display: grid;
          gap: 16px;
          grid-template-columns: 1fr;
          grid-template-rows: auto;
        }
        @media (min-width: 768px) {
          .wsh-bento {
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: auto auto;
          }
          .wsh-bento .wsh-card-0 {
            grid-column: 1 / 3;
            grid-row: 1 / 3;
          }
          .wsh-bento .wsh-card-1 {
            grid-column: 3;
            grid-row: 1;
          }
          .wsh-bento .wsh-card-2 {
            grid-column: 3;
            grid-row: 2;
          }
        }
        .wsh-banner {
          display: grid;
          grid-template-columns: 1fr;
          margin-top: 16px;
        }
      `}</style>

      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] pointer-events-none"
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
              text="Key Advantages"
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
            Why Study in{" "}
            <span className="text-gradient-gold">{country.name}</span>
          </motion.h2>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Bento: card-0 spans 2 cols × 2 rows (with bg image), card-1 and card-2 stack on right */}
          <div className="wsh-bento">
            {/* Featured large card */}
            {items[0] && (
              <motion.div
                className="wsh-card-0"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
              >
                <BorderGlow
                  backgroundColor="#0a0a0a"
                  borderRadius={24}
                  glowColor="45 70 60"
                  colors={["#d7be59", "#e5d285", "#b89e3a"]}
                  edgeSensitivity={3}
                  glowRadius={25}
                  glowIntensity={3}
                  coneSpread={30}
                  className="h-full"
                >
                  <div
                    className="group relative h-full overflow-hidden"
                    style={{ borderRadius: 24, minHeight: 360 }}
                  >
                    <div className="absolute inset-0">
                      <Image
                        src={country.galleryImages[2]}
                        alt={items[0].title}
                        fill
                        className="object-cover opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700"
                        sizes="(max-width: 768px) 100vw, 66vw"
                      />
                      <div
                        className="absolute inset-0"
                        style={{ background: "linear-gradient(135deg, #0a0a0a 30%, rgba(10,10,10,0.55) 100%)" }}
                      />
                    </div>
                    <div className="relative p-8 sm:p-10 flex flex-col justify-center h-full">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                        style={{
                          background: "rgba(215,190,89,0.12)",
                          border: "1px solid rgba(215,190,89,0.2)",
                          color: "#d7be59",
                        }}
                      >
                        {icons[0]}
                      </div>
                      <h3
                        className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-[#d7be59] transition-colors duration-500"
                        style={{ color: "#eeeeee" }}
                      >
                        {items[0].title}
                      </h3>
                      <p
                        className="text-sm sm:text-base leading-relaxed max-w-lg"
                        style={{ color: "#999" }}
                      >
                        {items[0].description}
                      </p>
                    </div>
                  </div>
                </BorderGlow>
              </motion.div>
            )}

            {/* Right-side stacked cards */}
            {[1, 2].map((idx) =>
              items[idx] ? (
                <motion.div
                  key={idx}
                  className={`wsh-card-${idx}`}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                >
                  <BorderGlow
                    backgroundColor="#0a0a0a"
                    borderRadius={24}
                    glowColor="45 70 60"
                    colors={["#d7be59", "#e5d285", "#b89e3a"]}
                    edgeSensitivity={3}
                    glowRadius={25}
                    glowIntensity={3}
                    coneSpread={30}
                    className="h-full"
                  >
                    <div
                      className="group h-full p-6 sm:p-7 flex flex-col justify-center"
                      style={{ borderRadius: 24 }}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{
                            background: "rgba(215,190,89,0.1)",
                            border: "1px solid rgba(215,190,89,0.15)",
                            color: "#d7be59",
                          }}
                        >
                          {icons[idx]}
                        </div>
                        <div>
                          <h3
                            className="text-base sm:text-lg font-bold mb-1.5 group-hover:text-[#d7be59] transition-colors duration-500"
                            style={{ color: "#eeeeee" }}
                          >
                            {items[idx].title}
                          </h3>
                          <p
                            className="text-sm leading-relaxed"
                            style={{ color: "#999" }}
                          >
                            {items[idx].description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </BorderGlow>
                </motion.div>
              ) : null
            )}
          </div>

          {/* Full-width banner card */}
          {items[3] && (
            <div className="wsh-banner">
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
              >
                <BorderGlow
                  backgroundColor="#0a0a0a"
                  borderRadius={24}
                  glowColor="45 70 60"
                  colors={["#d7be59", "#e5d285", "#b89e3a"]}
                  edgeSensitivity={3}
                  glowRadius={25}
                  glowIntensity={3}
                  coneSpread={30}
                >
                  <div
                    className="group relative overflow-hidden"
                    style={{ borderRadius: 24 }}
                  >
                    <div className="absolute inset-0">
                      <Image
                        src={country.galleryImages[3]}
                        alt={items[3].title}
                        fill
                        className="object-cover opacity-15 group-hover:opacity-25 transition-opacity duration-700"
                        sizes="100vw"
                      />
                      <div
                        className="absolute inset-0"
                        style={{ background: "linear-gradient(90deg, #0a0a0a 40%, rgba(10,10,10,0.5) 100%)" }}
                      />
                    </div>
                    <div className="relative p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                        style={{
                          background: "rgba(215,190,89,0.12)",
                          border: "1px solid rgba(215,190,89,0.2)",
                          color: "#d7be59",
                        }}
                      >
                        {icons[3]}
                      </div>
                      <div>
                        <h3
                          className="text-lg sm:text-xl font-bold mb-2 group-hover:text-[#d7be59] transition-colors duration-500"
                          style={{ color: "#eeeeee" }}
                        >
                          {items[3].title}
                        </h3>
                        <p
                          className="text-sm sm:text-base leading-relaxed max-w-2xl"
                          style={{ color: "#999" }}
                        >
                          {items[3].description}
                        </p>
                      </div>
                    </div>
                  </div>
                </BorderGlow>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

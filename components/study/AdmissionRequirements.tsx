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

const reqIcons = [
  <svg key="0" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
  <svg key="1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
  <svg key="2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>,
  <svg key="3" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  <svg key="4" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>,
  <svg key="5" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
];

function StepBadge({ step }: { step: number }) {
  return (
    <span
      className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full"
      style={{
        background: "rgba(215,190,89,0.08)",
        border: "1px solid rgba(215,190,89,0.15)",
        color: "#d7be59",
      }}
    >
      Step {step}
    </span>
  );
}

function IconBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
      style={{
        background: "rgba(215,190,89,0.1)",
        border: "1px solid rgba(215,190,89,0.2)",
        color: "#d7be59",
      }}
    >
      {children}
    </div>
  );
}

export default function AdmissionRequirements({ country }: Props) {
  const reqs = country.admissionRequirements;

  return (
    <section className="relative overflow-hidden">
      <style>{`
        .adm-bento {
          display: grid;
          gap: 16px;
          grid-template-columns: 1fr;
        }
        @media (min-width: 640px) {
          .adm-bento {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .adm-bento {
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: auto auto;
          }
          .adm-bento .adm-card-0 {
            grid-row: 1 / 3;
          }
        }
      `}</style>

      <div
        className="absolute right-0 bottom-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(215,190,89,0.015) 0%, transparent 60%)",
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
              text="Requirements"
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
            Admission{" "}
            <span className="text-gradient-gold">Requirements</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "#999" }}
          >
            What you need to apply for universities in {country.name}.
          </motion.p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* 3-col bento: card-0 spans 2 rows with bg image, cards 1-4 fill 2×2 */}
          <div className="adm-bento">
            {/* Card 0: tall with background image */}
            {reqs[0] && (
              <motion.div
                className="adm-card-0"
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
                    style={{ borderRadius: 24, minHeight: 320 }}
                  >
                    <div className="absolute inset-0">
                      <Image
                        src={country.galleryImages[0]}
                        alt={reqs[0].title}
                        fill
                        className="object-cover opacity-15 group-hover:opacity-25 transition-opacity duration-700"
                        sizes="(max-width: 1024px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-[#0a0a0a]/40" />
                    </div>
                    <div className="relative p-7 flex flex-col justify-center h-full">
                      <div className="flex items-center gap-3 mb-4">
                        <IconBox>{reqIcons[0]}</IconBox>
                        <StepBadge step={1} />
                      </div>
                      <h3
                        className="text-lg sm:text-xl font-bold mb-2 group-hover:text-[#d7be59] transition-colors duration-300"
                        style={{ color: "#eeeeee" }}
                      >
                        {reqs[0].title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: "#999" }}>
                        {reqs[0].details}
                      </p>
                    </div>
                  </div>
                </BorderGlow>
              </motion.div>
            )}

            {/* Cards 1–4: fill remaining grid cells */}
            {reqs.slice(1, 5).map((req, i) => (
              <motion.div
                key={i + 1}
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
                    className="group h-full p-6 sm:p-7 flex flex-col"
                    style={{ borderRadius: 24 }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <IconBox>{reqIcons[i + 1]}</IconBox>
                      <StepBadge step={i + 2} />
                    </div>
                    <h3
                      className="text-base font-bold mb-1.5 group-hover:text-[#d7be59] transition-colors duration-300"
                      style={{ color: "#eeeeee" }}
                    >
                      {req.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#999" }}>
                      {req.details}
                    </p>
                  </div>
                </BorderGlow>
              </motion.div>
            ))}
          </div>

          {/* Card 6: full-width banner with bg image */}
          {reqs[5] && (
            <motion.div
              className="mt-4"
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
                      src={country.galleryImages[1]}
                      alt={reqs[5].title}
                      fill
                      className="object-cover opacity-15 group-hover:opacity-25 transition-opacity duration-700"
                      sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-[#0a0a0a]/50" />
                  </div>
                  <div className="relative p-7 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5">
                    <IconBox>{reqIcons[5]}</IconBox>
                    <StepBadge step={6} />
                    <div>
                      <h3
                        className="text-lg font-bold mb-1.5 group-hover:text-[#d7be59] transition-colors duration-300"
                        style={{ color: "#eeeeee" }}
                      >
                        {reqs[5].title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: "#999" }}>
                        {reqs[5].details}
                      </p>
                    </div>
                  </div>
                </div>
              </BorderGlow>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

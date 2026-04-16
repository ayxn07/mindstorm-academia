"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/animations";
import ShinyText from "@/components/ShinyText";
import BorderGlow from "@/components/BorderGlow";

interface FAQItem {
  question: string;
  answer: string;
}

const admissionFAQs: FAQItem[] = [
  {
    question: "What countries do you provide admission services for?",
    answer:
      "We offer expert admission services for Canada, Australia, Europe (Germany, France, Italy, Sweden, etc.), Russia, and the UAE. Each destination has a dedicated specialist team.",
  },
  {
    question: "What are the eligibility requirements?",
    answer:
      "Requirements vary by country and program. Generally, you need completed secondary/tertiary education, language proficiency tests (IELTS/TOEFL), and relevant academic transcripts. We assess your profile for free.",
  },
  {
    question: "How long does the application process take?",
    answer:
      "The typical timeline is 3-6 months from initial consultation to university offer letter. Visa processing adds 4-8 weeks. We recommend starting at least 6-8 months before your intended intake.",
  },
  {
    question: "Do you help with scholarship applications?",
    answer:
      "Yes! We identify scholarship opportunities that match your profile and help you prepare compelling scholarship applications, including essays and recommendation letters.",
  },
  {
    question: "What is your success rate?",
    answer:
      "We maintain a 98% visa approval rate and have successfully placed over 15,000 students across our partner universities worldwide.",
  },
  {
    question: "Can I work while studying abroad?",
    answer:
      "Work rights vary by country. Canada allows 20 hrs/week, Australia 48 hrs/fortnight, and Europe typically 20 hrs/week. We provide detailed work-right guidance for each destination.",
  },
];

const processFAQs: FAQItem[] = [
  {
    question: "What documents do I need to prepare?",
    answer:
      "Core documents include academic transcripts, passport, language test scores, financial statements, SOP, and LORs. Our team provides a complete checklist and guides you through every document.",
  },
  {
    question: "Is the initial consultation free?",
    answer:
      "Yes, your first consultation is completely free. We assess your profile, discuss your goals, and provide an initial recommendation \u2014 with no obligation.",
  },
  {
    question: "Do you provide visa interview preparation?",
    answer:
      "Absolutely. We conduct mock visa interviews, prepare you for common questions, and provide cultural coaching to ensure you feel confident on interview day.",
  },
  {
    question: "What support do you provide after arrival?",
    answer:
      "Our support extends beyond arrival. We help with accommodation, airport pickup, bank account setup, local orientation, and ongoing academic/career guidance.",
  },
  {
    question: "How much do your services cost?",
    answer:
      "Our fees vary based on the destination and services required. We offer transparent pricing with no hidden charges. Contact us for a personalized quote based on your needs.",
  },
  {
    question: "Can I apply to multiple countries simultaneously?",
    answer:
      "Yes! Many students apply to 2-3 countries to maximize their options. We manage parallel applications efficiently to improve your chances.",
  },
];

function FAQCard({
  item,
  isOpen,
  onToggle,
  index,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <BorderGlow
      backgroundColor="#0a0a0a"
      borderRadius={16}
      glowColor="45 70 60"
      colors={["#d7be59", "#e5d285", "#b89e3a"]}
      edgeSensitivity={3}
      glowRadius={25}
      glowIntensity={3}
      coneSpread={30}
    >
      <div style={{ borderRadius: 16 }}>
        {/* Question button */}
        <button
          onClick={onToggle}
          className="w-full text-left cursor-pointer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            padding: "20px 24px",
            borderRadius: 16,
            background: "transparent",
            border: "none",
          }}
        >
          {/* Number badge */}
          <span
            style={{
              width: 32,
              height: 32,
              borderRadius: 8,
              background: isOpen
                ? "rgba(215,190,89,0.15)"
                : "rgba(255,255,255,0.04)",
              border: isOpen
                ? "1px solid rgba(215,190,89,0.3)"
                : "1px solid rgba(255,255,255,0.06)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              transition: "all 0.3s ease",
            }}
          >
            <span
              style={{
                color: isOpen ? "#d7be59" : "#666",
                fontSize: 13,
                fontWeight: 700,
                lineHeight: 1,
                transition: "color 0.3s ease",
              }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
          </span>
          <span
            style={{
              color: isOpen ? "#d7be59" : "#eeeeee",
              fontSize: 15,
              fontWeight: 600,
              lineHeight: 1.5,
              flex: 1,
              transition: "color 0.3s ease",
            }}
          >
            {item.question}
          </span>
          {/* Chevron icon */}
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke={isOpen ? "#d7be59" : "#555"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              flexShrink: 0,
              transition: "transform 0.35s ease, stroke 0.3s ease",
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>

        {/* Answer — expandable */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              style={{ overflow: "hidden" }}
            >
              <div
                style={{
                  padding: "0 24px 24px 24px",
                  marginLeft: 48,
                }}
              >
                <div
                  style={{
                    borderLeft: "2px solid rgba(215,190,89,0.3)",
                    paddingLeft: 20,
                    paddingTop: 4,
                  }}
                >
                  <p
                    style={{
                      color: "rgba(255,255,255,0.65)",
                      fontSize: 14,
                      lineHeight: 1.85,
                      margin: 0,
                    }}
                  >
                    {item.answer}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </BorderGlow>
  );
}

export default function FAQAccordion() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (key: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  return (
    <section
      style={{ background: "#000000", padding: "120px 0" }}
      className="relative overflow-hidden"
    >
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center top, rgba(215,190,89,0.03) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="mb-5">
            <ShinyText
              text="Common Questions"
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
            Everything You{" "}
            <span className="text-gradient-gold">Need to Know</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "#999999" }}
          >
            Find answers to the most commonly asked questions about our overseas
            education consulting services.
          </motion.p>
        </motion.div>

        {/* FAQ Grid — 2 columns */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Column 1 — Admissions & Applications */}
          <div className="flex flex-col gap-4">
            <motion.p
              variants={fadeInUp}
              style={{
                color: "#d7be59",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: 4,
                paddingLeft: 4,
              }}
            >
              Admissions &amp; Applications
            </motion.p>
            {admissionFAQs.map((item, i) => {
              const key = `admission-${i}`;
              return (
                <motion.div key={key} variants={fadeInUp}>
                  <FAQCard
                    item={item}
                    isOpen={openItems.has(key)}
                    onToggle={() => toggleItem(key)}
                    index={i}
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Column 2 — Process & Support */}
          <div className="flex flex-col gap-4">
            <motion.p
              variants={fadeInUp}
              style={{
                color: "#d7be59",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: 4,
                paddingLeft: 4,
              }}
            >
              Process &amp; Support
            </motion.p>
            {processFAQs.map((item, i) => {
              const key = `process-${i}`;
              return (
                <motion.div key={key} variants={fadeInUp}>
                  <FAQCard
                    item={item}
                    isOpen={openItems.has(key)}
                    onToggle={() => toggleItem(key)}
                    index={i}
                  />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

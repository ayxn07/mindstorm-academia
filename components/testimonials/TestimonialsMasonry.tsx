"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";
import ShinyText from "@/components/ShinyText";
import BorderGlow from "@/components/BorderGlow";
import Masonry from "@/components/Masonry";

const testimonials = [
  {
    id: "1",
    name: "Priya Sharma",
    country: "Canada",
    university: "University of Toronto",
    program: "MSc Computer Science",
    quote:
      "Mindstorm made my dream of studying at U of T a reality. From SOP drafting to visa preparation, they handled everything with such professionalism. I couldn't have done it without them!",
    rating: 5,
    height: 520,
  },
  {
    id: "2",
    name: "Ahmed Al-Rashid",
    country: "Australia",
    university: "University of Melbourne",
    program: "MBA",
    quote:
      "The team's knowledge of Australian universities is unmatched. They helped me secure a scholarship that covered 40% of my tuition.",
    rating: 5,
    height: 440,
  },
  {
    id: "3",
    name: "Fatima Hassan",
    country: "Europe",
    university: "TU Munich",
    program: "MSc Mechanical Engineering",
    quote:
      "I was overwhelmed by the European application process, but Mindstorm simplified everything. They even helped with accommodation in Munich. Truly grateful!",
    rating: 5,
    height: 500,
  },
  {
    id: "4",
    name: "Raj Patel",
    country: "Canada",
    university: "University of British Columbia",
    program: "BSc Data Science",
    quote: "Quick, efficient, and incredibly supportive throughout.",
    rating: 5,
    height: 380,
  },
  {
    id: "5",
    name: "Sara Malik",
    country: "UAE",
    university: "Khalifa University",
    program: "BEng Aerospace",
    quote:
      "Studying in the UAE was the best decision I ever made, and Mindstorm made it possible. Their visa processing was seamless and their guidance on cultural adaptation was invaluable.",
    rating: 5,
    height: 520,
  },
  {
    id: "6",
    name: "Dmitri Volkov",
    country: "Russia",
    university: "ITMO University",
    program: "MSc Information Technology",
    quote:
      "Affordable education with world-class quality. Mindstorm helped me navigate the Russian education system with ease.",
    rating: 5,
    height: 440,
  },
  {
    id: "7",
    name: "Ananya Krishnan",
    country: "Australia",
    university: "UNSW Sydney",
    program: "MSc Finance",
    quote:
      "The post-arrival support was exceptional. From airport pickup to opening a bank account, they thought of everything. The career guidance sessions helped me land my first internship within 3 months of arriving.",
    rating: 5,
    height: 560,
  },
  {
    id: "8",
    name: "Omar Farouk",
    country: "Europe",
    university: "Sorbonne University",
    program: "MA International Relations",
    quote:
      "Mindstorm's Europe team is simply the best. Professional, knowledgeable, and always available.",
    rating: 5,
    height: 400,
  },
  {
    id: "9",
    name: "Meera Joshi",
    country: "Canada",
    university: "McGill University",
    program: "PhD Neuroscience",
    quote:
      "As a PhD applicant, I needed specialized guidance. Mindstorm connected me with professors, helped craft my research proposal, and secured full funding for my program. They go above and beyond.",
    rating: 5,
    height: 540,
  },
  {
    id: "10",
    name: "Ali Kazemi",
    country: "UAE",
    university: "American University of Sharjah",
    program: "BBA",
    quote: "From consultation to campus — a seamless experience.",
    rating: 5,
    height: 380,
  },
  {
    id: "11",
    name: "Lina Petrova",
    country: "Russia",
    university: "Moscow State University",
    program: "BSc Chemistry",
    quote:
      "I was hesitant about studying in Russia initially, but Mindstorm's team put all my concerns to rest. The tuition is incredibly affordable and the quality of education at MSU is outstanding. Thank you, Mindstorm!",
    rating: 5,
    height: 540,
  },
  {
    id: "12",
    name: "Kunal Desai",
    country: "Australia",
    university: "University of Sydney",
    program: "MSc Civil Engineering",
    quote:
      "The scholarship guidance alone was worth it. Saved me thousands!",
    rating: 5,
    height: 400,
  },
];

const countryFlags: Record<string, string> = {
  Canada: "CA",
  Australia: "AU",
  Europe: "EU",
  UAE: "AE",
  Russia: "RU",
};

function TestimonialCard({ item }: { item: (typeof testimonials)[number] }) {
  return (
    <BorderGlow
      backgroundColor="#0a0a0a"
      borderRadius={20}
      glowColor="45 70 60"
      colors={["#d7be59", "#e5d285", "#b89e3a"]}
      edgeSensitivity={3}
      glowRadius={25}
      glowIntensity={3}
      coneSpread={30}
    >
      <div
        style={{
          borderRadius: 20,
          padding: "28px 24px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative quote mark */}
        <span
          style={{
            position: "absolute",
            top: 12,
            left: 16,
            fontSize: 72,
            fontFamily: "Georgia, serif",
            lineHeight: 1,
            color: "#d7be59",
            opacity: 0.08,
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          &ldquo;
        </span>

        {/* Star rating */}
        <div
          style={{
            display: "flex",
            gap: 3,
            marginBottom: 16,
          }}
        >
          {Array.from({ length: item.rating }).map((_, i) => (
            <svg
              key={i}
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="#d7be59"
              stroke="none"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
        </div>

        {/* Quote text */}
        <p
          style={{
            color: "rgba(255,255,255,0.75)",
            fontSize: 14,
            lineHeight: 1.75,
            flex: 1,
            position: "relative",
            zIndex: 1,
            margin: 0,
          }}
        >
          &ldquo;{item.quote}&rdquo;
        </p>

        {/* Divider */}
        <div
          style={{
            height: 1,
            background:
              "linear-gradient(90deg, transparent, rgba(215,190,89,0.2), transparent)",
            margin: "20px 0 16px",
          }}
        />

        {/* Profile */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          {/* First letter avatar */}
          <div
            style={{
              width: 42,
              height: 42,
              borderRadius: "50%",
              flexShrink: 0,
              border: "2px solid rgba(215,190,89,0.3)",
              background:
                "linear-gradient(135deg, rgba(215,190,89,0.15), rgba(215,190,89,0.05))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                color: "#d7be59",
                fontSize: 18,
                fontWeight: 700,
                lineHeight: 1,
              }}
            >
              {item.name.charAt(0)}
            </span>
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <p
              style={{
                color: "#eeeeee",
                fontWeight: 600,
                fontSize: 14,
                marginBottom: 2,
              }}
            >
              {item.name}
            </p>
            <p
              style={{
                color: "#d7be59",
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: "0.02em",
              }}
            >
              {item.program}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 5,
              padding: "4px 10px",
              borderRadius: 12,
              background: "rgba(215,190,89,0.06)",
              border: "1px solid rgba(215,190,89,0.12)",
              flexShrink: 0,
            }}
          >
            <span
              style={{
                color: "#999",
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              {countryFlags[item.country] || ""}
            </span>
          </div>
        </div>
      </div>
    </BorderGlow>
  );
}

export default function TestimonialsMasonry() {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#050505",
        padding: "120px 0",
      }}
    >
      {/* Decorative top glow */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          width: 500,
          height: 500,
          borderRadius: "50%",
          pointerEvents: "none",
          background:
            "radial-gradient(circle, rgba(215,190,89,0.02) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="section-container">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <motion.div variants={fadeInUp} style={{ marginBottom: 12 }}>
            <ShinyText
              text="What Students Say"
              color="#d7be59"
              shineColor="#f5ecc8"
              speed={3}
              spread={120}
              className="text-sm font-medium tracking-widest uppercase"
            />
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
            style={{ color: "#eeeeee", marginBottom: 20 }}
          >
            Trusted by{" "}
            <span className="text-gradient-gold">Students Worldwide</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "#999" }}
          >
            Real stories from real students across the globe who trusted
            Mindstorm to guide their academic journey.
          </motion.p>
        </motion.div>

        {/* Masonry Grid */}
        <Masonry
          items={testimonials}
          ease="power3.out"
          duration={0.6}
          stagger={0.05}
          animateFrom="bottom"
          scaleOnHover
          hoverScale={0.97}
          blurToFocus
          colorShiftOnHover={false}
          breakpoints={["(min-width:1024px)", "(min-width:640px)"]}
          columns={[3, 2]}
          defaultColumns={1}
          gap={28}
          renderItem={(item) => (
            <TestimonialCard
              item={item as unknown as (typeof testimonials)[number]}
            />
          )}
        />
      </div>
    </section>
  );
}

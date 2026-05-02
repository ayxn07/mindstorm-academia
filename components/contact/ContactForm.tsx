"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";
import BorderGlow from "@/components/BorderGlow";
import ShinyText from "@/components/ShinyText";
import { getSupabaseBrowser } from "@/lib/supabase";

type SubmitStatus = "idle" | "submitting" | "sent" | "error";

type InfoCard = {
  title: string;
  detail?: string;
  icon: React.ReactNode;
  custom?: React.ReactNode;
};

const instagramIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#d7be59"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const infoCards: InfoCard[] = [
  {
    title: "Office Address",
    detail: "Mindstorm Strategic Consulting FZ-LLC, Dubai, UAE",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#d7be59"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: "Email",
    detail: "info@mindstormglobal.com",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#d7be59"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 4l-10 8L2 4" />
      </svg>
    ),
  },
  {
    title: "Phone",
    detail: "+971 XX XXX XXXX",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#d7be59"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    title: "Working Hours",
    detail: "Sun–Thu: 9:00 AM – 6:00 PM (GST)",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#d7be59"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Follow Us",
    icon: instagramIcon,
    custom: (
      <div className="flex flex-col gap-1.5">
        <a
          href="https://www.instagram.com/mindstorm.global.services?igsh=MWU0MW0zd2sxMnZkdQ=="
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm leading-relaxed transition-colors hover:text-[#d7be59]"
          style={{ color: "#999" }}
        >
          @mindstorm.global.services
        </a>
        <a
          href="https://www.instagram.com/mindstorm.marketing?igsh=MXFqanJucXltbjRxNQ=="
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm leading-relaxed transition-colors hover:text-[#d7be59]"
          style={{ color: "#999" }}
        >
          @mindstorm.marketing
        </a>
      </div>
    ),
  },
];

const countryOptions = [
  "Canada",
  "Australia",
  "Europe",
  "Russia",
  "UAE",
];

const programOptions = [
  "Undergraduate",
  "Postgraduate",
  "PhD",
  "Diploma",
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    program: "",
    message: "",
  });
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [reference, setReference] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    setErrorMsg(null);

    try {
      const supabase = getSupabaseBrowser();
      const { data, error } = await supabase
        .from("contact_enquiries")
        .insert({
          source: "academia",
          full_name: formData.fullName.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim() || null,
          country: formData.country || null,
          program: formData.program || null,
          message: formData.message.trim(),
        })
        .select("reference")
        .single();

      if (error) throw error;
      setReference(data?.reference ?? null);
      setStatus("sent");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        country: "",
        program: "",
        message: "",
      });
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Couldn't send your message."
      );
    }
  };

  const inputStyle: React.CSSProperties = {
    backgroundColor: "#111",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 12,
    color: "#eee",
    padding: "14px 16px",
    width: "100%",
    fontSize: 14,
    outline: "none",
    transition: "border-color 0.3s ease",
  };

  return (
    <section className="relative overflow-hidden">
      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
          max-width: 1200px;
          margin: 0 auto;
        }
        @media (min-width: 1024px) {
          .contact-grid {
            grid-template-columns: 2fr 3fr;
          }
        }
      `}</style>
      {/* Ambient glow */}
      <div
        className="absolute left-0 top-1/3 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(215,190,89,0.03) 0%, transparent 70%)",
          filter: "blur(100px)",
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
              text="Reach Out"
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
            Let&apos;s Start Your{" "}
            <span className="text-gradient-gold">Journey Together</span>
          </motion.h2>
        </motion.div>

        {/* Two-column layout */}
        <div className="contact-grid">
          {/* LEFT — Contact info cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-5"
          >
            {infoCards.map((card, i) => (
              <motion.div key={i} variants={fadeInLeft}>
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
                    className="flex items-start gap-4 p-6"
                    style={{ borderRadius: 30 }}
                  >
                    <div
                      className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full"
                      style={{
                        background: "rgba(215,190,89,0.08)",
                        border: "1px solid rgba(215,190,89,0.15)",
                      }}
                    >
                      {card.icon}
                    </div>
                    <div>
                      <h4
                        className="text-sm font-semibold mb-1 tracking-wide uppercase"
                        style={{ color: "#d7be59" }}
                      >
                        {card.title}
                      </h4>
                      {card.custom ? (
                        card.custom
                      ) : (
                        <p
                          className="text-sm leading-relaxed"
                          style={{ color: "#999" }}
                        >
                          {card.detail}
                        </p>
                      )}
                    </div>
                  </div>
                </BorderGlow>
              </motion.div>
            ))}
          </motion.div>

          {/* RIGHT — Contact form */}
          <motion.div
            variants={fadeInRight}
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
              glowRadius={35}
              glowIntensity={3}
              coneSpread={30}
            >
              <form
                onSubmit={handleSubmit}
                className="p-6 sm:p-8 space-y-5"
                style={{ borderRadius: 30 }}
              >
                {/* Full Name */}
                <div>
                  <label
                    className="block text-xs font-medium tracking-wider uppercase mb-2"
                    style={{ color: "#999" }}
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    style={inputStyle}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor =
                        "rgba(215,190,89,0.5)")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor =
                        "rgba(255,255,255,0.1)")
                    }
                  />
                </div>

                {/* Email & Phone row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      className="block text-xs font-medium tracking-wider uppercase mb-2"
                      style={{ color: "#999" }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      style={inputStyle}
                      onFocus={(e) =>
                        (e.currentTarget.style.borderColor =
                          "rgba(215,190,89,0.5)")
                      }
                      onBlur={(e) =>
                        (e.currentTarget.style.borderColor =
                          "rgba(255,255,255,0.1)")
                      }
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs font-medium tracking-wider uppercase mb-2"
                      style={{ color: "#999" }}
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+971 XX XXX XXXX"
                      style={inputStyle}
                      onFocus={(e) =>
                        (e.currentTarget.style.borderColor =
                          "rgba(215,190,89,0.5)")
                      }
                      onBlur={(e) =>
                        (e.currentTarget.style.borderColor =
                          "rgba(255,255,255,0.1)")
                      }
                    />
                  </div>
                </div>

                {/* Country & Program row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      className="block text-xs font-medium tracking-wider uppercase mb-2"
                      style={{ color: "#999" }}
                    >
                      Country of Interest
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      style={{
                        ...inputStyle,
                        appearance: "none" as const,
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 16px center",
                      }}
                      onFocus={(e) =>
                        (e.currentTarget.style.borderColor =
                          "rgba(215,190,89,0.5)")
                      }
                      onBlur={(e) =>
                        (e.currentTarget.style.borderColor =
                          "rgba(255,255,255,0.1)")
                      }
                    >
                      <option value="" disabled>
                        Select country
                      </option>
                      {countryOptions.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      className="block text-xs font-medium tracking-wider uppercase mb-2"
                      style={{ color: "#999" }}
                    >
                      Program Level
                    </label>
                    <select
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                      style={{
                        ...inputStyle,
                        appearance: "none" as const,
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 16px center",
                      }}
                      onFocus={(e) =>
                        (e.currentTarget.style.borderColor =
                          "rgba(215,190,89,0.5)")
                      }
                      onBlur={(e) =>
                        (e.currentTarget.style.borderColor =
                          "rgba(255,255,255,0.1)")
                      }
                    >
                      <option value="" disabled>
                        Select program
                      </option>
                      {programOptions.map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    className="block text-xs font-medium tracking-wider uppercase mb-2"
                    style={{ color: "#999" }}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your study plans..."
                    rows={5}
                    style={{
                      ...inputStyle,
                      resize: "vertical" as const,
                    }}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor =
                        "rgba(215,190,89,0.5)")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor =
                        "rgba(255,255,255,0.1)")
                    }
                  />
                </div>

                {/* Status messages */}
                {status === "sent" && reference ? (
                  <div
                    className="rounded-2xl px-4 py-3 text-sm"
                    style={{
                      background: "rgba(215,190,89,0.08)",
                      border: "1px solid rgba(215,190,89,0.3)",
                      color: "#f5ecc8",
                    }}
                  >
                    Thanks — we&apos;ve received your message. Reference{" "}
                    <span className="font-mono font-semibold">{reference}</span>
                    . A counsellor will reach out within 24 hours.
                  </div>
                ) : null}
                {status === "error" ? (
                  <div
                    className="rounded-2xl px-4 py-3 text-sm"
                    style={{
                      background: "rgba(220,80,80,0.08)",
                      border: "1px solid rgba(220,80,80,0.3)",
                      color: "#f3c8c8",
                    }}
                  >
                    {errorMsg ?? "Something went wrong. Please try again."}
                  </div>
                ) : null}

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={status === "submitting"}
                  whileHover={status === "submitting" ? undefined : { scale: 1.02 }}
                  whileTap={status === "submitting" ? undefined : { scale: 0.98 }}
                  className="w-full font-semibold text-base py-4 rounded-full transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  style={{
                    background:
                      "linear-gradient(180deg, #e5d285 0%, #d7be59 40%, #c4a940 100%)",
                    color: "#000",
                    border: "1px solid rgba(255,255,255,0.15)",
                    boxShadow:
                      "0 4px 12px -2px rgba(0,0,0,0.5), 0 2px 4px -1px rgba(0,0,0,0.3), 0 0 20px -4px rgba(215,190,89,0.25), inset 0 1px 0 0 rgba(255,255,255,0.35), inset 0 2px 4px 0 rgba(255,255,255,0.1), inset 0 -1px 0 0 rgba(0,0,0,0.15), inset 0 -2px 4px 0 rgba(0,0,0,0.08)",
                    cursor: "pointer",
                  }}
                >
                  {status === "submitting"
                    ? "Sending…"
                    : status === "sent"
                      ? "Sent ✓"
                      : "Send Message"}
                </motion.button>
              </form>
            </BorderGlow>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

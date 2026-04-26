"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import BorderGlow from "@/components/BorderGlow";

interface Props {
  reference: string | null;
}

const WHATSAPP_NUMBER = "971585952077";

const goldButtonStyle: React.CSSProperties = {
  background:
    "linear-gradient(180deg, #e5d285 0%, #d7be59 40%, #c4a940 100%)",
  color: "#000",
  border: "1px solid rgba(255,255,255,0.15)",
  boxShadow:
    "0 4px 12px -2px rgba(0,0,0,0.5), 0 2px 4px -1px rgba(0,0,0,0.3), 0 0 24px -4px rgba(215,190,89,0.45), inset 0 1px 0 0 rgba(255,255,255,0.35), inset 0 2px 4px 0 rgba(255,255,255,0.1), inset 0 -1px 0 0 rgba(0,0,0,0.15), inset 0 -2px 4px 0 rgba(0,0,0,0.08)",
};

const ghostButtonStyle: React.CSSProperties = {
  background: "transparent",
  color: "#d7be59",
  border: "1px solid rgba(215,190,89,0.35)",
};

export default function SuccessClient({ reference }: Props) {
  const [copied, setCopied] = useState(false);

  const ref = reference ?? "—";
  const message = `Hi Mindstorm, I've just submitted my study abroad application. My reference number is ${ref}.`;
  const whatsappUrl = reference
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    : `https://wa.me/${WHATSAPP_NUMBER}`;

  const copyRef = async () => {
    if (!reference) return;
    try {
      await navigator.clipboard.writeText(reference);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // ignore
    }
  };

  return (
    <section className="relative min-h-screen pt-32 pb-24 px-4 flex items-start sm:items-center">
      <div className="max-w-2xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <BorderGlow
            backgroundColor="#0a0a0a"
            borderRadius={28}
            glowColor="45 70 60"
            colors={["#d7be59", "#e5d285", "#b89e3a"]}
            edgeSensitivity={3}
            glowRadius={40}
            glowIntensity={3}
            coneSpread={30}
            animated
          >
            <div className="p-8 sm:p-12 text-center" style={{ borderRadius: 28 }}>
              <motion.div
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.15, type: "spring", stiffness: 220, damping: 18 }}
                className="mx-auto mb-6 w-16 h-16 rounded-full flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(215,190,89,0.25), rgba(215,190,89,0.08))",
                  border: "1px solid rgba(215,190,89,0.4)",
                }}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#d7be59"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </motion.div>

              <p
                className="text-xs uppercase tracking-[0.25em] mb-3"
                style={{ color: "#d7be59" }}
              >
                Application Received
              </p>
              <h1 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: "#eee" }}>
                Thank you — we&apos;ve got your application.
              </h1>
              <p className="text-sm sm:text-base mb-8" style={{ color: "#999" }}>
                A Mindstorm counsellor will review it and reach out within 24 hours.
                Save your reference number — you&apos;ll need it for any follow-up.
              </p>

              <div
                className="mx-auto max-w-sm rounded-2xl p-5 mb-8"
                style={{
                  background: "rgba(215,190,89,0.06)",
                  border: "1px solid rgba(215,190,89,0.25)",
                }}
              >
                <p
                  className="text-[10px] uppercase tracking-widest mb-2"
                  style={{ color: "#999" }}
                >
                  Your Reference Number
                </p>
                <p
                  className="font-mono text-2xl sm:text-3xl font-bold mb-3"
                  style={{ color: "#f5ecc8", letterSpacing: "0.08em" }}
                >
                  {ref}
                </p>
                <button
                  type="button"
                  onClick={copyRef}
                  disabled={!reference}
                  className="text-xs uppercase tracking-wider transition-colors disabled:opacity-50"
                  style={{ color: copied ? "#86efac" : "#d7be59" }}
                >
                  {copied ? "Copied ✓" : "Copy reference"}
                </button>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch justify-center gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold uppercase tracking-wide transition-transform"
                  style={goldButtonStyle}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M17.6 6.32A8 8 0 0 0 4.06 15.5L3 21l5.65-1.05a8 8 0 0 0 12.07-9.95 8 8 0 0 0-3.12-3.68Zm-5.6 12.27a6.6 6.6 0 0 1-3.39-.93l-.24-.14-2.95.55.55-2.88-.16-.25a6.6 6.6 0 1 1 12.21-3.51 6.6 6.6 0 0 1-6.02 7.16Zm3.62-4.95c-.2-.1-1.17-.58-1.35-.65-.18-.07-.31-.1-.45.1s-.51.65-.62.78c-.11.13-.23.15-.42.05a5.4 5.4 0 0 1-1.6-1 6 6 0 0 1-1.1-1.39c-.12-.2 0-.3.09-.4l.3-.34c.09-.11.12-.18.18-.31a.36.36 0 0 0 0-.34c-.05-.1-.45-1.07-.61-1.46-.16-.39-.33-.34-.45-.34h-.39a.74.74 0 0 0-.54.25 2.25 2.25 0 0 0-.71 1.68c0 .99.72 1.94.82 2.08.1.13 1.42 2.17 3.45 3.04a11.62 11.62 0 0 0 1.16.43 2.78 2.78 0 0 0 1.27.08c.39-.06 1.17-.48 1.34-.94.17-.46.17-.86.12-.94-.05-.08-.18-.13-.39-.23Z" />
                  </svg>
                  Continue on WhatsApp
                </a>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold uppercase tracking-wide transition-all"
                  style={ghostButtonStyle}
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </BorderGlow>
        </motion.div>
      </div>
    </section>
  );
}

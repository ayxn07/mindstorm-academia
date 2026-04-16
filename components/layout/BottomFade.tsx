"use client";

import GradualBlur from "@/components/GradualBlur";

/**
 * Fixed bottom-of-viewport gradual blur + fade.
 * Uses the GradualBlur component with target="page" for fixed positioning.
 * Placed once in layout.tsx — persists across all pages.
 */
export default function BottomFade() {
  return (
    <>
      <GradualBlur
        target="page"
        position="bottom"
        height="4rem"
        strength={1.5}
        divCount={5}
        curve="bezier"
        exponential
        opacity={0.7}
        zIndex={40}
      />
      {/* Subtle gold accent line at very bottom */}
      <div
        className="fixed bottom-0 left-0 right-0 h-px pointer-events-none"
        style={{
          zIndex: 41,
          background:
            "linear-gradient(90deg, transparent 0%, rgba(215,190,89,0.08) 30%, rgba(215,190,89,0.15) 50%, rgba(215,190,89,0.08) 70%, transparent 100%)",
        }}
      />
    </>
  );
}

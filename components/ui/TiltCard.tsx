"use client";

import { useRef, useState, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  glareEnabled?: boolean;
  tiltIntensity?: number;
}

export default function TiltCard({
  children,
  className = "",
  glareEnabled = true,
  tiltIntensity = 15,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [tiltIntensity, -tiltIntensity]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-tiltIntensity, tiltIntensity]), {
    stiffness: 200,
    damping: 20,
  });

  const glareX = useTransform(mouseX, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(mouseY, [0, 1], ["0%", "100%"]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  }

  function handleMouseEnter() {
    setIsHovering(true);
  }

  function handleMouseLeave() {
    setIsHovering(false);
    mouseX.set(0.5);
    mouseY.set(0.5);
  }

  return (
    /* Perspective wrapper — perspective MUST be on the parent, not on the rotating child */
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "1000px" }}
      className={`relative ${className}`}
    >
      {/* Rotating inner element */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full h-full"
      >
        {children}

        {/* Glare overlay — subtle gold shine that follows cursor */}
        {glareEnabled && (
          <motion.div
            className="pointer-events-none absolute inset-0 rounded-2xl overflow-hidden z-10"
            style={{ opacity: isHovering ? 0.7 : 0, transition: "opacity 0.4s ease" }}
          >
            <motion.div
              className="absolute w-[80%] h-[80%]"
              style={{
                left: glareX,
                top: glareY,
                x: "-50%",
                y: "-50%",
                background:
                  "radial-gradient(circle, rgba(215,190,89,0.15) 0%, rgba(215,190,89,0.05) 40%, transparent 70%)",
                borderRadius: "50%",
              }}
            />
          </motion.div>
        )}

        {/* Ambient glow on hover */}
        <motion.div
          className="absolute -inset-1 rounded-2xl -z-10"
          style={{
            opacity: isHovering ? 1 : 0,
            background:
              "radial-gradient(ellipse at center, rgba(215,190,89,0.08) 0%, transparent 70%)",
            filter: "blur(24px)",
            transition: "opacity 0.4s ease",
          }}
        />
      </motion.div>
    </div>
  );
}

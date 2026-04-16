"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Confetti from "react-confetti";
import gsap from "gsap";

interface SplashScreenProps {
  onComplete?: () => void;
}

// Gold color palette for confetti
const GOLD_COLORS = [
  "#d7be59",
  "#e5d285",
  "#b89e3a",
  "#c9a94d",
  "#f0e6b8",
  "#a38832",
  "#dcc66a",
  "#ebd999",
];

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const progressFillRef = useRef<HTMLDivElement>(null);
  const loadingTextRef = useRef<HTMLParagraphElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  
  const [isVisible, setIsVisible] = useState(true);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [confettiPieces, setConfettiPieces] = useState(350);
  const animationRan = useRef(false);

  // Handle window resize for confetti
  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    
    updateWindowSize();
    window.addEventListener("resize", updateWindowSize);
    return () => window.removeEventListener("resize", updateWindowSize);
  }, []);

  useEffect(() => {
    if (animationRan.current) return;
    animationRan.current = true;

    const logo = logoRef.current;
    const text = textRef.current;
    const tagline = taglineRef.current;
    const container = containerRef.current;
    const progressBar = progressBarRef.current;
    const progressFill = progressFillRef.current;
    const loadingText = loadingTextRef.current;
    const glow = glowRef.current;

    if (!logo || !text || !tagline || !container || !progressBar || !progressFill || !loadingText || !glow) return;

    const tl = gsap.timeline();

    // Animate glow first
    tl.to(glow, {
      opacity: 1,
      scale: 1.2,
      duration: 1,
      ease: "power2.out",
    }, 0);

    // Logo entrance with blur effect
    tl.to(logo, {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      duration: 1,
      ease: "power3.out",
    }, 0.2);

    // Text reveal
    tl.to(text, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
    }, 0.6);

    // Tagline reveal
    tl.to(tagline, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
    }, 0.9);

    // Progress bar container fade in
    tl.to(progressBar, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
    }, 1.1);

    // Loading text fade in
    tl.to(loadingText, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power2.out",
    }, 1.2);

    // Progress bar fill animation - starts after the bar fades in
    tl.to(progressFill, {
      scaleX: 1,
      duration: 2.2,
      ease: "power2.inOut",
      onComplete: () => {
        // Confetti bursts when progress bar hits 100%
        setShowConfetti(true);
      },
    }, 1.3);

    // Gradually reduce confetti after burst
    tl.call(() => {
      setConfettiPieces(150);
    }, undefined, 5);

    tl.call(() => {
      setConfettiPieces(0);
    }, undefined, 6);

    // Hold for a moment after confetti
    tl.to({}, { duration: 0.5 }, 6);

    // Exit animation
    tl.to(glow, {
      opacity: 0,
      scale: 1.5,
      duration: 0.6,
      ease: "power2.in",
    });

    tl.to([logo, text, tagline, progressBar, loadingText], {
      opacity: 0,
      y: -30,
      duration: 0.5,
      ease: "power2.in",
      stagger: 0.05,
    }, "-=0.4");

    tl.to(container, {
      yPercent: -100,
      duration: 0.8,
      ease: "power3.inOut",
      onComplete: () => {
        setIsVisible(false);
        setShowConfetti(false);
        onComplete?.();
      },
    }, "-=0.2");

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[300] bg-black flex items-center justify-center overflow-hidden"
    >
      {/* React Confetti */}
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          numberOfPieces={confettiPieces}
          colors={GOLD_COLORS}
          recycle={false}
          gravity={0.3}
          initialVelocityX={{ min: -15, max: 15 }}
          initialVelocityY={{ min: -30, max: 10 }}
          confettiSource={{
            x: windowSize.width / 2 - 10,
            y: windowSize.height / 2 - 100,
            w: 100,
            h: 50,
          }}
          tweenDuration={100}
          style={{ position: "absolute", zIndex: 10 }}
        />
      )}

      {/* Background gradient glow */}
      <div
        ref={glowRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0,
          transform: "scale(0.8)",
          background: `
            radial-gradient(ellipse 80% 50% at 50% 50%, rgba(215, 190, 89, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 20% 30%, rgba(215, 190, 89, 0.1) 0%, transparent 30%),
            radial-gradient(circle at 80% 70%, rgba(215, 190, 89, 0.08) 0%, transparent 30%)
          `,
        }}
      />

      {/* Subtle floating particles in background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/30 animate-float"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${5 + i}s`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-20 flex flex-col items-center text-center px-6">
        {/* Logo */}
        <div 
          ref={logoRef} 
          className="mb-8 relative"
          style={{ opacity: 0, transform: "scale(0.8)", filter: "blur(20px)" }}
        >
          {/* Logo glow effect */}
          <div 
            className="absolute -inset-12 rounded-full blur-3xl"
            style={{
              background: "radial-gradient(circle, rgba(215, 190, 89, 0.2) 0%, transparent 70%)",
            }}
          />
          <Image
            src="/Mindstorm-Logo.jpg"
            alt="Mindstorm Strategic Consulting"
            width={320}
            height={88}
            className="object-contain relative z-10 drop-shadow-2xl"
            style={{ width: "320px", height: "auto" }}
            priority
          />
        </div>

        {/* Main text */}
        <div 
          ref={textRef} 
          className="mb-4"
          style={{ opacity: 0, transform: "translateY(30px)" }}
        >
          <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-gradient-gold tracking-tight">
            Welcome to Excellence
          </h1>
        </div>

        {/* Tagline */}
        <div 
          ref={taglineRef} 
          className="mb-10"
          style={{ opacity: 0, transform: "translateY(20px)" }}
        >
          <p className="text-lg md:text-xl text-[#999999] max-w-md">
            Your gateway to global education
          </p>
        </div>

        {/* Progress bar */}
        <div 
          ref={progressBarRef} 
          className="w-64 md:w-80 h-1 bg-white/10 rounded-full overflow-hidden relative"
          style={{ opacity: 0, transform: "translateY(15px)" }}
        >
          <div
            ref={progressFillRef}
            className="absolute inset-y-0 left-0 rounded-full"
            style={{
              background: "linear-gradient(90deg, #b89e3a, #d7be59, #e5d285, #d7be59)",
              width: "100%",
              transform: "scaleX(0)",
              transformOrigin: "left center",
            }}
          />
          {/* Shimmer effect on progress bar */}
          <div className="absolute inset-0 shimmer" style={{ opacity: 0.5 }} />
        </div>

        {/* Loading text */}
        <p 
          ref={loadingTextRef} 
          className="mt-6 text-sm text-[#666666] tracking-widest uppercase"
          style={{ opacity: 0, transform: "translateY(10px)" }}
        >
          Preparing your journey...
        </p>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </div>
  );
}

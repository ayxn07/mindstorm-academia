"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

interface LogoLoaderProps {
  onAnimationStart?: () => void;
  onAnimationComplete?: () => void;
}

export default function LogoLoader({ onAnimationStart, onAnimationComplete }: LogoLoaderProps) {
  const loaderBgRef = useRef<HTMLDivElement>(null);
  const loaderLogoRef = useRef<HTMLDivElement>(null);
  const [isHidden, setIsHidden] = useState(false);
  const animationRan = useRef(false);

  useEffect(() => {
    if (animationRan.current) return;
    animationRan.current = true;
    
    const loaderLogo = loaderLogoRef.current;
    const loaderBg = loaderBgRef.current;
    
    if (!loaderLogo || !loaderBg) return;

    onAnimationStart?.();

    // Set initial state for loader logo
    gsap.set(loaderLogo, {
      opacity: 0,
      filter: "blur(20px)",
      scale: 1.2,
    });

    const tl = gsap.timeline();

    // 1. Blur-in animation for the loader logo
    tl.to(loaderLogo, {
      opacity: 1,
      filter: "blur(0px)",
      scale: 1,
      duration: 1,
      ease: "power2.out",
    });

    // 2. Hold for a moment
    tl.to({}, { duration: 0.5 });

    // 3. Find navbar and transition
    tl.call(() => {
      // Wait a frame to ensure navbar is positioned
      requestAnimationFrame(() => {
        const navLogo = document.querySelector('[data-nav-logo="true"]') as HTMLElement;
        
        if (!navLogo || !loaderLogo || !loaderBg) {
          // Fallback: just fade out
          gsap.to([loaderBg, loaderLogo], {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
              setIsHidden(true);
              onAnimationComplete?.();
            },
          });
          return;
        }

        // Get positions
        const navLogoRect = navLogo.getBoundingClientRect();
        const loaderLogoRect = loaderLogo.getBoundingClientRect();

        // Calculate the transform needed
        const scaleX = navLogoRect.width / loaderLogoRect.width;
        const scaleY = navLogoRect.height / loaderLogoRect.height;
        const scale = Math.min(scaleX, scaleY);

        const targetX = navLogoRect.left + navLogoRect.width / 2 - (loaderLogoRect.left + loaderLogoRect.width / 2);
        const targetY = navLogoRect.top + navLogoRect.height / 2 - (loaderLogoRect.top + loaderLogoRect.height / 2);

        const transitionTl = gsap.timeline({
          onComplete: () => {
            // Show navbar logo and hide loader
            gsap.set(navLogo, { visibility: "visible" });
            setIsHidden(true);
            onAnimationComplete?.();
          },
        });

        // Animate logo to navbar position
        transitionTl.to(loaderLogo, {
          x: targetX,
          y: targetY,
          scale: scale,
          duration: 1.2,
          ease: "power3.inOut",
        }, 0);

        // Slide loader background up
        transitionTl.to(loaderBg, {
          yPercent: -100,
          duration: 1.2,
          ease: "power3.inOut",
        }, 0);
      });
    });

    return () => {
      tl.kill();
    };
  }, [onAnimationStart, onAnimationComplete]);

  if (isHidden) {
    return null;
  }

  return (
    <>
      {/* Loader Background */}
      <div
        ref={loaderBgRef}
        className="fixed inset-0 z-[200] bg-black"
      />

      {/* Loader Logo Container */}
      <div className="fixed inset-0 z-[201] flex items-center justify-center pointer-events-none">
        <div
          ref={loaderLogoRef}
          className="flex items-center justify-center"
        >
          <Image
            src="/Mindstorm-Logo.jpg"
            alt="Mindstorm Strategic Consulting"
            width={280}
            height={77}
            className="object-contain"
            style={{ width: "280px", height: "auto" }}
            priority
          />
        </div>
      </div>
    </>
  );
}

"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [showProgress, setShowProgress] = useState(true);
  const [flash, setFlash] = useState(true);
  const [ripples, setRipples] = useState<Ripple[]>([]);

  // 1. Page transition effect on initial page access and on route navigation
  useEffect(() => {
    setShowProgress(true);
    setProgress(30);
    setFlash(true);

    const t1 = setTimeout(() => setProgress(75), 80);
    const t2 = setTimeout(() => setProgress(100), 220);
    const t3 = setTimeout(() => {
      setShowProgress(false);
      setFlash(false);
    }, 450);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [pathname]);

  // 2. Interactive tactile ripple effect on every click throughout the page
  useEffect(() => {
    const handlePointerDown = (e: MouseEvent) => {
      // Ignore right clicks or auxiliary clicks
      if (e.button !== 0) return;

      const newRipple: Ripple = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
      };

      setRipples((prev) => [...prev.slice(-5), newRipple]);

      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 550);
    };

    window.addEventListener("pointerdown", handlePointerDown);
    return () => window.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  return (
    <div className="relative flex-1 flex flex-col w-full min-h-screen">
      {/* Top Glowing Route Transition Progress Bar */}
      {showProgress && (
        <div className="fixed top-0 left-0 right-0 z-[100] h-[3px] bg-black/40 pointer-events-none">
          <div
            className="h-full bg-gradient-to-r from-blue-600 via-sky-400 to-indigo-500 shadow-[0_0_12px_rgba(56,189,248,0.95)] transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      {/* Subtle Studio Camera Aperture / Shutter Flash on Page Access */}
      {flash && (
        <div
          aria-hidden="true"
          className="fixed inset-0 z-[90] pointer-events-none bg-sky-400/[0.04] backdrop-blur-[1px] animate-shutter-flash"
        />
      )}

      {/* Interactive Click Ripple Feedback */}
      <div
        className="fixed inset-0 pointer-events-none z-[95] overflow-hidden"
        aria-hidden="true"
      >
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            className="absolute rounded-full pointer-events-none animate-click-ripple border border-sky-400/50 bg-sky-400/15 shadow-[0_0_16px_rgba(56,189,248,0.4)]"
            style={{
              left: `${ripple.x}px`,
              top: `${ripple.y}px`,
              width: "32px",
              height: "32px",
            }}
          />
        ))}
      </div>

      {/* Page Content with Smooth Aperture Enter Animation */}
      <div
        key={pathname}
        className="animate-page-enter flex-1 flex flex-col w-full relative"
      >
        {children}
      </div>
    </div>
  );
}

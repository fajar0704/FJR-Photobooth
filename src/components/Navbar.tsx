"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Camera, Home as HomeIcon, Sparkles, Mail } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";
  const isAbout = pathname === "/about" || pathname === "/tentang";
  const isBooth = pathname === "/booth";
  const isContact = pathname === "/contact" || pathname === "/kontak";

  return (
    <header
      className={`fixed top-0 inset-x-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-[#070b18]/95 backdrop-blur-2xl border-white/[0.12] shadow-[0_8px_32px_rgba(0,0,0,0.65)]"
          : "bg-[#070b18]/85 backdrop-blur-xl border-white/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
      }`}
    >
      {/* Specular Ambient Glow Beam along bottom border */}
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-sky-400/40 to-transparent pointer-events-none" />

      <nav className="w-full max-w-7xl mx-auto px-2 xs:px-3.5 sm:px-6 lg:px-8 h-13 sm:h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="flex items-center gap-1.5 xs:gap-2 group select-none py-1 shrink-0"
        >
          <div className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-500/20 via-sky-500/10 to-indigo-500/20 border border-sky-400/30 flex items-center justify-center text-sky-400 group-hover:scale-105 group-hover:border-sky-400/60 shadow-[0_0_10px_rgba(56,189,248,0.2)] transition-all duration-300">
            <Camera className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 text-sky-400" />
          </div>
          <span className="text-xs sm:text-sm font-heading font-extrabold tracking-tight text-white group-hover:text-sky-300 transition-colors leading-none">
            Photobooth
          </span>
        </Link>

        {/* Navigation Links - Fully Displayed & Fluidly Adapted on Mobile & Desktop */}
        <div className="flex items-center gap-0.5 xs:gap-1 sm:gap-2 p-0.5 sm:p-0 rounded-full bg-white/[0.04] sm:bg-transparent border border-white/[0.07] sm:border-transparent shrink-0">
          {/* Beranda */}
          <Link
            href="/"
            className={`px-2 xs:px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[10.5px] xs:text-[11px] sm:text-xs font-medium transition-all duration-200 flex items-center gap-1 active:scale-95 ${
              isHome
                ? "text-white bg-white/[0.15] sm:bg-white/[0.12] border border-white/20 shadow-xs"
                : "text-stone-300 hover:text-white hover:bg-white/[0.05]"
            }`}
          >
            <HomeIcon className="w-3 h-3 hidden md:inline text-sky-400" />
            <span>Beranda</span>
          </Link>

          {/* Tentang */}
          <Link
            href="/about"
            className={`px-2 xs:px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[10.5px] xs:text-[11px] sm:text-xs font-medium transition-all duration-200 flex items-center gap-1 active:scale-95 ${
              isAbout
                ? "text-white bg-white/[0.15] sm:bg-white/[0.12] border border-white/20 shadow-xs"
                : "text-stone-300 hover:text-white hover:bg-white/[0.05]"
            }`}
          >
            <Sparkles className="w-3 h-3 hidden md:inline text-amber-400" />
            <span>Tentang</span>
          </Link>

          {/* Studio Photobooth (Hero Action Button) */}
          <Link
            href="/booth"
            className={`px-2.5 xs:px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[10.5px] xs:text-[11px] sm:text-xs font-semibold transition-all duration-200 flex items-center gap-1 active:scale-95 ${
              isBooth
                ? "text-white bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600 border border-sky-400/40 shadow-[0_0_12px_rgba(56,189,248,0.35)]"
                : "text-sky-300 bg-sky-500/15 sm:bg-sky-500/10 border border-sky-500/30 sm:border-sky-500/25 hover:bg-sky-500/25 hover:text-white shadow-[0_0_8px_rgba(56,189,248,0.15)]"
            }`}
          >
            <Camera className="w-3 h-3 text-sky-200 shrink-0" />
            <span>
              Studio<span className="hidden sm:inline"> Photobooth</span>
            </span>
          </Link>

          {/* Kontak */}
          <Link
            href="/contact"
            className={`px-2 xs:px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[10.5px] xs:text-[11px] sm:text-xs font-medium transition-all duration-200 flex items-center gap-1 active:scale-95 ${
              isContact
                ? "text-white bg-white/[0.15] sm:bg-white/[0.12] border border-white/20 shadow-xs"
                : "text-stone-300 hover:text-white hover:bg-white/[0.05]"
            }`}
          >
            <Mail className="w-3 h-3 hidden md:inline text-emerald-400" />
            <span>Kontak</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}

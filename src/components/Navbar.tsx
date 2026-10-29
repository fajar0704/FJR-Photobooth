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
  const isContact = pathname === "/contact" || pathname === "/kontak";

  return (
    <header
      className={`fixed top-0 inset-x-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/92 backdrop-blur-2xl border-b border-slate-200/90 shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
          : "bg-white/80 backdrop-blur-xl border-b border-slate-200/60 shadow-[0_2px_14px_rgba(0,0,0,0.03)]"
      }`}
    >
      {/* Specular Ambient Glow Beam along bottom border */}
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/25 to-transparent pointer-events-none" />

      <nav className="w-full max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-2 sm:gap-4">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 sm:gap-3 group select-none py-1 shrink-0"
        >
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-600 via-sky-500 to-indigo-600 p-[1.5px] shadow-sm group-hover:shadow-[0_0_16px_rgba(56,189,248,0.35)] transition-all duration-300 shrink-0">
            <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center text-blue-600 group-hover:bg-blue-50 transition-colors">
              <Camera className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm sm:text-base font-heading font-extrabold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors leading-none">
              RuangMomen
            </span>
            <span className="text-[9.5px] sm:text-[10px] font-mono tracking-[0.22em] uppercase text-blue-600 font-bold mt-1">
              Photobooth
            </span>
          </div>
        </Link>

        {/* Navigation Links - Clean Minimalist Text Navigation (No Capsule) */}
        <div className="flex items-center gap-5 sm:gap-8">
          {/* Beranda */}
          <Link
            href="/"
            className={`relative py-1 text-xs sm:text-sm transition-colors duration-200 flex items-center gap-1.5 ${
              isHome
                ? "text-blue-600 font-bold"
                : "text-slate-600 hover:text-slate-950 font-medium"
            }`}
          >
            <HomeIcon className={`w-3.5 h-3.5 hidden sm:inline ${isHome ? "text-blue-600" : "text-slate-400"}`} />
            <span>Beranda</span>
            {isHome && (
              <span className="absolute -bottom-1 inset-x-0 h-[2px] bg-blue-600 rounded-full" />
            )}
          </Link>

          {/* Tentang */}
          <Link
            href="/about"
            className={`relative py-1 text-xs sm:text-sm transition-colors duration-200 flex items-center gap-1.5 ${
              isAbout
                ? "text-blue-600 font-bold"
                : "text-slate-600 hover:text-slate-950 font-medium"
            }`}
          >
            <Sparkles className={`w-3.5 h-3.5 hidden sm:inline ${isAbout ? "text-amber-500" : "text-slate-400"}`} />
            <span>Tentang</span>
            {isAbout && (
              <span className="absolute -bottom-1 inset-x-0 h-[2px] bg-blue-600 rounded-full" />
            )}
          </Link>

          {/* Kontak */}
          <Link
            href="/contact"
            className={`relative py-1 text-xs sm:text-sm transition-colors duration-200 flex items-center gap-1.5 ${
              isContact
                ? "text-blue-600 font-bold"
                : "text-slate-600 hover:text-slate-950 font-medium"
            }`}
          >
            <Mail className={`w-3.5 h-3.5 hidden sm:inline ${isContact ? "text-emerald-600" : "text-slate-400"}`} />
            <span>Kontak</span>
            {isContact && (
              <span className="absolute -bottom-1 inset-x-0 h-[2px] bg-blue-600 rounded-full" />
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
}

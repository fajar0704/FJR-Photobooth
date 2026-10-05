"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Camera, Home as HomeIcon, Menu, X, Mail } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isHome = pathname === "/";
  const isAbout = pathname === "/about" || pathname === "/tentang";
  const isBooth = pathname === "/booth";

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? "bg-[#faf8f5]/95 backdrop-blur-md border-b border-[#e8e2d8] py-3.5 shadow-xs"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-12 flex justify-between items-center">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="text-lg sm:text-xl font-heading font-black text-stone-950 tracking-tight flex items-center gap-2 group"
        >
          <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-stone-950 text-white flex items-center justify-center text-xs font-mono font-bold tracking-tighter group-hover:bg-[#c83d3d] transition-colors">
            RM
          </span>
          <span className="tracking-tight">RuangMomen</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8 text-sm font-medium items-center">
          <Link
            href="/"
            className={`transition-colors flex items-center gap-1.5 py-1 ${
              isHome
                ? "text-stone-950 font-bold border-b-2 border-stone-950"
                : "text-stone-600 hover:text-stone-950"
            }`}
          >
            <HomeIcon className="w-3.5 h-3.5" />
            <span>Beranda</span>
          </Link>

          <Link
            href="/about"
            className={`transition-colors py-1 ${
              isAbout
                ? "text-stone-950 font-bold border-b-2 border-stone-950"
                : "text-stone-600 hover:text-stone-950"
            }`}
          >
            <span>Tentang</span>
          </Link>

          <Link
            href="/booth"
            className={`transition-colors flex items-center gap-1.5 py-1 font-semibold ${
              isBooth
                ? "text-[#c83d3d] font-bold border-b-2 border-[#c83d3d]"
                : "text-stone-800 hover:text-[#c83d3d]"
            }`}
          >
            <Camera className="w-4 h-4 text-[#c83d3d]" />
            <span>Studio Photobooth</span>
          </Link>

          <Link
            href="/#contact"
            className="text-stone-600 hover:text-stone-950 transition-colors py-1"
          >
            <span>Kontak</span>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-stone-800 hover:bg-stone-200/60 transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#faf8f5] border-b border-[#e8e2d8] px-4 pt-3 pb-5 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2 font-medium text-stone-800 text-sm">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center gap-2.5 p-2.5 rounded-xl transition-colors ${
                isHome
                  ? "bg-stone-200/70 text-stone-950 font-bold"
                  : "hover:bg-stone-200/50"
              }`}
            >
              <HomeIcon className="w-4 h-4" />
              <span>Beranda</span>
            </Link>

            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center gap-2.5 p-2.5 rounded-xl transition-colors ${
                isAbout
                  ? "bg-stone-200/70 text-stone-950 font-bold"
                  : "hover:bg-stone-200/50"
              }`}
            >
              <span>Tentang RuangMomen</span>
            </Link>

            <Link
              href="/booth"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center gap-2.5 p-2.5 rounded-xl transition-colors ${
                isBooth
                  ? "bg-stone-200/70 text-[#c83d3d] font-bold"
                  : "hover:bg-stone-200/50 font-semibold text-[#c83d3d]"
              }`}
            >
              <Camera className="w-4 h-4" />
              <span>Studio Photobooth</span>
            </Link>

            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-stone-200/50 transition-colors"
            >
              <Mail className="w-4 h-4 text-stone-500" />
              <span>Kontak & Lokasi</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

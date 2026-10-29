"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Camera,
  Mail,
  Phone,
  ArrowRight,
  Maximize2,
  Clock,
  Layers,
  Palette,
  Download,
  SlidersHorizontal,
  Sparkles,
  Calendar,
  CheckCircle2,
  Wand2,
  Type,
} from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { BACKGROUND_THEMES, PHOTO_FILTERS } from "@/utils/photoboothTypes";

export default function Home() {
  const [selectedThemeId, setSelectedThemeId] = useState("studio-white");
  const [selectedFilterId, setSelectedFilterId] = useState("normal");
  const [customCaption, setCustomCaption] = useState("Sweet Memories Together ✨");
  const [activeShowcaseTab, setActiveShowcaseTab] = useState<"frame" | "filter" | "caption">("frame");

  const currentTheme =
    BACKGROUND_THEMES.find((t) => t.id === selectedThemeId) ||
    BACKGROUND_THEMES[1];

  const currentFilter =
    PHOTO_FILTERS.find((f) => f.id === selectedFilterId) ||
    PHOTO_FILTERS[0];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden selection:bg-blue-600 selection:text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex flex-col justify-center pt-20 sm:pt-32 pb-12 sm:pb-24 border-b border-slate-200 bg-slate-950 overflow-hidden">
        {/* Background Studio Wallpaper - Highlighted with Authentic Studio Contrast */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
          <Image
            src="/images/studio_wallpaper.jpg"
            alt="RuangMomen Modern Studio Wallpaper"
            fill
            priority
            unoptimized
            className="object-cover object-center opacity-85 scale-100 transition-all duration-700 filter contrast-[1.08] brightness-[0.88] saturate-[1.12]"
          />

          {/* Cinematic Vignette Overlay - Keeps softbox, camera, & studio lighting crisp while giving center contrast for text */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(15,23,42,0.4)_0%,_rgba(15,23,42,0.78)_100%)]" />

          {/* Top Soft Vignette under Navbar */}
          <div className="absolute inset-x-0 top-0 h-28 sm:h-32 bg-gradient-to-b from-black/50 via-black/15 to-transparent pointer-events-none" />

          {/* Bottom Gradient Transition to Light Theme Section */}
          <div className="absolute inset-x-0 bottom-0 h-28 sm:h-36 bg-gradient-to-t from-slate-50 via-slate-50/80 to-transparent pointer-events-none" />
        </div>

        {/* Studio Key Light / Ambient Glows */}
        <div className="absolute inset-0 pointer-events-none z-1 bg-[radial-gradient(ellipse_65%_50%_at_50%_15%,_rgba(56,189,248,0.18)_0%,_rgba(37,99,235,0.06)_50%,_transparent_80%)] animate-pulse-cyan" />
        <div className="absolute -top-10 left-1/4 w-[500px] h-[380px] bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.18)_0%,_transparent_70%)] pointer-events-none blur-3xl z-1 animate-float-slow" />
        <div className="absolute top-1/3 -right-16 w-[550px] h-[450px] bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.2)_0%,_transparent_70%)] pointer-events-none blur-3xl z-1 animate-float-reverse" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 md:px-12 flex flex-col items-center text-center max-w-5xl animate-page-enter">

          {/* Heading with Fluid Responsive Scaling and Radiant Luminous Gradient */}
          <h1 className="w-full text-center mx-auto text-3xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[5.5rem] font-heading font-black text-white leading-[1.12] sm:leading-[1.02] tracking-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]">
            <span className="block text-center hover:scale-[1.01] transition-transform duration-300">Photobooth</span>
            <span className="block text-center mt-1 sm:mt-2 bg-gradient-to-r from-sky-300 via-blue-400 to-indigo-300 bg-clip-text text-transparent font-serif italic font-normal drop-shadow-[0_0_40px_rgba(56,189,248,0.65)] animate-gradient-shift">
              RuangMomen
            </span>
          </h1>

          {/* Quick Specifications Cards: Frosted Glass Studio Badges Floating on the Wallpaper */}
          <div className="mt-5 sm:mt-8 w-full max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto px-1 sm:px-0">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
              {/* Card 1: 3, 4, & 6 Foto */}
              <div className="relative group overflow-hidden rounded-xl sm:rounded-2xl p-2.5 sm:px-3.5 sm:py-3 bg-white/92 backdrop-blur-xl border border-white/80 hover:border-sky-400 hover:bg-white transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.25)] hover:shadow-sky-500/20 hover:-translate-y-1 flex items-center text-left cursor-default">
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-sky-400 to-transparent pointer-events-none group-hover:via-sky-500 transition-all duration-300" />
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-sky-50 border border-sky-200/80 flex items-center justify-center shrink-0 text-blue-600 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-sky-100 group-hover:border-sky-400 transition-all duration-300 shadow-xs">
                  <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="ml-2 sm:ml-2.5 min-w-0">
                  <div className="text-[8px] sm:text-[9.5px] font-mono uppercase tracking-wider text-sky-600 font-bold leading-none">Layout</div>
                  <div className="text-[11px] sm:text-[13px] font-bold text-slate-900 leading-tight mt-0.5 truncate">3, 4, 6 Foto</div>
                </div>
              </div>

              {/* Card 2: Timer 3s, 5s, 10s */}
              <div className="relative group overflow-hidden rounded-xl sm:rounded-2xl p-2.5 sm:px-3.5 sm:py-3 bg-white/92 backdrop-blur-xl border border-white/80 hover:border-amber-400 hover:bg-white transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.25)] hover:shadow-amber-500/20 hover:-translate-y-1 flex items-center text-left cursor-default">
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent pointer-events-none group-hover:via-amber-500 transition-all duration-300" />
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-amber-50 border border-amber-200/80 flex items-center justify-center shrink-0 text-amber-600 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-amber-100 group-hover:border-amber-400 transition-all duration-300 shadow-xs">
                  <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="ml-2 sm:ml-2.5 min-w-0">
                  <div className="text-[8px] sm:text-[9.5px] font-mono uppercase tracking-wider text-amber-600 font-bold leading-none">Shutter</div>
                  <div className="text-[11px] sm:text-[13px] font-bold text-slate-900 leading-tight mt-0.5 truncate">Timer 3s-10s</div>
                </div>
              </div>

              {/* Card 3: 9 Warna Frame */}
              <div className="relative group overflow-hidden rounded-xl sm:rounded-2xl p-2.5 sm:px-3.5 sm:py-3 bg-white/92 backdrop-blur-xl border border-white/80 hover:border-purple-400 hover:bg-white transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.25)] hover:shadow-purple-500/20 hover:-translate-y-1 flex items-center text-left cursor-default">
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-purple-400 to-transparent pointer-events-none group-hover:via-purple-500 transition-all duration-300" />
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-purple-50 border border-purple-200/80 flex items-center justify-center shrink-0 text-purple-600 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-purple-100 group-hover:border-purple-400 transition-all duration-300 shadow-xs">
                  <Palette className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="ml-2 sm:ml-2.5 min-w-0">
                  <div className="text-[8px] sm:text-[9.5px] font-mono uppercase tracking-wider text-purple-600 font-bold leading-none">Studio Palet</div>
                  <div className="text-[11px] sm:text-[13px] font-bold text-slate-900 leading-tight mt-0.5 truncate">9 Warna Frame</div>
                </div>
              </div>

              {/* Card 4: Unduh HD 300 DPI */}
              <div className="relative group overflow-hidden rounded-xl sm:rounded-2xl p-2.5 sm:px-3.5 sm:py-3 bg-white/92 backdrop-blur-xl border border-white/80 hover:border-emerald-400 hover:bg-white transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.25)] hover:shadow-emerald-500/20 hover:-translate-y-1 flex items-center text-left cursor-default">
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent pointer-events-none group-hover:via-emerald-500 transition-all duration-300" />
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center shrink-0 text-emerald-600 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-emerald-100 group-hover:border-emerald-400 transition-all duration-300 shadow-xs">
                  <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="ml-2 sm:ml-2.5 min-w-0">
                  <div className="text-[8px] sm:text-[9.5px] font-mono uppercase tracking-wider text-emerald-600 font-bold leading-none">Resolusi</div>
                  <div className="text-[11px] sm:text-[13px] font-bold text-slate-900 leading-tight mt-0.5 truncate">Unduh HD 300</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero CTAs: Dynamic Shimmer & Smooth Pill Buttons */}
          <div className="mt-5 sm:mt-9 flex flex-col sm:flex-row gap-2.5 sm:gap-4 w-full max-w-sm sm:max-w-none mx-auto justify-center items-stretch sm:items-center px-2 sm:px-0">
            <Link
              href="/booth"
              className="relative overflow-hidden w-full sm:w-auto px-6 py-3 sm:px-9 sm:py-4 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600 hover:from-blue-500 hover:via-sky-500 hover:to-indigo-500 hover:scale-[1.03] hover:-translate-y-0.5 active:scale-[0.98] rounded-full transition-all duration-300 shadow-xl shadow-blue-600/35 hover:shadow-blue-600/50 border border-sky-400/35 text-center flex items-center justify-center gap-2 min-h-[46px] sm:min-h-[52px] cursor-pointer group"
            >
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />
              <Maximize2 className="w-4 h-4 text-sky-100 shrink-0 group-hover:scale-110 transition-transform duration-300" />
              <span>Buka Full Screen Studio</span>
            </Link>
            <Link
              href="/about"
              className="w-full sm:w-auto px-6 py-3 sm:px-9 sm:py-4 text-xs sm:text-sm font-bold text-slate-800 bg-white/95 hover:bg-white border border-white/90 hover:text-slate-950 hover:scale-[1.03] hover:-translate-y-0.5 active:scale-[0.98] rounded-full transition-all duration-300 text-center flex items-center justify-center gap-2 shadow-xl shadow-black/20 min-h-[46px] sm:min-h-[52px] cursor-pointer"
            >
              <span>Tentang RuangMomen</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 3 Langkah Sederhana Section */}
      <section className="py-14 sm:py-28 bg-slate-100/70 border-y border-slate-200/80 relative overflow-hidden">
        {/* Subtle Background Glow (Blue Gradasi) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.07)_0%,_transparent_70%)] pointer-events-none blur-3xl" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 md:px-12 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-blue-600 text-[11px] sm:text-xs font-mono tracking-widest uppercase mb-3.5 sm:mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
              <span>Alur Penggunaan Mudah</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-black text-slate-900 tracking-tight leading-[1.12]">
              3 Langkah Sederhana <br />
              <span className="bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600 bg-clip-text text-transparent font-serif italic font-normal">
                Menghasilkan Strip Foto Indah.
              </span>
            </h2>
            <p className="mt-3 text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed">
              Tanpa perlu aplikasi rumit atau registrasi akun. Cukup buka studio,
              atur format yang diinginkan, dan abadikan setiap momen spontan.
            </p>
          </div>

          {/* Stepper Container with Desktop Connector Line */}
          <div className="relative">
            {/* Desktop Step Connector Line (Blue Gradasi) */}
            <div className="hidden md:block absolute top-[48px] left-[15%] right-[15%] h-[2px] z-0 pointer-events-none">
              <div className="w-full h-full bg-gradient-to-r from-blue-600/20 via-sky-400/60 to-indigo-600/20" />
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-sky-500 shadow-[0_0_12px_rgba(56,189,248,0.8)] animate-ping" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8 relative z-10">
              {/* Step 1 */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-slate-200/80 hover:border-blue-400/60 hover:-translate-y-1.5 hover:shadow-[0_20px_48px_rgba(37,99,235,0.08)] transition-all duration-300 flex flex-col justify-between group shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
                <div>
                  <div className="flex items-center justify-between mb-5 sm:mb-6">
                    <span className="text-xs font-mono font-bold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl bg-slate-100 text-slate-800 border border-slate-200/80 shadow-xs group-hover:border-blue-200 transition-colors">
                      Langkah 01
                    </span>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-blue-50/80 border border-blue-200/80 flex items-center justify-center text-blue-600 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-blue-100 group-hover:border-blue-400 transition-all duration-300 shadow-xs">
                      <SlidersHorizontal className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </div>

                  <h3 className="text-base sm:text-xl font-heading font-black text-slate-900 mb-1.5 sm:mb-2 group-hover:text-blue-600 transition-colors">
                    Pilih Format & Timer
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5">
                    Pilih jumlah foto yang Anda sukai (3, 4, atau 6 frame) dan
                    atur durasi hitung mundur (3s, 5s, atau 10s) untuk bersiap pose.
                  </p>

                  {/* Interactive Mini Mockup 1: Format Selector */}
                  <div className="my-3 sm:my-4 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200/90 space-y-2 sm:space-y-2.5 group-hover:border-blue-300 transition-colors">
                    <div className="flex items-center justify-between text-[10px] font-mono text-slate-500">
                      <span>FORMAT REEL</span>
                      <span className="text-blue-600 font-bold">4-CUTS TERPILIH</span>
                    </div>
                    <div className="grid grid-cols-3 gap-1 sm:gap-1.5 text-center text-xs font-bold">
                      <span className="py-1.5 rounded-lg bg-white text-slate-600 border border-slate-200 shadow-xs">3 Foto</span>
                      <span className="py-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xs">4 Foto ✓</span>
                      <span className="py-1.5 rounded-lg bg-white text-slate-600 border border-slate-200 shadow-xs">6 Foto</span>
                    </div>
                    <div className="flex items-center justify-between pt-1 text-[10px] font-mono text-slate-500">
                      <span>TIMER: <strong className="text-slate-900">5 Detik</strong></span>
                      <span className="flex items-center gap-1 text-emerald-600 font-semibold">● Mirror Selfie On</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3.5 sm:pt-4 border-t border-slate-100 flex flex-wrap gap-1.5 text-[10px] sm:text-[11px] font-mono text-slate-600">
                  <span className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200/80">
                    3, 4, & 6 Frame
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200/80">
                    Timer 3s • 5s • 10s
                  </span>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-slate-200/80 hover:border-blue-400/60 hover:-translate-y-1.5 hover:shadow-[0_20px_48px_rgba(37,99,235,0.08)] transition-all duration-300 flex flex-col justify-between group shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
                <div>
                  <div className="flex items-center justify-between mb-5 sm:mb-6">
                    <span className="text-xs font-mono font-bold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20">
                      Langkah 02
                    </span>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-amber-50/80 border border-amber-200/80 flex items-center justify-center text-amber-600 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-amber-100 group-hover:border-amber-400 transition-all duration-300 shadow-xs">
                      <Camera className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </div>

                  <h3 className="text-base sm:text-xl font-heading font-black text-slate-900 mb-1.5 sm:mb-2 group-hover:text-blue-600 transition-colors">
                    Berpose & Jepret Spontan
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5">
                    Arahkan tatapan ke kamera Anda. Studio memandu dengan hitungan mundur
                    suara beeps dan efek kilat flash shutter photobox yang nyata.
                  </p>

                  {/* Interactive Mini Mockup 2: Camera Viewfinder */}
                  <div className="my-3 sm:my-4 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200/90 group-hover:border-blue-300 transition-colors">
                    <div className="aspect-[16/9] rounded-xl bg-stone-950 relative flex items-center justify-center border border-white/10 overflow-hidden shadow-inner">
                      {/* Corner framing brackets */}
                      <div className="absolute top-1.5 left-1.5 w-3 h-3 border-t border-l border-sky-400/80" />
                      <div className="absolute top-1.5 right-1.5 w-3 h-3 border-t border-r border-sky-400/80" />
                      <div className="absolute bottom-1.5 left-1.5 w-3 h-3 border-b border-l border-sky-400/80" />
                      <div className="absolute bottom-1.5 right-1.5 w-3 h-3 border-b border-r border-sky-400/80" />
                      {/* Live REC badge with animated indicator */}
                      <div className="absolute top-2 left-2.5 flex items-center gap-1 text-[9px] font-mono font-bold text-sky-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping" />
                        <span>LIVE STUDIO</span>
                      </div>
                      {/* Animated Spring Count */}
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-mono font-black text-xs sm:text-sm flex items-center justify-center shadow-lg shadow-blue-500/30 animate-count-pop">
                        3
                      </div>
                      <div className="absolute bottom-1.5 text-[9px] font-mono text-stone-300">
                        ✨ Senyum Siap Pose
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-3.5 sm:pt-4 border-t border-slate-100 flex flex-wrap gap-1.5 text-[10px] sm:text-[11px] font-mono text-slate-600">
                  <span className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200/80">
                    Webcam Mirror Mode
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200/80">
                    Flash Shutter FX
                  </span>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-slate-200/80 hover:border-blue-400/60 hover:-translate-y-1.5 hover:shadow-[0_20px_48px_rgba(37,99,235,0.08)] transition-all duration-300 flex flex-col justify-between group shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
                <div>
                  <div className="flex items-center justify-between mb-5 sm:mb-6">
                    <span className="text-xs font-mono font-bold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl bg-slate-100 text-slate-800 border border-slate-200/80 shadow-xs group-hover:border-blue-200 transition-colors">
                      Langkah 03
                    </span>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-purple-50/80 border border-purple-200/80 flex items-center justify-center text-purple-600 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-purple-100 group-hover:border-purple-400 transition-all duration-300 shadow-xs">
                      <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </div>

                  <h3 className="text-base sm:text-xl font-heading font-black text-slate-900 mb-1.5 sm:mb-2 group-hover:text-blue-600 transition-colors">
                    Pilih Frame & Unduh HD
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5">
                    Kustomisasi warna frame dari 9 palet aesthetic studio, tulis
                    pesan kenangan atau tanggal spesial, lalu unduh strip foto 300 DPI.
                  </p>

                  {/* Interactive Mini Mockup 3: Palette Dots & Download */}
                  <div className="my-3 sm:my-4 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200/90 space-y-2 sm:space-y-2.5 group-hover:border-blue-300 transition-colors">
                    <div className="flex items-center justify-between text-[10px] font-mono text-slate-500">
                      <span>9 WARNA FRAME</span>
                      <span className="text-emerald-600 font-bold">HD 300 DPI</span>
                    </div>
                    {/* 9 Palette color dots */}
                    <div className="flex items-center justify-between px-2 sm:px-2.5 py-1.5 sm:py-2 bg-white rounded-lg sm:rounded-xl border border-slate-200 shadow-xs">
                      <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#18181b] border border-stone-600 ring-2 ring-blue-500 animate-pulse" />
                      <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#faf8f5] border border-stone-300" />
                      <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#f4ebe1] border border-stone-300" />
                      <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#dbe8f5] border border-stone-300" />
                      <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#e3ebd9] border border-stone-300" />
                      <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#fde8ec] border border-stone-300" />
                      <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#ede5f7] border border-stone-300" />
                      <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#1c2438] border border-stone-500" />
                      <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#2a2421] border border-stone-500" />
                    </div>
                    <div className="flex items-center justify-between pt-1 text-[10px] font-mono">
                      <span className="text-slate-600">Format: PNG Siap Cetak</span>
                      <span className="text-blue-600 font-bold">Unduh Cepat ➔</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3.5 sm:pt-4 border-t border-slate-100 flex flex-wrap gap-1.5 text-[10px] sm:text-[11px] font-mono text-slate-600">
                  <span className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200/80">
                    9 Warna Frame
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200/80">
                    Unduh PNG 300 DPI
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Studio Launcher CTA Banner with Shimmer & Floating Glow */}
            <div className="mt-8 sm:mt-16 text-center px-1">
              <Link
                href="/booth"
                className="inline-flex max-w-full items-center justify-center gap-2 sm:gap-2.5 font-bold text-xs sm:text-base text-white bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600 hover:from-blue-500 hover:via-sky-500 hover:to-indigo-500 px-5 sm:px-10 py-3 sm:py-4 rounded-full transition-all duration-300 shadow-xl shadow-blue-600/30 hover:shadow-blue-600/45 hover:scale-[1.03] hover:-translate-y-0.5 active:scale-[0.98] cursor-pointer group"
              >
                <Camera className="w-4 h-4 shrink-0 group-hover:rotate-12 transition-transform duration-300" />
                <span>Mulai di Studio Sekarang</span>
                <ArrowRight className="w-4 h-4 shrink-0 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase 9 Warna Frame Studio Section */}
      <section className="py-14 sm:py-28 bg-white border-b border-slate-200/80 relative overflow-hidden">
        {/* Subtle decorative background radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-blue-50/40 via-sky-50/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-14 gap-4 sm:gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-white border border-slate-200 text-blue-600 text-[10px] sm:text-xs font-mono tracking-widest uppercase mb-2.5 sm:mb-3.5 shadow-xs font-semibold">
                <Palette className="w-3.5 h-3.5 text-blue-600" />
                Koleksi Palet & Studio Customizer
              </div>
              <h2 className="text-xl sm:text-4xl font-heading font-black text-slate-900 tracking-tight">
                Simulasi Frame, Filter <br />
                <span className="bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600 bg-clip-text text-transparent font-serif italic font-normal">
                  & Kustomisasi Strip Real-Time.
                </span>
              </h2>
            </div>
            <p className="text-slate-600 text-xs sm:text-sm max-w-md leading-relaxed">
              Pilih dari 9 warna frame kertas studio analog, ganti efek filter foto,
              dan ubah teks caption untuk melihat simulasi hasil strip foto secara instan.
            </p>
          </div>

          {/* Interactive Frame Showcase Grid + Live Strip Mockup */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left: Interactive Controls (Frame, Filter, Caption) */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              {/* Showcase Tab Switcher - Luxurious Frosted Capsule Bar */}
              <div className="flex p-1 sm:p-1.5 rounded-full bg-slate-100/90 backdrop-blur-md border border-slate-200/80 gap-1 sm:gap-1.5 shadow-xs">
                <button
                  type="button"
                  onClick={() => setActiveShowcaseTab("frame")}
                  className={`flex-1 py-2 sm:py-2.5 px-2 sm:px-4 rounded-full text-[11px] sm:text-xs font-bold transition-all duration-300 flex items-center justify-center gap-1 sm:gap-1.5 cursor-pointer whitespace-nowrap active:scale-95 ${
                    activeShowcaseTab === "frame"
                      ? "bg-white text-blue-600 shadow-sm border border-slate-200/90 font-bold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-white/70 font-medium"
                  }`}
                >
                  <Palette className="w-3.5 h-3.5 shrink-0" />
                  <span><span className="hidden sm:inline">9 Warna </span>Frame</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveShowcaseTab("filter")}
                  className={`flex-1 py-2 sm:py-2.5 px-2 sm:px-4 rounded-full text-[11px] sm:text-xs font-bold transition-all duration-300 flex items-center justify-center gap-1 sm:gap-1.5 cursor-pointer whitespace-nowrap active:scale-95 ${
                    activeShowcaseTab === "filter"
                      ? "bg-white text-blue-600 shadow-sm border border-slate-200/90 font-bold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-white/70 font-medium"
                  }`}
                >
                  <Wand2 className="w-3.5 h-3.5 shrink-0" />
                  <span>Filter<span className="hidden sm:inline"> Foto</span></span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveShowcaseTab("caption")}
                  className={`flex-1 py-2 sm:py-2.5 px-2 sm:px-4 rounded-full text-[11px] sm:text-xs font-bold transition-all duration-300 flex items-center justify-center gap-1 sm:gap-1.5 cursor-pointer whitespace-nowrap active:scale-95 ${
                    activeShowcaseTab === "caption"
                      ? "bg-white text-blue-600 shadow-sm border border-slate-200/90 font-bold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-white/70 font-medium"
                  }`}
                >
                  <Type className="w-3.5 h-3.5 shrink-0" />
                  <span>Caption<span className="hidden sm:inline"> Teks</span></span>
                </button>
              </div>

              {/* Tab 1: 9 Frame Colors */}
              {activeShowcaseTab === "frame" && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 animate-fade-in">
                  {BACKGROUND_THEMES.map((theme) => {
                    const isSelected = selectedThemeId === theme.id;
                    return (
                      <button
                        key={theme.id}
                        onClick={() => setSelectedThemeId(theme.id)}
                        className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl border text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:scale-[1.02] flex flex-col justify-between cursor-pointer group ${
                          isSelected
                            ? "border-blue-600 bg-gradient-to-br from-blue-50/90 to-sky-50/50 ring-2 ring-blue-500/30 shadow-md shadow-blue-500/10"
                            : "border-slate-200/80 bg-white hover:border-slate-300 hover:bg-slate-50/80 shadow-xs"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2.5 sm:mb-3">
                          <div
                            className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl border shadow-xs flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                            style={{
                              backgroundColor: theme.bgValue,
                              borderColor: theme.borderColor || "#cbd5e1",
                            }}
                          >
                            {isSelected && (
                              <CheckCircle2
                                className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-scale-up"
                                style={{
                                  color:
                                    theme.textColor === "#ffffff" ||
                                    theme.textColor === "#f8fafc"
                                      ? "#ffffff"
                                      : "#18181b",
                                }}
                              />
                            )}
                          </div>
                          {theme.hasFilmHoles && (
                            <span className="text-[9px] sm:text-[10px] font-mono px-1.5 sm:px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200/80 font-semibold">
                              35mm
                            </span>
                          )}
                        </div>
                        <div>
                          <div className="font-bold text-xs sm:text-sm text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
                            {theme.name}
                          </div>
                          <div className="text-[10px] sm:text-[11px] font-mono text-slate-500 mt-0.5 truncate">
                            {theme.bgValue}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Tab 2: Photo Filters */}
              {activeShowcaseTab === "filter" && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 animate-fade-in">
                  {PHOTO_FILTERS.map((filter) => {
                    const isSelected = selectedFilterId === filter.id;
                    return (
                      <button
                        key={filter.id}
                        onClick={() => setSelectedFilterId(filter.id)}
                        className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl border text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:scale-[1.02] flex flex-col justify-between cursor-pointer group ${
                          isSelected
                            ? "border-blue-600 bg-gradient-to-br from-blue-50/90 to-sky-50/50 ring-2 ring-blue-500/30 shadow-md shadow-blue-500/10"
                            : "border-slate-200/80 bg-white hover:border-slate-300 hover:bg-slate-50/80 shadow-xs"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2.5 sm:mb-3">
                          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-slate-100/90 border border-slate-200/80 flex items-center justify-center text-xs font-mono font-bold text-slate-700 transition-transform duration-300 group-hover:scale-110 shadow-xs">
                            {filter.id === "bw" ? "B&W" : filter.id === "warm" ? "☀️" : "FX"}
                          </div>
                          {isSelected && (
                            <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-center text-[10px] font-bold shadow-xs animate-scale-up">
                              ✓
                            </span>
                          )}
                        </div>
                        <div>
                          <div className="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-blue-600 transition-colors">
                            {filter.name}
                          </div>
                          <div className="text-[10px] sm:text-[11px] font-mono text-slate-500 mt-0.5 line-clamp-1">
                            {filter.id === "normal"
                              ? "Tone Asli Otentik"
                              : filter.id === "bw"
                              ? "Hitam Putih Klasik"
                              : "Tone Nuansa Studio"}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Tab 3: Text & Caption Customizer */}
              {activeShowcaseTab === "caption" && (
                <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-slate-50/80 border border-slate-200/80 space-y-4 sm:space-y-5 animate-fade-in shadow-xs backdrop-blur-sm">
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-700 mb-2 font-bold tracking-wider">
                      Tulis Caption Strip:
                    </label>
                    <input
                      type="text"
                      maxLength={32}
                      value={customCaption}
                      onChange={(e) => setCustomCaption(e.target.value)}
                      placeholder="Tuliskan pesan kenangan..."
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl bg-white border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/15 text-slate-900 text-xs sm:text-sm outline-none transition-all placeholder:text-slate-400 shadow-xs"
                    />
                  </div>

                  <div>
                    <span className="block text-[10px] sm:text-[11px] font-mono uppercase text-slate-500 mb-2 sm:mb-2.5 font-semibold">
                      Preset Caption Favorit:
                    </span>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {[
                        "Sweet Memories Together ✨",
                        "Seoul Photobox 2026 📸",
                        "Best Friends Forever 💖",
                        "Aesthetic Moments Only 🎞️",
                        "Friday Night Studio 🌙",
                      ].map((preset) => (
                        <button
                          key={preset}
                          type="button"
                          onClick={() => setCustomCaption(preset)}
                          className={`text-[11px] sm:text-xs px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full border transition-all duration-200 hover:scale-105 cursor-pointer active:scale-95 ${
                            customCaption === preset
                              ? "border-blue-600 bg-blue-50 text-blue-700 font-bold shadow-xs"
                              : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50 shadow-xs"
                          }`}
                        >
                          {preset}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom Status Bar */}
              <div className="pt-1 sm:pt-2">
                <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-slate-50/90 border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs shadow-xs">
                  <div className="text-slate-600 flex flex-wrap items-center justify-center sm:justify-start gap-1.5 sm:gap-2 text-[11px] sm:text-xs">
                    <span>Frame: <strong className="text-slate-900">{currentTheme.name}</strong></span>
                    <span className="text-slate-300">•</span>
                    <span>Filter: <strong className="text-blue-600">{currentFilter.name}</strong></span>
                  </div>
                  <Link
                    href="/booth"
                    className="relative overflow-hidden inline-flex items-center gap-1.5 sm:gap-2 font-bold text-white bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600 hover:from-blue-500 hover:via-sky-500 hover:to-indigo-500 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-300 cursor-pointer shadow-md shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5 active:scale-95 group text-xs"
                  >
                    <span className="relative z-10 flex items-center gap-1.5">
                      <span>Coba di Studio</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right: Live Realistic Strip Preview Mockup on Studio Lightbox Pedestal */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center w-full order-first lg:order-last">
              <div className="w-full max-w-sm p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-slate-50 to-slate-100/60 border border-slate-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex flex-col items-center relative overflow-hidden">
                {/* Subtle ambient light gradient inside pedestal */}
                <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-blue-500/5 via-sky-400/5 to-transparent pointer-events-none" />

                <div className="mb-3 sm:mb-4 flex items-center justify-between w-52 sm:w-68 text-[10px] sm:text-[11px] font-mono text-slate-500 px-1">
                  <span className="flex items-center gap-1.5 font-semibold text-slate-700">
                    <Sparkles className="w-3.5 h-3.5 text-blue-600 animate-pulse" /> LIVE STRIP PREVIEW
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 font-bold flex items-center gap-1 shadow-xs text-[9px] sm:text-[10px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    {currentFilter.name}
                  </span>
                </div>

                <div className="relative flex justify-center">
                  {/* Atmospheric Studio Spotlight behind Strip */}
                  <div className="absolute -inset-6 bg-gradient-to-tr from-blue-500/15 via-sky-400/10 to-indigo-500/15 rounded-3xl blur-2xl -z-10 animate-pulse-cyan pointer-events-none" />

                  {/* Physical Strip Mockup Container on Analog Light Table */}
                  <div
                    className="w-52 sm:w-68 p-3.5 sm:p-5 rounded-2xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.18)] hover:shadow-[0_28px_65px_-10px_rgba(37,99,235,0.25)] transition-all duration-500 relative border ring-1 ring-slate-200/80 animate-float-slow hover:scale-[1.02] max-w-full"
                    style={{
                      backgroundColor: currentTheme.bgValue,
                      color: currentTheme.textColor,
                      borderColor: currentTheme.borderColor || "#cbd5e1",
                    }}
                  >
                    {/* Film Holes if applicable */}
                    {currentTheme.hasFilmHoles && (
                      <div className="flex justify-between px-1 mb-2">
                        <div className="flex gap-1.5 sm:gap-2">
                          <span className="w-1.5 sm:w-2 h-2.5 sm:h-3 rounded-xs bg-amber-500/30" />
                          <span className="w-1.5 sm:w-2 h-2.5 sm:h-3 rounded-xs bg-amber-500/30" />
                          <span className="w-1.5 sm:w-2 h-2.5 sm:h-3 rounded-xs bg-amber-500/30" />
                        </div>
                        <span className="text-[8.5px] sm:text-[9px] font-mono text-amber-500/60 font-bold">
                          35MM FILM
                        </span>
                        <div className="flex gap-1.5 sm:gap-2">
                          <span className="w-1.5 sm:w-2 h-2.5 sm:h-3 rounded-xs bg-amber-500/30" />
                          <span className="w-1.5 sm:w-2 h-2.5 sm:h-3 rounded-xs bg-amber-500/30" />
                          <span className="w-1.5 sm:w-2 h-2.5 sm:h-3 rounded-xs bg-amber-500/30" />
                        </div>
                      </div>
                    )}

                    {/* Top Branding */}
                    <div className="text-center pb-2 sm:pb-2.5">
                      <span className="text-[9.5px] sm:text-[10px] font-mono font-bold tracking-widest uppercase opacity-80">
                        RuangMomen Studio
                      </span>
                    </div>

                    {/* 3 Photo Slots with Live Filter Effect */}
                    <div className="space-y-2 sm:space-y-2.5">
                      <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-black/10 shadow-xs bg-stone-900 group">
                        <Image
                          src="/images/gallery_strip.jpg"
                          alt="Photo Frame 1"
                          fill
                          className="object-cover object-top transition-all duration-300 group-hover:scale-105"
                          style={{ filter: currentFilter.cssFilter }}
                        />
                      </div>
                      <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-black/10 shadow-xs bg-stone-900 group">
                        <Image
                          src="/images/fotsud.jpg"
                          alt="Photo Frame 2"
                          fill
                          className="object-cover object-center transition-all duration-300 group-hover:scale-105"
                          style={{ filter: currentFilter.cssFilter }}
                        />
                      </div>
                      <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-black/10 shadow-xs bg-stone-900 group">
                        <Image
                          src="/images/demo_1.jpg"
                          alt="Photo Frame 3"
                          fill
                          className="object-cover object-center transition-all duration-300 group-hover:scale-105"
                          style={{ filter: currentFilter.cssFilter }}
                        />
                      </div>
                    </div>

                    {/* Strip Footer with Live Caption */}
                    <div className="pt-2.5 sm:pt-3 text-center space-y-1">
                      <div className="text-[11px] sm:text-xs font-serif italic tracking-wide transition-colors duration-300 font-medium">
                        {customCaption || "Sweet Memories Together"}
                      </div>
                      <div
                        className="text-[8.5px] sm:text-[9px] font-mono tracking-widest uppercase flex items-center justify-center gap-1.5"
                        style={{ color: currentTheme.subtextColor }}
                      >
                        <Calendar className="w-2.5 h-2.5 inline" />
                        <span>07.10.2026 •</span>
                      </div>
                    </div>

                    {/* Film Holes Bottom */}
                    {currentTheme.hasFilmHoles && (
                      <div className="flex justify-between px-1 mt-2 sm:mt-2.5 pt-1 border-t border-amber-500/20">
                        <div className="flex gap-1.5 sm:gap-2">
                          <span className="w-1.5 sm:w-2 h-2.5 sm:h-3 rounded-xs bg-amber-500/30" />
                          <span className="w-1.5 sm:w-2 h-2.5 sm:h-3 rounded-xs bg-amber-500/30" />
                          <span className="w-1.5 sm:w-2 h-2.5 sm:h-3 rounded-xs bg-amber-500/30" />
                        </div>
                        <span className="text-[8.5px] sm:text-[9px] font-mono text-amber-500/60 font-bold">
                          ISO 400
                        </span>
                        <div className="flex gap-1.5 sm:gap-2">
                          <span className="w-1.5 sm:w-2 h-2.5 sm:h-3 rounded-xs bg-amber-500/30" />
                          <span className="w-1.5 sm:w-2 h-2.5 sm:h-3 rounded-xs bg-amber-500/30" />
                          <span className="w-1.5 sm:w-2 h-2.5 sm:h-3 rounded-xs bg-amber-500/30" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="bg-slate-50 text-slate-600 pt-16 sm:pt-20 pb-10 sm:pb-14 border-t border-slate-200/80 relative"
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-12">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-8 sm:gap-12 mb-12 sm:mb-16">
            <div className="max-w-md">
              {/* Brand Logo matching Navbar */}
              <Link href="/" className="inline-flex items-center gap-2.5 sm:gap-3 group select-none mb-4">
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
              <p className="text-slate-600 max-w-md mb-6 sm:mb-8 leading-relaxed text-xs sm:text-sm">
                Studio photobooth digital dengan standar visual analog modern.
                Abadikan senyum dan keceriaan kapan saja tanpa batas langsung
                dari perangkat Anda.
              </p>
              <div className="flex space-x-3">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full bg-white border border-slate-200/80 flex items-center justify-center hover:bg-blue-50 hover:-translate-y-1 hover:shadow-md hover:border-blue-400 hover:text-blue-600 transition-all duration-300 text-slate-600 text-xs shadow-xs"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="mailto:punimanf@gmail.com"
                  aria-label="Email"
                  className="w-10 h-10 rounded-full bg-white border border-slate-200/80 flex items-center justify-center hover:bg-blue-50 hover:-translate-y-1 hover:shadow-md hover:border-blue-400 hover:text-blue-600 transition-all duration-300 text-slate-600 shadow-xs"
                >
                  <Mail className="w-4 h-4 text-blue-600" />
                </a>
                <a
                  href="https://wa.me/62895370232299"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Phone"
                  className="w-10 h-10 rounded-full bg-white border border-slate-200/80 flex items-center justify-center hover:bg-emerald-50 hover:-translate-y-1 hover:shadow-md hover:border-emerald-400 hover:text-emerald-600 transition-all duration-300 text-slate-600 shadow-xs"
                >
                  <Phone className="w-4 h-4 text-emerald-600" />
                </a>
              </div>
            </div>

            <div className="sm:text-right">
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider font-mono mb-4">
                Navigasi
              </h4>
              <ul className="space-y-2.5 sm:space-y-3 text-slate-600 text-xs sm:text-sm">
                <li>
                  <Link href="/" className="hover:text-blue-600 transition-colors">
                    Beranda (Home)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Tentang RuangMomen
                  </Link>
                </li>
                <li>
                  <Link
                    href="/booth"
                    className="hover:text-blue-600 transition-colors flex items-center sm:justify-end gap-1.5 font-medium text-slate-800 group"
                  >
                    <Camera className="w-3.5 h-3.5 text-blue-600 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" /> Full Screen
                    Studio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Kontak & Lokasi
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-200/80 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-[11px] sm:text-xs text-slate-500">
            <p>© 2026 RuangMomen Photobooth. All rights reserved.</p>
            <div className="flex gap-4 sm:gap-6">
              <a href="#" className="hover:text-slate-800 transition-colors">
                Privasi
              </a>
              <a href="#" className="hover:text-slate-800 transition-colors">
                Syarat & Ketentuan
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

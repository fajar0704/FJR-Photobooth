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
    <div className="flex flex-col min-h-screen bg-[#0e0d0c] text-stone-100 overflow-x-hidden selection:bg-blue-600 selection:text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full min-h-[100dvh] flex items-center justify-center pt-16 sm:pt-28 pb-10 sm:pb-20 border-b border-[#2a2725] bg-[#0e0d0c] overflow-hidden">
        {/* Background Studio Wallpaper with Breathing Ambient Scale */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none animate-studio-breath">
          <Image
            src="/images/studio_wallpaper.jpg"
            alt="RuangMomen Modern Studio Wallpaper"
            fill
            priority
            unoptimized
            className="object-cover object-center opacity-90 scale-100 transition-all duration-500 filter contrast-[1.08] brightness-[0.88] saturate-[1.08]"
          />

          {/* Gentle Translucent Vignette so Studio Wallpaper Remains Clearly Visible */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0e0d0c]/65 via-transparent to-[#0e0d0c]/80" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(14,13,12,0.45)_100%)]" />
        </div>

        {/* Dramatic Overhead Studio Key Light / Spotlight Beam with Pulsing Glow */}
        <div className="absolute inset-0 pointer-events-none z-1 bg-[radial-gradient(ellipse_65%_50%_at_50%_0%,_rgba(59,130,246,0.26)_0%,_rgba(37,99,235,0.06)_50%,_transparent_80%)] animate-pulse-cyan" />

        {/* Studio Dual Ambient Rim Glows with Floating Motion */}
        <div className="absolute -top-10 left-1/4 w-[450px] h-[350px] bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.16)_0%,_transparent_70%)] pointer-events-none blur-3xl z-1 animate-float-slow" />
        <div className="absolute top-1/4 -right-16 w-[500px] h-[400px] bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.24)_0%,_transparent_70%)] pointer-events-none blur-3xl z-1 animate-float-reverse" />

        {/* Subtle Camera Viewfinder Corner Grid Accents with Reticle Pulse */}
        <div className="absolute inset-x-4 sm:inset-x-12 top-24 bottom-12 pointer-events-none z-1 hidden sm:block opacity-40 transition-opacity duration-1000">
          <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-sky-400 animate-pulse" />
          <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-sky-400 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-sky-400 animate-pulse" />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-sky-400 animate-pulse" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 md:px-12 flex flex-col items-center justify-center text-center max-w-5xl animate-page-enter my-auto">
          {/* Heading with Fluid Responsive Scaling and Flowing Gradient */}
          <h1 className="w-full text-center mx-auto mt-1 sm:mt-6 md:mt-10 text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[5.5rem] font-heading font-black text-white leading-[1.1] sm:leading-[1.05] tracking-tight drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)]">
            <span className="block text-center hover:scale-[1.01] transition-transform duration-300">Photobooth</span>
            <span className="block text-center mt-1 sm:mt-2 md:mt-3 bg-gradient-to-r from-sky-400 via-blue-300 to-indigo-400 bg-clip-text text-transparent font-serif italic font-normal drop-shadow-[0_0_40px_rgba(56,189,248,0.45)] animate-gradient-shift">
              RuangMomen
            </span>
          </h1>

          {/* Quick Specifications Cards: Compact & Aesthetic Studio Badges with Hover Micro-Animations */}
          <div className="mt-4 sm:mt-7 w-full max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5">
              {/* Card 1: 3, 4, & 6 Foto */}
              <div className="relative group overflow-hidden rounded-xl px-2.5 py-1.5 sm:px-3 sm:py-2 bg-gradient-to-b from-[#141b2e]/80 to-[#090d16]/90 backdrop-blur-md border border-white/[0.08] hover:border-sky-400/60 hover:bg-[#151d32]/90 transition-all duration-300 shadow-sm hover:shadow-[0_8px_24px_rgba(56,189,248,0.25)] hover:-translate-y-1.5 flex items-center text-left cursor-default">
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-sky-400/30 to-transparent pointer-events-none group-hover:via-sky-400/80 transition-all duration-300" />
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-sky-500/10 border border-sky-500/25 flex items-center justify-center shrink-0 text-sky-400 group-hover:scale-115 group-hover:rotate-6 group-hover:bg-sky-500/20 group-hover:border-sky-400/60 transition-all duration-300">
                  <Layers className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </div>
                <div className="ml-2 sm:ml-2.5 min-w-0">
                  <div className="text-[8px] sm:text-[9px] font-mono uppercase tracking-wider text-sky-400/90 font-medium leading-none">Layout</div>
                  <div className="text-[11px] sm:text-xs font-semibold text-white whitespace-nowrap truncate mt-0.5">3, 4, & 6 Foto</div>
                </div>
              </div>

              {/* Card 2: Timer 3s, 5s, 10s */}
              <div className="relative group overflow-hidden rounded-xl px-2.5 py-1.5 sm:px-3 sm:py-2 bg-gradient-to-b from-[#141b2e]/80 to-[#090d16]/90 backdrop-blur-md border border-white/[0.08] hover:border-amber-400/60 hover:bg-[#151d32]/90 transition-all duration-300 shadow-sm hover:shadow-[0_8px_24px_rgba(251,191,36,0.25)] hover:-translate-y-1.5 flex items-center text-left cursor-default">
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400/30 to-transparent pointer-events-none group-hover:via-amber-400/80 transition-all duration-300" />
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-amber-500/10 border border-amber-500/25 flex items-center justify-center shrink-0 text-amber-400 group-hover:scale-115 group-hover:rotate-6 group-hover:bg-amber-500/20 group-hover:border-amber-400/60 transition-all duration-300">
                  <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </div>
                <div className="ml-2 sm:ml-2.5 min-w-0">
                  <div className="text-[8px] sm:text-[9px] font-mono uppercase tracking-wider text-amber-400/90 font-medium leading-none">Shutter</div>
                  <div className="text-[11px] sm:text-xs font-semibold text-white whitespace-nowrap truncate mt-0.5">Timer 3s, 5s, 10s</div>
                </div>
              </div>

              {/* Card 3: 9 Warna Frame */}
              <div className="relative group overflow-hidden rounded-xl px-2.5 py-1.5 sm:px-3 sm:py-2 bg-gradient-to-b from-[#141b2e]/80 to-[#090d16]/90 backdrop-blur-md border border-white/[0.08] hover:border-purple-400/60 hover:bg-[#151d32]/90 transition-all duration-300 shadow-sm hover:shadow-[0_8px_24px_rgba(192,132,252,0.25)] hover:-translate-y-1.5 flex items-center text-left cursor-default">
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-purple-400/30 to-transparent pointer-events-none group-hover:via-purple-400/80 transition-all duration-300" />
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-purple-500/10 border border-purple-500/25 flex items-center justify-center shrink-0 text-purple-400 group-hover:scale-115 group-hover:rotate-6 group-hover:bg-purple-500/20 group-hover:border-purple-400/60 transition-all duration-300">
                  <Palette className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </div>
                <div className="ml-2 sm:ml-2.5 min-w-0">
                  <div className="text-[8px] sm:text-[9px] font-mono uppercase tracking-wider text-purple-400/90 font-medium leading-none">Studio Palet</div>
                  <div className="text-[11px] sm:text-xs font-semibold text-white whitespace-nowrap truncate mt-0.5">9 Warna Frame</div>
                </div>
              </div>

              {/* Card 4: Unduh HD 300 DPI */}
              <div className="relative group overflow-hidden rounded-xl px-2.5 py-1.5 sm:px-3 sm:py-2 bg-gradient-to-b from-[#141b2e]/80 to-[#090d16]/90 backdrop-blur-md border border-white/[0.08] hover:border-emerald-400/60 hover:bg-[#151d32]/90 transition-all duration-300 shadow-sm hover:shadow-[0_8px_24px_rgba(52,211,153,0.25)] hover:-translate-y-1.5 flex items-center text-left cursor-default">
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent pointer-events-none group-hover:via-emerald-400/80 transition-all duration-300" />
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center shrink-0 text-emerald-400 group-hover:scale-115 group-hover:rotate-6 group-hover:bg-emerald-500/20 group-hover:border-emerald-400/60 transition-all duration-300">
                  <Download className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </div>
                <div className="ml-2 sm:ml-2.5 min-w-0">
                  <div className="text-[8px] sm:text-[9px] font-mono uppercase tracking-wider text-emerald-400/90 font-medium leading-none">Resolusi</div>
                  <div className="text-[11px] sm:text-xs font-semibold text-white whitespace-nowrap truncate mt-0.5">Unduh HD 300 DPI</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero CTAs: Dynamic Shimmer & Lift Animations */}
          <div className="mt-4 sm:mt-7 flex flex-col sm:flex-row gap-2 sm:gap-4 w-full max-w-sm sm:max-w-none mx-auto justify-center items-stretch sm:items-center">
            <Link
              href="/booth"
              className="w-full sm:w-auto px-5 py-2.5 sm:px-8 sm:py-3.5 text-xs sm:text-base font-bold text-white bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600 hover:from-blue-500 hover:via-sky-500 hover:to-indigo-500 hover:scale-[1.03] hover:-translate-y-0.5 active:scale-[0.98] rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/35 hover:shadow-sky-500/60 border border-blue-400/40 text-center flex items-center justify-center gap-2 min-h-[42px] sm:min-h-[48px] cursor-pointer animate-shimmer"
            >
              <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white shrink-0 animate-pulse" />
              <span>Buka Full Screen Studio</span>
            </Link>
            <Link
              href="/about"
              className="w-full sm:w-auto px-5 py-2.5 sm:px-8 sm:py-3.5 text-xs sm:text-base font-bold text-stone-200 bg-[#141720]/90 backdrop-blur-md border border-[#2b3345] hover:border-sky-400/60 hover:text-white hover:bg-[#1b202e] hover:scale-[1.03] hover:-translate-y-0.5 active:scale-[0.98] rounded-xl transition-all duration-300 text-center flex items-center justify-center gap-2 shadow-md min-h-[42px] sm:min-h-[48px] cursor-pointer"
            >
              <span>Tentang RuangMomen</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 3 Langkah Mudah Section */}
      <section className="py-16 sm:py-24 bg-[#121110] border-y border-[#2a2725] relative overflow-hidden">
        {/* Subtle Background Glow (Blue Gradasi) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.12)_0%,_transparent_70%)] pointer-events-none blur-2xl animate-pulse-cyan" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 md:px-12 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181615] border border-sky-500/30 text-sky-300 text-[11px] sm:text-xs font-mono tracking-wider uppercase mb-3 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-sky-400 animate-pulse" />
              Alur Penggunaan Mudah
            </div>
            <h2 className="text-2xl sm:text-4xl font-heading font-black text-white tracking-tight">
              3 Langkah Sederhana <br />
              <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent font-serif italic font-normal animate-gradient-shift">
                Menghasilkan Strip Foto Indah.
              </span>
            </h2>
            <p className="mt-3 text-stone-400 text-xs sm:text-sm md:text-base leading-relaxed">
              Tanpa perlu aplikasi rumit atau registrasi akun. Cukup buka studio,
              atur format yang diinginkan, dan abadikan setiap momen spontan.
            </p>
          </div>

          {/* Stepper Container with Desktop Connector Line */}
          <div className="relative">
            {/* Desktop Step Connector Line (Blue Gradasi) */}
            <div className="hidden md:block absolute top-[44px] left-[15%] right-[15%] h-[2px] z-0 pointer-events-none">
              <div className="w-full h-full bg-gradient-to-r from-blue-600/30 via-sky-400 to-indigo-600/30" />
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.9)] animate-ping" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative z-10">
              {/* Step 1 */}
              <div className="bg-[#181615] rounded-2xl p-6 sm:p-7 border border-[#2a2725] hover:border-sky-500/60 hover:-translate-y-2.5 hover:shadow-[0_16px_40px_rgba(56,189,248,0.18)] transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-lg bg-[#24211f] text-white border border-[#2e2a27] shadow-xs group-hover:border-sky-500/50 transition-colors">
                      Langkah 01
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-[#24211f] border border-[#2e2a27] flex items-center justify-center text-stone-300 group-hover:text-sky-400 group-hover:scale-115 group-hover:rotate-6 group-hover:border-sky-400/50 transition-all duration-300 shadow-xs">
                      <SlidersHorizontal className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-heading font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                    Pilih Format & Timer
                  </h3>
                  <p className="text-stone-400 text-xs sm:text-sm leading-relaxed mb-4">
                    Pilih jumlah foto yang Anda sukai (3, 4, atau 6 frame) dan
                    atur durasi hitung mundur (3s, 5s, atau 10s) untuk bersiap pose.
                  </p>

                  {/* Interactive Mini Mockup 1: Format Selector */}
                  <div className="my-4 p-3 rounded-xl bg-[#121110] border border-[#24211f] space-y-2 group-hover:border-sky-500/30 transition-colors">
                    <div className="flex items-center justify-between text-[10px] font-mono text-stone-400">
                      <span>FORMAT REEL</span>
                      <span className="text-sky-400 font-bold">4-CUTS TERPILIH</span>
                    </div>
                    <div className="grid grid-cols-3 gap-1.5 text-center text-xs font-bold">
                      <span className="py-1 rounded bg-[#181615] text-stone-500 border border-[#24211f]">3 Foto</span>
                      <span className="py-1 rounded bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xs">4 Foto ✓</span>
                      <span className="py-1 rounded bg-[#181615] text-stone-500 border border-[#24211f]">6 Foto</span>
                    </div>
                    <div className="flex items-center justify-between pt-1 text-[10px] font-mono text-stone-400">
                      <span>TIMER: <strong className="text-white">5 Detik</strong></span>
                      <span className="flex items-center gap-1 text-emerald-400">● Mirror Selfie On</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#2a2725] flex flex-wrap gap-1.5 text-[11px] font-mono text-stone-400">
                  <span className="px-2 py-0.5 rounded bg-[#121110] border border-[#2a2725]">
                    3, 4, & 6 Frame
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#121110] border border-[#2a2725]">
                    Timer 3s • 5s • 10s
                  </span>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-[#181615] rounded-2xl p-6 sm:p-7 border border-[#2a2725] hover:border-sky-500/60 hover:-translate-y-2.5 hover:shadow-[0_16px_40px_rgba(56,189,248,0.18)] transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20">
                      Langkah 02
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-[#24211f] border border-[#2e2a27] flex items-center justify-center text-sky-400 group-hover:scale-115 group-hover:rotate-6 group-hover:border-sky-400/50 transition-all duration-300 shadow-xs">
                      <Camera className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-heading font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                    Berpose & Jepret Spontan
                  </h3>
                  <p className="text-stone-400 text-xs sm:text-sm leading-relaxed mb-4">
                    Arahkan tatapan ke kamera Anda. Studio memandu dengan hitungan mundur
                    suara beeps dan efek kilat flash shutter photobox yang nyata.
                  </p>

                  {/* Interactive Mini Mockup 2: Camera Viewfinder */}
                  <div className="my-4 p-2.5 rounded-xl bg-[#121110] border border-[#24211f] group-hover:border-sky-500/30 transition-colors">
                    <div className="aspect-[16/9] rounded-lg bg-stone-950 relative flex items-center justify-center border border-white/10 overflow-hidden">
                      {/* Corner framing brackets */}
                      <div className="absolute top-1 left-1 w-2.5 h-2.5 border-t border-l border-sky-400/80" />
                      <div className="absolute top-1 right-1 w-2.5 h-2.5 border-t border-r border-sky-400/80" />
                      <div className="absolute bottom-1 left-1 w-2.5 h-2.5 border-b border-l border-sky-400/80" />
                      <div className="absolute bottom-1 right-1 w-2.5 h-2.5 border-b border-r border-sky-400/80" />
                      {/* Live REC badge with animated indicator */}
                      <div className="absolute top-1.5 left-2 flex items-center gap-1 text-[9px] font-mono font-bold text-sky-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping" />
                        <span>LIVE REC</span>
                      </div>
                      {/* Animated Spring Count */}
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-mono font-black text-sm flex items-center justify-center shadow-lg shadow-blue-500/30 animate-count-pop">
                        3
                      </div>
                      <div className="absolute bottom-1 text-[9px] font-mono text-stone-300">
                        ✨ Senyum Siap Pose
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#2a2725] flex flex-wrap gap-1.5 text-[11px] font-mono text-stone-400">
                  <span className="px-2 py-0.5 rounded bg-[#121110] border border-[#2a2725]">
                    Webcam Mirror Mode
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#121110] border border-[#2a2725]">
                    Flash Shutter FX
                  </span>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-[#181615] rounded-2xl p-6 sm:p-7 border border-[#2a2725] hover:border-sky-500/60 hover:-translate-y-2.5 hover:shadow-[0_16px_40px_rgba(56,189,248,0.18)] transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-lg bg-[#24211f] text-white border border-[#2e2a27] shadow-xs group-hover:border-sky-500/50 transition-colors">
                      Langkah 03
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-[#24211f] border border-[#2e2a27] flex items-center justify-center text-stone-300 group-hover:text-sky-400 group-hover:scale-115 group-hover:rotate-6 group-hover:border-sky-400/50 transition-all duration-300 shadow-xs">
                      <Download className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-heading font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                    Pilih Frame & Unduh HD
                  </h3>
                  <p className="text-stone-400 text-xs sm:text-sm leading-relaxed mb-4">
                    Kustomisasi warna frame dari 9 palet aesthetic studio, tulis
                    pesan kenangan atau tanggal spesial, lalu unduh strip foto 300 DPI.
                  </p>

                  {/* Interactive Mini Mockup 3: Palette Dots & Download */}
                  <div className="my-4 p-3 rounded-xl bg-[#121110] border border-[#24211f] space-y-2 group-hover:border-sky-500/30 transition-colors">
                    <div className="flex items-center justify-between text-[10px] font-mono text-stone-400">
                      <span>9 WARNA FRAME</span>
                      <span className="text-emerald-400 font-bold">HD 300 DPI</span>
                    </div>
                    {/* 9 Palette color dots */}
                    <div className="flex items-center justify-between px-2 py-1.5 bg-[#181615] rounded-lg border border-[#24211f]">
                      <span className="w-3.5 h-3.5 rounded-full bg-[#18181b] border border-stone-600 ring-2 ring-sky-400 animate-pulse" />
                      <span className="w-3.5 h-3.5 rounded-full bg-[#faf8f5] border border-stone-400 hover:scale-125 transition-transform" />
                      <span className="w-3.5 h-3.5 rounded-full bg-[#f4ebe1] border border-stone-400 hover:scale-125 transition-transform" />
                      <span className="w-3.5 h-3.5 rounded-full bg-[#dbe8f5] border border-stone-400 hover:scale-125 transition-transform" />
                      <span className="w-3.5 h-3.5 rounded-full bg-[#e3ebd9] border border-stone-400 hover:scale-125 transition-transform" />
                      <span className="w-3.5 h-3.5 rounded-full bg-[#fde8ec] border border-stone-400 hover:scale-125 transition-transform" />
                      <span className="w-3.5 h-3.5 rounded-full bg-[#ede5f7] border border-stone-400 hover:scale-125 transition-transform" />
                      <span className="w-3.5 h-3.5 rounded-full bg-[#1c2438] border border-stone-600 hover:scale-125 transition-transform" />
                      <span className="w-3.5 h-3.5 rounded-full bg-[#2a2421] border border-stone-600 hover:scale-125 transition-transform" />
                    </div>
                    <div className="flex items-center justify-between pt-1 text-[10px] font-mono">
                      <span className="text-stone-300">Format: PNG Siap Cetak</span>
                      <span className="text-sky-400 font-bold">Unduh Cepat ➔</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#2a2725] flex flex-wrap gap-1.5 text-[11px] font-mono text-stone-400">
                  <span className="px-2 py-0.5 rounded bg-[#121110] border border-[#2a2725]">
                    9 Warna Frame
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#121110] border border-[#2a2725]">
                    Unduh PNG 300 DPI
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Studio Launcher CTA Banner with Shimmer & Floating Glow */}
            <div className="mt-10 sm:mt-12 text-center px-2">
              <Link
                href="/booth"
                className="inline-flex max-w-full items-center justify-center gap-2 sm:gap-2.5 font-bold text-xs sm:text-base text-white bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600 hover:from-blue-500 hover:via-sky-500 hover:to-indigo-500 px-5 sm:px-7 py-3 sm:py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/35 hover:shadow-sky-500/60 hover:scale-[1.03] hover:-translate-y-1 active:scale-[0.99] cursor-pointer animate-shimmer"
              >
                <Camera className="w-4 h-4 shrink-0 animate-pulse" />
                <span className="truncate">Mulai Langkah 1 di Studio Sekarang</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase 9 Warna Frame Studio Section */}
      <section className="py-16 sm:py-24 bg-[#0e0d0c]">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#181615] border border-[#2a2725] text-stone-300 text-[11px] sm:text-xs font-mono tracking-wider uppercase mb-3 shadow-xs">
                <Palette className="w-3.5 h-3.5 text-blue-400" />
                Koleksi Palet & Studio Customizer
              </div>
              <h2 className="text-2xl sm:text-4xl font-heading font-black text-white tracking-tight">
                Simulasi Frame, Filter <br />
                <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent font-serif italic font-normal animate-gradient-shift">
                  & Kustomisasi Strip Real-Time.
                </span>
              </h2>
            </div>
            <p className="text-stone-400 text-xs sm:text-sm max-w-md leading-relaxed">
              Pilih dari 9 warna frame kertas studio analog, ganti efek filter foto,
              dan ubah teks caption untuk melihat simulasi hasil strip foto secara instan.
            </p>
          </div>

          {/* Interactive Frame Showcase Grid + Live Strip Mockup */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Interactive Controls (Frame, Filter, Caption) */}
            <div className="lg:col-span-7 space-y-4">
              {/* Showcase Tab Switcher */}
              <div className="flex p-1 rounded-xl bg-[#181615] border border-[#2a2725] gap-1 overflow-x-auto shadow-inner">
                <button
                  type="button"
                  onClick={() => setActiveShowcaseTab("frame")}
                  className={`flex-1 py-2 px-2 sm:px-3 rounded-lg text-[11px] sm:text-xs font-bold transition-all duration-300 flex items-center justify-center gap-1 sm:gap-1.5 cursor-pointer whitespace-nowrap active:scale-95 ${
                    activeShowcaseTab === "frame"
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20"
                      : "text-stone-400 hover:text-white hover:bg-[#24211f]"
                  }`}
                >
                  <Palette className="w-3.5 h-3.5 shrink-0 transition-transform duration-300 group-hover:rotate-12" />
                  <span>9 Warna Frame</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveShowcaseTab("filter")}
                  className={`flex-1 py-2 px-2 sm:px-3 rounded-lg text-[11px] sm:text-xs font-bold transition-all duration-300 flex items-center justify-center gap-1 sm:gap-1.5 cursor-pointer whitespace-nowrap active:scale-95 ${
                    activeShowcaseTab === "filter"
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20"
                      : "text-stone-400 hover:text-white hover:bg-[#24211f]"
                  }`}
                >
                  <Wand2 className="w-3.5 h-3.5 shrink-0 transition-transform duration-300 group-hover:rotate-12" />
                  <span>Filter Foto</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveShowcaseTab("caption")}
                  className={`flex-1 py-2 px-2 sm:px-3 rounded-lg text-[11px] sm:text-xs font-bold transition-all duration-300 flex items-center justify-center gap-1 sm:gap-1.5 cursor-pointer whitespace-nowrap active:scale-95 ${
                    activeShowcaseTab === "caption"
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20"
                      : "text-stone-400 hover:text-white hover:bg-[#24211f]"
                  }`}
                >
                  <Type className="w-3.5 h-3.5 shrink-0 transition-transform duration-300 group-hover:rotate-12" />
                  <span>Teks Caption</span>
                </button>
              </div>

              {/* Tab 1: 9 Frame Colors */}
              {activeShowcaseTab === "frame" && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 animate-fade-in">
                  {BACKGROUND_THEMES.map((theme) => {
                    const isSelected = selectedThemeId === theme.id;
                    return (
                      <button
                        key={theme.id}
                        onClick={() => setSelectedThemeId(theme.id)}
                        className={`p-3.5 rounded-xl border text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:scale-[1.02] flex flex-col justify-between cursor-pointer group ${
                          isSelected
                            ? "border-blue-500 bg-[#162033] ring-2 ring-blue-500/30 shadow-md shadow-blue-500/20"
                            : "border-[#2a2725] bg-[#181615] hover:border-stone-500"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div
                            className="w-7 h-7 rounded-lg border shadow-xs flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                            style={{
                              backgroundColor: theme.bgValue,
                              borderColor: theme.borderColor || "#44403c",
                            }}
                          >
                            {isSelected && (
                              <CheckCircle2
                                className="w-4 h-4 animate-scale-up"
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
                            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-950/80 text-amber-400 border border-amber-800">
                              35mm Film
                            </span>
                          )}
                        </div>
                        <div>
                          <div className="font-bold text-xs sm:text-sm text-stone-100 leading-tight group-hover:text-white transition-colors">
                            {theme.name}
                          </div>
                          <div className="text-[11px] font-mono text-stone-400 mt-0.5">
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
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 animate-fade-in">
                  {PHOTO_FILTERS.map((filter) => {
                    const isSelected = selectedFilterId === filter.id;
                    return (
                      <button
                        key={filter.id}
                        onClick={() => setSelectedFilterId(filter.id)}
                        className={`p-3.5 rounded-xl border text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:scale-[1.02] flex flex-col justify-between cursor-pointer group ${
                          isSelected
                            ? "border-blue-500 bg-[#162033] ring-2 ring-blue-500/30 shadow-md shadow-blue-500/20"
                            : "border-[#2a2725] bg-[#181615] hover:border-stone-500"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="w-8 h-8 rounded-lg bg-stone-800 border border-[#2a2725] flex items-center justify-center text-xs font-mono font-bold text-stone-300 transition-transform duration-300 group-hover:scale-110">
                            {filter.id === "bw" ? "B&W" : filter.id === "warm" ? "☀️" : "FX"}
                          </div>
                          {isSelected && (
                            <span className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-center text-[10px] font-bold shadow-xs animate-scale-up">
                              ✓
                            </span>
                          )}
                        </div>
                        <div>
                          <div className="font-bold text-xs sm:text-sm text-stone-100 group-hover:text-white transition-colors">
                            {filter.name}
                          </div>
                          <div className="text-[10px] font-mono text-stone-400 mt-0.5 line-clamp-1">
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
                <div className="p-4 sm:p-5 rounded-2xl bg-[#181615] border border-[#2a2725] space-y-4 animate-fade-in shadow-lg">
                  <div>
                    <label className="block text-xs font-mono uppercase text-stone-300 mb-1.5 font-bold">
                      Tulis Caption Strip:
                    </label>
                    <input
                      type="text"
                      maxLength={32}
                      value={customCaption}
                      onChange={(e) => setCustomCaption(e.target.value)}
                      placeholder="Tuliskan pesan kenangan..."
                      className="w-full px-4 py-2.5 rounded-xl bg-[#121110] border border-[#2a2725] focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-white text-sm outline-none transition-all placeholder:text-stone-600"
                    />
                  </div>

                  <div>
                    <span className="block text-[11px] font-mono uppercase text-stone-400 mb-2">
                      Preset Caption Favorit:
                    </span>
                    <div className="flex flex-wrap gap-2">
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
                          className={`text-xs px-3 py-1.5 rounded-lg border transition-all duration-200 hover:scale-105 cursor-pointer active:scale-95 ${
                            customCaption === preset
                              ? "border-blue-500 bg-blue-500/20 text-sky-300 font-bold shadow-xs shadow-blue-500/20"
                              : "border-[#2a2725] bg-[#121110] text-stone-300 hover:border-stone-500"
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
              <div className="pt-2">
                <div className="p-4 rounded-xl bg-[#181615] border border-[#2a2725] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs shadow-md">
                  <div className="text-stone-300 flex flex-wrap items-center gap-2">
                    <span>Frame: <strong className="text-white">{currentTheme.name}</strong></span>
                    <span className="text-stone-600">•</span>
                    <span>Filter: <strong className="text-sky-400">{currentFilter.name}</strong></span>
                  </div>
                  <Link
                    href="/booth"
                    className="relative overflow-hidden inline-flex items-center gap-1.5 font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-[length:200%_auto] hover:bg-right px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer shadow-md shadow-blue-600/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:-translate-y-0.5 active:scale-95 group"
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

            {/* Right: Live Realistic Strip Preview Mockup */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="mb-2 flex items-center justify-between w-56 sm:w-68 text-[10px] font-mono text-stone-400 px-1">
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-sky-400 animate-pulse" /> LIVE STRIP PREVIEW
                </span>
                <span className="text-emerald-400 font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  {currentFilter.name}
                </span>
              </div>

              <div className="relative">
                {/* Atmospheric Studio Spotlight behind Strip */}
                <div className="absolute -inset-6 bg-gradient-to-tr from-blue-600/25 via-sky-500/15 to-indigo-600/25 rounded-3xl blur-2xl -z-10 animate-pulse-cyan pointer-events-none" />

                {/* Physical Strip Mockup Container on Analog Light Table */}
                <div
                  className="w-56 sm:w-68 p-4 sm:p-5 rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] hover:shadow-[0_30px_70px_-10px_rgba(59,130,246,0.35)] transition-all duration-500 relative border ring-1 ring-white/10 animate-float-slow hover:scale-[1.03] hover:-rotate-1"
                  style={{
                    backgroundColor: currentTheme.bgValue,
                    color: currentTheme.textColor,
                    borderColor: currentTheme.borderColor || "#2a2725",
                  }}
                >
                  {/* Film Holes if applicable */}
                  {currentTheme.hasFilmHoles && (
                    <div className="flex justify-between px-1 mb-2">
                      <div className="flex gap-2">
                        <span className="w-2 h-3 rounded-xs bg-amber-500/30" />
                        <span className="w-2 h-3 rounded-xs bg-amber-500/30" />
                        <span className="w-2 h-3 rounded-xs bg-amber-500/30" />
                      </div>
                      <span className="text-[9px] font-mono text-amber-500/60 font-bold">
                        35MM FILM
                      </span>
                      <div className="flex gap-2">
                        <span className="w-2 h-3 rounded-xs bg-amber-500/30" />
                        <span className="w-2 h-3 rounded-xs bg-amber-500/30" />
                        <span className="w-2 h-3 rounded-xs bg-amber-500/30" />
                      </div>
                    </div>
                  )}

                  {/* Top Branding */}
                  <div className="text-center pb-2.5">
                    <span className="text-[10px] font-mono font-bold tracking-widest uppercase opacity-80">
                      RuangMomen Studio
                    </span>
                  </div>

                  {/* 3 Photo Slots with Live Filter Effect */}
                  <div className="space-y-2.5">
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
                  <div className="pt-3 text-center space-y-1">
                    <div className="text-xs font-serif italic tracking-wide transition-colors duration-300 font-medium">
                      {customCaption || "Sweet Memories Together"}
                    </div>
                    <div
                      className="text-[9px] font-mono tracking-widest uppercase flex items-center justify-center gap-1.5"
                      style={{ color: currentTheme.subtextColor }}
                    >
                      <Calendar className="w-2.5 h-2.5 inline" />
                      <span>07.10.2026 •</span>
                    </div>
                  </div>

                  {/* Film Holes Bottom */}
                  {currentTheme.hasFilmHoles && (
                    <div className="flex justify-between px-1 mt-2.5 pt-1 border-t border-amber-500/20">
                      <div className="flex gap-2">
                        <span className="w-2 h-3 rounded-xs bg-amber-500/30" />
                        <span className="w-2 h-3 rounded-xs bg-amber-500/30" />
                        <span className="w-2 h-3 rounded-xs bg-amber-500/30" />
                      </div>
                      <span className="text-[9px] font-mono text-amber-500/60 font-bold">
                        ISO 400
                      </span>
                      <div className="flex gap-2">
                        <span className="w-2 h-3 rounded-xs bg-amber-500/30" />
                        <span className="w-2 h-3 rounded-xs bg-amber-500/30" />
                        <span className="w-2 h-3 rounded-xs bg-amber-500/30" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="bg-[#0a0a0a] text-stone-300 pt-16 sm:pt-20 pb-10 sm:pb-12 border-t border-[#222222]"
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-12">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-8 sm:gap-12 mb-12 sm:mb-16">
            <div className="max-w-md">
              <div className="text-2xl font-heading font-bold text-white mb-4 flex items-center gap-2.5">
                <span>RuangMomen</span>
              </div>
              <p className="text-stone-400 max-w-md mb-6 sm:mb-8 leading-relaxed text-xs sm:text-sm">
                Studio photobooth digital dengan standar visual analog modern.
                Abadikan senyum dan keceriaan kapan saja tanpa batas langsung
                dari perangkat Anda.
              </p>
              <div className="flex space-x-3">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-lg bg-[#181615] border border-[#2a2725] flex items-center justify-center hover:bg-[#24211f] hover:-translate-y-1 hover:shadow-lg hover:border-blue-500/50 hover:text-sky-400 transition-all duration-300 text-stone-300 text-xs"
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
                  href="#"
                  aria-label="Email"
                  className="w-9 h-9 rounded-lg bg-[#181615] border border-[#2a2725] flex items-center justify-center hover:bg-[#24211f] hover:-translate-y-1 hover:shadow-lg hover:border-blue-500/50 hover:text-sky-400 transition-all duration-300 text-stone-300"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  aria-label="Phone"
                  className="w-9 h-9 rounded-lg bg-[#181615] border border-[#2a2725] flex items-center justify-center hover:bg-[#24211f] hover:-translate-y-1 hover:shadow-lg hover:border-blue-500/50 hover:text-sky-400 transition-all duration-300 text-stone-300"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="sm:text-right">
              <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider font-mono mb-4">
                Navigasi
              </h4>
              <ul className="space-y-2.5 sm:space-y-3 text-stone-400 text-xs sm:text-sm">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Beranda (Home)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="hover:text-white transition-colors"
                  >
                    Tentang RuangMomen
                  </Link>
                </li>
                <li>
                  <Link
                    href="/booth"
                    className="hover:text-sky-300 transition-colors flex items-center sm:justify-end gap-1.5 font-medium text-stone-200 group"
                  >
                    <Camera className="w-3.5 h-3.5 text-sky-400 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" /> Full Screen
                    Studio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Kontak & Lokasi
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#222222] pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-[11px] sm:text-xs text-stone-500">
            <p>© 2026 RuangMomen Photobooth. All rights reserved.</p>
            <div className="flex gap-4 sm:gap-6">
              <a href="#" className="hover:text-stone-300 transition-colors">
                Privasi
              </a>
              <a href="#" className="hover:text-stone-300 transition-colors">
                Syarat & Ketentuan
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

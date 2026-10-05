"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Camera,
  MapPin,
  Mail,
  Phone,
  ArrowRight,
  Maximize2,
  Clock,
  Layers,
  Palette,
  Download,
  Film,
  Check,
  SlidersHorizontal,
  Sparkles,
  Calendar,
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { BACKGROUND_THEMES } from "@/utils/photoboothTypes";

export default function Home() {
  const [selectedThemeId, setSelectedThemeId] = useState("studio-white");

  const currentTheme =
    BACKGROUND_THEMES.find((t) => t.id === selectedThemeId) ||
    BACKGROUND_THEMES[1];

  return (
    <div className="flex flex-col min-h-screen bg-[#faf8f5] text-stone-900 overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full pt-28 sm:pt-36 pb-16 sm:pb-24 border-b border-[#e8e2d8] bg-[#faf8f5]">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 flex flex-col items-center text-center max-w-4xl">
          {/* Subtle Editorial Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white border border-[#e8e2d8] text-stone-700 text-[11px] sm:text-xs font-mono tracking-wider uppercase mb-5 sm:mb-6 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#c83d3d]" />
            Studio Photobooth Mandiri • Online & Gratis
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black text-stone-950 leading-[1.1] tracking-tight">
            Abadikan Setiap <br />
            <span className="text-[#c83d3d] font-serif italic font-normal">
              Momen Otentik.
            </span>
          </h1>

          <p className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-stone-600 max-w-2xl leading-relaxed">
            Hadirkan keseruan photobooth analog bernuansa modern langsung dari
            perangkatmu. Pilih jumlah foto (3, 4, 6), atur hitungan mundur,
            gunakan frame studio aesthetic, dan unduh hasilnya seketika.
          </p>

          {/* Quick Specifications Pills */}
          <div className="mt-7 flex flex-wrap justify-center gap-2 text-xs font-medium text-stone-600">
            <span className="px-3 py-1.5 rounded-lg bg-white border border-[#e8e2d8] flex items-center gap-1.5 shadow-2xs">
              <Layers className="w-3.5 h-3.5 text-stone-500" /> 3, 4, & 6 Foto
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-white border border-[#e8e2d8] flex items-center gap-1.5 shadow-2xs">
              <Clock className="w-3.5 h-3.5 text-stone-500" /> Timer 3s, 5s, 10s
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-white border border-[#e8e2d8] flex items-center gap-1.5 shadow-2xs">
              <Palette className="w-3.5 h-3.5 text-stone-500" /> 9 Warna Frame
              Studio
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-white border border-[#e8e2d8] flex items-center gap-1.5 shadow-2xs">
              <Download className="w-3.5 h-3.5 text-stone-500" /> Unduh
              Resolusi Tinggi
            </span>
          </div>

          {/* Hero CTAs */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto justify-center">
            <Link
              href="/booth"
              className="w-full sm:w-auto px-7 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-bold text-white bg-stone-950 hover:bg-stone-800 rounded-xl transition-all shadow-sm text-center flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <Maximize2 className="w-4 h-4 text-stone-300" />
              <span>Buka Full Screen Studio</span>
            </Link>
            <Link
              href="/about"
              className="w-full sm:w-auto px-7 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-bold text-stone-800 bg-white border border-[#e8e2d8] hover:border-stone-400 rounded-xl transition-all text-center flex items-center justify-center gap-2 shadow-2xs cursor-pointer"
            >
              <span>Tentang RuangMomen</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 3 Langkah Mudah Section */}
      <section className="py-16 sm:py-24 bg-white border-y border-[#e8e2d8]">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#faf8f5] border border-[#e8e2d8] text-stone-700 text-[11px] sm:text-xs font-mono tracking-wider uppercase mb-3 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#c83d3d]" />
              Alur Penggunaan Mudah
            </div>
            <h2 className="text-2xl sm:text-4xl font-heading font-black text-stone-950 tracking-tight">
              3 Langkah Sederhana <br />
              <span className="text-[#c83d3d] font-serif italic font-normal">
                Menghasilkan Strip Foto Indah.
              </span>
            </h2>
            <p className="mt-3 text-stone-600 text-xs sm:text-sm md:text-base leading-relaxed">
              Tanpa perlu aplikasi rumit atau registrasi. Cukup buka studio,
              atur preferensi Anda, dan biarkan keajaiban momen terjadi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Step 1 */}
            <div className="bg-[#faf8f5] rounded-2xl p-6 sm:p-8 border border-[#e8e2d8] hover:border-stone-400 transition-all flex flex-col justify-between shadow-2xs group">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-stone-950 text-white">
                    01
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#e8e2d8] flex items-center justify-center text-stone-800 group-hover:text-[#c83d3d] transition-colors">
                    <SlidersHorizontal className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-heading font-bold text-stone-950 mb-2">
                  Pilih Format & Timer
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-6">
                  Pilih format reel yang Anda sukai (3, 4, atau 6 foto) dan
                  durasi jeda hitung mundur (3s, 5s, atau 10s) agar Anda siap
                  menyiapkan pose terbaik.
                </p>
              </div>

              <div className="pt-4 border-t border-[#e8e2d8] flex flex-wrap gap-1.5 text-[11px] font-mono text-stone-600">
                <span className="px-2 py-0.5 rounded bg-white border border-[#e8e2d8]">
                  3, 4, & 6 Frame
                </span>
                <span className="px-2 py-0.5 rounded bg-white border border-[#e8e2d8]">
                  Timer 3s • 5s • 10s
                </span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-[#faf8f5] rounded-2xl p-6 sm:p-8 border border-[#e8e2d8] hover:border-stone-400 transition-all flex flex-col justify-between shadow-2xs group">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-[#c83d3d] text-white">
                    02
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#e8e2d8] flex items-center justify-center text-stone-800 group-hover:text-[#c83d3d] transition-colors">
                    <Camera className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-heading font-bold text-stone-950 mb-2">
                  Berpose & Jepret Spontan
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-6">
                  Arahkan tatapan ke kamera Anda. Studio memandu dengan efek
                  suara beeps countdown serta kilatan flash shutter otentik
                  seperti photobox sungguhan.
                </p>
              </div>

              <div className="pt-4 border-t border-[#e8e2d8] flex flex-wrap gap-1.5 text-[11px] font-mono text-stone-600">
                <span className="px-2 py-0.5 rounded bg-white border border-[#e8e2d8]">
                  Webcam Mirror Mode
                </span>
                <span className="px-2 py-0.5 rounded bg-white border border-[#e8e2d8]">
                  Flash Shutter FX
                </span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-[#faf8f5] rounded-2xl p-6 sm:p-8 border border-[#e8e2d8] hover:border-stone-400 transition-all flex flex-col justify-between shadow-2xs group">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-stone-950 text-white">
                    03
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#e8e2d8] flex items-center justify-center text-stone-800 group-hover:text-[#c83d3d] transition-colors">
                    <Download className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-heading font-bold text-stone-950 mb-2">
                  Pilih Frame & Unduh HD
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-6">
                  Kustomisasi warna frame dari 9 palet aesthetic studio, tulis
                  pesan kenangan atau tanggal spesial, lalu unduh strip foto
                  berkualitas cetak 300 DPI.
                </p>
              </div>

              <div className="pt-4 border-t border-[#e8e2d8] flex flex-wrap gap-1.5 text-[11px] font-mono text-stone-600">
                <span className="px-2 py-0.5 rounded bg-white border border-[#e8e2d8]">
                  9 Warna Frame
                </span>
                <span className="px-2 py-0.5 rounded bg-white border border-[#e8e2d8]">
                  Unduh PNG 300 DPI
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase 9 Warna Frame Studio Section */}
      <section className="py-16 sm:py-24 bg-[#faf8f5]">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-[#e8e2d8] text-stone-700 text-[11px] sm:text-xs font-mono tracking-wider uppercase mb-3 shadow-2xs">
                <Palette className="w-3.5 h-3.5 text-[#c83d3d]" />
                Koleksi Palet Studio
              </div>
              <h2 className="text-2xl sm:text-4xl font-heading font-black text-stone-950 tracking-tight">
                9 Pilihan Frame Studio <br />
                <span className="text-[#c83d3d] font-serif italic font-normal">
                  Bernuansa Kertas Analog.
                </span>
              </h2>
            </div>
            <p className="text-stone-600 text-xs sm:text-sm max-w-md leading-relaxed">
              Klik warna frame di bawah untuk melihat simulasi tampilan strip
              secara langsung sebelum Anda mulai berfoto di studio.
            </p>
          </div>

          {/* Interactive Frame Showcase Grid + Live Strip Mockup */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: 9 Color Theme Swatches */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {BACKGROUND_THEMES.map((theme) => {
                const isSelected = selectedThemeId === theme.id;
                return (
                  <button
                    key={theme.id}
                    onClick={() => setSelectedThemeId(theme.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between cursor-pointer ${
                      isSelected
                        ? "border-stone-950 bg-white ring-2 ring-stone-950/10 shadow-sm"
                        : "border-[#e8e2d8] bg-white/70 hover:bg-white hover:border-stone-400"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div
                        className="w-7 h-7 rounded-lg border shadow-2xs flex items-center justify-center"
                        style={{
                          backgroundColor: theme.bgValue,
                          borderColor: theme.borderColor || "#cbd5e1",
                        }}
                      >
                        {isSelected && (
                          <CheckCircle2
                            className="w-4 h-4"
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
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 border border-amber-300">
                          35mm Film
                        </span>
                      )}
                    </div>
                    <div>
                      <div className="font-bold text-xs sm:text-sm text-stone-900 leading-tight">
                        {theme.name}
                      </div>
                      <div className="text-[11px] font-mono text-stone-500 mt-0.5">
                        {theme.bgValue}
                      </div>
                    </div>
                  </button>
                );
              })}

              <div className="sm:col-span-3 pt-3">
                <div className="p-4 rounded-xl bg-white border border-[#e8e2d8] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                  <div className="text-stone-700">
                    Warna Terpilih:{" "}
                    <strong className="text-stone-950">
                      {currentTheme.name}
                    </strong>{" "}
                    ({currentTheme.bgValue})
                  </div>
                  <Link
                    href="/booth"
                    className="inline-flex items-center gap-1.5 font-bold text-white bg-stone-950 hover:bg-stone-800 px-4 py-2 rounded-lg transition-colors cursor-pointer"
                  >
                    <span>Coba di Studio</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right: Live Realistic Strip Preview Mockup */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative">
                {/* Physical Strip Mockup Container */}
                <div
                  className="w-56 sm:w-64 p-4 rounded-xl shadow-xl transition-all duration-300 relative border"
                  style={{
                    backgroundColor: currentTheme.bgValue,
                    color: currentTheme.textColor,
                    borderColor: currentTheme.borderColor || "#e4e4e7",
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

                  {/* 3 Photo Slots */}
                  <div className="space-y-2.5">
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-black/10 shadow-xs bg-stone-200">
                      <Image
                        src="/images/gallery_strip.jpg"
                        alt="Photo Frame 1"
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-black/10 shadow-xs bg-stone-200">
                      <Image
                        src="/images/hero.jpg"
                        alt="Photo Frame 2"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-black/10 shadow-xs bg-stone-200">
                      <Image
                        src="/images/demo_1.jpg"
                        alt="Photo Frame 3"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                  </div>

                  {/* Strip Footer */}
                  <div className="pt-3 text-center space-y-1">
                    <div className="text-xs font-serif italic tracking-wide">
                      Sweet Memories Together
                    </div>
                    <div
                      className="text-[9px] font-mono tracking-widest uppercase flex items-center justify-center gap-1.5"
                      style={{ color: currentTheme.subtextColor }}
                    >
                      <Calendar className="w-2.5 h-2.5 inline" />
                      <span>05.10.2026 • JAKARTA</span>
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

      {/* Studio Showcase & Launcher Banner */}
      <section
        id="photobooth"
        className="py-14 sm:py-20 bg-white border-t border-[#e8e2d8]"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto bg-[#1c1917] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-14 text-white shadow-xl relative overflow-hidden border border-stone-800">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Left Column: Copy & Studio Launch */}
              <div className="lg:col-span-7 space-y-5 sm:space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-stone-800 border border-stone-700 text-stone-300 text-xs font-mono tracking-wider uppercase">
                  <Film className="w-3.5 h-3.5 text-[#c83d3d]" />
                  Full Screen Photobooth Studio
                </div>

                <h2 className="text-2xl sm:text-4xl md:text-5xl font-heading font-black tracking-tight leading-tight text-white">
                  Pengalaman Photobooth <br />
                  <span className="text-[#c83d3d] font-serif italic font-normal">
                    Fokus & Layar Penuh.
                  </span>
                </h2>

                <p className="text-stone-400 text-sm sm:text-base md:text-lg leading-relaxed">
                  Kamera live, pilihan jumlah jepretan (3, 4, 6), durasi timer
                  fleksibel (3s, 5s, 10s), dan kustomisasi 9 frame aesthetic
                  dirancang khusus dalam format <strong>Full Screen Studio</strong>{" "}
                  agar Anda leluasa berekspresi tanpa gangguan visual.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 py-1 text-xs sm:text-sm text-stone-300">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#c83d3d] shrink-0 stroke-[3]" />
                    <span>Pilihan 3, 4, & 6 Foto</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#c83d3d] shrink-0 stroke-[3]" />
                    <span>Hitung Mundur 3s, 5s, 10s</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#c83d3d] shrink-0 stroke-[3]" />
                    <span>9 Pilihan Warna Frame Studio</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#c83d3d] shrink-0 stroke-[3]" />
                    <span>Download HD & Siap Cetak</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/booth"
                    className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl font-bold text-sm sm:text-base text-white bg-[#c83d3d] hover:bg-[#b23232] transition-all shadow-md cursor-pointer text-center"
                  >
                    <Maximize2 className="w-4 h-4" />
                    <span>Masuk ke Full Screen Studio</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Right Column: Physical Strip Preview Card */}
              <div className="lg:col-span-5 flex justify-center pt-4 lg:pt-0">
                <Link href="/booth" className="group cursor-pointer">
                  <div className="relative w-48 sm:w-56 md:w-60 transform rotate-1 sm:rotate-2 group-hover:rotate-0 transition-transform duration-500 shadow-2xl rounded-xl overflow-hidden border-4 border-stone-800 bg-[#121214]">
                    <Image
                      src="/images/gallery_strip.jpg"
                      alt="Preview Photostrip Studio"
                      width={280}
                      height={600}
                      className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/20 flex flex-col justify-end p-3 sm:p-4 text-center">
                      <span className="text-xs font-mono font-medium text-stone-200 flex items-center justify-center gap-1.5 bg-stone-900/80 backdrop-blur-md py-2 px-3 rounded-md border border-stone-700">
                        <Camera className="w-3.5 h-3.5 text-[#c83d3d]" /> Buka
                        Studio Photobooth
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="bg-[#18181b] text-stone-300 pt-16 sm:pt-20 pb-10 sm:pb-12 border-t border-stone-800"
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
            <div className="col-span-1 sm:col-span-2">
              <div className="text-2xl font-heading font-bold text-white mb-4 flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-md bg-stone-800 text-white flex items-center justify-center text-xs font-mono font-bold">
                  RM
                </span>
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
                  className="w-9 h-9 rounded-lg bg-stone-800 flex items-center justify-center hover:bg-stone-700 transition-colors text-white text-xs"
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
                  className="w-9 h-9 rounded-lg bg-stone-800 flex items-center justify-center hover:bg-stone-700 transition-colors text-white"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  aria-label="Phone"
                  className="w-9 h-9 rounded-lg bg-stone-800 flex items-center justify-center hover:bg-stone-700 transition-colors text-white"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div>
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
                    className="hover:text-white transition-colors flex items-center gap-1.5 font-medium text-stone-200"
                  >
                    <Camera className="w-3.5 h-3.5 text-[#c83d3d]" /> Full Screen
                    Studio
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider font-mono mb-4">
                Kontak
              </h4>
              <ul className="space-y-2.5 sm:space-y-3 text-stone-400 text-xs sm:text-sm">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                  <span>Jakarta, Indonesia</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-stone-400 shrink-0" />
                  <span>+62 812 3456 7890</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-stone-400 shrink-0" />
                  <span>hello@ruangmomen.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-stone-800 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-[11px] sm:text-xs text-stone-500">
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

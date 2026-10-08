"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Maximize2,
  Minimize2,
  HelpCircle,
  Sparkles,
  Camera,
  Volume2,
  VolumeX,
  Play,
  Square,
} from "lucide-react";
import PhotoboothContainer from "@/components/Photobooth/PhotoboothContainer";
import { sounds } from "@/utils/audioEffects";

export default function BoothPage() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showTips, setShowTips] = useState(false);
  const [isGuidancePlaying, setIsGuidancePlaying] = useState(false);

  // Auto-play audio guidance once when user arrives at the studio page
  useEffect(() => {
    const timer = setTimeout(() => {
      sounds.playStudioGuidance(
        () => setIsGuidancePlaying(true),
        () => setIsGuidancePlaying(false)
      );
    }, 700);

    return () => {
      clearTimeout(timer);
      sounds.stopSpeech();
    };
  }, []);

  const toggleStudioGuidance = () => {
    if (isGuidancePlaying) {
      sounds.stopSpeech();
      setIsGuidancePlaying(false);
    } else {
      sounds.playStudioGuidance(
        () => setIsGuidancePlaying(true),
        () => setIsGuidancePlaying(false)
      );
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  return (
    <div
      className="min-h-screen text-stone-100 flex flex-col overflow-x-hidden selection:bg-blue-600 selection:text-white bg-[#0e0d0c] relative"
    >
      {/* Ambient Overhead Studio Key Light (Blue Gradasi) */}
      <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,_rgba(56,189,248,0.12)_0%,_rgba(37,99,235,0.04)_50%,_transparent_75%)]" />

      {/* Top Header Bar */}
      <header className="sticky top-0 z-40 bg-[#0c101c]/90 backdrop-blur-md border-b border-[#252d3d] shadow-md">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between">
          {/* Back & Brand */}
          <div className="flex items-center gap-2 sm:gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-stone-300 hover:text-white bg-[#141824] border border-[#283247] hover:border-sky-400/50 hover:-translate-y-0.5 px-2.5 sm:px-3.5 py-1.5 rounded-xl transition-all duration-200 shadow-xs active:scale-95"
            >
              <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-400" />
              <span>Beranda</span>
            </Link>

            <div className="h-4 w-px bg-[#283247] hidden sm:block" />

            <div className="flex items-center gap-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-gradient-to-br from-blue-500/20 via-sky-500/10 to-indigo-500/20 border border-sky-400/30 flex items-center justify-center text-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.2)] shrink-0">
                <Camera className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-400" />
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-heading font-black text-xs sm:text-base tracking-tight text-white">
                  Photobooth
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-[10px] font-mono font-bold tracking-wider uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                  Live Studio
                </span>
              </div>
            </div>
          </div>

          {/* Right Tools */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Audio Pengarahan Studio Button */}
            <button
              onClick={toggleStudioGuidance}
              title={isGuidancePlaying ? "Hentikan Audio Pengarahan" : "Putar Audio Pengarahan Studio"}
              className={`inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold px-2.5 sm:px-3 py-1.5 rounded-xl transition-all duration-200 cursor-pointer shadow-xs active:scale-95 border ${
                isGuidancePlaying
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-sky-400/50 shadow-md shadow-blue-500/30 animate-pulse"
                  : "bg-[#141824] text-stone-300 hover:text-white border-[#283247] hover:border-sky-400/50 hover:-translate-y-0.5"
              }`}
            >
              <Volume2 className={`w-3.5 h-3.5 ${isGuidancePlaying ? "text-white" : "text-sky-400"}`} />
              <span className="hidden sm:inline">
                {isGuidancePlaying ? "Hentikan Suara" : "Pengarahan Studio"}
              </span>
            </button>

            <button
              onClick={() => setShowTips(!showTips)}
              className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-stone-300 hover:text-white bg-[#141824] border border-[#283247] hover:border-sky-400/50 hover:-translate-y-0.5 px-2.5 sm:px-3 py-1.5 rounded-xl transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
            >
              <HelpCircle className="w-3.5 h-3.5 text-sky-400" />
              <span className="hidden sm:inline">Tips Berpose</span>
            </button>

            <button
              onClick={toggleFullscreen}
              title={isFullscreen ? "Keluar Fullscreen" : "Mode Layar Penuh"}
              className="p-1.5 sm:p-2 rounded-xl bg-[#141824] border border-[#283247] hover:border-sky-400/50 hover:-translate-y-0.5 text-stone-300 hover:text-white transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
            >
              {isFullscreen ? <Minimize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-400" /> : <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-400" />}
            </button>
          </div>
        </div>
      </header>

      {/* Audio Guidance Notification Bar */}
      {isGuidancePlaying && (
        <div className="bg-[#0b1424] border-b border-sky-500/30 py-2 sm:py-2.5 px-3 sm:px-4 animate-slide-up duration-200 relative z-30 shadow-lg">
          <div className="max-w-4xl mx-auto flex items-center justify-between text-xs sm:text-sm text-stone-200">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-ping shrink-0" />
              <span className="text-sky-300 font-mono text-[11px] sm:text-xs uppercase font-bold shrink-0">
                Pemandu Studio:
              </span>
              <span className="text-white text-xs sm:text-sm font-medium line-clamp-1">
                &ldquo;Selamat datang di Studio Photobooth RuangMomen! Pilih jumlah foto dan timer di bawah, lalu klik Mulai Jepret Foto.&rdquo;
              </span>
            </div>
            <button
              onClick={() => {
                sounds.stopSpeech();
                setIsGuidancePlaying(false);
              }}
              className="text-xs text-sky-400 hover:text-sky-300 font-bold underline ml-3 cursor-pointer shrink-0"
            >
              Hentikan
            </button>
          </div>
        </div>
      )}

      {/* Quick Tips Drawer */}
      {showTips && (
        <div className="bg-[#101522] border-b border-[#252d3d] py-2.5 sm:py-3 px-3 sm:px-4 animate-slide-up duration-200 relative z-30">
          <div className="max-w-4xl mx-auto flex items-center justify-between text-xs md:text-sm text-stone-200">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-400 shrink-0" />
              <span>
                <strong>Tips Pose Studio:</strong> Pastikan pencahayaan ruangan merata, fokus pandangan ke webcam Anda, dan siapkan pose berbeda setiap jeda hitung mundur!
              </span>
            </div>
            <button
              onClick={() => setShowTips(false)}
              className="text-xs text-sky-400 hover:text-sky-300 font-bold underline ml-3 cursor-pointer shrink-0"
            >
              Tutup
            </button>
          </div>
        </div>
      )}

      {/* Main Photobooth Workspace */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-2.5 sm:px-6 lg:px-8 py-3 sm:py-6 md:py-8 flex flex-col justify-center relative z-10">
        <PhotoboothContainer />
      </main>

      {/* Footer minimal info */}
      <footer className="py-3 sm:py-4 border-t border-[#202736] text-center text-[10px] sm:text-xs text-stone-500 px-4 bg-[#0a0d14] relative z-10">
        <div className="flex items-center justify-center gap-1.5">
          <Sparkles className="w-3 h-3 text-sky-400" />
          <span>RuangMomen Online Photobooth Studio • Abadikan kenangan otentik berkualitas cetak 300 DPI</span>
        </div>
      </footer>
    </div>
  );
}

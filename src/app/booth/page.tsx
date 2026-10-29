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
      className="min-h-screen text-slate-900 flex flex-col overflow-x-hidden selection:bg-blue-600 selection:text-white bg-slate-50 relative"
    >
      {/* Ambient Overhead Studio Key Light (Blue Gradasi) */}
      <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,_rgba(56,189,248,0.1)_0%,_rgba(37,99,235,0.03)_50%,_transparent_75%)]" />

      {/* Top Header Bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between">
          {/* Back & Brand */}
          <div className="flex items-center gap-2 sm:gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200/80 border border-slate-200 hover:border-slate-300 hover:-translate-y-0.5 px-2.5 sm:px-3.5 py-1.5 rounded-xl transition-all duration-200 shadow-xs active:scale-95"
            >
              <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />
              <span>Beranda</span>
            </Link>

            <div className="h-4 w-px bg-slate-200 hidden sm:block" />

            <div className="flex items-center gap-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-gradient-to-br from-blue-500/15 via-sky-500/10 to-indigo-500/15 border border-sky-400/40 flex items-center justify-center text-blue-600 shadow-[0_0_12px_rgba(56,189,248,0.2)] shrink-0">
                <Camera className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-heading font-black text-xs sm:text-base tracking-tight text-slate-900">
                  Photobooth
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-[10px] font-mono font-bold tracking-wider uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
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
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-blue-500 shadow-md shadow-blue-500/30 animate-pulse"
                  : "bg-slate-100 text-slate-700 hover:text-slate-900 border-slate-200 hover:border-slate-300 hover:-translate-y-0.5"
              }`}
            >
              <Volume2 className={`w-3.5 h-3.5 ${isGuidancePlaying ? "text-white" : "text-blue-600"}`} />
              <span className="hidden sm:inline">
                {isGuidancePlaying ? "Hentikan Suara" : "Pengarahan Studio"}
              </span>
            </button>

            <button
              onClick={() => setShowTips(!showTips)}
              className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 border border-slate-200 hover:border-slate-300 hover:-translate-y-0.5 px-2.5 sm:px-3 py-1.5 rounded-xl transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
            >
              <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
              <span className="hidden sm:inline">Tips Berpose</span>
            </button>

            <button
              onClick={toggleFullscreen}
              title={isFullscreen ? "Keluar Fullscreen" : "Mode Layar Penuh"}
              className="p-1.5 sm:p-2 rounded-xl bg-slate-100 border border-slate-200 hover:border-slate-300 hover:-translate-y-0.5 text-slate-700 hover:text-slate-900 transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
            >
              {isFullscreen ? <Minimize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" /> : <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />}
            </button>
          </div>
        </div>
      </header>

      {/* Audio Guidance Notification Bar */}
      {isGuidancePlaying && (
        <div className="bg-blue-50/95 border-b border-blue-200 py-2 sm:py-2.5 px-3 sm:px-4 animate-slide-up duration-200 relative z-30 shadow-xs">
          <div className="max-w-4xl mx-auto flex items-center justify-between text-xs sm:text-sm text-slate-800">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-ping shrink-0" />
              <span className="text-blue-700 font-mono text-[11px] sm:text-xs uppercase font-bold shrink-0">
                Pemandu Studio:
              </span>
              <span className="text-slate-900 text-xs sm:text-sm font-medium line-clamp-1">
                &ldquo;Selamat datang di Studio Photobooth RuangMomen! Pilih jumlah foto dan timer di bawah, lalu klik Mulai Jepret Foto.&rdquo;
              </span>
            </div>
            <button
              onClick={() => {
                sounds.stopSpeech();
                setIsGuidancePlaying(false);
              }}
              className="text-xs text-blue-600 hover:text-blue-800 font-bold underline ml-3 cursor-pointer shrink-0"
            >
              Hentikan
            </button>
          </div>
        </div>
      )}

      {/* Quick Tips Drawer */}
      {showTips && (
        <div className="bg-blue-50/95 border-b border-blue-200 py-2.5 sm:py-3 px-3 sm:px-4 animate-slide-up duration-200 relative z-30">
          <div className="max-w-4xl mx-auto flex items-center justify-between text-xs md:text-sm text-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
              <span>
                <strong>Tips Pose Studio:</strong> Pastikan pencahayaan ruangan merata, fokus pandangan ke webcam Anda, dan siapkan pose berbeda setiap jeda hitung mundur!
              </span>
            </div>
            <button
              onClick={() => setShowTips(false)}
              className="text-xs text-blue-600 hover:text-blue-800 font-bold underline ml-3 cursor-pointer shrink-0"
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
      <footer className="py-3 sm:py-4 border-t border-slate-200 text-center text-[10px] sm:text-xs text-slate-500 px-4 bg-slate-100 relative z-10">
        <div className="flex items-center justify-center gap-1.5">
          <Sparkles className="w-3 h-3 text-blue-600" />
          <span>RuangMomen Online Photobooth Studio • Abadikan kenangan otentik berkualitas cetak 300 DPI</span>
        </div>
      </footer>
    </div>
  );
}

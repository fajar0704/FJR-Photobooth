"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Maximize2, Minimize2, HelpCircle } from "lucide-react";
import PhotoboothContainer from "@/components/Photobooth/PhotoboothContainer";

export default function BoothPage() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showTips, setShowTips] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-stone-900 flex flex-col overflow-x-hidden">
      {/* Top Header Bar */}
      <header className="sticky top-0 z-40 bg-[#faf8f5]/90 backdrop-blur-md border-b border-[#e8e2d8] shadow-2xs">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between">
          {/* Back & Logo */}
          <div className="flex items-center gap-2.5 sm:gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-stone-700 hover:text-stone-950 bg-white border border-[#e8e2d8] hover:border-stone-400 px-2.5 sm:px-3.5 py-1.5 rounded-lg transition-all"
            >
              <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Beranda</span>
            </Link>

            <div className="h-4 w-px bg-stone-300 hidden sm:block" />

            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-stone-950 text-white flex items-center justify-center text-[9px] sm:text-[10px] font-mono font-bold">
                RM
              </span>
              <span className="font-heading font-black text-xs sm:text-base tracking-tight text-stone-950">
                RuangMomen <span className="text-stone-500 font-mono text-[10px] sm:text-xs uppercase ml-0.5 sm:ml-1 hidden xs:inline">Studio</span>
              </span>
            </div>
          </div>

          {/* Right Tools */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={() => setShowTips(!showTips)}
              className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-stone-700 hover:text-stone-950 bg-white border border-[#e8e2d8] px-2.5 sm:px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
            >
              <HelpCircle className="w-3.5 h-3.5 text-stone-500" />
              <span className="hidden sm:inline">Tips Berpose</span>
            </button>

            <button
              onClick={toggleFullscreen}
              title={isFullscreen ? "Keluar Fullscreen" : "Mode Layar Penuh"}
              className="p-1.5 sm:p-2 rounded-lg bg-white border border-[#e8e2d8] hover:border-stone-400 text-stone-700 transition-colors cursor-pointer"
            >
              {isFullscreen ? <Minimize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Quick Tips Drawer */}
      {showTips && (
        <div className="bg-[#f3eee7] border-b border-[#e8e2d8] py-2.5 sm:py-3 px-3 sm:px-4">
          <div className="max-w-4xl mx-auto flex items-center justify-between text-xs md:text-sm text-stone-800">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#c83d3d] shrink-0" />
              <span>
                <strong>Tips Pose Studio:</strong> Pastikan pencahayaan ruangan merata, fokus pandangan ke webcam Anda, dan siapkan pose berbeda setiap jeda hitung mundur!
              </span>
            </div>
            <button
              onClick={() => setShowTips(false)}
              className="text-xs text-stone-700 font-bold hover:underline ml-3 cursor-pointer shrink-0"
            >
              Tutup
            </button>
          </div>
        </div>
      )}

      {/* Main Photobooth Workspace */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-2.5 sm:px-6 lg:px-8 py-4 sm:py-6 md:py-8 flex flex-col justify-center">
        <PhotoboothContainer />
      </main>

      {/* Footer minimal info */}
      <footer className="py-3 sm:py-4 border-t border-[#e8e2d8] text-center text-[10px] sm:text-xs text-stone-500 px-4">
        RuangMomen Online Photobooth Studio • Abadikan kenangan otentik berkualitas cetak studio
      </footer>
    </div>
  );
}

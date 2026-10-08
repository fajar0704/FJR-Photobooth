"use client";

import React, { useState } from "react";
import {
  Download,
  Printer,
  RefreshCw,
  Sparkles,
  Palette,
  Wand2,
  LayoutGrid,
  Type,
  Calendar,
  Check,
  Smile,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  PhotoboothSettings,
  BACKGROUND_THEMES,
  PHOTO_FILTERS,
  STICKERS,
} from "@/utils/photoboothTypes";
import StripPreview from "./StripPreview";
import { renderPhotostrip, downloadDataUrl } from "@/utils/canvasRenderer";

interface CustomizerViewProps {
  photos: string[];
  settings: PhotoboothSettings;
  onChangeSettings: (updater: (prev: PhotoboothSettings) => PhotoboothSettings) => void;
  onRetakeAll: () => void;
  onRetakeSingle?: (index: number) => void;
}

export default function CustomizerView({
  photos,
  settings,
  onChangeSettings,
  onRetakeAll,
  onRetakeSingle,
}: CustomizerViewProps) {
  const [isExporting, setIsExporting] = useState<boolean>(false);
  const [downloadSuccess, setDownloadSuccess] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<"frame" | "filter" | "text" | "sticker">("frame");
  const [framePage, setFramePage] = useState<number>(() => {
    const idx = BACKGROUND_THEMES.findIndex((t) => t.id === settings.background.id);
    return idx >= 0 ? Math.floor(idx / 6) : 0;
  });
  const FRAMES_PER_PAGE = 6;
  const totalFramePages = Math.ceil(BACKGROUND_THEMES.length / FRAMES_PER_PAGE);
  const currentFrames = BACKGROUND_THEMES.slice(
    framePage * FRAMES_PER_PAGE,
    (framePage + 1) * FRAMES_PER_PAGE
  );

  // Handle Download High-Res Photostrip
  const handleDownloadStrip = async () => {
    try {
      setIsExporting(true);
      const dataUrl = await renderPhotostrip(photos, settings);
      const dateTag = new Date().toISOString().slice(0, 10);
      downloadDataUrl(dataUrl, `RuangMomen-Photostrip-${dateTag}.png`);
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 4000);
    } catch (err) {
      console.error("Export error:", err);
      alert("Gagal mengunduh foto strip. Silakan coba lagi.");
    } finally {
      setIsExporting(false);
    }
  };

  // Handle Download Individual Photos
  const handleDownloadIndividual = () => {
    photos.forEach((photo, idx) => {
      setTimeout(() => {
        downloadDataUrl(photo, `RuangMomen-Foto-${idx + 1}.jpg`);
      }, idx * 250);
    });
  };

  // Handle Print
  const handlePrint = async () => {
    try {
      const dataUrl = await renderPhotostrip(photos, settings);
      const printWindow = window.open("", "_blank");
      if (!printWindow) {
        alert("Pop-up diblokir. Izinkan pop-up untuk mencetak foto.");
      } else {
        printWindow.document.write(`
          <html>
            <head>
              <title>Cetak RuangMomen Photostrip</title>
              <style>
                @page { size: auto; margin: 10mm; }
                body { margin: 0; display: flex; justify-content: center; align-items: center; background: #fff; }
                img { max-height: 95vh; max-width: 95vw; object-fit: contain; box-shadow: 0 4px 12px rgba(0,0,0,0.15); }
              </style>
            </head>
            <body>
              <img src="${dataUrl}" onload="window.print(); window.close();" />
            </body>
          </html>
        `);
        printWindow.document.close();
      }
    } catch (err) {
      console.error("Print error:", err);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-2 sm:py-4">
      {/* Success Notification Banner */}
      {downloadSuccess && (
        <div className="mb-4 sm:mb-6 p-4 rounded-2xl bg-emerald-600 text-white flex items-center justify-between shadow-xl animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 shrink-0" />
            <div>
              <p className="font-bold text-sm md:text-base">Foto strip berhasil diunduh!</p>
              <p className="text-xs text-emerald-100">Kualitas HD siap dicetak atau dibagikan ke Instagram & TikTok.</p>
            </div>
          </div>
          <button
            onClick={() => setDownloadSuccess(false)}
            className="text-xs bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-full font-semibold cursor-pointer"
          >
            Tutup
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        {/* Left Column: Live Visual Photostrip Preview */}
        <div className="lg:col-span-5 flex flex-col items-center sticky top-20 sm:top-24">
          <div className="w-full bg-[#0d121f]/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-[#232c3d] shadow-2xl flex flex-col items-center">
            <div className="text-xs font-bold text-sky-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              Live Preview Photostrip
            </div>

            <StripPreview
              photos={photos}
              settings={settings}
              onRetakePhoto={onRetakeSingle}
            />

            <p className="text-[10px] sm:text-[11px] text-stone-400 mt-3 text-center font-mono">
              💡 Ketuk foto di atas jika ingin mengulang pose tertentu
            </p>
          </div>
        </div>

        {/* Right Column: Customization Controls & Download Options */}
        <div className="lg:col-span-7 bg-[#0d121f]/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl border border-[#232c3d] space-y-5 sm:space-y-6">
          {/* Header Title */}
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#161f33] text-sky-300 text-xs font-mono uppercase tracking-wider mb-2 border border-[#283857]">
              <Sparkles className="w-3 h-3 text-sky-400" />
              RuangMomen Studio Customizer
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-black text-white tracking-tight">
              Kustomisasi Strip Fotomu
            </h2>
            <p className="text-stone-400 text-xs sm:text-sm mt-1">
              Pilih warna frame, filter foto studio, format tata letak, dan tambahkan stiker lucu.
            </p>
          </div>

          {/* Navigation Tabs for Customizer */}
          <div className="flex border-b border-[#232c3d] pb-3 gap-1.5 sm:gap-2 overflow-x-auto">
            {[
              { id: "frame", label: "Frame & Warna", icon: Palette },
              { id: "filter", label: "Filter Foto", icon: Wand2 },
              { id: "text", label: "Teks & Tanggal", icon: Type },
              { id: "sticker", label: "Stiker", icon: Smile },
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer whitespace-nowrap active:scale-95 ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/25 border border-sky-400/40"
                      : "text-stone-400 hover:bg-[#151c2e] hover:text-white"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab 1: Frame & Background Themes */}
          {activeTab === "frame" && (
            <div key="frame-tab" className="space-y-5 animate-fade-in">
              {/* Aesthetic Background Choices with Pagination */}
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <label className="block text-xs sm:text-sm font-bold text-stone-200">
                    Pilih Background Frame Aesthetic ({BACKGROUND_THEMES.length} Pilihan)
                  </label>
                  <div className="flex items-center gap-1.5 bg-[#121826] px-2 py-1 rounded-lg border border-[#232c3d]">
                    <span className="text-[10px] sm:text-xs font-mono text-stone-400">
                      Hal. <span className="text-sky-400 font-bold">{framePage + 1}</span>/{totalFramePages}
                    </span>
                    <button
                      type="button"
                      disabled={framePage === 0}
                      onClick={() => setFramePage((p) => Math.max(0, p - 1))}
                      className="p-1 rounded-md text-stone-300 hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer disabled:cursor-not-allowed transition-colors"
                      title="Halaman Sebelumnya"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      disabled={framePage >= totalFramePages - 1}
                      onClick={() => setFramePage((p) => Math.min(totalFramePages - 1, p + 1))}
                      className="p-1 rounded-md text-stone-300 hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer disabled:cursor-not-allowed transition-colors"
                      title="Halaman Berikutnya"
                    >
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                  {currentFrames.map((theme) => {
                    const isSelected = settings.background.id === theme.id;
                    return (
                      <button
                        key={theme.id}
                        type="button"
                        onClick={() =>
                          onChangeSettings((prev) => ({
                            ...prev,
                            background: theme,
                          }))
                        }
                        className={`relative p-3 rounded-xl border-2 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg flex flex-col items-center justify-center text-center cursor-pointer min-h-[85px] active:scale-95 ${
                          isSelected
                            ? "border-sky-400 ring-2 ring-sky-400/40 shadow-md shadow-sky-500/20 scale-102"
                            : "border-[#232c3d] hover:border-sky-500/40"
                        }`}
                        style={{
                          background: theme.bgValue,
                          borderColor: isSelected ? "#38bdf8" : theme.borderColor || "#232c3d",
                        }}
                      >
                        <span
                          className="font-bold text-xs md:text-sm line-clamp-1"
                          style={{ color: theme.textColor }}
                        >
                          {theme.name}
                        </span>
                        {theme.hasFilmHoles && (
                          <span className="text-[10px] text-amber-400 font-semibold mt-1">
                            35mm Strip
                          </span>
                        )}
                        {isSelected && (
                          <span className="absolute top-2 right-2 w-5 h-5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-md">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Pagination Dots indicator */}
                <div className="flex items-center justify-center gap-2 mt-3">
                  {Array.from({ length: totalFramePages }).map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setFramePage(idx)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        framePage === idx
                          ? "w-6 bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.5)]"
                          : "w-2 bg-[#232c3d] hover:bg-stone-500"
                      }`}
                      aria-label={`Buka halaman frame ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Layout Choices (only if 4 or 6 photos) */}
              {(photos.length === 4 || photos.length === 6) && (
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-stone-200 mb-2.5">
                    Tata Letak (Layout)
                  </label>
                  <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                    <button
                      type="button"
                      onClick={() =>
                        onChangeSettings((prev) => ({
                          ...prev,
                          layout: "strip",
                        }))
                      }
                      className={`p-3 sm:p-3.5 rounded-xl border-2 flex items-center justify-center gap-2 font-bold text-xs sm:text-sm cursor-pointer transition-all active:scale-95 ${
                        settings.layout === "strip"
                          ? "border-sky-400 bg-sky-500/15 text-white shadow-sm ring-1 ring-sky-400/40"
                          : "border-[#232c3d] text-stone-300 hover:border-sky-500/40 bg-[#121826]"
                      }`}
                    >
                      <span>Klasik Strip (1 Kolom)</span>
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        onChangeSettings((prev) => ({
                          ...prev,
                          layout: "grid",
                        }))
                      }
                      className={`p-3 sm:p-3.5 rounded-xl border-2 flex items-center justify-center gap-2 font-bold text-xs sm:text-sm cursor-pointer transition-all active:scale-95 ${
                        settings.layout === "grid"
                          ? "border-sky-400 bg-sky-500/15 text-white shadow-sm ring-1 ring-sky-400/40"
                          : "border-[#232c3d] text-stone-300 hover:border-sky-500/40 bg-[#121826]"
                      }`}
                    >
                      <LayoutGrid className="w-4 h-4" />
                      <span>Grid Kotak (2 Kolom)</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Tab 2: Filters */}
          {activeTab === "filter" && (
            <div key="filter-tab" className="space-y-4 animate-fade-in">
              <label className="block text-xs sm:text-sm font-bold text-stone-200 mb-2">
                Pilih Efek Warna Foto
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3">
                {PHOTO_FILTERS.map((f) => {
                  const isSelected = settings.filter.id === f.id;
                  return (
                    <button
                      key={f.id}
                      type="button"
                      onClick={() =>
                        onChangeSettings((prev) => ({
                          ...prev,
                          filter: f,
                        }))
                      }
                      className={`p-3 sm:p-4 rounded-xl border-2 transition-all flex flex-col items-center justify-center cursor-pointer active:scale-95 ${
                        isSelected
                          ? "border-sky-400 bg-sky-500/15 text-white shadow-md ring-1 ring-sky-400/40 scale-102"
                          : "border-[#232c3d] hover:border-sky-500/40 text-stone-300 bg-[#121826] hover:-translate-y-0.5"
                      }`}
                    >
                      <span className="font-bold text-xs sm:text-sm">{f.name}</span>
                      <span className="text-[10px] sm:text-[11px] text-stone-400 mt-1">
                        {f.id === "bw"
                          ? "Monokrom klasik"
                          : f.id === "warm"
                          ? "Nuansa hangat retro"
                          : f.id === "korean-soft"
                          ? "Flawless cerah"
                          : "Warna natural"}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Tab 3: Text & Date */}
          {activeTab === "text" && (
            <div key="text-tab" className="space-y-5 sm:space-y-6 animate-fade-in">
              {/* Custom Caption Input */}
              <div>
                <label className="block text-xs sm:text-sm font-bold text-stone-200 mb-2">
                  Tulis Pesan / Caption Kustom
                </label>
                <input
                  type="text"
                  maxLength={40}
                  value={settings.customCaption}
                  onChange={(e) =>
                    onChangeSettings((prev) => ({
                      ...prev,
                      customCaption: e.target.value,
                    }))
                  }
                  placeholder="Contoh: Besties Day Out 💕 / Graduation 2026"
                  className="w-full px-4 py-2.5 sm:py-3 rounded-xl border border-[#232c3d] bg-[#121826] text-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all placeholder:text-stone-500"
                />
                <p className="text-[11px] sm:text-xs text-stone-400 mt-1.5 flex justify-between font-mono">
                  <span>Akan tercetak di bagian bawah foto strip</span>
                  <span>{settings.customCaption.length}/40 karakter</span>
                </p>
              </div>

              {/* Show Date Toggle */}
              <div className="flex items-center justify-between p-3.5 sm:p-4 rounded-xl bg-[#121826] border border-[#232c3d]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#182033] text-sky-400 border border-[#283552] flex items-center justify-center">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-stone-200">Tampilkan Stempel Tanggal</p>
                    <p className="text-[11px] text-stone-400">Mencantumkan tanggal hari ini pada strip</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    onChangeSettings((prev) => ({
                      ...prev,
                      showDate: !prev.showDate,
                    }))
                  }
                  className={`w-12 h-7 rounded-full p-1 transition-colors duration-200 ease-in-out cursor-pointer ${
                    settings.showDate ? "bg-sky-500" : "bg-[#232c3d]"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-200 ease-in-out ${
                      settings.showDate ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
            </div>
          )}

          {/* Tab 4: Stickers */}
          {activeTab === "sticker" && (
            <div key="sticker-tab" className="space-y-4 animate-fade-in">
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs sm:text-sm font-bold text-stone-200">
                  Pilih Stiker Hiasan
                </label>
                {settings.selectedSticker && (
                  <button
                    onClick={() =>
                      onChangeSettings((prev) => ({
                        ...prev,
                        selectedSticker: null,
                      }))
                    }
                    className="text-xs text-sky-400 hover:underline font-semibold cursor-pointer"
                  >
                    Hapus Stiker
                  </button>
                )}
              </div>
              <div className="grid grid-cols-5 gap-2 sm:gap-3">
                {STICKERS.map((stk) => {
                  const isSelected = settings.selectedSticker === stk.symbol;
                  return (
                    <button
                      key={stk.id}
                      type="button"
                      onClick={() =>
                        onChangeSettings((prev) => ({
                          ...prev,
                          selectedSticker: isSelected ? null : stk.symbol,
                        }))
                      }
                      className={`p-2.5 sm:p-3 rounded-xl border-2 flex flex-col items-center justify-center transition-all cursor-pointer active:scale-95 ${
                        isSelected
                          ? "border-sky-400 bg-sky-500/20 ring-2 ring-sky-400/40 scale-105"
                          : "border-[#232c3d] hover:border-sky-500/40 bg-[#121826]"
                      }`}
                    >
                      <span className="text-2xl sm:text-3xl">{stk.symbol}</span>
                      <span className="text-[9px] sm:text-[10px] text-stone-400 mt-1">{stk.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Action & Download Section */}
          <div className="pt-5 sm:pt-6 border-t border-[#232c3d] space-y-3">
            {/* Primary Action: Download High Res Photostrip */}
            <button
              type="button"
              disabled={isExporting}
              onClick={handleDownloadStrip}
              className={`w-full py-3.5 px-6 rounded-xl font-heading font-bold text-sm md:text-base text-white shadow-lg flex items-center justify-center gap-2.5 transition-all duration-300 cursor-pointer ${
                isExporting
                  ? "bg-stone-700 cursor-wait opacity-80"
                  : "bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600 hover:from-blue-500 hover:via-sky-500 hover:to-indigo-500 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/35 border border-blue-400/30 active:scale-[0.98]"
              }`}
            >
              <Download className="w-4 h-4" />
              <span>{isExporting ? "Menyiapkan Foto HD..." : "Unduh Photostrip HD (PNG)"}</span>
            </button>

            {/* Secondary Actions Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
              {/* Download Individual Photos */}
              <button
                type="button"
                onClick={handleDownloadIndividual}
                className="py-2.5 sm:py-3 px-4 rounded-xl border border-[#232c3d] bg-[#121826] text-stone-300 hover:text-white hover:border-sky-400/50 hover:-translate-y-0.5 hover:shadow-md font-bold text-xs flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer active:scale-95"
              >
                <Download className="w-3.5 h-3.5 text-sky-400" />
                <span>Unduh Foto Satuan</span>
              </button>

              {/* Print */}
              <button
                type="button"
                onClick={handlePrint}
                className="py-2.5 sm:py-3 px-4 rounded-xl border border-[#232c3d] bg-[#121826] text-stone-300 hover:text-white hover:border-purple-400/50 hover:-translate-y-0.5 hover:shadow-md font-bold text-xs flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer active:scale-95"
              >
                <Printer className="w-3.5 h-3.5 text-purple-400" />
                <span>Cetak / Print</span>
              </button>

              {/* Retake All */}
              <button
                type="button"
                onClick={onRetakeAll}
                className="py-2.5 sm:py-3 px-4 rounded-xl border border-[#232c3d] bg-[#121826] text-stone-400 hover:text-rose-400 hover:border-rose-900/50 hover:-translate-y-0.5 hover:shadow-md font-bold text-xs flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer active:scale-95"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Foto Ulang Semua</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

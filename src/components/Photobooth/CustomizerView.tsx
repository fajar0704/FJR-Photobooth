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
        return;
      }
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
    } catch (err) {
      console.error("Print error:", err);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-4">
      {/* Success Notification Banner */}
      {downloadSuccess && (
        <div className="mb-6 p-4 rounded-2xl bg-emerald-500 text-white flex items-center justify-between shadow-xl animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 shrink-0" />
            <div>
              <p className="font-bold text-sm md:text-base">Foto strip berhasil diunduh!</p>
              <p className="text-xs text-emerald-100">Kualitas HD siap dicetak atau dibagikan ke Instagram & TikTok.</p>
            </div>
          </div>
          <button
            onClick={() => setDownloadSuccess(false)}
            className="text-xs bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-full font-semibold"
          >
            Tutup
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Live Visual Photostrip Preview */}
        <div className="lg:col-span-5 flex flex-col items-center sticky top-24">
          <div className="w-full bg-zinc-100/80 rounded-3xl p-6 border border-zinc-200/80 shadow-inner flex flex-col items-center">
            <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              Live Preview Photostrip
            </div>

            <StripPreview
              photos={photos}
              settings={settings}
              onRetakePhoto={onRetakeSingle}
            />

            <p className="text-[11px] text-zinc-400 mt-2 text-center">
              💡 Arahkan kursor ke foto di atas jika ingin mengulang foto tertentu
            </p>
          </div>
        </div>

        {/* Right Column: Customization Controls & Download Options */}
        <div className="lg:col-span-7 bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-xs border border-[#e8e2d8] space-y-6 sm:space-y-7">
          {/* Header Title */}
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-stone-100 text-stone-700 text-xs font-mono uppercase tracking-wider mb-2 border border-stone-200">
              <Sparkles className="w-3 h-3 text-[#c83d3d]" />
              RuangMomen Custom Studio
            </div>
            <h2 className="text-2xl md:text-3xl font-heading font-black text-stone-950 tracking-tight">
              Kustomisasi Strip Fotomu
            </h2>
            <p className="text-stone-500 text-xs md:text-sm mt-1">
              Pilih warna frame, filter foto studio, format tata letak, dan tambahkan stiker lucu.
            </p>
          </div>

          {/* Navigation Tabs for Customizer */}
          <div className="flex border-b border-gray-100 pb-3 gap-2 overflow-x-auto">
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
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs md:text-sm transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? "bg-gray-900 text-white shadow-md shadow-gray-900/20"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab 1: Frame & Background Themes */}
          {activeTab === "frame" && (
            <div className="space-y-6">
              {/* Aesthetic Background Choices */}
              <div>
                <label className="block text-xs sm:text-sm font-bold text-stone-900 mb-2.5">
                  Pilih Background Frame Aesthetic
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                  {BACKGROUND_THEMES.map((theme) => {
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
                        className={`relative p-3 rounded-xl border-2 transition-all flex flex-col items-center justify-center text-center cursor-pointer min-h-[85px] ${
                          isSelected
                            ? "border-stone-950 ring-2 ring-stone-950/20 shadow-xs scale-102"
                            : "border-stone-200 hover:border-stone-400"
                        }`}
                        style={{
                          background: theme.bgValue,
                          borderColor: isSelected ? undefined : theme.borderColor,
                        }}
                      >
                        <span
                          className="font-bold text-xs md:text-sm line-clamp-1"
                          style={{ color: theme.textColor }}
                        >
                          {theme.name}
                        </span>
                        {theme.hasFilmHoles && (
                          <span className="text-[10px] text-amber-500 font-semibold mt-1">
                            35mm Strip
                          </span>
                        )}
                        {isSelected && (
                          <span className="absolute top-2 right-2 w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center shadow-md">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Layout Choices (only if 4 or 6 photos) */}
              {(photos.length === 4 || photos.length === 6) && (
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-3">
                    Tata Letak (Layout)
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() =>
                        onChangeSettings((prev) => ({
                          ...prev,
                          layout: "strip",
                        }))
                      }
                      className={`p-3.5 rounded-2xl border-2 flex items-center justify-center gap-2.5 font-bold text-sm cursor-pointer transition-all ${
                        settings.layout === "strip"
                          ? "border-primary bg-pink-50/50 text-primary shadow-sm"
                          : "border-gray-200 text-gray-700 hover:border-gray-300"
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
                      className={`p-3.5 rounded-2xl border-2 flex items-center justify-center gap-2.5 font-bold text-sm cursor-pointer transition-all ${
                        settings.layout === "grid"
                          ? "border-primary bg-pink-50/50 text-primary shadow-sm"
                          : "border-gray-200 text-gray-700 hover:border-gray-300"
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
            <div className="space-y-4">
              <label className="block text-sm font-bold text-gray-900 mb-2">
                Pilih Efek Warna Foto
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
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
                      className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center justify-center cursor-pointer ${
                        isSelected
                          ? "border-purple-600 bg-purple-50 text-purple-900 shadow-md"
                          : "border-gray-200 hover:border-gray-300 text-gray-700 bg-white"
                      }`}
                    >
                      <span className="font-bold text-sm">{f.name}</span>
                      <span className="text-[11px] text-gray-400 mt-1">
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
            <div className="space-y-6">
              {/* Custom Caption Input */}
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2">
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
                  className="w-full px-4 py-3 rounded-2xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <p className="text-xs text-gray-400 mt-1.5 flex justify-between">
                  <span>Akan tercetak di bagian bawah foto strip</span>
                  <span>{settings.customCaption.length}/40 karakter</span>
                </p>
              </div>

              {/* Show Date Toggle */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gray-200 text-gray-700 flex items-center justify-center">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-800">Tampilkan Stempel Tanggal</p>
                    <p className="text-xs text-gray-500">Mencantumkan tanggal hari ini pada strip</p>
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
                    settings.showDate ? "bg-primary" : "bg-gray-300"
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
            <div className="space-y-4">
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-bold text-gray-900">
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
                    className="text-xs text-red-500 hover:underline font-semibold"
                  >
                    Hapus Stiker
                  </button>
                )}
              </div>
              <div className="grid grid-cols-5 gap-3">
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
                      className={`p-3 rounded-2xl border-2 flex flex-col items-center justify-center transition-all cursor-pointer ${
                        isSelected
                          ? "border-primary bg-pink-50 ring-2 ring-primary/20 scale-105"
                          : "border-gray-200 hover:border-gray-300 bg-white"
                      }`}
                    >
                      <span className="text-3xl">{stk.symbol}</span>
                      <span className="text-[10px] text-gray-500 mt-1">{stk.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Action & Download Section */}
          <div className="pt-6 border-t border-[#e8e2d8] space-y-3">
            {/* Primary Action: Download High Res Photostrip */}
            <button
              type="button"
              disabled={isExporting}
              onClick={handleDownloadStrip}
              className={`w-full py-3.5 px-6 rounded-xl font-heading font-bold text-sm md:text-base text-white shadow-sm flex items-center justify-center gap-2.5 transition-all cursor-pointer ${
                isExporting
                  ? "bg-stone-400 cursor-wait"
                  : "bg-stone-950 hover:bg-stone-800 active:scale-[0.99]"
              }`}
            >
              <Download className="w-4 h-4" />
              <span>{isExporting ? "Menyiapkan Foto HD..." : "Unduh Photostrip HD (PNG)"}</span>
            </button>

            {/* Secondary Actions Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Download Individual Photos */}
              <button
                type="button"
                onClick={handleDownloadIndividual}
                className="py-3 px-4 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Download className="w-4 h-4 text-sky-500" />
                <span>Unduh Foto Satuan</span>
              </button>

              {/* Print */}
              <button
                type="button"
                onClick={handlePrint}
                className="py-3 px-4 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Printer className="w-4 h-4 text-purple-500" />
                <span>Cetak / Print</span>
              </button>

              {/* Retake All */}
              <button
                type="button"
                onClick={onRetakeAll}
                className="py-3 px-4 rounded-xl border border-rose-200 text-rose-600 hover:bg-rose-50 font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Foto Ulang Semua</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

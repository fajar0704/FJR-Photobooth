"use client";

import React from "react";
import { Camera, Clock, Layers, Wand2, FlipHorizontal } from "lucide-react";
import { PhotoCount, CountdownDuration, PHOTO_FILTERS, PhotoboothSettings } from "@/utils/photoboothTypes";

interface SettingsPanelProps {
  settings: PhotoboothSettings;
  onChangeSettings: (updater: (prev: PhotoboothSettings) => PhotoboothSettings) => void;
  onStartSession: () => void;
  isCapturing: boolean;
}

export default function SettingsPanel({
  settings,
  onChangeSettings,
  onStartSession,
  isCapturing,
}: SettingsPanelProps) {
  const photoCountOptions: { count: PhotoCount; label: string; desc: string }[] = [
    { count: 3, label: "3 Foto", desc: "Strip Klasik Pendek" },
    { count: 4, label: "4 Foto", desc: "Strip Standar 4-Cuts" },
    { count: 6, label: "6 Foto", desc: "Koleksi Lengkap 6 Gaya" },
  ];

  const durationOptions: { duration: CountdownDuration; label: string; desc: string }[] = [
    { duration: 3, label: "3 Detik", desc: "Cepat & Spontan" },
    { duration: 5, label: "5 Detik", desc: "Waktu Ideal Bergaya" },
    { duration: 10, label: "10 Detik", desc: "Santai Siapkan Pose" },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto mt-4 sm:mt-6 bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-xs border border-[#e8e2d8] transition-all">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {/* Left Column: Number of Photos & Duration */}
        <div className="space-y-6">
          {/* Number of Photos */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-md bg-stone-100 text-stone-800 flex items-center justify-center">
                <Layers className="w-3.5 h-3.5" />
              </div>
              <label className="text-sm font-bold text-stone-900">
                Jumlah Foto per Strip
              </label>
            </div>

            <div className="grid grid-cols-3 gap-2.5">
              {photoCountOptions.map((opt) => {
                const isSelected = settings.photoCount === opt.count;
                return (
                  <button
                    key={opt.count}
                    type="button"
                    disabled={isCapturing}
                    onClick={() =>
                      onChangeSettings((prev) => ({
                        ...prev,
                        photoCount: opt.count,
                      }))
                    }
                    className={`relative p-3 rounded-xl text-left border transition-all flex flex-col items-center justify-center text-center cursor-pointer ${
                      isSelected
                        ? "border-stone-950 bg-stone-100/70 text-stone-950 font-bold shadow-2xs"
                        : "border-[#e8e2d8] hover:border-stone-400 bg-white text-stone-700"
                    } ${isCapturing ? "opacity-50 cursor-not-allowed" : ""}`}
                  >
                    <span className="text-xl font-heading font-black">
                      {opt.count}
                    </span>
                    <span className="text-xs mt-0.5 font-medium">
                      Foto
                    </span>
                    <span className="text-[10px] text-stone-400 mt-1 line-clamp-1">
                      {opt.desc}
                    </span>
                    {isSelected && (
                      <span className="absolute top-1.5 right-1.5 w-3.5 h-3.5 rounded-full bg-stone-950 text-white text-[9px] flex items-center justify-center font-bold">
                        ✓
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Countdown Timer Duration */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-md bg-stone-100 text-stone-800 flex items-center justify-center">
                <Clock className="w-3.5 h-3.5" />
              </div>
              <label className="text-sm font-bold text-stone-900">
                Durasi Hitung Mundur (Timer)
              </label>
            </div>

            <div className="grid grid-cols-3 gap-2.5">
              {durationOptions.map((opt) => {
                const isSelected = settings.duration === opt.duration;
                return (
                  <button
                    key={opt.duration}
                    type="button"
                    disabled={isCapturing}
                    onClick={() =>
                      onChangeSettings((prev) => ({
                        ...prev,
                        duration: opt.duration,
                      }))
                    }
                    className={`relative p-3 rounded-xl text-left border transition-all flex flex-col items-center justify-center text-center cursor-pointer ${
                      isSelected
                        ? "border-stone-950 bg-stone-100/70 text-stone-950 font-bold shadow-2xs"
                        : "border-[#e8e2d8] hover:border-stone-400 bg-white text-stone-700"
                    } ${isCapturing ? "opacity-50 cursor-not-allowed" : ""}`}
                  >
                    <span className="text-xl font-heading font-black">
                      {opt.duration}s
                    </span>
                    <span className="text-xs mt-0.5 font-medium">
                      Detik
                    </span>
                    <span className="text-[10px] text-stone-400 mt-1 line-clamp-1">
                      {opt.desc}
                    </span>
                    {isSelected && (
                      <span className="absolute top-1.5 right-1.5 w-3.5 h-3.5 rounded-full bg-stone-950 text-white text-[9px] flex items-center justify-center font-bold">
                        ✓
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Filter Tone & Camera Mirror */}
        <div className="space-y-6">
          {/* Live Filter Selection */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-md bg-stone-100 text-stone-800 flex items-center justify-center">
                <Wand2 className="w-3.5 h-3.5" />
              </div>
              <label className="text-sm font-bold text-stone-900">
                Filter Warna Foto
              </label>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {PHOTO_FILTERS.map((f) => {
                const isSelected = settings.filter.id === f.id;
                return (
                  <button
                    key={f.id}
                    type="button"
                    disabled={isCapturing}
                    onClick={() =>
                      onChangeSettings((prev) => ({
                        ...prev,
                        filter: f,
                      }))
                    }
                    className={`py-2 px-2.5 rounded-lg border text-xs font-medium transition-all cursor-pointer text-center ${
                      isSelected
                        ? "border-stone-950 bg-stone-950 text-white font-bold"
                        : "border-[#e8e2d8] text-stone-700 hover:border-stone-400 bg-white"
                    }`}
                  >
                    {f.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Camera Mirror / Selfie Toggle */}
          <div className="pt-2 flex items-center justify-between p-3.5 rounded-xl bg-[#faf8f5] border border-[#e8e2d8]">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-md bg-stone-200 text-stone-700 flex items-center justify-center">
                <FlipHorizontal className="w-3.5 h-3.5" />
              </div>
              <div>
                <p className="text-xs font-bold text-stone-900">Cermin Kamera (Mirror Selfie)</p>
                <p className="text-[11px] text-stone-500">Tampilan seperti saat bercermin</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() =>
                onChangeSettings((prev) => ({
                  ...prev,
                  mirrored: !prev.mirrored,
                }))
              }
              className={`w-11 h-6 rounded-full p-0.5 transition-colors duration-200 ease-in-out cursor-pointer ${
                settings.mirrored ? "bg-stone-950" : "bg-stone-300"
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full bg-white shadow-xs transform transition-transform duration-200 ease-in-out ${
                  settings.mirrored ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </button>
          </div>

          {/* Big Action Button */}
          <div className="pt-1">
            <button
              type="button"
              disabled={isCapturing}
              onClick={onStartSession}
              className={`w-full py-3.5 px-6 rounded-xl font-heading font-bold text-sm md:text-base text-white shadow-sm flex items-center justify-center gap-2.5 transition-all cursor-pointer ${
                isCapturing
                  ? "bg-stone-400 cursor-not-allowed opacity-80"
                  : "bg-stone-950 hover:bg-stone-800 active:scale-[0.99]"
              }`}
            >
              <Camera className="w-4 h-4" />
              <span>{isCapturing ? "Sesi Berlangsung..." : "Mulai Jepret Foto"}</span>
            </button>
            <p className="text-center text-[11px] text-stone-400 mt-2 font-mono">
              Otomatis hitung mundur {settings.duration}s untuk {settings.photoCount} jepretan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import React from "react";
import {
  Layers,
  Clock,
  Wand2,
  Camera,
  FlipHorizontal,
} from "lucide-react";
import {
  PhotoboothSettings,
  PhotoCount,
  CountdownDuration,
  PHOTO_FILTERS,
} from "@/utils/photoboothTypes";

interface SettingsPanelProps {
  settings: PhotoboothSettings;
  onChangeSettings: React.Dispatch<React.SetStateAction<PhotoboothSettings>>;
  onStartSession: () => void;
  isCapturing: boolean;
}

export default function SettingsPanel({
  settings,
  onChangeSettings,
  onStartSession,
  isCapturing,
}: SettingsPanelProps) {
  const photoCountOptions: { count: PhotoCount; desc: string }[] = [
    { count: 3, desc: "Classic Strip 3" },
    { count: 4, desc: "Standard 4-Cut" },
    { count: 6, desc: "Full Reel 6" },
  ];

  const durationOptions: { duration: CountdownDuration; desc: string }[] = [
    { duration: 3, desc: "Cepat & Spontan" },
    { duration: 5, desc: "Pas & Rileks" },
    { duration: 10, desc: "Banyak Waktu Pose" },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto mt-4 sm:mt-6 bg-[#0e1320]/90 backdrop-blur-xl rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl border border-[#232c3d] transition-all">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
        {/* Left Column: Number of Photos & Duration */}
        <div className="space-y-5 sm:space-y-6">
          {/* Number of Photos */}
          <div>
            <div className="flex items-center gap-2 mb-2.5 sm:mb-3">
              <div className="w-6 h-6 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/25 flex items-center justify-center">
                <Layers className="w-3.5 h-3.5" />
              </div>
              <label className="text-xs sm:text-sm font-bold text-stone-100">
                Jumlah Foto per Strip
              </label>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
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
                    className={`relative p-2.5 sm:p-3 rounded-xl text-left border transition-all duration-200 hover:-translate-y-0.5 flex flex-col items-center justify-center text-center cursor-pointer active:scale-95 ${
                      isSelected
                        ? "border-sky-500 bg-sky-500/15 text-white font-bold ring-1 ring-sky-500/50 shadow-md shadow-sky-500/20"
                        : "border-[#232c3d] hover:border-sky-500/40 bg-[#121826] text-stone-300"
                    } ${isCapturing ? "opacity-50 cursor-not-allowed" : ""}`}
                  >
                    <span className="text-lg sm:text-xl font-heading font-black text-white">
                      {opt.count}
                    </span>
                    <span className="text-[11px] sm:text-xs mt-0.5 font-medium text-stone-300">
                      Foto
                    </span>
                    <span className="text-[9px] sm:text-[10px] text-stone-400 mt-1 line-clamp-1 font-mono">
                      {opt.desc}
                    </span>
                    {isSelected && (
                      <span className="absolute top-1.5 right-1.5 w-3.5 h-3.5 rounded-full bg-sky-500 text-white text-[9px] flex items-center justify-center font-bold">
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
            <div className="flex items-center gap-2 mb-2.5 sm:mb-3">
              <div className="w-6 h-6 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/25 flex items-center justify-center">
                <Clock className="w-3.5 h-3.5" />
              </div>
              <label className="text-xs sm:text-sm font-bold text-stone-100">
                Durasi Hitung Mundur (Timer)
              </label>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
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
                    className={`relative p-2.5 sm:p-3 rounded-xl text-left border transition-all duration-200 hover:-translate-y-0.5 flex flex-col items-center justify-center text-center cursor-pointer active:scale-95 ${
                      isSelected
                        ? "border-amber-500 bg-amber-500/15 text-white font-bold ring-1 ring-amber-500/50 shadow-md shadow-amber-500/20"
                        : "border-[#232c3d] hover:border-amber-500/40 bg-[#121826] text-stone-300"
                    } ${isCapturing ? "opacity-50 cursor-not-allowed" : ""}`}
                  >
                    <span className="text-lg sm:text-xl font-heading font-black text-white">
                      {opt.duration}s
                    </span>
                    <span className="text-[11px] sm:text-xs mt-0.5 font-medium text-stone-300">
                      Detik
                    </span>
                    <span className="text-[9px] sm:text-[10px] text-stone-400 mt-1 line-clamp-1 font-mono">
                      {opt.desc}
                    </span>
                    {isSelected && (
                      <span className="absolute top-1.5 right-1.5 w-3.5 h-3.5 rounded-full bg-amber-500 text-white text-[9px] flex items-center justify-center font-bold">
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
        <div className="space-y-5 sm:space-y-6 flex flex-col justify-between">
          {/* Live Filter Selection */}
          <div>
            <div className="flex items-center gap-2 mb-2.5 sm:mb-3">
              <div className="w-6 h-6 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/25 flex items-center justify-center">
                <Wand2 className="w-3.5 h-3.5" />
              </div>
              <label className="text-xs sm:text-sm font-bold text-stone-100">
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
                    className={`py-2 px-2.5 rounded-xl border text-xs font-medium transition-all duration-200 hover:-translate-y-0.5 cursor-pointer text-center active:scale-95 ${
                      isSelected
                        ? "border-sky-400/50 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold shadow-md shadow-blue-500/25"
                        : "border-[#232c3d] text-stone-300 hover:border-sky-500/40 bg-[#121826]"
                    }`}
                  >
                    {f.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Camera Mirror / Selfie Toggle */}
          <div className="flex items-center justify-between p-3 sm:p-3.5 rounded-xl bg-[#121826] border border-[#232c3d]">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-[#182033] text-sky-400 border border-[#283552] flex items-center justify-center">
                <FlipHorizontal className="w-3.5 h-3.5" />
              </div>
              <div>
                <p className="text-xs font-bold text-stone-100">Cermin Kamera (Mirror Selfie)</p>
                <p className="text-[10px] sm:text-[11px] text-stone-400">Tampilan seperti saat bercermin</p>
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
                settings.mirrored ? "bg-sky-500" : "bg-[#232c3d]"
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
              className={`w-full py-3.5 px-6 rounded-xl font-heading font-bold text-sm md:text-base text-white shadow-lg flex items-center justify-center gap-2.5 transition-all duration-300 cursor-pointer ${
                isCapturing
                  ? "bg-stone-700 cursor-not-allowed opacity-80"
                  : "bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600 hover:from-blue-500 hover:via-sky-500 hover:to-indigo-500 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/35 border border-blue-400/30 active:scale-[0.98]"
              }`}
            >
              <Camera className="w-4 h-4" />
              <span>{isCapturing ? "Sesi Berlangsung..." : "Mulai Jepret Foto"}</span>
            </button>
            <p className="text-center text-[10px] sm:text-[11px] text-stone-400 mt-2 font-mono">
              Otomatis hitung mundur {settings.duration}s untuk {settings.photoCount} jepretan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

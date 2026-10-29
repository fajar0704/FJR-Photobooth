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
    <div className="w-full max-w-4xl mx-auto mt-4 sm:mt-6 bg-white/95 backdrop-blur-xl rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl border border-slate-200 transition-all">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
        {/* Left Column: Number of Photos & Duration */}
        <div className="space-y-5 sm:space-y-6">
          {/* Number of Photos */}
          <div>
            <div className="flex items-center gap-2 mb-2.5 sm:mb-3">
              <div className="w-6 h-6 rounded-lg bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center">
                <Layers className="w-3.5 h-3.5" />
              </div>
              <label className="text-xs sm:text-sm font-bold text-slate-900">
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
                        ? "border-blue-600 bg-blue-50 text-blue-700 font-bold ring-2 ring-blue-500/20 shadow-sm"
                        : "border-slate-200 hover:border-blue-300 bg-slate-50 hover:bg-slate-100 text-slate-700"
                    } ${isCapturing ? "opacity-50 cursor-not-allowed" : ""}`}
                  >
                    <span className={`text-lg sm:text-xl font-heading font-black ${isSelected ? "text-blue-700" : "text-slate-900"}`}>
                      {opt.count}
                    </span>
                    <span className={`text-[11px] sm:text-xs mt-0.5 font-medium ${isSelected ? "text-blue-600" : "text-slate-600"}`}>
                      Foto
                    </span>
                    <span className={`text-[9px] sm:text-[10px] mt-1 line-clamp-1 font-mono ${isSelected ? "text-blue-500" : "text-slate-400"}`}>
                      {opt.desc}
                    </span>
                    {isSelected && (
                      <span className="absolute top-1.5 right-1.5 w-3.5 h-3.5 rounded-full bg-blue-600 text-white text-[9px] flex items-center justify-center font-bold">
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
              <div className="w-6 h-6 rounded-lg bg-amber-50 text-amber-600 border border-amber-200 flex items-center justify-center">
                <Clock className="w-3.5 h-3.5" />
              </div>
              <label className="text-xs sm:text-sm font-bold text-slate-900">
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
                        ? "border-amber-500 bg-amber-50 text-amber-800 font-bold ring-2 ring-amber-500/20 shadow-sm"
                        : "border-slate-200 hover:border-amber-300 bg-slate-50 hover:bg-slate-100 text-slate-700"
                    } ${isCapturing ? "opacity-50 cursor-not-allowed" : ""}`}
                  >
                    <span className={`text-lg sm:text-xl font-heading font-black ${isSelected ? "text-amber-700" : "text-slate-900"}`}>
                      {opt.duration}s
                    </span>
                    <span className={`text-[11px] sm:text-xs mt-0.5 font-medium ${isSelected ? "text-amber-700" : "text-slate-600"}`}>
                      Detik
                    </span>
                    <span className={`text-[9px] sm:text-[10px] mt-1 line-clamp-1 font-mono ${isSelected ? "text-amber-600" : "text-slate-400"}`}>
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
              <div className="w-6 h-6 rounded-lg bg-purple-50 text-purple-600 border border-purple-200 flex items-center justify-center">
                <Wand2 className="w-3.5 h-3.5" />
              </div>
              <label className="text-xs sm:text-sm font-bold text-slate-900">
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
                        ? "border-blue-600 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold shadow-md shadow-blue-500/25"
                        : "border-slate-200 text-slate-700 hover:border-blue-300 hover:bg-slate-100 bg-slate-50"
                    }`}
                  >
                    {f.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Camera Mirror / Selfie Toggle */}
          <div className="flex items-center justify-between p-3 sm:p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-white text-blue-600 border border-slate-200 flex items-center justify-center shadow-xs">
                <FlipHorizontal className="w-3.5 h-3.5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">Cermin Kamera (Mirror Selfie)</p>
                <p className="text-[10px] sm:text-[11px] text-slate-500">Tampilan seperti saat bercermin</p>
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
                settings.mirrored ? "bg-blue-600" : "bg-slate-300"
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full bg-white shadow-sm transform transition-transform duration-200 ease-in-out ${
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
                  ? "bg-slate-300 cursor-not-allowed opacity-80 text-slate-500"
                  : "bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600 hover:from-blue-500 hover:via-sky-500 hover:to-indigo-500 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/25 border border-blue-400/30 active:scale-[0.98]"
              }`}
            >
              <Camera className="w-4 h-4" />
              <span>{isCapturing ? "Sesi Berlangsung..." : "Mulai Jepret Foto"}</span>
            </button>
            <p className="text-center text-[10px] sm:text-[11px] text-slate-500 mt-2 font-mono">
              Otomatis hitung mundur {settings.duration}s untuk {settings.photoCount} jepretan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

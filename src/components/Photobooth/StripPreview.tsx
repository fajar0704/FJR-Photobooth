"use client";

import React from "react";
import { PhotoboothSettings } from "@/utils/photoboothTypes";

interface StripPreviewProps {
  photos: string[];
  settings: PhotoboothSettings;
  onRetakePhoto?: (index: number) => void;
}

export default function StripPreview({
  photos,
  settings,
  onRetakePhoto,
}: StripPreviewProps) {
  const { background, filter, layout, customCaption, showDate, selectedSticker } = settings;
  const isGrid = layout === "grid" && (photos.length === 4 || photos.length === 6);
  const today = new Date().toISOString().split("T")[0].replace(/-/g, " . ");

  return (
    <div className="flex justify-center items-center p-2 sm:p-4 w-full">
      {/* Photostrip Card Container */}
      <div
        className={`relative transition-all duration-500 rounded-2xl shadow-2xl overflow-hidden max-w-full hover:scale-[1.01] ${
          isGrid ? "w-full max-w-[340px] sm:max-w-[420px] p-4 sm:p-5" : "w-full max-w-[240px] sm:max-w-[280px] p-3.5 sm:p-4"
        }`}
        style={{
          background: background.bgValue,
          borderColor: background.borderColor || "transparent",
          borderWidth: background.borderColor ? "4px" : "0px",
          borderStyle: "solid",
        }}
      >
        {/* Film holes decoration if retro */}
        {background.hasFilmHoles && (
          <div className="absolute inset-y-0 left-1 right-1 flex justify-between pointer-events-none py-4">
            <div className="flex flex-col justify-between space-y-4">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="w-2.5 h-4 bg-white/90 rounded-sm shadow-sm" />
              ))}
            </div>
            <div className="flex flex-col justify-between space-y-4">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="w-2.5 h-4 bg-white/90 rounded-sm shadow-sm" />
              ))}
            </div>
          </div>
        )}

        {/* Photos Layout */}
        <div
          className={`${background.hasFilmHoles ? "px-4" : ""} ${
            isGrid ? "grid grid-cols-2 gap-3" : "flex flex-col gap-3"
          }`}
        >
          {photos.map((photo, idx) => (
            <div
              key={idx}
              className="group relative aspect-[4/3] w-full rounded-xl overflow-hidden shadow-md bg-black/10 border border-white/30"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo}
                alt={`Photobooth shot ${idx + 1}`}
                className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                style={{
                  filter: filter.cssFilter,
                }}
              />
              {/* Hover Retake Button */}
              {onRetakePhoto && (
                <button
                  type="button"
                  onClick={() => onRetakePhoto(idx)}
                  className="absolute inset-0 bg-black/50 text-white opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center gap-1 transition-opacity text-xs font-semibold cursor-pointer"
                >
                  <span className="bg-white/20 p-1.5 rounded-full">📷</span>
                  <span>Ulang Foto {idx + 1}</span>
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Photostrip Footer & Branding */}
        <div className="mt-4 pt-3 pb-2 text-center select-none">
          {selectedSticker && (
            <div className="text-2xl md:text-3xl mb-1 animate-bounce">
              {selectedSticker}
            </div>
          )}

          <div
            className="font-heading font-black tracking-[0.25em] text-xs md:text-sm uppercase"
            style={{ color: background.textColor }}
          >
            RuangMomen
          </div>

          {customCaption && (
            <div
              className="italic text-xs font-medium mt-1 px-2 line-clamp-2"
              style={{ color: background.subtextColor }}
            >
              “{customCaption}”
            </div>
          )}

          {showDate && (
            <div
              className="text-[10px] tracking-widest font-mono mt-1"
              style={{ color: background.subtextColor }}
            >
              {today}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

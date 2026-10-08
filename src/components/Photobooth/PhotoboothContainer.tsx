"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import CameraView from "./CameraView";
import SettingsPanel from "./SettingsPanel";
import CustomizerView from "./CustomizerView";
import {
  PhotoboothSettings,
  BACKGROUND_THEMES,
  PHOTO_FILTERS,
} from "@/utils/photoboothTypes";
import { sounds } from "@/utils/audioEffects";

export default function PhotoboothContainer() {
  const [settings, setSettings] = useState<PhotoboothSettings>({
    photoCount: 4,
    duration: 3,
    background: BACKGROUND_THEMES[0], // Classic Noir default
    filter: PHOTO_FILTERS[0], // Normal
    layout: "strip",
    customCaption: "Best Day Ever ✨",
    showDate: true,
    selectedSticker: null,
    mirrored: true,
  });

  const [phase, setPhase] = useState<"idle" | "capturing" | "review">("idle");
  const [capturedPhotos, setCapturedPhotos] = useState<string[]>([]);
  const [currentShotIndex, setCurrentShotIndex] = useState<number>(0);
  const [countdown, setCountdown] = useState<number | null>(null);
  const [isFlashing, setIsFlashing] = useState<boolean>(false);
  const [retakeIndex, setRetakeIndex] = useState<number | null>(null);

  const countdownTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Clear timers on unmount
  useEffect(() => {
    return () => {
      if (countdownTimerRef.current) clearInterval(countdownTimerRef.current);
    };
  }, []);

  // Run countdown for a single photo
  const runCountdownForShot = useCallback(
    () => {
      let count = settings.duration;
      setCountdown(count);
      sounds.playBeep(false);

      if (countdownTimerRef.current) clearInterval(countdownTimerRef.current);

      countdownTimerRef.current = setInterval(() => {
        count -= 1;
        if (count > 0) {
          setCountdown(count);
          sounds.playBeep(false);
        } else if (count === 0) {
          setCountdown(0);
          sounds.playBeep(true);
          sounds.playShutter();
          setIsFlashing(true);

          if (countdownTimerRef.current) clearInterval(countdownTimerRef.current);

          setTimeout(() => {
            setIsFlashing(false);
            setCountdown(null);
          }, 250);
        }
      }, 1000);
    },
    [settings.duration]
  );

  // Start a fresh session
  const handleStartSession = () => {
    setCapturedPhotos([]);
    setCurrentShotIndex(0);
    setRetakeIndex(null);
    setPhase("capturing");
    setTimeout(() => {
      runCountdownForShot();
    }, 400);
  };

  // Called by CameraView when a frame is captured at countdown 0
  const handleCaptureFrame = (dataUrl: string) => {
    if (retakeIndex !== null) {
      // Retaking single photo
      setCapturedPhotos((prev) => {
        const next = [...prev];
        next[retakeIndex] = dataUrl;
        return next;
      });
      setRetakeIndex(null);
      setPhase("review");
      sounds.playComplete();
      return;
    }

    // Normal multi-shot sequence
    setCapturedPhotos((prev) => {
      const next = [...prev, dataUrl];
      const nextIndex = next.length;
      setCurrentShotIndex(nextIndex);

      if (nextIndex < settings.photoCount) {
        // Breather pause (1.2s), then start next countdown cleanly
        setTimeout(() => {
          runCountdownForShot();
        }, 1200);
      } else {
        // Finished all photos!
        setTimeout(() => {
          sounds.playComplete();
          setPhase("review");
        }, 600);
      }

      return next;
    });
  };

  // Retake all photos
  const handleRetakeAll = () => {
    setCapturedPhotos([]);
    setCurrentShotIndex(0);
    setRetakeIndex(null);
    setPhase("idle");
  };

  // Retake a single photo
  const handleRetakeSingle = (index: number) => {
    setRetakeIndex(index);
    setCurrentShotIndex(index);
    setPhase("capturing");
    setTimeout(() => {
      runCountdownForShot();
    }, 400);
  };

  // Fallback demo photos if no webcam
  const handleUseDemoPhotos = () => {
    // Generate placeholder poses or use demo photos
    const demoPhotos = [
      "/images/demo_1.jpg",
      "/images/gallery_strip.jpg",
      "/images/fotsud.jpg",
      "/images/demo_1.jpg",
      "/images/gallery_strip.jpg",
      "/images/fotsud.jpg",
    ].slice(0, settings.photoCount);

    setCapturedPhotos(demoPhotos);
    setPhase("review");
    sounds.playComplete();
  };

  // Handle uploaded photos
  const handleUploadPhotos = (files: FileList) => {
    const readers = Array.from(files)
      .slice(0, settings.photoCount)
      .map((file) => {
        return new Promise<string>((resolve) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result as string);
          reader.readAsDataURL(file);
        });
      });

    Promise.all(readers).then((results) => {
      // Pad if fewer than count
      while (results.length < settings.photoCount) {
        results.push(results[results.length - 1] || "/images/demo_1.jpg");
      }
      setCapturedPhotos(results);
      setPhase("review");
      sounds.playComplete();
    });
  };

  return (
    <div className="w-full">
      {/* Session Progress Stepper Header */}
      <div className="max-w-4xl mx-auto mb-4 sm:mb-6 flex items-center justify-between px-2 sm:px-4">
        <div className="flex items-center gap-2 sm:gap-3">
          <div
            className={`w-7 h-7 rounded-xl flex items-center justify-center font-bold text-xs shadow-sm ${
              phase === "idle" || phase === "capturing"
                ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-blue-500/25 border border-sky-400/30"
                : "bg-emerald-600 text-white shadow-emerald-500/20"
            }`}
          >
            {phase === "review" ? "✓" : "1"}
          </div>
          <div>
            <p className="text-xs font-bold text-stone-100">
              {phase === "review" ? "Foto Selesai" : "Pengambilan Foto"}
            </p>
            <p className="text-[10px] sm:text-[11px] text-stone-400 font-mono">
              {phase === "capturing"
                ? `Foto ${currentShotIndex + 1} dari ${settings.photoCount}`
                : phase === "review"
                ? "Siap Diunduh & Dicetak"
                : "Pilih format & mulai"}
            </p>
          </div>
        </div>

        <div className="w-16 sm:w-28 h-1.5 bg-[#1b2233] rounded-full overflow-hidden border border-white/5">
          <div
            className="h-full bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 transition-all duration-500"
            style={{
              width:
                phase === "review"
                  ? "100%"
                  : phase === "capturing"
                  ? `${((currentShotIndex + 1) / settings.photoCount) * 100}%`
                  : "25%",
            }}
          />
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <div
            className={`w-7 h-7 rounded-xl flex items-center justify-center font-bold text-xs shadow-sm ${
              phase === "review"
                ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-blue-500/25 border border-sky-400/30"
                : "bg-[#141824] text-stone-400 border border-[#252d3d]"
            }`}
          >
            2
          </div>
          <div className="text-right">
            <p className="text-xs font-bold text-stone-100">Kustomisasi</p>
            <p className="text-[10px] sm:text-[11px] text-stone-400 font-mono">Frame & Unduh</p>
          </div>
        </div>
      </div>

      {/* Main View Switcher with Smooth Animation */}
      {phase === "review" ? (
        <div key="review-phase" className="animate-slide-up">
          <CustomizerView
            photos={capturedPhotos}
            settings={settings}
            onChangeSettings={setSettings}
            onRetakeAll={handleRetakeAll}
            onRetakeSingle={handleRetakeSingle}
          />
        </div>
      ) : (
        <div key="capture-phase" className="animate-slide-up">
          {/* Real-time Camera View */}
          <CameraView
            settings={settings}
            isCapturing={phase === "capturing"}
            countdown={countdown}
            currentShot={currentShotIndex + 1}
            totalShots={settings.photoCount}
            capturedPhotos={capturedPhotos}
            isFlashing={isFlashing}
            onCaptureFrame={handleCaptureFrame}
            onUseDemoPhotos={handleUseDemoPhotos}
            onUploadPhotos={handleUploadPhotos}
          />

          {/* Settings Panel for selecting photo count & duration */}
          <SettingsPanel
            settings={settings}
            onChangeSettings={setSettings}
            onStartSession={handleStartSession}
            isCapturing={phase === "capturing"}
          />
        </div>
      )}
    </div>
  );
}

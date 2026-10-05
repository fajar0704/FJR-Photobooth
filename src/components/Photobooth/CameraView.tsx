"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { RefreshCw, Volume2, VolumeX, Grid, AlertCircle, Sparkles, Upload } from "lucide-react";
import { PhotoboothSettings } from "@/utils/photoboothTypes";
import { sounds } from "@/utils/audioEffects";

interface CameraViewProps {
  settings: PhotoboothSettings;
  isCapturing: boolean;
  countdown: number | null;
  currentShot: number;
  totalShots: number;
  capturedPhotos: string[];
  isFlashing: boolean;
  onCaptureFrame: (dataUrl: string) => void;
  onUseDemoPhotos?: () => void;
  onUploadPhotos?: (files: FileList) => void;
}

export default function CameraView({
  settings,
  isCapturing,
  countdown,
  currentShot,
  totalShots,
  capturedPhotos,
  isFlashing,
  onCaptureFrame,
  onUseDemoPhotos,
  onUploadPhotos,
}: CameraViewProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showGrid, setShowGrid] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [devices, setDevices] = useState<MediaDeviceInfo[]>([]);
  const [selectedDeviceId, setSelectedDeviceId] = useState<string>("");

  // Start camera stream
  const startCamera = useCallback(async (deviceId?: string) => {
    try {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }

      const constraints: MediaStreamConstraints = {
        video: {
          width: { ideal: 1280 },
          height: { ideal: 960 },
          deviceId: deviceId ? { exact: deviceId } : undefined,
          facingMode: deviceId ? undefined : "user",
        },
        audio: false,
      };

      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      streamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }

      setHasPermission(true);
      setErrorMessage(null);

      // List available video devices
      const allDevices = await navigator.mediaDevices.enumerateDevices();
      const videoDevs = allDevices.filter((d) => d.kind === "videoinput");
      setDevices(videoDevs);
      if (!deviceId && videoDevs.length > 0) {
        setSelectedDeviceId(videoDevs[0].deviceId);
      }
    } catch (err: unknown) {
      console.error("Camera access error:", err);
      setHasPermission(false);
      setErrorMessage(
        err instanceof Error ? err.message : "Tidak dapat mengakses kamera. Periksa izin kamera pada browser."
      );
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      startCamera();
    }, 0);

    return () => {
      clearTimeout(timer);
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, [startCamera]);

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    sounds.enabled = next;
  };

  const handleDeviceChange = (deviceId: string) => {
    setSelectedDeviceId(deviceId);
    startCamera(deviceId);
  };

  // Capture current video frame
  const captureFrame = useCallback(() => {
    if (!videoRef.current) return;
    const video = videoRef.current;

    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth || 1280;
    canvas.height = video.videoHeight || 960;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (settings.mirrored) {
      ctx.translate(canvas.width, 0);
      ctx.scale(-1, 1);
    }

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const dataUrl = canvas.toDataURL("image/jpeg", 0.95);
    onCaptureFrame(dataUrl);
  }, [settings.mirrored, onCaptureFrame]);

  // Expose trigger when countdown reaches 0
  useEffect(() => {
    if (countdown === 0) {
      captureFrame();
    }
  }, [countdown, captureFrame]);

  return (
    <div className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden bg-black shadow-2xl border border-zinc-800">
      {/* Aspect Ratio Container (4:3 camera frame) */}
      <div className="relative w-full aspect-[4/3] bg-zinc-950 flex items-center justify-center overflow-hidden">
        {/* Live Video Feed */}
        <video
          ref={videoRef}
          playsInline
          muted
          autoPlay
          className={`w-full h-full object-cover transition-all duration-300 ${
            settings.mirrored ? "scale-x-[-1]" : ""
          }`}
          style={{
            filter: settings.filter.cssFilter,
          }}
        />

        {/* Shutter White Flash Effect */}
        <div
          className={`absolute inset-0 bg-white pointer-events-none transition-opacity duration-300 z-40 ${
            isFlashing ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Rule of Thirds Grid Guides Overlay */}
        {showGrid && (
          <div className="absolute inset-0 pointer-events-none grid grid-cols-3 grid-rows-3 z-10">
            <div className="border-r border-b border-white/20" />
            <div className="border-r border-b border-white/20" />
            <div className="border-b border-white/20" />
            <div className="border-r border-b border-white/20" />
            <div className="border-r border-b border-white/20" />
            <div className="border-b border-white/20" />
            <div className="border-r border-white/20" />
            <div className="border-r border-white/20" />
            <div />
          </div>
        )}

        {/* Top Floating Controls Bar */}
        <div className="absolute top-4 left-4 right-4 z-20 flex justify-between items-center">
          {/* Progress Pill */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white text-xs md:text-sm font-semibold shadow-lg">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
            <span>
              Foto {Math.min(currentShot, totalShots)} dari {totalShots}
            </span>
          </div>

          {/* Quick Toolbar */}
          <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md border border-white/10 rounded-full px-3 py-1.5 text-white">
            {/* Grid Toggle */}
            <button
              onClick={() => setShowGrid(!showGrid)}
              title="Toggle Grid Panduan"
              className={`p-2 rounded-full hover:bg-white/20 transition-colors ${
                showGrid ? "text-primary" : "text-zinc-300"
              }`}
            >
              <Grid className="w-4 h-4" />
            </button>

            {/* Sound Toggle */}
            <button
              onClick={toggleSound}
              title={soundEnabled ? "Matikan Suara" : "Nyalakan Suara"}
              className="p-2 rounded-full hover:bg-white/20 transition-colors text-zinc-300"
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 text-emerald-400" /> : <VolumeX className="w-4 h-4 text-zinc-500" />}
            </button>

            {/* Switch Camera Dropdown if multiple */}
            {devices.length > 1 && (
              <select
                value={selectedDeviceId}
                onChange={(e) => handleDeviceChange(e.target.value)}
                className="bg-transparent text-xs text-white border-0 outline-none cursor-pointer pr-2"
              >
                {devices.map((device, idx) => (
                  <option key={device.deviceId} value={device.deviceId} className="bg-zinc-900 text-white">
                    {device.label || `Kamera ${idx + 1}`}
                  </option>
                ))}
              </select>
            )}
          </div>
        </div>

        {/* Giant Countdown Overlay */}
        {countdown !== null && countdown > 0 && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-30 pointer-events-none bg-black/40 backdrop-blur-[2px]">
            <div className="flex items-center justify-center w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#c83d3d] border-4 border-white/40 text-white font-mono font-black text-6xl md:text-8xl shadow-2xl animate-scale">
              {countdown}
            </div>
            <p className="mt-4 text-white text-xs md:text-sm font-mono tracking-widest uppercase drop-shadow-md">
              Bersiap & Tersenyum
            </p>
          </div>
        )}

        {/* Camera Permission / Fallback State */}
        {hasPermission === false && (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-30 bg-zinc-950/95 backdrop-blur-md">
            <div className="w-14 h-14 rounded-xl bg-stone-800 text-stone-300 flex items-center justify-center mb-4 border border-stone-700">
              <AlertCircle className="w-7 h-7 text-[#c83d3d]" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Akses Kamera Belum Diberikan</h3>
            <p className="text-zinc-400 text-xs md:text-sm max-w-md mb-6 leading-relaxed">
              {errorMessage || "Izinkan browser mengakses kamera Anda, atau gunakan foto demo di bawah ini untuk mencoba kustomisasi strip."}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => startCamera()}
                className="px-5 py-2.5 rounded-lg bg-white hover:bg-stone-200 text-stone-950 font-bold text-xs flex items-center gap-2 transition-all cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Coba Kamera Lagi
              </button>
              {onUseDemoPhotos && (
                <button
                  onClick={onUseDemoPhotos}
                  className="px-5 py-2.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-white font-medium text-xs flex items-center gap-2 transition-all border border-stone-700 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  Gunakan Foto Demo
                </button>
              )}
              {onUploadPhotos && (
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="px-5 py-2.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-300 font-medium text-xs flex items-center gap-2 transition-all border border-stone-800 cursor-pointer"
                >
                  <Upload className="w-3.5 h-3.5" />
                  Upload Foto Sendiri
                </button>
              )}
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              onChange={(e) => {
                if (e.target.files && onUploadPhotos) {
                  onUploadPhotos(e.target.files);
                }
              }}
            />
          </div>
        )}

        {/* Bottom Captured Shots Reel Tray */}
        <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-center gap-2.5 overflow-x-auto py-1">
          {Array.from({ length: totalShots }).map((_, idx) => {
            const photo = capturedPhotos[idx];
            const isCurrent = idx === currentShot - 1 && isCapturing;
            return (
              <div
                key={idx}
                className={`relative w-14 h-14 md:w-16 md:h-16 rounded-xl overflow-hidden border-2 transition-all duration-300 bg-zinc-900 flex items-center justify-center ${
                  isCurrent
                    ? "border-[#c83d3d] ring-4 ring-[#c83d3d]/30 scale-105"
                    : photo
                    ? "border-emerald-500 shadow-md"
                    : "border-white/20 opacity-60"
                }`}
              >
                {photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={photo} alt={`Shot ${idx + 1}`} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-zinc-500 text-xs font-mono font-bold">{idx + 1}</span>
                )}
                {photo && (
                  <span className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 text-[9px] text-white flex items-center justify-center font-bold">
                    ✓
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

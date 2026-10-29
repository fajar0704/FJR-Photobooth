"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  Send,
  MessageSquare,
  CheckCircle2,
  Camera,
} from "lucide-react";
import Navbar from "@/components/Navbar";

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Kerja Sama & Event",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) {
      alert("Harap masukkan Nama Lengkap dan Pesan Anda terlebih dahulu.");
      return;
    }

    const phone = "62895370232299";
    const text = `Halo RuangMomen Photobooth! 👋\n\n*Nama:* ${formData.name.trim()}\n*Email:* ${formData.email.trim() || "-"}\n*Keperluan:* ${formData.subject}\n\n*Pesan:* \n${formData.message.trim()}`;
    const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    window.open(waUrl, "_blank");
    setSuccessMessage("Pesan telah dibuka di WhatsApp!");
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 5000);
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Harap isi semua bidang formulir yang diperlukan.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMessage("Pesan formulir Anda berhasil dikirim!");
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "Kerja Sama & Event",
        message: "",
      });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 600);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden selection:bg-blue-600 selection:text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-28 sm:pt-36 pb-14 sm:pb-20 border-b border-slate-200 bg-slate-950 overflow-hidden">
        {/* Background Studio Wallpaper */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
          <Image
            src="/images/studio_wallpaper.jpg"
            alt="RuangMomen Modern Studio Wallpaper"
            fill
            priority
            unoptimized
            className="object-cover object-center opacity-85 scale-100 filter contrast-[1.08] brightness-[0.88] saturate-[1.12]"
          />
          {/* Cinematic Vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(15,23,42,0.45)_0%,_rgba(15,23,42,0.85)_100%)]" />
          {/* Top Soft Vignette under Navbar */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/50 via-black/15 to-transparent pointer-events-none" />
          {/* Bottom Gradient Transition to Light Content */}
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-100/70 via-slate-100/40 to-transparent pointer-events-none" />
        </div>

        {/* Ambient Glows */}
        <div className="absolute inset-0 pointer-events-none z-1 bg-[radial-gradient(ellipse_65%_50%_at_50%_15%,_rgba(56,189,248,0.18)_0%,_rgba(37,99,235,0.06)_50%,_transparent_80%)] animate-pulse-cyan" />
        <div className="absolute -top-10 left-1/4 w-[450px] h-[350px] bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.15)_0%,_transparent_70%)] pointer-events-none blur-3xl z-1" />
        <div className="absolute top-1/4 -right-16 w-[500px] h-[400px] bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.16)_0%,_transparent_70%)] pointer-events-none blur-3xl z-1" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 md:px-12 max-w-5xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-sky-300 text-[11px] sm:text-xs font-mono tracking-wider uppercase mb-5 sm:mb-6 shadow-xl">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
            Hubungi RuangMomen • Selalu Siap Membantu
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-heading font-black text-white tracking-tight leading-[1.1] mb-5 sm:mb-6 drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]">
            Mari Terhubung & <br />
            <span className="bg-gradient-to-r from-sky-300 via-blue-400 to-indigo-300 bg-clip-text text-transparent font-serif italic font-normal drop-shadow-[0_0_35px_rgba(56,189,248,0.6)]">
              Ciptakan Kolaborasi Berkesan.
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-200/90 leading-relaxed max-w-3xl drop-shadow-md">
            Punya pertanyaan mengenai fitur studio, ingin bekerja sama untuk aktivasi acara khusus, atau sekadar ingin menyapa? Tim kami selalu siap mendengar dari Anda.
          </p>
        </div>
      </section>

      {/* Main Contact Grid & Form Section */}
      <section className="py-14 sm:py-24 bg-slate-100/70 border-b border-slate-200 flex-1 relative">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Direct Info Cards (WhatsApp & Email) */}
            <div className="lg:col-span-5 space-y-4 sm:space-y-5">
              {/* WhatsApp Card */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-emerald-500 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 group-hover:scale-110 group-hover:border-emerald-400 transition-all duration-300 mb-4">
                  <Phone className="w-5 h-5" />
                </div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-700 mb-1 font-semibold">
                  WhatsApp & Telepon
                </h3>
                <a
                  href="https://wa.me/62895370232299"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-bold text-slate-900 hover:text-emerald-600 transition-colors block"
                >
                  +62895370232299
                </a>
                <p className="text-xs text-slate-600 mt-1">
                  Layanan cepat untuk keperluan event, aktivasi booth, & kerjasama.
                </p>
                <div className="mt-3.5">
                  <a
                    href="https://wa.me/62895370232299?text=Halo%20RuangMomen%20Studio!%20Saya%20ingin%20konsultasi%20mengenai%20photobooth."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 border border-emerald-600 px-3.5 py-2 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5" />
                    <span>Chat WhatsApp Langsung</span>
                  </a>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-blue-500 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 group-hover:scale-110 group-hover:border-blue-400 transition-all duration-300 mb-4">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="text-xs font-mono uppercase tracking-wider text-blue-700 mb-1 font-semibold">
                  Email
                </h3>
                <a
                  href="mailto:punimanf@gmail.com"
                  className="text-base font-bold text-slate-900 hover:text-blue-600 transition-colors block"
                >
                  punimanf@gmail.com
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Send Message Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/90 shadow-xl relative">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono uppercase tracking-wider mb-2">
                  <MessageSquare className="w-3.5 h-3.5 text-blue-600" />
                  Kirim Pesan Langsung
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-black text-slate-900 tracking-tight">
                  Ada yang Ingin Anda Tanyakan?
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed">
                  Isi formulir di bawah ini dan kami akan segera merespons Anda.
                </p>
              </div>

              {isSuccess && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-center gap-3 shadow-sm animate-fade-in">
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-600" />
                  <div className="text-xs sm:text-sm">
                    <p className="font-bold text-emerald-800">{successMessage || "Pesan Anda Berhasil Terkirim!"}</p>
                    <p className="text-emerald-700">
                      Terima kasih telah menghubungi RuangMomen Studio. Kami akan segera merespons Anda.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSendWhatsApp} className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 font-mono uppercase">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Rian Pratama"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-900 text-sm outline-none transition-all placeholder:text-slate-400"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 font-mono uppercase">
                      Alamat Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="nama@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-900 text-sm outline-none transition-all placeholder:text-slate-400"
                    />
                  </div>
                </div>

                {/* Subject Selector */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 font-mono uppercase">
                    Keperluan / Subjek
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-900 text-sm outline-none transition-all cursor-pointer"
                  >
                    <option value="Kerja Sama & Event">
                      Kerja Sama & Aktivasi Event
                    </option>
                    <option value="Pertanyaan Fitur Studio">
                      Pertanyaan Fitur Studio Photobooth
                    </option>
                    <option value="Masalah Teknis & Kamera">
                      Masalah Teknis Webcam / Download
                    </option>
                    <option value="Saran & Masukan">Saran & Umpan Balik</option>
                  </select>
                </div>

                {/* Message Textarea */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 font-mono uppercase">
                    Pesan Anda *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tuliskan pesan, pertanyaan, atau detail kolaborasi Anda di sini..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-900 text-sm outline-none transition-all placeholder:text-slate-400 resize-none"
                  />
                </div>

                {/* Action Buttons: WhatsApp & Email */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 transition-all shadow-md shadow-emerald-600/20 cursor-pointer active:scale-95"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>Kirim via WhatsApp</span>
                  </button>
                  <button
                    type="button"
                    disabled={isSubmitting}
                    onClick={handleSendEmail}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 via-sky-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all shadow-md shadow-blue-500/25 cursor-pointer active:scale-95 disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? "Mengirim..." : "Kirim Formulir"}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-100 text-slate-600 pt-16 sm:pt-20 pb-10 sm:pb-12 border-t border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 md:px-12">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-8 sm:gap-12 mb-12 sm:mb-16">
            <div className="max-w-md">
              <div className="text-2xl font-heading font-bold text-slate-900 mb-4 flex items-center gap-2.5">
                <span>RuangMomen</span>
              </div>
              <p className="text-slate-600 max-w-md mb-6 sm:mb-8 leading-relaxed text-xs sm:text-sm">
                Studio photobooth digital dengan standar visual analog modern. Abadikan senyum dan keceriaan kapan saja tanpa batas langsung dari perangkat Anda.
              </p>
              <div className="flex space-x-3">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-50 hover:border-blue-400 transition-colors text-slate-700 shadow-xs"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                <a
                  href="mailto:punimanf@gmail.com"
                  aria-label="Email"
                  className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-50 hover:border-blue-400 transition-colors text-blue-600 shadow-xs"
                >
                  <Mail className="w-4 h-4 text-blue-600" />
                </a>
                <a
                  href="https://wa.me/62895370232299"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Phone"
                  className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center hover:bg-slate-50 hover:border-blue-400 transition-colors text-emerald-600 shadow-xs"
                >
                  <Phone className="w-4 h-4 text-emerald-600" />
                </a>
              </div>
            </div>

            <div className="sm:text-right">
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider font-mono mb-4">Navigasi</h4>
              <ul className="space-y-2.5 sm:space-y-3 text-slate-600 text-xs sm:text-sm">
                <li>
                  <Link href="/" className="hover:text-blue-600 transition-colors">
                    Beranda (Home)
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-blue-600 transition-colors">
                    Tentang RuangMomen
                  </Link>
                </li>
                <li>
                  <Link href="/booth" className="hover:text-blue-600 transition-colors flex items-center sm:justify-end gap-1.5 font-medium text-slate-800">
                    <Camera className="w-3.5 h-3.5 text-blue-600" /> Full Screen Studio
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-blue-600 transition-colors text-blue-600 font-semibold">
                    Kontak & Lokasi
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-[11px] sm:text-xs text-slate-500">
            <p>© 2026 RuangMomen Photobooth. All rights reserved.</p>
            <div className="flex gap-4 sm:gap-6">
              <a href="#" className="hover:text-slate-800 transition-colors">Privasi</a>
              <a href="#" className="hover:text-slate-800 transition-colors">Syarat & Ketentuan</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

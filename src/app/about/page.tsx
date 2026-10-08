import Image from "next/image";
import Link from "next/link";
import {
  Camera,
  Mail,
  Phone,
  Sparkles,
  Code2,
} from "lucide-react";
import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#070b18] text-stone-100 overflow-x-hidden selection:bg-blue-600 selection:text-white">
      {/* Navbar */}
      <Navbar />

      {/* Creator Profile & Attribution Section - Topmost Section */}
      <section className="relative pt-28 sm:pt-36 pb-12 sm:pb-16 border-b border-white/[0.08] bg-[#070b18] overflow-hidden">
        {/* Overhead Studio Key Light / Blue Gradient Spotlight Beam */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_65%_50%_at_50%_0%,_rgba(59,130,246,0.18)_0%,_rgba(37,99,235,0.04)_50%,_transparent_80%)]" />

        {/* Ambient Rim Glows */}
        <div className="absolute -top-10 left-1/4 w-[450px] h-[350px] bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.1)_0%,_transparent_70%)] pointer-events-none blur-3xl" />
        <div className="absolute top-1/4 -right-16 w-[500px] h-[400px] bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.15)_0%,_transparent_70%)] pointer-events-none blur-3xl" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 md:px-12 max-w-4xl">
          <div className="relative rounded-3xl p-6 sm:p-10 md:p-12 bg-gradient-to-b from-[#0f172a]/90 via-[#0a101d]/95 to-[#070b18]/95 backdrop-blur-xl border border-white/[0.1] shadow-2xl flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
            {/* Top Specular Accent Light */}
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-sky-400/50 to-transparent pointer-events-none" />

            {/* Profile Photo Frame */}
            <div className="relative shrink-0 group">
              <div className="w-36 h-48 sm:w-44 sm:h-56 rounded-2xl overflow-hidden p-[2.5px] bg-gradient-to-b from-sky-400 via-blue-500 to-indigo-600 shadow-[0_0_30px_rgba(56,189,248,0.25)] group-hover:shadow-[0_0_45px_rgba(56,189,248,0.45)] transition-all duration-300">
                <div className="w-full h-full rounded-[14px] overflow-hidden relative bg-black">
                  <Image
                    src="/images/FR.jpeg"
                    alt="Fajar Puniman S.Kom"
                    fill
                    sizes="(max-width: 640px) 144px, 176px"
                    className="object-cover object-top filter contrast-[1.05] brightness-[1.02] group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Creator Attribution Typography */}
            <div className="text-center sm:text-left space-y-3.5 flex-1">
              <div>
                <p className="text-xs sm:text-sm font-mono tracking-widest uppercase text-sky-400 font-semibold">
                  Created by
                </p>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black tracking-tight text-white mt-1">
                  <span className="bg-gradient-to-r from-sky-300 via-blue-200 to-indigo-300 bg-clip-text text-transparent font-serif italic font-normal drop-shadow-[0_0_25px_rgba(56,189,248,0.35)]">
                    Fajar Puniman S.Kom
                  </span>
                </h3>
              </div>

              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-xl">
                Pengembang & kreator di balik ekosistem <strong>RuangMomen</strong>, menggabungkan sentuhan visual fotografi analog dengan arsitektur web modern agar momen berharga dapat diabadikan secara instan, privat, dan berkualitas studio.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
                <span className="px-3 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-stone-300 text-[11px] font-mono">
                  Software Engineer & Full Creator
                </span>
                <span className="px-3 py-1 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-300 text-[11px] font-mono">
                  RuangMomen Studio • 2026
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Philosophy & Studio Section */}
      <section className="py-14 sm:py-20 bg-[#090e1c] relative flex-1">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              <span className="text-xs font-mono text-sky-400 uppercase tracking-widest block font-semibold">
                Filosofi Kami
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-white tracking-tight">
                Mengapa Photobooth?
              </h2>
              <div className="space-y-4 text-stone-300 text-sm sm:text-base leading-relaxed">
                <p>
                  Di era di mana kamera smartphone memotret ribuan foto yang seringkali terlupakan di galeri, strip photobooth memiliki daya magis tersendiri. Ada batasan jumlah frame (3, 4, atau 6 foto), ada hitungan mundur yang memicu pose spontan tanpa kepura-puraan, dan ada rasa antusias menunggu hasil jadi yang rapi dalam satu strip estetik.
                </p>
                <p>
                  Semua mendapatkan foto berkualitas studio dengan palet warna kertas fisik, efek suara shutter yang nyata, serta kemudahan mengunduh dan mencetak hasilnya secara instan dalam resolusi tinggi.
                </p>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-56 sm:w-64 md:w-72 transform rotate-1 sm:rotate-2 hover:rotate-0 transition-transform duration-500 shadow-2xl rounded-2xl overflow-hidden border-2 border-white/10 bg-[#0c1222]">
                <Image
                  src="/images/fotsud.jpg"
                  alt="RuangMomen Studio Setup"
                  width={400}
                  height={500}
                  className="w-full h-auto object-cover"
                />
                <div className="p-3 sm:p-4 bg-[#0c1222] text-white text-center border-t border-white/10">
                  <p className="font-heading font-bold text-xs sm:text-sm tracking-wide text-sky-300">RUANG MOMEN</p>
                  <p className="text-[10px] sm:text-[11px] text-stone-400 font-mono mt-0.5">EST. 2026 • PHOTO STUDIO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#050814] text-stone-300 pt-16 sm:pt-20 pb-10 sm:pb-12 border-t border-white/[0.08]">
        <div className="container mx-auto px-4 sm:px-6 md:px-12">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-8 sm:gap-12 mb-12 sm:mb-16">
            <div className="max-w-md">
              <div className="text-2xl font-heading font-bold text-white mb-4 flex items-center gap-2.5">
                <span>RuangMomen</span>
              </div>
              <p className="text-stone-400 max-w-md mb-6 sm:mb-8 leading-relaxed text-xs sm:text-sm">
                Studio photobooth digital dengan standar visual analog modern. Abadikan senyum dan keceriaan kapan saja tanpa batas langsung dari perangkat Anda.
              </p>
              <div className="flex space-x-3">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-lg bg-[#0e1628] border border-white/10 flex items-center justify-center hover:bg-[#15203a] hover:border-sky-400/40 transition-colors text-white text-xs"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                <a
                  href="#"
                  aria-label="Email"
                  className="w-9 h-9 rounded-lg bg-[#0e1628] border border-white/10 flex items-center justify-center hover:bg-[#15203a] hover:border-sky-400/40 transition-colors text-white"
                >
                  <Mail className="w-4 h-4 text-sky-400" />
                </a>
                <a
                  href="#"
                  aria-label="Phone"
                  className="w-9 h-9 rounded-lg bg-[#0e1628] border border-white/10 flex items-center justify-center hover:bg-[#15203a] hover:border-sky-400/40 transition-colors text-white"
                >
                  <Phone className="w-4 h-4 text-sky-400" />
                </a>
              </div>
            </div>

            <div className="sm:text-right">
              <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider font-mono mb-4">Navigasi</h4>
              <ul className="space-y-2.5 sm:space-y-3 text-stone-400 text-xs sm:text-sm">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Beranda (Home)
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors text-white font-medium">
                    Tentang RuangMomen
                  </Link>
                </li>
                <li>
                  <Link href="/booth" className="hover:text-white transition-colors flex items-center sm:justify-end gap-1.5 font-medium text-stone-200">
                    <Camera className="w-3.5 h-3.5 text-sky-400" /> Full Screen Studio
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Kontak & Lokasi
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/[0.08] pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-[11px] sm:text-xs text-stone-500">
            <p>© 2026 RuangMomen Photobooth. All rights reserved.</p>
            <div className="flex gap-4 sm:gap-6">
              <a href="#" className="hover:text-stone-300 transition-colors">Privasi</a>
              <a href="#" className="hover:text-stone-300 transition-colors">Syarat & Ketentuan</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

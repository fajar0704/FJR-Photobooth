import Image from "next/image";
import Link from "next/link";
import {
  Camera,
  Maximize2,
  Heart,
  ShieldCheck,
  Palette,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Smile,
  Layers,
} from "lucide-react";
import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#faf8f5] text-stone-900 overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 sm:pt-36 pb-14 sm:pb-20 border-b border-[#e8e2d8]">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-5xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white border border-[#e8e2d8] text-stone-700 text-[11px] sm:text-xs font-mono tracking-wider uppercase mb-5 sm:mb-6 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#c83d3d]" />
            Tentang RuangMomen • Cerita & Visi Kami
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-heading font-black text-stone-950 tracking-tight leading-[1.1] mb-6 sm:mb-8">
            Membawa Hangatnya Momen Otentik ke{" "}
            <span className="text-[#c83d3d] font-serif italic font-normal">
              Ruang Digital.
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-stone-600 leading-relaxed max-w-3xl">
            RuangMomen lahir dari keyakinan sederhana: bahwa tawa spontan, gaya konyol bersama sahabat, dan momen bahagia tak tergantikan pantas diabadikan dengan cara yang estetik, mudah, dan dapat dinikmati oleh siapa saja kapan saja.
          </p>
        </div>
      </section>

      {/* Story & Philosophy Section */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              <span className="text-xs font-mono text-stone-500 uppercase tracking-widest block">
                Filosofi Kami
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-stone-950 tracking-tight">
                Mengapa Photobooth?
              </h2>
              <div className="space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Di era di mana kamera smartphone memotret ribuan foto yang seringkali terlupakan di galeri, strip photobooth memiliki daya magis tersendiri. Ada batasan jumlah frame (3, 4, atau 6 foto), ada hitungan mundur yang memicu pose spontan tanpa kepura-puraan, dan ada rasa antusias menunggu hasil jadi yang rapi dalam satu strip estetik.
                </p>
                <p>
                  Terinspirasi dari kultur photo booth studio di Seoul dan Tokyo yang hangat dan berkarakter, kami merancang <strong>RuangMomen</strong> agar pengalaman tersebut bisa diakses langsung melalui peramban web—tanpa perlu antre di mall, tanpa biaya sewa, dan tanpa aplikasi tambahan.
                </p>
                <p>
                  Semua orang berhak mendapatkan foto berkualitas studio dengan palet warna kertas fisik, efek suara shutter yang nyata, serta kemudahan mengunduh dan mencetak hasilnya secara instan.
                </p>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-56 sm:w-64 md:w-72 transform rotate-1 sm:rotate-2 hover:rotate-0 transition-transform duration-500 shadow-xl rounded-2xl overflow-hidden border-4 sm:border-8 border-[#faf8f5] bg-stone-900">
                <Image
                  src="/images/hero.jpg"
                  alt="RuangMomen Studio Setup"
                  width={400}
                  height={500}
                  className="w-full h-auto object-cover"
                />
                <div className="p-3 sm:p-4 bg-stone-900 text-white text-center">
                  <p className="font-heading font-bold text-xs sm:text-sm tracking-wide">RUANG MOMEN</p>
                  <p className="text-[10px] sm:text-[11px] text-stone-400 font-mono mt-0.5">EST. 2026 • PHOTO STUDIO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 sm:py-24 bg-[#faf8f5] border-y border-[#e8e2d8]">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-mono text-stone-500 uppercase tracking-widest block mb-2">
              Prinsip Desain
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-stone-950 tracking-tight">
              Pilar yang Menjaga Kualitas Kami
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm md:text-base mt-2">
              Empat hal yang selalu menjadi komitmen kami di setiap jepretan foto Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {[
              {
                icon: Palette,
                title: "Warna Kertas Studio Nyata",
                desc: "Kami menolak gradasi neon murahan. Semua 9 tema warna frame RuangMomen dikurasi dari palet kertas fisik studio analog (Classic Noir, Oatmeal Paper, Haru Sky, Sage Matcha, hingga 35mm film).",
              },
              {
                icon: ShieldCheck,
                title: "Privasi Penuh (Client-Side)",
                desc: "Seluruh proses pengambilan gambar, filter, dan pembuatan strip foto diproses secara lokal di perangkat Anda. Foto Anda tidak pernah diunggah atau disimpan di server kami.",
              },
              {
                icon: Layers,
                title: "Format Fleksibel 3, 4, & 6 Foto",
                desc: "Apakah Anda ingin strip ringkas, format 4-cuts Korea klasik, atau kolase 6 foto penuh untuk grup, semuanya bisa disesuaikan dengan mudah.",
              },
              {
                icon: Heart,
                title: "Akses Bebas untuk Semua",
                desc: "RuangMomen dibangun agar siapa pun bisa berfoto dengan orang terkasih, bersenang-senang, dan menyimpan kenangan beresolusi tinggi tanpa batasan berbayar.",
              },
            ].map((val, idx) => (
              <div
                key={idx}
                className="bg-white p-6 sm:p-8 rounded-2xl border border-[#e8e2d8] hover:border-stone-400 hover:shadow-xs transition-all"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-stone-100 text-stone-900 flex items-center justify-center mb-4 sm:mb-5">
                  <val.icon className="w-5 h-5 text-[#c83d3d]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-stone-950 mb-2">{val.title}</h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action Banner */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-5xl">
          <div className="bg-[#1c1917] rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-16 text-white text-center relative overflow-hidden border border-stone-800">
            <div className="max-w-2xl mx-auto space-y-5 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-stone-800 border border-stone-700 text-stone-300 text-xs font-mono tracking-wider uppercase">
                <Smile className="w-3.5 h-3.5 text-[#c83d3d]" />
                Abadikan Momen Berhargamu
              </div>

              <h2 className="text-2xl sm:text-4xl md:text-5xl font-heading font-black tracking-tight leading-tight">
                Siap Mengambil Foto <br />
                <span className="text-[#c83d3d] font-serif italic font-normal">Pertamamu Hari Ini?</span>
              </h2>

              <p className="text-stone-400 text-xs sm:text-sm md:text-base leading-relaxed">
                Buka Full Screen Studio, pilih format dan timer yang Anda inginkan, lalu buat strip foto kenangan yang indah bersama orang tersayang.
              </p>

              <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Link
                  href="/booth"
                  className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl font-bold text-sm sm:text-base text-white bg-[#c83d3d] hover:bg-[#b23232] transition-all shadow-md cursor-pointer"
                >
                  <Maximize2 className="w-4 h-4" />
                  <span>Buka Full Screen Studio</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 sm:px-7 sm:py-4 rounded-xl font-medium text-xs sm:text-sm text-stone-300 bg-stone-900 border border-stone-800 hover:bg-stone-800 transition-all cursor-pointer"
                >
                  Kembali ke Beranda
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#18181b] text-stone-300 pt-16 sm:pt-20 pb-10 sm:pb-12 border-t border-stone-800">
        <div className="container mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
            <div className="col-span-1 sm:col-span-2">
              <div className="text-2xl font-heading font-bold text-white mb-4 flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-md bg-stone-800 text-white flex items-center justify-center text-xs font-mono font-bold">
                  RM
                </span>
                <span>RuangMomen</span>
              </div>
              <p className="text-stone-400 max-w-md mb-6 sm:mb-8 leading-relaxed text-xs sm:text-sm">
                Studio photobooth digital dengan standar visual analog modern. Abadikan senyum dan keceriaan kapan saja tanpa batas langsung dari perangkat Anda.
              </p>
              <div className="flex space-x-3">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-lg bg-stone-800 flex items-center justify-center hover:bg-stone-700 transition-colors text-white text-xs"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                <a
                  href="#"
                  aria-label="Email"
                  className="w-9 h-9 rounded-lg bg-stone-800 flex items-center justify-center hover:bg-stone-700 transition-colors text-white"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  aria-label="Phone"
                  className="w-9 h-9 rounded-lg bg-stone-800 flex items-center justify-center hover:bg-stone-700 transition-colors text-white"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider font-mono mb-4">Navigasi</h4>
              <ul className="space-y-2.5 sm:space-y-3 text-stone-400 text-xs sm:text-sm">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Beranda (Home)
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    Tentang RuangMomen
                  </Link>
                </li>
                <li>
                  <Link href="/booth" className="hover:text-white transition-colors flex items-center gap-1.5 font-medium text-stone-200">
                    <Camera className="w-3.5 h-3.5 text-[#c83d3d]" /> Full Screen Studio
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider font-mono mb-4">Kontak</h4>
              <ul className="space-y-2.5 sm:space-y-3 text-stone-400 text-xs sm:text-sm">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                  <span>Jakarta, Indonesia</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-stone-400 shrink-0" />
                  <span>+62 812 3456 7890</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-stone-400 shrink-0" />
                  <span>hello@ruangmomen.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-stone-800 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-[11px] sm:text-xs text-stone-500">
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

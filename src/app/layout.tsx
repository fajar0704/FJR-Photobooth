import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RuangMomen | Premium Photobooth",
  description: "Abadikan momen spesialmu dengan RuangMomen Photobooth. Layanan photobooth premium untuk setiap acara.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${outfit.variable} ${inter.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#0e0d0c] text-stone-100 selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Creative Developer",
  description: "Premium portfolio tailored for high-end web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#030014] text-white selection:bg-purple-500/30 selection:text-purple-200`}
      >
        {/* --- GLOBAL BACKGROUND LAYERS (Persist across all pages) --- */}
        <div className="fixed inset-0 z-[-1] pointer-events-none">
          {/* 1. Noise Texture (dari globals.css) */}
          <div className="absolute inset-0 bg-noise opacity-[0.03]"></div>
          
          {/* 2. Grid Pattern Global */}
          <div className="absolute inset-0 bg-grid-white/[0.02]"></div>
          
          {/* 3. Vignette halus di pinggir layar */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#030014]"></div>
        </div>

        <Navbar />
        
        {/* Main Content wrapper */}
        {/* Kita hapus pt-16 karena Navbar sekarang floating. 
            Jarak atas (padding-top) akan dihandle oleh masing-masing page (misal: pt-32 di Home) */}
        <main className="relative min-h-screen flex flex-col">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}
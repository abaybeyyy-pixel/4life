import React, { useState } from "react";
import { Menu, X, Share2, MessageCircle } from "lucide-react";

interface NavigationProps {
  onOpenConsultation: (message: string) => void;
}

export default function Navigation({ onOpenConsultation }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Edukasi Transfer Factor — Daya Tahan Imun Keluarga",
        text: "Pelajari bagaimana Transfer Factor bekerja mendidik sistem imun tubuh secara alami.",
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Tautan berhasil disalin ke clipboard!");
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 px-4 py-3 sm:px-6 md:py-4 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Brand Logo & Name */}
        <button 
          onClick={() => handleScroll("home")}
          className="flex items-center gap-2.5 cursor-pointer group text-left bg-transparent border-0 p-0"
        >
          <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center p-1 overflow-hidden shadow-xs">
            <img src="/transfer_factor.png" alt="4Life Logo" className="w-full h-full object-contain" />
          </div>
          <div>
            <div className="flex items-center gap-1">
              <span className="font-sans font-extrabold text-gray-900 text-base tracking-tight">4Life <span className="text-blue-600">Indonesia</span></span>
            </div>
            <span className="text-[10px] text-gray-400 font-medium block leading-none">Edukasi Sistem Imun Keluarga</span>
          </div>
        </button>

        {/* Desktop Anchor Links */}
        <nav className="hidden md:flex items-center gap-1 bg-gray-100/80 p-1 rounded-full border border-gray-200 shadow-xs">
          <button
            onClick={() => handleScroll("home")}
            className="px-4 py-1.5 text-xs font-semibold rounded-full text-gray-600 hover:text-gray-900 hover:bg-white transition-all cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => handleScroll("sains")}
            className="px-4 py-1.5 text-xs font-semibold rounded-full text-gray-600 hover:text-gray-900 hover:bg-white transition-all cursor-pointer"
          >
            Sains Imun
          </button>
          <button
            onClick={() => handleScroll("produk")}
            className="px-4 py-1.5 text-xs font-semibold rounded-full text-gray-600 hover:text-gray-900 hover:bg-white transition-all cursor-pointer"
          >
            Produk
          </button>
          <button
            onClick={() => handleScroll("testimoni")}
            className="px-4 py-1.5 text-xs font-semibold rounded-full text-gray-600 hover:text-gray-900 hover:bg-white transition-all cursor-pointer"
          >
            Testimoni
          </button>
          <button
            onClick={() => handleScroll("lokasi")}
            className="px-4 py-1.5 text-xs font-semibold rounded-full text-gray-600 hover:text-gray-900 hover:bg-white transition-all cursor-pointer"
          >
            Lokasi
          </button>
        </nav>

        {/* Quick CTA Actions (Desktop) */}
        <div className="hidden sm:flex items-center gap-2">
          <button
            onClick={() => onOpenConsultation("Halo, saya ingin bertanya lebih lanjut mengenai Transfer Factor untuk daya tahan tubuh keluarga.")}
            className="px-4 py-2 text-xs font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-full transition-all cursor-pointer flex items-center gap-1.5"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            Tanya Admin
          </button>
          <button
            onClick={handleShare}
            className="px-3.5 py-2 text-xs font-semibold text-gray-600 hover:text-gray-900 hover:bg-gray-100 border border-gray-200 rounded-full transition-all cursor-pointer flex items-center gap-1.5"
            title="Bagikan Tautan"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span className="hidden lg:inline">Bagikan</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => onOpenConsultation("Halo, saya ingin bertanya seputar Transfer Factor.")}
            className="px-3 py-1.5 text-[11px] font-bold text-blue-700 bg-blue-50 border border-blue-200 rounded-lg flex items-center gap-1"
          >
            <MessageCircle className="w-3 h-3" />
            Tanya
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer border border-gray-200"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Dropdown */}
      {isMobileMenuOpen && (
        <div className="sm:hidden mt-3 pt-3 border-t border-gray-100 space-y-2 pb-2 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-2 text-xs font-bold">
            <button
              onClick={() => handleScroll("home")}
              className="p-2.5 bg-gray-50 hover:bg-blue-50 hover:text-blue-700 text-gray-700 rounded-xl text-left transition-colors"
            >
              🏠 Home
            </button>
            <button
              onClick={() => handleScroll("sains")}
              className="p-2.5 bg-gray-50 hover:bg-blue-50 hover:text-blue-700 text-gray-700 rounded-xl text-left transition-colors"
            >
              🔬 Sains Imun
            </button>
            <button
              onClick={() => handleScroll("produk")}
              className="p-2.5 bg-gray-50 hover:bg-blue-50 hover:text-blue-700 text-gray-700 rounded-xl text-left transition-colors"
            >
              💊 Produk
            </button>
            <button
              onClick={() => handleScroll("testimoni")}
              className="p-2.5 bg-gray-50 hover:bg-blue-50 hover:text-blue-700 text-gray-700 rounded-xl text-left transition-colors"
            >
              ⭐ Testimoni
            </button>
            <button
              onClick={() => handleScroll("sertifikasi")}
              className="p-2.5 bg-gray-50 hover:bg-blue-50 hover:text-blue-700 text-gray-700 rounded-xl text-left transition-colors"
            >
              📜 Sertifikasi
            </button>
            <button
              onClick={() => handleScroll("lokasi")}
              className="p-2.5 bg-gray-50 hover:bg-blue-50 hover:text-blue-700 text-gray-700 rounded-xl text-left transition-colors"
            >
              📍 Lokasi Kantor
            </button>
          </div>
          <div className="pt-2 flex gap-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenConsultation("Halo, saya ingin bertanya lebih lanjut mengenai Transfer Factor.");
              }}
              className="flex-1 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold text-center flex items-center justify-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4" /> Konsultasi Admin
            </button>
            <button
              onClick={handleShare}
              className="px-4 py-2.5 border border-gray-200 text-gray-700 hover:bg-gray-50 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}


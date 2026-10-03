import React, { useState, useEffect } from "react";
import { products } from "./data";
import { Product } from "./types";
import Navigation from "./components/Navigation";
import ProductOverview from "./components/ProductOverview";
import ProductDetailModal from "./components/ProductDetailModal";
import TestimonialsSection from "./components/TestimonialsSection";
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Send, 
  MapPin, 
  MessageCircle, 
  ArrowUp,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [waMessage, setWaMessage] = useState<string>("");
  const [faqOpenIdx, setFaqOpenIdx] = useState<number | null>(null);
  const [faqCategory, setFaqCategory] = useState<string>("Semua");
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Comprehensive Master FAQs
  const masterFaqs = [
    {
      q: "Apakah produk 4Life Transfer Factor aman dikonsumsi setiap hari?",
      a: "Sangat aman. Kandungan Transfer Factor murni merupakan peptida alami berukuran nano yang disaring dari kolostrum sapi premium dan kuning telur ayam melalui teknologi filtrasi paten. Secara biologis, molekul ini alami mendidik sistem pertahanan tubuh agar bekerja optimal tanpa membebani organ tubuh dan tidak menimbulkan efek ketergantungan.",
      category: "Sains & Khasiat",
      tags: ["Keamanan", "Sains Molekuler"]
    },
    {
      q: "Apa bedanya Transfer Factor dengan Vitamin C atau suplemen herbal biasa?",
      a: "Vitamin C dan suplemen herbal biasa bersifat pasif 'memberi makan' sel imun. Sedangkan Transfer Factor bertindak sebagai molekul pesan kecerdasan (intelijen) yang melatih dan mendidik sel imun agar bisa mengenali (Recognize), merespons (Respond), dan mengingat (Remember) jutaan ancaman penyakit secara spesifik dan seimbang.",
      category: "Sains & Khasiat",
      tags: ["Edukasi Imun", "Pembeda Utama"]
    },
    {
      q: "Bagaimana legalitas 4Life di Indonesia? Apakah sudah resmi BPOM?",
      a: "Seluruh produk 4Life Indonesia resmi terdaftar dan memiliki Nomor Izin Edar (NIE) dari BPOM RI. Produk disimpan di gudang logistik dengan sistem kontrol suhu ketat untuk menjaga stabilitas molekul protein aktif. Distribusi resmi dikoordinasikan oleh PT 4Life Indonesia Trading dari Cyber 2 Tower Kuningan, Jakarta Selatan.",
      category: "Legalitas BPOM",
      tags: ["BPOM RI", "Legalitas Resmi"]
    },
    {
      q: "Siapa saja yang boleh mengonsumsi Transfer Factor?",
      a: "Transfer Factor dapat dikonsumsi oleh seluruh anggota keluarga — mulai dari anak-anak, remaja, dewasa aktif, hingga lansia. Karena fungsinya menyeimbangkan dan mendidik (bukan memicu over-stimulasi), suplemen ini aman dan sangat baik untuk menjaga ketahanan tubuh harian.",
      category: "Cara Konsumsi",
      tags: ["Keluarga", "Dosis Harian"]
    },
    {
      q: "Apa perbedaan fundamental antara TF Plus dengan TF Tri-Factor?",
      a: "TF Tri-Factor fokus pada kecerdasan dasar sistem imun harian (600mg Transfer Factor murni), cocok untuk konsumsi harian keluarga. Sedangkan TF Plus diperkuat dengan Seng/Zinc dan Campuran Cordyvant (Maitake, Shiitake, Cordyceps) untuk perlindungan maksimal dan pemulihan tubuh ekstra intensif saat kondisi fisik sangat lelah atau pasca sakit.",
      category: "Cara Konsumsi",
      tags: ["Perbandingan", "Rekomendasi"]
    },
    {
      q: "Berapa lama konsumsi sampai tubuh merasakan manfaatnya?",
      a: "Riset klinis membuktikan aktivitas modulasi imun sel NK mulai terdeteksi dalam hitungan jam setelah konsumsi pertama. Untuk perlindungan optimal dan regenerasi daya tahan tubuh menyeluruh, konsumsi rutin selama 2 hingga 4 minggu sangat dianjurkan.",
      category: "Cara Konsumsi",
      tags: ["Khasiat", "Waktu Hasil"]
    },
    {
      q: "Bagaimana cara kerja toko digital 'MyShop' untuk Mitra Mandiri?",
      a: "Konsepnya adalah Zero-Stock (Tanpa Stok Pribadi). Anda membagikan link toko MyShop personal ke kerabat atau calon pembeli. Pembeli berbelanja langsung secara online di portal resmi, pengemasan dan pengiriman diurus langsung oleh logistik 4Life pusat, dan Anda mendapat komisi bersih 25% yang ditransfer otomatis dalam 3 hari kerja.",
      category: "Kemitraan",
      tags: ["Apotek Digital", "Zero Stock"]
    },
    {
      q: "Berapa modal awal untuk bergabung menjadi Mitra Afiliasi Resmi?",
      a: "Sangat terjangkau. Anda hanya perlu melakukan pendaftaran kemitraan resmi untuk mendapatkan Welcome Kit panduan, akses portal kontrol mandiri, serta kepemilikan personal portal Apotek Digital '4Life MyShop' secara instan tanpa biaya pemeliharaan tahunan.",
      category: "Kemitraan",
      tags: ["Pendaftaran", "Modal Kemitraan"]
    }
  ];

  const filteredFaqs = faqCategory === "Semua" 
    ? masterFaqs 
    : masterFaqs.filter(f => f.category === faqCategory);

  const handleSelectProductById = (productId: string) => {
    const prod = products.find(p => p.id === productId);
    if (prod) {
      setSelectedProduct(prod);
    }
  };

  const handleOpenConsultation = (customMessage: string) => {
    setWaMessage(customMessage);
    const el = document.getElementById("wa-simulator");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSendWhatsApp = () => {
    const encodedText = encodeURIComponent(waMessage || "Halo Admin 4Life, saya ingin berkonsultasi.");
    const url = `https://api.whatsapp.com/send?phone=6282112345678&text=${encodedText}`;
    window.open(url, "_blank");
  };

  const toggleFaq = (idx: number) => {
    setFaqOpenIdx(faqOpenIdx === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 antialiased selection:bg-blue-600 selection:text-white pb-16 relative">
      
      {/* Navigation Headers */}
      <Navigation 
        onOpenConsultation={handleOpenConsultation}
      />

      <main className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-8 space-y-12 sm:space-y-18 md:space-y-24">
        
        {/* Unified Main Content */}
        <div id="home">
          <ProductOverview 
            onSelectProduct={handleSelectProductById} 
            onOpenConsultation={handleOpenConsultation}
          />
        </div>

        {/* Testimonials */}
        <div id="testimoni">
          <TestimonialsSection />
        </div>

        {/* FAQs */}
        <section id="faq" className="space-y-6 sm:space-y-8 pt-8 border-t border-gray-200 scroll-mt-20">
          <div className="text-center max-w-2xl mx-auto space-y-2 px-2">
            <span className="text-xs uppercase tracking-widest font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Pusat Informasi & Tanya Jawab
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900">Pertanyaan yang Sering Ditanyakan</h2>
            <p className="text-xs sm:text-sm text-gray-500">Ketahui kebenaran ilmiah, legalitas BPOM, dan fakta seputar 4Life Indonesia secara transparan.</p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 max-w-3xl mx-auto px-2">
            {["Semua", "Sains & Khasiat", "Legalitas BPOM", "Cara Konsumsi", "Kemitraan"].map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setFaqCategory(cat);
                  setFaqOpenIdx(null);
                }}
                className={`px-3 sm:px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-bold transition-all cursor-pointer ${
                  faqCategory === cat
                    ? "bg-blue-600 text-white shadow-xs"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Accordion List */}
          <div className="max-w-3xl mx-auto space-y-2.5 sm:space-y-3 px-1 sm:px-4">
            {filteredFaqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all hover:border-gray-300 shadow-xs"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-4 sm:px-5 py-3.5 sm:py-4 flex items-center justify-between gap-3 sm:gap-4 font-bold text-xs sm:text-sm text-gray-900 hover:bg-gray-50/80 cursor-pointer"
                >
                  <span className="flex items-center gap-2 sm:gap-2.5">
                    <HelpCircle className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  {faqOpenIdx === idx ? <ChevronUp className="w-4 h-4 text-gray-400 shrink-0" /> : <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />}
                </button>
                
                {faqOpenIdx === idx && (
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-1 text-xs text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50/40">
                    <p>{faq.a}</p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {faq.tags.map((tag, i) => (
                        <span key={i} className="text-[9px] font-bold text-blue-700 bg-blue-50 border border-blue-100 rounded-md px-2 py-0.5 uppercase tracking-wide">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Interactive WA Message Simulator */}
        <section id="wa-simulator" className="pt-8 border-t border-gray-200 scroll-mt-20">
          <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 border border-gray-200 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 flex flex-col md:flex-row items-center gap-6 sm:gap-8 shadow-xs">
            <div className="flex-1 space-y-3 sm:space-y-4 text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold bg-gray-200 text-gray-800 uppercase tracking-wider">
                Konsultasi WhatsApp
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">Konsultasi Langsung via WhatsApp</h2>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Tulis pesan konsultasi Anda. Saat menekan kirim, Anda akan diarahkan langsung ke admin WhatsApp resmi dengan draft pesan yang sudah terformat.
              </p>
              <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-gray-200 space-y-1">
                <span className="text-[10px] font-bold text-gray-700 uppercase block">Kantor Layanan Resmi:</span>
                <span className="text-[11px] sm:text-xs text-gray-600 leading-relaxed block">
                  Telepon: 021-1234-5678 (Senin - Jumat: 09.00 - 17.00 WIB)
                </span>
                <span className="text-[9px] text-gray-400 block font-bold">PT 4Life Indonesia Trading - Cyber 2 Tower Jakarta</span>
              </div>
            </div>

            <div className="w-full md:w-96 bg-white border border-gray-200 p-4 sm:p-5 rounded-2xl space-y-3 sm:space-y-4 text-left shadow-xs">
              <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                <span className="text-xs font-bold text-gray-800 flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                  Admin 4Life Indonesia
                </span>
                <span className="text-[9px] font-mono text-gray-400 uppercase">WhatsApp</span>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-gray-700">Tulis Pesan Anda:</label>
                <textarea
                  rows={4}
                  value={waMessage}
                  onChange={(e) => setWaMessage(e.target.value)}
                  placeholder="Ketik pesan konsultasi Anda di sini..."
                  className="w-full border border-gray-200 rounded-xl p-3 text-xs focus:outline-none focus:border-emerald-600 placeholder-gray-400 bg-gray-50 text-gray-800"
                />
              </div>

              <button
                onClick={handleSendWhatsApp}
                className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
              >
                <Send className="w-4 h-4" /> Kirim ke WhatsApp &rarr;
              </button>
            </div>
          </div>
        </section>

        {/* Kantor Pusat Map Section */}
        <section id="lokasi" className="pt-8 border-t border-gray-200 scroll-mt-20 text-left">
          <div className="bg-white border border-gray-200 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 space-y-5 sm:space-y-6 shadow-xs">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold bg-gray-100 text-gray-700 uppercase tracking-wider">
                  Lokasi Kantor Pusat
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-gray-500 shrink-0" />
                  PT 4Life Indonesia Trading
                </h2>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-xl">
                  Cyber 2 Tower Lantai 6, Jl. H.R. Rasuna Said Blok X-5 No. 13, RT.7/RW.2, Kuningan Timur, Setiabudi, Jakarta Selatan, DKI Jakarta 12950.
                </p>
              </div>
              <a 
                href="https://maps.app.goo.gl/6j6kPHzqEG2Dzn8H7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-xl font-bold text-xs transition-colors shrink-0 text-center shadow-xs"
              >
                Buka di Google Maps
              </a>
            </div>
            
            <div className="w-full h-64 sm:h-80 md:h-96 rounded-xl sm:rounded-2xl overflow-hidden border border-gray-200">
              <iframe
                title="Google Map Kantor Pusat PT 4Life Indonesia Trading"
                src="https://maps.google.com/maps?q=Cyber%202%20Tower%20Jakarta&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

      </main>

      {/* Floating Modal Drawer for Product Overviews */}
      <ProductDetailModal 
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Brand Footer */}
      <footer className="mt-12 sm:mt-16 bg-gray-900 text-white border-t border-gray-800 py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          
          <div className="space-y-2 sm:space-y-3">
            <span className="text-base font-extrabold text-white tracking-tight">4Life Indonesia</span>
            <p className="text-[11px] text-gray-400 leading-relaxed max-w-xs">
              Portal edukasi sistem imun keluarga berbasis riset ilmiah dan data klinis internasional.
            </p>
          </div>

          <div className="space-y-2 text-xs">
            <span className="text-gray-400 font-bold block uppercase tracking-wider text-[11px]">Navigasi</span>
            <button onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })} className="text-gray-300 hover:text-white block text-left bg-transparent border-0 p-0 cursor-pointer">Home</button>
            <button onClick={() => document.getElementById("sains")?.scrollIntoView({ behavior: "smooth" })} className="text-gray-300 hover:text-white block text-left bg-transparent border-0 p-0 cursor-pointer">Sains & Riset</button>
            <button onClick={() => document.getElementById("produk")?.scrollIntoView({ behavior: "smooth" })} className="text-gray-300 hover:text-white block text-left bg-transparent border-0 p-0 cursor-pointer">Produk</button>
            <div className="pt-2 border-t border-gray-800 space-y-1.5">
              <span className="text-gray-400 font-bold block uppercase tracking-wider text-[11px]">Tautan Resmi</span>
              <a href="https://indonesia.4life.com/12941871/shop" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 block font-semibold">Beli Produk (Toko Resmi)</a>
            </div>
          </div>

          <div className="space-y-2 text-xs">
            <span className="text-gray-400 font-bold block uppercase tracking-wider text-[11px] mb-2">Kualifikasi</span>
            <span className="text-gray-300 block">Sertifikasi NSF International</span>
            <span className="text-gray-300 block">Standard Higienitas GMP</span>
            <span className="text-gray-300 bg-blue-950/40 border border-blue-900/60 text-blue-400 px-1.5 py-0.5 rounded text-[10px] inline-block uppercase font-bold">BPOM NIE Teruji</span>
            <div className="mt-4 text-xs text-blue-400 font-bold cursor-pointer hover:underline" onClick={() => document.getElementById('sertifikasi')?.scrollIntoView({behavior:'smooth'})}>
              Lihat Dokumen Sertifikasi &rarr;
            </div>
          </div>

          <div className="space-y-2 text-xs">
            <span className="text-gray-400 font-bold block uppercase tracking-wider text-[11px]">Kantor Pusat</span>
            <span className="text-gray-300 block">Cyber 2 Tower Lantai 6, Kuningan, Jakarta Selatan.</span>
            <span className="text-gray-300 block">Telepon: (021) 1234-5678</span>
            <span className="text-gray-300 block font-mono mb-2">support-id@4life.com</span>
            <div className="mt-4 bg-white rounded-xl overflow-hidden border border-gray-700 w-full max-w-[180px]">
              <img src="/kantorpusatindo.png" alt="Gedung Kantor Pusat 4Life Indonesia" className="w-full h-auto object-cover" />
              <div className="bg-gray-800 text-[9px] text-center py-1.5 font-bold text-gray-300">Kantor Pusat 4Life ID</div>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-[10px] text-gray-500 text-center sm:text-left">
          <p>&copy; {new Date().getFullYear()} PT 4Life Indonesia Trading. All Rights Reserved.</p>
          <p className="italic">Suplemen Kesehatan — Bukan untuk mendiagnosa, mengobati, atau mencegah penyakit.</p>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5 sm:gap-3 pointer-events-none">
        {/* Back To Top */}
        {showBackToTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Kembali ke atas"
            className="pointer-events-auto p-2.5 sm:p-3 rounded-full bg-white text-gray-700 hover:text-blue-600 border border-gray-200 shadow-lg hover:shadow-xl transition-all cursor-pointer group"
          >
            <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        )}

        {/* Floating WhatsApp Action Button */}
        <button
          onClick={() => handleOpenConsultation("Halo Admin 4Life, saya ingin berkonsultasi seputar produk Transfer Factor untuk kesehatan keluarga.")}
          className="pointer-events-auto flex items-center gap-2 sm:gap-2.5 p-3 sm:px-4 sm:py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-xl hover:shadow-2xl transition-all cursor-pointer group hover:scale-105"
        >
          <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-white"></span>
          </span>
          <MessageCircle className="w-5 h-5" />
          <span className="text-xs font-bold pr-1 hidden sm:inline">Konsultasi WhatsApp</span>
        </button>
      </div>

    </div>
  );
}

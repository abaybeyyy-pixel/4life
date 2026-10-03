import React, { useState } from "react";
import { products } from "../data";
import { 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  HelpCircle, 
  Send,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Check,
  Activity,
  ShieldAlert,
  Sparkles,
  Sliders,
  FileText,
  ExternalLink
} from "lucide-react";

interface MidwifeTrackProps {
  onSelectProduct: (productId: string) => void;
  onOpenConsultation: (message: string) => void;
}

export default function MidwifeTrack({ onSelectProduct, onOpenConsultation }: MidwifeTrackProps) {
  const [quizState, setQuizState] = useState({
    activityLevel: "moderate",
    restQuality: "enough",
    healthFocus: "daily-protection"
  });

  // Interactive Immunology Explorer States
  const [activePillar, setActivePillar] = useState<"mendidik" | "meningkatkan" | "menyeimbangkan">("mendidik");
  const [timelineYear, setTimelineYear] = useState<1992 | 2003 | 2004 | 3500>(1992);
  const [immuneBalanceVal, setImmuneBalanceVal] = useState<number>(50); // 0 = Hiporeaktif, 50 = Seimbang, 100 = Hiperaktif
  const [isTestNKActive, setIsTestNKActive] = useState<boolean>(false);


  const handleWAClick = (messageText: string) => {
    const phone = "6282112345678";
    const url = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(messageText)}`;
    window.open(url, "_blank");
  };

  const getQuizRecommendation = () => {
    if (quizState.restQuality === "poor" || quizState.healthFocus === "recovery" || quizState.activityLevel === "intense") {
      return {
        product: products[1],
        reason: "TF Plus mengandung Transfer Factor yang diperkuat Zink dan campuran herbal Cordyvant. Cocok untuk Anda yang mengalami kelelahan tinggi, kurang istirahat, atau sedang dalam masa pemulihan.",
        tip: "Konsumsi rutin pagi dan malam setelah makan."
      };
    } else {
      return {
        product: products[0],
        reason: "TF Tri-Factor murni cocok untuk fondasi daya tahan harian seluruh anggota keluarga. Melatih dan menyeimbangkan kerja sel imun agar bekerja cerdas.",
        tip: "Sangat baik dikonsumsi harian bersama segelas air putih hangat."
      };
    }
  };

  const rec = getQuizRecommendation();

  return (
    <div className="space-y-20 pb-16 text-gray-800">
      
      {/* ═══ HERO SECTION ═══ */}
      <section className="bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950 rounded-3xl overflow-hidden border border-gray-800 shadow-2xl relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.15),transparent_50%)] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16 relative z-10 grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-blue-500/10 text-sky-400 border border-blue-500/20">
                <ShieldCheck className="w-3.5 h-3.5" /> Resmi BPOM · Sertifikasi NSF Internasional
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.18]">
              Tubuh Anda Punya Tentara.<br />
              Tapi Siapa yang <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-400">Melatih Mereka?</span>
            </h1>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Setiap hari, sel imun Anda bertempur melawan ribuan patogen. Transfer Factor bukan sekadar vitamin biasa — ia membawa <strong className="text-white">informasi memori pertahanan alami (44 asam amino)</strong> yang melatih sel imun cara mengenali, merespons, dan mengingat musuh secara cerdas.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-4 border-t border-gray-800/80 pt-5 text-xs text-gray-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span className="leading-snug">Alami dari kolostrum sapi & kuning telur paten</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span className="leading-snug">Dilindungi 60+ paten riset bioteknologi</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span className="leading-snug">Diakui di 70+ negara lebih dari 25 tahun</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => handleWAClick("Halo, saya ingin konsultasi tentang cara kerja Transfer Factor untuk daya tahan tubuh keluarga saya.")}
                className="px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-xl transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 cursor-pointer group"
              >
                Konsultasi WhatsApp Gratis
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={() => document.getElementById("sains")?.scrollIntoView({ behavior: "smooth" })}
                className="px-6 py-3.5 bg-gray-800/80 hover:bg-gray-800 text-white border border-gray-700 font-bold text-sm rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                Pelajari Riset Klinis
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-gray-700/60 shadow-2xl bg-gray-800/50 group">
              <img 
                src="/mother_baby_hero.png" 
                alt="Perlindungan Imun Alami Keluarga 4Life" 
                className="w-full h-80 sm:h-96 object-cover transform group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent" />
              
              {/* Floating Molecule Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-gray-900/90 backdrop-blur-md border border-gray-700 p-4 rounded-2xl flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center shrink-0 p-1">
                  <img src="/transfer_factor.png" alt="Transfer Factor Molecule" className="w-full h-full object-contain" />
                </div>
                <div className="text-left text-xs">
                  <span className="text-[10px] font-extrabold text-sky-400 uppercase tracking-wider block">Standar Emas Imunologi</span>
                  <span className="font-bold text-white block">Tingkatkan Sel NK hingga +437%</span>
                  <span className="text-[10px] text-gray-400">Terdaftar di Physicians' Desk Reference (PDR) USA</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ═══ TRUST BADGES ═══ */}
      <section className="space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-widest font-bold text-blue-700">Jaminan Kredibilitas</span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Kenapa Anda Bisa Percaya Produk Ini?
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Bukan sekadar klaim. Ini bukti legalitas, sertifikasi, dan pengakuan internasional yang bisa Anda verifikasi sendiri.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-5">
          {[
            { code: "BPOM", color: "blue", title: "BPOM RI", desc: "Terdaftar resmi dengan Nomor Izin Edar yang sah dan diawasi ketat otoritas kesehatan nasional.", badge: "Lolos Uji Keamanan Lokal" },
            { code: "NSF", color: "blue", title: "NSF International", desc: "Diuji independen untuk memastikan kualitas bahan baku, kebersihan, dan keakuratan label produk.", badge: "Standar Manufaktur Global" },
            { code: "Halal", color: "blue", title: "M Halal", desc: "Bahan bebas kandungan tidak halal dan diproses sesuai syariat. Aman untuk seluruh keluarga Muslim.", badge: "100% Syariah & Higienis" },
            { code: "BBB", color: "gray", title: "Better Business Bureau", desc: "Akreditasi A+ atas integritas bisnis, praktik transparan, dan etika pelayanan pelanggan.", badge: "Perusahaan Terpercaya A+" },
            { code: "APLI", color: "blue", title: "APLI & WFDSA", desc: "Anggota resmi asosiasi penjualan langsung lokal dan global. Bisnis legal dan beretika.", badge: "Bisnis Legal & Beretika" },
          ].map((item, i) => (
            <div key={i} className="bg-white border border-gray-200 p-5 rounded-2xl space-y-3 flex flex-col justify-between hover:border-blue-300 hover:bg-blue-50/5 transition-all">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-lg bg-gray-100 text-gray-700 flex items-center justify-center font-black text-[10px] border border-gray-200">
                  {item.code}
                </div>
                <h4 className="text-sm font-bold text-gray-900">{item.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
              <div className="text-[10px] font-bold text-gray-600 bg-gray-50 py-1 px-2.5 rounded-lg text-center border border-gray-100">
                {item.badge}
              </div>
            </div>
          ))}
        </div>

        {/* Sertifikasi & Paten Gallery */}
        <div id="sertifikasi" className="scroll-mt-20 grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-blue-300 hover:bg-blue-50/5 transition-all">
            <div className="aspect-[4/3] overflow-hidden bg-gray-50">
              <img src="/serti.png" alt="Sertifikasi Resmi 4Life Transfer Factor" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-5 space-y-1 text-left">
              <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded uppercase inline-block">Dokumen Resmi</span>
              <h4 className="text-sm font-bold text-gray-900">Sertifikasi & Legalitas Produk</h4>
              <p className="text-xs text-gray-500">Bukti sertifikasi BPOM, NSF International, dan standar keamanan yang terverifikasi.</p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-blue-300 hover:bg-blue-50/5 transition-all">
            <div className="aspect-[4/3] overflow-hidden bg-gray-50">
              <img src="/paten.png" alt="Paten Ilmiah 4Life Transfer Factor" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-5 space-y-1 text-left">
              <span className="text-[10px] font-bold text-gray-600 bg-gray-100 px-2 py-0.5 rounded uppercase inline-block">Hak Paten</span>
              <h4 className="text-sm font-bold text-gray-900">60+ Paten Ilmiah Dunia</h4>
              <p className="text-xs text-gray-500">Dokumentasi paten eksklusif hasil riset bioteknologi 4Life Research USA.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ EDUKASI: TRAINING VS FEEDING ═══ */}
      <section className="grid lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
        <div className="lg:col-span-6 text-left space-y-5">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-100">
            Sains Imun Terdepan
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight">
            Vitamin Memberi Makan Sel Imun.<br />
            Transfer Factor <em>Mendidik</em> Mereka.
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Bayangkan tentara yang makan kenyang tapi tidak pernah dilatih berperang. Itulah yang terjadi jika Anda hanya mengandalkan vitamin. Transfer Factor memberikan "data intelijen" agar sel imun tahu persis siapa musuhnya.
          </p>
          
          <div className="space-y-3 pt-2 text-xs">
            <div className="flex gap-3">
              <Check className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-gray-900 block">Recognize — Mengenali Ancaman</strong>
                <p className="text-gray-500">Sel imun belajar membedakan sel sehat dari sel asing berbahaya secara akurat.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Check className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-gray-900 block">Respond — Bereaksi Sigap</strong>
                <p className="text-gray-500">Sel imun langsung bertindak cepat menetralkan ancaman sebelum berkembang biak.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Check className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-gray-900 block">Remember — Mengingat Musuh</strong>
                <p className="text-gray-500">Data memori patogen disimpan agar tubuh siap jika ancaman yang sama datang lagi.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 bg-gray-900 text-white rounded-2xl p-8 border border-gray-800 space-y-5 text-left">
          <span className="text-[10px] font-bold text-sky-400 uppercase tracking-widest block">Pembeda Utama</span>
          <h4 className="text-lg font-bold text-white">Apa yang Ada di Dalam Transfer Factor?</h4>
          
          <div className="space-y-3 text-xs text-gray-300">
            <div className="bg-gray-800 p-4 rounded-xl border border-gray-700">
              <span className="font-bold text-sky-400 block mb-1">UltraFactor™ + OvoFactor®</span>
              <p className="leading-relaxed">Konsentrat protein ultra-filter dari kolostrum sapi premium dan kuning telur ayam — sumber utama peptida memori imunologis.</p>
            </div>
            
            <div className="bg-gray-800 p-4 rounded-xl border border-gray-700">
              <span className="font-bold text-sky-400 block mb-1">NanoFactor® Extract</span>
              <p className="leading-relaxed">Partikel berukuran nano yang mampu menembus membran sel untuk menyampaikan instruksi imunologis langsung ke sel pertahanan.</p>
            </div>
          </div>

          <div className="pt-2 border-t border-gray-800 flex items-center justify-between text-xs text-gray-400">
            <span>Ekstraksi paten USA</span>
            <span className="font-bold text-white">4Life Research, sejak 1998</span>
          </div>
        </div>
      </section>

      {/* ═══ SAINS & RISET KLINIS ═══ */}
      <section id="sains" className="space-y-14 pt-8 border-t border-gray-200 scroll-mt-20 text-left">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase bg-gray-100 text-gray-700 border border-gray-200">
            Kekuatan Sains Molekuler
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
            Bukan Klaim Kosong. Ini Data Klinis.
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed max-w-xl mx-auto">
            Setiap kapsul Transfer Factor dibuat berdasarkan riset yang dipublikasikan di jurnal ilmiah internasional — bukan sekadar testimoni.
          </p>
        </div>

        {/* 4 Active Molecules */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {[
            { code: "01", name: "UltraFactor™", title: "Kolostrum Sapi Premium", desc: "Konsentrat protein ultra-filter dari kolostrum sapi pilihan untuk melatih kecerdasan sel imun." },
            { code: "02", name: "OvoFactor®", title: "Kuning Telur Ayam Paten", desc: "Peptida berpaten dari kuning telur ayam untuk mendukung daya tahan seluler tubuh." },
            { code: "03", name: "NanoFactor®", title: "Peptida Nano-Filter", desc: "Konsentrasi berukuran nano untuk penyerapan seluler optimal tanpa hambatan biologis." },
            { code: "04", name: "PhytoFactor™", title: "Transfer Factor Nabati", desc: "Inovasi transfer factor nabati pertama dari biji Brassica napus. Ramah untuk vegetarian." },
          ].map((c) => (
            <div key={c.code} className="p-5 rounded-2xl border bg-white border-gray-200 space-y-2 hover:border-gray-300 transition-colors">
              <span className="text-[10px] font-bold px-2 py-0.5 rounded inline-block bg-gray-100 text-gray-700">{c.code}. {c.name}</span>
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">{c.title}</h4>
              <p className="text-xs text-gray-500 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="max-w-5xl mx-auto space-y-4">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-gray-900">Imun Lemah vs Imun Terdidik — Apa Bedanya?</h3>
            <p className="text-xs text-gray-500">Perbandingan nyata antara tubuh tanpa dan dengan dukungan Transfer Factor.</p>
          </div>
          
          <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="p-4 text-xs font-bold uppercase text-gray-500 tracking-wider">Metrik</th>
                    <th className="p-4 text-xs font-bold uppercase text-gray-500 tracking-wider">Tanpa Transfer Factor</th>
                    <th className="p-4 text-xs font-bold uppercase text-blue-700 tracking-wider bg-blue-50/50">Dengan Transfer Factor</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-xs text-gray-600">
                  <tr>
                    <td className="p-4 font-bold text-gray-800">Kecepatan Respons Imun</td>
                    <td className="p-4">Lambat — sel kesulitan mengenali jenis patogen baru</td>
                    <td className="p-4 bg-blue-50/30 font-medium text-gray-800">Cepat — sel langsung mengenali dan menetralkan ancaman</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-gray-800">Efisiensi Energi Tubuh</td>
                    <td className="p-4">Boros — tubuh mudah lelah karena peradangan salah sasaran</td>
                    <td className="p-4 bg-blue-50/30 font-medium text-gray-800">Efisien — energi terjaga karena imun bekerja terarah</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-gray-800">Risiko Sakit Berulang</td>
                    <td className="p-4">Tinggi — terutama saat pergantian cuaca atau kurang tidur</td>
                    <td className="p-4 bg-blue-50/30 font-medium text-gray-800">Rendah — sel NK menjaga pertahanan secara konsisten</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 4 Immune Cells */}
        <div className="max-w-6xl mx-auto space-y-4">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-gray-900">4 Pasukan Imun yang Dididik Transfer Factor</h3>
            <p className="text-xs text-gray-500">Sel-sel pertahanan utama tubuh yang ditingkatkan kemampuannya.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { name: "Sel Natural Killer", role: "Garis Depan", desc: "Mendeteksi dan menetralkan sel asing atau terinfeksi virus sebelum berkembang biak." },
              { name: "Makrofag", role: "Pasukan Pembersih", desc: "Menyingkirkan sisa sel mati dan bakteri patogen dari dalam jaringan tubuh." },
              { name: "Sel T Regulatori", role: "Pengendali Inflamasi", desc: "Mencegah peradangan berlebih agar imun bekerja seimbang, tidak menyerang sel sendiri." },
              { name: "Sel B", role: "Pabrik Antibodi", desc: "Memproduksi jutaan protein imunoglobulin spesifik untuk proteksi jangka panjang." }
            ].map((cell, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-2xl p-5 space-y-2 hover:border-blue-300 hover:bg-blue-50/5 transition-all">
                <div className="w-9 h-9 bg-gray-100 text-gray-700 rounded-lg flex items-center justify-center font-bold text-sm border border-gray-200">{i+1}</div>
                <h4 className="font-bold text-gray-900 text-sm">{cell.name}</h4>
                <span className="text-[10px] text-blue-700 font-bold uppercase block">{cell.role}</span>
                <p className="text-xs text-gray-500 leading-relaxed">{cell.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ═══ INTERACTIVE SCIENCE HUB: 3 PILAR & BUKTI MEDIS ═══ */}
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold bg-blue-100 text-blue-800 border border-blue-200 uppercase tracking-wide">
              Eksplorasi Sains Imunologi
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
              Interactive Immunology Explorer
            </h3>
            <p className="text-xs text-gray-500">
              Pelajari mekanisme mendalam bagaimana Transfer Factor mendidik, meningkatkan, dan menyeimbangkan kekebalan tubuh Anda berdasarkan data klinis resmi.
            </p>
          </div>

          {/* 3 Pillars Tabs */}
          <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
            <div className="grid grid-cols-3 border-b border-gray-200 bg-gray-50/70">
              {[
                { id: "mendidik", label: "1. MENDIDIK", desc: "Informasi & 3 Fraksi", icon: Sparkles },
                { id: "meningkatkan", label: "2. MENINGKATKAN", desc: "Uji Sel NK +437%", icon: Activity },
                { id: "menyeimbangkan", label: "3. MENYEIMBANGKAN", desc: "Autoimun & Regulasi", icon: Sliders }
              ].map((tab) => {
                const TabIcon = tab.icon;
                const isActive = activePillar === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActivePillar(tab.id as any)}
                    className={`p-4 md:p-6 text-center cursor-pointer transition-colors flex flex-col items-center justify-center gap-1 ${isActive ? "bg-white border-b-2 border-blue-600" : "hover:bg-gray-100/50"}`}
                  >
                    <TabIcon className={`w-5 h-5 ${isActive ? "text-blue-600" : "text-gray-400"}`} />
                    <span className={`text-[10px] md:text-xs font-bold leading-tight ${isActive ? "text-gray-900" : "text-gray-500"}`}>{tab.label}</span>
                    <span className="text-[9px] text-gray-400 hidden md:inline">{tab.desc}</span>
                  </button>
                );
              })}
            </div>

            <div className="p-6 md:p-10 text-left">
              {activePillar === "mendidik" && (
                <div className="grid md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-7 space-y-4">
                    <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      Intelijen Sistem Imun
                    </span>
                    <h4 className="text-xl font-bold text-gray-900">Mengapa Sel Imun Butuh Pendidikan?</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Sama seperti vaksin yang mendidik sel kekebalan terhadap mikroba tertentu (mis. cacar air), <strong>Transfer Factor (TF)</strong> membawa basis data informasi memori imun yang tidak terbatas. TF bukanlah obat, melainkan molekul informasi alami yang dirancang oleh sistem imun untuk sistem imun.
                    </p>
                    
                    <div className="space-y-3 bg-gray-50 p-4 rounded-2xl border border-gray-100 text-xs">
                      <span className="font-bold text-gray-700 block uppercase tracking-wide">3 Fraksi Utama Transfer Factor:</span>
                      <div className="grid gap-2">
                        <div className="flex gap-2">
                          <span className="font-mono font-bold text-blue-600">01.</span>
                          <p className="text-gray-600"><strong>Fraksi Antigen-Spesifik (Mendidik):</strong> Mengajarkan sel kekebalan tubuh mengenali ancaman lebih cepat agar tidak terjadi salah target.</p>
                        </div>
                        <div className="flex gap-2">
                          <span className="font-mono font-bold text-blue-600">02.</span>
                          <p className="text-gray-600"><strong>Fraksi Inducer (Meningkatkan):</strong> Menginstruksikan sel imun untuk segera merespons ancaman.</p>
                        </div>
                        <div className="flex gap-2">
                          <span className="font-mono font-bold text-blue-600">03.</span>
                          <p className="text-gray-600"><strong>Fraksi Suppressor-Regulator (Menyeimbangkan):</strong> Menenangkan sel imun yang terlalu reaktif untuk mencegah peradangan kronis.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-5 space-y-4 bg-gray-950 text-gray-300 p-6 rounded-2xl border border-gray-800 text-xs">
                    <span className="text-[10px] font-bold text-sky-400 uppercase tracking-widest block">Profil Keamanan & Asal</span>
                    <h5 className="font-bold text-white text-sm">Alami dari Alam (Ibu)</h5>
                    <p className="leading-relaxed">
                      Diekstrak murni dari kolostrum sapi & kuning telur ayam pilihan melalui proses Filtrasi, Ultra-Filtrasi, dan Nano-Filtrasi bioteknologi yang dilindungi paten global 4Life Research USA.
                    </p>
                    <div className="space-y-2 border-t border-gray-800 pt-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                        <span>Bebas hormon pertumbuhan, kolesterol, & antibodi asing</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                        <span>Non-spesies spesifik (selaras sempurna dengan tubuh manusia)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                        <span>TANPA EFEK SAMPING, TANPA OVERDOSIS, & AMAN UNTUK BAYI</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activePillar === "meningkatkan" && (
                <div className="grid md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-7 space-y-4">
                    <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      Uji Sel Pembunuh Alami (NK Cells)
                    </span>
                    <h4 className="text-xl font-bold text-gray-900">Senjata Kecil Dokter untuk Mengatasi Ancaman</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Dalam studi in-vitro terstandar selama 7 tahun (1992-1999) oleh <strong>Institute of Longevity Medicine (California, AS)</strong> yang menguji 196 suplemen kesehatan, <strong>Transfer Factor Plus</strong> menonjol dengan melatih sel pembunuh alami (NK Cells) hingga mencapai peningkatan efisiensi pembunuhan sel kanker/leukemia K562 sebesar <strong>437%</strong> dalam tes 48 jam.
                    </p>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Dokumentasi Russian Academy of Medical Sciences (2004) juga membuktikan bahwa dalam 4 jam pertama penggunaan, aktivitas sel NK melonjak <strong>103%</strong> secara klinis, membunuh 55% sel kanker secara instan.
                    </p>

                    <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl text-xs text-blue-900 leading-relaxed">
                      <strong>Fakta Biologis:</strong> TF adalah peptida kecil berantai 44 asam amino yang secara biologis klop dengan reseptor sel T-Helper manusia di usus kecil, memicu respons imun seluler (CMI) yang menstimulasi sumsum tulang untuk memproduksi sel induk pertahanan baru.
                    </div>
                  </div>

                  <div className="md:col-span-5 bg-gray-50 border border-gray-200 p-6 rounded-2xl text-xs space-y-4">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Simulator Pembunuhan Sel Kanker</span>
                    <h5 className="font-bold text-gray-900 text-sm">Visualisasi Aktivitas Sel NK</h5>
                    
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-[10px] text-gray-500 mb-1">
                          <span>Aktivitas Imun Dasar (Tanpa TF)</span>
                          <span className="font-mono font-bold">100%</span>
                        </div>
                        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                          <div className="bg-gray-400 h-full" style={{ width: "20%" }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between text-[10px] text-blue-700 mb-1">
                          <span>TF Tri-Factor (+103% Imunitas Dasar)</span>
                          <span className="font-mono font-bold">203%</span>
                        </div>
                        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                          <div 
                            className="bg-blue-500 h-full transition-all duration-1000" 
                            style={{ width: isTestNKActive ? "41%" : "20%" }}
                          ></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-[10px] text-sky-700 mb-1">
                          <span>TF Plus Tri-Factor (+437% Sel NK)</span>
                          <span className="font-mono font-bold">537%</span>
                        </div>
                        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                          <div 
                            className="bg-sky-500 h-full transition-all duration-1000" 
                            style={{ width: isTestNKActive ? "100%" : "20%" }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <button 
                      onClick={() => setIsTestNKActive(!isTestNKActive)}
                      className="w-full py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-xl font-bold text-[11px] cursor-pointer transition-colors text-center"
                    >
                      {isTestNKActive ? "Reset Simulasi" : "Uji Aktivitas Sel NK →"}
                    </button>
                    <span className="text-[9px] text-gray-400 italic block text-center">Uji in-vitro sel NK terhadap target sel leukemia K562.</span>
                  </div>
                </div>
              )}

              {activePillar === "menyeimbangkan" && (
                <div className="grid md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-7 space-y-4">
                    <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      Regulasi & Penyeimbangan
                    </span>
                    <h4 className="text-xl font-bold text-gray-900">Solusi Nyata untuk Autoimun & Alergi</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Sistem imun yang terlalu reaktif (hiperaktif) memicu peradangan kronis yang melahirkan gangguan autoimun dan alergi seperti <strong>Lupus, Multiple Sclerosis, Psoriasis, Dermatitis Atopik, Asma, Alergi Parah, dan Radang Sendi</strong>. 
                    </p>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Menggunakan diagnostik CD4 Helper T-Cell yang disetujui FDA pada tahun 2007, peneliti membuktikan bahwa <strong>Transfer Factor Tri-Factor Formula</strong> secara dinamis menenangkan sel T yang overaktif kembali ke tingkat keseimbangan istirahat. TF membantu membalikkan inflamasi dengan membimbing T-Helper mengubah auto-antibodi berbahaya seperti IgE menjadi IgG yang aman.
                    </p>
                    <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl text-xs text-gray-700">
                      <strong>Peran Nano Factors:</strong> Ekstrak berukuran nano ini bertindak sebagai koordinator taktis yang berkolaborasi dalam menenangkan dan menormalkan sel T hiperaktif agar tidak lagi merusak jaringan sehat tubuh sendiri.
                    </div>
                  </div>

                  <div className="md:col-span-5 bg-white border border-gray-200 p-6 rounded-2xl text-xs space-y-5 text-left shadow-sm">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Interactive Balance Simulator</span>
                    <h5 className="font-bold text-gray-900 text-sm">Geser untuk Mensimulasikan Keadaan Imun:</h5>
                    
                    <div className="space-y-2">
                      <input 
                        type="range" 
                        min="0" 
                        max="100" 
                        value={immuneBalanceVal} 
                        onChange={(e) => setImmuneBalanceVal(parseInt(e.target.value))}
                        className="w-full accent-blue-600 cursor-pointer h-2 bg-gray-200 rounded-lg appearance-none"
                      />
                      <div className="flex justify-between text-[9px] text-gray-400 font-bold uppercase">
                        <span>Hiporeaktif</span>
                        <span className="text-blue-600">Seimbang</span>
                        <span>Hiperaktif</span>
                      </div>
                    </div>

                    {immuneBalanceVal < 35 && (
                      <div className="bg-red-50 border border-red-200 p-4 rounded-xl space-y-1.5 transition-all">
                        <span className="font-bold text-red-800 text-xs flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-red-500 inline-block animate-pulse" />
                          Imun Hiporeaktif (Tidur/Lemah)
                        </span>
                        <p className="text-[11px] text-red-700 leading-relaxed">
                          Sel imun tidak tanggap. Kuman, bakteri, dan virus lewat begitu saja tanpa perlawanan. Tubuh rentan terkena infeksi akut dan penyakit menular.
                        </p>
                        <p className="text-[11px] text-gray-600 italic">
                          <strong>Solusi TF:</strong> Fraksi Inducer dalam TF Plus segera mendidik dan mendongkrak aktivitas NK Cell hingga 437%.
                        </p>
                      </div>
                    )}

                    {immuneBalanceVal >= 35 && immuneBalanceVal <= 70 && (
                      <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl space-y-1.5 transition-all">
                        <span className="font-bold text-blue-800 text-xs flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-blue-500 inline-block" />
                          Imun Seimbang (Terdidik & Siaga)
                        </span>
                        <p className="text-[11px] text-blue-700 leading-relaxed">
                          Kondisi ideal. Sel imun mendeteksi ancaman dengan cepat, memusnahkannya secara efisien tanpa peradangan berlebih, lalu mengingat profil ancaman tersebut.
                        </p>
                        <p className="text-[11px] text-gray-600 italic">
                          <strong>Mekanisme TF:</strong> Mempertahankan kondisi siaga dengan 3 M (Mengenali, Menanggapi, Mengingat).
                        </p>
                      </div>
                    )}

                    {immuneBalanceVal > 70 && (
                      <div className="bg-sky-50 border border-sky-200 p-4 rounded-xl space-y-1.5 transition-all">
                        <span className="font-bold text-sky-800 text-xs flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-sky-500 inline-block" />
                          Imun Hiperaktif (Alergi/Autoimun)
                        </span>
                        <p className="text-[11px] text-sky-700 leading-relaxed">
                          Sel imun terlalu agresif dan menyerang debu tidak berbahaya (alergi) atau organ tubuh sendiri (lupus, psoriasis, asma), menyebabkan inflamasi kronis.
                        </p>
                        <p className="text-[11px] text-gray-600 italic">
                          <strong>Solusi TF:</strong> Fraksi Suppressor menenangkan sel T pembantu yang terlalu aktif, mengubah antibodi alergi IgE menjadi IgG.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Medical Proof Timeline */}
          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6 md:p-10 space-y-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.05),transparent)] pointer-events-none" />
            
            <div className="space-y-2 text-left relative z-10">
              <span className="text-[10px] font-bold text-sky-400 uppercase tracking-widest block">Validasi & Pengakuan Global</span>
              <h4 className="text-xl md:text-2xl font-bold tracking-tight">Timeline Pembuktian Medis</h4>
              <p className="text-xs text-gray-400 max-w-xl">
                Bukan klaim pemasaran biasa. Berikut adalah perjalanan pembuktian klinis dan legalitas Transfer Factor yang diakui secara medis di seluruh dunia.
              </p>
            </div>

            {/* Clickable Timeline Steps */}
            <div className="relative z-10">
              <div className="grid grid-cols-4 border-b border-gray-800 pb-3 gap-2">
                {[
                  { year: 1992, title: "1992-1999", label: "Studi Uji California" },
                  { year: 2003, title: "PDR 2003", label: "Referensi Dokter" },
                  { year: 2004, title: "Rusia 2004", label: "Aman vs Obat" },
                  { year: 3500, title: "3.500+ Riset", label: "Ulasan Literatur" }
                ].map((item) => {
                  const isActive = timelineYear === item.year;
                  return (
                    <button
                      key={item.year}
                      onClick={() => setTimelineYear(item.year as any)}
                      className="text-left cursor-pointer focus:outline-none transition-all group animate-none"
                    >
                      <span className={`block font-bold text-[11px] sm:text-xs md:text-sm transition-colors ${isActive ? "text-sky-400" : "text-gray-500 group-hover:text-gray-300"}`}>
                        {item.title}
                      </span>
                      <span className="block text-[8px] sm:text-[9px] md:text-[10px] text-gray-500 truncate">{item.label}</span>
                      <div className={`h-1 rounded-full mt-2 transition-all ${isActive ? "bg-sky-400 w-full" : "bg-transparent w-0 group-hover:bg-gray-800"}`} />
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Info Panel */}
              <div className="pt-6 text-left space-y-4 transition-all duration-300 min-h-[140px]">
                {timelineYear === 1992 && (
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-sky-400 bg-sky-400/10 px-2 py-0.5 rounded border border-sky-400/20 uppercase inline-block">
                      Riset in-vitro 7 Tahun
                    </span>
                    <h5 className="font-bold text-white text-base">California USA — Institute of Longevity Medicine (1992 - 1999)</h5>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      Riset mendalam selama tujuh tahun yang membandingkan lebih dari 196 suplemen imunitas alami di dunia. Studi ini membuktikan bahwa Transfer Factor Plus melatih aktivitas pembunuhan sel kanker leukemia (model K562) hingga 437% lebih kuat, dan berhasil membunuh 97% sel target dalam uji 48 jam.
                    </p>
                  </div>
                )}

                {timelineYear === 2003 && (
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-sky-400 bg-sky-400/10 px-2 py-0.5 rounded border border-sky-400/20 uppercase inline-block">
                      Buku Rujukan Resmi AS
                    </span>
                    <h5 className="font-bold text-white text-base">Physicians' Desk Reference (PDR) — Sejak 2003</h5>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      Transfer Factor telah terdaftar resmi secara berturut-turut dalam PDR (buku rujukan standar para dokter di Amerika Serikat untuk meresepkan suplemen/obat-obatan) sejak tahun 2003. Hal ini membuktikan kredibilitas kualitas bahan, proses manufaktur higienis, dan efikasi yang terukur.
                    </p>
                    <p className="text-[10px] italic text-sky-400/80">
                      “Mampu membuat tubuh Anda terasa lebih muda 30 tahun (usia biologis arteri) setelah dikonsumsi secara konsisten dalam jangka waktu setahun.” — Restoration Biology & PDR Clinical Test.
                    </p>
                  </div>
                )}

                {timelineYear === 2004 && (
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded border border-blue-400/20 uppercase inline-block">
                      Surat Metodologis Resmi
                    </span>
                    <h5 className="font-bold text-white text-base">Akademi Ilmu Kedokteran Rusia — 2004</h5>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      Menteri Kesehatan dan Sosial Federasi Rusia menerbitkan metodologi klinis resmi setelah uji tanding yang dilakukan oleh Akademi Ilmu Kedokteran Rusia. Hasilnya secara sah membuktikan efikasi Transfer Factor sebagai modulasi imunologi unggulan yang bebas racun dibandingkan obat-obatan sintetis, mencegah efek samping obat kimia biasa, serta mempercepat masa pemulihan pasien.
                    </p>
                  </div>
                )}

                {timelineYear === 3500 && (
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-sky-400 bg-sky-400/10 px-2 py-0.5 rounded border border-sky-400/20 uppercase inline-block">
                      Konsensus Sains Global
                    </span>
                    <h5 className="font-bold text-white text-base">Lebih dari 3.500 Studi Klinis di Seluruh Dunia</h5>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      Selama lebih dari setengah abad, ribuan dokter, imunolog, dan peneliti dari berbagai negara telah mendokumentasikan khasiat peptida Transfer Factor. Terdapat lebih dari 3.500 abstrak klinis independen yang dipublikasikan di database literatur medis internasional yang memvalidasi perannya dalam melatih sistem imun.
                    </p>
                  </div>
                )}
              </div>
            </div>
            
            <div className="pt-6 border-t border-gray-800 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-500">
              <span className="italic">Catatan Medis: Transfer Factor bekerja langsung melatih kecerdasan tentara imun tubuh, bukan menyembuhkan penyakit secara langsung.</span>
              <button 
                onClick={() => onOpenConsultation("Halo, saya ingin berkonsultasi tentang bukti klinis PDR dan kegunaan ilmiah Transfer Factor.")}
                className="inline-flex items-center gap-1.5 text-sky-400 hover:text-sky-300 font-bold bg-transparent border-0 cursor-pointer"
              >
                Konsultasi <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Penghargaan Gallery */}
        <div className="max-w-6xl mx-auto space-y-4">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-gray-900">Penghargaan Internasional</h3>
            <p className="text-xs text-gray-500">Pengakuan dunia terhadap keunggulan formula dan integritas 4Life Research.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-blue-300 hover:bg-blue-50/5 transition-all">
              <div className="aspect-[16/10] overflow-hidden bg-gray-50">
                <img src="/penghargaan.png" alt="Penghargaan Internasional 4Life" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5 space-y-1 text-left">
                <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded uppercase inline-block">Penghargaan</span>
                <h4 className="text-sm font-bold text-gray-900">Pengakuan Industri Global</h4>
                <p className="text-xs text-gray-500">Penghargaan dari badan independen internasional atas inovasi dan keunggulan produk.</p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-blue-300 hover:bg-blue-50/5 transition-all">
              <div className="aspect-[16/10] overflow-hidden bg-gray-50">
                <img src="/penghargaan2.png" alt="Global 100 Awards 4Life" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5 space-y-1 text-left">
                <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded uppercase inline-block">Global 100</span>
                <h4 className="text-sm font-bold text-gray-900">Perusahaan Nutrasetika Terbaik</h4>
                <p className="text-xs text-gray-500">Penghargaan atas dedikasi pada riset formulasi imunologi dan kesehatan global.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Midwife Consultation Image */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 items-center">
              <div className="aspect-[4/3] md:aspect-auto md:h-full overflow-hidden bg-gray-50">
                <img src="/midwife_consultation.png" alt="Konsultasi Tenaga Kesehatan tentang Transfer Factor" className="w-full h-full object-cover" />
              </div>
              <div className="p-8 space-y-3 text-left">
                <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded uppercase inline-block">Edukasi Kesehatan</span>
                <h4 className="text-lg font-bold text-gray-900 leading-snug">Dipercaya oleh Praktisi Kesehatan</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Transfer Factor menjadi pilihan para profesional kesehatan di seluruh dunia sebagai suplemen pendukung sistem imun yang aman, efektif, dan berbasis riset ilmiah.
                </p>
                <div className="flex flex-wrap gap-1.5 text-[10px]">
                  <span className="font-bold text-gray-600 bg-gray-100 rounded px-2 py-1">Riset Klinis</span>
                  <span className="font-bold text-gray-600 bg-gray-100 rounded px-2 py-1">Aman untuk Keluarga</span>
                  <span className="font-bold text-gray-600 bg-gray-100 rounded px-2 py-1">Berbasis Bukti</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ KALKULATOR KEBUTUHAN IMUN ═══ */}
      <section className="bg-gray-50 border border-gray-200 rounded-2xl p-8 md:p-10 max-w-5xl mx-auto space-y-8">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <span className="text-xs font-semibold tracking-wider text-blue-700 uppercase">Asesmen Singkat</span>
          <h2 className="text-2xl font-bold text-gray-900">Produk Mana yang Tepat untuk Kondisi Anda?</h2>
          <p className="text-xs text-gray-500">
            Jawab 3 pertanyaan singkat ini. Kami bantu pilihkan produk yang paling sesuai.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-4 text-left">
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-2">Seberapa padat aktivitas harian Anda?</label>
              <div className="grid grid-cols-2 gap-2">
                <button 
                  onClick={() => setQuizState({ ...quizState, activityLevel: "moderate" })} 
                  className={`px-4 py-2.5 text-xs rounded-xl border transition-all font-semibold cursor-pointer ${quizState.activityLevel === "moderate" ? "border-blue-600 bg-blue-50 text-blue-700" : "border-gray-200 text-gray-600 hover:bg-gray-50"}`}
                >
                  Standar / Sedang
                </button>
                <button 
                  onClick={() => setQuizState({ ...quizState, activityLevel: "intense" })} 
                  className={`px-4 py-2.5 text-xs rounded-xl border transition-all font-semibold cursor-pointer ${quizState.activityLevel === "intense" ? "border-blue-600 bg-blue-50 text-blue-700" : "border-gray-200 text-gray-600 hover:bg-gray-50"}`}
                >
                  Tinggi / Ekstrem
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-2">Bagaimana kualitas tidur Anda?</label>
              <div className="grid grid-cols-2 gap-2">
                <button 
                  onClick={() => setQuizState({ ...quizState, restQuality: "enough" })} 
                  className={`px-4 py-2.5 text-xs rounded-xl border transition-all font-semibold cursor-pointer ${quizState.restQuality === "enough" ? "border-blue-600 bg-blue-50 text-blue-700" : "border-gray-200 text-gray-600 hover:bg-gray-50"}`}
                >
                  Cukup (7–8 jam)
                </button>
                <button 
                  onClick={() => setQuizState({ ...quizState, restQuality: "poor" })} 
                  className={`px-4 py-2.5 text-xs rounded-xl border transition-all font-semibold cursor-pointer ${quizState.restQuality === "poor" ? "border-blue-600 bg-blue-50 text-blue-700" : "border-gray-200 text-gray-600 hover:bg-gray-50"}`}
                >
                  Kurang / Sering Begadang
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-2">Apa fokus utama kesehatan Anda saat ini?</label>
              <div className="grid grid-cols-2 gap-2">
                <button 
                  onClick={() => setQuizState({ ...quizState, healthFocus: "daily-protection" })} 
                  className={`px-4 py-2.5 text-xs rounded-xl border transition-all font-semibold cursor-pointer ${quizState.healthFocus === "daily-protection" ? "border-blue-600 bg-blue-50 text-blue-700" : "border-gray-200 text-gray-600 hover:bg-gray-50"}`}
                >
                  Jaga Stamina Harian
                </button>
                <button 
                  onClick={() => setQuizState({ ...quizState, healthFocus: "recovery" })} 
                  className={`px-4 py-2.5 text-xs rounded-xl border transition-all font-semibold cursor-pointer ${quizState.healthFocus === "recovery" ? "border-blue-600 bg-blue-50 text-blue-700" : "border-gray-200 text-gray-600 hover:bg-gray-50"}`}
                >
                  Pemulihan Pasca Sakit
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 flex flex-col justify-between h-full text-left">
            <div className="space-y-4">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Rekomendasi untuk Anda:</span>
              <h4 className="text-lg font-bold text-gray-900">{rec.product.fullName}</h4>
              <p className="text-xs text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-xl border border-gray-100">
                {rec.reason}
              </p>
              <div className="text-xs text-blue-800 font-semibold italic border-l-2 border-blue-500 pl-3">
                Tips: {rec.tip}
              </div>
            </div>
            
            <div className="flex gap-3 pt-6 mt-6 border-t border-gray-100">
              <button 
                onClick={() => onSelectProduct(rec.product.id)} 
                className="flex-1 py-3 text-xs font-bold text-gray-700 border border-gray-200 rounded-xl bg-white hover:bg-gray-50 transition-colors cursor-pointer"
              >
                Lihat Detail
              </button>
              <a 
                href="https://indonesia.4life.com/12941871/shop" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex-1 py-3 text-xs font-bold text-white bg-gray-900 hover:bg-gray-800 rounded-xl text-center transition-colors"
              >
                Beli Resmi
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PRODUK ═══ */}
      <section id="produk" className="space-y-10 scroll-mt-20">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-widest font-bold text-gray-500">Produk Transfer Factor</span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Pilih Sesuai Kebutuhan Keluarga Anda</h2>
          <p className="text-sm text-gray-500">Dua varian utama yang melindungi daya tahan tubuh dengan cara berbeda.</p>
        </div>

        <div className="max-w-4xl mx-auto flex items-center gap-3 bg-blue-50 border border-blue-200 rounded-2xl px-5 py-4">
          <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0" />
          <p className="text-xs text-blue-900 font-medium text-left leading-relaxed">
            <strong>Penting:</strong> Pastikan Anda membeli hanya melalui <a href="https://indonesia.4life.com/12941871/shop" target="_blank" rel="noopener noreferrer" className="underline font-bold text-blue-700 hover:text-blue-900">Toko Online Resmi 4Life Indonesia</a> untuk menjamin keaslian produk.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {products.map((prod) => {
            const formatRupiah = (val: number) => new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(val);
            const savings = prod.priceRetail - prod.priceMember;

            return (
              <div key={prod.id} className="bg-white rounded-3xl border border-gray-200 overflow-hidden group flex flex-col justify-between hover:border-blue-300 hover:shadow-lg transition-all">
                <div className="p-7 space-y-4 text-left">
                  <div className="w-full h-52 flex items-center justify-center bg-gray-50 rounded-2xl overflow-hidden relative p-4">
                    <img 
                      src={prod.id === "tf-tri-factor" ? "/produk.png" : "/produk2.png"} 
                      alt={prod.name} 
                      className="max-h-44 object-contain transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full text-[10px] font-bold text-gray-700 border border-gray-200 shadow-xs">
                      {prod.points} LP
                    </div>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full uppercase tracking-wider inline-block">
                      {prod.id === "tf-tri-factor" ? "Daya Tahan Harian" : "Pemulihan Intensif"}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900">{prod.name}</h3>
                    <p className="text-xs text-gray-500 italic">{prod.tagline}</p>
                  </div>

                  {/* Pricing Display */}
                  <div className="bg-gray-50 p-3.5 rounded-xl border border-gray-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-gray-400 block line-through">{formatRupiah(prod.priceRetail)}</span>
                      <span className="text-lg font-black text-blue-600">{formatRupiah(prod.priceMember)}</span>
                    </div>
                    <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-1 rounded-lg">
                      Hemat {formatRupiah(savings)}
                    </span>
                  </div>

                  <div className="border-t border-gray-100 pt-3 space-y-1.5 text-xs">
                    <span className="font-bold text-gray-900 block">Kandungan Utama:</span>
                    <ul className="space-y-1 text-gray-600">
                      {prod.coreIngredients.map((ing, i) => (
                        <li key={i} className="flex gap-2 items-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5" />
                          <span>{ing}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-5 bg-gray-50/70 border-t border-gray-100">
                  <div className="flex gap-3 w-full">
                    <button 
                      onClick={() => onSelectProduct(prod.id)} 
                      className="flex-1 px-4 py-2.5 bg-white hover:bg-blue-50 text-blue-700 border border-blue-200 text-xs font-bold rounded-xl transition-colors cursor-pointer text-center"
                    >
                      Detail & Komposisi
                    </button>
                    <a 
                      href="https://indonesia.4life.com/12941871/shop" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex-1 px-5 py-2.5 bg-gray-900 hover:bg-gray-800 text-white text-xs font-bold rounded-xl transition-colors text-center shadow-xs"
                    >
                      Beli Resmi →
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ═══ ABOUT RIDWAN ═══ */}
      <section className="bg-gray-900 text-white rounded-2xl p-8 max-w-4xl mx-auto border border-gray-800 text-left">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4 flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full border-2 border-gray-700 overflow-hidden bg-gray-800 flex items-center justify-center">
              <span className="text-3xl font-extrabold text-gray-400">R</span>
            </div>
            <h4 className="font-bold text-base mt-3 text-white">Ridwan</h4>
            <span className="text-[10px] text-sky-400 uppercase tracking-widest font-semibold mt-1">Edukator Kesehatan Imun</span>
          </div>

          <div className="md:col-span-8 space-y-3">
            <h3 className="text-lg font-bold text-white">Tentang Portal Edukasi Ini</h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Saya Ridwan, membangun portal ini agar masyarakat Indonesia bisa mengakses informasi ilmiah tentang sistem imun tubuh dan suplemen berbasis riset — tanpa harus bingung dengan klaim-klaim yang tidak berdasar.
            </p>
            <p className="text-xs text-gray-400 leading-relaxed bg-gray-800 p-4 rounded-xl border border-gray-700">
              Portal ini menyajikan data dari jurnal ilmiah, sertifikasi resmi, dan dokumen paten yang bisa Anda verifikasi sendiri. Semua informasi disusun untuk membantu keluarga Indonesia membuat keputusan kesehatan yang tepat.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

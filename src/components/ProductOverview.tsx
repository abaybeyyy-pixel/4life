import React, { useState } from "react";
import { products } from "../data";
import { 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Check, 
  Activity, 
  Sparkles, 
  Sliders, 
  ExternalLink 
} from "lucide-react";

interface ProductOverviewProps {
  onSelectProduct: (productId: string) => void;
  onOpenConsultation: (message: string) => void;
}

export default function ProductOverview({ onSelectProduct, onOpenConsultation }: ProductOverviewProps) {
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
        reason: "TF Plus mengandung Transfer Factor yang diperkuat Zink dan campuran herbal Cordyvant. Sangat ideal untuk Anda yang beraktivitas berat, sering kurang tidur/lembur, atau sedang dalam masa pemulihan daya tahan tubuh.",
        tip: "Konsumsi rutin pagi dan malam setelah makan untuk perlindungan seluler maksimal."
      };
    } else {
      return {
        product: products[0],
        reason: "TF Tri-Factor murni sangat cocok sebagai fondasi kecerdasan daya tahan harian seluruh anggota keluarga. Mendidik dan menyeimbangkan respons sel pertahanan tubuh agar bekerja cerdas dan efisien.",
        tip: "Sangat baik dikonsumsi harian bersama segelas air putih hangat setiap pagi."
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
                <ShieldCheck className="w-3.5 h-3.5" /> Resmi BPOM · Sertifikasi Standar GMP & NSF
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.18]">
              Tubuh Anda Punya Tentara.<br />
              Tapi Siapa yang <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-400">Melatih Mereka?</span>
            </h1>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Setiap hari, sel imun bertempur melawan ribuan patogen, bakteri, dan virus. Transfer Factor bukan vitamin biasa — ia membawa <strong className="text-white">informasi memori pertahanan alami (44 asam amino)</strong> yang melatih sel imun cara mengenali, merespons, dan mengingat ancaman kesehatan secara cerdas.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-4 border-t border-gray-800/80 pt-5 text-xs text-gray-300">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span className="leading-snug">Diekstrak alami dari kolostrum sapi & kuning telur paten</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span className="leading-snug">Dilindungi 60+ paten riset bioteknologi internasional</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span className="leading-snug">Dipercaya di 70+ negara selama lebih dari 25 tahun</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => handleWAClick("Halo Admin, saya ingin konsultasi produk Transfer Factor untuk menjaga daya tahan tubuh keluarga saya.")}
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

          {/* Right Column: Hero Visual Product Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-gray-700/60 shadow-2xl bg-gradient-to-b from-gray-900 via-gray-800 to-gray-950 p-6 md:p-8 space-y-6">
              
              {/* Product Duo Showcase */}
              <div className="grid grid-cols-2 gap-4">
                {/* Product 1: Tri-Factor */}
                <div 
                  onClick={() => onSelectProduct("tf-tri-factor")}
                  className="bg-gray-800/80 hover:bg-gray-800 border border-gray-700/80 hover:border-blue-500/50 p-4 rounded-2xl flex flex-col items-center text-center transition-all cursor-pointer group/card shadow-md"
                >
                  <div className="h-32 w-full flex items-center justify-center p-2 mb-2 bg-gray-900/50 rounded-xl">
                    <img 
                      src="/produk.png" 
                      alt="TF Tri-Factor Formula" 
                      className="max-h-28 object-contain transform group-hover/card:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-[9px] font-bold text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded-full mb-1">Daya Tahan Harian</span>
                  <h4 className="text-xs font-bold text-white leading-tight">TF Tri-Factor®</h4>
                  <p className="text-[10px] text-gray-400 mt-1">Fondasi Kecerdasan Imun</p>
                </div>

                {/* Product 2: TF Plus */}
                <div 
                  onClick={() => onSelectProduct("tf-plus")}
                  className="bg-gray-800/80 hover:bg-gray-800 border border-gray-700/80 hover:border-sky-500/50 p-4 rounded-2xl flex flex-col items-center text-center transition-all cursor-pointer group/card shadow-md"
                >
                  <div className="h-32 w-full flex items-center justify-center p-2 mb-2 bg-gray-900/50 rounded-xl">
                    <img 
                      src="/produk2.png" 
                      alt="TF Plus Formula" 
                      className="max-h-28 object-contain transform group-hover/card:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <span className="text-[9px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full mb-1">Proteksi Maksimal</span>
                  <h4 className="text-xs font-bold text-white leading-tight">TF Plus® Formula</h4>
                  <p className="text-[10px] text-gray-400 mt-1">Pemulihan + Seng & Cordyvant</p>
                </div>
              </div>

              {/* Floating Molecule Badge */}
              <div className="bg-gray-950/90 border border-gray-800 p-4 rounded-2xl flex items-center gap-3.5 shadow-lg">
                <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center shrink-0 p-1">
                  <img src="/transfer_factor.png" alt="Transfer Factor Molecule" className="w-full h-full object-contain" />
                </div>
                <div className="text-left text-xs">
                  <span className="text-[10px] font-extrabold text-sky-400 uppercase tracking-wider block">Standar Emas Imunologi</span>
                  <span className="font-bold text-white block">Tingkatkan Sel NK hingga +437%</span>
                  <span className="text-[10px] text-gray-400">Terdaftar Resmi di Physicians' Desk Reference (PDR) USA</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ═══ TRUST BADGES ═══ */}
      <section className="space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-widest font-bold text-blue-700">Jaminan Kredibilitas Global</span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Kenapa Anda Bisa Percaya Produk 4Life?
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Bukan sekadar klaim pemasaran biasa. Ini bukti legalitas hukum, sertifikasi mutu, dan pengakuan internasional yang bisa Anda verifikasi langsung.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-5">
          {[
            { code: "BPOM", color: "blue", title: "BPOM RI", desc: "Terdaftar resmi dengan Nomor Izin Edar (NIE) sah dan diawasi ketat oleh otoritas kesehatan Republik Indonesia.", badge: "Izin Edar Resmi Indonesia" },
            { code: "NSF", color: "blue", title: "NSF International", desc: "Diuji secara independen untuk memastikan integritas kemurnian bahan baku, higienitas, dan keakuratan label.", badge: "Standar Manufaktur Global" },
            { code: "Halal", color: "blue", title: "Sertifikasi Halal", desc: "Bebas dari bahan haram dan diproses secara higienis sesuai syariat Islam. Aman untuk keluarga Muslim.", badge: "100% Syariah & Higienis" },
            { code: "BBB", color: "gray", title: "Better Business Bureau", desc: "Akreditasi tertinggi A+ di Amerika Serikat atas kepatuhan etika bisnis, transparansi, dan layanan konsumen.", badge: "Akreditasi Tertinggi A+" },
            { code: "APLI", color: "blue", title: "APLI & WFDSA", desc: "Anggota resmi asosiasi industri penjualan langsung Indonesia dan dunia. Beroperasi legal dan berintegritas.", badge: "Bisnis Legal Terverifikasi" },
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
              <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded uppercase inline-block">Dokumen Legalitas</span>
              <h4 className="text-sm font-bold text-gray-900">Sertifikasi & Kepatuhan Regulasi</h4>
              <p className="text-xs text-gray-500">Bukti sertifikasi BPOM RI, NSF International, dan standar higienitas laboratorium bersertifikat.</p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-blue-300 hover:bg-blue-50/5 transition-all">
            <div className="aspect-[4/3] overflow-hidden bg-gray-50">
              <img src="/paten.png" alt="Paten Ilmiah 4Life Transfer Factor" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-5 space-y-1 text-left">
              <span className="text-[10px] font-bold text-gray-600 bg-gray-100 px-2 py-0.5 rounded uppercase inline-block">Hak Paten Eksklusif</span>
              <h4 className="text-sm font-bold text-gray-900">60+ Paten Ilmiah Dunia</h4>
              <p className="text-xs text-gray-500">Dokumentasi paten penemuan formula dan teknik ekstraksi eksklusif hasil riset 4Life Research USA.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ EDUKASI: TRAINING VS FEEDING ═══ */}
      <section className="grid lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
        <div className="lg:col-span-6 text-left space-y-5">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-100">
            Sains Imunologi Molekuler
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight">
            Vitamin Memberi Makan Sel Imun.<br />
            Transfer Factor <em>Mendidik</em> Mereka.
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Ibarat tentara yang makan kenyang tetapi tidak pernah dilatih strategi perang. Itulah yang terjadi jika tubuh hanya mengandalkan vitamin pasif. Transfer Factor mentransfer "data intelijen" agar pasukan sel imun tahu persis siapa musuhnya dan bagaimana cara melumpuhkannya.
          </p>
          
          <div className="space-y-3 pt-2 text-xs">
            <div className="flex gap-3">
              <Check className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-gray-900 block">Recognize — Mengenali Ancaman Cepat</strong>
                <p className="text-gray-500">Sel imun belajar membedakan sel sehat tubuh dari patogen asing berbahaya secara akurat.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Check className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-gray-900 block">Respond — Bereaksi Tepat & Terukur</strong>
                <p className="text-gray-500">Sel imun langsung bertindak sigap menetralkan ancaman tanpa memicu peradangan berlebih.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Check className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-gray-900 block">Remember — Mengingat Profil Musuh</strong>
                <p className="text-gray-500">Data memori patogen disimpan di sistem imun agar tubuh siap menghadapi ancaman yang sama di kemudian hari.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 bg-gray-900 text-white rounded-2xl p-8 border border-gray-800 space-y-5 text-left">
          <span className="text-[10px] font-bold text-sky-400 uppercase tracking-widest block">Formulasi Paten</span>
          <h4 className="text-lg font-bold text-white">Komposisi Aktif dalam Setiap Kapsul</h4>
          
          <div className="space-y-3 text-xs text-gray-300">
            <div className="bg-gray-800 p-4 rounded-xl border border-gray-700">
              <span className="font-bold text-sky-400 block mb-1">UltraFactor™ + OvoFactor®</span>
              <p className="leading-relaxed">Konsentrat protein ultra-filter murni dari kolostrum sapi pilihan dan kuning telur ayam berpaten — sumber utama peptida memori pertahanan biologis.</p>
            </div>
            
            <div className="bg-gray-800 p-4 rounded-xl border border-gray-700">
              <span className="font-bold text-sky-400 block mb-1">NanoFactor® Extract</span>
              <p className="leading-relaxed">Partikel fraksi berukuran nano yang dapat menembus membran sel untuk menyampaikan instruksi penyeimbangan sistem kekebalan tubuh.</p>
            </div>
          </div>

          <div className="pt-2 border-t border-gray-800 flex items-center justify-between text-xs text-gray-400">
            <span>Standar Ekstraksi Paten USA</span>
            <span className="font-bold text-white">4Life Research, sejak 1998</span>
          </div>
        </div>
      </section>

      {/* ═══ SAINS & RISET KLINIS ═══ */}
      <section id="sains" className="space-y-14 pt-8 border-t border-gray-200 scroll-mt-20 text-left">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase bg-gray-100 text-gray-700 border border-gray-200">
            Kekuatan Riset Medis
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
            Bukan Klaim Kosong. Ini Data Klinis.
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed max-w-xl mx-auto">
            Setiap kapsul Transfer Factor dibuat berdasarkan riset yang dipublikasikan di jurnal ilmiah internasional — memberikan jaminan hasil nyata dan keamanan teruji.
          </p>
        </div>

        {/* 4 Active Molecules */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {[
            { code: "01", name: "UltraFactor™", title: "Kolostrum Sapi Pilihan", desc: "Konsentrat protein ultra-filter dari kolostrum sapi premium untuk melatih kecerdasan sel imun harian." },
            { code: "02", name: "OvoFactor®", title: "Kuning Telur Ayam Paten", desc: "Peptida berpaten dari kuning telur ayam untuk memperkuat pertahanan seluler tubuh secara konsisten." },
            { code: "03", name: "NanoFactor®", title: "Peptida Nano-Filter", desc: "Konsentrasi fraksi berukuran nano untuk penyerapan seluler optimal dan koordinasi respons imun." },
            { code: "04", name: "PhytoFactor™", title: "Transfer Factor Nabati", desc: "Inovasi transfer factor nabati pertama di dunia dari biji Brassica napus untuk memperluas akses imun." },
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
            <h3 className="text-xl font-bold text-gray-900">Imun Biasa vs Imun Terdidik — Apa Bedanya?</h3>
            <p className="text-xs text-gray-500">Perbandingan nyata antara tubuh tanpa dan dengan asupan Transfer Factor.</p>
          </div>
          
          <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="p-4 text-xs font-bold uppercase text-gray-500 tracking-wider">Parameter</th>
                    <th className="p-4 text-xs font-bold uppercase text-gray-500 tracking-wider">Tanpa Transfer Factor</th>
                    <th className="p-4 text-xs font-bold uppercase text-blue-700 tracking-wider bg-blue-50/50">Dengan Dukungan Transfer Factor</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-xs text-gray-600">
                  <tr>
                    <td className="p-4 font-bold text-gray-800">Kecepatan Respons Imun</td>
                    <td className="p-4">Lambat — sel imun kebingungan mengidentifikasi jenis mikroba baru</td>
                    <td className="p-4 bg-blue-50/30 font-medium text-gray-800">Cepat — sel langsung mengenali dan menetralkan patogen</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-gray-800">Efisiensi Energi Fisik</td>
                    <td className="p-4">Boros — tubuh gampang drop karena energi terbuang pada inflamasi salah sasaran</td>
                    <td className="p-4 bg-blue-50/30 font-medium text-gray-800">Efisien — stamina terjaga stabil karena imun bekerja presisi</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold text-gray-800">Ketahanan terhadap Cuaca & Kelelahan</td>
                    <td className="p-4">Rentan — mudah tertular flu saat pancaroba atau sering lembur</td>
                    <td className="p-4 bg-blue-50/30 font-medium text-gray-800">Kuat — sel Natural Killer siaga melindungi tubuh secara konsisten</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 4 Immune Cells */}
        <div className="max-w-6xl mx-auto space-y-4">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-gray-900">4 Sel Pertahanan Utama yang Dididik Transfer Factor</h3>
            <p className="text-xs text-gray-500">Pasukan sel imun tubuh yang ditingkatkan kecerdasan dan efektivitas kerjanya.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { name: "Sel Natural Killer (NK)", role: "Garis Depan Pertahanan", desc: "Mendeteksi dan menghancurkan sel asing berbahaya atau sel terinfeksi virus sebelum berkembang biak." },
              { name: "Makrofag", role: "Pasukan Pembersih Jaringan", desc: "Menelan dan menyingkirkan sisa puing mikroba dan sel mati untuk mempercepat pemulihan tubuh." },
              { name: "Sel T Regulatori", role: "Pengendali Inflamasi", desc: "Menenangkan respons imun agar tidak berlebihan dan tidak merusak organ tubuh sehat sendiri." },
              { name: "Sel B", role: "Pabrik Antibodi Terarah", desc: "Memproduksi protein antibodi imunoglobulin spesifik untuk perisai perlindungan jangka panjang." }
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
                { id: "mendidik", label: "1. MENDIDIK", desc: "Intelijen & 3 Fraksi", icon: Sparkles },
                { id: "meningkatkan", label: "2. MENINGKATKAN", desc: "Aktivitas Sel NK +437%", icon: Activity },
                { id: "menyeimbangkan", label: "3. MENYEIMBANGKAN", desc: "Regulasi & Autoimun", icon: Sliders }
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
                      Sama seperti vaksin yang mendidik sel kekebalan terhadap mikroba tertentu, <strong>Transfer Factor (TF)</strong> membawa basis data informasi memori imun yang luas. TF bukanlah obat kimia, melainkan molekul pembawa pesan biologis yang dibuat secara alami untuk sistem kekebalan tubuh.
                    </p>
                    
                    <div className="space-y-3 bg-gray-50 p-4 rounded-2xl border border-gray-100 text-xs">
                      <span className="font-bold text-gray-700 block uppercase tracking-wide">3 Fraksi Utama Transfer Factor:</span>
                      <div className="grid gap-2">
                        <div className="flex gap-2">
                          <span className="font-mono font-bold text-blue-600">01.</span>
                          <p className="text-gray-600"><strong>Fraksi Antigen-Spesifik (Mendidik):</strong> Mengajarkan sel kekebalan tubuh mengenali ancaman lebih cepat agar tidak salah target.</p>
                        </div>
                        <div className="flex gap-2">
                          <span className="font-mono font-bold text-blue-600">02.</span>
                          <p className="text-gray-600"><strong>Fraksi Inducer (Meningkatkan):</strong> Menginstruksikan sel imun untuk segera siaga dan merespons ancaman.</p>
                        </div>
                        <div className="flex gap-2">
                          <span className="font-mono font-bold text-blue-600">03.</span>
                          <p className="text-gray-600"><strong>Fraksi Suppressor-Regulator (Menyeimbangkan):</strong> Menenangkan sel imun yang terlalu reaktif untuk mencegah peradangan kronis.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-5 space-y-4 bg-gray-950 text-gray-300 p-6 rounded-2xl border border-gray-800 text-xs">
                    <span className="text-[10px] font-bold text-sky-400 uppercase tracking-widest block">Profil Keamanan & Asal Bioaktif</span>
                    <h5 className="font-bold text-white text-sm">Alami & Berbasis Bioaktif Murni</h5>
                    <p className="leading-relaxed">
                      Diekstrak murni dari kolostrum sapi pilihan dan kuning telur ayam melalui proses Filtrasi, Ultra-Filtrasi, dan Nano-Filtrasi bioteknologi yang dilindungi paten global 4Life Research USA.
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
                        <span>Bebas efek samping, aman dikonsumsi harian oleh seluruh keluarga</span>
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
                    <h4 className="text-xl font-bold text-gray-900">Perlindungan Seluler Tingkat Tinggi</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Dalam studi in-vitro terstandar selama 7 tahun (1992-1999) oleh <strong>Institute of Longevity Medicine (California, AS)</strong> yang menguji 196 suplemen kesehatan, <strong>Transfer Factor Plus</strong> menonjol dengan melatih sel pembunuh alami (NK Cells) hingga mencapai peningkatan efisiensi pembunuhan sel target sebesar <strong>437%</strong> dalam uji 48 jam.
                    </p>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Dokumentasi Russian Academy of Medical Sciences (2004) juga membuktikan bahwa dalam 4 jam pertama penggunaan, aktivitas sel pertahanan melonjak <strong>103%</strong> secara klinis dalam merespons ancaman patogen.
                    </p>

                    <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl text-xs text-blue-900 leading-relaxed">
                      <strong>Fakta Biologis:</strong> TF adalah peptida kecil berantai 44 asam amino yang secara biologis bekerja selaras dengan reseptor sel pertahanan manusia, memicu respons imun seluler yang menstimulasi kesiapan sistem imun tubuh.
                    </div>
                  </div>

                  <div className="md:col-span-5 bg-gray-50 border border-gray-200 p-6 rounded-2xl text-xs space-y-4">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Simulator Pembunuhan Sel Target</span>
                    <h5 className="font-bold text-gray-900 text-sm">Visualisasi Efektivitas Sel NK</h5>
                    
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
                    <span className="text-[9px] text-gray-400 italic block text-center">Uji in-vitro aktivitas sel NK terhadap sel target K562.</span>
                  </div>
                </div>
              )}

              {activePillar === "menyeimbangkan" && (
                <div className="grid md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-7 space-y-4">
                    <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      Regulasi & Penyeimbangan
                    </span>
                    <h4 className="text-xl font-bold text-gray-900">Solusi Keseimbangan untuk Autoimun & Alergi</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Sistem imun yang terlalu agresif (hiperaktif) dapat memicu peradangan kronis yang melahirkan gangguan autoimun dan alergi. Sebaliknya, sistem imun yang terlalu lemah (hiporeaktif) membuat tubuh rentan terhadap infeksi kuman dan virus.
                    </p>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Menggunakan diagnostik CD4 Helper T-Cell, peneliti membuktikan bahwa <strong>Transfer Factor Tri-Factor Formula</strong> secara dinamis menenangkan sel T yang overaktif kembali ke tingkat keseimbangan alami.
                    </p>
                    <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl text-xs text-gray-700">
                      <strong>Peran Nano Factors:</strong> Ekstrak berukuran nano ini bertindak sebagai koordinator taktis yang berkolaborasi dalam menenangkan dan menormalkan respons imun agar tidak merusak jaringan tubuh sehat sendiri.
                    </div>
                  </div>

                  <div className="md:col-span-5 bg-white border border-gray-200 p-6 rounded-2xl text-xs space-y-5 text-left shadow-sm">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Interactive Balance Simulator</span>
                    <h5 className="font-bold text-gray-900 text-sm">Geser untuk Mensimulasikan Kondisi Imun:</h5>
                    
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
                          Imun Hiporeaktif (Lemah / Tidur)
                        </span>
                        <p className="text-[11px] text-red-700 leading-relaxed">
                          Sel imun lambat merespons. Bakteri dan virus mudah berkembang biak tanpa perlawanan. Tubuh gampang drop dan sakit berulang.
                        </p>
                        <p className="text-[11px] text-gray-600 italic">
                          <strong>Solusi TF:</strong> Fraksi Inducer dalam TF Plus mendongkrak kesiapan sel pertahanan hingga 437%.
                        </p>
                      </div>
                    )}

                    {immuneBalanceVal >= 35 && immuneBalanceVal <= 70 && (
                      <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl space-y-1.5 transition-all">
                        <span className="font-bold text-blue-800 text-xs flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-blue-500 inline-block" />
                          Imun Seimbang (Terdidik & Waspada)
                        </span>
                        <p className="text-[11px] text-blue-700 leading-relaxed">
                          Kondisi ideal. Sel imun mendeteksi ancaman dengan cepat, memusnahkannya secara terarah tanpa peradangan berlebih, lalu mengingat profil ancaman tersebut.
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
                          Imun Hiperaktif (Alergi / Inflamasi)
                        </span>
                        <p className="text-[11px] text-sky-700 leading-relaxed">
                          Sel imun bereaksi berlebihan terhadap partikel tidak berbahaya (seperti debu/makanan) atau menyerang sel sehat tubuh sendiri, memicu inflamasi kronis.
                        </p>
                        <p className="text-[11px] text-gray-600 italic">
                          <strong>Solusi TF:</strong> Fraksi Suppressor menenangkan sel T pembantu yang terlalu aktif ke titik keseimbangan alami.
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
              <h4 className="text-xl md:text-2xl font-bold tracking-tight">Timeline Pembuktian Medis Internasional</h4>
              <p className="text-xs text-gray-400 max-w-xl">
                Bukan klaim sepihak. Berikut adalah perjalanan pembuktian klinis dan legalitas Transfer Factor yang diakui secara medis di seluruh dunia.
              </p>
            </div>

            {/* Clickable Timeline Steps */}
            <div className="relative z-10">
              <div className="grid grid-cols-4 border-b border-gray-800 pb-3 gap-2">
                {[
                  { year: 1992, title: "1992-1999", label: "Studi Uji California" },
                  { year: 2003, title: "PDR 2003", label: "Buku Rujukan Dokter" },
                  { year: 2004, title: "Rusia 2004", label: "Aman & Non-Toksik" },
                  { year: 3500, title: "3.500+ Riset", label: "Publikasi Medis" }
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
                      Riset komparatif selama tujuh tahun yang membandingkan lebih dari 196 suplemen imunitas alami di dunia. Studi ini membuktikan bahwa Transfer Factor Plus melatih aktivitas pembunuhan sel target hingga 437% lebih kuat dalam uji 48 jam.
                    </p>
                  </div>
                )}

                {timelineYear === 2003 && (
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-sky-400 bg-sky-400/10 px-2 py-0.5 rounded border border-sky-400/20 uppercase inline-block">
                      Buku Rujukan Resmi Medis AS
                    </span>
                    <h5 className="font-bold text-white text-base">Physicians' Desk Reference (PDR) — Masuk Sejak 2003</h5>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      Transfer Factor telah terdaftar resmi secara berkelanjutan dalam PDR (buku rujukan standar para dokter di Amerika Serikat untuk meresepkan suplemen dan terapi kesehatan) sejak tahun 2003. Hal ini membuktikan kredibilitas kualitas bahan dan efikasi yang terukur.
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
                      Kementerian Kesehatan Federasi Rusia menerbitkan panduan metodologi klinis resmi setelah uji tanding yang dilakukan oleh Akademi Ilmu Kedokteran Rusia. Hasilnya membuktikan efikasi Transfer Factor sebagai modulasi imunologi unggulan yang bebas racun dibandingkan obat-obatan sintetis biasa.
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
              <span className="italic">Catatan Medis: Transfer Factor bekerja langsung melatih kecerdasan tentara imun tubuh, menjaga daya tahan tubuh alami.</span>
              <button 
                onClick={() => onOpenConsultation("Halo, saya ingin berkonsultasi tentang bukti klinis PDR dan kegunaan ilmiah Transfer Factor.")}
                className="inline-flex items-center gap-1.5 text-sky-400 hover:text-sky-300 font-bold bg-transparent border-0 cursor-pointer"
              >
                Konsultasi Ilmiah <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Penghargaan Gallery */}
        <div className="max-w-6xl mx-auto space-y-4">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-gray-900">Penghargaan Industri Internasional</h3>
            <p className="text-xs text-gray-500">Pengakuan dunia terhadap keunggulan formula dan integritas riset 4Life.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-blue-300 hover:bg-blue-50/5 transition-all">
              <div className="aspect-[16/10] overflow-hidden bg-gray-50">
                <img src="/penghargaan.png" alt="Penghargaan Internasional 4Life" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5 space-y-1 text-left">
                <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded uppercase inline-block">Penghargaan Global</span>
                <h4 className="text-sm font-bold text-gray-900">Pengakuan Industri Nutrasetika Dunia</h4>
                <p className="text-xs text-gray-500">Penghargaan dari lembaga independen global atas konsistensi inovasi formula imunologi.</p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-blue-300 hover:bg-blue-50/5 transition-all">
              <div className="aspect-[16/10] overflow-hidden bg-gray-50">
                <img src="/penghargaan2.png" alt="Global 100 Awards 4Life" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5 space-y-1 text-left">
                <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded uppercase inline-block">Global 100 Awards</span>
                <h4 className="text-sm font-bold text-gray-900">Perusahaan Nutrasetika Terbaik</h4>
                <p className="text-xs text-gray-500">Penghargaan bergengsi atas komitmen riset sistem kekebalan tubuh mutakhir.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Health Practitioner Consultation Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 items-center">
              <div className="aspect-[4/3] md:aspect-auto md:h-full overflow-hidden bg-gray-50">
                <img src="/midwife_consultation.png" alt="Konsultasi Praktisi Kesehatan tentang Transfer Factor" className="w-full h-full object-cover" />
              </div>
              <div className="p-8 space-y-3 text-left">
                <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded uppercase inline-block">Edukasi Kesehatan</span>
                <h4 className="text-lg font-bold text-gray-900 leading-snug">Dipercaya oleh Praktisi Kesehatan</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Transfer Factor menjadi rekomendasi para profesional kesehatan dan nutrisionis di seluruh dunia sebagai suplemen pendukung sistem imun yang aman, terstandarisasi, dan berbasis riset ilmiah teruji.
                </p>
                <div className="flex flex-wrap gap-1.5 text-[10px]">
                  <span className="font-bold text-gray-600 bg-gray-100 rounded px-2 py-1">Riset Klinis Medis</span>
                  <span className="font-bold text-gray-600 bg-gray-100 rounded px-2 py-1">Aman untuk Seluruh Keluarga</span>
                  <span className="font-bold text-gray-600 bg-gray-100 rounded px-2 py-1">Berbasis Bukti Ilmiah</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ KALKULATOR KEBUTUHAN IMUN ═══ */}
      <section className="bg-gray-50 border border-gray-200 rounded-2xl p-8 md:p-10 max-w-5xl mx-auto space-y-8">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <span className="text-xs font-semibold tracking-wider text-blue-700 uppercase">Asesmen Kebutuhan Imun</span>
          <h2 className="text-2xl font-bold text-gray-900">Produk Mana yang Paling Tepat untuk Anda?</h2>
          <p className="text-xs text-gray-500">
            Jawab 3 pertanyaan singkat ini untuk menemukan rekomendasi formula Transfer Factor yang paling pas untuk kondisi fisik Anda.
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
                  Tinggi / Sangat Padat
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-2">Bagaimana kualitas istirahat & tidur Anda?</label>
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
                  Kurang / Sering Lembur
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

          <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 flex flex-col justify-between h-full text-left shadow-xs">
            <div className="space-y-4">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Rekomendasi Formula untuk Anda:</span>
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
                className="flex-1 py-3 text-xs font-bold text-white bg-gray-900 hover:bg-gray-800 rounded-xl text-center transition-colors shadow-xs"
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
          <span className="text-xs uppercase tracking-widest font-bold text-gray-500">Pilihan Produk Utama</span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Pilih Formula Sesuai Kebutuhan Anda</h2>
          <p className="text-sm text-gray-500">Dua varian utama yang melindungi daya tahan tubuh dengan fokus berbeda.</p>
        </div>

        <div className="max-w-4xl mx-auto flex items-center gap-3 bg-blue-50 border border-blue-200 rounded-2xl px-5 py-4">
          <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0" />
          <p className="text-xs text-blue-900 font-medium text-left leading-relaxed">
            <strong>Penting:</strong> Pastikan Anda membeli hanya melalui <a href="https://indonesia.4life.com/12941871/shop" target="_blank" rel="noopener noreferrer" className="underline font-bold text-blue-700 hover:text-blue-900">Toko Online Resmi 4Life Indonesia</a> untuk menjamin keaslian dan kesegaran produk.
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
              Saya Ridwan, membangun portal ini agar masyarakat Indonesia bisa mengakses informasi ilmiah tentang sistem kekebalan tubuh dan suplemen berbasis riset internasional — tanpa harus bingung dengan klaim-klaim yang tidak berdasar.
            </p>
            <p className="text-xs text-gray-400 leading-relaxed bg-gray-800 p-4 rounded-xl border border-gray-700">
              Portal ini menyajikan data dari jurnal ilmiah kedokteran, sertifikasi resmi, dan dokumen paten yang bisa Anda verifikasi sendiri. Semua informasi disusun untuk membantu Anda dan keluarga membuat keputusan kesehatan yang bijak dan tepat.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

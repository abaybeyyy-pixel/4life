import React, { useState } from "react";
import { testimonials } from "../data";
import { Star, Quote, Search } from "lucide-react";

export default function TestimonialsSection() {
  const [activeTab, setActiveTab] = useState<"Semua" | "Konsumen" | "Mitra">("Semua");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredTestimonials = testimonials.filter((t) => {
    let matchesTab = false;
    if (activeTab === "Semua") {
      matchesTab = true;
    } else if (activeTab === "Konsumen") {
      matchesTab = t.role !== "Mitra Resmi" && t.role !== "Praktisi Kesehatan";
    } else if (activeTab === "Mitra") {
      matchesTab = t.role === "Mitra Resmi" || t.role === "Praktisi Kesehatan";
    }

    const matchesSearch =
      t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.text.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const displayedTestimonials = filteredTestimonials.slice(0, visibleCount);

  return (
    <section className="pt-8 border-t border-gray-200 space-y-8">
      <div className="text-center max-w-3xl mx-auto space-y-2 px-4">
        <span className="text-xs uppercase tracking-widest font-bold text-gray-500">
          Pengalaman Nyata
        </span>
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
          Apa Kata Mereka yang Sudah Mencoba?
        </h2>
        <p className="text-sm text-gray-500 leading-relaxed">
          Pengalaman nyata dari konsumen dan praktisi kesehatan yang merasakan manfaat Transfer Factor.
        </p>
      </div>

      {/* Filter and Search Controls */}
      <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex bg-gray-100 p-1 rounded-xl w-full md:w-auto">
          {(["Semua", "Konsumen", "Mitra"] as const).map((role) => (
            <button
              key={role}
              onClick={() => {
                setActiveTab(role);
                setVisibleCount(6);
              }}
              className={`flex-1 md:flex-none px-5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === role
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              {role === "Semua" ? "Semua" : role === "Konsumen" ? "Konsumen & Keluarga" : "Praktisi & Mitra"}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-72">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Cari keluhan, daerah, nama..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setVisibleCount(6);
            }}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl text-xs bg-white focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 placeholder-gray-400 text-gray-800"
          />
        </div>
      </div>

      {/* Grid of Testimonials */}
      <div className="max-w-7xl mx-auto px-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {displayedTestimonials.map((t) => (
          <div
            key={t.id}
            className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-gray-300 transition-colors flex flex-col justify-between relative group"
          >
            <Quote className="absolute right-6 top-6 w-8 h-8 text-gray-100 group-hover:scale-110 transition-transform duration-300" />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-[10px] font-bold text-gray-600 bg-gray-100 px-2 py-0.5 rounded">
                  {t.tag}
                </span>
              </div>

              <p className="text-xs text-gray-600 leading-relaxed italic">
                "{t.text}"
              </p>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-gray-100 mt-4">
              <span className="text-[11px] font-bold w-10 h-10 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center border border-gray-200 uppercase tracking-wider shrink-0">
                {t.name.split(',')[0].replace('Dr. ', '').split(' ').filter(Boolean).map(n => n[0]).join('').slice(0, 2)}
              </span>
              <div>
                <h4 className="text-xs font-bold text-gray-900 leading-tight">
                  {t.name}
                </h4>
                <p className="text-[10px] text-gray-400 mt-0.5">
                  {t.role} • {t.location}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredTestimonials.length === 0 && (
        <div className="text-center py-12">
          <p className="text-sm text-gray-400">Tidak ada testimoni yang cocok dengan pencarian Anda.</p>
        </div>
      )}

      {filteredTestimonials.length > visibleCount && (
        <div className="text-center pt-4">
          <button
            onClick={() => setVisibleCount((prev) => prev + 6)}
            className="px-6 py-2.5 bg-gray-900 hover:bg-gray-800 text-white text-xs font-bold rounded-xl transition-colors"
          >
            Tampilkan Lebih Banyak ({filteredTestimonials.length - visibleCount} lagi)
          </button>
        </div>
      )}
    </section>
  );
}

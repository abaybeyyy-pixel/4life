import React from "react";
import { Product } from "../types";
import { X, CheckCircle2, ShoppingBag, ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onOpenConsultation: (message: string) => void;
}

export default function ProductDetailModal({ product, onClose, onOpenConsultation }: ProductDetailModalProps) {
  if (!product) return null;

  const productImage = product.id === "tf-tri-factor" ? "/produk.png" : "/produk2.png";
  const formatRupiah = (val: number) => new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(val);
  const savings = product.priceRetail - product.priceMember;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-end sm:items-center justify-center min-h-screen pt-4 px-2 sm:px-4 pb-0 sm:pb-20 text-center">
        
        <div 
          onClick={onClose}
          className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity" 
          aria-hidden="true"
        ></div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div className="relative inline-block align-bottom sm:align-middle bg-white rounded-t-3xl sm:rounded-3xl text-left overflow-hidden shadow-2xl transform transition-all w-full sm:max-w-2xl sm:my-8 border border-gray-200">
          
          {/* Header */}
          <div className="bg-gray-950 text-white p-4 sm:p-6 relative overflow-hidden">
            <div className="flex justify-between items-start gap-4">
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-wider bg-blue-500/20 text-blue-400 border border-blue-500/30 px-2.5 py-0.5 rounded-full inline-block">
                  Resmi BPOM · 4Life Research
                </span>
                <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold tracking-tight" id="modal-title">
                  {product.fullName}
                </h3>
                <p className="text-xs text-gray-300 italic">"{product.tagline}"</p>
              </div>
              <button 
                onClick={onClose}
                className="text-gray-400 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="p-4 sm:p-6 space-y-5 sm:space-y-6 max-h-[72vh] sm:max-h-[68vh] overflow-y-auto">
            
            {/* Top Product Showcase & Pricing Banner */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 bg-gray-50 border border-gray-200 p-4 sm:p-5 rounded-2xl">
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-xl border border-gray-200 p-2 flex items-center justify-center shrink-0 shadow-xs">
                <img src={productImage} alt={product.name} className="w-full h-full object-contain" />
              </div>
              
              <div className="space-y-2 flex-1 text-center sm:text-left">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <span className="text-xs line-through text-gray-400">{formatRupiah(product.priceRetail)}</span>
                  <span className="text-lg sm:text-xl font-extrabold text-blue-600">{formatRupiah(product.priceMember)}</span>
                  <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                    Hemat {formatRupiah(savings)}
                  </span>
                </div>
                <div className="flex items-center justify-center sm:justify-start gap-2 text-[11px] sm:text-xs text-gray-600">
                  <span className="font-semibold">Poin Resmi: <strong>{product.points} LP</strong></span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1 text-blue-700 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5" /> Garansi Asli 100%
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-gray-500 leading-relaxed pt-1">
                  Harga khusus pembelian langsung melalui Apotek Digital / Toko Resmi 4Life Indonesia.
                </p>
              </div>
            </div>

            {/* Core Ingredients */}
            <div className="space-y-2">
              <h4 className="text-xs uppercase font-bold tracking-wider text-gray-500">Bahan Baku Aktif Teruji:</h4>
              <div className="grid gap-2">
                {product.coreIngredients.map((ing, idx) => (
                  <div key={idx} className="flex gap-2.5 items-start text-xs bg-gray-50 border border-gray-200 p-2.5 sm:p-3 rounded-xl text-gray-700">
                    <span className="text-blue-600 font-bold font-mono">{(idx+1).toString().padStart(2, '0')}.</span>
                    <span className="text-[11px] sm:text-xs">{ing}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Clinical & Safety */}
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-1 bg-blue-50/50 p-3.5 sm:p-4 rounded-xl border border-blue-100">
                <span className="text-[10px] font-bold text-blue-800 uppercase tracking-wide">Aksi Klinis:</span>
                <p className="text-[11px] sm:text-xs text-gray-700 leading-relaxed">
                  {product.clinicalAction}
                </p>
              </div>
              <div className="space-y-1 bg-emerald-50/50 p-3.5 sm:p-4 rounded-xl border border-emerald-100">
                <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wide">Profil Keamanan:</span>
                <p className="text-[11px] sm:text-xs text-gray-700 leading-relaxed">
                  {product.securityProfile}
                </p>
              </div>
            </div>

            {/* Benefits */}
            <div className="space-y-2 pt-2 border-t border-gray-200">
              <h4 className="text-xs uppercase font-bold tracking-wider text-gray-500">Manfaat Utama bagi Tubuh:</h4>
              <div className="grid sm:grid-cols-2 gap-2 sm:gap-2.5">
                {product.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex gap-2 items-start bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-[11px] sm:text-xs text-gray-700 leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommendations */}
            <div className="space-y-2 pt-2 border-t border-gray-200">
              <h4 className="text-xs uppercase font-bold tracking-wider text-gray-500">Direkomendasikan Untuk:</h4>
              <div className="flex flex-wrap gap-1.5">
                {product.recommendedFor.map((rec, idx) => (
                  <span key={idx} className="text-[10px] font-semibold bg-gray-100 text-gray-800 px-2.5 py-1 rounded-full border border-gray-200">
                    {rec}
                  </span>
                ))}
              </div>
            </div>

            {/* Dosage */}
            <div className="bg-blue-50 border border-blue-200 p-3.5 sm:p-4 rounded-xl flex items-start gap-3">
              <div className="text-xs">
                <span className="font-bold text-blue-900 block mb-0.5 text-xs sm:text-sm">Aturan Konsumsi yang Dianjurkan:</span>
                <span className="text-blue-800 leading-relaxed text-[11px] sm:text-xs">{product.practicalDosage}</span>
              </div>
            </div>

          </div>

          {/* Footer CTA */}
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:py-4 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenConsultation(`Halo Admin, saya ingin konsultasi dosis dan cara konsumsi untuk produk ${product.name}.`);
              }}
              className="w-full sm:w-auto px-4 py-2.5 text-xs font-bold text-gray-700 hover:text-gray-900 hover:bg-gray-100 border border-gray-200 rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-blue-600" /> Tanya Dosis ke Admin
            </button>

            <a
              href="https://indonesia.4life.com/12941871/shop"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="w-full sm:w-auto px-6 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-xs"
            >
              <ShoppingBag className="w-4 h-4" /> Beli Resmi di 4Life Shop <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}


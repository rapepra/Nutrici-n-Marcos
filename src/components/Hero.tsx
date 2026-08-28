import React from 'react';
import { Calendar, Download, MapPin, CheckCircle2, Instagram, ArrowDown } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

const INSTAGRAM_URL = "https://www.instagram.com/marcostsd.rehab?igsi=ZmZjZXYzdndrbnhl";

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden emerald-gradient-glow">
      {/* Background Subtle Grid Element */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* Hero Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Local Badge & Instagram Link */}
            <div className="flex justify-center lg:justify-start">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 hover:bg-pink-50 border border-emerald-200 hover:border-pink-300 text-emerald-800 hover:text-pink-700 text-xs sm:text-sm font-semibold shadow-sm transition-colors"
              >
                <span className="flex h-2 w-2 rounded-full bg-emerald-600 animate-ping" />
                <Instagram className="w-4 h-4 text-pink-600" />
                <span>@marcostsd.rehab · Nutricionista & Recuperación en Madrid</span>
              </a>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Transforma tu físico y tu energía <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-700 bg-clip-text text-transparent">
                sin dietas extremas ni efecto rebote
              </span>
            </h1>

            <h2 className="text-base sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Programa clínico y deportivo personalizado en <strong className="font-semibold text-slate-900">Madrid</strong>. 
              Optimizamos tu composición corporal, salud digestiva y recuperación muscular con ciencia y adherencia real.
            </h2>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto btn-cta bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base sm:text-lg px-8 py-4 rounded-xl flex items-center justify-center gap-3 shadow-emerald-glow group cursor-pointer"
              >
                <Calendar className="w-5 h-5 transition-transform group-hover:scale-110" />
                <span>Agenda tu Sesión de Valoración Gratuita</span>
              </button>

              <a
                href="#guia-gratuita"
                className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-800 font-semibold text-base px-6 py-4 rounded-xl border border-slate-300 flex items-center justify-center gap-2 shadow-sm transition-all duration-200 hover:border-slate-400"
              >
                <Download className="w-5 h-5 text-emerald-600" />
                <span>Descarga Guía PDF Gratuita</span>
              </a>
            </div>

            {/* Trust Signals */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-500 font-medium">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Sin permanencia</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Bioimpedancia médica Madrid</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> TSD & Recuperación</span>
            </div>

          </div>

          {/* Hero Right Column: Authentic Professional Portrait Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group max-w-md mx-auto">
              
              <img 
                src="assets/images/marcos-nutricionista.png" 
                alt="Marcos Nutricionista Clínico y Deportivo en Madrid - Tu nutrición, tu cambio" 
                className="w-full h-[480px] sm:h-[540px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />

              {/* Floating Live Credibility Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md text-white p-4 rounded-2xl border border-slate-700/80 flex items-center justify-between shadow-xl">
                <div>
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">Tu nutrición, tu cambio</span>
                  <span className="text-sm font-extrabold text-white">Marcos (TSD)</span>
                  <span className="text-[11px] text-slate-300 block">Nutricionista & Recuperación Madrid</span>
                </div>

                <a href="#sobre-marcos" className="w-10 h-10 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center transition-colors shadow-md">
                  <ArrowDown className="w-5 h-5" />
                </a>
              </div>

              {/* Rating Badge top right */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg border border-slate-200 flex items-center gap-1.5 text-xs font-bold text-slate-900">
                <span className="text-amber-400">★</span> 4.9/5.0 Reseñas Madrid
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

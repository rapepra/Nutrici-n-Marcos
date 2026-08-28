import React from 'react';
import { Calendar, Download, ShieldCheck, MapPin, Sparkles, Star, TrendingUp, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden emerald-gradient-glow">
      {/* Background Subtle Grid Element */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Local Geo & Trust Pill Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs sm:text-sm font-semibold shadow-sm animate-pulse-subtle">
            <span className="flex h-2 w-2 rounded-full bg-emerald-600 animate-ping" />
            <MapPin className="w-4 h-4 text-emerald-600" />
            <span>Nutricionista en Madrid · Barrio de Salamanca (Consulta Presencial & Online)</span>
          </div>
        </div>

        {/* H1 Headline Centered on Primary Benefit */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Transforma tu físico y tu energía <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-700 bg-clip-text text-transparent">
              sin dietas extremas ni efecto rebote
            </span>
          </h1>

          {/* H2 Subtitle with Local GEO Positioning */}
          <h2 className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            Programa clínico y deportivo personalizado en <strong className="font-semibold text-slate-900">Madrid</strong>. 
            Optimizamos tu composición corporal, salud digestiva y niveles de energía con ciencia y adherencia real.
          </h2>

          {/* Call to Actions (CTAs) */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            {/* Primary CTA */}
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto btn-cta bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base sm:text-lg px-8 py-4 rounded-xl flex items-center justify-center gap-3 shadow-emerald-glow group cursor-pointer"
            >
              <Calendar className="w-5 h-5 transition-transform group-hover:scale-110" />
              <span>Agenda tu Sesión de Valoración Gratuita</span>
            </button>

            {/* Secondary CTA */}
            <a
              href="#guia-gratuita"
              className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-800 font-semibold text-base px-6 py-4 rounded-xl border border-slate-300 flex items-center justify-center gap-2 shadow-sm transition-all duration-200 hover:border-slate-400"
            >
              <Download className="w-5 h-5 text-emerald-600" />
              <span>Descarga Guía PDF Gratuita</span>
            </a>
          </div>

          {/* Trust Guarantees */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-500 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Sin compromiso de permanencia
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Bioimpedancia clínica en Madrid
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Colegiado N.º MAD-0842
            </span>
          </div>
        </div>

        {/* Visual Showcase Card - Recomposición Dashboard */}
        <div className="mt-12 sm:mt-16 max-w-4xl mx-auto">
          <div className="relative rounded-2xl sm:rounded-3xl p-4 sm:p-8 bg-white border border-slate-200/80 shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-50 rounded-full blur-3xl -z-10" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              
              {/* Stat 1 */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xl">
                  -8kg
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Grasa Corporal</div>
                  <div className="text-base sm:text-lg font-bold text-slate-900">Sin perder músculo</div>
                  <div className="text-xs text-emerald-600 font-medium flex items-center gap-1 mt-0.5">
                    <TrendingUp className="w-3.5 h-3.5" /> Media en 90 Días
                  </div>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-xl">
                  100%
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Plan Flexible</div>
                  <div className="text-base sm:text-lg font-bold text-slate-900">Adaptado a tu vida</div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">Comida real de Madrid</div>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-xl">
                  ⚡
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Energía & Digestión</div>
                  <div className="text-base sm:text-lg font-bold text-slate-900">Cero hinchazón</div>
                  <div className="text-xs text-teal-600 font-medium mt-0.5">Salud digestiva óptima</div>
                </div>
              </div>

            </div>

            {/* Live Madrid Patient Rating Banner */}
            <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2 overflow-hidden">
                  <img className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80" alt="Paciente Madrid" />
                  <img className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80" alt="Paciente Madrid" />
                  <img className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80" alt="Paciente Madrid" />
                  <img className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80" alt="Paciente Madrid" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-sm font-bold text-slate-900 ml-1">4.9/5.0</span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium">Basado en +350 reseñas verificadas en Google Madrid</p>
                </div>
              </div>

              <div className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-100">
                🔥 Plazas limitadas presenciales este mes en Salamanca, Madrid
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

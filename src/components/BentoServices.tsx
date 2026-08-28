import React from 'react';
import { Flame, Activity, Stethoscope, Zap, CheckCircle2, ArrowRight, Shield, Award, Sparkles } from 'lucide-react';
import type { ServiceProgram } from '../types';

interface BentoServicesProps {
  onSelectProgram: (programTitle: string) => void;
}

export const BentoServices: React.FC<BentoServicesProps> = ({ onSelectProgram }) => {
  return (
    <section id="programas" className="py-16 sm:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Programas Clínicos & Deportivos
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mt-3">
            Planes diseñados para objetivos concretos
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Programas cerrados de alto valor con máxima atención individualizada en Madrid (Presencial & Online).
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* CARD 1: Program Highlight - Recomposición 90 Días (Spans 2 columns on medium screens) */}
          <div className="md:col-span-2 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white rounded-3xl p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between shadow-2xl border border-slate-700/60 group">
            
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl group-hover:bg-emerald-500/30 transition-all duration-500" />
            
            <div>
              {/* Badge & Pill */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-emerald-glow">
                  <Sparkles className="w-3.5 h-3.5" /> PROGRAMA ESTRELLA MÁS DEMANDADO
                </span>
                <span className="bg-slate-700/70 text-slate-200 text-xs font-medium px-3 py-1 rounded-full">
                  90 Días Intensivos
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Recomposición Integral 90 Días
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-xl">
                Quema grasa rebelde y gana masa muscular simultáneamente sin pasarte el día midiendo calorías. Medición de bioimpedancia clínica mensual en Madrid.
              </p>

              {/* Inclusions List */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Estudio antropométrico e ISAK en consulta</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Pauta nutricional antiinflamatoria personalizada</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Acompañamiento por WhatsApp directo</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Acceso a App móvil para recetas y registros</span>
                </div>
              </div>
            </div>

            {/* Bottom Action Area */}
            <div className="mt-8 pt-6 border-t border-slate-700/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Formato Madrid</div>
                <div className="text-sm font-semibold text-emerald-400">Presencial en Calle Serrano / Online</div>
              </div>

              <button
                onClick={() => onSelectProgram('Recomposición Integral 90 Días')}
                className="w-full sm:w-auto btn-cta bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-emerald-glow group cursor-pointer"
              >
                <span>Solicitar Plaza 90 Días</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

          </div>

          {/* CARD 2: Nutrición Deportiva & Alto Rendimiento */}
          <div className="bg-[#FAFAFA] rounded-3xl p-6 sm:p-7 border border-slate-200 flex flex-col justify-between hover:border-emerald-500/50 hover:shadow-xl transition-all duration-300 group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4 font-bold">
                <Flame className="w-6 h-6" />
              </div>

              <span className="text-[11px] font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                Atletas & Opositores Madrid
              </span>

              <h3 className="text-xl font-bold text-slate-900 mt-3 group-hover:text-emerald-700 transition-colors">
                Alto Rendimiento Deportivo
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Periodización nutricional según fases de carga, entrenamientos de fuerza, oposiciones o competición.
              </p>

              <ul className="mt-4 space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Suplementación basada en evidencia A-AIS
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Protocolos de recarga de glucógeno
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Optimización de potencia y masa muscular
                </li>
              </ul>
            </div>

            <button
              onClick={() => onSelectProgram('Alto Rendimiento Deportivo')}
              className="mt-6 w-full bg-white hover:bg-slate-50 text-slate-900 font-semibold text-xs py-3 px-4 rounded-xl border border-slate-300 flex items-center justify-center gap-2 hover:border-emerald-500 transition-all"
            >
              <span>Consultar Disponibilidad</span>
              <ArrowRight className="w-3.5 h-3.5 text-emerald-600" />
            </button>
          </div>

          {/* CARD 3: Salud Digestiva, Hormonal y SIBO */}
          <div className="bg-[#FAFAFA] rounded-3xl p-6 sm:p-7 border border-slate-200 flex flex-col justify-between hover:border-emerald-500/50 hover:shadow-xl transition-all duration-300 group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center mb-4 font-bold">
                <Stethoscope className="w-6 h-6" />
              </div>

              <span className="text-[11px] font-bold text-teal-800 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200">
                Clínica & Digestivo
              </span>

              <h3 className="text-xl font-bold text-slate-900 mt-3 group-hover:text-emerald-700 transition-colors">
                Salud Digestiva & SIBO
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Tratamiento nutricional especializado para SIBO, colon irritable, gastritis, microbioma e inflamación intestinal.
              </p>

              <ul className="mt-4 space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Dieta FODMAP por fases y reintroducción
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Interpretación de test de aliento
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Recuperación de la barrera intestinal
                </li>
              </ul>
            </div>

            <button
              onClick={() => onSelectProgram('Salud Digestiva & SIBO')}
              className="mt-6 w-full bg-white hover:bg-slate-50 text-slate-900 font-semibold text-xs py-3 px-4 rounded-xl border border-slate-300 flex items-center justify-center gap-2 hover:border-emerald-500 transition-all"
            >
              <span>Consultar Disponibilidad</span>
              <ArrowRight className="w-3.5 h-3.5 text-emerald-600" />
            </button>
          </div>

          {/* CARD 4: Plan Clínico & Patologías Metabólicas (Spans 2 columns on medium screens) */}
          <div className="md:col-span-2 bg-[#FAFAFA] rounded-3xl p-6 sm:p-7 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:border-emerald-500/50 hover:shadow-xl transition-all duration-300">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">
                  <Zap className="w-4 h-4" />
                </span>
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Salud Metabólica & Analíticas
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900">
                Optimización Metabólica (Resistencia a la Insulina, Colesterol, Tiroides)
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Revierte parámetros alterados en tus análisis de sangre con pautas científicas de alimentación clínica y hábitos de vida en Madrid.
              </p>
            </div>

            <button
              onClick={() => onSelectProgram('Optimización Metabólica')}
              className="w-full sm:w-auto btn-cta bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-emerald-glow flex-shrink-0 cursor-pointer"
            >
              <span>Agendar Valoración Clínica</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

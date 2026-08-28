import React from 'react';
import { Activity, Apple, ShieldCheck, Repeat, ChevronRight } from 'lucide-react';

export const Methodology: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Diagnóstico 360° & Bioimpedancia',
      subtitle: 'Consulta en Madrid / Análisis Clínico',
      description: 'Medimos tu porcentaje exacto de grasa corporal, masa muscular e hidratación tisular mediante bioimpedancia médica en consulta presencial (o valoración fotométrica online). Analizamos tus hábitos y analíticas sanguíneas.',
      icon: Activity,
    },
    {
      step: '02',
      title: 'Estrategia Antiinflamatoria & Flexible',
      subtitle: 'Diseño 100% Adaptado a ti',
      description: 'Sin menús cerrados ni pesares gramos de lechuga. Calculamos tu gasto energético real y diseñamos una pauta adaptada a la oferta gastronómica y estilo de vida de Madrid, respetando tu vida social.',
      icon: Apple,
    },
    {
      step: '03',
      title: 'Revisión Semanal & Ajuste Dinámico',
      subtitle: 'Acompañamiento Continuo',
      description: 'Tu cuerpo cambia semana a semana. Ajustamos macronutrientes, suplementación basada en evidencia y estrategias peri-entreno para evitar estancamientos y acelerar la recomposición.',
      icon: Repeat,
    },
    {
      step: '04',
      title: 'Consolidación & Autonomía',
      subtitle: 'Garantía Cero Efecto Rebote',
      description: 'Te enseñamos a gestionar tus comidas en restaurantes, viajes y eventos sin culpa ni retrocesos. El objetivo final es que no dependas de un nutricionista nunca más.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="metodo" className="py-16 sm:py-24 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            Ciencia Aplicada
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            El Método Marcos: 4 Pasos para una Transformación Definitiva
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Un enfoque clínico rigoroso que elimina las adivinanzas y garantiza resultados medibles semana tras semana en Madrid.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between group relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-extrabold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
                      PASO {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-50 group-hover:bg-emerald-600 text-slate-700 group-hover:text-white flex items-center justify-center transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-emerald-700 font-semibold mt-0.5 mb-3">
                    {item.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-slate-300">
                    <ChevronRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

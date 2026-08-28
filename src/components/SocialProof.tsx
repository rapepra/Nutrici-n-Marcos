import React from 'react';
import { Star, Quote, CheckCircle2, Award, Users, Trophy } from 'lucide-react';
import type { Testimonial } from '../types';

const testimonialsData: Testimonial[] = [
  {
    id: '1',
    name: 'Carlos Ruiz',
    role: 'Ejecutivo en Financiero',
    location: 'Madrid (Barrio de Salamanca)',
    result: '-11kg grasa / +3kg masa muscular',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    text: 'Había probado mil dietas de 1200 kcal pasando un hambre insoportable. Con Marcos aprendí a comer de acuerdo a mis horarios de trabajo en Madrid. La bioimpedancia en consulta me motivó muchísimo.'
  },
  {
    id: '2',
    name: 'Elena Gómez',
    role: 'Abogada & Atleta de CrossFit',
    location: 'Madrid (Chamberí)',
    result: 'Cero hinchazón & Récord en PRs',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    text: 'Llegué con SIBO y problemas digestivos severos que arruinaban mis entrenamientos. Tras el protocolo de nutrición antiinflamatoria en 8 semanas, mi energía dio un cambio radical.'
  },
  {
    id: '3',
    name: 'Javier Fernández',
    role: 'Opositor a Policía Nacional',
    location: 'Madrid (Retiro)',
    result: 'Optimización de marcas + Adherencia 100%',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    text: 'Necesitaba rendir al máximo en las pruebas físicas de la oposición sin perder peso muscular. La estrategia nutricional peri-entreno que me diseñó en Madrid fue la clave para aprobar.'
  }
];

export const SocialProof: React.FC = () => {
  return (
    <section id="testimonios" className="py-16 sm:py-24 bg-white border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Horizontal Community Proof Bar */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl mb-16 relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-700/60">
            
            <div className="pt-2 md:pt-0">
              <div className="flex items-center justify-center gap-2 text-emerald-400 font-extrabold text-3xl sm:text-4xl">
                <Users className="w-7 h-7" />
                <span>+10.000</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                Comunidad activa en Madrid & España
              </p>
            </div>

            <div className="pt-4 md:pt-0">
              <div className="flex items-center justify-center gap-2 text-emerald-400 font-extrabold text-3xl sm:text-4xl">
                <Trophy className="w-7 h-7" />
                <span>+1.200</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                Pacientes transformados con éxito
              </p>
            </div>

            <div className="pt-4 md:pt-0">
              <div className="flex items-center justify-center gap-2 text-emerald-400 font-extrabold text-3xl sm:text-4xl">
                <Award className="w-7 h-7" />
                <span>98.4%</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                Tasa de sostenibilidad a 12 meses
              </p>
            </div>

            <div className="pt-4 md:pt-0">
              <div className="flex items-center justify-center gap-2 text-amber-400 font-extrabold text-3xl sm:text-4xl">
                <Star className="w-7 h-7 fill-amber-400" />
                <span>4.9/5</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                Valoración media en Google Madrid
              </p>
            </div>

          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-xs font-extrabold text-emerald-600 tracking-widest uppercase mb-3">
            Resultados Reales en Madrid
          </h2>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Casos de éxito de pacientes que ya transformaron su estilo de vida
          </h3>
          <p className="mt-3 text-base text-slate-600">
            Sin alimentos prohibidos, con bioimpedancia clínica y seguimiento continuo.
          </p>
        </div>

        {/* Grid of 3 Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonialsData.map((t) => (
            <div
              key={t.id}
              className="bg-[#FAFAFA] rounded-2xl p-6 sm:p-7 border border-slate-200/80 flex flex-col justify-between hover:border-emerald-500/40 hover:shadow-lg transition-all duration-300 group"
            >
              <div>
                {/* Header info */}
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-emerald-500/30"
                  />
                  <div>
                    <h4 className="font-bold text-slate-900 text-base group-hover:text-emerald-700 transition-colors">
                      {t.name}
                    </h4>
                    <p className="text-xs text-slate-500 font-medium">{t.role}</p>
                    <p className="text-[11px] text-slate-400">{t.location}</p>
                  </div>
                </div>

                {/* Rating stars */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote body */}
                <p className="text-sm text-slate-700 leading-relaxed italic relative">
                  <Quote className="w-6 h-6 text-slate-200 absolute -top-2 -left-2 -z-10" />
                  "{t.text}"
                </p>
              </div>

              {/* Patient Result Pill Badge */}
              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-100/80 px-3 py-1.5 rounded-lg">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  {t.result}
                </span>
                <span className="text-[11px] text-emerald-700 font-semibold">Verificado</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

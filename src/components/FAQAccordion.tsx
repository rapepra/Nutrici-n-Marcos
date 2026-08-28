import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MapPin, Sparkles } from 'lucide-react';
import type { FAQItem } from '../types';

const faqData: FAQItem[] = [
  {
    id: '1',
    question: '¿Dónde está ubicada la consulta presencial de nutrición en Madrid?',
    answer: 'Nuestra consulta presencial se encuentra ubicada en pleno Barrio de Salamanca, en la Calle de Serrano 45, Madrid (cerca de las estaciones de Metro de Rubén Darío, Núñez de Balboa y Serrano). Contamos con báscula de bioimpedancia médica de última generación y espacio privado de evaluación.',
    geoContext: 'Ubicación local Madrid'
  },
  {
    id: '2',
    question: '¿En qué consiste la primera sesión de valoración gratuita?',
    answer: 'Es una llamada de 20 minutos (o reunión rápida en consulta Madrid) donde analizamos tu estado actual, tus objetivos de recomposición corporal o salud digestiva, tus horarios de trabajo y tu historial médico. Determinamos si encajas en alguno de nuestros programas de 90 días antes de realizar cualquier compromiso.',
    geoContext: 'Proceso de admisión'
  },
  {
    id: '3',
    question: '¿Puedo hacer el programa si no vivo en Madrid o viajo frecuentemente?',
    answer: 'Sí, más del 40% de nuestros pacientes siguen la modalidad 100% Online mediante nuestra plataforma y soporte directo por WhatsApp. Recibes la misma pauta personalizada, la misma revisión semanal de progreso y adaptación constante independientemente de tu ciudad o viajes.',
    geoContext: 'Modalidad Online'
  },
  {
    id: '4',
    question: '¿Tendré que pesar la comida o pasar hambre durante la dieta?',
    answer: 'Rotundamente no. No creemos en las dietas restrictivas de 1200 calorías. Diseñamos estructuras de comidas basadas en alimentos densos en nutrientes y saciantes. Aprenderás a comer por porciones visuales y combinaciones estratégicas de macronutrientes para mantener tu energía al 100%.',
    geoContext: 'Metodología nutricional'
  },
  {
    id: '5',
    question: '¿Cómo tratáis la hinchazón abdominal, el SIBO o los problemas digestivos?',
    answer: 'Aplicamos protocolos específicos de nutrición clínica antiinflamatoria (como FODMAP estructurado por fases). Si aportas analíticas de sangre o pruebas de aliento previas, las interpretamos clínicamente para diseñar la fase de eliminación, reparación intestinal y posterior reintroducción.',
    geoContext: 'Salud clínica digestiva'
  },
  {
    id: '6',
    question: '¿Cuánto tiempo tarda en verse una recomposición corporal clara?',
    answer: 'Los primeros cambios en energía, digestión y reducción de retención de líquidos son visibles en las primeras 2 semanas. En 90 días (la duración de nuestro programa principal) los pacientes logran transformaciones visibles en porcentaje de grasa y tono muscular de forma totalmente consolidada.',
    geoContext: 'Expectativa de tiempo'
  }
];

export const FAQAccordion: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('1');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#FAFAFA] border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-extrabold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 uppercase tracking-wider">
            Respuesta a tus preguntas (SEO/GEO Madrid)
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            Preguntas Frecuentes sobre la Consulta
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Todo lo que necesitas saber antes de iniciar tu programa con Marcos en Madrid.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-3">
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-emerald-500/80 shadow-md ring-1 ring-emerald-500/20'
                    : 'border-slate-200/80 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-base sm:text-lg focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className={`w-5 h-5 flex-shrink-0 transition-colors ${
                      isOpen ? 'text-emerald-600' : 'text-slate-400'
                    }`} />
                    <span>{item.question}</span>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-emerald-600' : ''
                  }`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-0 text-sm text-slate-600 leading-relaxed border-t border-slate-100 mt-1 animate-in fade-in duration-200">
                    <p className="pt-3">{item.answer}</p>
                    {item.geoContext && (
                      <span className="inline-flex items-center gap-1 text-[11px] text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-0.5 rounded-md mt-3">
                        <MapPin className="w-3 h-3 text-emerald-600" />
                        {item.geoContext}
                      </span>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA below FAQ */}
        <div className="mt-12 text-center bg-emerald-50/70 rounded-2xl p-6 border border-emerald-200/80">
          <h3 className="text-lg font-bold text-slate-900">
            ¿Tienes una duda específica sobre tu caso en Madrid?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 mb-4">
            Resuélvela directamente en tu sesión de valoración gratuita de 20 minutos.
          </p>
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex btn-cta bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl shadow-emerald-glow"
          >
            Agendar Valoración Ahora
          </a>
        </div>

      </div>
    </section>
  );
};

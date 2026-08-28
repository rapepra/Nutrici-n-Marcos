import React from 'react';
import { ShieldCheck, Instagram, ArrowRight, Award, Activity } from 'lucide-react';

const INSTAGRAM_URL = "https://www.instagram.com/marcostsd.rehab?igsi=ZmZjZXYzdndrbnhl";

interface AboutMarcosProps {
  onOpenBooking: () => void;
}

export const AboutMarcos: React.FC<AboutMarcosProps> = ({ onOpenBooking }) => {
  return (
    <section id="sobre-marcos" className="py-16 sm:py-24 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Real Photo Frame */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-emerald-100 rounded-3xl -z-10" />
              <img 
                src="assets/images/marcos-nutricionista.png" 
                alt="Marcos Nutricionista en consulta Madrid" 
                className="w-full rounded-3xl shadow-xl object-cover h-[480px] object-top border border-slate-200"
              />
              
              <div className="absolute -bottom-6 -right-6 bg-emerald-600 text-white p-5 rounded-2xl shadow-xl hidden sm:block">
                <div className="text-2xl font-extrabold">100%</div>
                <div className="text-xs font-medium">Personalizado en Madrid</div>
              </div>
            </div>
          </div>

          {/* Right: Bio & Credibility Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Garantía de Atención Profesional y Cercana</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Hola, soy Marcos. <br />
              <span className="text-emerald-600">Tu nutricionista clínico y deportivo en Madrid.</span>
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              Como <strong>Técnico Superior en Dietética (TSD)</strong> y especialista en <strong>Recuperación y Potenciación Nutricional</strong>, entiendo que cada organismo en Madrid tiene un ritmo, un estilo de vida y unas necesidades metabólicas totalmente únicas.
            </p>

            <p className="text-base text-slate-600 leading-relaxed">
              Mi filosofía se resume en 4 palabras: <em>"Tu nutrición, tu cambio"</em>. No creo en las pautas impresas estándar ni en pasar hambre. Trabajo contigo hombro a hombro para que alcances tu mejor versión física y energética sin renunciar a tu vida social en Madrid.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#FAFAFA] border border-slate-200 flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold flex-shrink-0">🎓</div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Formación TSD Colegiada</h4>
                  <p class="text-xs text-slate-500 mt-0.5">Especialización en fisiopatología digestiva y nutrición de fuerza.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAFAFA] border border-slate-200 flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold flex-shrink-0">🧬</div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Recuperación & Potenciación</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Estrategias peri-entreno para optimizar tono y reparación de tejido.</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="btn-cta bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-emerald-glow"
              >
                Conocer mi caso con Marcos
              </button>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-pink-600 hover:text-pink-700 flex items-center gap-1.5"
              >
                <Instagram className="w-4 h-4" />
                <span>Ver su día a día en @marcostsd.rehab ↗</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

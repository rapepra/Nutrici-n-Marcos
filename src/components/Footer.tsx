import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">

          {/* Col 1 & 2: Brand Info & Location */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-bold text-lg shadow-emerald-glow">
                M
              </div>
              <span className="font-extrabold text-white tracking-tight text-lg">
                MARCOS <span className="text-emerald-400 font-medium text-sm">Nutrición Madrid</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              Consulta de nutrición clínica y deportiva enfocada en recomposición corporal, optimización de la salud digestiva y rendimiento físico. Atención presencial en Madrid y programa online.
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Calle de Serrano, 45 · Barrio de Salamanca, 28001 Madrid</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>+34 910 000 000 / WhatsApp directo</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>contacto@marcosnutricion.es</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Lunes a Viernes: 09:00 - 20:00 h</span>
              </div>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="text-xs font-extrabold text-slate-200 uppercase tracking-widest mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#metodo" className="hover:text-emerald-400 transition-colors">El Método 4 Pasos</a>
              </li>
              <li>
                <a href="#programas" className="hover:text-emerald-400 transition-colors">Programa 90 Días</a>
              </li>
              <li>
                <a href="#testimonios" className="hover:text-emerald-400 transition-colors">Casos de Éxito</a>
              </li>
              <li>
                <a href="#guia-gratuita" className="hover:text-emerald-400 transition-colors">Guía PDF Gratuita</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-400 transition-colors">Preguntas Frecuentes</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Services */}
          <div>
            <h4 className="text-xs font-extrabold text-slate-200 uppercase tracking-widest mb-4">
              Especialidades
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>Recomposición Corporal</li>
              <li>Nutrición Deportiva & Fuerza</li>
              <li>Tratamiento SIBO / Digestivo</li>
              <li>Bioimpedancia Clínica ISAK</li>
              <li>Nutrición Antiinflamatoria</li>
            </ul>
          </div>

          {/* Col 5: Direct Action */}
          <div>
            <h4 className="text-xs font-extrabold text-slate-200 uppercase tracking-widest mb-4">
              Reserva Madrid
            </h4>
            <p className="text-xs text-slate-400 mb-4">
              Solicita tu primera sesión de valoración sin coste ni compromiso.
            </p>

            <button
              onClick={onOpenBooking}
              className="w-full btn-cta bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-emerald-glow cursor-pointer mb-3"
            >
              <span>Agendar Valoración</span>
            </button>

            <a
              href="https://wa.me/34910000000?text=Hola%20Marcos,%20quisiera%20información%20sobre%20las%20sesiones%20en%20Madrid"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-slate-900 hover:bg-slate-800 text-slate-300 font-semibold text-xs py-2.5 px-4 rounded-xl border border-slate-800 flex items-center justify-center gap-2 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Contactar por WhatsApp</span>
            </a>
          </div>

        </div>

        {/* Legal & Medical Accreditation Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Nutricionista-Dietista Colegiado N.º MAD-0842 · Comunidad de Madrid</span>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a href="#" className="hover:text-slate-300 transition-colors">Aviso Legal</a>
            <span>·</span>
            <a href="#" className="hover:text-slate-300 transition-colors">Política de Privacidad</a>
            <span>·</span>
            <a href="#" className="hover:text-slate-300 transition-colors">Política de Cookies</a>
          </div>

          <div className="text-slate-500">
            © {new Date().getFullYear()} Marcos Nutrición Madrid. Todos los derechos reservados.
          </div>
        </div>

      </div>
    </footer>
  );
};

import React, { useState } from 'react';
import { Download, FileText, CheckCircle2, Lock, Sparkles, Loader2, Mail, User, Target } from 'lucide-react';
import confetti from 'canvas-confetti';
import { saveLead } from '../lib/supabase';
import type { LeadCaptureData } from '../types';

export const LeadMagnet: React.FC = () => {
  const [formData, setFormData] = useState<LeadCaptureData>({
    name: '',
    email: '',
    goal: 'Recomposición Corporal'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.name) {
      setErrorMessage('Por favor, rellena tu nombre y correo electrónico.');
      return;
    }

    setErrorMessage('');
    setIsSubmitting(true);

    try {
      const result = await saveLead(formData);
      if (result.success) {
        setIsSuccess(true);
        // Trigger confetti micro-interaction
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#059669', '#10b981', '#34d399', '#f59e0b']
        });
      } else {
        setErrorMessage(result.error || 'Ocurrió un error. Inténtalo de nuevo.');
      }
    } catch (err) {
      setErrorMessage('Error al enviar. Por favor revisa tu conexión.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="guia-gratuita" className="py-16 sm:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white relative overflow-hidden">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Offer Details & Mockup Card */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              Recurso Gratuito de Alto Valor (PDF 2026)
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-white">
              Guía Definitiva: <br />
              <span className="text-emerald-400">Recomposición Corporal & Nutrición Antiinflamatoria</span>
            </h2>

            <p className="text-base text-slate-300 leading-relaxed font-normal">
              Descarga sin coste los 5 pilares prácticos para perder grasa visceral, eliminar la hinchazón abdominal y acelerar tu metabolismo en Madrid sin dietas restrictivas.
            </p>

            {/* Inclusions */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-sm text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span><strong>Tabla de equivalencias de macronutrientes:</strong> Aprende a sustituir alimentos en cualquier restaurante de Madrid.</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span><strong>Protocolo Anti-hinchazón de 7 Días:</strong> Guía paso a paso para desinflamar el digestivo.</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span><strong>Plantilla de planificación semanal:</strong> Para adaptar a tus jornadas de trabajo y entrenamientos.</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4 text-xs text-slate-400 font-medium">
              <span className="flex items-center gap-1">
                <FileText className="w-4 h-4 text-emerald-400" /> Formato PDF Instantáneo
              </span>
              <span>·</span>
              <span>42 Páginas de Contenido Práctico</span>
              <span>·</span>
              <span>100% Gratuito</span>
            </div>

          </div>

          {/* Right Column: Lead Capture Form Card */}
          <div className="lg:col-span-6">
            <div className="bg-white/95 backdrop-blur-xl text-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-2xl relative">
              
              {isSuccess ? (
                <div className="text-center py-8 space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">¡Guía enviada con éxito!</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Hemos enviado el enlace de descarga a <strong>{formData.email}</strong>. También puedes descargarla directamente a continuación:
                  </p>
                  
                  <a
                    href="#download"
                    onClick={(e) => {
                      e.preventDefault();
                      alert('Simulación de descarga: En un entorno de producción, la guía en PDF "Guía-Recomposicion-Madrid-2026.pdf" se descargará de inmediato.');
                    }}
                    className="inline-flex btn-cta bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-6 py-3.5 rounded-xl items-center justify-center gap-2 shadow-emerald-glow mt-4"
                  >
                    <Download className="w-5 h-5" />
                    <span>Descargar PDF Ahora (2.4 MB)</span>
                  </a>

                  <p className="text-xs text-slate-400 pt-4">
                    ¿Quieres dar el siguiente paso? <a href="#programas" className="text-emerald-600 underline font-semibold">Reserva tu sesión de valoración</a>
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-extrabold text-slate-900">
                      Descarga tu Guía Gratuita
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Introduce tus datos para recibir el PDF en tu correo electrónico al instante.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-red-50 text-red-700 text-xs font-semibold border border-red-200">
                      {errorMessage}
                    </div>
                  )}

                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                      Nombre completo *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ej: María García"
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white text-slate-900 font-medium"
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                      Correo Electrónico Principal *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ejemplo@correo.com"
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white text-slate-900 font-medium"
                      />
                    </div>
                  </div>

                  {/* Goal Select */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                      ¿Cuál es tu objetivo prioritario hoy?
                    </label>
                    <div className="relative">
                      <Target className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <select
                        value={formData.goal}
                        onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white text-slate-900 font-medium appearance-none"
                      >
                        <option value="Recomposición Corporal">Perder Grasa sin Perder Músculo</option>
                        <option value="Salud Digestiva">Mejorar Hinchazón / SIBO / Digestión</option>
                        <option value="Rendimiento Deportivo">Rendimiento Físico / Oposiciones</option>
                        <option value="Salud Clinica">Salud General / Analíticas</option>
                      </select>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-cta bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base py-4 rounded-xl flex items-center justify-center gap-2 shadow-emerald-glow cursor-pointer transition-all disabled:opacity-75 mt-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Procesando envío...</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-5 h-5" />
                        <span>Obtener Guía Gratuita en PDF</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-2 font-medium">
                    <Lock className="w-3.5 h-3.5 text-slate-400" />
                    <span>Respetamos tu privacidad. 0% Spam. Cancela en cualquier momento.</span>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

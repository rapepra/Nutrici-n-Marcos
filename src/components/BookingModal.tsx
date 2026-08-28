import React, { useState } from 'react';
import { X, Calendar, MapPin, Globe, CheckCircle2, ChevronRight, ChevronLeft, Loader2, Sparkles, Phone, Mail, User, Clock } from 'lucide-react';
import confetti from 'canvas-confetti';
import { saveBooking } from '../lib/supabase';
import type { BookingFormData } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProgram?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, preselectedProgram }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    goal: preselectedProgram || 'Recomposición Corporal de 90 Días',
    modality: 'presencial',
    preferredTime: 'Tardes (16:00 - 20:00)',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleNextStep = () => {
    setStep((prev) => (prev < 3 ? (prev + 1 as 2 | 3) : 3));
  };

  const handlePrevStep = () => {
    setStep((prev) => (prev > 1 ? (prev - 1 as 1 | 2) : 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setErrorMsg('Por favor completa todos los campos de contacto requeridos.');
      return;
    }

    setErrorMsg('');
    setIsSubmitting(true);

    try {
      const res = await saveBooking(formData);
      if (res.success) {
        setIsSuccess(true);
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#059669', '#10b981', '#fbbf24']
        });
      } else {
        setErrorMsg(res.error || 'No se pudo agendar la sesión.');
      }
    } catch (err) {
      setErrorMsg('Ocurrió un fallo en el envío.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-800 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900">
              ¡Solicitud de Valoración Recibida!
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
              Gracias, <strong>{formData.name}</strong>. Hemos recibido tu solicitud para el programa <strong>{formData.goal}</strong> ({formData.modality === 'presencial' ? 'Consulta Salamanca, Madrid' : 'Online'}).
            </p>
            
            <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-100 text-left text-xs text-emerald-900 space-y-1.5 my-4">
              <div className="font-bold flex items-center gap-1.5 text-emerald-800">
                <Sparkles className="w-4 h-4 text-emerald-600" /> Próximos pasos:
              </div>
              <p>1. Te contactaremos vía WhatsApp/Teléfono al <strong>{formData.phone}</strong> en menos de 24h laborables para confirmar fecha y hora exactas.</p>
              <p>2. Te enviaremos un cuestionario previo y las indicaciones de llegada si es presencial en Calle Serrano, Madrid.</p>
            </div>

            <button
              onClick={onClose}
              className="btn-cta bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-8 py-3.5 rounded-xl shadow-emerald-glow w-full sm:w-auto"
            >
              Entendido, volver a la página
            </button>
          </div>
        ) : (
          <div>
            {/* Header & Step Bar */}
            <div className="mb-6">
              <div className="flex items-center gap-2 text-xs font-extrabold text-emerald-600 uppercase tracking-wider">
                <Calendar className="w-4 h-4 text-emerald-600" />
                <span>Sesión de Valoración Inicial (Gratuita)</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                Reserva tu Plaza en Madrid
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Evaluamos tu caso sin compromiso para diseñar tu plan de 90 días.
              </p>

              {/* Step indicator */}
              <div className="flex items-center gap-2 mt-4 pt-2">
                {[1, 2, 3].map((s) => (
                  <div
                    key={s}
                    className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                      s <= step ? 'bg-emerald-600' : 'bg-slate-200'
                    }`}
                  />
                ))}
              </div>
            </div>

            {errorMsg && (
              <div className="mb-4 p-3 rounded-xl bg-red-50 text-red-700 text-xs font-semibold border border-red-200">
                {errorMsg}
              </div>
            )}

            {/* Step 1: Goal Select */}
            {step === 1 && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <h4 className="text-sm font-bold text-slate-900">
                  Paso 1: ¿Cuál es tu objetivo principal?
                </h4>

                <div className="space-y-2.5">
                  {[
                    'Recomposición Corporal de 90 Días (Quemar Grasa / Masa Muscular)',
                    'Salud Digestiva, Inflamación o SIBO',
                    'Nutrición Deportiva / Rendimiento / Oposiciones',
                    'Salud Metabólica & Analíticas (Resistencia a Insulina / Colesterol)'
                  ].map((g) => (
                    <button
                      key={g}
                      type="button"
                      onClick={() => setFormData({ ...formData, goal: g })}
                      className={`w-full text-left p-3.5 rounded-2xl border text-xs sm:text-sm font-medium transition-all flex items-center justify-between ${
                        formData.goal === g
                          ? 'border-emerald-600 bg-emerald-50/80 text-emerald-950 font-semibold shadow-sm'
                          : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-slate-50/50'
                      }`}
                    >
                      <span>{g}</span>
                      {formData.goal === g && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 ml-2" />
                      )}
                    </button>
                  ))}
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="btn-cta bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-6 py-3 rounded-xl flex items-center gap-2 shadow-emerald-glow"
                  >
                    <span>Siguiente</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Format & Schedule Select */}
            {step === 2 && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <h4 className="text-sm font-bold text-slate-900">
                  Paso 2: Formato de la consulta y preferencia horaria
                </h4>

                {/* Modality Selector */}
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, modality: 'presencial' })}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      formData.modality === 'presencial'
                        ? 'border-emerald-600 bg-emerald-50 text-emerald-950 font-bold shadow-sm'
                        : 'border-slate-200 text-slate-600 bg-slate-50'
                    }`}
                  >
                    <MapPin className="w-5 h-5 text-emerald-600 mb-2" />
                    <div className="text-xs sm:text-sm font-bold">Presencial Madrid</div>
                    <div className="text-[11px] font-normal text-slate-500 mt-0.5">Barrio de Salamanca</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, modality: 'online' })}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      formData.modality === 'online'
                        ? 'border-emerald-600 bg-emerald-50 text-emerald-950 font-bold shadow-sm'
                        : 'border-slate-200 text-slate-600 bg-slate-50'
                    }`}
                  >
                    <Globe className="w-5 h-5 text-emerald-600 mb-2" />
                    <div className="text-xs sm:text-sm font-bold">Consulta Online</div>
                    <div className="text-[11px] font-normal text-slate-500 mt-0.5">Videollamada 100% Flexible</div>
                  </button>
                </div>

                {/* Schedule Preference */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                    Preferencia Horaria
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white text-slate-900 font-medium"
                    >
                      <option value="Mañanas (09:00 - 14:00)">Mañanas (09:00 - 14:00)</option>
                      <option value="Tardes (16:00 - 20:00)">Tardes (16:00 - 20:00)</option>
                      <option value="Indiferente / Lo antes posible">Indiferente / Lo antes posible</option>
                    </select>
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="text-xs font-bold text-slate-500 hover:text-slate-900 flex items-center gap-1 py-2 px-3"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Anterior</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="btn-cta bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-6 py-3 rounded-xl flex items-center gap-2 shadow-emerald-glow"
                  >
                    <span>Datos de contacto</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Contact Info Form */}
            {step === 3 && (
              <form onSubmit={handleSubmit} className="space-y-4 animate-in fade-in duration-200">
                <h4 className="text-sm font-bold text-slate-900">
                  Paso 3: Tus datos de contacto
                </h4>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Nombre Completo *</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ej: Laura Martínez"
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Teléfono / WhatsApp *</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+34 600 000 000"
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Email *</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="laura@ejemplo.com"
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="text-xs font-bold text-slate-500 hover:text-slate-900 flex items-center gap-1 py-2 px-3"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Atrás</span>
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-cta bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-8 py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-emerald-glow cursor-pointer disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Agendando...</span>
                      </>
                    ) : (
                      <>
                        <Calendar className="w-4 h-4" />
                        <span>Confirmar Reserva Gratuita</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}

          </div>
        )}

      </div>
    </div>
  );
};

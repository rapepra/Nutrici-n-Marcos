import React, { useState, useEffect } from 'react';
import { Sparkles, Calendar, Menu, X, MapPin, Phone } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 py-3 sm:py-4">
      <div className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${
        isScrolled 
          ? 'glass-nav shadow-glass px-4 sm:px-6 py-2.5 sm:py-3' 
          : 'bg-white/70 backdrop-blur-md border border-slate-200/50 px-4 sm:px-6 py-3'
      }`}>
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-bold text-lg shadow-emerald-glow transition-transform duration-300 group-hover:scale-105">
              M
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-slate-900 tracking-tight text-base sm:text-lg leading-tight">
                MARCOS <span className="text-emerald-600 font-medium text-xs sm:text-sm block sm:inline sm:ml-1">Nutrición</span>
              </span>
              <span className="text-[10px] text-slate-500 font-medium tracking-wide flex items-center gap-1">
                <MapPin className="w-2.5 h-2.5 text-emerald-600" /> Madrid · Barrio de Salamanca
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#metodo" className="text-sm font-medium text-slate-700 hover:text-emerald-600 transition-colors">
              El Método
            </a>
            <a href="#programas" className="text-sm font-medium text-slate-700 hover:text-emerald-600 transition-colors">
              Programas 90 Días
            </a>
            <a href="#testimonios" className="text-sm font-medium text-slate-700 hover:text-emerald-600 transition-colors">
              Casos Reales
            </a>
            <a href="#guia-gratuita" className="text-sm font-medium text-slate-700 hover:text-emerald-600 transition-colors">
              Guía PDF
            </a>
            <a href="#faq" className="text-sm font-medium text-slate-700 hover:text-emerald-600 transition-colors">
              Dudas Madrid
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="btn-cta bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl flex items-center gap-2 shadow-emerald-glow cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Agenda tu Valoración</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={onOpenBooking}
              className="btn-cta bg-emerald-600 text-white p-2 rounded-lg"
              aria-label="Agendar valoración"
            >
              <Calendar className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 rounded-lg"
              aria-label="Abrir menú"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden fixed inset-x-4 top-20 bg-white/95 backdrop-blur-xl rounded-2xl p-6 border border-slate-200 shadow-2xl z-50 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-4">
            <a 
              href="#metodo" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-semibold text-slate-800 hover:text-emerald-600 py-2 border-b border-slate-100"
            >
              El Método
            </a>
            <a 
              href="#programas" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-semibold text-slate-800 hover:text-emerald-600 py-2 border-b border-slate-100"
            >
              Programas 90 Días
            </a>
            <a 
              href="#testimonios" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-semibold text-slate-800 hover:text-emerald-600 py-2 border-b border-slate-100"
            >
              Casos Reales
            </a>
            <a 
              href="#guia-gratuita" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-semibold text-slate-800 hover:text-emerald-600 py-2 border-b border-slate-100"
            >
              Guía PDF Gratuita
            </a>
            <a 
              href="#faq" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-semibold text-slate-800 hover:text-emerald-600 py-2 border-b border-slate-100"
            >
              Preguntas Frecuentes Madrid
            </a>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="mt-2 btn-cta bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-emerald-glow text-center"
            >
              <Calendar className="w-5 h-5" />
              <span>Agenda tu Valoración Gratuita</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

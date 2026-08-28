import React, { useState } from 'react';
import { Instagram, ArrowRight, X, Calendar, Sparkles, BookOpen } from 'lucide-react';

const INSTAGRAM_URL = "https://www.instagram.com/marcostsd.rehab?igsi=ZmZjZXYzdndrbnhl";

interface PostItem {
  id: string;
  title: string;
  category: string;
  badgeColor: string;
  date: string;
  image: string;
  summary: string;
  fullContent: React.ReactNode;
}

const instagramPosts: PostItem[] = [
  {
    id: "post-1",
    title: "La Clave de la Recuperación & Potenciación Muscular sin Inflamación Crónica",
    category: "Recuperación & Fuerza",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
    date: "Publicado en @marcostsd.rehab",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    summary: "Transcribimos y ampliamos el análisis de Marcos (TSD) sobre cómo acelerar la regeneración tisular entre sesiones combinando periodización proteica y modulación del estrés.",
    fullContent: (
      <div className="space-y-4">
        <h4 className="text-base font-bold text-slate-900">1. El Mito del Sobrenentrenamiento vs. Bajo Descanso Nutricional</h4>
        <p>Muchos deportistas en Madrid atribuyen el dolor articular persistente o la falta de fuerza al "sobreentrenamiento". En el 80% de los casos evaluados en consulta, el problema real es una falta de potencia sustratal: no se aportan la leucina ni los micronutrientes cofactores necesarios para la síntesis de colágeno durante la ventana de reparación nocturna.</p>
        
        <h4 className="text-base font-bold text-slate-900">2. Protocolo de Potenciación Nutricional (Método Marcos TSD)</h4>
        <ul className="list-disc pl-5 space-y-1 text-slate-700">
          <li><strong>Peri-entreno estructurado:</strong> Ingesta de 0.4g/kg de proteína de alto valor biológico junto a carbohidratos de bajo índice glucémico pre-sesión.</li>
          <li><strong>Modulación Antiinflamatoria:</strong> Ratio Omega 3/6 optimizado mediante alimentos reales (pescado azul, nueces, semillas) reduciendo el dolor articular tardío (DOMS).</li>
          <li><strong>Hidratación e Ionización:</strong> Reposición de sodio y magnesio ajustados al nivel de sudoración.</li>
        </ul>

        <div className="mt-4 italic bg-emerald-50 p-4 rounded-xl text-emerald-900 border border-emerald-200">
          💡 <strong>Conclusión Marcos TSD:</strong> "La masa muscular no se destruye en el gimnasio, se reconstruye en el plato. Ajusta tus macros a la exigencia de tus entrenamientos."
        </div>
      </div>
    )
  },
  {
    id: "post-2",
    title: "Recomposición Corporal de 90 Días: Por qué las Dietas de 1200 kcal Destruyen tu Metabolismo",
    category: "Recomposición Corporal",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
    date: "Publicado en @marcostsd.rehab",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    summary: "Explicación detallada de por qué el déficit calórico agresivo provoca pérdida de masa magra, ralentización tiroidea y efecto rebote rápido al volver a comer normal.",
    fullContent: (
      <div className="space-y-4">
        <h4 className="text-base font-bold text-slate-900">1. La trampa del peso balanza vs. Composición Corporal</h4>
        <p>Cuando reduces drásticamente las calorías sin una pauta adaptada, el peso que pierdes en las primeras semanas es principalmente agua, glucógeno y proteína muscular. Al disminuir la masa magra, tu gasto calórico en reposo cae drásticamente.</p>

        <h4 className="text-base font-bold text-slate-900">2. La Estrategia de Recomposición en 90 Días</h4>
        <p>En el programa de Marcos TSD aplicamos un déficit leve o neutro calórico (Cycling Calórico) enfocado en:</p>
        <ul className="list-disc pl-5 space-y-1 text-slate-700">
          <li>Aumentar la densidad nutricional sin reducir el volumen del plato.</li>
          <li>Mantener la tasa metabólica activa mediante estímulo de fuerza y aporte proteico óptimo (1.8g - 2.2g / kg).</li>
          <li>Medición de grasa visceral y masa magra mediante bioimpedancia médica mensual en Madrid.</li>
        </ul>

        <div className="mt-4 italic bg-emerald-50 p-4 rounded-xl text-emerald-900 border border-emerald-200">
          💡 <strong>Conclusión Marcos TSD:</strong> "El objetivo no es comer menos, es enseñarle a tu organismo a usar la grasa acumulada como combustible sin sacrificar tu musculatura."
        </div>
      </div>
    )
  },
  {
    id: "post-3",
    title: "Salud Digestiva & SIBO: Protocolo Antiinflamatorio en 3 Fases Clínicas",
    category: "Salud Digestiva",
    badgeColor: "bg-teal-100 text-teal-800 border-teal-200",
    date: "Publicado en @marcostsd.rehab",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    summary: "Cómo abordar la hinchazón permanente, gases molestos y disbiosis intestinal mediante el protocolo por fases de nutrición clínica de Marcos TSD.",
    fullContent: (
      <div className="space-y-4">
        <h4 className="text-base font-bold text-slate-900">1. ¿Por qué estás hinchado/a todas las tardes?</h4>
        <p>La inflamación intestinal recurrente suele ser síntoma de sobrecrecimiento bacteriano (SIBO), falta de ácido clorhídrico estomacal o alteración del Complejo Motor Migratorio (CMM). Comer a deshoras o alimentos ultraprocesados agrava el problema.</p>

        <h4 className="text-base font-bold text-slate-900">2. Protocolo Clínico de 3 Fases</h4>
        <ol className="list-decimal pl-5 space-y-1 text-slate-700">
          <li><strong>Fase 1: Eliminación Estructurada (Low FODMAP):</strong> Retirada temporal de carbohidratos fermentables que alimentan a las bacterias desplazadas.</li>
          <li><strong>Fase 2: Reparación Intestinal:</strong> Aporte de glutamina, zinc carnosina y polifenoles para restaurar las uniones estrechas del epitelio digestivo.</li>
          <li><strong>Fase 3: Reintroducción & Tolerancia:</strong> Probamos uno a uno los grupos de alimentos para devolverte la libertad de comer en cualquier restaurante de Madrid sin hinchazón.</li>
        </ol>
      </div>
    )
  },
  {
    id: "post-4",
    title: "Ayuno Intermitente vs. Adherencia Real: Mito vs. Realidad Científica",
    category: "Mitos & Evidencia",
    badgeColor: "bg-purple-100 text-purple-800 border-purple-200",
    date: "Publicado en @marcostsd.rehab",
    image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=800&q=80",
    summary: "El ayuno no es mágico por sí solo: desglosamos cuándo ayuda a regular la insulina y cuándo destruye la recuperación en deportistas.",
    fullContent: (
      <div className="space-y-4">
        <h4 className="text-base font-bold text-slate-900">1. ¿Sirve el ayuno intermitente 16/8 para perder grasa?</h4>
        <p>El ayuno 16/8 es simplemente una herramienta para controlar la ventana de ingesta. Si dentro de las 8 horas de comida consumes más calorías de las que gastas, no perderás grasa. Sin embargo, en personas con resistencia a la insulina o mala sensibilidad matutina a los carbohidratos, resulta extremadamente útil.</p>

        <h4 className="text-base font-bold text-slate-900">2. Cuándo NO hacer Ayuno Intermitente</h4>
        <p>Si entrenas fuerza a primera hora de la mañana con cargas elevadas o si sufres de ansiedad por la comida en las horas previas a acostarte, forzar el ayuno aumentará los niveles de cortisol y el catabolismo muscular.</p>
      </div>
    )
  },
  {
    id: "post-5",
    title: "Nutrición y Recuperación de Lesiones Musculares y Articulares",
    category: "Rehabilitación TSD",
    badgeColor: "bg-rose-100 text-rose-800 border-rose-200",
    date: "Publicado en @marcostsd.rehab",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
    summary: "Nutrientes específicos y suplementación clínica para recortar semanas en la cicatrización de tendones, ligamentos y roturas fibrilares.",
    fullContent: (
      <div className="space-y-4">
        <h4 className="text-base font-bold text-slate-900">1. Nutrición durante la Fase Inmovilizada o de Baja Carga</h4>
        <p>Tras una lesión deportiva, el error común es reducir drásticamente las calorías por miedo a engordar. Sin embargo, el proceso de cicatrización tisular eleva la tasa metabólica en reposo entre un 15% y un 50%.</p>

        <h4 className="text-base font-bold text-slate-900">2. Los 4 Pilares de la Remodelación del Tejido</h4>
        <ul className="list-disc pl-5 space-y-1 text-slate-700">
          <li><strong>Proteína Elevada (2.0g-2.5g/kg):</strong> Crucial para prevenir la atrofia muscular inducida por desuso.</li>
          <li><strong>Péptidos de Colágeno + Vitamina C:</strong> Consumidos 45 minutos antes de la fisioterapia o carga mecánica para dirigir la síntesis de colágeno al tendón dañado.</li>
          <li><strong>Omega 3 de Alta Pureza (EPA/DHA):</strong> Modula la fase de inflamación aguda sin frenar el proceso fisiológico de reparación.</li>
          <li><strong>Creatina Monohidrato (5g/día):</strong> Mantiene la hidratación celular muscular durante el periodo de inactividad.</li>
        </ul>
      </div>
    )
  },
  {
    id: "post-6",
    title: "Cómo Estructurar tu Plato Nutricional en Madrid sin Medir al Gramo",
    category: "Estilo de Vida",
    badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
    date: "Publicado en @marcostsd.rehab",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    summary: "El método visual de porciones para comer fuera en menús del día o cenas de empresa manteniendo la recomposición corporal.",
    fullContent: (
      <div className="space-y-4">
        <h4 className="text-base font-bold text-slate-900">1. El Método Visual Marcos TSD para Comer Fuera</h4>
        <p>No necesitas llevar una báscula a un restaurante en Madrid. Usamos referencias anatómicas de tu propia mano:</p>
        <ul className="list-disc pl-5 space-y-1 text-slate-700">
          <li><strong>Proteínas:</strong> 1 o 2 palmas completas de la mano (carne magra, pescado, huevos, tofu).</li>
          <li><strong>Verduras y Hortalizas:</strong> 2 puños cerrados de vegetales variados.</li>
          <li><strong>Carbohidratos Complejos:</strong> 1 ahuecado de la mano (patata, arroz, legumbres, quinoa).</li>
          <li><strong>Grasas Saludables:</strong> 1 falange del pulgar (aceite de oliva virgen extra, frutos secos, aguacate).</li>
        </ul>
      </div>
    )
  }
];

interface InstagramPostsProps {
  onOpenBooking: () => void;
}

export const InstagramPosts: React.FC<InstagramPostsProps> = ({ onOpenBooking }) => {
  const [activePost, setActivePost] = useState<PostItem | null>(null);

  return (
    <section id="instagram-divulgacion" className="py-16 sm:py-24 bg-[#FAFAFA] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-50 border border-pink-200 text-pink-700 text-xs font-bold mb-3 hover:bg-pink-100 transition-colors"
          >
            <Instagram className="w-4 h-4 text-pink-600" />
            <span>@marcostsd.rehab en Instagram</span>
          </a>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Divulgación & Artículos Ampliados
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Transcribimos y ampliamos los contenidos clave sobre nutrición clínica, recomposición corporal y recuperación física publicados en Instagram.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {instagramPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:border-pink-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${post.badgeColor}`}>
                      {post.category}
                    </span>
                  </div>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-900/80 text-white flex items-center justify-center hover:bg-pink-600 transition-colors shadow-lg"
                    title="Ver en Instagram @marcostsd.rehab"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>

                <div className="p-6">
                  <div className="text-[11px] text-slate-400 font-semibold mb-2 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-pink-500" />
                    <span>{post.date}</span>
                  </div>

                  <h3
                    onClick={() => setActivePost(post)}
                    className="text-lg font-bold text-slate-900 leading-snug hover:text-emerald-600 transition-colors cursor-pointer"
                  >
                    {post.title}
                  </h3>

                  <p className="text-xs text-slate-600 mt-2.5 leading-relaxed line-clamp-3">
                    {post.summary}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0 flex items-center justify-between gap-2 border-t border-slate-100 mt-4">
                <button
                  onClick={() => setActivePost(post)}
                  className="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1 cursor-pointer pt-4"
                >
                  <span>Leer post ampliado</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pt-4 text-xs font-semibold text-slate-500 hover:text-pink-600 flex items-center gap-1"
                >
                  <span>Ver Instagram ↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Bar */}
        <div className="mt-12 text-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 via-red-500 to-amber-500 hover:opacity-95 text-white font-bold text-sm px-8 py-3.5 rounded-xl shadow-lg transition-all"
          >
            <Instagram className="w-5 h-5" />
            <span>Ver perfil completo en Instagram (@marcostsd.rehab) ↗</span>
          </a>
        </div>

      </div>

      {/* Reader Modal */}
      {activePost && (
        <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-8 max-w-2xl w-full relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActivePost(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-800 font-bold text-lg p-2 rounded-full hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4">
              <span className={`text-xs font-bold px-3 py-1 rounded-full border uppercase ${activePost.badgeColor}`}>
                {activePost.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                {activePost.title}
              </h3>
            </div>

            <div className="prose prose-slate max-w-none text-sm text-slate-700 space-y-4">
              {activePost.fullContent}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold text-xs px-6 py-3 rounded-xl flex items-center justify-center gap-2"
              >
                <Instagram className="w-4 h-4" />
                <span>Ver publicación original en Instagram (@marcostsd.rehab) ↗</span>
              </a>

              <button
                onClick={() => {
                  setActivePost(null);
                  onOpenBooking();
                }}
                className="w-full sm:w-auto btn-cta bg-emerald-600 text-white font-bold text-xs px-6 py-3 rounded-xl shadow-emerald-glow"
              >
                Agendar Sesión Gratuita
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

/**
 * Vanilla JavaScript application logic for Nutrición Marcos Demandre (html-css branch)
 * Includes Instagram profile integration (@marcostsd.rehab) & post transcription reader.
 */

const INSTAGRAM_URL = "https://www.instagram.com/marcostsd.rehab?igsi=ZmZjZXYzdndrbnhl";

const instagramPostsData = [
  {
    id: "post-1",
    title: "La Clave de la Recuperación & Potenciación Muscular sin Inflamación Crónica",
    category: "Recuperación & Fuerza",
    badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
    date: "Publicado en @marcostsd.rehab por Marcos Demandre",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    instagramUrl: INSTAGRAM_URL,
    summary: "Transcribimos y ampliamos el análisis de Marcos Demandre (TSD) sobre cómo acelerar la regeneración tisular entre sesiones combinando periodización proteica y modulación del estrés.",
    fullContent: `
      <h3>1. El Mito del Sobrenentrenamiento vs. Bajo Descanso Nutricional</h3>
      <p>Muchos deportistas en Madrid atribuyen el dolor articular persistente o la falta de fuerza al "sobreentrenamiento". En el 80% de los casos evaluados en consulta por Marcos Demandre en el Barrio de Salamanca, el problema real es una falta de potencia sustratal: no se aportan la leucina ni los micronutrientes cofactores necesarios para la síntesis de colágeno durante la ventana de reparación nocturna.</p>
      
      <h3>2. Protocolo de Potenciación Nutricional (Método Marcos Demandre TSD)</h3>
      <ul>
        <li><strong>Peri-entreno estructurado:</strong> Ingesta de 0.4g/kg de proteína de alto valor biológico junto a carbohidratos de bajo índice glucémico pre-sesión para preservar el glucógeno muscular.</li>
        <li><strong>Modulación Antiinflamatoria:</strong> Ratio Omega 3/6 optimizado mediante alimentos reales (pescado azul, nueces, semillas) reduciendo el dolor articular tardío (DOMS).</li>
        <li><strong>Hidratación e Ionización:</strong> Reposición de sodio y magnesio ajustados al nivel de sudoración en entrenamientos intensos en Madrid.</li>
      </ul>

      <p class="mt-4 italic bg-emerald-50 p-4 rounded-xl text-emerald-900 border border-emerald-200">
        💡 <strong>Conclusión Marcos Demandre:</strong> "La masa muscular no se destruye en el gimnasio, se reconstruye en el plato. Ajusta tus macros a la exigencia de tus entrenamientos."
      </p>
    `
  },
  {
    id: "post-2",
    title: "Recomposición Corporal de 90 Días: Por qué las Dietas de 1200 kcal Destruyen tu Metabolismo",
    category: "Recomposición Corporal",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
    date: "Publicado en @marcostsd.rehab por Marcos Demandre",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    instagramUrl: INSTAGRAM_URL,
    summary: "Explicación detallada de Marcos Demandre sobre por qué el déficit calórico agresivo provoca pérdida de masa magra, ralentización tiroidea y efecto rebote rápido.",
    fullContent: `
      <h3>1. La trampa del peso balanza vs. Composición Corporal</h3>
      <p>Cuando reduces drásticamente las calorías sin una pauta adaptada, el peso que pierdes en las primeras semanas es principalmente agua, glucógeno y proteína muscular. Al disminuir la masa magra, tu gasto calórico en reposo cae drásticamente.</p>

      <h3>2. La Estrategia de Recomposición en 90 Días</h3>
      <p>En el programa de Marcos Demandre aplicamos un déficit leve o neutro calórico (Cycling Calórico) enfocado en:</p>
      <ul>
        <li>Aumentar la densidad nutricional sin reducir el volumen del plato.</li>
        <li>Mantener la tasa metabólica activa mediante estímulo de fuerza y aporte proteico óptimo (1.8g - 2.2g / kg).</li>
        <li>Medición de grasa visceral y masa magra mediante bioimpedancia médica mensual en Calle Serrano, Madrid.</li>
      </ul>

      <p class="mt-4 italic bg-emerald-50 p-4 rounded-xl text-emerald-900 border border-emerald-200">
        💡 <strong>Conclusión Marcos Demandre:</strong> "El objetivo no es comer menos, es enseñarle a tu organismo a usar la grasa acumulada como combustible sin sacrificar tu musculatura."
      </p>
    `
  },
  {
    id: "post-3",
    title: "Salud Digestiva & SIBO: Protocolo Antiinflamatorio en 3 Fases Clínicas",
    category: "Salud Digestiva",
    badgeColor: "bg-teal-100 text-teal-800 border-teal-200",
    date: "Publicado en @marcostsd.rehab por Marcos Demandre",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    instagramUrl: INSTAGRAM_URL,
    summary: "Cómo abordar la hinchazón permanente, gases molestos y disbiosis intestinal mediante el protocolo por fases de nutrición clínica de Marcos Demandre.",
    fullContent: `
      <h3>1. ¿Por qué estás hinchado/a todas las tardes?</h3>
      <p>La inflamación intestinal recurrente suele ser síntoma de sobrecrecimiento bacteriano (SIBO), falta de ácido clorhídrico estomacal o alteración del Complejo Motor Migratorio (CMM). Comer a deshoras o alimentos ultraprocesados agrava el problema.</p>

      <h3>2. Protocolo Clínico de 3 Fases de Marcos Demandre</h3>
      <ol>
        <li><strong>Fase 1: Eliminación Estructurada (Low FODMAP):</strong> Retirada temporal de carbohidratos fermentables que alimentan a las bacterias desplazadas.</li>
        <li><strong>Fase 2: Reparación Intestinal:</strong> Aporte de glutamina, zinc carnosina y polifenoles para restaurar las uniones estrechas del epitelio digestivo.</li>
        <li><strong>Fase 3: Reintroducción & Tolerancia:</strong> Probamos uno a uno los grupos de alimentos para devolverte la libertad de comer en cualquier restaurante del Barrio de Salamanca sin hinchazón.</li>
      </ol>
    `
  },
  {
    id: "post-4",
    title: "Ayuno Intermitente vs. Adherencia Real: Mito vs. Realidad Científica",
    category: "Mitos & Evidencia",
    badgeColor: "bg-purple-100 text-purple-800 border-purple-200",
    date: "Publicado en @marcostsd.rehab por Marcos Demandre",
    image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=800&q=80",
    instagramUrl: INSTAGRAM_URL,
    summary: "El ayuno no es mágico por sí solo: Marcos Demandre desglosa cuándo ayuda a regular la insulina y cuándo destruye la recuperación en deportistas de alto rendimiento.",
    fullContent: `
      <h3>1. ¿Sirve el ayuno intermitente 16/8 para perder grasa?</h3>
      <p>El ayuno 16/8 es simplemente una herramienta para controlar la ventana de ingesta. Si dentro de las 8 horas de comida consumes más calorías de las que gastas, no perderás grasa. Sin embargo, en personas con resistencia a la insulina o mala sensibilidad matutina a los carbohidratos, resulta extremadamente útil.</p>

      <h3>2. Cuándo NO hacer Ayuno Intermitente</h3>
      <p>Si entrenas fuerza a primera hora de la mañana con cargas elevadas o si sufres de ansiedad por la comida en las horas previas a acostarte, forzar el ayuno aumentará los niveles de cortisol y el catabolismo muscular.</p>
    `
  },
  {
    id: "post-5",
    title: "Nutrición y Recuperación de Lesiones Musculares y Articulares",
    category: "Rehabilitación TSD",
    badgeColor: "bg-rose-100 text-rose-800 border-rose-200",
    date: "Publicado en @marcostsd.rehab por Marcos Demandre",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
    summary: "Nutrientes específicos y suplementación clínica recomendados por Marcos Demandre para recortar semanas en la cicatrización de tendones, ligamentos y roturas fibrilares.",
    fullContent: `
      <h3>1. Nutrición durante la Fase Inmovilizada o de Baja Carga</h3>
      <p>Tras una lesión deportiva, el error común es reducir drásticamente las calorías por miedo a engordar. Sin embargo, el proceso de cicatrización tisular eleva la tasa metabólica en reposo entre un 15% y un 50%.</p>

      <h3>2. Los 4 Pilares de la Remodelación del Tejido</h3>
      <ul>
        <li><strong>Proteína Elevada (2.0g-2.5g/kg):</strong> Crucial para prevenir la atrofia muscular inducida por desuso.</li>
        <li><strong>Péptidos de Colágeno + Vitamina C:</strong> Consumidos 45 minutos antes de la fisioterapia o carga mecánica para dirigir la síntesis de colágeno al tendón dañado.</li>
        <li><strong>Omega 3 de Alta Pureza (EPA/DHA):</strong> Modula la fase de inflamación aguda sin frenar el proceso fisiológico de reparación.</li>
        <li><strong>Creatina Monohidrato (5g/día):</strong> Mantiene la hidratación celular muscular durante el periodo de inactividad.</li>
      </ul>
    `
  },
  {
    id: "post-6",
    title: "Cómo Estructurar tu Plato Nutricional en Madrid sin Medir al Gramo",
    category: "Estilo de Vida",
    badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
    date: "Publicado en @marcostsd.rehab por Marcos Demandre",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    instagramUrl: INSTAGRAM_URL,
    summary: "El método visual de porciones diseñado por Marcos Demandre para comer fuera en restaurantes del Barrio de Salamanca o Recoletos manteniendo tus objetivos.",
    fullContent: `
      <h3>1. El Método Visual Marcos Demandre para Comer Fuera</h3>
      <p>No necesitas llevar una báscula a un restaurante en Madrid. Usamos referencias anatómicas de tu propia mano:</p>
      <ul>
        <li><strong>Proteínas:</strong> 1 o 2 palmas completas de la mano (carne magra, pescado, huevos, tofu).</li>
        <li><strong>Verduras y Hortalizas:</strong> 2 puños cerrados de vegetales variados.</li>
        <li><strong>Carbohidratos Complejos:</strong> 1 ahuecado de la mano (patata, arroz, legumbres, quinoa).</li>
        <li><strong>Grasas Saludables:</strong> 1 falange del pulgar (aceite de oliva virgen extra, frutos secos, aguacate).</li>
      </ul>
    `
  }
];

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 2. Render Instagram Transcribed Posts Grid
  const instagramGridContainer = document.getElementById('instagramPostsGrid');
  if (instagramGridContainer) {
    instagramGridContainer.innerHTML = instagramPostsData.map(post => `
      <article class="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-sm instagram-card-hover flex flex-col justify-between">
        <div>
          <div class="relative h-48 overflow-hidden group">
            <img src="${post.image}" alt="${post.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute top-3 left-3">
              <span class="text-[11px] font-bold px-3 py-1 rounded-full border ${post.badgeColor}">
                ${post.category}
              </span>
            </div>
            <a href="${post.instagramUrl}" target="_blank" rel="noopener noreferrer" class="absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-900/80 text-white flex items-center justify-center hover:bg-pink-600 transition-colors shadow-lg" title="Ver en Instagram @marcostsd.rehab">
              <i data-lucide="instagram" class="w-4 h-4"></i>
            </a>
          </div>

          <div class="p-6">
            <div class="text-[11px] text-slate-400 font-semibold mb-2 flex items-center gap-1.5">
              <i data-lucide="calendar" class="w-3.5 h-3.5 text-pink-500"></i>
              <span>${post.date}</span>
            </div>

            <h3 class="text-lg font-bold text-slate-900 leading-snug hover:text-emerald-600 transition-colors cursor-pointer read-post-btn" data-post-id="${post.id}">
              ${post.title}
            </h3>

            <p class="text-xs text-slate-600 mt-2.5 leading-relaxed line-clamp-3">
              ${post.summary}
            </p>
          </div>
        </div>

        <div class="px-6 pb-6 pt-0 flex items-center justify-between gap-2 border-t border-slate-100 mt-4">
          <button class="read-post-btn text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1 cursor-pointer pt-4" data-post-id="${post.id}">
            <span>Leer post ampliado</span>
            <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
          </button>

          <a href="${post.instagramUrl}" target="_blank" rel="noopener noreferrer" class="pt-4 text-xs font-semibold text-slate-500 hover:text-pink-600 flex items-center gap-1">
            <span>Ver Instagram ↗</span>
          </a>
        </div>
      </article>
    `).join('');

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  // 3. Post Modal Reader
  const postModal = document.getElementById('postReaderModal');
  const closePostModalBtn = document.getElementById('closePostModal');
  const postModalTitle = document.getElementById('postModalTitle');
  const postModalCategory = document.getElementById('postModalCategory');
  const postModalContent = document.getElementById('postModalContent');
  const postModalIgLink = document.getElementById('postModalIgLink');

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.read-post-btn');
    if (btn) {
      const postId = btn.getAttribute('data-post-id');
      const post = instagramPostsData.find(p => p.id === postId);
      if (post && postModal) {
        if (postModalTitle) postModalTitle.textContent = post.title;
        if (postModalCategory) postModalCategory.textContent = post.category;
        if (postModalContent) postModalContent.innerHTML = post.fullContent;
        if (postModalIgLink) postModalIgLink.href = post.instagramUrl;
        postModal.classList.remove('hidden');
      }
    }
  });

  if (closePostModalBtn && postModal) {
    closePostModalBtn.addEventListener('click', () => {
      postModal.classList.add('hidden');
    });
  }

  // 4. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');

  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileDrawer.classList.toggle('hidden');
    });

    const drawerLinks = mobileDrawer.querySelectorAll('a, button');
    drawerLinks.forEach((link) => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.add('hidden');
      });
    });
  }

  // 5. FAQ Accordion Toggle
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    const btn = item.querySelector('.faq-button');
    const content = item.querySelector('.faq-answer');
    const icon = item.querySelector('.faq-icon');

    if (btn && content) {
      btn.addEventListener('click', () => {
        const isOpen = !content.classList.contains('hidden');

        document.querySelectorAll('.faq-answer').forEach((el) => el.classList.add('hidden'));
        document.querySelectorAll('.faq-icon').forEach((el) => el.classList.remove('rotate-180'));

        if (!isOpen) {
          content.classList.remove('hidden');
          if (icon) icon.classList.add('rotate-180');
        }
      });
    }
  });

  // 6. Booking Modal System
  const bookingModal = document.getElementById('bookingModal');
  const closeModalBtns = document.querySelectorAll('.close-booking-modal');
  const openModalBtns = document.querySelectorAll('.open-booking-modal');

  const step1 = document.getElementById('bookingStep1');
  const step2 = document.getElementById('bookingStep2');
  const step3 = document.getElementById('bookingStep3');
  const stepSuccess = document.getElementById('bookingStepSuccess');

  const btnStep1Next = document.getElementById('btnStep1Next');
  const btnStep2Back = document.getElementById('btnStep2Back');
  const btnStep2Next = document.getElementById('btnStep2Next');
  const btnStep3Back = document.getElementById('btnStep3Back');
  const bookingForm = document.getElementById('bookingForm');

  const goalOptionBtns = document.querySelectorAll('.goal-option-btn');
  let selectedGoal = 'Recomposición Integral de 90 Días';
  let selectedModality = 'presencial';

  openModalBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const programTitle = btn.getAttribute('data-program');
      if (programTitle) {
        selectedGoal = programTitle;
        const selectedGoalText = document.getElementById('selectedGoalText');
        if (selectedGoalText) selectedGoalText.textContent = programTitle;
      }
      resetBookingModal();
      if (bookingModal) bookingModal.classList.remove('hidden');
    });
  });

  closeModalBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (bookingModal) bookingModal.classList.add('hidden');
    });
  });

  goalOptionBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      goalOptionBtns.forEach((b) => {
        b.classList.remove('border-emerald-600', 'bg-emerald-50', 'text-emerald-950', 'font-semibold');
        b.classList.add('border-slate-200', 'bg-slate-50/50', 'text-slate-700');
      });

      btn.classList.remove('border-slate-200', 'bg-slate-50/50', 'text-slate-700');
      btn.classList.add('border-emerald-600', 'bg-emerald-50', 'text-emerald-950', 'font-semibold');

      selectedGoal = btn.getAttribute('data-value') || selectedGoal;
    });
  });

  const modalityBtns = document.querySelectorAll('.modality-btn');
  modalityBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      modalityBtns.forEach((b) => {
        b.classList.remove('border-emerald-600', 'bg-emerald-50', 'text-emerald-950');
        b.classList.add('border-slate-200', 'bg-slate-50');
      });
      btn.classList.remove('border-slate-200', 'bg-slate-50');
      btn.classList.add('border-emerald-600', 'bg-emerald-50', 'text-emerald-950');
      selectedModality = btn.getAttribute('data-modality') || 'presencial';
    });
  });

  if (btnStep1Next) {
    btnStep1Next.addEventListener('click', () => {
      if (step1 && step2) {
        step1.classList.add('hidden');
        step2.classList.remove('hidden');
        updateStepBar(2);
      }
    });
  }

  if (btnStep2Back) {
    btnStep2Back.addEventListener('click', () => {
      if (step1 && step2) {
        step2.classList.add('hidden');
        step1.classList.remove('hidden');
        updateStepBar(1);
      }
    });
  }

  if (btnStep2Next) {
    btnStep2Next.addEventListener('click', () => {
      if (step2 && step3) {
        step2.classList.add('hidden');
        step3.classList.remove('hidden');
        updateStepBar(3);
      }
    });
  }

  if (btnStep3Back) {
    btnStep3Back.addEventListener('click', () => {
      if (step2 && step3) {
        step3.classList.add('hidden');
        step2.classList.remove('hidden');
        updateStepBar(2);
      }
    });
  }

  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('bookingName');
      const phoneInput = document.getElementById('bookingPhone');
      const emailInput = document.getElementById('bookingEmail');
      const scheduleInput = document.getElementById('bookingSchedule');

      const payload = {
        name: nameInput ? nameInput.value : '',
        phone: phoneInput ? phoneInput.value : '',
        email: emailInput ? emailInput.value : '',
        goal: selectedGoal,
        modality: selectedModality,
        preferredTime: scheduleInput ? scheduleInput.value : 'Tardes',
        createdAt: new Date().toISOString()
      };

      console.info('[Booking Submitted for Marcos Demandre]:', payload);
      saveBookingToStorage(payload);

      if (step3 && stepSuccess) {
        step3.classList.add('hidden');
        stepSuccess.classList.remove('hidden');
      }

      if (window.confetti) {
        window.confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#059669', '#10b981', '#fbbf24']
        });
      }
    });
  }

  function resetBookingModal() {
    if (step1) step1.classList.remove('hidden');
    if (step2) step2.classList.add('hidden');
    if (step3) step3.classList.add('hidden');
    if (stepSuccess) stepSuccess.classList.add('hidden');
    updateStepBar(1);
  }

  function updateStepBar(currentStep) {
    const bars = document.querySelectorAll('.step-bar');
    bars.forEach((bar, idx) => {
      if (idx + 1 <= currentStep) {
        bar.classList.remove('bg-slate-200');
        bar.classList.add('bg-emerald-600');
      } else {
        bar.classList.remove('bg-emerald-600');
        bar.classList.add('bg-slate-200');
      }
    });
  }

  // 7. Lead Magnet Form Handler
  const leadMagnetForm = document.getElementById('leadMagnetForm');
  const leadMagnetSuccess = document.getElementById('leadMagnetSuccess');

  if (leadMagnetForm) {
    leadMagnetForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('leadName').value;
      const email = document.getElementById('leadEmail').value;
      const goal = document.getElementById('leadGoal').value;

      const leadData = { name, email, goal, createdAt: new Date().toISOString() };
      console.info('[Lead Magnet Captured for Marcos Demandre]:', leadData);
      saveLeadToStorage(leadData);

      if (leadMagnetForm && leadMagnetSuccess) {
        leadMagnetForm.classList.add('hidden');
        leadMagnetSuccess.classList.remove('hidden');

        const successEmailSpan = document.getElementById('leadSuccessEmail');
        if (successEmailSpan) successEmailSpan.textContent = email;
      }

      if (window.confetti) {
        window.confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#059669', '#10b981', '#34d399']
        });
      }
    });
  }

  function saveLeadToStorage(data) {
    try {
      const leads = JSON.parse(localStorage.getItem('nutricion_leads') || '[]');
      leads.push(data);
      localStorage.setItem('nutricion_leads', JSON.stringify(leads));
    } catch (e) {
      console.error(e);
    }
  }

  function saveBookingToStorage(data) {
    try {
      const bookings = JSON.parse(localStorage.getItem('nutricion_bookings') || '[]');
      bookings.push(data);
      localStorage.setItem('nutricion_bookings', JSON.stringify(bookings));
    } catch (e) {
      console.error(e);
    }
  }
});

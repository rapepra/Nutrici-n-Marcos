/**
 * Vanilla JavaScript application logic for Nutrición Marcos Demandre (html-css branch)
 * Includes Instagram profile integration, dedicated article links, Quiz logic & CRO mobile sticky bar.
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
    articleUrl: "articulos/recuperacion-potenciacion-muscular.html",
    instagramUrl: INSTAGRAM_URL,
    summary: "Transcribimos y ampliamos el análisis de Marcos Demandre (TSD) sobre cómo acelerar la regeneración tisular entre sesiones combinando periodización proteica y modulación del estrés.",
    fullContent: `
      <h3>1. El Mito del Sobrenentrenamiento vs. Bajo Descanso Nutricional</h3>
      <p>Muchos deportistas en Madrid atribuyen el dolor articular persistente o la falta de fuerza al "sobreentrenamiento". En el 80% de los casos evaluados por Marcos Demandre en Madrid (Online y A Domicilio), el problema real es una falta de potencia sustratal: no se aportan la leucina ni los micronutrientes cofactores necesarios para la síntesis de colágeno durante la ventana de reparación nocturna.</p>
    `
  },
  {
    id: "post-2",
    title: "Recomposición Corporal de 90 Días: Por qué las Dietas de 1200 kcal Destruyen tu Metabolismo",
    category: "Recomposición Corporal",
    badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
    date: "Publicado en @marcostsd.rehab por Marcos Demandre",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80",
    articleUrl: "articulos/recomposicion-corporal-90-dias.html",
    instagramUrl: INSTAGRAM_URL,
    summary: "Explicación detallada de Marcos Demandre sobre por qué el déficit calórico agresivo provoca pérdida de masa magra, ralentización tiroidea y efecto rebote rápido.",
    fullContent: `
      <h3>1. La trampa del peso balanza vs. Composición Corporal</h3>
      <p>Cuando reduces drásticamente las calorías sin una pauta adaptada, el peso que pierdes en las primeras semanas es principalmente agua, glucógeno y proteína muscular.</p>
    `
  },
  {
    id: "post-3",
    title: "Salud Digestiva & SIBO: Protocolo Antiinflamatorio en 3 Fases Clínicas",
    category: "Salud Digestiva",
    badgeColor: "bg-teal-100 text-teal-800 border-teal-200",
    date: "Publicado en @marcostsd.rehab por Marcos Demandre",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    articleUrl: "articulos/salud-digestiva-sibo.html",
    instagramUrl: INSTAGRAM_URL,
    summary: "Cómo abordar la hinchazón permanente, gases molestos y disbiosis intestinal mediante el protocolo por fases de nutrición clínica de Marcos Demandre.",
    fullContent: `
      <h3>1. ¿Por qué estás hinchado/a todas las tardes?</h3>
      <p>La inflamación intestinal recurrente suele ser síntoma de sobrecrecimiento bacteriano (SIBO) o alteración del Complejo Motor Migratorio (CMM).</p>
    `
  },
  {
    id: "post-4",
    title: "Ayuno Intermitente vs. Adherencia Real: Mito vs. Realidad Científica",
    category: "Mitos & Evidencia",
    badgeColor: "bg-purple-100 text-purple-800 border-purple-200",
    date: "Publicado en @marcostsd.rehab por Marcos Demandre",
    image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=800&q=80",
    articleUrl: "articulos/ayuno-intermitente-mitos.html",
    instagramUrl: INSTAGRAM_URL,
    summary: "El ayuno no es mágico por sí solo: Marcos Demandre desglosa cuándo ayuda a regular la insulina y cuándo destruye la recuperación en deportistas de alto rendimiento.",
    fullContent: `
      <h3>1. ¿Sirve el ayuno intermitente 16/8 para perder grasa?</h3>
      <p>El ayuno 16/8 es simplemente una herramienta para controlar la ventana de ingesta. Si dentro de las 8 horas de comida consumes más calorías de las que gastas, no perderás grasa.</p>
    `
  },
  {
    id: "post-5",
    title: "Nutrición y Recuperación de Lesiones Musculares y Articulares",
    category: "Rehabilitación TSD",
    badgeColor: "bg-rose-100 text-rose-800 border-rose-200",
    date: "Publicado en @marcostsd.rehab por Marcos Demandre",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
    articleUrl: "articulos/nutricion-lesiones-musculares.html",
    instagramUrl: INSTAGRAM_URL,
    summary: "Nutrientes específicos y suplementación clínica recomendados por Marcos Demandre para recortar semanas en la cicatrización de tendones, ligamentos y roturas fibrilares.",
    fullContent: `
      <h3>1. Nutrición durante la Fase Inmovilizada o de Baja Carga</h3>
      <p>Tras una lesión deportiva, el error común es reducir drásticamente las calorías por miedo a engordar.</p>
    `
  },
  {
    id: "post-6",
    title: "Cómo Estructurar tu Plato Nutricional en Madrid sin Medir al Gramo",
    category: "Estilo de Vida",
    badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
    date: "Publicado en @marcostsd.rehab por Marcos Demandre",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    articleUrl: "articulos/plato-nutricional-madrid.html",
    instagramUrl: INSTAGRAM_URL,
    summary: "El método visual de porciones diseñado por Marcos Demandre para comer fuera en restaurantes del Barrio de Salamanca o Madrid centro manteniendo tus objetivos.",
    fullContent: `
      <h3>1. El Método Visual Marcos Demandre para Comer Fuera</h3>
      <p>No necesitas llevar una báscula a un restaurante en Madrid. Usamos referencias anatómicas de tu propia mano.</p>
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
            <a href="${post.articleUrl}" aria-label="Leer artículo ${post.title}">
              <img src="${post.image}" alt="${post.title}" width="400" height="240" loading="lazy" decoding="async" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </a>
            <div class="absolute top-3 left-3">
              <span class="text-[11px] font-bold px-3 py-1 rounded-full border ${post.badgeColor}">
                ${post.category}
              </span>
            </div>
            <a href="${post.instagramUrl}" target="_blank" rel="noopener noreferrer" class="absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-900/80 text-white flex items-center justify-center hover:bg-pink-600 transition-colors shadow-lg" title="Ver en Instagram @marcostsd.rehab" aria-label="Instagram oficial">
              <i data-lucide="instagram" class="w-4 h-4" aria-hidden="true"></i>
            </a>
          </div>

          <div class="p-6">
            <div class="text-[11px] text-slate-400 font-semibold mb-2 flex items-center gap-1.5">
              <i data-lucide="calendar" class="w-3.5 h-3.5 text-pink-500" aria-hidden="true"></i>
              <span>${post.date}</span>
            </div>

            <h3 class="text-lg font-bold text-slate-900 leading-snug hover:text-emerald-600 transition-colors">
              <a href="${post.articleUrl}">
                ${post.title}
              </a>
            </h3>

            <p class="text-xs text-slate-600 mt-2.5 leading-relaxed line-clamp-3">
              ${post.summary}
            </p>
          </div>
        </div>

        <div class="px-6 pb-6 pt-0 flex items-center justify-between gap-2 border-t border-slate-100 mt-4">
          <a href="${post.articleUrl}" class="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1 cursor-pointer pt-4 min-h-[44px]">
            <span>Leer artículo completo (SEO)</span>
            <i data-lucide="arrow-right" class="w-3.5 h-3.5" aria-hidden="true"></i>
          </a>

          <a href="${post.instagramUrl}" target="_blank" rel="noopener noreferrer" class="pt-4 text-xs font-semibold text-slate-500 hover:text-pink-600 flex items-center gap-1 min-h-[44px]">
            <span>Instagram ↗</span>
          </a>
        </div>
      </article>
    `).join('');

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  // 3. INTERACTIVE QUIZ WIDGET SYSTEM (CRO LEAD MAGNET)
  const quizStep1 = document.getElementById('quizStep1');
  const quizStep2 = document.getElementById('quizStep2');
  const quizStep3 = document.getElementById('quizStep3');
  const quizStepResult = document.getElementById('quizStepResult');
  const quizProgressBar = document.getElementById('quizProgressBar');

  let quizAnswers = {
    goal: '',
    activity: '',
    symptoms: ''
  };

  const quizGoalBtns = document.querySelectorAll('.quiz-goal-btn');
  quizGoalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      quizGoalBtns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      quizAnswers.goal = btn.getAttribute('data-value') || '';

      if (quizStep1 && quizStep2) {
        quizStep1.classList.add('hidden');
        quizStep2.classList.remove('hidden');
        if (quizProgressBar) quizProgressBar.style.width = '66%';
      }
    });
  });

  const quizActivityBtns = document.querySelectorAll('.quiz-activity-btn');
  quizActivityBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      quizActivityBtns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      quizAnswers.activity = btn.getAttribute('data-value') || '';

      if (quizStep2 && quizStep3) {
        quizStep2.classList.add('hidden');
        quizStep3.classList.remove('hidden');
        if (quizProgressBar) quizProgressBar.style.width = '100%';
      }
    });
  });

  const quizSymptomBtns = document.querySelectorAll('.quiz-symptom-btn');
  quizSymptomBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      quizAnswers.symptoms = btn.getAttribute('data-value') || '';

      if (quizStep3 && quizStepResult) {
        quizStep3.classList.add('hidden');
        quizStepResult.classList.remove('hidden');
        
        const quizDiagnosticTitle = document.getElementById('quizDiagnosticTitle');
        const quizDiagnosticText = document.getElementById('quizDiagnosticText');

        if (quizAnswers.goal.includes('Digestiva') || quizAnswers.symptoms.includes('Hinchazón')) {
          if (quizDiagnosticTitle) quizDiagnosticTitle.textContent = "Perfil detectado: Protocolo Antiinflamatorio & Digestivo 90 Días";
          if (quizDiagnosticText) quizDiagnosticText.textContent = "Tus respuestas indican indicios de disbiosis o inflamación intestinal. Marcos Demandre puede aplicar un protocolo por fases sin fármacos agresivos.";
        } else {
          if (quizDiagnosticTitle) quizDiagnosticTitle.textContent = "Perfil detectado: Recomposición Corporal & Potenciación Muscular";
          if (quizDiagnosticText) quizDiagnosticText.textContent = "Eres candidato/a óptimo/a para el programa de 90 Días para bajar porcentaje graso preservando masa muscular.";
        }

        if (window.confetti) {
          window.confetti({ particleCount: 70, spread: 60, origin: { y: 0.7 } });
        }
      }
    });
  });

  // 4. FAQ Accordion Toggle
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
          btn.setAttribute('aria-expanded', 'true');
          if (icon) icon.classList.add('rotate-180');
        } else {
          btn.setAttribute('aria-expanded', 'false');
        }
      });
    }
  });

  // 5. Booking Modal System
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
  let selectedModality = 'online';

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
      selectedModality = btn.getAttribute('data-modality') || 'online';
    });
  });

  if (btnStep1Next) {
    btnStep1Next.addEventListener('click', () => {
      if (step1 && step2) {
        step1.classList.add('hidden');
        step2.classList.remove('hidden');
      }
    });
  }

  if (btnStep2Back) {
    btnStep2Back.addEventListener('click', () => {
      if (step1 && step2) {
        step2.classList.add('hidden');
        step1.classList.remove('hidden');
      }
    });
  }

  if (btnStep2Next) {
    btnStep2Next.addEventListener('click', () => {
      if (step2 && step3) {
        step2.classList.add('hidden');
        step3.classList.remove('hidden');
      }
    });
  }

  if (btnStep3Back) {
    btnStep3Back.addEventListener('click', () => {
      if (step2 && step3) {
        step3.classList.add('hidden');
        step2.classList.remove('hidden');
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
  }

  // 6. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');

  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
      mobileDrawer.classList.toggle('hidden');
    });

    const drawerLinks = mobileDrawer.querySelectorAll('a, button');
    drawerLinks.forEach((link) => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.add('hidden');
        if (mobileMenuBtn) mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
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

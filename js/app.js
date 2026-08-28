/**
 * Vanilla JavaScript application logic for Nutrición Marcos Madrid (html-css branch)
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 2. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');

  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileDrawer.classList.toggle('hidden');
    });

    // Close drawer when clicking any link inside
    const drawerLinks = mobileDrawer.querySelectorAll('a, button');
    drawerLinks.forEach((link) => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.add('hidden');
      });
    });
  }

  // 3. FAQ Accordion Toggle
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    const btn = item.querySelector('.faq-button');
    const content = item.querySelector('.faq-answer');
    const icon = item.querySelector('.faq-icon');

    if (btn && content) {
      btn.addEventListener('click', () => {
        const isOpen = !content.classList.contains('hidden');

        // Close all other FAQs
        document.querySelectorAll('.faq-answer').forEach((el) => el.classList.add('hidden'));
        document.querySelectorAll('.faq-icon').forEach((el) => el.classList.remove('rotate-180'));

        if (!isOpen) {
          content.classList.remove('hidden');
          if (icon) icon.classList.add('rotate-180');
        }
      });
    }
  });

  // 4. Booking Modal System
  const bookingModal = document.getElementById('bookingModal');
  const closeModalBtns = document.querySelectorAll('.close-booking-modal');
  const openModalBtns = document.querySelectorAll('.open-booking-modal');

  // Step containers inside modal
  const step1 = document.getElementById('bookingStep1');
  const step2 = document.getElementById('bookingStep2');
  const step3 = document.getElementById('bookingStep3');
  const stepSuccess = document.getElementById('bookingStepSuccess');

  const btnStep1Next = document.getElementById('btnStep1Next');
  const btnStep2Back = document.getElementById('btnStep2Back');
  const btnStep2Next = document.getElementById('btnStep2Next');
  const btnStep3Back = document.getElementById('btnStep3Back');
  const bookingForm = document.getElementById('bookingForm');

  // Goal options buttons in Step 1
  const goalOptionBtns = document.querySelectorAll('.goal-option-btn');
  let selectedGoal = 'Recomposición Corporal de 90 Días';
  let selectedModality = 'presencial';

  // Pre-select program logic
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

  // Goal Select handler
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

  // Modality Selector
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

  // Step Navigation
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

  // Booking Form Submission
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

      console.info('[Booking Submitted]:', payload);
      saveBookingToStorage(payload);

      if (step3 && stepSuccess) {
        step3.classList.add('hidden');
        stepSuccess.classList.remove('hidden');
      }

      // Trigger Confetti
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

  // 5. Lead Magnet Form Handler
  const leadMagnetForm = document.getElementById('leadMagnetForm');
  const leadMagnetSuccess = document.getElementById('leadMagnetSuccess');

  if (leadMagnetForm) {
    leadMagnetForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('leadName').value;
      const email = document.getElementById('leadEmail').value;
      const goal = document.getElementById('leadGoal').value;

      const leadData = { name, email, goal, createdAt: new Date().toISOString() };
      console.info('[Lead Magnet Captured]:', leadData);
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

  // Storage helper for contacts
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

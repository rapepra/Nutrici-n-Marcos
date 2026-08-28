import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutMarcos } from './components/AboutMarcos';
import { SocialProof } from './components/SocialProof';
import { Methodology } from './components/Methodology';
import { BentoServices } from './components/BentoServices';
import { InstagramPosts } from './components/InstagramPosts';
import { LeadMagnet } from './components/LeadMagnet';
import { FAQAccordion } from './components/FAQAccordion';
import { BookingModal } from './components/BookingModal';
import { JsonLdSchema } from './components/JsonLdSchema';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<string | undefined>(undefined);

  const handleOpenBooking = (programTitle?: string) => {
    setSelectedProgram(programTitle);
    setIsBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingModalOpen(false);
    setSelectedProgram(undefined);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-900 flex flex-col font-sans selection:bg-emerald-500 selection:text-white">
      {/* Schema Markup for SEO / GEO Local Business & Person */}
      <JsonLdSchema />

      {/* Floating Glassmorphism Sticky Navbar */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <main className="flex-grow">
        {/* Hero Section */}
        <div id="hero">
          <Hero onOpenBooking={() => handleOpenBooking()} />
        </div>

        {/* Credibility & About Marcos Section */}
        <AboutMarcos onOpenBooking={() => handleOpenBooking()} />

        {/* Immediate Social Proof & Testimonials */}
        <SocialProof />

        {/* 4-Step Methodology */}
        <Methodology />

        {/* Bento Grid of High Value Programs */}
        <BentoServices onSelectProgram={(title) => handleOpenBooking(title)} />

        {/* Transcribed Instagram Educational Posts */}
        <InstagramPosts onOpenBooking={() => handleOpenBooking()} />

        {/* High Contrast Lead Capture Magnet (PDF Download) */}
        <LeadMagnet />

        {/* GEO Optimized FAQ Accordion */}
        <FAQAccordion />
      </main>

      {/* Localized Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Multi-step Valuation Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={handleCloseBooking}
        preselectedProgram={selectedProgram}
      />
    </div>
  );
};

export default App;

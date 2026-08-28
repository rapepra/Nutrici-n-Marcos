export interface LeadCaptureData {
  name: string;
  email: string;
  goal: string;
  createdAt?: string;
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  goal: string;
  modality: 'presencial' | 'online';
  preferredTime: string;
  notes?: string;
  createdAt?: string;
}

export interface ServiceProgram {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  badge: string;
  features: string[];
  icon: string; // Lucide Icon identifier
  isPopular?: boolean;
  idealFor: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  result: string;
  image: string;
  text: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  geoContext?: string;
}

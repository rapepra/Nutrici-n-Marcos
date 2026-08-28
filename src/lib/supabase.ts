import { createClient } from '@supabase/supabase-js';
import type { LeadCaptureData, BookingFormData } from '../types';

// Environment variables for Supabase integration
const supabaseUrl = import.meta.env?.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env?.VITE_SUPABASE_ANON_KEY || '';

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

/**
 * Guarda un lead en Supabase (o fallback local si no hay API Key activa)
 */
export async function saveLead(data: LeadCaptureData): Promise<{ success: boolean; error?: string }> {
  try {
    const payload = {
      ...data,
      created_at: new Date().toISOString(),
      source: 'landing_madrid_lead_magnet',
    };

    if (supabase) {
      const { error } = await supabase.from('leads').insert([payload]);
      if (error) throw error;
    } else {
      // Fallback local storage para desarrollo / demo sin Supabase
      const existingLeads = JSON.parse(localStorage.getItem('nutricion_leads') || '[]');
      existingLeads.push(payload);
      localStorage.setItem('nutricion_leads', JSON.stringify(existingLeads));
      console.info('[Supabase Lead Mock Saved]:', payload);
    }

    return { success: true };
  } catch (err: any) {
    console.error('Error al guardar lead:', err);
    return { success: false, error: err.message || 'Error de conexión' };
  }
}

/**
 * Guarda una reserva de valoración en Supabase
 */
export async function saveBooking(data: BookingFormData): Promise<{ success: boolean; error?: string }> {
  try {
    const payload = {
      ...data,
      created_at: new Date().toISOString(),
      status: 'pending_confirmation',
      location_preference: data.modality === 'presencial' ? 'Barrio de Salamanca, Madrid' : 'Online',
    };

    if (supabase) {
      const { error } = await supabase.from('bookings').insert([payload]);
      if (error) throw error;
    } else {
      // Fallback local
      const existingBookings = JSON.parse(localStorage.getItem('nutricion_bookings') || '[]');
      existingBookings.push(payload);
      localStorage.setItem('nutricion_bookings', JSON.stringify(existingBookings));
      console.info('[Supabase Booking Mock Saved]:', payload);
    }

    return { success: true };
  } catch (err: any) {
    console.error('Error al guardar reserva:', err);
    return { success: false, error: err.message || 'Error al agendar la sesión' };
  }
}

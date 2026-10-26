import { createClient } from '@supabase/supabase-js';

const FALLBACK_URL = 'https://ewvzvxyujdqbwkpxskix.supabase.co';
const FALLBACK_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV3dnp2eHl1amRxYndrcHhza2l4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc0MTIxMjgsImV4cCI6MjA5Mjk4ODEyOH0.5_gZlCNcUPGf9ncgQM0up-oSz0yXvoEiABpe7dZzOQk';

const envUrl = (import.meta as any).env?.VITE_SUPABASE_URL;
const envKey = (import.meta as any).env?.VITE_SUPABASE_ANON_KEY;

// თუ envUrl არ იწყება http-თი, პირდაპირ ვიყენებთ FALLBACK_URL-ს
const validUrl = typeof envUrl === 'string' && envUrl.startsWith('http') ? envUrl : FALLBACK_URL;
const validKey = typeof envKey === 'string' && envKey.length > 20 ? envKey : FALLBACK_KEY;

export const supabase = createClient(validUrl, validKey);
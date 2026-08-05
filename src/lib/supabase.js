import { createClient } from '@supabase/supabase-js';

// Client Supabase du SITE VITRINE.
//
// Il ne sert qu'à une chose : déposer une inscription dans `public.waitlist`.
// La policy `waitlist_public_insert` autorise l'INSERT au rôle `anon` ; la
// lecture et la modification sont réservées au super admin dans l'app. Aucune
// session n'est donc créée ici.
//
// La clé anon est publique par conception (c'est la RLS qui protège les
// données) — mais elle reste configurable pour ne pas figer le projet dans le
// code le jour où l'on change d'instance.

const SUPABASE_URL =
    import.meta.env.VITE_SUPABASE_URL || 'https://kkdcgzvdmipmrgkawnky.supabase.co';

const SUPABASE_ANON_KEY =
    import.meta.env.VITE_SUPABASE_ANON_KEY ||
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtrZGNnenZkbWlwbXJna2F3bmt5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE1NDMxNzcsImV4cCI6MjA5NzExOTE3N30.fI0EzwqjGpfWvBMhtk2qW8pETcDkWDmpbuRw9RpdAi4';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: {
        // Un visiteur du site n'a pas de compte : rien à persister, rien à
        // rafraîchir, et surtout aucun jeton à laisser traîner dans le
        // localStorage d'un poste partagé.
        persistSession: false,
        autoRefreshToken: false,
        detectSessionInUrl: false,
    },
});

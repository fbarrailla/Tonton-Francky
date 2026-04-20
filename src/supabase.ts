import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dufftgmvjjtlyfqwdsyp.supabase.co';
const supabaseAnonKey = 'sb_publishable_1hywiIeUxTa6_5IuZK0l-w_WwOy7rCD';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

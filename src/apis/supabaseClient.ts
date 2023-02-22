import { createClient } from '@supabase/supabase-js';
import type { Database } from 'types/database.types';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL ?? '';
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY ?? '';

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

// Gives the type of single elements from an array
export type ArrayElement<A> = A extends readonly (infer T)[] ? T : never;

// Typed Usage Example
// type Profiles = Awaited<ReturnType<typeof fetchProfile>>['data'];
export type Articles = Awaited<ReturnType<typeof fetchArticles>>['data'];

// type Article = ArrayElement<Articles>;
// type Profile = ArrayElement<Profiles>;

export const fetchArticles = async () => await supabase.from('article').select('*');
// const fetchProfile = async () => await supabase.from('profile').select('*');

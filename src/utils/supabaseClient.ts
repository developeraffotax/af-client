import { createClient } from "@supabase/supabase-js"

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY =  import.meta.env.VITE_SUPABASE_ANON_KEY;

export const createSupabaseClient = () => {



    const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

    return supabase;


}
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://yeqmdlmppbqhgoylucabq.supabase.co';  // Ganti dengan URL Supabase kamu
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InllcW1kbG1wYnFoZ295bHVjYWJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkxMDY1NTgsImV4cCI6MjA2NDY4MjU1OH0.IegNmtCAx-oH0iizYstP7QZThh1f7RHQaN_jUqFNtjE';  // Ganti dengan Anon Key kamu
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

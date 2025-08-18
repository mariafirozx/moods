import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient('https://fncefebahhsdxmkwrnie.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZuY2VmZWJhaGhzZHhta3dybmllIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU0NDk0ODksImV4cCI6MjA3MTAyNTQ4OX0.iQvhNk1Q_pWt01wen5M7wf3FHFFjRRCX75AtxSRXCzs')
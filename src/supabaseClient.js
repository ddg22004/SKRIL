import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vsabfzsislghyeuohfiv.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZzYWJmenNpc2xnaHlldW9oZml2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ2MTg1NTMsImV4cCI6MjA2MDE5NDU1M30._HGBb2lAgjVWAMKC7oS5xo02mqBWX_h4Hr4H6BtW6Wc'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
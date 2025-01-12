import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://gbzwamutjzncenzrpwrd.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdiendhbXV0anpuY2VuenJwd3JkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY3MTYwODYsImV4cCI6MjA1MjI5MjA4Nn0.RxWyU0BTLxwYlDVwj7m854MNgbzE59yrP83PR3rsv00";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

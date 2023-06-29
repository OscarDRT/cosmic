import "react-native-url-polyfill/auto";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bcbazkekizkreifcaynw.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJjYmF6a2VraXprcmVpZmNheW53Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc5NzU3MDEsImV4cCI6MjAwMzU1MTcwMX0.B_8g82XtmVK8kq369tCwPTofBG_ZoCtrQFjDOOMBbX4";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Product {
  id: string;
  name: string;
  price: number;
  image_url: string;
  description: string;
  stock: number;
  created_at: string;
}

export interface Order {
  id: string;
  user_id?: string;
  customer_name: string;
  customer_phone: string;
  items: CartItem[];
  total_amount: number;
  payment_method: 'whatsapp' | 'online';
  status: string;
  created_at: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

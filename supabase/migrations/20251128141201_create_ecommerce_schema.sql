/*
  # Munishwaraa Electricals E-commerce Schema

  1. New Tables
    - `products`
      - `id` (uuid, primary key)
      - `name` (text) - Product name
      - `price` (numeric) - Product price
      - `image_url` (text) - Product image URL
      - `description` (text) - Product description
      - `stock` (integer) - Available quantity
      - `created_at` (timestamptz) - Creation timestamp
    
    - `orders`
      - `id` (uuid, primary key)
      - `user_id` (uuid, nullable) - Reference to auth.users
      - `customer_name` (text) - Customer name
      - `customer_phone` (text) - Customer phone number
      - `items` (jsonb) - Order items array
      - `total_amount` (numeric) - Total order amount
      - `payment_method` (text) - 'whatsapp' or 'online'
      - `status` (text) - Order status
      - `created_at` (timestamptz) - Order timestamp

  2. Security
    - Enable RLS on all tables
    - Public read access for products
    - Authenticated users can view their own orders
    - Users can insert orders (for placing orders)
*/

CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  price numeric NOT NULL,
  image_url text NOT NULL,
  description text DEFAULT '',
  stock integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id),
  customer_name text NOT NULL,
  customer_phone text NOT NULL,
  items jsonb NOT NULL,
  total_amount numeric NOT NULL,
  payment_method text NOT NULL,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view products"
  ON products FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Users can view own orders"
  ON orders FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Anyone can create orders"
  ON orders FOR INSERT
  TO public
  WITH CHECK (true);
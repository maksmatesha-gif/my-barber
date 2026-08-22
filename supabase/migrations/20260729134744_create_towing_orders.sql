/*
# Create towing_orders table (single-tenant, no auth)

1. New Tables
- `towing_orders`
  - `id` (uuid, primary key)
  - `name` (text, customer name)
  - `phone` (text, contact phone)
  - `location` (text, pickup location)
  - `vehicle_type` (text, optional — sedan/suv/motorcycle)
  - `distance_km` (integer, optional — estimated distance)
  - `estimated_price` (integer, optional — estimated price in rubles)
  - `status` (text, default 'new' — new/accepted/done)
  - `created_at` (timestamptz, default now)
2. Security
- Enable RLS on `towing_orders`.
- Allow anon + authenticated INSERT (public order form, no sign-in).
- Allow anon + authenticated SELECT (so the site can show a success state if needed; data is operational, not sensitive).
- No update/delete from anon.
*/

CREATE TABLE IF NOT EXISTS towing_orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  location text NOT NULL,
  vehicle_type text,
  distance_km integer,
  estimated_price integer,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE towing_orders ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_towing_orders" ON towing_orders;
CREATE POLICY "anon_insert_towing_orders"
ON towing_orders FOR INSERT
TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_select_towing_orders" ON towing_orders;
CREATE POLICY "anon_select_towing_orders"
ON towing_orders FOR SELECT
TO anon, authenticated USING (true);

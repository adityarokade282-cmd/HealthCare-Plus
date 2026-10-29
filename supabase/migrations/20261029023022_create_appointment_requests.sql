/*
# Create appointment_requests table (single-tenant, no auth)

1. New Tables
- `appointment_requests`
  - `id` (uuid, primary key)
  - `patient_name` (text, required) — full name of the patient
  - `mobile_number` (text, required) — contact phone number
  - `email` (text, optional) — optional email address
  - `doctor` (text, required) — selected doctor name
  - `department` (text, required) — selected department
  - `preferred_date` (date, required) — preferred appointment date
  - `preferred_time` (text, required) — preferred appointment time slot
  - `reason_for_visit` (text, optional) — optional reason for the visit
  - `status` (text, default 'pending') — request status (pending, confirmed, cancelled)
  - `created_at` (timestamptz, default now()) — submission timestamp

2. Security
- Enable RLS on `appointment_requests`.
- Grant INSERT to `anon` + `authenticated` so the public booking form can submit requests.
- Grant SELECT/UPDATE/DELETE only to `authenticated` (staff/admin management, not used by the public form yet).
- INSERT is public (anyone can request an appointment); reads/changes require authentication.
- This is a single-tenant public booking form: no sign-in, so INSERT is allowed for anon.

3. Notes
- The public website only INSERTs new requests; it does not read them back.
- Staff would sign in to view/manage requests (not part of this demo frontend).
*/

CREATE TABLE IF NOT EXISTS appointment_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_name text NOT NULL,
  mobile_number text NOT NULL,
  email text,
  doctor text NOT NULL,
  department text NOT NULL,
  preferred_date date NOT NULL,
  preferred_time text NOT NULL,
  reason_for_visit text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE appointment_requests ENABLE ROW LEVEL SECURITY;

-- Public can submit appointment requests (the booking form has no sign-in).
GRANT INSERT ON appointment_requests TO anon, authenticated;

-- Only authenticated staff can read/manage requests.
GRANT SELECT, UPDATE, DELETE ON appointment_requests TO authenticated;

DROP POLICY IF EXISTS "public_insert_appointments" ON appointment_requests;
CREATE POLICY "public_insert_appointments"
ON appointment_requests FOR INSERT
TO anon, authenticated
WITH CHECK (true);

DROP POLICY IF EXISTS "auth_read_appointments" ON appointment_requests;
CREATE POLICY "auth_read_appointments"
ON appointment_requests FOR SELECT
TO authenticated
USING (true);

DROP POLICY IF EXISTS "auth_update_appointments" ON appointment_requests;
CREATE POLICY "auth_update_appointments"
ON appointment_requests FOR UPDATE
TO authenticated
USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "auth_delete_appointments" ON appointment_requests;
CREATE POLICY "auth_delete_appointments"
ON appointment_requests FOR DELETE
TO authenticated
USING (true);

-- Run this script in the Supabase SQL Editor to create your appointments table

CREATE TABLE appointments (
  id text PRIMARY KEY,
  name text NOT NULL,
  phone text NOT NULL,
  date text NOT NULL,
  "timeSlot" text NOT NULL,
  treatment text NOT NULL,
  "consultationType" text NOT NULL,
  "patientStatus" text NOT NULL,
  location text NOT NULL,
  "createdAt" timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Optional: Add Row Level Security (RLS) policies if you want to lock down the database.
-- For now, the anon key and backend will access it directly.
-- If you want to enable RLS so only your server can access it:
-- ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;
-- CREATE POLICY "Allow public read/write" ON appointments FOR ALL USING (true);

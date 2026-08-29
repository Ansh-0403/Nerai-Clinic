import { Router, Request, Response } from 'express';
import { z } from 'zod';
import { createClient } from '@supabase/supabase-js';

const appointmentsRouter = Router();

const supabaseUrl = process.env.SUPABASE_URL || 'https://vkexnaztveaeppshhzfu.supabase.co';
const supabaseKey = process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZrZXhuYXp0dmVhZXBwc2hoemZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk2NDY4NjQsImV4cCI6MjA5NTIyMjg2NH0.XsY3N_u_5e9mylmT_J-ResOCwA6acIsUe9TLymoeS_M';
const supabase = createClient(supabaseUrl, supabaseKey);

const appointmentSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format"),
  timeSlot: z.string().min(1, "Time slot is required"),
  treatment: z.string().min(1, "Treatment selection is required"),
  consultationType: z.enum(['general', 'specialized']),
  patientStatus: z.enum(['new', 'existing']),
  location: z.enum(['Ahmedabad Studio', 'Baroda Studio']),
});

function getLocalDateString(): string {
  const now = new Date();
  const offset = now.getTimezoneOffset();
  const localDate = new Date(now.getTime() - (offset * 60 * 1000));
  return localDate.toISOString().split('T')[0];
}

appointmentsRouter.get('/', async (req: Request, res: Response) => {
  const todayStr = getLocalDateString();
  
  // 1. Fetch appointments from Supabase >= today
  const { data, error } = await supabase
    .from('appointments')
    .select('*')
    .gte('date', todayStr);

  if (error) {
    console.error("Supabase GET error:", error);
    return res.status(500).json({ success: false, error: "Database query failed" });
  }

  // Optional: Clean up old appointments in Supabase (delete where date < todayStr)
  // We can just do it asynchronously in the background so it doesn't block
  supabase
    .from('appointments')
    .delete()
    .lt('date', todayStr)
    .then(({ error: deleteError }) => {
      if (deleteError) console.error("Error purging old appointments:", deleteError);
    });

  return res.status(200).json({ success: true, appointments: data || [] });
});

appointmentsRouter.post('/', async (req: Request, res: Response) => {
  const result = appointmentSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({ success: false, errors: result.error.flatten().fieldErrors });
  }

  const { name, phone, date, timeSlot, treatment, consultationType, patientStatus, location } = result.data;

  // 1. Past date check
  const todayStr = getLocalDateString();
  if (date < todayStr) {
    return res.status(400).json({
      success: false,
      errors: { date: [`Appointments cannot be booked for past dates. Today is ${todayStr}.`] }
    });
  }

  // 2. Thursday logic
  const [year, month, day] = date.split('-').map(Number);
  const parsedDate = new Date(year, month - 1, day);
  const dayOfWeek = parsedDate.getDay();
  
  let finalizedLocation = location;
  let warningMessage = "";

  if (dayOfWeek === 4) { // Thursday
    if (location !== 'Baroda Studio') {
      finalizedLocation = 'Baroda Studio';
      warningMessage = "Please note: Dr. Pooja Shah is exclusively available at our Baroda studio on Thursdays. Your location preference has been updated to Baroda Studio.";
    }
  }

  // 3. Check for conflicts
  const { data: existing, error: checkError } = await supabase
    .from('appointments')
    .select('id')
    .eq('date', date)
    .eq('timeSlot', timeSlot)
    .eq('location', finalizedLocation)
    .limit(1);

  if (checkError) {
    console.error("Supabase conflict check error:", checkError);
    return res.status(500).json({ success: false, error: "Database check failed" });
  }

  if (existing && existing.length > 0) {
    return res.status(409).json({
      success: false,
      errors: {
        timeSlot: [`The time slot ${timeSlot} on ${date} is already reserved at ${finalizedLocation}. Please select another time or date.`]
      }
    });
  }

  const appointment = {
    id: `apt_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
    name,
    phone,
    date,
    timeSlot,
    treatment,
    consultationType,
    patientStatus,
    location: finalizedLocation,
    createdAt: new Date().toISOString()
  };

  // 4. Insert into Supabase
  const { error: insertError } = await supabase
    .from('appointments')
    .insert([appointment]);

  if (insertError) {
    console.error("Supabase insert error:", insertError);
    return res.status(500).json({ success: false, error: "Failed to save appointment" });
  }

  // 5. Generate WhatsApp Redirection API String
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayName = days[dayOfWeek];
  
  const textMsg = `Hello NERAI Studio, I would like to book an appointment:
• Name: ${name}
• Phone: ${phone}
• Date: ${date} (${dayName})
• Time: ${timeSlot}
• Treatment: ${treatment}
• Type: ${consultationType === 'general' ? 'General Consultation' : 'Specialized Treatment'}
• Status: ${patientStatus === 'new' ? 'New Patient' : 'Existing Patient'}
• Location: ${finalizedLocation}`;

  const encodedMsg = encodeURIComponent(textMsg);
  const whatsappUrl = `https://wa.me/918200527699?text=${encodedMsg}`;

  return res.status(200).json({
    success: true,
    appointment,
    warning: warningMessage || undefined,
    redirectUrl: whatsappUrl
  });
});

export default appointmentsRouter;

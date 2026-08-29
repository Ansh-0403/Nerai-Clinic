import React, { useState, useEffect } from 'react';
import { Phone, Mail, AlertCircle, CheckCircle } from 'lucide-react';
import { treatmentsData } from '../../data/treatments';

const getTodayStr = () => {
  const now = new Date();
  const offset = now.getTimezoneOffset();
  const localDate = new Date(now.getTime() - (offset * 60 * 1000));
  return localDate.toISOString().split('T')[0];
};

const triggerHaptic = (duration: number = 15) => {
  if (typeof navigator !== 'undefined' && navigator.vibrate) {
    navigator.vibrate(duration);
  }
};

export const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: getTodayStr(), // Default to today's date
    timeSlot: '09:30 AM - 10:30 AM',
    treatment: 'Consultation',
    patientStatus: 'new' as 'new' | 'existing',
    location: 'Ahmedabad Studio' as 'Ahmedabad Studio' | 'Vadodara Studio'
  });

  const [notification, setNotification] = useState<{
    type: 'warning' | 'success' | 'error';
    message: string;
  } | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const timeSlots = [
    "09:30 AM - 10:30 AM",
    "10:30 AM - 11:30 AM",
    "11:30 AM - 12:30 PM",
    "03:30 PM - 04:30 PM",
    "04:30 PM - 05:30 PM",
    "05:30 PM - 06:30 PM",
    "06:30 PM - 07:30 PM",
    "07:30 PM - 08:00 PM"
  ];

  // Check Thursday logic client-side
  useEffect(() => {
    if (!formData.date) return;
    
    const [year, month, day] = formData.date.split('-').map(Number);
    const dateObj = new Date(year, month - 1, day);
    const dayOfWeek = dateObj.getDay();

    if (dayOfWeek === 4) { // Thursday
      if (formData.location !== 'Vadodara Studio') {
        setFormData(prev => ({ ...prev, location: 'Vadodara Studio' }));
        setNotification({
          type: 'warning',
          message: "Note: Dr. Pooja Desai operates exclusively at our Vadodara Studio on Thursdays. Location updated automatically."
        });
      }
    } else {
      // Clear scheduling warning if not Thursday
      if (notification?.type === 'warning') {
        setNotification(null);
      }
    }
  }, [formData.date]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    triggerHaptic(8);
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleStatusChange = (status: 'new' | 'existing') => {
    triggerHaptic(12);
    setFormData(prev => ({ ...prev, patientStatus: status }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    triggerHaptic(25);
    e.preventDefault();
    setIsSubmitting(true);

    const [year, month, day] = formData.date.split('-').map(Number);
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayName = formData.date ? days[new Date(year, month - 1, day).getDay()] : "";
    
    const textMsg = `Hello Dr. Pooja Desai / NERAI Studio, I would like to book an appointment:
• Name: ${formData.name}
• Phone: ${formData.phone}
• Date: ${formData.date} (${dayName})
• Time: ${formData.timeSlot}
• Treatment: ${formData.treatment}
• Status: ${formData.patientStatus === 'new' ? 'New Patient' : 'Existing Patient'}
• Location: ${formData.location}`;

    const whatsappUrl = `https://wa.me/918200527699?text=${encodeURIComponent(textMsg)}`;
    
    setNotification({
      type: 'success',
      message: "Opening WhatsApp to send your appointment details..."
    });

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-[1150px] mx-auto items-stretch">
      {/* Left Column: Contact details */}
      <div className="lg:col-span-5 flex flex-col justify-between py-2">
        <div>
          <span className="font-sans text-xs font-bold text-primary tracking-widest uppercase block mb-3">
            Begin Your Journey
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-on-surface leading-tight mb-6">
            Schedule your consultation.
          </h2>
          <p className="font-sans text-sm md:text-base text-on-surface-variant font-light leading-relaxed mb-8">
            Our team will guide you through diagnosis, digital smile scans, and custom orthodontic plan structures.
          </p>

          <div className="space-y-6">
            <a 
              href="tel:+918200527699" 
              className="flex items-center gap-4 group p-1 w-fit"
            >
              <div className="w-10 h-10 border border-outline-variant/60 group-hover:border-primary/50 transition-colors flex items-center justify-center bg-surface-container-low text-primary">
                <Phone size={16} />
              </div>
              <div>
                <span className="font-sans text-[10px] uppercase font-bold text-primary tracking-widest block">
                  Direct Line
                </span>
                <span className="font-sans text-sm text-on-surface font-semibold">
                  +91 82005 27699
                </span>
              </div>
            </a>

            <a 
              href="mailto:neraidentalstudio@gmail.com" 
              className="flex items-center gap-4 group p-1 w-fit"
            >
              <div className="w-10 h-10 border border-outline-variant/60 group-hover:border-primary/50 transition-colors flex items-center justify-center bg-surface-container-low text-primary">
                <Mail size={16} />
              </div>
              <div>
                <span className="font-sans text-[10px] uppercase font-bold text-primary tracking-widest block">
                  Email Studio
                </span>
                <span className="font-sans text-sm text-on-surface font-semibold">
                  neraidentalstudio@gmail.com
                </span>
              </div>
            </a>

            <a 
              href="https://instagram.com/dr_poojashah_" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-4 group p-1 w-fit"
            >
              <div className="w-10 h-10 border border-outline-variant/60 group-hover:border-primary/50 transition-colors flex items-center justify-center bg-surface-container-low text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </div>
              <div>
                <span className="font-sans text-[10px] uppercase font-bold text-primary tracking-widest block">
                  Follow Journey
                </span>
                <span className="font-sans text-sm text-on-surface font-semibold">
                  @dr_poojashah_
                </span>
              </div>
            </a>
          </div>
        </div>

        <div className="border-t border-outline-variant/30 pt-8 mt-8 hidden lg:block text-xs font-light text-on-surface-variant/70">
          Clinical consultation bookings require WhatsApp validation for calendar lock.
        </div>
      </div>

      {/* Right Column: Premium Booking Form */}
      <div className="lg:col-span-7 bg-surface-container border border-outline-variant/60 p-8 md:p-10 flex flex-col justify-between">
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* New / Existing Toggle */}
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => handleStatusChange('new')}
              className={`py-3 text-xs font-bold uppercase tracking-wider border transition-all duration-200 tactile-btn rounded-full ${
                formData.patientStatus === 'new'
                  ? 'bg-primary text-tertiary border-primary'
                  : 'bg-transparent text-on-surface border-outline-variant/60 hover:border-primary/40'
              }`}
            >
              New Patient
            </button>
            <button
              type="button"
              onClick={() => handleStatusChange('existing')}
              className={`py-3 text-xs font-bold uppercase tracking-wider border transition-all duration-200 tactile-btn rounded-full ${
                formData.patientStatus === 'existing'
                  ? 'bg-primary text-tertiary border-primary'
                  : 'bg-transparent text-on-surface border-outline-variant/60 hover:border-primary/40'
              }`}
            >
              Existing Patient
            </button>
          </div>

          {/* Full Name */}
          <div className="flex flex-col space-y-1">
            <label className="font-sans text-[10px] font-bold text-primary uppercase tracking-widest">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Anjali Shah"
              className="bg-surface-container-lowest border border-outline-variant/50 px-4 py-3 text-sm text-on-surface focus:outline-none focus:border-primary transition-all duration-200 input-tactile"
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col space-y-1">
            <label className="font-sans text-[10px] font-bold text-primary uppercase tracking-widest">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. +91 98765 43210"
              className="bg-surface-container-lowest border border-outline-variant/50 px-4 py-3 text-sm text-on-surface focus:outline-none focus:border-primary transition-all duration-200 input-tactile"
            />
          </div>

          {/* Date & Time Slot */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col space-y-1">
              <label className="font-sans text-[10px] font-bold text-primary uppercase tracking-widest">
                Preferred Date
              </label>
              <input
                type="date"
                name="date"
                required
                min={getTodayStr()}
                value={formData.date}
                onChange={handleChange}
                className="bg-surface-container-lowest border border-outline-variant/50 px-4 py-2.5 text-sm text-on-surface focus:outline-none focus:border-primary transition-all duration-200 h-[42px] input-tactile"
              />
            </div>
            
            <div className="flex flex-col space-y-1">
              <label className="font-sans text-[10px] font-bold text-primary uppercase tracking-widest">
                Preferred Slot
              </label>
              <select
                name="timeSlot"
                value={formData.timeSlot}
                onChange={handleChange}
                className="bg-surface-container-lowest border border-outline-variant/50 px-4 py-2.5 text-sm text-on-surface focus:outline-none focus:border-primary transition-all duration-200 h-[42px] input-tactile"
              >
                {timeSlots.map(slot => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Location & Treatment Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col space-y-1">
              <label className="font-sans text-[10px] font-bold text-primary uppercase tracking-widest">
                Clinic Location
              </label>
              <select
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="bg-surface-container-lowest border border-outline-variant/50 px-4 py-2.5 text-sm text-on-surface focus:outline-none focus:border-primary transition-all duration-200 h-[42px] input-tactile"
              >
                <option value="Ahmedabad Studio">Ahmedabad Studio</option>
                <option value="Vadodara Studio">Vadodara Studio</option>
              </select>
            </div>
            
            <div className="flex flex-col space-y-1">
              <label className="font-sans text-[10px] font-bold text-primary uppercase tracking-widest">
                Treatment Interest
              </label>
              <select
                name="treatment"
                value={formData.treatment}
                onChange={handleChange}
                className="bg-surface-container-lowest border border-outline-variant/50 px-4 py-2.5 text-sm text-on-surface focus:outline-none focus:border-primary transition-all duration-200 h-[42px] input-tactile"
              >
                <option value="Consultation">Clinical Consultation</option>
                {treatmentsData.map(t => (
                  <option key={t.id} value={t.title}>{t.title}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Notifications Panel */}
          {notification && (
            <div className={`p-4 border flex gap-3 items-start transition-all duration-200 ${
              notification.type === 'warning'
                ? 'bg-tertiary-container/20 border-tertiary text-on-tertiary-container'
                : notification.type === 'success'
                ? 'bg-primary/5 border-primary text-primary'
                : 'bg-error-container/20 border-error text-on-error-container'
            }`}>
              {notification.type === 'success' ? (
                <CheckCircle size={16} className="mt-0.5 flex-shrink-0" />
              ) : (
                <AlertCircle size={16} className="mt-0.5 flex-shrink-0" />
              )}
              <span className="font-sans text-xs leading-relaxed font-light">
                {notification.message}
              </span>
            </div>
          )}

          {/* Standard CTA Button */}
          <div className="flex justify-center w-full mt-8">
            <button 
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-primary text-tertiary rounded-full border border-primary py-4 font-sans text-sm font-semibold tracking-wider uppercase hover:bg-transparent hover:text-primary transition-all duration-300 tactile-btn ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Verifying Calendar...' : 'Request Appointment'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

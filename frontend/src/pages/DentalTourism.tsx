import { useNavigate } from 'react-router-dom';
import { Header } from '../components/ui/Header';
import { FadeIn } from '../components/ui/fade-in';
import { 
  Plane, 
  Clock, 
  ShieldCheck, 
  MapPin, 
  ArrowRight, 
  Sparkles, 
  HeartHandshake,
  CheckCircle2,
  PhoneCall,
  MessageSquare
} from 'lucide-react';

export default function DentalTourism() {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate('/');
    setTimeout(() => {
      document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  const steps = [
    {
      step: "01",
      title: "Online Digital Consultation",
      desc: "Share your dental concerns, X-rays, intraoral photos, or past records via WhatsApp or email. Dr. Pooja Desai evaluates your case remotely."
    },
    {
      step: "02",
      title: "Custom Treatment Plan & Estimate",
      desc: "Receive a transparent, personalized treatment outline specifying appointments required, expected duration, and detailed cost estimates before you travel."
    },
    {
      step: "03",
      title: "Travel & Schedule Coordination",
      desc: "We align your clinical appointments with your travel itinerary to ensure seamless, prompt sessions with zero wasted vacation time."
    },
    {
      step: "04",
      title: "Treatment & Signature Smile Completion",
      desc: "Experience world-class treatment in our Japanese-inspired clinics in Ahmedabad and Vadodara, followed by remote post-treatment follow-ups."
    }
  ];

  const highlights = [
    {
      icon: ShieldCheck,
      title: "World-Class Clinical Standards",
      desc: "Specialist-led care with modern 3D digital intraoral scanning, Japanese precision protocols, and stringent international sterilization."
    },
    {
      icon: Clock,
      title: "Expedited Treatment Timelines",
      desc: "Prioritized appointment blocks designed specifically for NRI and international visitors to complete treatments within your holiday window."
    },
    {
      icon: Sparkles,
      title: "70–80% Cost Efficiency",
      desc: "Get superior aesthetic restorations, aligners, and orthodontic care at a fraction of North American, European, or Australian clinic prices."
    },
    {
      icon: HeartHandshake,
      title: "Comprehensive Concierge Support",
      desc: "Assistance with airport transit guidance, luxury hotel recommendations in Prahlad Nagar (Ahmedabad) & Vadodara, and local travel tips."
    }
  ];

  const popularTreatments = [
    {
      title: "Clear Aligners & Orthodontics",
      duration: "Digital scanning on Day 1, customized aligner sets delivered before departure with remote app-guided monitoring."
    },
    {
      title: "Smile Makeovers & Porcelain Veneers",
      duration: "Complete cosmetic transformation with custom ceramic veneers and laminates completed in 4 to 6 working days."
    },
    {
      title: "Dental Implants & Fixed Teeth",
      duration: "State-of-the-art guided implant placements, immediate loading protocols, and precision crowns."
    },
    {
      title: "Single-Visit Root Canals & Ceramic Crowns",
      duration: "Microscopic and rotary endodontics paired with digital CAD/CAM ceramic crowns with zero downtime."
    }
  ];

  return (
    <div className="bg-surface min-h-screen text-on-surface flex flex-col font-sans selection:bg-primary/25 selection:text-primary">
      {/* Header */}
      <Header onSelectTreatment={() => navigate('/')} />

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 px-6 md:px-16 overflow-hidden bg-gradient-to-b from-surface-container-low to-surface border-b border-outline-variant/40">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-6">
            <span className="font-sans text-xs font-bold text-tertiary tracking-widest uppercase flex items-center gap-2">
              <Plane size={14} className="text-tertiary" />
              International & NRI Patient Care
            </span>
            <h1 className="font-serif text-4xl md:text-6xl text-on-surface leading-[1.1] font-light">
              Dental Tourism & <br />
              <span className="italic text-tertiary">Global Smile Journeys.</span>
            </h1>
            <p className="font-sans text-sm md:text-lg text-on-surface-variant max-w-[620px] font-light leading-relaxed">
              Combine your journey to Gujarat, India with world-class, specialist-led orthodontic and aesthetic dental care. Experience luxury clinical accuracy at global standards with substantial cost savings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://wa.me/918200527699?text=Hello%20NERAI%20Studio%2C%20I%20am%20planning%20dental%20treatment%20from%20overseas%20(Dental%20Tourism)%20and%20would%20like%20a%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-tertiary border border-primary hover:bg-transparent hover:text-primary px-8 py-4 font-sans text-xs font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer tactile-btn rounded-full text-center flex items-center justify-center gap-2"
              >
                <MessageSquare size={14} />
                Connect via WhatsApp
              </a>
              <button
                onClick={handleBookNow}
                className="border border-outline-variant text-on-surface hover:border-primary hover:text-primary px-8 py-4 font-sans text-xs font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer bg-surface/50 backdrop-blur-sm tactile-btn rounded-full"
              >
                Schedule Virtual Consult
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 bg-surface-container-lowest border border-outline-variant/60 p-8 rounded-3xl shadow-xl space-y-6">
            <h3 className="font-serif text-2xl text-on-surface">Plan Your Visit</h3>
            <div className="space-y-4 font-sans text-xs text-on-surface-variant font-light">
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-primary flex-shrink-0" />
                <span>Studios in <strong>Ahmedabad</strong> & <strong>Vadodara</strong></span>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={16} className="text-primary flex-shrink-0" />
                <span>Priority expedited appointment scheduling</span>
              </div>
              <div className="flex items-center gap-3">
                <PhoneCall size={16} className="text-primary flex-shrink-0" />
                <span>Direct line: +91 82005 27699</span>
              </div>
            </div>
            <div className="border-t border-outline-variant/40 pt-4">
              <span className="font-sans text-[10px] text-tertiary uppercase font-bold tracking-widest block mb-1">
                Virtual Diagnosis
              </span>
              <p className="font-sans text-xs text-on-surface-variant font-light leading-relaxed">
                Send us your records before flying down to get a complete treatment duration and fee breakdown upfront.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Nerai for Dental Tourism */}
      <section className="py-24 px-6 md:px-16 bg-surface">
        <FadeIn className="max-w-[1280px] mx-auto space-y-16">
          <div className="text-center max-w-[700px] mx-auto space-y-4">
            <span className="font-sans text-xs font-bold text-primary tracking-widest uppercase block">
              The NERAI Advantage
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-on-surface leading-tight font-light">
              Why Global Patients Choose Nerai
            </h2>
            <p className="font-sans text-sm md:text-base text-on-surface-variant font-light leading-relaxed">
              We bridge the gap between world-class orthodontic standards and compassionate Indian hospitality in tranquil, Japanese-inspired studio spaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((h, idx) => {
              const Icon = h.icon;
              return (
                <div 
                  key={idx}
                  className="bg-surface-container-low border border-outline-variant/60 p-8 rounded-3xl flex flex-col justify-between hover:border-primary/50 transition-all duration-300 tactile-card"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                      <Icon size={22} />
                    </div>
                    <h3 className="font-serif text-xl text-on-surface leading-snug">
                      {h.title}
                    </h3>
                    <p className="font-sans text-xs md:text-sm text-on-surface-variant font-light leading-relaxed">
                      {h.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </section>

      {/* How It Works (Step-by-Step Roadmap) */}
      <section className="py-24 px-6 md:px-16 bg-surface-container-low border-y border-outline-variant/40">
        <FadeIn className="max-w-[1280px] mx-auto space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-[650px] space-y-4">
              <span className="font-sans text-xs font-bold text-primary tracking-widest uppercase block">
                Seamless Roadmap
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-on-surface leading-tight font-light">
                How Your Dental Journey Works
              </h2>
            </div>
            <p className="font-sans text-sm text-on-surface-variant font-light max-w-[400px] leading-relaxed">
              Designed from start to finish to ensure zero friction, predictable outcomes, and total peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, idx) => (
              <div 
                key={idx}
                className="relative bg-surface border border-outline-variant/60 p-8 rounded-3xl flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <span className="font-serif text-3xl font-light text-tertiary block">
                    {s.step}
                  </span>
                  <h4 className="font-sans text-base font-semibold text-on-surface">
                    {s.title}
                  </h4>
                  <p className="font-sans text-xs text-on-surface-variant font-light leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Popular Treatments for Overseas Visitors */}
      <section className="py-24 px-6 md:px-16 bg-surface">
        <FadeIn className="max-w-[1280px] mx-auto space-y-16">
          <div className="text-center max-w-[650px] mx-auto space-y-4">
            <span className="font-sans text-xs font-bold text-primary tracking-widest uppercase block">
              Curated Services
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-on-surface leading-tight font-light">
              Popular Treatments for NRI & International Visitors
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
            {popularTreatments.map((t, idx) => (
              <div 
                key={idx}
                className="bg-surface-container-low border border-outline-variant/60 p-8 rounded-3xl flex items-start gap-5 hover:border-primary/45 transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-full bg-tertiary/20 flex items-center justify-center text-tertiary flex-shrink-0 mt-1">
                  <CheckCircle2 size={18} />
                </div>
                <div className="space-y-2">
                  <h4 className="font-serif text-xl text-on-surface">{t.title}</h4>
                  <p className="font-sans text-xs md:text-sm text-on-surface-variant font-light leading-relaxed">
                    {t.duration}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="bg-primary text-tertiary p-10 md:p-14 rounded-3xl flex flex-col md:flex-row justify-between items-center gap-8 shadow-2xl border border-tertiary/30 max-w-[1000px] mx-auto">
            <div className="space-y-3 text-center md:text-left">
              <h3 className="font-serif text-2xl md:text-3xl text-surface">
                Ready to plan your trip to India?
              </h3>
              <p className="font-sans text-xs md:text-sm text-surface-container-highest font-light max-w-[500px]">
                Connect directly with Dr. Pooja Desai and our patient concierge team to receive a preliminary evaluation and schedule.
              </p>
            </div>
            <a
              href="https://wa.me/918200527699?text=Hello%20Dr.%20Pooja%20Desai%2C%20I%20would%20like%20to%20inquire%20about%20Dental%20Tourism%20at%20NERAI%20Studio."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-tertiary text-on-tertiary-container hover:bg-surface hover:text-primary px-8 py-4 font-sans text-xs font-bold tracking-widest uppercase transition-all duration-300 rounded-full whitespace-nowrap tactile-btn flex items-center gap-2"
            >
              Start WhatsApp Consultation
              <ArrowRight size={14} />
            </a>
          </div>
        </FadeIn>
      </section>

      {/* Footer Section */}
      <footer className="bg-surface-container-highest border-t border-outline-variant/60 py-16 px-6 md:px-16 mt-auto">
        <div className="max-w-[1280px] mx-auto">
          <div className="border-t border-outline-variant/40 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="font-sans text-[10px] text-on-surface-variant/80 tracking-widest uppercase">
              &copy; {new Date().getFullYear()} NERAI Orthodontic & Dental Studio. All Rights Reserved.
            </span>
            <span className="font-sans text-[11px] text-primary tracking-wider font-medium italic">
              "Designed with intention for every smile."
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

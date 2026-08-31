import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../components/ui/Header';
import { BeforeAfterSlider } from '../components/ui/BeforeAfterSlider';
import { TestimonialSlider } from '../components/ui/TestimonialSlider';
import { LocationMatrix } from '../components/ui/LocationMatrix';
import { StudioShowcase } from '../components/ui/StudioShowcase';
import { BookingForm } from '../components/ui/BookingForm';
import { TreatmentViewer } from '../components/ui/TreatmentViewer';
import { treatmentsData, type Treatment } from '../data/treatments';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { FadeIn } from '../components/ui/fade-in';

export default function Home() {
  const navigate = useNavigate();
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleSelectTreatment = (id: string) => {
    const treatment = treatmentsData.find(t => t.id === id);
    if (treatment) {
      setSelectedTreatment(treatment);
    }
  };

  const handleBookTreatment = (treatmentTitle: string) => {
    setSelectedTreatment(null);
    // Find the booking form element
    const bookingFormSection = document.getElementById('booking');
    if (bookingFormSection) {
      bookingFormSection.scrollIntoView({ behavior: 'smooth' });
    }
    // Update the booking form state by selecting this treatment
    const selectElem = document.getElementsByName('treatment')[0] as HTMLSelectElement;
    if (selectElem) {
      selectElem.value = treatmentTitle;
      // Trigger native change event so React form state updates
      const event = new Event('change', { bubbles: true });
      selectElem.dispatchEvent(event);
    }
  };

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      // Find the exact width of one card plus gap
      const cardElement = carouselRef.current.children[0] as HTMLElement;
      const scrollAmount = cardElement ? cardElement.offsetWidth + 32 : 392; // 32px is gap-8
      carouselRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-surface min-h-screen text-on-surface flex flex-col font-sans selection:bg-primary/25 selection:text-primary">
      {/* Sticky Header */}
      <Header onSelectTreatment={handleSelectTreatment} />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center pt-24 pb-16 md:py-0 overflow-hidden bg-surface">
        {/* Background Image with Light Mask */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-bg.jpg" 
            alt="NERAI Dental Studio"
            className="w-full h-full object-cover opacity-65"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface/90 via-surface/55 to-surface/20" />
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto w-full px-6 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-6 md:space-y-8">
            <h1 className="font-serif text-4xl md:text-6xl lg:text-[70px] leading-[1.05] tracking-tight font-light text-on-surface">
              Expert Orthodontics. <br />
              <span className="italic text-tertiary">Exceptional Smiles.</span>
            </h1>
            <p className="font-sans text-sm md:text-lg text-on-surface-variant max-w-[580px] leading-relaxed font-light">
              Experience luxury dental care combined with clinical precision. Creating custom aligner frameworks and aesthetic restorations in Ahmedabad and Vadodara.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary text-tertiary border border-primary hover:bg-transparent hover:text-primary px-8 py-4 font-sans text-xs font-bold tracking-widest uppercase transition-all duration-350 cursor-pointer tactile-btn rounded-full"
              >
                Book Appointment
              </button>
              <button
                onClick={() => document.getElementById('treatments')?.scrollIntoView({ behavior: 'smooth' })}
                className="border border-outline-variant text-on-surface hover:border-primary hover:text-primary px-8 py-4 font-sans text-xs font-bold tracking-widest uppercase transition-all duration-350 cursor-pointer bg-surface/50 backdrop-blur-sm tactile-btn rounded-full"
              >
                Explore Treatments
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section ("Artistry Meets Clinical Accuracy") */}
      <section id="about" className="py-24 bg-surface px-6 md:px-16 scroll-mt-12 overflow-hidden">
        <FadeIn className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="font-serif text-3xl md:text-[44px] text-on-surface leading-tight font-light">
              About Nerai
            </h2>
            <div className="font-sans text-sm md:text-base text-on-surface-variant space-y-6 leading-relaxed font-light">
              <p>
                Nerai is inspired by the Japanese philosophy of purpose, intention, and precision. Every detail of our practice, from its tranquil, minimalist interiors to our personalized treatment approach, reflects these values.
              </p>
              <p>
                Founded by Dr. Pooja Desai, a specialist orthodontist, Nerai was created with a vision to redefine the dental experience. We believe dentistry is more than treating teeth, it is about restoring confidence, enhancing well-being, and creating smiles that last a lifetime.
              </p>
              <p>
                Building on the trust earned through our established practice in Vadodara, Nerai brings the same commitment to excellence to Ahmedabad, blending advanced technology with compassionate, patient-centered care.
              </p>
            </div>
          </div>

          {/* Portrait Image */}
          <div className="lg:col-span-5 relative flex flex-col items-center">
            <div className="border-2 border-tertiary p-2 bg-surface rounded-full shadow-lg">
              <img 
                src="/Dr_pooja.jpeg" 
                alt="Dr. Pooja Desai" 
                className="w-[280px] h-[280px] md:w-[400px] md:h-[400px] object-cover rounded-full"
              />
            </div>
            <div className="mt-4 md:mt-0 md:absolute md:-bottom-2 md:-left-4 bg-primary text-tertiary p-4 md:p-5 border border-tertiary/40 rounded-xl shadow-xl text-center md:text-left w-fit max-w-[90%] z-10">
              <p className="font-serif text-base md:text-lg leading-none mb-1.5 md:mb-1">Dr. Pooja Desai</p>
              <p className="font-sans text-[10px] md:text-[9px] uppercase tracking-widest text-surface-container-highest">
                MDS Orthodontics & Dentofacial Orthopaedics
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Why Choose Nerai Section */}
        <FadeIn className="max-w-[1280px] mx-auto mt-24 lg:mt-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-6">
              <h3 className="font-serif text-4xl md:text-5xl text-on-surface leading-tight">
                Why Choose Nerai?
              </h3>
              <p className="font-sans text-sm md:text-base text-on-surface-variant leading-relaxed font-light">
                At Nerai, every smile is treated with intention and every patient with compassion.
              </p>
              <p className="font-sans text-sm text-primary font-medium pt-2 tracking-wide">
                Because every smile deserves thoughtful care.
              </p>
            </div>
            
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {[
                "Specialist-led orthodontic and dental care",
                "Personalized treatment plans tailored to your needs",
                "Modern technology for precise, predictable outcomes",
                "Japanese-inspired calming environment designed to ease dental anxiety",
                "Ethical, transparent, and evidence-based treatment",
                "Comfortable experience for patients of all ages",
                "Focus on long-term oral health, function, and aesthetics"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0"></div>
                  <p className="font-sans text-base text-on-surface-variant font-light leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Curated Treatments Section */}
      <section id="treatments" className="py-24 bg-surface-container-low border-y border-outline-variant/40 px-6 md:px-16 scroll-mt-12 overflow-hidden">
        <FadeIn className="max-w-[1280px] mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
            <div className="max-w-[600px]">
              <span className="font-sans text-xs font-bold text-primary tracking-widest uppercase block mb-3">
                Specialized Care
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-on-surface leading-tight mb-4">
                Curated Treatments
              </h2>
              <p className="font-sans text-base text-on-surface-variant font-light leading-relaxed">
                Specialized clinical solutions designed to satisfy your specific structural alignment and aesthetic requests.
              </p>
            </div>
          </div>

          {/* Fade Mask Wrapper */}
          <div className="relative -mx-6 md:-mx-16 flex items-center">
            
            {/* Left Side Arrow */}
            <button 
              onClick={() => scrollCarousel('left')}
              className="absolute left-2 md:left-6 z-20 bg-surface hover:bg-primary border border-outline-variant/50 p-3 rounded-full shadow-sm transition-all duration-300 text-primary hover:text-surface hover:scale-105 flex items-center justify-center group/arrow"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} className="transform group-hover/arrow:-translate-x-1 transition-transform duration-300" />
            </button>

            <div className="w-full" style={{ 
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)', 
              maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)' 
            }}>
              {/* Scrollable Container */}
              <div 
                ref={carouselRef}
                className="flex overflow-x-auto snap-x snap-mandatory gap-6 lg:gap-8 pb-16 pt-4 px-16 md:px-24 hide-scrollbar"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {treatmentsData.map((treatment) => (
                  <div 
                    key={treatment.id} 
                    className="group/card relative w-[85vw] md:w-[45vw] lg:w-[calc(33.333%-1.33rem)] snap-center shrink-0 bg-gradient-to-b from-surface to-surface-container-low border border-outline-variant/40 p-6 lg:p-8 flex flex-col justify-between h-[460px] rounded-[24px] shadow-[0_4px_24px_rgb(0,0,0,0.04)] hover:shadow-[0_24px_48px_rgb(0,0,0,0.08)] transform transition-all duration-700 hover:-translate-y-2 overflow-hidden"
                  >
                    {/* Subtle background accent glow on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none" />

                    <div className="relative z-10 flex flex-col h-full justify-between">
                      <div>
                        {/* Treatment Image Frame */}
                        <div className="w-full h-[160px] bg-surface-container-highest rounded-[16px] overflow-hidden mb-5 border border-outline-variant/60 shadow-sm">
                          <img 
                            src={treatment.imageUrl} 
                            alt={treatment.title}
                            className="w-full h-full object-cover object-center group-hover/card:scale-105 transition-transform duration-500"
                          />
                        </div>

                        <h3 className="font-serif text-xl md:text-2xl text-on-surface leading-tight mb-2">
                          {treatment.title}
                        </h3>
                        <p className="font-sans text-xs md:text-sm text-on-surface-variant font-light leading-relaxed line-clamp-3">
                          {treatment.description}
                        </p>
                      </div>
                      
                      <button
                        onClick={() => handleSelectTreatment(treatment.id)}
                        className="relative z-10 font-sans text-[11px] font-bold text-primary hover:text-tertiary flex items-center justify-between w-full uppercase tracking-widest mt-4 group/btn"
                      >
                        <span className="border-b border-primary/20 pb-1 group-hover/btn:border-tertiary transition-colors duration-300">
                          Explore Details
                        </span>
                        <span className="bg-primary/5 p-2.5 rounded-full group-hover/btn:bg-tertiary/10 group-hover/btn:-rotate-45 transition-all duration-500 shadow-sm">
                          <ArrowRight size={14} className="group-hover/btn:text-tertiary" />
                        </span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side Arrow */}
            <button 
              onClick={() => scrollCarousel('right')}
              className="absolute right-2 md:right-6 z-20 bg-surface hover:bg-primary border border-outline-variant/50 p-3 rounded-full shadow-sm transition-all duration-300 text-primary hover:text-surface hover:scale-105 flex items-center justify-center group/arrow"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} className="transform group-hover/arrow:translate-x-1 transition-transform duration-300" />
            </button>

          </div>

        </FadeIn>
      </section>

      {/* Smile Gallery Section (Before & After Preview) */}
      <section id="gallery" className="py-24 bg-surface-dim px-6 md:px-16 scroll-mt-12 overflow-hidden">
        <FadeIn className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-6 w-full">
            <div>
              <BeforeAfterSlider 
                beforeImage="/images/gallery/gallery-1-before.jpg"
                afterImage="/images/gallery/gallery-1-after.jpg"
                aspectRatioClass="aspect-[16/9]"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 flex flex-col justify-center items-start">
            <span className="font-sans text-[10px] font-bold text-tertiary tracking-widest uppercase block mb-1">
              Real Clinical Results
            </span>
            <h2 className="font-serif text-3xl md:text-[42px] text-on-surface leading-tight font-light mb-4">
              Signature Smile Gallery
            </h2>
            <p className="font-sans text-sm md:text-base text-on-surface-variant font-light leading-relaxed max-w-[480px] mb-6">
              Witness the life-changing results of our specialized orthodontic treatments. Every smile in our gallery represents a unique journey of precision and renewed confidence.
            </p>
            
            <button
              onClick={() => {
                window.scrollTo(0, 0);
                navigate('/gallery');
              }}
              className="bg-primary text-tertiary border border-primary hover:bg-surface hover:text-primary px-8 py-3.5 font-sans text-xs font-bold tracking-widest uppercase transition-all duration-350 cursor-pointer tactile-btn rounded-full"
            >
              View Full Gallery
            </button>
          </div>

        </FadeIn>
      </section>

      {/* Testimonials Section */}
      <section id="reviews" className="py-24 bg-surface border-t border-outline-variant/40 px-6 md:px-16 overflow-hidden">
        <FadeIn className="max-w-[1280px] mx-auto">
          <TestimonialSlider />
        </FadeIn>
      </section>

      {/* Studio Showcase Gallery Section */}
      <section id="studios" className="py-24 bg-surface border-t border-outline-variant/40 px-6 md:px-16 scroll-mt-12 overflow-hidden">
        <FadeIn className="max-w-[1280px] mx-auto">
          <StudioShowcase />
        </FadeIn>
      </section>

      {/* Locations Matrix Section */}
      <section id="locations" className="py-24 bg-surface-container-low border-t border-outline-variant/40 px-6 md:px-16 scroll-mt-12 overflow-hidden">
        <FadeIn className="max-w-[1280px] mx-auto">
          <LocationMatrix />
        </FadeIn>
      </section>

      {/* Contact & Booking Section */}
      <section id="contact" className="py-24 bg-surface border-t border-outline-variant/40 px-6 md:px-16 scroll-mt-12 overflow-hidden">
        <div id="booking" className="scroll-mt-16">
          <FadeIn className="max-w-[1280px] mx-auto">
            <BookingForm />
          </FadeIn>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-surface-container-highest border-t border-outline-variant/60 py-16 px-6 md:px-16 overflow-hidden">
        <FadeIn className="max-w-[1280px] mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            
            {/* Brand column */}
            <div className="md:col-span-7 space-y-6">
              <h3 className="font-serif text-2xl tracking-wide">NERAI</h3>
              <p className="font-sans text-xs md:text-sm text-on-surface-variant font-light leading-relaxed max-w-[400px]">
                Providing expert orthodontics and premium aesthetic dental restorations with professional scientific integrity.
              </p>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-5 space-y-4">
              <h4 className="font-sans text-xs font-bold text-primary tracking-widest uppercase">
                Quick Links
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <button 
                    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                    className="font-sans text-xs text-on-surface-variant hover:text-primary font-light"
                  >
                    About Nerai
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('treatments')?.scrollIntoView({ behavior: 'smooth' })}
                    className="font-sans text-xs text-on-surface-variant hover:text-primary font-light"
                  >
                    Curated Treatments
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
                    className="font-sans text-xs text-on-surface-variant hover:text-primary font-light"
                  >
                    Smile Gallery
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('locations')?.scrollIntoView({ behavior: 'smooth' })}
                    className="font-sans text-xs text-on-surface-variant hover:text-primary font-light"
                  >
                    Our Studios
                  </button>
                </li>
              </ul>
            </div>

          </div>

          {/* Copyright details */}
          <div className="border-t border-outline-variant/40 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="font-sans text-[10px] text-on-surface-variant/80 tracking-widest uppercase">
              &copy; {new Date().getFullYear()} NERAI Orthodontic & Dental Studio. All Rights Reserved.
            </span>
            <span className="font-sans text-[11px] text-primary tracking-wider font-medium italic">
              "Designed with intention for every smile."
            </span>
          </div>

        </FadeIn>
      </footer>

      {/* Treatments Detail overlay */}
      <TreatmentViewer
        treatment={selectedTreatment}
        onClose={() => setSelectedTreatment(null)}
        onBook={handleBookTreatment}
      />
    </div>
  );
}


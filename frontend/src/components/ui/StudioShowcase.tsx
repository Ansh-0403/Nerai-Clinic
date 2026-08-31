import React, { useState, useEffect } from 'react';
import { MapPin, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface StudioImage {
  url: string;
  caption: string;
  tag: string;
}

interface StudioDetail {
  id: string;
  name: string;
  city: string;
  description: string;
  highlights: string[];
  images: StudioImage[];
}

const studiosData: StudioDetail[] = [
  {
    id: 'ahmedabad',
    name: 'Ahmedabad Dental Studio',
    city: 'Ahmedabad',
    description: 'Designed with Japanese minimalism and warm tactile wood accents, creating a calm, soothing sanctuary for specialized orthodontic and aesthetic care.',
    highlights: [
      'A multidisciplinary team of dental specialists providing expert care for braces, aligners, implants, dentures, root canals, oral surgery, and cosmetic dentistry',
      'Personalized treatment plans tailored to your needs',
      'Advanced technology for precise, predictable outcomes',
      'Ethical, evidence-based treatment with transparent communication',
      'A calm, Japanese-inspired environment designed for your comfort'
    ],
    images: [
      {
        url: '/images/studios/ahmedabad/ahmedabad-1.jpg',
        caption: 'Orthodontic & Clinical Treatment Suite',
        tag: 'Treatment Suite'
      },
      {
        url: '/images/studios/ahmedabad/ahmedabad-7.jpg',
        caption: 'Dr. Pooja Desai MDS Orthodontics in Clinical Suite',
        tag: 'Dr. Pooja Desai'
      },
      {
        url: '/images/studios/ahmedabad/ahmedabad-8.jpg',
        caption: 'Signature NERAI Gold Wall & Fluted Reception Desk',
        tag: 'Reception Desk'
      },
      {
        url: '/images/studios/ahmedabad/ahmedabad-6.jpg',
        caption: 'Tactile Wood & Fluted Texture Reception Counter',
        tag: 'Reception Detail'
      },
      {
        url: '/images/studios/ahmedabad/ahmedabad-2.jpg',
        caption: 'Tranquil Japanese-Inspired Waiting Lounge',
        tag: 'Lounge'
      },
      {
        url: '/images/studios/ahmedabad/ahmedabad-4.jpg',
        caption: 'Woven Bamboo Lighting & Shoji Wood Trim',
        tag: 'Interior Aesthetic'
      },
      {
        url: '/images/studios/ahmedabad/ahmedabad-5.jpg',
        caption: 'Private Specialist Consultation Suite',
        tag: 'Consultation Room'
      },
      {
        url: '/images/studios/ahmedabad/ahmedabad-3.jpg',
        caption: 'Reception Console & Team Experience Wall',
        tag: 'Team Wall'
      }
    ]
  },
  {
    id: 'baroda',
    name: 'Vadodara Dental Studio',
    city: 'Vadodara',
    description: 'Our founding studio in Vadodara provides specialist-led orthodontic consultations and complete aesthetic dentistry in a welcoming, patient-first setting.',
    highlights: [
      'Specialist Orthodontic Consultation Suite',
      'Comfortable & Relaxing Patient Lounge',
      'Complete Digital Intraoral Scanning'
    ],
    images: [
      {
        url: '/images/studios/vadodara/vadodara-3.jpg',
        caption: 'Ergonomic Orthodontic Suite & Marble Wall Backdrop',
        tag: 'Clinical Suite'
      },
      {
        url: '/images/studios/vadodara/vadodara-2.jpg',
        caption: 'Mint Green Treatment Chair & Marble Backing',
        tag: 'Treatment Chair'
      },
      {
        url: '/images/studios/vadodara/vadodara-5.jpg',
        caption: 'Wide View of Vadodara Treatment Operatory',
        tag: 'Operatory View'
      },
      {
        url: '/images/studios/vadodara/vadodara-1.jpg',
        caption: 'Patient View of Clinical Treatment Setup',
        tag: 'Clinical Setup'
      },
      {
        url: '/images/studios/vadodara/vadodara-4.jpg',
        caption: 'Direct Angle View of Orthodontic Chair',
        tag: 'Direct Suite View'
      }
    ]
  }
];

export const StudioShowcase: React.FC = () => {
  const [activeStudioId, setActiveStudioId] = useState<string>('ahmedabad');
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setIsLightboxOpen(false);
        if (e.key === 'ArrowRight') handleNextImage();
        if (e.key === 'ArrowLeft') handlePrevImage();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isLightboxOpen, activeStudioId]);

  const activeStudio = studiosData.find(s => s.id === activeStudioId) || studiosData[0];
  const activeImage = activeStudio.images[activeImageIndex] || activeStudio.images[0];

  const handleTabChange = (id: string) => {
    setActiveStudioId(id);
    setActiveImageIndex(0);
  };

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % activeStudio.images.length);
  };

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + activeStudio.images.length) % activeStudio.images.length);
  };

  return (
    <div className="w-full">
      {/* Header & City Tabs */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
        <div>
          <span className="font-sans text-xs font-bold text-primary tracking-widest uppercase block mb-3">
            Studio Spaces
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-on-surface leading-tight">
            Explore Our Studios.
          </h2>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center gap-3 bg-surface-container border border-outline-variant/60 p-1.5 rounded-full w-fit">
          <button
            onClick={() => handleTabChange('ahmedabad')}
            className={`px-6 py-2.5 rounded-full font-sans text-xs font-bold tracking-wider uppercase transition-all duration-300 ${
              activeStudioId === 'ahmedabad'
                ? 'bg-primary text-tertiary shadow-md'
                : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            Ahmedabad Studio
          </button>
          <button
            onClick={() => handleTabChange('baroda')}
            className={`px-6 py-2.5 rounded-full font-sans text-xs font-bold tracking-wider uppercase transition-all duration-300 ${
              activeStudioId === 'baroda'
                ? 'bg-primary text-tertiary shadow-md'
                : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            Vadodara Studio
          </button>
        </div>
      </div>

      {/* Main Studio View & Gallery */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        
        {/* Left: Main Featured Image & Thumbnails */}
        <div className="lg:col-span-7 flex flex-col space-y-4">
          
          {/* Main Hero Image */}
          <div className="relative group rounded-3xl overflow-hidden border border-outline-variant/60 aspect-[16/10] bg-surface-container shadow-lg">
            <img
              src={activeImage.url}
              alt={activeImage.caption}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Expand / Lightbox Button */}
            <button
              onClick={() => setIsLightboxOpen(true)}
              className="absolute top-4 right-4 z-10 p-3 bg-surface/90 hover:bg-primary text-primary hover:text-surface border border-outline-variant/40 rounded-full transition-all duration-300 shadow-md"
              aria-label="Expand image"
            >
              <Maximize2 size={16} />
            </button>

            {/* Arrow Nav (if multiple images) */}
            {activeStudio.images.length > 1 && (
              <>
                <button
                  onClick={handlePrevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 bg-surface/80 hover:bg-primary text-primary hover:text-surface rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 bg-surface/80 hover:bg-primary text-primary hover:text-surface rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                >
                  <ChevronRight size={18} />
                </button>
              </>
            )}
          </div>

          {/* Thumbnail Selector */}
          {activeStudio.images.length > 1 && (
            <div className="grid grid-cols-4 gap-3">
              {activeStudio.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative aspect-[16/10] rounded-xl overflow-hidden border-2 transition-all duration-300 cursor-pointer ${
                    activeImageIndex === idx
                      ? 'border-tertiary shadow-md scale-[1.02]'
                      : 'border-transparent opacity-65 hover:opacity-100'
                  }`}
                >
                  <img src={img.url} alt={img.caption} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Studio Details & Highlights */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-surface-container-low border border-outline-variant/60 p-8 md:p-10 rounded-3xl">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-tertiary" />
              <span className="font-sans text-xs font-bold text-tertiary tracking-widest uppercase">
                {activeStudio.city} Studio
              </span>
            </div>

            <h3 className="font-serif text-3xl text-on-surface leading-tight">
              {activeStudio.name}
            </h3>

            <p className="font-sans text-sm md:text-base text-on-surface-variant font-light leading-relaxed">
              {activeStudio.description}
            </p>

            <div className="border-t border-outline-variant/40 pt-6">
              <h4 className="font-sans text-xs font-bold text-primary tracking-widest uppercase mb-4">
                Studio Highlights
              </h4>
              <ul className="space-y-3">
                {activeStudio.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-tertiary mt-2 shrink-0"></div>
                    <span className="font-sans text-sm text-on-surface-variant font-light leading-snug">
                      {h}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-outline-variant/40 mt-8">
            <button
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full bg-primary text-tertiary border border-primary hover:bg-transparent hover:text-primary py-3.5 px-6 font-sans text-xs font-bold tracking-widest uppercase transition-all duration-300 rounded-full tactile-btn"
            >
              Book Visit at {activeStudio.city}
            </button>
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md select-none"
          data-lenis-prevent
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-4 right-4 md:top-6 md:right-6 z-50 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-all duration-200 cursor-pointer"
            aria-label="Close zoomed view"
          >
            <X size={24} />
          </button>

          {/* Previous Button */}
          {activeStudio.images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevImage();
              }}
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-50 text-white/90 hover:text-white bg-black/50 hover:bg-primary/90 border border-white/20 p-3 md:p-3.5 rounded-full transition-all duration-200 shadow-xl cursor-pointer hover:scale-105"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          {/* Centered Image Container */}
          <div 
            className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center px-4" 
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeImage.url}
              alt={activeImage.caption}
              className="max-h-[80vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl"
            />
            {activeImage.caption && (
              <p className="font-sans text-xs md:text-sm text-white/80 mt-4 text-center tracking-wide font-light">
                {activeImage.caption} ({activeImageIndex + 1} / {activeStudio.images.length})
              </p>
            )}
          </div>

          {/* Next Button */}
          {activeStudio.images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNextImage();
              }}
              className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-50 text-white/90 hover:text-white bg-black/50 hover:bg-primary/90 border border-white/20 p-3 md:p-3.5 rounded-full transition-all duration-200 shadow-xl cursor-pointer hover:scale-105"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

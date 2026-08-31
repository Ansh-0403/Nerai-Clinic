import React, { useState } from 'react';
import { MapPin, Clock, ExternalLink } from 'lucide-react';

interface Studio {
  id: string;
  name: string;
  address: string;
  hours: string;
  days: string;
  phone: string;
  imageUrl: string;
  mapEmbedUrl: string;
  googleMapsUrl: string;
}

const studiosData: Studio[] = [
  {
    id: 'ahmedabad',
    name: 'Ahmedabad Clinic',
    address: 'FF-12, Riviera Arcade, Ground Floor, Prahlad Nagar Rd, opp. AMC Parking, Prahlad Nagar, Ahmedabad, Gujarat 380015',
    days: 'Monday to Saturday',
    hours: 'Mon – Sat: 10:00 AM – 1:00 PM, 4:00 PM – 8:00 PM | Sun: On Prior Appointments Only',
    phone: '+91 82005 27699',
    imageUrl: '/images/studios/ahmedabad/ahmedabad-1.jpg',
    mapEmbedUrl: 'https://maps.google.com/maps?q=NERAI+Orthodontic+and+Dental+Studio,+Riviera+Arcade,+Ahmedabad&t=&z=15&ie=UTF8&iwloc=&output=embed',
    googleMapsUrl: 'https://maps.app.goo.gl/NzNe1nG3kRcKE13C7?g_st=iw'
  },
  {
    id: 'baroda',
    name: 'Vadodara Clinic',
    address: '308-310, V3 Landmark, Beside KIA Showroom, Narayanwadi, Atladara, Vadodara, Gujarat 390012',
    days: 'Monday to Saturday',
    hours: 'Mon – Sat: 10:00 AM – 1:00 PM, 4:00 PM – 8:00 PM | Sun: On Prior Appointments Only',
    phone: '+91 82005 27699',
    imageUrl: '/images/studios/vadodara/vadodara-3.jpg',
    mapEmbedUrl: 'https://maps.google.com/maps?q=Dr.+Pooja%27s+Braces+centre,+V3+Landmark,+308-310,+beside+KIA+showroom,+Narayanwadi,+Atladara,+Vadodara,+Gujarat+390012&t=&z=16&ie=UTF8&iwloc=&output=embed',
    googleMapsUrl: 'https://maps.app.goo.gl/bNUsu5HNMm1i9WHS6?g_st=iw'
  }
];

export const LocationMatrix: React.FC = () => {
  const [showMap, setShowMap] = useState<Record<string, boolean>>({
    ahmedabad: false,
    baroda: false
  });

  const toggleMap = (id: string) => {
    setShowMap(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="w-full">
      <div className="text-center mb-16">
        <span className="font-sans text-xs font-bold text-primary tracking-widest uppercase block mb-3">
          Our Studios
        </span>
        <h2 className="font-serif text-3xl md:text-5xl text-on-surface leading-tight mb-4">
          Visit us in Ahmedabad & Vadodara.
        </h2>
        <p className="font-sans text-sm text-on-surface-variant font-light max-w-[600px] mx-auto leading-relaxed">
          State-of-the-art clinical environments designed to combine digital health accuracy with luxury aesthetics.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1100px] mx-auto">
        {studiosData.map((studio) => (
          <div 
            key={studio.id}
            className="border border-outline-variant/60 flex flex-col bg-surface hover:border-primary/45 transition-colors duration-300"
          >
            {/* Visual Section (Image or Map) */}
            <div className="relative aspect-[16/10] overflow-hidden border-b border-outline-variant/40 bg-surface-container">
              {showMap[studio.id] ? (
                <iframe
                  title={`${studio.name} Map`}
                  src={studio.mapEmbedUrl}
                  className="w-full h-full border-none"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              ) : (
                <img 
                  src={studio.imageUrl} 
                  alt={studio.name}
                  className="w-full h-full object-cover brightness-95 transition-all duration-700"
                />
              )}
              
              {/* Floating Branch hours Badge removed */}
            </div>

            {/* Content Section */}
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="font-serif text-2xl text-on-surface mb-4">
                {studio.name}
              </h3>
              
              <div className="space-y-4 mb-8 flex-grow">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-primary mt-1 flex-shrink-0" />
                  <p className="font-sans text-xs md:text-sm text-on-surface-variant leading-relaxed font-light">
                    {studio.address}
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock size={16} className="text-primary flex-shrink-0 mt-0.5" />
                  <div className="font-sans text-xs md:text-sm text-on-surface-variant font-light space-y-1">
                    <p><strong className="font-semibold text-on-surface">Mon – Sat:</strong> 10:00 AM – 1:00 PM & 4:00 PM – 8:00 PM</p>
                    <p><strong className="font-semibold text-on-surface">Sunday:</strong> On prior appointments only</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-4 border-t border-outline-variant/30 pt-6 mt-auto">
                <button
                  onClick={() => toggleMap(studio.id)}
                  className="w-full border border-primary text-primary hover:bg-primary hover:text-tertiary py-2.5 font-sans text-xs font-semibold uppercase tracking-wider transition-all duration-300 text-center rounded-full"
                >
                  {showMap[studio.id] ? 'View Photo' : 'Locate on Map'}
                </button>
                <a
                  href={`https://wa.me/918200527699?text=Hello%20NERAI%20Studio%2C%20I%20would%20like%20to%20visit%20the%20${encodeURIComponent(studio.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-primary text-tertiary border border-primary hover:bg-transparent hover:text-primary py-2.5 font-sans text-xs font-semibold uppercase tracking-wider transition-all duration-300 text-center flex items-center justify-center gap-1.5 rounded-full"
                >
                  Contact Branch
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


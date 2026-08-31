import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Plane } from 'lucide-react';
import { treatmentsData } from '../../data/treatments';

interface HeaderProps {
  onSelectTreatment: (id: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onSelectTreatment }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = {
    Orthodontics: treatmentsData.filter(t => t.category === 'Orthodontics'),
    Cosmetic: treatmentsData.filter(t => t.category === 'Cosmetic'),
    Conservative: treatmentsData.filter(t => t.category === 'Conservative'),
    Surgery: treatmentsData.filter(t => t.category === 'Surgery')
  };

  const handleScrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    setIsMegaMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id) || (id === 'contact' ? document.getElementById('booking') : null);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
      return;
    }
    const element = document.getElementById(id) || (id === 'contact' ? document.getElementById('booking') : null);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTreatmentClick = (id: string) => {
    setIsMegaMenuOpen(false);
    setIsMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        onSelectTreatment(id);
      }, 150);
      return;
    }
    onSelectTreatment(id);
  };

  return (
    <div className="flex justify-center w-full relative z-50">
      <header className={`fixed transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'top-3 w-[96%] max-w-[1200px] bg-surface/95 backdrop-blur-lg border border-outline-variant/50 py-3 px-6 md:px-8 shadow-xl rounded-full' 
          : 'top-0 w-full bg-surface py-6 px-6 md:px-16 border-b border-outline-variant/30 rounded-none'
      }`}>
        <div className={`mx-auto flex items-center justify-between ${isScrolled ? 'w-full' : 'max-w-[1280px] w-full'}`}>
          {/* Brand Logo */}
          <a 
            href="#" 
            onClick={(e) => { 
              e.preventDefault(); 
              if (location.pathname !== '/') {
                navigate('/');
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="flex items-center hover:opacity-90 transition-opacity duration-200 shrink-0"
          >
            <img src="/images/logo.png" alt="Nerai Dental Studio" className="h-8 md:h-10 w-auto" />
          </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-5 lg:space-x-6">
          <button 
            onClick={() => handleScrollTo('about')}
            className="font-sans text-[13px] lg:text-[13.5px] font-medium text-on-surface hover:text-primary transition-colors duration-150 tracking-wide nav-link-hover whitespace-nowrap cursor-pointer"
          >
            About Us
          </button>
          
          {/* Treatments Dropdown/Mega-menu trigger */}
          <div 
            className="relative"
            onMouseEnter={() => setIsMegaMenuOpen(true)}
            onMouseLeave={() => setIsMegaMenuOpen(false)}
          >
            <button 
              className="font-sans text-[13px] lg:text-[13.5px] font-medium text-on-surface hover:text-primary flex items-center gap-1 transition-colors duration-150 tracking-wide py-2 nav-link-hover whitespace-nowrap cursor-pointer"
            >
              Treatments
              <ChevronDown size={14} className={`transition-transform duration-200 ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
            </button>
 
            {/* Mega Menu panel */}
            <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[800px] bg-surface-container-lowest border border-outline-variant/60 shadow-xl transition-all duration-300 ${
              isMegaMenuOpen 
                ? 'opacity-100 translate-y-0 pointer-events-auto' 
                : 'opacity-0 -translate-y-2 pointer-events-none'
            }`}>
              <div className="grid grid-cols-4 p-8 gap-6">
                {Object.entries(categories).map(([categoryName, items]) => (
                  <div key={categoryName} className="flex flex-col space-y-3">
                    <h4 className="font-sans text-xs font-bold text-primary tracking-widest uppercase border-b border-outline-variant/30 pb-2">
                      {categoryName}
                    </h4>
                    <ul className="space-y-2">
                      {items.map(item => (
                        <li key={item.id}>
                          <button
                            onClick={() => handleTreatmentClick(item.id)}
                            className="text-left font-sans text-xs text-on-surface-variant hover:text-tertiary transition-colors duration-150 block py-0.5"
                          >
                            {item.title}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
 
          <button 
            onClick={() => {
              navigate('/dental-tourism');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="font-sans text-[13px] lg:text-[13.5px] font-medium text-tertiary hover:text-primary flex items-center gap-1.5 transition-colors duration-150 tracking-wide nav-link-hover whitespace-nowrap cursor-pointer"
          >
            <Plane size={13} className="text-tertiary" />
            Dental Tourism
          </button>

          <button 
            onClick={() => handleScrollTo('gallery')}
            className="font-sans text-[13px] lg:text-[13.5px] font-medium text-on-surface hover:text-primary transition-colors duration-150 tracking-wide nav-link-hover whitespace-nowrap cursor-pointer"
          >
            Smile Gallery
          </button>
          <button 
            onClick={() => handleScrollTo('studios')}
            className="font-sans text-[13px] lg:text-[13.5px] font-medium text-on-surface hover:text-primary transition-colors duration-150 tracking-wide nav-link-hover whitespace-nowrap cursor-pointer"
          >
            Our Studios
          </button>
          <button 
            onClick={() => handleScrollTo('locations')}
            className="font-sans text-[13px] lg:text-[13.5px] font-medium text-on-surface hover:text-primary transition-colors duration-150 tracking-wide nav-link-hover whitespace-nowrap cursor-pointer"
          >
            Locations
          </button>
          <button 
            onClick={() => handleScrollTo('contact')}
            className="font-sans text-[13px] lg:text-[13.5px] font-medium text-on-surface hover:text-primary transition-colors duration-150 tracking-wide nav-link-hover whitespace-nowrap cursor-pointer"
          >
            Contact
          </button>
        </nav>
 
        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => handleScrollTo('booking')}
            className={`font-sans text-xs lg:text-[13px] font-semibold tracking-wider uppercase transition-all duration-350 cursor-pointer tactile-btn rounded-full ${
              isScrolled
                ? 'bg-primary text-tertiary px-6 py-2.5 hover:scale-105 border border-primary'
                : 'bg-primary text-tertiary px-7 py-3 hover:bg-primary-container hover:text-primary border border-primary'
            }`}
          >
            Book Appointment
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-primary hover:text-tertiary transition-colors duration-150"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer menu */}
      <div className={`md:hidden fixed top-[100%] left-0 w-full bg-surface border border-outline-variant/30 shadow-2xl flex flex-col justify-between transition-all duration-300 rounded-b-2xl overflow-hidden ${
        isMobileMenuOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0 border-none'
      }`}>
        <div className="overflow-y-auto px-6 py-8 flex flex-col space-y-6">
          <button 
            onClick={() => handleScrollTo('about')}
            className="text-left font-sans text-lg font-medium text-primary uppercase tracking-wider"
          >
            About Us
          </button>
          
          <div className="flex flex-col space-y-3">
            <span className="font-sans text-xs font-bold text-tertiary tracking-widest uppercase">
              Treatments
            </span>
            <div className="grid grid-cols-2 gap-4 pl-4 border-l border-outline-variant/30">
              {treatmentsData.map(item => (
                <button
                  key={item.id}
                  onClick={() => handleTreatmentClick(item.id)}
                  className="text-left font-sans text-xs text-on-surface-variant hover:text-tertiary transition-colors duration-150 py-1"
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>

          <button 
            onClick={() => {
              setIsMobileMenuOpen(false);
              navigate('/dental-tourism');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-left font-sans text-lg font-medium text-tertiary flex items-center gap-2 uppercase tracking-wider"
          >
            <Plane size={18} className="text-tertiary" />
            Dental Tourism
          </button>

          <button 
            onClick={() => handleScrollTo('gallery')}
            className="text-left font-sans text-lg font-medium text-primary uppercase tracking-wider"
          >
            Smile Gallery
          </button>
          <button 
            onClick={() => handleScrollTo('studios')}
            className="text-left font-sans text-lg font-medium text-primary uppercase tracking-wider"
          >
            Our Studios
          </button>
          <button 
            onClick={() => handleScrollTo('locations')}
            className="text-left font-sans text-lg font-medium text-primary uppercase tracking-wider"
          >
            Locations
          </button>
          <button 
            onClick={() => handleScrollTo('contact')}
            className="text-left font-sans text-lg font-medium text-primary uppercase tracking-wider"
          >
            Contact
          </button>
        </div>

        <div className="p-6 bg-surface-container-low border-t border-outline-variant/30">
          <button
            onClick={() => handleScrollTo('booking')}
            className="w-full bg-primary text-tertiary rounded-full border border-primary py-4 font-sans text-sm font-semibold tracking-wider uppercase hover:bg-transparent hover:text-primary transition-all duration-300 tactile-btn"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </header>
    </div>
  );
};

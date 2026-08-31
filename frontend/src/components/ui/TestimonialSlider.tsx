import React, { useRef } from 'react';
import { Star, ArrowUpRight, ChevronLeft, ChevronRight, Quote, X } from 'lucide-react';

interface Review {
  id: string;
  name: string;
  text: string;
  rating: number;
}

const reviewsData: Review[] = [
  {
    id: '1',
    name: 'Krishi Desai',
    text: '“Had an excellent experience with my dentist, Dr Pooja . She did an absolutely amazing job, very professional and attentive throughout the treatment. I’m extremely happy with the results. The clinic is also beautifully architected, elegant, immaculate, and has such a welcoming ambience. Highly recommended for anyone looking for exceptional dental care”',
    rating: 5,
  },
  {
    id: '2',
    name: 'Babita Mishra',
    text: '“I visited Dr. Pooja with my daughter and discussed my slightly crooked teeth. She explained the option of aligners and guided me through the treatment process. I underwent the treatment, which included a root canal and capping, and my overall experience was excellent.\n\nDr. Pooja treated me with great care, gentleness, and patience throughout the entire process. She is extremely friendly and always greets me warmly, asking, \'How are you, Aunty?\' Her kind and caring nature made me feel very comfortable and confident.\n\nI would highly recommend everyone to meet Dr. Pooja at least once. Once you meet her and experience her approach, you will naturally feel confident about getting your dental treatment done by her.”',
    rating: 5,
  },
  {
    id: '3',
    name: 'Charmi Patel',
    text: '“Had the smoothest braces journey! Dr. Pooja was so sweet, friendly, and patient throughout the whole process. She made every appointment comfortable and stress-free, was there to help with even the smallest inconvenience and I’m so happy with the results. Got a great smile because of her!”',
    rating: 5,
  },
  {
    id: '4',
    name: 'Jemini Ganatra',
    text: '“Really happy with my treatment experience with Dr Pooja shah. Very professional, she has explained the treatment properly and result is also amazing. Highly recommended. I m very pleased with my final results.”',
    rating: 5,
  },
  {
    id: '5',
    name: 'Dhimahee Nalavade',
    text: '“Dr.Pooja is so Kind & So Caring person.She is really Very Friendly in Nature. Best treatment has given to my Children. Very Gentle Touch during every Treatment. And also she sets an appointments according to Our Convience too. I would recommend to Visit Dr.Pooja for Dental related Issues.Thank You so much for giving us the Best Treatment. 😊🙏”',
    rating: 5,
  }
];

const GOOGLE_REVIEWS_URL = "https://www.google.co.in/search?ibp=gwp;0,7&q=NERAI+Orthodontic+and+Dental+Studio-+Dr.+Pooja+Desai&ludocid=1248617646377184161&lsig=AB86z5VNwtE5jvJ-zQG6ooWh7PGy#lkt=LocalPoiReviews&lpg=cid:CgIgAQ%3D%3D";

export const TestimonialSlider: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [reviews] = React.useState<Review[]>(reviewsData);
  const [selectedReview, setSelectedReview] = React.useState<Review | null>(null);
  const [isAtEnd, setIsAtEnd] = React.useState(false);

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 35) {
        setIsAtEnd(true);
      } else {
        setIsAtEnd(false);
      }
    }
  };

  React.useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      checkScrollPosition();
      el.addEventListener('scroll', checkScrollPosition);
      window.addEventListener('resize', checkScrollPosition);
      return () => {
        el.removeEventListener('scroll', checkScrollPosition);
        window.removeEventListener('resize', checkScrollPosition);
      };
    }
  }, []);

  const scrollReviews = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      if (direction === 'right') {
        if (isAtEnd || scrollLeft + clientWidth >= scrollWidth - 35) {
          window.open(GOOGLE_REVIEWS_URL, '_blank');
          return;
        }
      }
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  React.useEffect(() => {
    if (selectedReview) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedReview]);

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="font-sans text-xs font-bold text-primary tracking-widest uppercase block mb-3">
            Patient Experiences
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-on-surface leading-tight">
            Reviews from our patients.
          </h2>
        </div>
        <a 
          href={GOOGLE_REVIEWS_URL} 
          target="_blank" 
          rel="noopener noreferrer"
          className="font-sans text-[11px] font-bold text-primary hover:text-tertiary transition-colors duration-300 uppercase tracking-widest flex items-center gap-1.5 border-b border-primary/20 pb-1 w-fit group"
        >
          Read reviews on Google
          <ArrowUpRight size={14} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>

      <div className="relative -mx-6 md:-mx-16 flex items-center">
        
        {/* Left Arrow */}
        <button 
          onClick={() => scrollReviews('left')}
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
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 lg:gap-8 pb-12 pt-4 px-16 md:px-24 hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                onClick={() => setSelectedReview(review)}
                className="cursor-pointer group relative w-[85vw] md:w-[45vw] lg:w-[calc(33.333%-1.33rem)] snap-center shrink-0 bg-surface-container-low border border-outline-variant/60 p-8 flex flex-col justify-between h-[380px] rounded-[24px] hover:border-primary/45 hover:shadow-[0_12px_32px_rgb(0,0,0,0.06)] transition-all duration-300"
              >
                <Quote size={80} className="absolute -top-6 -right-4 text-primary/5 rotate-12" />
                <div className="relative z-10">
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={14} className="fill-tertiary text-tertiary" />
                    ))}
                  </div>
                  <p className="font-sans text-sm leading-relaxed text-on-surface-variant mb-8 font-light italic line-clamp-6">
                    {review.text}
                  </p>
                </div>
                
                <div className="relative z-10 flex items-center justify-between border-t border-outline-variant/40 pt-6 mt-auto">
                  <div>
                    <h4 className="font-sans text-sm font-semibold text-on-surface">
                      {review.name}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow / Google Link on Last */}
        <div className="absolute right-2 md:right-6 z-20 group/tooltip">
          {/* Tooltip on hover */}
          <div className="absolute bottom-full right-0 mb-3 hidden group-hover/tooltip:flex flex-col items-end pointer-events-none whitespace-nowrap z-30">
            <span className="bg-surface-container-highest text-on-surface border border-outline-variant/60 text-[11px] font-medium px-3 py-1.5 rounded-lg shadow-xl font-sans">
              {isAtEnd ? "Read more reviews on Google" : "Read more reviews on Google"}
            </span>
            <div className="w-2 h-2 bg-surface-container-highest border-r border-b border-outline-variant/60 rotate-45 -mt-1 mr-4"></div>
          </div>

          <button 
            onClick={() => scrollReviews('right')}
            className={`border p-3 rounded-full shadow-sm transition-all duration-300 flex items-center justify-center group/arrow cursor-pointer ${
              isAtEnd 
                ? 'bg-primary text-tertiary border-primary hover:scale-105' 
                : 'bg-surface hover:bg-primary border-outline-variant/50 text-primary hover:text-surface hover:scale-105'
            }`}
            aria-label="Next review or read more on Google"
          >
            {isAtEnd ? (
              <ArrowUpRight size={20} className="transform group-hover/arrow:translate-x-0.5 group-hover/arrow:-translate-y-0.5 transition-transform duration-300" />
            ) : (
              <ChevronRight size={20} className="transform group-hover/arrow:translate-x-1 transition-transform duration-300" />
            )}
          </button>
        </div>
      </div>

      {/* Modal for Expanded Review */}
      {selectedReview && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" 
          data-lenis-prevent
          onClick={() => setSelectedReview(null)}
        >
          <div 
            className="relative w-full max-w-2xl bg-surface-container-low border border-outline-variant/60 p-8 md:p-12 rounded-[32px] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedReview(null)}
              className="absolute top-6 right-6 p-2 bg-surface border border-outline-variant/50 rounded-full text-on-surface-variant hover:text-primary hover:border-primary transition-colors"
            >
              <X size={20} />
            </button>
            <Quote size={80} className="absolute -top-6 -left-4 text-primary/5 -rotate-12" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-1 mb-8">
                {[...Array(selectedReview.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-tertiary text-tertiary" />
                ))}
              </div>
              <p className="font-sans text-base md:text-lg leading-relaxed text-on-surface mb-10 font-light italic whitespace-pre-wrap">
                {selectedReview.text}
              </p>
              
              <div className="flex items-center justify-between border-t border-outline-variant/40 pt-6 mt-auto">
                <div>
                  <h4 className="font-sans text-base font-semibold text-on-surface">
                    {selectedReview.name}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


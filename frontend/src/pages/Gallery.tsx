import { Header } from '../components/ui/Header';
import { BeforeAfterSlider } from '../components/ui/BeforeAfterSlider';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Gallery() {
  const navigate = useNavigate();

  return (
    <div className="bg-surface min-h-screen text-on-surface flex flex-col font-sans selection:bg-primary/25 selection:text-primary">
      <Header onSelectTreatment={() => navigate('/')} />

      <main className="flex-grow pt-32 pb-24 px-6 md:px-16">
        <div className="max-w-[1280px] mx-auto">
          
          {/* Sleek Back to Home button - stays visible throughout scrolling */}
          <div className="sticky top-20 md:top-24 z-30 mb-10 pointer-events-none">
            <button 
              onClick={() => navigate('/')}
              className="inline-flex items-center gap-2 text-primary hover:text-tertiary bg-surface/85 hover:bg-surface backdrop-blur-md py-1.5 px-3.5 rounded-full border border-outline-variant/40 hover:border-primary/60 shadow-sm transition-all duration-200 font-sans text-sm tracking-wider uppercase cursor-pointer pointer-events-auto"
            >
              <ArrowLeft size={16} />
              Back to Home
            </button>
          </div>

          <div className="text-center mb-20">
            <span className="font-sans text-xs font-bold text-tertiary tracking-widest uppercase block mb-3">
              Real Clinical Results
            </span>
            <h1 className="font-serif text-4xl md:text-6xl text-on-surface leading-tight mb-6">
              Signature Smile Gallery
            </h1>
            <p className="font-sans text-sm md:text-lg text-on-surface-variant font-light max-w-[700px] mx-auto leading-relaxed">
              Explore the visible structural changes accomplished through our aligner mappings, veneer restorations, and orthodontic alignments. Drag the handle to evaluate before and after alignments.
            </p>
          </div>

          <div className="space-y-16 max-w-[900px] mx-auto">
            {/* Transformation 1 */}
            <div className="w-full">
              <BeforeAfterSlider 
                beforeImage="/images/gallery/gallery-1-before.jpg"
                afterImage="/images/gallery/gallery-1-after.jpg"
                aspectRatioClass="aspect-[16/9]"
              />
            </div>

            {/* Transformation 2 */}
            <div className="w-full">
              <BeforeAfterSlider 
                beforeImage="/images/gallery/gallery-2-before.jpg"
                afterImage="/images/gallery/gallery-2-after.jpg"
                aspectRatioClass="aspect-[16/9]"
              />
            </div>

            {/* Transformation 3 */}
            <div className="w-full">
              <BeforeAfterSlider 
                beforeImage="/images/gallery/gallery-3-before.jpg"
                afterImage="/images/gallery/gallery-3-after.jpg"
                aspectRatioClass="aspect-[16/9]"
              />
            </div>

            {/* Transformation 4 */}
            <div className="w-full">
              <BeforeAfterSlider 
                beforeImage="/images/gallery/gallery-4-before.jpg"
                afterImage="/images/gallery/gallery-4-after.jpg"
                aspectRatioClass="aspect-[16/9]"
              />
            </div>

            {/* Transformation 5 */}
            <div className="w-full">
              <BeforeAfterSlider 
                beforeImage="/images/gallery/gallery-5-before.jpg"
                afterImage="/images/gallery/gallery-5-after.jpg"
                aspectRatioClass="aspect-[16/9]"
              />
            </div>
          </div>

        </div>
      </main>
      
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

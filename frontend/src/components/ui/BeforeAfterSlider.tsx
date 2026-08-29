import React, { useState, useRef, useEffect } from 'react';

interface BeforeAfterSliderProps {
  beforeImage?: string;
  afterImage?: string;
  beforeLabel?: string;
  afterLabel?: string;
  aspectRatioClass?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage = '/images/gallery/gallery-1-before.jpg',
  afterImage = '/images/gallery/gallery-1-after.jpg',
  beforeLabel = 'Before',
  afterLabel = 'After',
  aspectRatioClass = 'aspect-[16/9]'
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.getBoundingClientRect().width);
      }
    };
    updateWidth();
    const resizeObserver = new ResizeObserver(() => updateWidth());
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    return () => resizeObserver.disconnect();
  }, []);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <div className={`relative w-full mx-auto overflow-hidden border border-outline-variant/60 rounded-2xl shadow-lg ${aspectRatioClass}`}>
      {/* Before/After Labels */}
      <div className="absolute top-4 left-4 z-20 bg-surface/90 backdrop-blur-sm border border-outline-variant/40 px-3 py-1 font-sans text-[10px] font-semibold uppercase tracking-widest text-on-surface select-none rounded-full">
        {beforeLabel}
      </div>
      <div className="absolute top-4 right-4 z-20 bg-surface/90 backdrop-blur-sm border border-outline-variant/40 px-3 py-1 font-sans text-[10px] font-semibold uppercase tracking-widest text-on-surface select-none rounded-full">
        {afterLabel}
      </div>

      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
        className="relative w-full h-full select-none cursor-ew-resize"
      >
        {/* Base Image (After Alignment) */}
        <img
          src={afterImage}
          alt="After Treatment"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />

        {/* Overlay Image (Before Alignment) */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={beforeImage}
            alt="Before Treatment"
            className="absolute inset-0 h-full object-cover max-w-none pointer-events-none"
            style={{ width: containerWidth ? `${containerWidth}px` : '100%' }}
          />
        </div>

        {/* Divider Line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-surface-container-lowest z-10 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Centered Handle */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 bg-surface rounded-full shadow-xl border border-outline/20 hover:scale-105 transition-transform duration-150 flex items-center justify-between px-2 select-none pointer-events-auto text-primary">
            <span className="text-[12px] font-bold">&lsaquo;</span>
            <div className="w-px h-4 bg-outline-variant/60 mx-0.5"></div>
            <span className="text-[12px] font-bold">&rsaquo;</span>
          </div>
        </div>
      </div>
    </div>
  );
};

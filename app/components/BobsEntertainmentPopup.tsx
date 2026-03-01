import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import imgPolaroid1 from "figma:asset/1cc8a2ee1d5d8f52b0d3f2c8b21e2d8e7cad3e1b.png";
import imgPolaroid2 from "figma:asset/4e80e88c3e88a6a86e833fb5db8c7ba3d4cf1c3a.png";
import svgPaths from "../../imports/svg-8dvhuk7ghz";
import { useEffect } from 'react';

function Frame() {
  return (
    <div className="content-stretch flex flex-col sm:flex-row gap-[8px] sm:gap-[12px] items-start sm:items-center relative shrink-0 w-full">
      <p className="font-['Istok_Web'] leading-[normal] not-italic relative shrink-0 text-[#989898] text-[12px] sm:text-[14px] md:text-[16px]">Exhibit piece</p>
      <div className="h-0 relative flex-1 hidden sm:block">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 734 1">
            <line stroke="#989898" x2="734" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="font-['Istok_Web'] leading-[normal] not-italic relative shrink-0 text-[#989898] text-[12px] sm:text-[14px] md:text-[16px]">Bobs Entertainment</p>
    </div>
  );
}

function ExternalLink() {
  return (
    <a 
      href="https://bobs-ent.framer.website/"
      target="_blank"
      rel="noopener noreferrer"
      className="relative shrink-0 size-[24px] cursor-pointer hover:opacity-70 transition-opacity" 
      data-name="external-link"
    >
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g>
          <path d={svgPaths.p1f4c3d00} stroke="#989898" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M15 3H21V9" stroke="#989898" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10 14L21 3" stroke="#989898" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </a>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] sm:gap-[40px] md:gap-[48px] items-start justify-center relative shrink-0">
      <div className="font-['Istok_Web'] leading-[normal] not-italic relative shrink-0 text-[#989898] text-[13px] sm:text-[14px] md:text-[16px] whitespace-nowrap">
        <p className="mb-0">Bobs Entertainment.</p>
        <p className="mb-0">Web, projection, graphic, video.</p>
        <p>2024.</p>
      </div>
      <ExternalLink />
    </div>
  );
}

interface BobsEntertainmentPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BobsEntertainmentPopup({ isOpen, onClose }: BobsEntertainmentPopupProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const mainScrollContainer = document.querySelector('.hide-scrollbar') as HTMLElement;
      if (mainScrollContainer) mainScrollContainer.style.overflow = 'hidden';
      const customScrollbar = document.querySelector('[data-custom-scrollbar]') as HTMLElement;
      if (customScrollbar) customScrollbar.style.display = 'none';
      const generateButton = document.querySelector('[data-generate-button]') as HTMLElement;
      if (generateButton) generateButton.style.display = 'none';
      const scrollIndicator = document.querySelector('[data-scroll-indicator]') as HTMLElement;
      if (scrollIndicator) scrollIndicator.style.display = 'none';
    } else {
      document.body.style.overflow = '';
      const mainScrollContainer = document.querySelector('.hide-scrollbar') as HTMLElement;
      if (mainScrollContainer) mainScrollContainer.style.overflow = '';
      const customScrollbar = document.querySelector('[data-custom-scrollbar]') as HTMLElement;
      if (customScrollbar) customScrollbar.style.display = '';
      const generateButton = document.querySelector('[data-generate-button]') as HTMLElement;
      if (generateButton) generateButton.style.display = '';
      const scrollIndicator = document.querySelector('[data-scroll-indicator]') as HTMLElement;
      if (scrollIndicator) scrollIndicator.style.display = '';
    }
    return () => {
      document.body.style.overflow = '';
      const mainScrollContainer = document.querySelector('.hide-scrollbar') as HTMLElement;
      if (mainScrollContainer) mainScrollContainer.style.overflow = '';
      const customScrollbar = document.querySelector('[data-custom-scrollbar]') as HTMLElement;
      if (customScrollbar) customScrollbar.style.display = '';
      const generateButton = document.querySelector('[data-generate-button]') as HTMLElement;
      if (generateButton) generateButton.style.display = '';
      const scrollIndicator = document.querySelector('[data-scroll-indicator]') as HTMLElement;
      if (scrollIndicator) scrollIndicator.style.display = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-[100]"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[100] w-[92vw] sm:w-[85vw] max-w-[900px] h-[92vh] sm:h-[85vh]"
          >
            <div className="bg-white h-full content-stretch flex flex-col items-start relative rounded-[20px] sm:rounded-[30px] md:rounded-[40px]">
              <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[20px] sm:rounded-[30px] md:rounded-[40px] shadow-[0px_4px_27.1px_0px_rgba(200,200,200,0.08)]" />
              
              {/* Fixed header section */}
              <div className="w-full pt-[50px] sm:pt-[60px] md:pt-[70px] px-[24px] sm:px-[40px] md:px-[60px] pb-[16px] sm:pb-[20px] md:pb-[24px]">
                <Frame />
              </div>
              
              {/* Content area */}
              <div className="flex flex-col md:flex-row gap-[24px] sm:gap-[36px] md:gap-[48px] px-[24px] sm:px-[40px] md:px-[60px] pb-[32px] sm:pb-[36px] md:pb-[40px] flex-1 overflow-hidden w-full">
                {/* Scrollable images/video section */}
                <div 
                  className="flex-1 overflow-y-auto"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  <style>{`.overflow-y-auto::-webkit-scrollbar { display: none; }`}</style>
                  <div className="flex flex-col gap-[16px] sm:gap-[20px] md:gap-[24px]">
                    <div className="relative shrink-0 w-full aspect-square max-w-[455px]">
                      <ImageWithFallback alt="Bobs Entertainment exhibit piece" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPolaroid1} />
                    </div>
                    
                    <div className="relative shrink-0 w-full aspect-square max-w-[455px]">
                      <ImageWithFallback alt="Bobs Entertainment exhibit piece" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPolaroid2} />
                    </div>

                    {/* Video with controls */}
                    <div className="relative shrink-0 w-full max-w-[455px] rounded-[12px] overflow-hidden bg-black">
                      <video
                        controls
                        className="w-full h-auto"
                        playsInline
                        preload="metadata"
                      >
                        <source src="/assets/bobs_entertainment_video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                </div>
                
                {/* Fixed text and link section */}
                <div className="shrink-0 flex items-start md:items-center">
                  <Frame4 />
                </div>
              </div>
              
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute right-[24px] sm:right-[40px] md:right-[60px] size-[24px] sm:size-[26px] md:size-[28px] top-[12px] sm:top-[14px] md:top-[16px] hover:opacity-70 transition-opacity z-30"
                aria-label="Close popup"
              >
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
                  <g>
                    <rect fill="#F0F0F0" height="28" rx="14" width="28" />
                    <path d="M19 9L9 19" stroke="#989898" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d="M9 9L19 19" stroke="#989898" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </g>
                </svg>
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

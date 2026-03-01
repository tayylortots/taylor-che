import { motion, AnimatePresence } from 'motion/react';
import imgGameArtUpdater1 from "figma:asset/00bcda6a058c32edefb1e79dc1d0e87fa730fd0f.png";
import { useEffect } from 'react';

function Frame() {
  return (
    <div className="content-stretch flex flex-col sm:flex-row gap-[8px] sm:gap-[12px] items-start sm:items-center relative shrink-0 w-full">
      <p className="font-['Istok_Web'] leading-[normal] not-italic relative shrink-0 text-[#989898] text-[12px] sm:text-[14px] md:text-[16px]">Figma Plugin</p>
      <div className="h-0 relative flex-1 hidden sm:block">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 712 1">
            <line stroke="#989898" x2="712" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="font-['Istok_Web'] leading-[normal] not-italic relative shrink-0 text-[#989898] text-[12px] sm:text-[14px] md:text-[16px]">Xbox game art updater</p>
    </div>
  );
}

interface XboxGameArtPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function XboxGameArtPopup({ isOpen, onClose }: XboxGameArtPopupProps) {
  // Hide main app scrollbar, generate button, and scroll indicator when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      
      const mainScrollContainer = document.querySelector('.hide-scrollbar') as HTMLElement;
      if (mainScrollContainer) {
        mainScrollContainer.style.overflow = 'hidden';
      }
      
      const customScrollbar = document.querySelector('[data-custom-scrollbar]') as HTMLElement;
      if (customScrollbar) {
        customScrollbar.style.display = 'none';
      }
      
      const generateButton = document.querySelector('[data-generate-button]') as HTMLElement;
      if (generateButton) {
        generateButton.style.display = 'none';
      }
      
      const scrollIndicator = document.querySelector('[data-scroll-indicator]') as HTMLElement;
      if (scrollIndicator) {
        scrollIndicator.style.display = 'none';
      }
    } else {
      document.body.style.overflow = '';
      
      const mainScrollContainer = document.querySelector('.hide-scrollbar') as HTMLElement;
      if (mainScrollContainer) {
        mainScrollContainer.style.overflow = '';
      }
      
      const customScrollbar = document.querySelector('[data-custom-scrollbar]') as HTMLElement;
      if (customScrollbar) {
        customScrollbar.style.display = '';
      }
      
      const generateButton = document.querySelector('[data-generate-button]') as HTMLElement;
      if (generateButton) {
        generateButton.style.display = '';
      }
      
      const scrollIndicator = document.querySelector('[data-scroll-indicator]') as HTMLElement;
      if (scrollIndicator) {
        scrollIndicator.style.display = '';
      }
    }
    
    return () => {
      document.body.style.overflow = '';
      const mainScrollContainer = document.querySelector('.hide-scrollbar') as HTMLElement;
      if (mainScrollContainer) {
        mainScrollContainer.style.overflow = '';
      }
      const customScrollbar = document.querySelector('[data-custom-scrollbar]') as HTMLElement;
      if (customScrollbar) {
        customScrollbar.style.display = '';
      }
      const generateButton = document.querySelector('[data-generate-button]') as HTMLElement;
      if (generateButton) {
        generateButton.style.display = '';
      }
      const scrollIndicator = document.querySelector('[data-scroll-indicator]') as HTMLElement;
      if (scrollIndicator) {
        scrollIndicator.style.display = '';
      }
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
            <div className="bg-white h-full content-stretch flex flex-col items-start relative rounded-[20px] sm:rounded-[40px]">
              <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[20px] sm:rounded-[40px] shadow-[0px_4px_27.1px_0px_rgba(200,200,200,0.08)]" />
              
              {/* Fixed header section */}
              <div className="w-full pt-[40px] sm:pt-[60px] md:pt-[70px] px-[24px] sm:px-[40px] md:px-[60px] pb-[16px] sm:pb-[20px] md:pb-[24px]">
                <Frame />
              </div>
              
              {/* Content area - flex column on mobile, row on desktop */}
              <div className="flex flex-col md:flex-row gap-[24px] sm:gap-[36px] md:gap-[48px] px-[24px] sm:px-[40px] md:px-[60px] pb-[24px] sm:pb-[32px] md:pb-[40px] flex-1 overflow-auto w-full items-center">
                {/* Image */}
                <div className="relative rounded-[12px] sm:rounded-[16px] md:rounded-[20px] shrink-0 w-full md:w-[574px] h-[280px] sm:h-[400px] md:h-[560px]">
                  <img alt="Xbox Game Art Updater plugin interface" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] sm:rounded-[16px] md:rounded-[20px] size-full" src={imgGameArtUpdater1} />
                </div>
                
                {/* Text */}
                <div className="flex-1 font-['Istok_Web'] leading-[normal] not-italic text-[#989898] text-[14px] sm:text-[15px] md:text-[16px]">
                  Accelerating personal workflow to update game cards within Figma.
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
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import svgPaths from "../../imports/svg-8dvhuk7ghz";
import imgHandheldCompatibilityGif from "figma:asset/a0bd4d9bfd5b68d04c56e87ed54843c28e9d1ecf.gif";
import { useEffect } from 'react';

function Frame() {
  return (
    <div className="content-stretch flex flex-col sm:flex-row gap-[8px] sm:gap-[12px] items-start sm:items-center relative shrink-0 w-full">
      <p className="font-['Istok_Web'] leading-[normal] not-italic relative shrink-0 text-[#989898] text-[12px] sm:text-[14px] md:text-[16px]">Shipped</p>
      <div className="h-0 relative flex-1 hidden sm:block">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 681 1">
            <line stroke="#989898" x2="681" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="font-['Istok_Web'] leading-[normal] not-italic relative shrink-0 text-[#989898] text-[12px] sm:text-[14px] md:text-[16px]">Handheld Compatibility Program</p>
    </div>
  );
}

function ExternalLink() {
  return (
    <a 
      href="https://www.xbox.com/en-US/handhelds/handheld-compatibility"
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

interface HandheldPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function HandheldPopup({ isOpen, onClose }: HandheldPopupProps) {
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
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[100] w-[92vw] sm:w-[85vw] max-w-[900px] max-h-[85vh] overflow-auto scrollbar-thin"
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: 'rgba(0,0,0,0.22) transparent',
            }}
          >
            <style>{`
              .scrollbar-thin::-webkit-scrollbar {
                width: 8px;
              }
              .scrollbar-thin::-webkit-scrollbar-track {
                background: transparent;
              }
              .scrollbar-thin::-webkit-scrollbar-thumb {
                background: rgba(0,0,0,0.22);
                border-radius: 10px;
                transition: opacity 0.2s;
              }
              .scrollbar-thin::-webkit-scrollbar-thumb:hover {
                background: rgba(0,0,0,0.3);
              }
            `}</style>
            <div className="bg-white content-stretch flex flex-col gap-[16px] sm:gap-[20px] md:gap-[24px] items-end pb-[32px] sm:pb-[36px] md:pb-[40px] pt-[50px] sm:pt-[60px] md:pt-[70px] px-[24px] sm:px-[40px] md:px-[60px] relative rounded-[20px] sm:rounded-[30px] md:rounded-[40px]">
              <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[20px] sm:rounded-[30px] md:rounded-[40px] shadow-[0px_4px_27.1px_0px_rgba(200,200,200,0.08)]" />
              
              <Frame />
              
              <div className="aspect-[1920/1080] relative rounded-[12px] sm:rounded-[16px] md:rounded-[20px] shrink-0 w-full">
                <ImageWithFallback
                  alt="Handheld Compatibility Program interface"
                  className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] sm:rounded-[16px] md:rounded-[20px] size-full"
                  src={imgHandheldCompatibilityGif}
                />
              </div>
              
              <ExternalLink />
              
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute right-[24px] sm:right-[40px] md:right-[60px] size-[24px] sm:size-[26px] md:size-[28px] top-[12px] sm:top-[14px] md:top-[16px] hover:opacity-70 transition-opacity"
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
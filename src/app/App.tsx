import { CustomScrollbar } from "./components/CustomScrollbar";
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CustomCursor } from './components/CustomCursor';
import { Bubble } from './components/Bubble';
import { WorkSection } from './components/WorkSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';
import characterOverlay from 'figma:asset/6cdd6409ae10b18f67dab84eac20a197e8d5b501.png';

export default function App() {
  const [stage, setStage] = useState<'initial' | 'revealed' | 'generating'>('initial');
  const [isHoveringChar, setIsHoveringChar] = useState(false);
  const [visibleBubbles, setVisibleBubbles] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<'work' | 'contact'>('work');
  const [footerRevealed, setFooterRevealed] = useState(false);
  const [workSectionRevealed, setWorkSectionRevealed] = useState(false);
  const [contactSectionRevealed, setContactSectionRevealed] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const bubbleContainerRef = useRef<HTMLDivElement>(null);
  const workSectionRef = useRef<HTMLDivElement>(null);


  const handleTabChange = (tab: 'work' | 'contact') => {
    setActiveTab(tab);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }
    if (tab === 'contact') setContactSectionRevealed(true);
  };

  const handleScrollToTop = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
    const scrolledToBottom = scrollHeight - scrollTop - clientHeight < 100;
    if (scrolledToBottom && !footerRevealed) setFooterRevealed(true);
    if (scrollTop > clientHeight * 0.5 && !workSectionRevealed) setWorkSectionRevealed(true);
    if (scrollTop > clientHeight * 0.5 && !contactSectionRevealed) setContactSectionRevealed(true);
  };

  const orderedBubbles = [
    { text: "product designer @ microsoft", x: -250, y: -150, delay: 0 },
    { text: "visual designer", x: 300, y: 80, delay: 0, hasArrow: true, href: "https://www.behance.net/taylorche" },
    { text: "doodler", x: 200, y: 0, delay: 0, hasArrow: true, href: "https://www.instagram.com/tayylor.tots/" },
    { text: "home barista", x: -300, y: 120, delay: 0, hasArrow: true, href: "https://www.instagram.com/taystea.cafe?igsh=NTc4MTIwNjQ2YQ%3D%3D" },
  ];

  const randomBubblesPool = [
    { text: "vibe-coder", x: 250, y: -40, delay: 0 },
    { text: "depop-addict", x: -150, y: 40, delay: 0 },
    { text: "bruin alumni", x: 280, y: -180, delay: 0 },
    { text: "cat mom", x: 220, y: -150, delay: 0 },
    { text: "constant learner", x: -250, y: -200, delay: 0 },
    { text: "gamer", x: 150, y: -100, delay: 0 },
    { text: "visual storyteller", x: -180, y: 100, delay: 0 },
    { text: "interaction designer", x: 80, y: 140, delay: 0 },
    { text: "san francisco native", x: -120, y: -150, delay: 0 },
    { text: "infj", x: -200, y: -80, delay: 0 },
    { text: "pokemon trainer", x: 180, y: 120, delay: 0 },
    { text: "art museum enthusiast", x: -80, y: -40, delay: 0 },
    { text: "night owl", x: 100, y: 60, delay: 0 },
  ];

  const handleInitialClick = () => {
    if (stage === 'initial') setStage('revealed');
  };

  const handleGenerate = (e: React.MouseEvent) => {
    e.stopPropagation();
    setStage('generating');
    const currentCount = visibleBubbles.length;
    if (currentCount < orderedBubbles.length) {
      setVisibleBubbles([...visibleBubbles, orderedBubbles[currentCount]]);
    } else {
      const available = randomBubblesPool.filter(
        b => !visibleBubbles.some(vb => vb.text === b.text)
      );
      if (available.length > 0) {
        const next = available[Math.floor(Math.random() * available.length)];
        setVisibleBubbles([...visibleBubbles, next]);
      }
    }
  };

  const allBubblesGenerated = visibleBubbles.length >= orderedBubbles.length + randomBubblesPool.length;

  // Fix for Safari: character uses two overlaid elements instead of backgroundImage transition
  // to prevent blinking on hover
  const showOverlay = stage !== 'initial' && isHoveringChar;

  return (
    <div
      className="relative w-full h-screen bg-[#f0f0f0] overflow-hidden flex items-center justify-center cursor-default"
      onClick={handleInitialClick}
    >
      <CustomCursor isActive={stage === 'initial'} isHoveringChar={isHoveringChar} />

      {/* Main Card */}
      <motion.div
        layout
        className="relative w-[95vw] sm:w-[90vw] max-w-[1829px] h-[95vh] sm:h-[90vh] max-h-[972px] rounded-[12px] sm:rounded-[20px] shadow-[0px_4px_27.1px_2px_rgba(200,200,200,0.12)] overflow-hidden isolate"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <AnimatePresence>
          {!isPopupOpen && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-x-0 top-0 z-50 pointer-events-none"
              onClick={(e) => e.stopPropagation()}
            >
              <Navigation activeTab={activeTab} onTabChange={handleTabChange} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Layer 0 — Footer */}
        <div 
          className="absolute inset-0 z-0 pointer-events-auto"
          onWheel={(e) => {
            if (scrollContainerRef.current) {
              e.preventDefault();
              scrollContainerRef.current.scrollBy({
                top: e.deltaY,
                behavior: 'instant' as ScrollBehavior
              });
            }
          }}
        >
          <Footer onScrollToTop={handleScrollToTop} isRevealed={footerRevealed} />
        </div>

        {/* Layer 1 — Scroll container with Safari touch scrolling fix */}
        <div
          ref={scrollContainerRef}
          className="relative z-10 h-full w-full overflow-y-auto scroll-smooth hide-scrollbar pointer-events-none"
          style={{ WebkitOverflowScrolling: 'touch' } as React.CSSProperties}
          onScroll={handleScroll}
        >
          <AnimatePresence mode="wait" initial={false}>

            {activeTab === 'work' ? (
              <motion.div
                key="work-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="w-full"
              >
                {/* Hero section — tap anywhere to reveal on mobile */}
                <div
                  className="relative h-[90vh] max-h-[972px] w-full flex flex-col items-center justify-center bg-white pointer-events-auto overflow-hidden"
                >
                  {/* "tap me" hint on mobile, "click me" on desktop */}
                  <AnimatePresence>
                    {stage === 'initial' && (
                      <motion.span
                        key="click-hint"
                        className="absolute inset-0 flex items-center justify-center font-['Istok_Web'] text-[#c0c0c0] text-[16px] tracking-wide pointer-events-none select-none z-20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHoveringChar ? 0 : 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                      >
                        <span className="hidden sm:inline">click me.</span>
                        <span className="sm:hidden">tap me.</span>
                      </motion.span>
                    )}
                  </AnimatePresence>

                  {/* Center content */}
                  <div className="relative flex flex-col items-center justify-center z-10 px-4">
                    <AnimatePresence>
                      {stage !== 'initial' && (
                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 1.5, delay: 0.2 }}
                          className="font-['Istok_Web'] font-bold text-[#afafaf] text-[36px] sm:text-[48px] md:text-[68px] leading-none uppercase -mb-4 sm:-mb-6"
                        >
                          TAYLOR
                        </motion.p>
                      )}
                    </AnimatePresence>

                    {/* 谢 character — Safari-safe: two stacked elements instead of backgroundImage swap */}
                    <div
                      className="relative z-10 pointer-events-auto"
                      onMouseEnter={() => setIsHoveringChar(true)}
                      onMouseLeave={() => setIsHoveringChar(false)}
                      onTouchStart={() => { if (stage !== 'initial') setIsHoveringChar(true); }}
                      onTouchEnd={() => setIsHoveringChar(false)}
                    >
                      {/* Base gradient character */}
                      <motion.p
                        className="font-['Noto_Sans_SC'] font-black text-[150px] sm:text-[200px] md:text-[300px] leading-none select-none"
                        style={{
                          color: 'transparent',
                          WebkitBackgroundClip: 'text',
                          backgroundClip: 'text',
                          backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\"0 0 300 363\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"none\"><rect x=\"0\" y=\"0\" height=\"100%\" width=\"100%\" fill=\"url(%23grad)\" opacity=\"1\"/><defs><radialGradient id=\"grad\" gradientUnits=\"userSpaceOnUse\" cx=\"0\" cy=\"0\" r=\"10\" gradientTransform=\"matrix(9.1849e-16 18.15 -15 1.1114e-15 150 181.5)\"><stop stop-color=\"rgba(217,217,217,1)\" offset=\"0\"/><stop stop-color=\"rgba(166,166,166,1)\" offset=\"0.5\"/><stop stop-color=\"rgba(141,141,141,1)\" offset=\"0.75\"/><stop stop-color=\"rgba(115,115,115,1)\" offset=\"1\"/></radialGradient></defs></svg>')",
                        }}
                        animate={{
                          opacity: (stage !== 'initial' || isHoveringChar) ? 1 : 0,
                          scale: (stage === 'initial' && isHoveringChar) ? 1.05 : 1,
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        谢
                      </motion.p>

                      {/* Overlay image character — fades in on hover, no backgroundImage swap = no Safari blink */}
                      {stage !== 'initial' && (
                        <motion.p
                          className="font-['Noto_Sans_SC'] font-black text-[150px] sm:text-[200px] md:text-[300px] leading-none select-none absolute inset-0"
                          style={{
                            color: 'transparent',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            backgroundImage: `url(${characterOverlay})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                          }}
                          animate={{ opacity: showOverlay ? 1 : 0 }}
                          transition={{ duration: 0.4 }}
                        >
                          谢
                        </motion.p>
                      )}
                    </div>

                    <AnimatePresence>
                      {stage !== 'initial' && (
                        <motion.div
                          initial={{ opacity: 0, y: -20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 1.5, delay: 0.4 }}
                          className="flex items-center gap-3 sm:gap-4 mt-6 sm:mt-8 md:mt-12 pointer-events-auto"
                        >
                          <span className="font-['Istok_Web'] text-[#afafaf] text-[18px] sm:text-[20px] md:text-[24px]">is a...</span>
                          <button
                            data-generate-button
                            onClick={handleGenerate}
                            disabled={allBubblesGenerated}
                            className={`flex items-center justify-center w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] md:w-[44px] md:h-[44px] rounded-full border border-[#e5e5e5] transition-all flex-shrink-0 ${
                              allBubblesGenerated
                                ? 'bg-gray-100 cursor-not-allowed opacity-50'
                                : 'bg-white hover:bg-gray-50 cursor-pointer'
                            }`}
                            aria-label="Generate bubble"
                          >
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                              <path d="M8 13V3M3 8l5-5 5 5" stroke="#afafaf" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Scroll down indicator */}
                  <AnimatePresence>
                    {stage !== 'initial' && (
                      <motion.div
                        data-scroll-indicator
                        className="hidden sm:flex absolute bottom-[5%] right-[5%] flex-col items-center gap-1 pointer-events-none z-50"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, delay: 0.8 }}
                      >
                        <span className="font-['Istok_Web'] text-[#afafaf] text-[14px] tracking-wide">scroll down</span>
                        <motion.svg
                          width="20" height="20" viewBox="0 0 20 20" fill="none"
                          animate={{ y: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <path d="M10 3v14M4 11l6 6 6-6" stroke="#afafaf" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </motion.svg>
                      </motion.div>
                    )}
                  </AnimatePresence>



                  {/* Bubbles */}
                  <div ref={bubbleContainerRef} className="absolute inset-0 pointer-events-none flex items-center justify-center z-40">
                    <AnimatePresence>
                      {visibleBubbles.map((bubble) => (
                        <Bubble
                          key={bubble.text}
                          text={bubble.text}
                          x={bubble.x}
                          y={bubble.y}
                          delay={0}
                          hasArrow={bubble.hasArrow}
                          constraintRef={bubbleContainerRef}
                          href={bubble.href}
                        />
                      ))}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Section 2 — Work list */}
                <div className="relative bg-white min-h-[90vh] z-20 mb-[90vh] pointer-events-auto">
                  <WorkSection isVisible={workSectionRevealed} onPopupChange={setIsPopupOpen} />
                </div>
              </motion.div>

            ) : (

              <motion.div
                key="contact-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="w-full"
              >
                <div className="relative bg-white min-h-screen sm:min-h-[90vh] z-20 pointer-events-auto">
                  <div className="px-[24px] sm:px-[40px] md:px-[60px] pt-[80px] sm:pt-[100px] md:pt-[120px] pb-[60px] sm:pb-[80px] md:pb-[100px]">
                    <ContactSection isVisible={contactSectionRevealed} />
                  </div>
                </div>
              </motion.div>

            )}

          </AnimatePresence>
        </div>

        {/* Custom scrollbar overlay */}
        <CustomScrollbar scrollContainerRef={scrollContainerRef} />
      </motion.div>
    </div>
  );
}

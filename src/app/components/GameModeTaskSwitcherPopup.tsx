import { motion, AnimatePresence } from 'motion/react';
import { useState, useRef, useEffect } from 'react';
import Maximize from "../../imports/Maximize2";
import Minimize from "../../imports/Minimize";
import heroImage from "../../assets/hero_image.png";
import beforeImage from "../../assets/before_task_Switcher.png";
import afterGif from "../../assets/task_Switcher_Gif.gif";

// Header breadcrumb
function Header() {
  return (
    <div className="content-stretch flex flex-col sm:flex-row gap-[8px] sm:gap-[12px] items-start sm:items-center relative shrink-0 w-full">
      <p className="font-['Istok_Web'] leading-[normal] not-italic relative shrink-0 text-[#989898] text-[12px] sm:text-[14px] md:text-[16px]">Redesign</p>
      <div className="h-0 relative flex-1 hidden sm:block">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 675 1">
            <line stroke="#989898" x2="675" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="font-['Istok_Web'] leading-[normal] not-italic relative shrink-0 text-[#989898] text-[12px] sm:text-[14px] md:text-[16px]">ROG Xbox Ally</p>
    </div>
  );
}

// Hero image
function HeroImage() {
  return (
    <div className="bg-[#1a1a2e] overflow-clip relative rounded-[12px] sm:rounded-[16px] md:rounded-[20px] shrink-0 w-full">
      <img
        alt="Xbox Ally Game Mode Task Switcher"
        className="w-full h-auto object-contain pointer-events-none"
        src={heroImage}
      />
    </div>
  );
}

// Overview + Outcome
function OverviewOutcome() {
  return (
    <div className="content-stretch flex flex-col sm:flex-row gap-[24px] sm:gap-[32px] md:gap-[40px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[24px] sm:gap-[32px] md:gap-[40px] items-start justify-center relative w-full sm:flex-[1_0_0]">
        <div className="content-stretch flex flex-col font-['Istok_Web'] gap-[6px] sm:gap-[7px] md:gap-[8px] items-start not-italic relative shrink-0 text-[12px] sm:text-[14px] md:text-[16px] tracking-[0.42px] w-full">
          <p className="leading-[normal] relative shrink-0 text-[#666]">Overview</p>
          <p className="leading-[18px] sm:leading-[20px] md:leading-[22px] relative shrink-0 text-[#989898] w-full">As the first designer to bridge the Xbox and Windows teams, I drove product vision for how players switch apps on Windows handheld devices over 4 months. Grounded in user research, I designed an optimized Task Switcher experience for handheld, work that closely informed what was ultimately shipped by the Windows team. A huge shoutout to Christian Valencia, senior designer who took ownership and brought it across the finish line.</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col font-['Istok_Web'] gap-[24px] sm:gap-[30px] md:gap-[38px] items-start leading-[normal] not-italic relative shrink-0 text-[12px] sm:text-[14px] md:text-[16px] tracking-[0.42px]">
        <div className="content-stretch flex flex-col gap-[6px] sm:gap-[7px] md:gap-[8px] items-start relative shrink-0 w-[120px] sm:w-[140px] md:w-[160px]">
          <p className="relative shrink-0 text-[#666]">Role</p>
          <p className="relative shrink-0 text-[#989898]">Product Designer, Xbox × Windows</p>
        </div>
        <div className="content-stretch flex flex-col gap-[6px] sm:gap-[7px] md:gap-[8px] items-start relative shrink-0">
          <p className="relative shrink-0 text-[#666]">Year</p>
          <p className="relative shrink-0 text-[#989898]">2025</p>
        </div>
      </div>
    </div>
  );
}

// Problem section
function Problem() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] sm:gap-[32px] md:gap-[40px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-col sm:flex-row font-['Istok_Web'] gap-[20px] sm:gap-[28px] md:gap-[38px] items-start not-italic relative shrink-0 tracking-[0.42px] w-full">
        <div className="content-stretch flex flex-col gap-[10px] sm:gap-[13px] md:gap-[16px] items-start relative w-full sm:flex-[1_0_0]">
          <p className="leading-[18px] sm:leading-[20px] md:leading-[22px] relative shrink-0 text-[#666] text-[12px] sm:text-[14px] md:text-[16px]">The problem</p>
          <p className="leading-[normal] relative shrink-0 text-[#989898] text-[18px] sm:text-[24px] md:text-[32px] w-full">Windows Task Switcher wasn't built for controller input.</p>
        </div>
        <p className="w-full sm:flex-[1_0_0] leading-[18px] sm:leading-[20px] md:leading-[22px] relative text-[#989898] text-[12px] sm:text-[14px] md:text-[16px] font-['Istok_Web'] not-italic tracking-[0.42px]">
          Windows Task Switcher was designed for a mouse, not a controller. On handheld devices, this meant the D-pad and buttons were completely non-functional in the switcher, leaving players no choice but to awkwardly tap and swipe on the screen to switch between apps. It's the equivalent of navigating your TV by touching it because half your remote's buttons stopped working!
        </p>
      </div>
      <div className="bg-[#1a1a2e] overflow-clip relative rounded-[8px] shrink-0 w-full">
        <img alt="Windows Task Switcher before redesign" className="w-full h-auto object-cover pointer-events-none rounded-[8px]" src={beforeImage} />
      </div>
    </div>
  );
}

// Solution section
function Solution() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] sm:gap-[32px] md:gap-[40px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-col font-['Istok_Web'] gap-[10px] sm:gap-[13px] md:gap-[16px] items-start not-italic relative shrink-0 tracking-[0.42px] w-full">
        <p className="leading-[18px] sm:leading-[20px] md:leading-[22px] relative shrink-0 text-[#666] text-[12px] sm:text-[14px] md:text-[16px]">The solution</p>
        <p className="leading-[normal] min-w-full relative shrink-0 text-[#989898] text-[18px] sm:text-[24px] md:text-[32px] w-[min-content] whitespace-pre-wrap">An experience that truly feels like a gaming experience</p>
        <p className="leading-[18px] sm:leading-[20px] md:leading-[22px] min-w-full relative shrink-0 text-[#989898] text-[12px] sm:text-[14px] md:text-[16px] w-[min-content] whitespace-pre-wrap">Two things guided the design: making controller button mappings visible and intuitive, and keeping the experience uncluttered, surfacing a few options at a time rather than dumping a full desktop interface onto a small screen.</p>
      </div>
      <div className="flex flex-col gap-[8px] w-full">
        <div className="bg-[#1a1a2e] overflow-clip relative rounded-[8px] shrink-0 w-full">
          <img alt="Xbox Ally Task Switcher redesign" className="w-full h-auto object-cover pointer-events-none rounded-[8px]" src={afterGif} />
        </div>
        <a
          href="https://www.youtube.com/watch?v=uvqOIDtKuGM"
          target="_blank"
          rel="noopener noreferrer"
          className="font-['Istok_Web'] text-[#b0b0b0] text-[10px] sm:text-[11px] md:text-[12px] not-italic tracking-[0.42px] hover:opacity-70 transition-opacity"
        >
          YouTube review and clip ↗
        </a>
      </div>
    </div>
  );
}

// Considerations section — styled like "A surprise constraint"
function Considerations() {
  return (
    <div className="bg-[#f9f8f8] min-h-[180px] sm:min-h-[240px] md:min-h-[300px] overflow-clip relative rounded-[12px] sm:rounded-[16px] md:rounded-[20px] shrink-0 w-full p-[24px] sm:p-[36px] md:p-[49px]">
      <div className="content-stretch flex flex-col font-['Istok_Web'] gap-[10px] sm:gap-[13px] md:gap-[16px] items-start not-italic tracking-[0.42px] whitespace-pre-wrap">
        <p className="leading-[18px] sm:leading-[20px] md:leading-[22px] relative shrink-0 text-[#666] text-[12px] sm:text-[14px] md:text-[16px] w-full">Considerations</p>
        <p className="leading-[normal] relative text-[#989898] text-[18px] sm:text-[24px] md:text-[32px] w-full">
          Three things shaped the design: supporting multiple input methods (controller, touch, and mouse), designing for handheld screen constraints without breaking the desktop experience, and navigating the technical and organizational realities of collaborating across two separate teams.
        </p>
      </div>
    </div>
  );
}

// Press link row
function PressLink({ outlet, title, snippet, url }: { outlet: string; title: string; snippet: string; url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block w-full"
    >
      <div className="flex flex-col gap-[6px] sm:gap-[8px] w-full py-[16px] sm:py-[20px] border-b border-[#ebebeb] group-hover:opacity-70 transition-opacity">
        <div className="flex items-center justify-between w-full">
          <p className="font-['Istok_Web'] text-[#666] text-[11px] sm:text-[12px] md:text-[13px] not-italic tracking-[0.42px] uppercase">{outlet}</p>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-[#989898] shrink-0">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <p className="font-['Istok_Web'] text-[#989898] text-[13px] sm:text-[15px] md:text-[17px] not-italic leading-[18px] sm:leading-[20px] md:leading-[22px]">{title}</p>
        <p className="font-['Istok_Web'] text-[#b0b0b0] text-[11px] sm:text-[12px] md:text-[14px] not-italic leading-[16px] sm:leading-[18px]">{snippet}</p>
      </div>
    </a>
  );
}

// Impact section
function Impact() {
  const pressLinks = [
    {
      outlet: "DayOne",
      title: "Xbox's Handheld Mode Available on Any Current Windows Handheld",
      snippet: "Called the task switcher \"a literal godsend, allowing you to close out of unneeded games or applications with a press of the X button.\"",
      url: "https://playday.one/2025/09/18/xbox-handheld-mode-available-to-install-on-any-current-windows-handheld/"
    },
    {
      outlet: "TechRadar",
      title: "This new feature is something I've wanted for years on Windows 11",
      snippet: "Praised the controller-based task switcher as something PC gamers have needed for years.",
      url: "https://tech.yahoo.com/gaming/articles/ive-moved-microsofts-xbox-controllers-000000615.html"
    },
    {
      outlet: "Notebookcheck",
      title: "ROG Xbox Ally Full Screen Experience — Task Switcher Deep Dive",
      snippet: "Highlighted the task switcher as one of two standout features of the new Xbox handheld experience.",
      url: "https://www.notebookcheck.net/Potentially-annoying-ROG-Xbox-Ally-full-screen-experience-requires-restart-for-optimizations-after-switching-from-Windows-desktop.1093126.0.html"
    },
    {
      outlet: "Windows Latest",
      title: "Microsoft built a bloat-free, optimized Windows 11 UI for handheld gaming",
      snippet: "Noted the old task switcher \"is made for a mouse\" — framing exactly the problem your work solved.",
      url: "https://www.windowslatest.com/2025/06/09/microsoft-built-a-bloat-free-optimized-windows-11-ui-for-handheld-gaming/"
    },
    {
      outlet: "TechRadar",
      title: "The Full Screen Experience is moving from handhelds to Windows 11 PCs",
      snippet: "Covered the expansion of the feature — including the task switcher — to all Windows 11 devices.",
      url: "https://tech.yahoo.com/gaming/articles/full-screen-experience-enables-easier-183000105.html"
    },
    {
      outlet: "Xbox Wire",
      title: "Full Screen Experience Available for Xbox Insiders",
      snippet: "Official Xbox announcement calling the Task Switcher \"powerful\" and central to the experience.",
      url: "https://news.xbox.com/en-us/2025/11/21/the-full-screen-experience-is-available-for-xbox-insiders-starting-today/"
    },
  ];

  return (
    <div className="content-stretch flex flex-col gap-[16px] sm:gap-[20px] md:gap-[24px] items-start relative shrink-0 w-full">
      <div className="content-stretch flex flex-col font-['Istok_Web'] gap-[10px] sm:gap-[13px] md:gap-[16px] items-start not-italic relative shrink-0 tracking-[0.42px] w-full">
        <p className="leading-[18px] sm:leading-[20px] md:leading-[22px] relative shrink-0 text-[#666] text-[12px] sm:text-[14px] md:text-[16px]">The impact</p>
        <p className="leading-[normal] min-w-full relative shrink-0 text-[#989898] text-[18px] sm:text-[24px] md:text-[32px] w-[min-content] whitespace-pre-wrap">Reception from online</p>
        <p className="leading-[18px] sm:leading-[20px] md:leading-[22px] min-w-full relative shrink-0 text-[#989898] text-[12px] sm:text-[14px] md:text-[16px] w-[min-content] whitespace-pre-wrap">The redesigned Task Switcher shipped as a flagship feature of the Xbox Full Screen Experience, receiving widespread praise from reviewers. Outlets called it "a literal godsend" for handheld gaming, and the feature has since expanded beyond the ROG Xbox Ally to all Windows 11 PCs and handhelds, reaching millions of players. The long-press task switcher interaction also influenced how Xbox controllers work on Windows 11 broadly, rolling out to all controller users system-wide.</p>
      </div>
      {/* Press links */}
      <div className="w-full border-t border-[#ebebeb]">
        {pressLinks.map((link, i) => (
          <PressLink key={i} {...link} />
        ))}
      </div>
    </div>
  );
}

interface GameModeTaskSwitcherPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GameModeTaskSwitcherPopup({ isOpen, onClose }: GameModeTaskSwitcherPopupProps) {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;
    const handleScroll = () => {
      if (scrollContainer.scrollTop > 20 && !hasScrolled) setHasScrolled(true);
      else if (scrollContainer.scrollTop <= 20 && hasScrolled) setHasScrolled(false);
    };
    scrollContainer.addEventListener('scroll', handleScroll);
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, [hasScrolled]);

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

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className={`fixed z-[100] bg-white shadow-[0px_4px_27.1px_0px_rgba(200,200,200,0.08)] overflow-hidden
              ${isExpanded
                ? 'inset-0 m-0'
                : 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[88vw] sm:w-[88vw] md:w-[85vw] max-w-[900px] h-[75vh] sm:h-[92vh] md:h-[85vh] rounded-[12px] sm:rounded-[20px] md:rounded-[30px] lg:rounded-[40px]'
              }`}
          >
            <div
              ref={scrollContainerRef}
              className="h-full overflow-auto scrollbar-thin"
              style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(0,0,0,0.22) transparent' }}
            >
              <style>{`
                .scrollbar-thin::-webkit-scrollbar { width: 8px; }
                .scrollbar-thin::-webkit-scrollbar-track { background: transparent; }
                .scrollbar-thin::-webkit-scrollbar-thumb { background: rgba(0,0,0,${hasScrolled ? '0.22' : '0'}); border-radius: 10px; transition: background 0.3s ease; }
                .scrollbar-thin::-webkit-scrollbar-thumb:hover { background: rgba(0,0,0,0.3); }
              `}</style>

              <div className={`content-stretch flex flex-col gap-[16px] sm:gap-[20px] md:gap-[24px] items-end pb-[32px] sm:pb-[36px] md:pb-[40px] pt-[50px] sm:pt-[60px] md:pt-[70px] relative ${
                isExpanded ? 'px-[24px] sm:px-[60px] lg:px-[120px]' : 'px-[20px] sm:px-[40px] md:px-[60px]'
              }`}>

                <Header />

                <p className="font-['Istok_Web'] leading-[normal] min-w-full not-italic relative shrink-0 text-[#989898] text-[12px] sm:text-[14px] md:text-[16px] w-[min-content] whitespace-pre-wrap">Making Task Switcher a full-screen experience</p>

                <HeroImage />

                <div className="content-stretch flex flex-col gap-[48px] sm:gap-[70px] md:gap-[100px] items-start relative shrink-0 w-full">
                  <OverviewOutcome />
                  <Problem />
                  <Solution />
                  <Considerations />
                  <Impact />
                </div>

                {/* Expand/Minimize button */}
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="absolute left-[24px] sm:left-[40px] md:left-[60px] size-[24px] sm:size-[26px] md:size-[28px] top-[12px] sm:top-[14px] md:top-[16px] hover:opacity-70 transition-opacity"
                  aria-label={isExpanded ? "Minimize" : "Expand fullscreen"}
                >
                  {isExpanded ? <Minimize /> : <Maximize />}
                </button>

                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute right-[24px] sm:right-[40px] md:right-[60px] size-[24px] sm:size-[26px] md:size-[28px] top-[12px] sm:top-[14px] md:top-[16px] hover:opacity-70 transition-opacity"
                  aria-label="Close popup"
                >
                  <div className="relative size-full">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                      <g>
                        <rect fill="#F0F0F0" height="24" rx="12" width="24" />
                        <path d="M17 7L7 17" stroke="#989898" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path d="M7 7L17 17" stroke="#989898" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      </g>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

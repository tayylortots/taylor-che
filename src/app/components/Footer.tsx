import { useState } from 'react';
import { motion } from 'motion/react';
import svgPaths from '../../imports/svg-m6bckdirl1';

export function Footer({ onScrollToTop, isRevealed }: { onScrollToTop: () => void; isRevealed: boolean }) {
  const [activated, setActivated] = useState(false);

  return (
    <motion.div
      className="w-full h-full min-h-[90vh] relative overflow-hidden rounded-t-[20px] flex flex-col items-center justify-center" style={{ scrollSnapAlign: 'start' }}
      animate={{ backgroundColor: activated ? '#5b8da3' : '#757575' }}
      transition={{ duration: 1.2, ease: 'easeInOut' }}
    >

      {/* Circle Graphic - clickable, triggers color shift */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[520px] md:h-[520px] select-none z-10 cursor-pointer pointer-events-auto"
        onClick={() => setActivated(prev => !prev)}
        data-interactive="true"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={isRevealed ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
      >
        {/* Gray circle (default) */}
        <motion.svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 602 602"
          fill="none"
          animate={{ opacity: activated ? 0 : 1 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        >
          <circle cx="301" cy="301" r="301" fill="url(#footer_gray_grad)" />
          <defs>
            <linearGradient id="footer_gray_grad" x1="301" y1="-112.137" x2="301" y2="602" gradientUnits="userSpaceOnUse">
              <stop stopColor="#C9C9C9" />
              <stop offset="1" stopColor="#757575" />
            </linearGradient>
          </defs>
        </motion.svg>

        {/* Cream circle (activated) */}
        <motion.svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 602 602"
          fill="none"
          animate={{ opacity: activated ? 1 : 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        >
          <circle cx="301" cy="301" r="301" fill="url(#footer_cream_grad)" />
          <defs>
            <linearGradient id="footer_cream_grad" x1="301" y1="-112.137" x2="301" y2="602" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F9F8D0" />
              <stop offset="1" stopColor="rgba(255,238,184,0)" />
            </linearGradient>
          </defs>
        </motion.svg>
      </motion.div>

      {/* Left Cloud — slides in from left */}
      <motion.div
        className="absolute z-20 pointer-events-none w-[180px] sm:w-[240px] md:w-[280px] h-auto"
        style={{ left: '26.5%', top: '57.7%' }}
        initial={false}
        animate={activated ? { x: 0, opacity: 1 } : { x: '-120%', opacity: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut', delay: activated ? 0.25 : 0 }}
      >
        {/* The SVG path draws the cloud upside-down; flip it */}
        <div className="w-full h-full" style={{ transform: 'scaleY(-1) rotate(180deg)' }}>
          <svg className="w-full h-auto" fill="none" viewBox="0 0 347 169" preserveAspectRatio="xMidYMid meet">
            <path d={svgPaths.p18eb9f80} fill="white" />
          </svg>
        </div>
      </motion.div>

      {/* Right Cloud — slides in from right */}
      <motion.div
        className="absolute z-20 pointer-events-none w-[100px] sm:w-[130px] md:w-[150px] h-auto"
        style={{ left: '66%', top: '41.9%' }}
        initial={false}
        animate={activated ? { x: 0, opacity: 1 } : { x: '220%', opacity: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut', delay: activated ? 0.35 : 0 }}
      >
        <svg className="w-full h-auto" fill="none" viewBox="0 0 189 92" preserveAspectRatio="xMidYMid meet">
          <path d={svgPaths.p1b586800} fill="white" />
        </svg>
      </motion.div>

      {/* Main Text — gray (fades out) */}
      <motion.div
        className="absolute left-1/2 top-[22%] sm:top-[15%] -translate-x-1/2 -translate-y-1/2 z-0 text-center pointer-events-none select-none w-full px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={isRevealed ? { opacity: activated ? 0 : 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0 }}
      >
        <h1 className="text-[56px] sm:text-[90px] md:text-[128px] leading-tight font-black font-['Noto_Sans_SC'] text-transparent bg-clip-text bg-gradient-to-b from-[#d9d9d9] to-[#737373]">
          谢谢 <span className="font-['Istok_Web'] italic font-extralight text-[44px] sm:text-[90px] md:text-[128px] whitespace-nowrap">(thank you).</span>
        </h1>
      </motion.div>

      {/* Main Text — cream (fades in on activate) */}
      <motion.div
        className="absolute left-1/2 top-[22%] sm:top-[15%] -translate-x-1/2 -translate-y-1/2 z-0 text-center pointer-events-none select-none w-full px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={isRevealed ? { opacity: activated ? 1 : 0, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0 }}
      >
        <h1 className="text-[56px] sm:text-[90px] md:text-[128px] leading-tight font-black font-['Noto_Sans_SC'] text-transparent bg-clip-text bg-gradient-to-b from-[#fefed6] to-[rgba(243,238,190,0)]">
          谢谢 <span className="font-['Istok_Web'] italic font-extralight text-[44px] sm:text-[90px] md:text-[128px] whitespace-nowrap">(thank you).</span>
        </h1>
      </motion.div>

      {/* Footer Meta — bottom left */}
      <motion.div
        className="absolute bottom-[120px] sm:bottom-8 md:bottom-12 left-1/2 sm:left-8 md:left-12 -translate-x-1/2 sm:translate-x-0 font-['Istok_Web'] text-[14px] sm:text-[16px] md:text-[20px] leading-normal w-[200px] sm:w-[180px] md:w-[200px] text-center sm:text-left z-20 pointer-events-auto"
        initial={{ opacity: 0, x: -20 }}
        animate={isRevealed ? { opacity: 1, x: 0, color: activated ? '#fefed6' : '#cecece' } : { opacity: 0, x: -20 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
      >
        made with figma, react.js, &amp; some all-nighters.
      </motion.div>

      {/* Back to Top — bottom center, tight hitbox */}
      <motion.button
        onClick={onScrollToTop}
        className="absolute bottom-[70px] sm:bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 inline-flex items-center gap-[6px] sm:gap-[8px] md:gap-[10px] z-20 pointer-events-auto cursor-pointer hover:opacity-70 transition-opacity"
        style={{ width: 'max-content' }}
        initial={{ opacity: 0, y: 20 }}
        animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.5 }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="sm:w-[22px] sm:h-[22px] md:w-[24px] md:h-[24px]">
          <motion.path
            d="M12 19V5"
            animate={{ stroke: activated ? '#fefed5' : '#cecece' }}
            transition={{ duration: 1.2 }}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <motion.path
            d="M5 12L12 5L19 12"
            animate={{ stroke: activated ? '#fefed5' : '#cecece' }}
            transition={{ duration: 1.2 }}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <motion.span
          className="font-['Istok_Web'] text-[14px] sm:text-[16px] md:text-[20px]"
          animate={{ color: activated ? '#fefed5' : '#cecece' }}
          transition={{ duration: 1.2 }}
        >
          back to top
        </motion.span>
      </motion.button>

      {/* Thanks for visiting — bottom right */}
      <motion.div
        className="absolute bottom-6 sm:bottom-8 md:bottom-12 left-1/2 sm:left-auto -translate-x-1/2 sm:translate-x-0 sm:right-8 md:right-12 font-['Istok_Web'] text-[14px] sm:text-[16px] md:text-[20px] leading-normal text-center sm:text-right z-20 pointer-events-auto"
        initial={{ opacity: 0, x: 20 }}
        animate={isRevealed ? { opacity: 1, x: 0, color: activated ? '#fefed6' : '#cecece' } : { opacity: 0, x: 20 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
      >
        thanks for visiting!
      </motion.div>

    </motion.div>
  );
}
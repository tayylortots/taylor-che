import { motion } from 'motion/react';
import { useMemo, RefObject, useState } from 'react';

interface BubbleProps {
  text: string;
  x: number;
  y: number;
  delay: number;
  hasArrow?: boolean;
  constraintRef: RefObject<HTMLDivElement>;
  href?: string;
}

export function Bubble({ text, x, y, delay, hasArrow = false, constraintRef, href }: BubbleProps) {
  const [isDragging, setIsDragging] = useState(false);
  
  // Randomize float range slightly for organic feel
  const { floatY, floatX, duration } = useMemo(() => ({
    floatY: 10 + Math.random() * 10,
    floatX: 5 + Math.random() * 5,
    duration: 6 + Math.random() * 4
  }), []);

  const handleClick = () => {
    // Only open link if user didn't drag
    if (href && !isDragging) {
      window.open(href, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.div
      drag
      dragMomentum={true}
      dragTransition={{ bounceStiffness: 300, bounceDamping: 40, power: 0.2 }}
      dragConstraints={constraintRef}
      dragElastic={0}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => {
        // Reset dragging state after a brief delay to prevent click from firing
        setTimeout(() => setIsDragging(false), 100);
      }}
      initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{
        opacity: { duration: 0.8, delay, ease: "easeOut" },
        scale: { duration: 0.8, delay, ease: "backOut" },
        rotate: { duration: 0.8, delay, ease: "backOut" },
      }}
      className="absolute z-20 pointer-events-auto"
      style={{ left: '50%', top: '50%', marginLeft: x, marginTop: y }}
    >
      <motion.div
        animate={{
          y: [0, -floatY, 0],
          x: [0, floatX, 0, -floatX, 0],
        }}
        transition={{
          y: { duration: duration, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" },
          x: { duration: duration * 1.3, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" },
        }}
        onClick={handleClick}
        className={`px-6 py-3 rounded-full border border-white/40 flex items-center gap-2 group transition-shadow select-none ${
          href ? 'cursor-pointer hover:shadow-lg' : 'cursor-grab active:cursor-grabbing'
        }`}
        style={{
          background: "linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%)",
          backdropFilter: "blur(5px)",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.07), inset 0 0 0 1px rgba(255, 255, 255, 0.3), inset 0 4px 6px rgba(255, 255, 255, 0.5)",
        }}
      >
        <span className="text-[#757575] font-['Istok_Web'] text-lg whitespace-nowrap pointer-events-none">
          {text}
        </span>
        {hasArrow && (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#757575]">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </motion.div>
    </motion.div>
  );
}
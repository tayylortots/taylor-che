import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import type { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  full?: boolean;
}

// Fades and slides content in slowly the first time it scrolls into view.
// Driven by explicit state (not `whileInView`) so it still works inside
// <AnimatePresence initial={false}>, which would otherwise skip the hidden start.
export function Reveal({ children, className = '', delay = 0, full = true }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.12 });

  return (
    <motion.div
      ref={ref}
      className={`${full ? 'w-full ' : ''}${className}`}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

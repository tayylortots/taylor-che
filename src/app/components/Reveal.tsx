import { motion } from 'motion/react';
import type { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  full?: boolean;
}

// Fades and slides content in slowly the first time it scrolls into view
export function Reveal({ children, className = '', delay = 0, full = true }: RevealProps) {
  return (
    <motion.div
      className={`${full ? 'w-full ' : ''}${className}`}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

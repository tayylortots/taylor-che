import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export function CustomCursor({ isActive, isHoveringChar }: { isActive: boolean; isHoveringChar?: boolean }) {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 150); // Center larger cursor (300px)
      cursorY.set(e.clientY - 150);
    };
    
    if (isActive) {
      window.addEventListener('mousemove', moveCursor);
      document.body.style.cursor = 'none';
    } else {
      document.body.style.cursor = 'auto';
    }

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.body.style.cursor = 'auto';
    };
  }, [isActive, cursorX, cursorY]);

  if (!isActive) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-[300px] h-[300px] rounded-full pointer-events-none z-50"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        background: 'radial-gradient(circle, rgba(193, 210, 232, 0.8) 0%, rgba(193, 210, 232, 0) 70%)',
        filter: 'blur(20px)',
      }}
      animate={{
        opacity: isHoveringChar ? 0 : 1,
        scale: isHoveringChar ? 1.5 : 1,
      }}
      transition={{ duration: 0.5 }}
    />
  );
}

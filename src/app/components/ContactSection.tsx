import { motion } from 'motion/react';

const links = [
  { title: "Resume", url: "#" },
  { title: "LinkedIn", url: "https://www.linkedin.com/in/taylor-che/" },
  { title: "Instagram", url: "https://www.instagram.com/tayylor.tots/" },
  { title: "Behance", url: "https://www.behance.net/taylorche" },
];

function ArrowUpRight() {
  return (
    <motion.div 
      className="relative shrink-0 size-[40px] sm:size-[50px] md:size-[60px]"
      variants={{
        hover: { rotate: 45 }
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <svg className="absolute block size-full" fill="none" viewBox="0 0 60 60">
        <path d="M17.5 42.5L42.5 17.5" stroke="#989898" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        <path d="M17.5 17.5H42.5V42.5" stroke="#989898" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
      </svg>
    </motion.div>
  );
}

export function ContactSection({ isVisible }: { isVisible: boolean }) {
  return (
    <div className="w-full">
      {/* Links Title */}
      <motion.div
        className="flex flex-col gap-[16px] items-start relative w-full mb-[20px] sm:mb-[25px] md:mb-[33px] mt-[40px] sm:mt-[50px] md:mt-[60px]"
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <p className="font-['Istok_Web'] leading-[normal] not-italic text-[#989898] text-[60px] sm:text-[90px] md:text-[128px] w-full">
          Links
        </p>
      </motion.div>

      {/* Links List */}
      <div className="flex flex-col w-full">
        {links.map((link, index) => (
          <div key={index} className="w-full">
            <a href={link.url} target="_blank" rel="noopener noreferrer" className="block w-full">
              <motion.div 
                whileHover="hover"
                initial="initial"
                className="group flex items-center justify-between w-full mb-[20px] sm:mb-[25px] md:mb-[33px] cursor-pointer gap-4"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                animate={isVisible ? 'visible' : 'hidden'}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 + index * 0.1 }}
              >
                <div className="flex flex-col font-['Istok_Web'] items-start leading-[normal] text-[#989898] flex-1 min-w-0 group-hover:opacity-70 transition-opacity">
                  <p className="text-[24px] sm:text-[30px] md:text-[36px] w-full">{link.title}</p>
                </div>
                <ArrowUpRight />
              </motion.div>
            </a>
            
            {/* Divider Line - only show if not the last item */}
            {index !== links.length - 1 && (
              <motion.div
                className="h-px bg-[#afafaf] w-full mb-[20px] sm:mb-[25px] md:mb-[33px]"
                initial={{ scaleX: 0 }}
                animate={isVisible ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 + index * 0.1 }}
                style={{ transformOrigin: 'left' }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
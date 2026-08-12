import { motion } from 'motion/react';

type Tab = 'work' | 'contact';

interface NavigationProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

export function Navigation({ activeTab, onTabChange }: NavigationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="absolute top-[40px] left-0 right-0 flex justify-center z-50 pointer-events-auto"
    >
      <div
        className="flex gap-[10px] items-center justify-center p-[8px] relative rounded-[60px] border border-[#e5e5e5] bg-white/50 backdrop-blur-sm"
        style={{
          backgroundImage: "linear-gradient(100.227deg, rgba(255, 255, 255, 0.2) 8.6627%, rgba(255, 255, 255, 0) 105.84%)"
        }}
      >
        <NavItem
          label="work"
          isActive={activeTab === 'work'}
          onClick={() => onTabChange('work')}
        />
        <NavItem
          label="contact"
          isActive={activeTab === 'contact'}
          onClick={() => onTabChange('contact')}
        />
      </div>
    </motion.div>
  );
}

function NavItem({ label, isActive, onClick }: { label: string; isActive: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`
        relative px-[24px] py-[8px] rounded-[60px] transition-all duration-300 cursor-pointer
        ${isActive
          ? 'bg-[#efefef] shadow-[inset_1px_-2px_11.2px_0px_rgba(0,0,0,0.04)]'
          : 'hover:bg-[#f5f5f5] bg-transparent'
        }
      `}
    >
      <span className="font-['Istok_Web'] leading-[normal] not-italic text-[#afafaf] text-[24px]">
        {label}
      </span>
    </button>
  );
}

import { useRef, useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useAudio } from "@/context/AudioContext";
import {
  IconFinder,
  IconFolder,
  IconStack,
  IconMap,
  IconNote,
  IconMail,
  IconDoc,
  IconHeart,
  IconPDF,
  IconAppleMusic,
} from "@/components/icons/SystemIcons";

const items = [
  { to: "/", label: "Finder", Icon: IconFinder },
  { to: "/about", label: "About", Icon: IconNote },
  { to: "/projects", label: "Projects", Icon: IconFolder },
  { to: "/tech-stack", label: "Tech", Icon: IconStack },
  { to: "/experience", label: "Experience", Icon: IconMap },
  { to: "/blog", label: "Blog", Icon: IconDoc },
  { to: "/interests", label: "Interests", Icon: IconHeart },
  { to: "/contact", label: "Contact", Icon: IconMail },
];

const rightItems = [
  { to: "/resume", label: "Resume", Icon: IconPDF },
];

// ITEM DOCK COMPONENTS
function DockItem({ to, label, Icon, mouseX, isMobile }: any) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const sizeSync = useTransform(distance, [-150, 0, 150], [56, 80, 56]);
  const size = useSpring(sizeSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <Link to={to as any} className="group relative flex flex-col items-center justify-end shrink-0" aria-label={label}>
      <span className="hidden sm:block absolute -top-10 text-[11px] font-medium opacity-0 group-hover:opacity-100 transition-opacity bg-foreground/90 text-background px-2.5 py-1 rounded-md whitespace-nowrap">
        {label}
      </span>
      <motion.div
        ref={ref}
        style={isMobile ? { width: 42, height: 42 } : { width: size, height: size }}
        className="flex items-center justify-center rounded-2xl transition-colors hover:bg-black/5 dark:hover:bg-white/5"
      >
        <Icon className="max-w-full max-h-full w-auto h-auto drop-shadow-sm" />
      </motion.div>
    </Link>
  );
}

// MUSIC BUTTON COMPONENTS
function MusicToggleButton({ mouseX, isMobile }: any) {
  const { isPlaying, toggleAudio } = useAudio();
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const sizeSync = useTransform(distance, [-150, 0, 150], [56, 80, 56]);
  const size = useSpring(sizeSync, { mass: 0.1, stiffness: 100, damping: 12 });

  return (
    <button 
      onClick={toggleAudio} 
      className="group relative flex flex-col items-center justify-end shrink-0 outline-none" 
      aria-label="Toggle Music"
    >
      <motion.div
        ref={ref}
        style={isMobile ? { width: 42, height: 42 } : { width: size, height: size }}
        className="relative flex items-center justify-center rounded-xl transition-colors hover:bg-black/5 dark:hover:bg-white/5 overflow-hidden"
      >
        {isPlaying && (
          <div 
            className="absolute inset-0 rounded-xl shadow-[inset_0_0_0_4px_#f472b6] animate-pulse pointer-events-none z-20" 
          />
        )}

  {/* Ikon Apple Music */}
  <IconAppleMusic className="w-full h-full z-10" />
</motion.div>
      
    </button>
  );
}

// MAIN DOCK
export function Dock() {
  const mouseX = useMotionValue(Infinity);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <nav
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 px-2 py-2 sm:px-3 sm:py-2 rounded-3xl bg-white/60 dark:bg-zinc-900/60 backdrop-blur-2xl border border-white/40 dark:border-white/10 shadow-2xl flex items-end gap-1.5 sm:gap-2.5 max-w-[calc(100vw-24px)] overflow-x-auto scrollbar-none"
      onMouseMove={(e) => !isMobile && mouseX.set(e.pageX)}
      onMouseLeave={() => !isMobile && mouseX.set(Infinity)}
    >
      {items.map((item) => (
        <DockItem key={item.to + item.label} {...item} mouseX={mouseX} isMobile={isMobile} />
      ))}
      
      <MusicToggleButton mouseX={mouseX} isMobile={isMobile} />

      <span className="w-px h-7 sm:h-10 bg-zinc-300 dark:bg-zinc-700 mx-1 sm:mx-1.5 rounded-full shrink-0" />
      
      {rightItems.map((item) => (
        <DockItem key={item.to + item.label} {...item} mouseX={mouseX} isMobile={isMobile} />
      ))}
    </nav>
  );
}
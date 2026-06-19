import { motion } from "motion/react";

const ANIMATION_CONFIG = {
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  hoverTransition: { duration: 0.22, ease: "easeOut" },
};

const SHADOWS = {
  resting: "0 0 0 1px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.06), 0 8px 20px rgba(0,0,0,0.09), 0 20px 40px rgba(0,0,0,0.07)",
  hover: "0 0 0 1px rgba(0,0,0,0.10), 0 6px 14px rgba(0,0,0,0.13), 0 20px 44px rgba(0,0,0,0.16), 0 32px 64px rgba(0,0,0,0.10)",
};

export interface PhotoCardProps {
  src?: string;
  caption?: string;
  rotate?: number;
  className?: string; 
}

export function PhotoCard({
  src = "/placeholder.jpg",
  caption = "",
  rotate = 0,
  className = "",
}: PhotoCardProps) {
  
  return (
    <motion.figure
      initial={{ opacity: 0, y: 12, rotate: rotate - 3 }}
      animate={{ opacity: 1, y: 0, rotate, boxShadow: SHADOWS.resting }}
      transition={ANIMATION_CONFIG.transition}
      whileHover={{ 
        rotate: 0, 
        y: -3, 
        scale: 1.03,
        boxShadow: SHADOWS.hover,
        transition: ANIMATION_CONFIG.hoverTransition 
      }}
      className={`w-full flex flex-col bg-white p-2 sm:p-3 pb-4 sm:pb-5 border border-border rounded-[6px] ${className}`}
    >
      <div
        className="relative w-full aspect-[4/5] overflow-hidden rounded-[3px]"
        style={{
          background: "linear-gradient(135deg, var(--accent) 0%, #ffffff 50%, var(--sticky) 100%)",
        }}
      >
        <img
          src={src}
          alt={caption}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </div>

      <figcaption className="mt-2 sm:mt-3 text-center font-display text-[12px] sm:text-[14px] font-semibold tracking-tight">
        {caption}
      </figcaption>
    </motion.figure>
  );
}
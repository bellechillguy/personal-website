import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import type { ComponentType, SVGProps } from "react";

interface DesktopIconProps {
  to:
    | "/about"
    | "/projects"
    | "/tech-stack"
    | "/experience"
    | "/blog"
    | "/interests"
    | "/contact"
    | "/resume";
  label: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  delay?: number;
}

export function DesktopIcon({ to, label, Icon, delay = 0 }: DesktopIconProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
    >
      <Link
        to={to}
        className="group flex flex-col items-center gap-1.5 w-[88px] text-center select-none"
      >
        <span className="icon-hover">
          <Icon className="w-14 h-14 md:w-16 md:h-16" />
        </span>
        <span className="px-1.5 py-0.5 rounded text-[12px] font-medium text-foreground/80 group-hover:text-foreground group-hover:bg-foreground/5">
          {label}
        </span>
      </Link>
    </motion.div>
  );
}

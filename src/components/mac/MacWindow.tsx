import { useNavigate } from "@tanstack/react-router";
import { motion } from "motion/react";
import type { ReactNode } from "react";

interface MacWindowProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  maxWidth?: string;
}

export function MacWindow({ title, subtitle, children, maxWidth = "960px" }: MacWindowProps) {
  const navigate = useNavigate();
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.97, y: 8 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      className="mac-window mx-auto w-full"
      style={{ maxWidth }}
      aria-labelledby="window-title"
    >
      <header className="mac-titlebar relative">
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate({ to: "/" })}
            aria-label="Close window"
            className="traffic-light hover:brightness-90 cursor-pointer"
            style={{ background: "var(--tl-red)" }}
          />
          <span className="traffic-light" style={{ background: "var(--tl-yellow)" }} />
          <span className="traffic-light" style={{ background: "var(--tl-green)" }} />
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 text-center pointer-events-none">
          <div id="window-title" className="font-display font-semibold">
            {title}
          </div>
          {subtitle ? <div className="text-[11px] text-ink-3 font-normal">{subtitle}</div> : null}
        </div>
      </header>
      <div className="p-5 md:p-8">{children}</div>
    </motion.section>
  );
}

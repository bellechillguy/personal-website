import { motion } from "motion/react";
import type { ReactNode } from "react";

export function StickyNote({
  children,
  rotate = 2,
  tone = "yellow",
}: {
  children: ReactNode;
  rotate?: number;
  tone?: "yellow" | "cyan";
}) {
  const bg = tone === "cyan" ? "var(--accent)" : "var(--sticky)";
  const stroke = tone === "cyan" ? "var(--accent-strong)" : "var(--sticky-strong)";
  return (
    <motion.aside
      initial={{ opacity: 0, y: 10, rotate: rotate - 3 }}
      animate={{ opacity: 1, y: 0, rotate }}
      whileHover={{ y: -3, rotate: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="inline-block px-4 py-3 text-[13px] leading-snug font-medium shadow-[var(--sh-2)]"
      style={{
        background: bg,
        borderTop: `2px solid ${stroke}`,
        borderRadius: 4,
        maxWidth: 240,
        fontFamily: "var(--font-sans)",
      }}
    >
      {children}
    </motion.aside>
  );
}

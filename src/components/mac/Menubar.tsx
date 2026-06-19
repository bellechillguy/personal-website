import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

const fmt = (d: Date) =>
  d.toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });

export function Menubar() {
  const [now, setNow] = useState<string>("");
  useEffect(() => {
    setNow(fmt(new Date()));
    const t = setInterval(() => setNow(fmt(new Date())), 30_000);
    return () => clearInterval(t);
  }, []);
  return (
    <div
      className="fixed inset-x-0 top-0 z-50 h-7 flex items-center justify-between px-4 text-[12px]"
      style={{ background: "var(--bar)", color: "rgba(255,255,255,0.92)" }}
    >
      <div className="flex items-center gap-4">
        <Link to="/" className="font-display font-bold tracking-tight text-[13px] flex items-center gap-1">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
        </Link>
        <span className="font-display font-bold">bellechillguy</span>
        <nav className="hidden sm:flex items-center gap-3 text-white/60">
          <Link to="/about" className="font-bold hover:text-white/95">About</Link>
          <Link to="/projects" className="font-bold hover:text-white/95">Projects</Link>
          <Link to="/blog" className="font-bold hover:text-white/95">Blog</Link>
          <Link to="/contact" className="font-bold hover:text-white/95">Contact</Link>
        </nav>
      </div>
      <span className="tabular-nums text-white/70 hidden xs:inline">{now}</span>
    </div>
  );
}

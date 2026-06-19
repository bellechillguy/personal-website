import { iconMap } from "./SystemIcons";
import React from "react";

export function TechTag({ name, color = "#111827" }: { name: string; color?: string }) {
  const IconComponent = iconMap ? (iconMap as Record<string, any>)[name] : null;

  return (
    <div className="tile-hover flex items-center gap-2 bg-surface border border-border rounded-lg pl-2 pr-3 py-1.5 shadow-[var(--sh-1)]">
      {IconComponent ? (
        <IconComponent className="w-4 h-4" style={{ color }} />
      ) : (
        <span className="w-2 h-2 rounded-full" style={{ background: color }} aria-hidden />
      )}
      
      <span className="text-[12.5px] font-medium">{name}</span>
    </div>
  );
}
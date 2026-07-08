import { component$ } from "@builder.io/qwik";
import { iconMap } from "./SystemIcons";

export const TechTag = component$(
  ({ name, color = "#111827" }: { name: string; color?: string }) => {
    const IconComponent = iconMap ? (iconMap as Record<string, any>)[name] : null;

    return (
      <div class="tile-hover flex items-center gap-2 bg-surface border border-border rounded-lg pl-2 pr-3 py-1.5 shadow-[var(--sh-1)]">
        {IconComponent ? (
          <IconComponent className="w-4 h-4" style={{ color }} />
        ) : (
          <span class="w-2 h-2 rounded-full" style={{ background: color }} aria-hidden />
        )}

        <span class="text-[12.5px] font-medium">{name}</span>
      </div>
    );
  },
);

import { component$ } from "@builder.io/qwik";
import { iconMap } from "./SystemIcons";

export const TechTag = component$(
  ({
    name,
    color = "#111827",
    iconTone,
  }: {
    name: string;
    color?: string;
    iconTone?: "monochrome";
  }) => {
    const IconComponent = iconMap ? (iconMap as Record<string, any>)[name] : null;

    return (
      <div class="tile-hover flex items-center gap-2 bg-surface border border-border rounded-lg pl-2 pr-3 py-1.5 shadow-[var(--sh-1)]">
        {IconComponent ? (
          <IconComponent
            className="tech-tag__icon w-4 h-4"
            data-icon-tone={iconTone}
            style={{ color }}
          />
        ) : (
          <span class="w-2 h-2 rounded-full" style={{ background: color }} aria-hidden />
        )}

        <span class="text-[12.5px] font-medium">{name}</span>
      </div>
    );
  },
);

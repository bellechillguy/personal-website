import { component$ } from "@builder.io/qwik";
import { techStack } from "@/data/tech-stack";
import { TechTag } from "@/components/icons/BrandIcons";

export const TechStackPanel = component$(() => {
  return (
    <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
      {techStack.map((cat, index) => (
        <section
          key={cat.title}
          class="tech-card content-card panel-cyan flex flex-col p-5 animate-window-in"
          style={{ animationDelay: `${index * 75}ms` }}
        >
          <div class="mb-4 flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="h-5 w-1.5 rounded-full bg-foreground/25" aria-hidden="true" />

              <h2 class="font-display text-[17px] font-bold tracking-tight text-foreground">
                {cat.title}
              </h2>
            </div>

            <span class="window-count-badge px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-foreground/55">
              {cat.items.length} tools
            </span>
          </div>

          <ul class="flex flex-wrap gap-2">
            {cat.items.map((it) => (
              <li
                key={it.name}
                class="transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:scale-105"
              >
                {TechTag ? (
                  <TechTag name={it.name} color={it.color} iconTone={it.iconTone} />
                ) : (
                  <span class="inline-flex items-center rounded-lg border border-border/60 bg-muted px-3 py-1.5 text-[13px] font-medium text-foreground/80 shadow-sm transition-colors hover:border-border hover:bg-surface">
                    {it.name}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
});

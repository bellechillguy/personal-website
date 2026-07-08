import { component$ } from "@builder.io/qwik";
import { techStack } from "@/data/tech-stack";
import { TechTag } from "@/components/icons/BrandIcons";

export const TechStackPanel = component$(() => {
  return (
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      {techStack.map((cat, index) => (
        <section
          key={cat.title}
          class="flex flex-col rounded-[18px] border border-border bg-surface p-6 shadow-[var(--sh-1)] transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:shadow-lg animate-window-in"
          style={{ animationDelay: `${index * 75}ms` }}
        >
          <div class="flex items-center justify-between mb-6">
            <div class="flex items-center gap-3">
              <div
                class="w-1.5 h-5 rounded-full bg-foreground/20 dark:bg-foreground/40"
                aria-hidden="true"
              />

              <h2 class="font-display text-[18px] font-bold text-foreground tracking-tight">
                {cat.title}
              </h2>
            </div>

            <span class="rounded-full bg-muted border border-border/50 px-2.5 py-0.5 text-[11px] font-bold text-foreground/50 uppercase tracking-wider">
              {cat.items.length} tools
            </span>
          </div>

          <ul class="flex flex-wrap gap-2.5">
            {cat.items.map((it) => (
              <li
                key={it.name}
                class="transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:scale-105"
              >
                {TechTag ? (
                  <TechTag name={it.name} color={it.color} />
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

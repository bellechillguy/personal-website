import { component$ } from "@builder.io/qwik";
import { experiences } from "@/data/experiences";

const dotFor: Record<string, string> = {
  Education: "var(--color-accent-strong)",
  Certification: "var(--color-sticky-strong)",
  Organization: "#34d399",
  Volunteer: "#f472b6",
};

export const ExperiencePanel = component$(() => {
  return (
    <div class="relative ml-3 border-l border-border/70">
      <ol class="space-y-8">
        {experiences.map((e, index) => (
          <li
            key={`${e.title}-${index}`}
            class="relative pl-8 group animate-window-in"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <span
              aria-hidden="true"
              class="absolute -left-[7.5px] top-4 w-3.5 h-3.5 rounded-full border-[3px] border-surface shadow-sm transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-125"
              style={{
                background: dotFor[e.category] || "var(--color-accent)",
              }}
            />

            <article class="rounded-[14px] border border-transparent p-4 -ml-4 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:bg-sticky/40 group-hover:border-border/50 group-hover:shadow-sm">
              <div class="flex flex-col md:flex-row md:items-start justify-between gap-2 md:gap-4">
                <div>
                  <h3 class="font-display text-[17px] font-bold text-foreground leading-tight group-hover:text-accent-ink dark:group-hover:text-accent-strong transition-colors">
                    {e.title}
                  </h3>

                  {e.org && <p class="mt-1 text-[14px] font-medium text-foreground/70">{e.org}</p>}
                </div>

                <time class="shrink-0 text-[12px] font-medium text-foreground/50 tabular-nums md:mt-1">
                  {e.period}
                </time>
              </div>

              <div class="mt-3 flex items-center gap-2">
                <span class="inline-flex rounded-full bg-surface border border-border/60 px-2 py-0.5 text-[10px] uppercase tracking-wider font-bold text-foreground/60 shadow-sm transition-colors group-hover:bg-muted group-hover:text-foreground/80">
                  {e.category}
                </span>
              </div>

              {e.description && (
                <p class="mt-3 text-[14px] leading-relaxed text-foreground/75 max-w-2xl">
                  {e.description}
                </p>
              )}
            </article>
          </li>
        ))}
      </ol>
    </div>
  );
});

import { component$ } from "@builder.io/qwik";
import { projects } from "@/data/projects";

export const ProjectsPanel = component$(() => {
  return (
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((p, index) => (
        <a
          key={p.title}
          href={p.link}
          target="_blank"
          rel="noreferrer noopener"
          class="group flex flex-col overflow-hidden rounded-[18px] border border-border bg-surface shadow-[var(--sh-1)] transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background animate-window-in"
          style={{ animationDelay: `${index * 75}ms` }}
        >
          <div
            class="relative aspect-[16/9] overflow-hidden bg-muted/20 border-b border-border/50"
            style={{
              background: `linear-gradient(135deg, ${p.accent}, var(--color-muted))`,
            }}
          >
            <img
              src={p.image}
              alt={`Screenshot of ${p.title}`}
              class="w-full h-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
            />

            <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

            <span class="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-surface/90 backdrop-blur px-3 py-1.5 text-[11px] font-bold text-foreground shadow-sm transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105">
              Visit
              <span class="transition-transform duration-300 ease-out group-hover:-translate-y-[2px] group-hover:translate-x-[2px]">
                ↗
              </span>
            </span>
          </div>

          <div class="p-6 flex flex-col gap-4 flex-1">
            <div>
              <h3 class="font-display text-xl font-bold leading-tight text-foreground group-hover:text-accent-ink dark:group-hover:text-accent-strong transition-colors">
                {p.title}
              </h3>
              <p class="mt-2 text-[14px] leading-relaxed text-foreground/75 line-clamp-2">
                {p.blurb}
              </p>
            </div>

            {p.features && p.features.length > 0 ? (
              <ul class="space-y-1.5 mt-auto">
                {p.features.slice(0, 2).map((f) => (
                  <li key={f} class="flex items-start gap-2 text-[13px] text-foreground/70">
                    <span class="mt-[2px] text-foreground/40 text-[10px]" aria-hidden="true">
                      ▹
                    </span>
                    <span class="line-clamp-1">{f}</span>
                  </li>
                ))}
              </ul>
            ) : null}

            <div class="flex flex-wrap gap-2 pt-4 border-t border-border/60">
              {p.tech.slice(0, 4).map((t) => (
                <span
                  key={t}
                  class="rounded-full bg-muted border border-border/50 px-2.5 py-1 text-[11px] font-medium text-foreground/80"
                >
                  {t}
                </span>
              ))}

              {p.tech.length > 4 ? (
                <span class="rounded-full px-2.5 py-1 text-[11px] font-medium text-foreground/50 border border-transparent">
                  +{p.tech.length - 4}
                </span>
              ) : null}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
});

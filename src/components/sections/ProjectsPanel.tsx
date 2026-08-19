import { component$ } from "@builder.io/qwik";
import { projects } from "@/data/projects";

export const ProjectsPanel = component$(() => {
  return (
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
      {projects.map((p, index) => (
        <a
          key={p.title}
          href={p.link}
          target="_blank"
          rel="noreferrer noopener"
          class="project-card content-card group flex flex-col overflow-hidden animate-window-in"
          style={{ animationDelay: `${index * 75}ms` }}
        >
          <div class="relative aspect-[16/9] overflow-hidden border-b border-border/50 bg-muted/20">
            <img
              src={p.image}
              alt={`Screenshot of ${p.title}`}
              class="w-full h-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
            />

            <span aria-hidden="true" class="project-image-shade" />

            <span class="glass-control absolute top-3 right-3 flex items-center gap-1 px-3 py-1.5 text-[11px] font-bold text-foreground">
              Visit
              <span class="transition-transform duration-300 ease-out group-hover:-translate-y-[2px] group-hover:translate-x-[2px]">
                ↗
              </span>
            </span>
          </div>

          <div class="panel-pink project-card-content flex min-h-[185.689px] flex-1 flex-col gap-4 p-6">
            <div>
              <h3 class="project-card-title text-foreground transition-colors">
                <span class="project-card-title-initial">{p.title.charAt(0)}</span>
                <span>{p.title.slice(1)}</span>
              </h3>
              <p class="mt-2 line-clamp-2 text-[14px] leading-[22.75px] text-foreground/75">
                {p.blurb}
              </p>
            </div>

            <div class="project-card-tags mt-auto flex flex-wrap gap-2 border-t pt-[16.909px]">
              {p.tech.slice(0, 4).map((t) => (
                <span
                  key={t}
                  class="project-tag rounded-full px-[10.909px] py-[4.909px] text-[11px] font-medium leading-[16.5px] text-foreground/80"
                >
                  {t}
                </span>
              ))}

              {p.tech.length > 4 ? (
                <span class="project-card-more rounded-full border border-transparent px-[10.909px] py-[4.909px] text-[11px] font-medium leading-[16.5px]">
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

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
    <div class="ml-3">
      {/* Menggunakan flex dan padding alih-alih space-y agar perhitungan garis akurat */}
      <ol class="flex flex-col">
        {experiences.map((e, index) => {
          const isGrouped = "roles" in e;
          const entryKey = isGrouped ? e.org : e.title;

          return (
            <li
              key={`${entryKey}-${index}`}
              class="relative pl-8 pb-8 last:pb-0 group animate-window-in"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              {/* --- MAIN TIMELINE LINE --- */}
              {/* Garis ditarik 100% dari tengah titik ini ke tengah titik berikutnya, disembunyikan di item terakhir */}
              {index !== experiences.length - 1 && (
                <span
                  aria-hidden="true"
                  class="absolute left-0 top-[23px] w-px h-full bg-border/70"
                />
              )}

              {/* MAIN TIMELINE DOT */}
              <span
                aria-hidden="true"
                class="absolute -left-[6.5px] top-4 w-3.5 h-3.5 rounded-full border-[3px] border-surface shadow-sm transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-125"
                style={{
                  background: dotFor[e.category] || "var(--color-accent)",
                }}
              />

              <article class="rounded-[14px] border border-transparent p-4 -ml-4 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:bg-sticky/40 group-hover:border-border/50 group-hover:shadow-sm">
                
                {/* Header Section */}
                <div class="flex flex-col md:flex-row md:items-start justify-between gap-2 md:gap-4">
                  <div>
                    <h3 class="font-display text-[17px] font-bold text-foreground leading-tight transition-colors group-hover:text-accent-ink">
                      {isGrouped ? e.org : e.title}
                    </h3>
                    {!isGrouped && e.org && (
                      <p class="mt-1 text-[14px] font-medium text-foreground/70">{e.org}</p>
                    )}
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

                {/* --- SUB-EXPERIENCE REFACTOR --- */}
                {isGrouped ? (
                  <div class="relative mt-5 ml-1">
                    <div class="flex flex-col">
                      {e.roles.map((role, roleIndex) => (
                        <section
                          key={`${role.title}-${role.period}`}
                          class="relative pl-5 pb-6 last:pb-0"
                          aria-label={`${role.title} at ${e.org}`}
                        >
                          {/* SUB TIMELINE LINE */}
                          {roleIndex !== e.roles.length - 1 && (
                            <span
                              aria-hidden="true"
                              class="absolute left-0 top-[11px] w-px h-full bg-border/80"
                            />
                          )}

                          {/* SUB TIMELINE DOT */}
                          <span
                            aria-hidden="true"
                            class="absolute -left-[4.5px] top-[6px] h-2.5 w-2.5 rounded-full border-2 border-surface bg-foreground/30"
                          />

                          <div class="flex flex-col gap-0.5">
                            <div class="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                              <h4 class="font-display text-[15px] font-bold leading-tight text-foreground">
                                {role.title}
                              </h4>
                              <time class="text-[12px] font-medium tabular-nums text-foreground/50 before:content-['•'] before:mr-2 before:text-foreground/30">
                                {role.period}
                              </time>
                            </div>
                            
                            {role.type && (
                              <p class="text-[12px] font-medium text-foreground/65">
                                {role.type}
                              </p>
                            )}
                          </div>

                          {role.description && (
                            <p class="mt-1.5 max-w-2xl text-[13px] leading-relaxed text-foreground/70">
                              {role.description}
                            </p>
                          )}
                          
                          {roleIndex < e.roles.length - 1 && (
                            <span aria-hidden="true" class="mt-5 block h-px bg-border/40 md:hidden" />
                          )}
                        </section>
                      ))}
                    </div>
                  </div>
                ) : (
                  e.description && (
                    <p class="mt-3 text-[14px] leading-relaxed text-foreground/75 max-w-2xl">
                      {e.description}
                    </p>
                  )
                )}
              </article>
            </li>
          );
        })}
      </ol>
    </div>
  );
});
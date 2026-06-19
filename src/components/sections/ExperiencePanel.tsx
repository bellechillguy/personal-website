import { experiences } from "@/data/experiences";

const dotFor: Record<string, string> = {
  Education: "var(--accent)",
  Certification: "var(--sticky)",
  Organization: "#a7f3d0",
  Volunteer: "#fbcfe8",
};

export function ExperiencePanel() {
  return (
    <div className="relative ml-2.5 border-l border-border/70">
      <ol className="space-y-10">
        {experiences.map((e, i) => (
          <li key={i} className="relative pl-8 group">
            
            <span
              className="
                absolute -left-[7px] top-2
                w-3.5 h-3.5 rounded-full
                border-[3px] border-surface
                shadow-sm
                transition-all duration-300
                group-hover:scale-125
              "
              style={{
                background: dotFor[e.category] || "var(--accent)",
              }}
            />

            <article
              className="
                rounded-xl
                p-3.5 -ml-3.5
                transition-all duration-300
                group-hover:bg-surface-2
                group-hover:shadow-sm
              "
            >

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3
                    className="
                      font-display
                      text-[17px]
                      font-bold
                      text-foreground
                      leading-tight
                    "
                  >
                    {e.title}
                  </h3>

                  {e.org && (
                    <p className="
                      mt-1
                      text-[13.5px]
                      font-medium
                      text-foreground/60
                    ">
                      {e.org}
                    </p>
                  )}
                </div>

                <span
                  className="
                    shrink-0
                    text-[11px]
                    font-medium
                    text-foreground/50
                    tabular-nums
                    mt-1
                  "
                >
                  {e.period}
                </span>
              </div>


              <div className="mt-2 flex items-center gap-2">
                <span
                  className="
                    text-[10px]
                    uppercase
                    tracking-widest
                    font-bold
                    text-foreground/50
                  "
                >
                  {e.category}
                </span>
              </div>


              {e.description && (
                <p
                  className="
                    mt-3
                    text-[14px]
                    leading-relaxed
                    text-foreground/75
                    max-w-xl
                  "
                >
                  {e.description}
                </p>
              )}

            </article>
          </li>
        ))}
      </ol>
    </div>
  );
}
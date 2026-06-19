import { motion } from "motion/react";
import { projects } from "@/data/projects";

export function ProjectsPanel() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {projects.map((p, i) => (
        <motion.a
          key={p.title}
          href={p.link}
          target="_blank"
          rel="noreferrer noopener"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.35,
            delay: i * 0.05,
            ease: "easeOut",
          }}
          className="
            group
            flex flex-col
            overflow-hidden
            rounded-2xl
            border border-border
            bg-surface
            shadow-[var(--sh-1)]
            transition-all duration-300
            hover:-translate-y-1
            hover:shadow-lg
          "
        >

          <div
            className="
              relative
              aspect-[16/9]
              overflow-hidden
              bg-muted/20
            "
            style={{
              background: `linear-gradient(135deg, ${p.accent}, #fff)`,
            }}
          >

            <img
              src={p.image}
              alt={p.title}
              className="
                w-full h-full
                object-cover
                transition-transform
                duration-500
                group-hover:scale-105
              "
            />

            <div
              className="
                absolute inset-0
                bg-gradient-to-t
                from-black/30
                via-transparent
                to-transparent
              "
            />


            <span
              className="
                absolute
                top-3 right-3
                rounded-full
                bg-white/90
                backdrop-blur
                px-3 py-1
                text-[11px]
                font-semibold
                text-foreground
                shadow-sm
              "
            >
              ↗ Visit
            </span>

          </div>


          <div className="p-5 flex flex-col gap-3">

            <div>
              <h3
                className="
                  font-display
                  text-xl
                  font-bold
                  leading-tight
                  text-foreground
                "
              >
                {p.title}
              </h3>

              <p
                className="
                  mt-2
                  text-sm
                  leading-relaxed
                  text-foreground/70
                  line-clamp-3
                "
              >
                {p.blurb}
              </p>
            </div>


            {p.features && p.features.length > 0 && (
              <div className="space-y-1.5">
                {p.features.slice(0, 2).map((f) => (
                  <div
                    key={f}
                    className="
                      flex gap-2
                      text-[13px]
                      text-foreground/70
                    "
                  >
                    <span>•</span>
                    <span className="line-clamp-1">
                      {f}
                    </span>
                  </div>
                ))}
              </div>
            )}


            <div
              className="
                flex flex-wrap
                gap-1.5
                pt-3
                border-t border-border/50
              "
            >
              {p.tech.slice(0, 4).map((t) => (
                <span
                  key={t}
                  className="
                    rounded-full
                    bg-surface-2
                    px-2.5 py-1
                    text-[11px]
                    font-medium
                    text-foreground/70
                  "
                >
                  {t}
                </span>
              ))}

              {p.tech.length > 4 && (
                <span
                  className="
                    rounded-full
                    px-2.5 py-1
                    text-[11px]
                    text-foreground/50
                  "
                >
                  +{p.tech.length - 4}
                </span>
              )}
            </div>

          </div>

        </motion.a>
      ))}
    </div>
  );
}
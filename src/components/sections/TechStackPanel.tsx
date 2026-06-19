import { techStack } from "@/data/tech-stack";
import { TechTag } from "@/components/icons/BrandIcons";

export default function TechStackPanel() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {techStack.map((cat) => (
        <section
          key={cat.title}
          className="
            rounded-2xl
            border border-border
            bg-surface
            p-5
            transition-all duration-300
            hover:shadow-md
            hover:-translate-y-0.5
          "
        >

          <div className="flex items-center justify-between mb-4">

            <div className="flex items-center gap-3">
              <span
                className="
                  w-2
                  h-8
                  rounded-full
                  bg-foreground/20
                "
              />

              <h2
                className="
                  font-display
                  text-[17px]
                  font-bold
                  text-foreground
                "
              >
                {cat.title}
              </h2>
            </div>

            <span
              className="
                text-[11px]
                font-semibold
                text-foreground/50
              "
            >
              {cat.items.length} tools
            </span>

          </div>


          <div
            className="
              flex
              flex-wrap
              gap-2
            "
          >
            {cat.items.map((it) => (
              <div
                key={it.name}
                className="
                  transition-all
                  duration-200
                  hover:-translate-y-1
                "
              >
                {TechTag ? (
                  <TechTag
                    name={it.name}
                    color={it.color}
                  />
                ) : (
                  <span
                    className="
                      inline-flex
                      items-center
                      rounded-lg
                      border border-border
                      bg-surface-2
                      px-3 py-1.5
                      text-sm
                      text-foreground/70
                    "
                  >
                    {it.name}
                  </span>
                )}
              </div>
            ))}
          </div>

        </section>
      ))}
    </div>
  );
}
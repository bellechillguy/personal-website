import { IconGithub, IconLinkedin, IconMedium } from "@/components/icons/SystemIcons";
import { socials } from "@/data/socials";

const logoFor = (name: string) => {
  if (name === "GitHub") return IconGithub;
  if (name === "LinkedIn") return IconLinkedin;
  return IconMedium;
};

const typeFor = (name: string) => {
  if (name === "GitHub") return "Code & Projects";
  if (name === "LinkedIn") return "Professional";
  return "Articles & Writing";
};

export function ContactPanel() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {socials.map((s) => {
        const Logo = logoFor(s.name);

        return (
          <a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noreferrer noopener"
            className="
              group
              relative
              flex
              flex-col
              gap-4
              rounded-2xl
              border border-border
              bg-surface
              p-5
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-lg
            "
          >

            <div className="flex items-center justify-between">

              <span
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  bg-surface-2
                  border border-border/60
                  transition-all duration-300
                  group-hover:scale-105
                "
              >
                <Logo
                  className="
                    w-5
                    h-5
                    text-foreground/80
                    group-hover:text-foreground
                    transition-colors
                  "
                />
              </span>


              <span
                className="
                  text-lg
                  text-foreground/30
                  transition-all duration-300
                  group-hover:text-foreground
                  group-hover:-translate-y-0.5
                "
              >
                ↗
              </span>

            </div>


            <div>
              <h3
                className="
                  font-display
                  text-[16px]
                  font-bold
                  text-foreground
                "
              >
                {s.name}
              </h3>

              <p
                className="
                  mt-1
                  text-[13px]
                  text-foreground/60
                "
              >
                {s.handle}
              </p>
            </div>


            <span
              className="
                text-[11px]
                uppercase
                tracking-wider
                font-semibold
                text-foreground/40
              "
            >
              {typeFor(s.name)}
            </span>

          </a>
        );
      })}
    </div>
  );
}
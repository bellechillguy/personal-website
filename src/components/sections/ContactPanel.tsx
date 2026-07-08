import { component$ } from "@builder.io/qwik";
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

export const ContactPanel = component$(() => {
  return (
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {socials.map((s, index) => {
        const Logo = logoFor(s.name);

        return (
          <a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${s.name} profile`}
            style={{ animationDelay: `${index * 80}ms` }}
            class="
              group relative overflow-hidden
              flex flex-col justify-between
              rounded-2xl
              border border-border
              bg-surface
              p-5
              shadow-sh-1
              transition-all duration-300
              ease-[cubic-bezier(.22,1,.36,1)]
              hover:-translate-y-1
              hover:shadow-sh-2
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-ring
              animate-window-in
            "
          >
            <div
              class="
                absolute inset-x-0 top-0 h-1
                bg-sticky
                opacity-0
                transition-opacity duration-300
                group-hover:opacity-100
              "
            />

            <div class="flex items-start justify-between">
              <div
                class="
                  flex h-11 w-11
                  items-center justify-center
                  rounded-sm
                  border border-hairline
                  bg-chrome
                  transition-all duration-300
                  group-hover:bg-bar
                "
              >
                <Logo
                  class="
                    h-11 w-11
                    text-foreground/80
                    transition-colors duration-300
                    group-hover:text-white
                  "
                />
              </div>

              <span
                aria-hidden="true"
                class="
                  text-lg
                  text-ink-3
                  transition-all duration-300
                  group-hover:-translate-y-1
                  group-hover:translate-x-1
                  group-hover:text-foreground
                "
              >
                ↗
              </span>
            </div>

            <div class="mt-5">
              <h3
                class="
                  font-display
                  text-base
                  font-bold
                  text-foreground
                "
              >
                {s.name}
              </h3>

              <p
                class="
                  mt-1
                  text-xs
                  font-mono
                  text-ink-2
                  truncate
                "
              >
                {s.handle}
              </p>
            </div>

            <div class="mt-5">
              <span
                class="
                  inline-flex
                  items-center
                  rounded-full
                  border border-hairline
                  bg-chrome
                  px-3 py-1
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-wider
                  text-ink-2
                  transition-all duration-300

                  group-hover:bg-sticky
                  group-hover:text-accent-ink
                  group-hover:border-sticky
                "
              >
                {typeFor(s.name)}
              </span>
            </div>
          </a>
        );
      })}
    </div>
  );
});

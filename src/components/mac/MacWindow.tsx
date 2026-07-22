import { component$, Slot } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

interface MacWindowProps {
  title: string;
  subtitle?: string;
  maxWidth?: string;
  bodyClass?: string;
}

export const MacWindow = component$(
  ({ title, subtitle, maxWidth = "960px", bodyClass = "" }: MacWindowProps) => {
    return (
      <section
        class="mac-window mx-auto w-full animate-window-in transition-all duration-300"
        style={{ maxWidth }}
        aria-labelledby="window-title"
      >
        <header
          class="mac-titlebar relative justify-between"
          data-has-subtitle={subtitle ? "true" : "false"}
        >
          <div class="flex items-center gap-1.5 z-10 group/lights">
            <Link
              href="/"
              aria-label="Close window"
              class="traffic-light bg-tl-red cursor-pointer relative flex items-center justify-center active:brightness-75"
            >
              <span class="absolute text-[9px] font-bold text-red-900/60 opacity-0 group-hover/lights:opacity-100 select-none transition-opacity pointer-events-none mb-[1px]">
                ×
              </span>
            </Link>

            <span class="traffic-light bg-tl-yellow relative flex items-center justify-center">
              <span class="absolute text-[8px] font-bold text-amber-900/60 opacity-0 group-hover/lights:opacity-100 select-none transition-opacity pointer-events-none mb-[2px]">
                -
              </span>
            </span>

            <span class="traffic-light bg-tl-green relative flex items-center justify-center">
              <span class="absolute text-[7px] font-bold text-green-900/60 opacity-0 group-hover/lights:opacity-100 select-none transition-opacity pointer-events-none">
                +
              </span>
            </span>
          </div>

          <div class="absolute inset-x-0 top-1/2 -translate-y-1/2 mx-auto w-fit text-center pointer-events-none z-0 px-20">
            <h2
              id="window-title"
              class="font-display font-semibold tracking-tight text-foreground truncate max-w-[180px] sm:max-w-[360px]"
            >
              {title}
            </h2>
            {subtitle ? (
              <p class="text-[10px] text-ink-2 font-normal truncate mt-px">{subtitle}</p>
            ) : null}
          </div>

          <div class="w-[52px] hidden sm:block pointer-events-none opacity-0" aria-hidden="true" />
        </header>

        <div
          class={`p-4 sm:p-6 md:p-8 bg-surface text-foreground selection:bg-accent selection:text-accent-ink ${bodyClass}`}
        >
          <Slot />
        </div>
      </section>
    );
  },
);

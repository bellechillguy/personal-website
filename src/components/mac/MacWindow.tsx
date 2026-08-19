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
          <div class="traffic-light-cluster z-10 flex items-center gap-2">
            <Link href="/" aria-label="Close window" class="traffic-light traffic-light--close">
              <span class="traffic-light__glyph" aria-hidden="true">
                <svg viewBox="0 0 85.4 85.4" focusable="false">
                  <path d="m22.5 57.8 35.3-35.3c1.4-1.4 3.6-1.4 5 0l.1.1c1.4 1.4 1.4 3.6 0 5l-35.3 35.3c-1.4 1.4-3.6 1.4-5 0l-.1-.1c-1.3-1.4-1.3-3.6 0-5z" />
                  <path d="m27.6 22.5 35.3 35.3c1.4 1.4 1.4 3.6 0 5l-.1.1c-1.4 1.4-3.6 1.4-5 0l-35.3-35.3c-1.4-1.4-1.4-3.6 0-5l.1-.1c1.4-1.3 3.6-1.3 5 0z" />
                </svg>
              </span>
            </Link>

            <span class="traffic-light traffic-light--minimize">
              <span class="traffic-light__glyph" aria-hidden="true">
                <svg viewBox="0 0 85.4 85.4" focusable="false">
                  <path d="m17.8 39.1h49.9c1.9 0 3.5 1.6 3.5 3.5v.1c0 1.9-1.6 3.5-3.5 3.5h-49.9c-1.9 0-3.5-1.6-3.5-3.5v-.1c0-1.9 1.5-3.5 3.5-3.5z" />
                </svg>
              </span>
            </span>

            <span class="traffic-light traffic-light--zoom">
              <span class="traffic-light__glyph" aria-hidden="true">
                <svg viewBox="0 0 85.4 85.4" focusable="false">
                  <path d="m31.2 20.8h26.7c3.6 0 6.5 2.9 6.5 6.5v26.7zm23.2 43.7h-26.8c-3.6 0-6.5-2.9-6.5-6.5v-26.8z" />
                </svg>
              </span>
            </span>
          </div>

          <div class="mac-titlebar__title absolute inset-x-0 top-1/2 -translate-y-1/2 mx-auto w-fit text-center pointer-events-none z-0 px-20">
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

        <div class={`mac-window__content p-4 sm:p-6 md:p-8 ${bodyClass}`}>
          <Slot />
        </div>
      </section>
    );
  },
);

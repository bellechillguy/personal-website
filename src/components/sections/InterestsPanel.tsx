import { component$ } from "@builder.io/qwik";
import { interests } from "@/data/interests";
import { IconAppleMusic, IconGoodreads } from "@/components/icons/SystemIcons";
import { PhotoCard } from "@/components/mac/PhotoCard";

export const InterestsPanel = component$(() => {
  const navLinks = [
    {
      label: interests.reading.label,
      note: interests.reading.note,
      url: interests.reading.url,
      icon: <IconGoodreads class="w-12 h-12" />,
      type: "Reading",
    },
    {
      label: interests.music.label,
      note: interests.music.note,
      url: interests.music.url,
      icon: <IconAppleMusic class="w-12 h-12" />,
      type: "Music",
    },
  ];

  return (
    <div class="space-y-10">
      <div class="grid sm:grid-cols-2 gap-5">
        {navLinks.map((link, index) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noreferrer noopener"
            class="group relative flex items-center gap-4 p-4 rounded-[18px] border border-border bg-sticky/40 shadow-[var(--sh-1)] transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring animate-window-in"
            style={{ animationDelay: `${index * 75}ms` }}
          >
            <div class="flex items-center justify-center shrink-0 w-12 h-12 rounded-[10px] bg-muted border border-border/50 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-110 group-hover:bg-surface group-hover:shadow-sm">
              {link.icon}
            </div>

            <div class="flex-1">
              <p class="text-[11px] uppercase tracking-widest font-bold text-foreground/50 mb-0.5">
                {link.type}
              </p>

              <h3 class="font-display text-[16px] font-bold text-foreground leading-tight group-hover:text-accent-ink dark:group-hover:text-accent-strong transition-colors">
                {link.label}
              </h3>

              <p class="text-[13px] text-foreground/60 mt-1 line-clamp-1">{link.note}</p>
            </div>

            <span
              aria-hidden="true"
              class="text-foreground/30 text-lg transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-foreground"
            >
              ↗
            </span>
          </a>
        ))}
      </div>

      <section class="animate-window-in" style={{ animationDelay: "150ms" }}>
        <div class="flex items-center gap-3 mb-6">
          <div
            class="w-1.5 h-5 rounded-full bg-foreground/20 dark:bg-foreground/40"
            aria-hidden="true"
          />
          <h2 class="font-display text-[18px] font-bold text-foreground tracking-tight">
            Photography
          </h2>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {interests.gallery.map((item, index) => (
            <div
              key={item.caption}
              class="animate-window-in"
              style={{ animationDelay: `${index * 75 + 200}ms` }}
            >
              <PhotoCard
                src={item.src || "/placeholder.jpg"}
                caption={item.caption}
                rotate={index % 3 === 0 ? -3 : index % 3 === 1 ? 2 : -1}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
});

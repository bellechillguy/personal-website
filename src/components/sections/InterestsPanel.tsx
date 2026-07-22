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
    },
    {
      label: interests.music.label,
      note: interests.music.note,
      url: interests.music.url,
      icon: <IconAppleMusic class="w-12 h-12" />,
    },
  ];

  return (
    <div class="interests-panel">
      <div class="interests-links-grid">
        {navLinks.map((link, index) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noreferrer noopener"
            class="interest-link-card panel-yellow group relative flex items-center border border-border shadow-[var(--sh-1)] transition-shadow duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring animate-window-in"
            style={{ animationDelay: `${index * 75}ms` }}
          >
            <div class="interest-link-icon flex shrink-0 items-center justify-center border border-border/50 bg-[#f9fafb] transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105 group-hover:shadow-sm">
              {link.icon}
            </div>

            <div class="min-w-0 flex-1">
              <h3 class="interest-link-title text-foreground">
                <span class="interest-script-initial">{link.label.slice(0, 1)}</span>
                <span>{link.label.slice(1)}</span>
              </h3>

              <p class="interest-link-note text-foreground/60">{link.note}</p>
            </div>

            <span
              aria-hidden="true"
              class="interest-link-arrow transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-foreground"
            >
              ↗
            </span>
          </a>
        ))}
      </div>

      <section class="interests-photography animate-window-in" style={{ animationDelay: "150ms" }}>
        <div class="interests-heading flex items-center gap-3">
          <div class="h-5 w-1.5 rounded-full bg-foreground/20" aria-hidden="true" />
          <h2 class="interest-section-title text-foreground">
            <span class="interest-section-initial">P</span>
            <span>hotography</span>
          </h2>
        </div>

        <div class="interests-photo-grid">
          {interests.gallery.map((item, index) => (
            <div
              key={item.caption}
              class="interests-photo-slot animate-window-in"
              style={{ animationDelay: `${index * 75 + 200}ms` }}
            >
              <PhotoCard
                src={item.src || "/placeholder.jpg"}
                caption={item.caption}
                rotate={index % 3 === 0 ? -3 : index % 3 === 1 ? 2 : -1}
                className="interests-photo-card mx-auto"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
});

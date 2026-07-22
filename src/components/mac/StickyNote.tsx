import { component$, Slot } from "@builder.io/qwik";

export const StickyNote = component$(
  ({ rotate = 2, tone = "yellow" }: { rotate?: number; tone?: "yellow" | "cyan" }) => {
    const bg = tone === "cyan" ? "var(--accent)" : "var(--sticky)";
    const stroke = tone === "cyan" ? "var(--accent-strong)" : "var(--sticky-strong)";

    return (
      <aside
        class="sticky-note inline-block px-4 py-3 text-[13px] leading-snug font-medium text-[var(--sticky-ink)] shadow-[var(--sh-2)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--sh-3)]"
        style={{
          background: bg,
          borderTop: `2px solid ${stroke}`,
          borderRadius: 6,
          maxWidth: 240,
          fontFamily: "var(--font-sans)",
          transform: `rotate(${rotate}deg)`,
        }}
      >
        <Slot />
      </aside>
    );
  },
);

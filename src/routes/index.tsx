import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import { PhotoCard } from "@/components/mac/PhotoCard";
import { StickyNote } from "@/components/mac/StickyNote";

export default component$(() => {
  return (
    <div class="max-w-6xl mx-auto px-4 md:px-6">
      <section class="grid grid-cols-1 lg:grid-cols-[1.2fr_auto] gap-12 lg:gap-16 items-center pt-12 md:pt-28 pb-12 md:pb-20">
        <div class="space-y-6 md:space-y-8 animate-window-in">
          <h1 class="font-display flex flex-col gap-1 tracking-tight select-none">
            <span class="text-[20px] md:text-[24px] font-medium text-foreground/80 lowercase">
              hi! this is
            </span>

            <span class="name-highlight text-[40px] sm:text-[60px] md:text-[80px] font-black leading-[1.1] tracking-tighter my-2 w-fit inline-block whitespace-nowrap">
              <span aria-hidden="true" class="text-foreground/40 font-normal">
                𑣲⋆｡˚{" "}
              </span>
              bellechillguy
              <span aria-hidden="true" class="text-foreground/40 font-normal">
                {" "}
                ˙⋆
              </span>
            </span>

            <span class="text-[20px] md:text-[24px] font-medium text-foreground/80 lowercase mt-1 md:ml-auto md:mr-24 w-fit">
              speaking!
            </span>
          </h1>

          <p class="text-[16px] md:text-[18px] text-foreground/80 max-w-[50ch] leading-relaxed">
            A System & Information Technology student who loves to explore{" "}
            <strong class="font-bold text-foreground">Cyber Security</strong>,{" "}
            <strong class="font-bold text-foreground">Networking</strong>,{" "}
            <strong class="font-bold text-foreground">DevOps</strong>,{" "}
            <strong class="font-bold text-foreground">Game Development</strong>, and{" "}
            <strong class="font-bold text-foreground">Design</strong>.
          </p>

          <div class="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/projects"
              class="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-[14px] font-bold text-background transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-105 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              See projects
              <span class="group-hover:translate-x-1 transition-transform duration-300 ease-out">
                →
              </span>
            </Link>

            <Link
              href="/contact"
              class="inline-flex items-center justify-center gap-2 rounded-full border border-border/80 bg-surface px-6 py-3 text-[14px] font-bold text-foreground transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-muted hover:border-border hover:scale-105 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Say hi
            </Link>
          </div>
        </div>

        <div class="relative flex flex-col sm:flex-row lg:flex-col items-center gap-6 lg:gap-4 justify-self-center lg:justify-self-end mt-8 lg:mt-0 animate-window-in">
          <div class="transform hover:scale-[1.03] hover:rotate-2 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] z-10">
            <PhotoCard caption="𐙚 ˚🍰 ⋆｡˚ ᡣ𐭩" rotate={-4} src="/pinkie.gif" />
          </div>

          <div class="transform hover:-translate-y-2 hover:-rotate-2 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] lg:-mt-8 lg:-ml-12 z-20">
            <StickyNote rotate={4}>
              i'm a girl who feels <strong class="font-bold text-foreground">everything</strong>
            </StickyNote>
          </div>
        </div>
      </section>
    </div>
  );
});

export const head: DocumentHead = {
  title: "bellechillguy - Portfolio",
  meta: [
    {
      name: "description",
      content:
        "Mac-style portfolio of Nisrina Zakiyah - System & Information Technology @ ITB. Cyber security, networking, DevOps, game dev, and design.",
    },
    { property: "og:title", content: "bellechillguy - Portfolio" },
    {
      property: "og:description",
      content: "Cyber security, networking, DevOps, game dev, and design - by Nisrina Zakiyah.",
    },
  ],
};

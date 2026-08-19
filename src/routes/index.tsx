import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import { PhotoCard } from "@/components/mac/PhotoCard";
import { StickyNote } from "@/components/mac/StickyNote";

export default component$(() => {
  return (
    <div class="home-stage mx-auto max-w-6xl px-2 md:px-6">
      <section class="home-hero grid grid-cols-1 items-center gap-10 pb-10 pt-8 md:pb-16 md:pt-20 lg:-mt-4 lg:h-[601.293px] lg:grid-cols-[760.192px_279.808px] lg:grid-rows-[409.293px] lg:gap-16 lg:pb-20 lg:pt-28">
        <div class="home-copy space-y-6 animate-window-in md:space-y-8 lg:self-center">
          <h1 class="font-display flex flex-col gap-1 tracking-tight select-none">
            <span class="desktop-copy-muted text-[20px] font-medium lowercase md:text-[24px]">
              hi! this is
            </span>

            <span class="home-name-highlight name-highlight my-2 w-full whitespace-nowrap text-[34px] min-[380px]:text-[40px] sm:text-[60px] md:text-[72px] lg:w-[720.419px]">
              <span class="name-image-slot" data-node-id="2:2329">
                <img
                  alt="Bellechillguy"
                  class="name-image"
                  height={209}
                  src="/images/bellechillguy.webp"
                  width={1306}
                />
              </span>
            </span>

            <span class="desktop-copy-muted mt-1 w-fit text-[20px] font-medium lowercase md:ml-auto md:mr-24 md:text-[24px]">
              speaking!
            </span>
          </h1>

          <p class="desktop-copy-muted max-w-[50ch] text-[16px] leading-relaxed md:text-[17px] lg:w-[754px] lg:max-w-none lg:text-[18px] lg:leading-[29.25px]">
            A System & Information Technology student who loves to explore{" "}
            <strong class="desktop-copy font-bold">Cyber Security</strong>,{" "}
            <strong class="desktop-copy font-bold">Networking</strong>,{" "}
            <strong class="desktop-copy font-bold">DevOps</strong>,{" "}
            <strong class="desktop-copy font-bold">Game Development</strong>, and{" "}
            <strong class="desktop-copy font-bold">Design</strong>.
          </p>

          <div class="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/projects"
              class="hero-primary group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[14px] font-bold transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-105 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              See projects
              <span class="group-hover:translate-x-1 transition-transform duration-300 ease-out">
                →
              </span>
            </Link>

            <Link
              href="/contact"
              class="hero-secondary inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3 text-[14px] font-bold shadow-sm transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-105 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Say hi
            </Link>
          </div>
        </div>

        <div class="home-visual relative mt-6 flex w-full max-w-[315px] flex-col items-center justify-self-center gap-4 animate-window-in sm:flex-row lg:mt-0 lg:block lg:h-[409.293px] lg:w-[280px] lg:max-w-none lg:self-center">
          <div class="home-photo z-10 w-[230px] sm:w-[245px] lg:absolute lg:left-0 lg:top-0 lg:w-[280px]">
            <div class="dark:hidden">
              <PhotoCard caption="𐙚 ˚🍰 ⋆｡˚ ᡣ𐭩" rotate={-4} src="/images/pinkie-pie.gif" />
            </div>
            <div class="hidden dark:block">
              <PhotoCard caption="˚˖𓍢ִ໋ 🦇 ✧˚.🔮⋆" rotate={-4} src="/images/twilight-sparkle.gif" />
            </div>
          </div>

          <div class="home-note z-20 transform transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-2 hover:-rotate-2 lg:absolute lg:left-[8px] lg:top-[366px]">
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

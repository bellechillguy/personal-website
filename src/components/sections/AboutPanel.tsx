import { PhotoCard } from "@/components/mac/PhotoCard";

export function AboutPanel() {
  return (
    <div class="grid grid-cols-1 md:grid-cols-[1fr_260px] gap-10 md:gap-14 items-center">
      <div class="order-2 md:order-1 space-y-7">
        <header class="space-y-2">
          <h1 class="font-display flex flex-col gap-1 tracking-tight select-none">
            <span class="text-[18px] md:text-[22px] font-medium text-foreground/80 lowercase">
              hi! this is
            </span>

            <span class="name-highlight text-[38px] sm:text-[58px] md:text-[56px] font-black leading-[1.05] tracking-tighter my-2 w-fit inline-block whitespace-nowrap">
              <span aria-hidden="true" class="text-foreground/40 font-normal">
                𑣲⋆｡˚{" "}
              </span>
              bellechillguy
              <span aria-hidden="true" class="text-foreground/40 font-normal">
                {" "}
                ˙⋆
              </span>
            </span>

            <span class="text-[18px] md:text-[22px] font-medium text-foreground/80 lowercase mt-1 md:ml-auto md:mr-16 w-fit">
              speaking
            </span>
          </h1>
        </header>

        <div class="space-y-5 max-w-xl">
          <p class="text-[15px] md:text-[16px] text-foreground/80 leading-relaxed">
            I'm <strong class="font-semibold text-foreground">Nisrina</strong>, a{" "}
            <strong class="font-semibold text-foreground">System & Information Technology</strong>{" "}
            student at <strong class="font-semibold text-foreground">ITB</strong>. I build things
            across <em class="italic text-foreground/90">web</em>,{" "}
            <em class="italic text-foreground/90">terminal</em>, and{" "}
            <em class="italic text-foreground/90">embedded systems</em>. I enjoy understanding{" "}
            <em class="italic font-medium text-foreground">how systems work together</em>.
          </p>

          <p class="text-[15px] md:text-[16px] text-foreground/80 leading-relaxed">
            Outside academics, I’m part of{" "}
            <strong class="font-semibold text-foreground">Aksantara ITB</strong> (Robotic Software
            Control), <strong class="font-semibold text-foreground">GIM ITB</strong> (Visual
            Artist), and enjoy <em class="italic">CTFs</em>, <em class="italic">art</em>,{" "}
            <em class="italic">reading</em>, and <em class="italic">music</em>.
          </p>
        </div>

        <div class="flex flex-wrap gap-2 pt-1">
          <span class="tag-chip text-[12px] px-3 py-1 bg-muted border border-border/80 rounded-full font-medium transition-colors hover:border-border">
            Bandung, ID
          </span>

          <span class="tag-chip text-[12px] px-3 py-1 bg-muted border border-border/80 rounded-full font-medium transition-colors hover:border-border">
            ITB &apos;24
          </span>

          <span class="tag-chip text-[12px] px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full font-medium text-emerald-600 dark:text-emerald-400">
            open to collab
          </span>
        </div>
      </div>

      <div class="order-1 md:order-2 justify-self-center md:justify-self-end">
        <div class="group relative transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-[1.03]">
          <div class="absolute inset-3 rounded-2xl bg-accent/20 border border-accent/40 -z-10 rotate-6 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:rotate-8 group-hover:scale-105" />

          <PhotoCard src="/nisrina.jpg" caption="bellechillguy" rotate={-3} />
        </div>
      </div>
    </div>
  );
}

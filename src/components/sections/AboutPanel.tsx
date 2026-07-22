import { PhotoCard } from "@/components/mac/PhotoCard";

export function AboutPanel() {
  return (
    <div class="grid grid-cols-1 items-start gap-y-9 md:h-[401.811px] md:grid-cols-[minmax(0,1fr)_230px] md:grid-rows-[auto_1fr] md:gap-x-14 md:gap-y-0 lg:grid-cols-[578.2px_230px]">
      <header class="order-1 w-full md:col-start-1 md:row-start-1">
        <h1 class="font-display flex w-full flex-col items-end gap-1 tracking-[-0.4px] select-none">
          <span class="w-full text-[18px] font-medium lowercase leading-[29px] text-foreground/80 md:text-[22px] md:leading-[33px]">
            hi! this is
          </span>

          <span class="flex w-full flex-col items-start py-2">
            <span class="name-highlight about-name-highlight block w-full">
              <span class="name-image-slot about-name-image-slot">
                <img
                  alt="Bellechillguy"
                  class="name-image"
                  height={209}
                  src="/images/bellechillguy.png"
                  width={1306}
                />
              </span>
            </span>
          </span>

          <span class="w-fit pt-1 pr-8 text-[18px] font-medium lowercase leading-[29px] text-foreground/80 md:pr-18 md:text-[22px] md:leading-[33px]">
            speaking
          </span>
        </h1>
      </header>

      <div class="order-2 w-[220px] justify-self-center md:col-start-2 md:row-span-2 md:row-start-1 md:w-[260px] md:self-center md:justify-self-end">
        <PhotoCard
          src="/images/nisrina.jpg"
          caption="bellechillguy"
          className="about-photo-card"
          rotate={-3}
          tone="accent"
        />
      </div>

      <div class="order-3 w-full max-w-[576px] space-y-5 pl-1 md:col-start-1 md:row-start-2 md:w-[512px] md:pt-9">
        <p class="text-justify text-[14px] leading-[24px] text-foreground/80 md:text-[16px] md:leading-[26px]">
          I'm <strong class="font-semibold text-foreground">Nisrina</strong>, a{" "}
          <strong class="font-semibold text-foreground">System & Information Technology</strong>{" "}
          student at <strong class="font-semibold text-foreground">ITB</strong>. I build things
          across <em class="italic text-foreground/90">web</em>,{" "}
          <em class="italic text-foreground/90">terminal</em>, and{" "}
          <em class="italic text-foreground/90">embedded systems</em>. I enjoy understanding{" "}
          <em class="italic font-medium text-foreground">how systems work together</em>.
        </p>

        <p class="text-justify text-[14px] leading-[24px] text-foreground/80 md:text-[16px] md:leading-[26px]">
          Outside academics, I’m part of{" "}
          <strong class="font-semibold text-foreground">Aksantara ITB</strong> (Robotic Software
          Control), <strong class="font-semibold text-foreground">GIM ITB</strong> (Visual Artist),
          and enjoy <em class="italic">CTFs</em>, <em class="italic">art</em>,{" "}
          <em class="italic">reading</em>, and <em class="italic">music</em>.
        </p>
      </div>
    </div>
  );
}

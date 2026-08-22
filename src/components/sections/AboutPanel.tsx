import { PhotoCard } from "@/components/mac/PhotoCard";

export function AboutPanel() {
  return (
    <div class="grid grid-cols-1 items-start gap-y-9 lg:h-[401.811px] lg:grid-cols-[578.2px_230px] lg:grid-rows-[auto_1fr] lg:gap-x-14 lg:gap-y-0">
      <header class="order-1 w-full lg:col-start-1 lg:row-start-1">
        <h1 class="flex w-full select-none flex-col items-end gap-1 font-display tracking-[-0.4px]">
          <span class="w-full text-[18px] font-medium lowercase leading-[29px] text-foreground/80 md:text-[22px] md:leading-[33px]">
            hi! this is
          </span>

          <span class="flex w-full flex-col items-start py-2">
            <span class="about-name-highlight name-highlight block w-full">
              <span class="about-name-image-slot name-image-slot">
                <img
                  alt="Bellechillguy"
                  class="name-image"
                  height={209}
                  src="/images/bellechillguy.webp"
                  width={1306}
                />
              </span>
            </span>
          </span>

          <span class="w-fit pr-8 pt-1 text-[18px] font-medium lowercase leading-[29px] text-foreground/80 md:pr-18 md:text-[22px] md:leading-[33px]">
            speaking
          </span>
        </h1>
      </header>

      <div class="order-2 w-[220px] justify-self-center md:w-[240px] lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:w-[260px] lg:self-center lg:justify-self-end">
        <PhotoCard
          src="/images/nisrina.webp"
          caption="for whom the Belle tolls?"
          className="about-photo-card"
          rotate={-3}
          tone="accent"
        />
      </div>

      <div class="order-3 w-full max-w-[576px] space-y-5 pl-1 md:w-[512px] lg:col-start-1 lg:row-start-2 lg:pt-9">
        <p class="text-justify text-[14px] leading-[24px] text-foreground/80 md:text-[16px] md:leading-[26px]">
          Sup, everypony! I'm <strong class="font-semibold text-foreground">Nisrina</strong>, a
          System & Information Technology student at ITB. Most of my projects sit somewhere between
          web development, backend infrastructure, and embedded hardware.
        </p>

        <p class="text-justify text-[14px] leading-[24px] text-foreground/80 md:text-[16px] md:leading-[26px]">
          On campus, I work on robotic software control for Aksantara ITB and visual design for GIM
          ITB. When I'm not coding, I'm usually playing CTFs, drawing, or reading.
        </p>
      </div>
    </div>
  );
}

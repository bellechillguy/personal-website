import { component$ } from "@builder.io/qwik";

export interface PhotoCardProps {
  src?: string;
  caption?: string;
  rotate?: number;
  className?: string;
}

export const PhotoCard = component$(
  ({ src = "/placeholder.jpg", caption = "", rotate = 0, className = "" }: PhotoCardProps) => {
    return (
      <figure
        class={`photo-card flex w-full flex-col rounded-lg border border-white/5 bg-pink/25 p-2.5 pb-4 shadow-sh-2 sm:p-3.5 sm:pb-5
          will-change-transform transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]
          hover:-translate-y-2 hover:scale-[1.02] hover:shadow-sh-3 ${className}`}
        style={{ transform: `rotate(${rotate}deg)` }}
      >
        <div class="relative aspect-[4/5] w-full overflow-hidden bg-neutral-900 shadow-[inset_0_2px_8px_rgba(0,0,0,0.8)]">
          <img
            src={src}
            alt={caption}
            class="h-full w-full object-cover transition-opacity duration-300 hover:opacity-90"
            onError$={(event) => {
              (event.target as HTMLImageElement).style.display = "none";
            }}
          />
        </div>

        <figcaption class="mt-3 px-1 text-center font-semibold text-xs font-medium tracking-wide text-foreground sm:mt-4 sm:text-[13px]">
          {caption}
        </figcaption>
      </figure>
    );
  },
);

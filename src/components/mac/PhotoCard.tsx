import { component$ } from "@builder.io/qwik";

export interface PhotoCardProps {
  src?: string;
  caption?: string;
  rotate?: number;
  className?: string;
  tone?: "pink" | "accent";
}

export const PhotoCard = component$(
  ({
    src = "/placeholder.jpg",
    caption = "",
    rotate = 0,
    className = "",
    tone = "pink",
  }: PhotoCardProps) => {
    return (
      <figure
        class={`photo-card photo-card--${tone} ${className}`}
        style={{ "--photo-rotation": `${rotate}deg` }}
      >
        <div class="photo-card__media">
          <img
            src={src}
            alt={caption}
            class="photo-card__image"
            decoding="async"
            onError$={(_, element) => {
              element.style.display = "none";
            }}
          />
        </div>

        <figcaption class="photo-card__caption">{caption}</figcaption>
      </figure>
    );
  },
);

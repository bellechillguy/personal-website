import { $, component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";

type Theme = "light" | "dark";

const THEME_STORAGE_KEY = "portfolio-theme";
const PARTICLE_COUNT = 24;
const PULL_TRIGGER_DISTANCE = 18;
const MAX_PULL_DISTANCE = 38;
const PINKIE_MARK = "/images/cutie-marks/pinkie-pie.svg";
const TWILIGHT_MARK = "/images/cutie-marks/twilight-sparkle.svg";

// Keep particle generation outside to avoid recalculating on re-renders
const particles = Array.from({ length: PARTICLE_COUNT }, (_, index) => {
  const duration = 1250 + ((index * 173) % 550);
  const phase = Math.round((index / PARTICLE_COUNT) * duration);
  const opacity = 0.72 + (index % 5) * 0.065;

  return {
    left: `${2 + ((index * 61.8) % 96)}%`,
    delay: `-${phase}ms`,
    duration: `${duration}ms`,
    size: `${22 + ((index * 7) % 18)}px`,
    opacity: `${opacity}`,
    fadeOpacity: `${opacity * 0.82}`,
  };
});

const applyTheme = (theme: Theme) => {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.dataset.theme = theme;
  root.style.colorScheme = theme;
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Graceful fallback for strict privacy modes
  }
  window.dispatchEvent(new CustomEvent("portfolio-theme-change", { detail: theme }));
};

export const ThemePullCord = component$(() => {
  const theme = useSignal<Theme>("light");
  const isAnimating = useSignal(false);
  const isDragging = useSignal(false);
  const dragStartY = useSignal(0);
  const pullDistance = useSignal(0);
  const ignoreNextClick = useSignal(false);
  const particleAsset = useSignal("");
  const showParticles = useSignal(false);

  useVisibleTask$(() => {
    theme.value = document.documentElement.classList.contains("dark") ? "dark" : "light";
  });

  const triggerHaptic = $(() => {
    if (typeof navigator !== "undefined" && navigator.vibrate) {
      navigator.vibrate(24);
    }
  });

  const changeTheme = $(async () => {
    if (isAnimating.value) return;

    const currentTheme: Theme = document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";
    const nextTheme: Theme = currentTheme === "dark" ? "light" : "dark";
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    isAnimating.value = true;
    triggerHaptic();
    particleAsset.value = nextTheme === "light" ? PINKIE_MARK : TWILIGHT_MARK;

    // Finish the pull before snapping the cord back.
    pullDistance.value = reduceMotion ? 4 : Math.max(pullDistance.value, 24);
    await new Promise((resolve) => window.setTimeout(resolve, reduceMotion ? 40 : 140));
    pullDistance.value = 0;

    if (!reduceMotion) {
      showParticles.value = true;
      // Let the first particles enter before the palette starts changing.
      await new Promise((resolve) => window.setTimeout(resolve, 120));
    }

    document.documentElement.classList.add("theme-changing");
    applyTheme(nextTheme);
    theme.value = nextTheme;

    await new Promise((resolve) => window.setTimeout(resolve, reduceMotion ? 80 : 560));
    document.documentElement.classList.remove("theme-changing");

    if (!reduceMotion) {
      await new Promise((resolve) => window.setTimeout(resolve, 1500));
    }

    showParticles.value = false;
    isAnimating.value = false;
  });

  const handleClick = $(() => {
    if (ignoreNextClick.value) {
      ignoreNextClick.value = false;
      return;
    }
    void changeTheme();
  });

  return (
    <>
      <button
        type="button"
        role="switch"
        class="theme-pull-cord"
        data-pulling={isAnimating.value || isDragging.value ? "true" : "false"}
        data-dragging={isDragging.value ? "true" : "false"}
        data-armed={
          isDragging.value && pullDistance.value >= PULL_TRIGGER_DISTANCE ? "true" : "false"
        }
        data-animating={isAnimating.value ? "true" : "false"}
        data-theme={theme.value}
        style={{ "--pull-distance": `${pullDistance.value}px` }}
        aria-label={`Switch to ${theme.value === "dark" ? "light" : "dark"} mode`}
        aria-checked={theme.value === "dark"}
        aria-busy={isAnimating.value}
        title={`Pull to switch to ${theme.value === "dark" ? "light" : "dark"} mode`}
        onClick$={handleClick}
        onPointerDown$={(event, element) => {
          if (isAnimating.value) return;
          isDragging.value = true;
          dragStartY.value = event.clientY;
          pullDistance.value = 0;
          element.setPointerCapture(event.pointerId);
        }}
        onPointerMove$={(event) => {
          if (!isDragging.value) return;
          const deltaY = Math.max(0, event.clientY - dragStartY.value);
          pullDistance.value = Math.min(MAX_PULL_DISTANCE, deltaY * 0.55);
        }}
        onPointerUp$={(event, element) => {
          if (!isDragging.value) return;
          const shouldSwitch = pullDistance.value >= PULL_TRIGGER_DISTANCE;

          isDragging.value = false;
          if (element.hasPointerCapture(event.pointerId)) {
            element.releasePointerCapture(event.pointerId);
          }

          if (shouldSwitch) {
            ignoreNextClick.value = true;
            window.setTimeout(() => {
              ignoreNextClick.value = false;
            }, 350);
            void changeTheme();
          } else {
            pullDistance.value = 0;
          }
        }}
        onPointerCancel$={() => {
          isDragging.value = false;
          pullDistance.value = 0;
        }}
      >
        <span class="theme-pull-cord__hint" aria-hidden="true">
          {isAnimating.value
            ? "Switching…"
            : isDragging.value
              ? pullDistance.value >= PULL_TRIGGER_DISTANCE
                ? "Release"
                : "Keep pulling"
              : `Pull for ${theme.value === "dark" ? "light" : "dark"}`}
        </span>
        <span class="theme-pull-cord__anchor" aria-hidden="true" />
        <span class="theme-pull-cord__line" aria-hidden="true" />
        <span class="theme-pull-cord__bead" aria-hidden="true">
          <span class="theme-pull-cord__glint" />
          <img
            src={theme.value === "dark" ? TWILIGHT_MARK : PINKIE_MARK}
            alt=""
            class="theme-pull-cord__mark"
            draggable={false}
          />
        </span>
      </button>

      {showParticles.value ? (
        <div class="theme-rain" aria-hidden="true">
          {particles.map((particle, index) => (
            <img
              key={`${particleAsset.value}-${index}`}
              src={particleAsset.value}
              alt=""
              class="theme-rain__particle"
              style={{
                left: particle.left,
                width: particle.size,
                height: particle.size,
                animationDelay: particle.delay,
                animationDuration: particle.duration,
                "--particle-opacity": particle.opacity,
                "--particle-fade-opacity": particle.fadeOpacity,
              }}
            />
          ))}
        </div>
      ) : null}
    </>
  );
});

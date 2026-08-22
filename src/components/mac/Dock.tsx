import { component$, useSignal, $, useVisibleTask$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
import {
  IconAppleMusic,
  IconDoc,
  IconFinder,
  IconFolder,
  IconHeart,
  IconMail,
  IconMap,
  IconNote,
  IconPDF,
  IconStack,
} from "@/components/icons/SystemIcons";

type IconKey =
  | "finder"
  | "about"
  | "projects"
  | "tech"
  | "experience"
  | "blog"
  | "interests"
  | "contact"
  | "resume";

const items: { to: string; label: string; icon: IconKey }[] = [
  { to: "/", label: "Finder", icon: "finder" },
  { to: "/about", label: "About", icon: "about" },
  { to: "/projects", label: "Projects", icon: "projects" },
  { to: "/tech-stack", label: "Tech", icon: "tech" },
  { to: "/experience", label: "Experience", icon: "experience" },
  { to: "/blog", label: "Blog", icon: "blog" },
  { to: "/interests", label: "Interests", icon: "interests" },
  { to: "/contact", label: "Contact", icon: "contact" },
];

const rightItems: { to: string; label: string; icon: IconKey }[] = [
  { to: "/resume", label: "Resume", icon: "resume" },
];

const PLAYLIST = [
  "/music/honeybee.mp3",
  "/music/begged.mp3",
  "/music/cigarette-smoke.mp3",
  "/music/drop-dead.mp3",
  "/music/expectations.mp3",
  "/music/heart.mp3",
  "/music/less.mp3",
  "/music/maggots-for-brains.mp3",
  "/music/my-way.mp3",
  "/music/purple.mp3",
  "/music/stupid-song.mp3",
  "/music/the-cure.mp3",
  "/music/whats-wrong-with-me.mp3",
];

const BASE_DESKTOP_SIZE = 46;
const BASE_MOBILE_SIZE = 36;
const MAX_DESKTOP_SIZE = 64;
const MAGNIFICATION_RANGE = 135;
const SPRING_EASE = 0.22;

interface DockMotionState {
  frame: number;
  icons: HTMLElement[];
  current: WeakMap<HTMLElement, number>;
  target: WeakMap<HTMLElement, number>;
}

const dockMotion = new WeakMap<HTMLElement, DockMotionState>();

function getMotionState(dock: HTMLElement): DockMotionState {
  let state = dockMotion.get(dock);
  if (!state) {
    state = {
      frame: 0,
      icons: [],
      current: new WeakMap<HTMLElement, number>(),
      target: new WeakMap<HTMLElement, number>(),
    };
    dockMotion.set(dock, state);
  }
  state.icons = Array.from(dock.querySelectorAll<HTMLElement>("[data-dock-icon]"));
  return state;
}

function setIconSize(icon: HTMLElement, size: number) {
  icon.style.width = `${size}px`;
  icon.style.height = `${size}px`;
}

function clearIconSize(icon: HTMLElement) {
  icon.style.width = "";
  icon.style.height = "";
}

function animateDock(dock: HTMLElement) {
  const state = getMotionState(dock);
  let shouldContinue = false;
  let allAtBase = true;

  state.icons.forEach((icon) => {
    const targetSize = state.target.get(icon) ?? BASE_DESKTOP_SIZE;
    const currentSize = state.current.get(icon) ?? BASE_DESKTOP_SIZE;
    const nextSize = currentSize + (targetSize - currentSize) * SPRING_EASE;
    const settledSize = Math.abs(nextSize - targetSize) < 0.2 ? targetSize : nextSize;

    state.current.set(icon, settledSize);
    setIconSize(icon, settledSize);

    if (Math.abs(settledSize - targetSize) >= 0.2) shouldContinue = true;
    if (
      Math.abs(targetSize - BASE_DESKTOP_SIZE) >= 0.2 ||
      Math.abs(settledSize - BASE_DESKTOP_SIZE) >= 0.2
    ) {
      allAtBase = false;
    }
  });

  if (shouldContinue) {
    state.frame = window.requestAnimationFrame(() => animateDock(dock));
    return;
  }

  state.frame = 0;
  if (allAtBase) {
    state.icons.forEach((icon) => {
      state.current.set(icon, BASE_DESKTOP_SIZE);
      clearIconSize(icon);
    });
  }
}

function scheduleDockAnimation(dock: HTMLElement) {
  const state = getMotionState(dock);
  if (!state.frame) {
    state.frame = window.requestAnimationFrame(() => animateDock(dock));
  }
}

function resetDock(dock: HTMLElement) {
  const state = getMotionState(dock);

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    if (state.frame) window.cancelAnimationFrame(state.frame);
    state.frame = 0;
    state.icons.forEach((icon) => {
      state.current.set(icon, BASE_DESKTOP_SIZE);
      state.target.set(icon, BASE_DESKTOP_SIZE);
      clearIconSize(icon);
    });
    return;
  }

  state.icons.forEach((icon) => {
    const currentSize = Number.parseFloat(icon.style.width) || BASE_DESKTOP_SIZE;
    state.current.set(icon, currentSize);
    state.target.set(icon, BASE_DESKTOP_SIZE);
  });
  scheduleDockAnimation(dock);
}

function updateDockMagnification(dock: HTMLElement, mouseX: number) {
  const state = getMotionState(dock);

  if (window.innerWidth < 640 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    if (state.frame) {
      window.cancelAnimationFrame(state.frame);
      state.frame = 0;
    }
    state.icons.forEach((icon) => {
      state.current.set(icon, BASE_MOBILE_SIZE);
      state.target.set(icon, BASE_MOBILE_SIZE);
      clearIconSize(icon);
    });
    return;
  }

  state.icons.forEach((icon) => {
    const rect = icon.getBoundingClientRect();
    const center = rect.left + rect.width / 2;
    const distance = Math.abs(mouseX - center);
    const proximity = Math.max(0, 1 - distance / MAGNIFICATION_RANGE);
    const eased = proximity * proximity * (3 - 2 * proximity);
    const targetSize = BASE_DESKTOP_SIZE + (MAX_DESKTOP_SIZE - BASE_DESKTOP_SIZE) * eased;
    const currentSize = Number.parseFloat(icon.style.width) || BASE_DESKTOP_SIZE;

    state.current.set(icon, currentSize);
    state.target.set(icon, targetSize);
  });

  scheduleDockAnimation(dock);
}

const DockIcon = component$(({ icon }: { icon: IconKey }) => {
  const iconClass = "max-w-full max-h-full w-auto h-auto drop-shadow-md";

  if (icon === "finder") return <IconFinder class={iconClass} />;
  if (icon === "about") return <IconNote class={iconClass} />;
  if (icon === "projects") return <IconFolder class={iconClass} />;
  if (icon === "tech") return <IconStack class={iconClass} />;
  if (icon === "experience") return <IconMap class={iconClass} />;
  if (icon === "blog") return <IconDoc class={iconClass} />;
  if (icon === "interests") return <IconHeart class={iconClass} />;
  if (icon === "contact") return <IconMail class={iconClass} />;
  return <IconPDF class={iconClass} />;
});

const DockItem = component$(
  ({ to, label, icon, active }: { to: string; label: string; icon: IconKey; active: boolean }) => {
    return (
      <Link
        href={to}
        class="dock-item group relative flex flex-col items-center justify-end shrink-0"
        aria-label={label}
        aria-current={active ? "page" : undefined}
        data-active={active ? "true" : "false"}
      >
        <span class="dock-tooltip" role="tooltip">
          {label}
        </span>
        <span
          data-dock-icon
          class="dock-icon flex items-center justify-center transition-transform origin-bottom"
        >
          <DockIcon icon={icon} />
        </span>
        <span class="dock-running-indicator" aria-hidden="true" />
      </Link>
    );
  },
);

const MusicToggleButton = component$(() => {
  const isPlaying = useSignal(false);
  const currentTrackIndex = useSignal(0);
  const audioRef = useSignal<HTMLAudioElement>();
  const shuffledPlaylist = useSignal<string[]>(PLAYLIST);

  useVisibleTask$(() => {
    const shuffled = [...PLAYLIST].sort(() => Math.random() - 0.5);
    shuffledPlaylist.value = shuffled;

    if (audioRef.value) {
      audioRef.value.src = shuffled[0];
      audioRef.value.load();
    }
  });

  const playNextTrack = $(async () => {
    const audio = audioRef.value;
    if (!audio) return;

    currentTrackIndex.value = (currentTrackIndex.value + 1) % shuffledPlaylist.value.length;
    audio.src = shuffledPlaylist.value[currentTrackIndex.value];
    audio.load();

    try {
      await audio.play();
      isPlaying.value = true;
    } catch {
      isPlaying.value = false;
    }
  });

  const togglePlay = $(async () => {
    const audio = audioRef.value;
    if (!audio) return;

    if (isPlaying.value) {
      audio.pause();
      isPlaying.value = false;
    } else {
      try {
        await audio.play();
        isPlaying.value = true;
      } catch {
        isPlaying.value = false;
      }
    }
  });

  return (
    <button
      onClick$={togglePlay}
      class="dock-item group relative flex flex-col items-center justify-end shrink-0 outline-none"
      data-playing={isPlaying.value ? "true" : "false"}
      aria-label={isPlaying.value ? "Pause music" : "Play music"}
      aria-pressed={isPlaying.value}
    >
      <span class="dock-tooltip" role="tooltip">
        {isPlaying.value ? "Pause Music" : "Apple Music"}
      </span>
      <span
        data-dock-icon
        class="dock-icon relative flex items-center justify-center rounded-xl p-1"
      >
        <IconAppleMusic class="max-w-full max-h-full w-auto h-auto drop-shadow-sm z-10" />
      </span>

      <span class="dock-running-indicator" aria-hidden="true" />

      <audio
        ref={audioRef}
        src={PLAYLIST[0]}
        preload="metadata"
        onEnded$={playNextTrack}
        onError$={playNextTrack}
      />
    </button>
  );
});

export const Dock = component$(() => {
  const location = useLocation();

  return (
    <nav
      class="dock fixed bottom-[max(8px,env(safe-area-inset-bottom))] left-1/2 z-40 flex max-w-[calc(100vw-16px)] -translate-x-1/2 touch-pan-x items-end gap-1.5 scrollbar-none sm:gap-2"
      aria-label="Primary applications"
      onMouseMove$={(event, element) => {
        updateDockMagnification(element, event.clientX);
      }}
      onMouseLeave$={(_, element) => {
        resetDock(element);
      }}
    >
      {items.map((item) => (
        <DockItem
          key={item.to + item.label}
          {...item}
          active={
            item.to === "/"
              ? location.url.pathname === "/"
              : location.url.pathname.startsWith(item.to)
          }
        />
      ))}

      <MusicToggleButton />

      <span class="dock-separator" aria-hidden="true" />

      {rightItems.map((item) => (
        <DockItem
          key={item.to + item.label}
          {...item}
          active={location.url.pathname.startsWith(item.to)}
        />
      ))}
    </nav>
  );
});

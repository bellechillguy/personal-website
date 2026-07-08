import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

const fmt = (d: Date) =>
  d.toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });

export const Menubar = component$(() => {
  const now = useSignal("");

  useVisibleTask$(({ cleanup }) => {
    now.value = fmt(new Date());

    const timer = window.setInterval(() => {
      now.value = fmt(new Date());
    }, 30_000);

    cleanup(() => window.clearInterval(timer));
  });

  const menus = [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      class="
        fixed inset-x-0 top-0 z-50
        h-8 px-3
        flex items-center justify-between
        text-[13px]
        select-none
        border-b
        shadow-sm
      "
      style={{
        background: "rgba(20,20,22,0.65)",
        backdropFilter: "blur(18px) saturate(180%)",
        borderColor: "rgba(255,255,255,0.08)",
        color: "rgba(255,255,255,0.92)",
      }}
    >
      <div class="flex items-center gap-1">
        <Link
          href="/"
          class="
            flex items-center justify-center
            w-7 h-6
            rounded-md
            hover:bg-white/10
            transition
          "
          aria-label="Home"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
        </Link>

        <Link
          href="/"
          class="
            px-2 py-1
            rounded-md
            font-semibold
            tracking-tight
            hover:bg-white/10
            transition
          "
        >
          bellechillguy
        </Link>

        <nav class="hidden sm:flex items-center ml-1 gap-1">
          {menus.map((menu) => (
            <Link
              key={menu.href}
              href={menu.href}
              class="
                px-2.5 py-1
                rounded-md
                text-white/70
                hover:text-white
                hover:bg-white/10
                transition-all
                duration-150
              "
            >
              {menu.name}
            </Link>
          ))}
        </nav>
      </div>

      <div
        class="
          px-2.5 py-1
          rounded-md
          text-white/70
          tabular-nums
          hover:bg-white/10
          transition
        "
      >
        {now.value}
      </div>
    </header>
  );
});

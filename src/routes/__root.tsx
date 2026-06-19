import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode } from "react";

import { AudioProvider } from "@/context/AudioContext"; 

import appCss from "../styles.css?url";
import { Menubar } from "@/components/mac/Menubar";
import { Dock } from "@/components/mac/Dock";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="mac-window max-w-md w-full text-center p-8">
        <h1 className="font-display text-6xl font-bold">404</h1>
        <p className="mt-3 text-sm text-ink-2">
          This file isn&apos;t on the desktop. It may have been moved to the Trash.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center rounded-md bg-foreground px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
        >
          Back to desktop
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="mac-window max-w-md w-full p-8 text-center">
        <h1 className="font-display text-xl font-semibold">Something glitched</h1>
        <p className="mt-2 text-sm text-ink-2">Refresh or head back home.</p>
        <div className="mt-5 flex justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-md bg-foreground px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            Try again
          </button>
          <a
            href="/"
            className="rounded-md border border-border bg-surface px-4 py-2 text-sm font-medium hover:bg-chrome"
          >
            Desktop
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "bellechillguy — Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Nisrina Zakiyah (bellechillguy) — System & Information Technology student exploring cyber security, networking, DevOps, game dev, and design.",
      },
      { name: "author", content: "Nisrina Zakiyah" },
      { property: "og:title", content: "bellechillguy — Portfolio" },
      {
        property: "og:description",
        content: "Cyber security, networking, DevOps, game dev, and design — by Nisrina Zakiyah.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,600;12..96,700;12..96,800&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400;1,700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  
  return (
    <QueryClientProvider client={queryClient}>
      <AudioProvider>
        <Menubar />
        <main className="min-h-screen pt-10 pb-32 px-4 md:px-8">
          <Outlet />
        </main>
        <Dock />
      </AudioProvider>
    </QueryClientProvider>
  );
}
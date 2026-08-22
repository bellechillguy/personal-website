import { component$, Slot } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { Dock } from "@/components/mac/Dock";
import { Menubar } from "@/components/mac/Menubar";
import { SiteFooter } from "@/components/mac/SiteFooter";

export default component$(() => {
  const location = useLocation();
  const isHome = location.url.pathname === "/";

  return (
    <div
      class={isHome ? "site-shell site-shell--home" : "site-shell"}
      data-route={location.url.pathname}
    >
      <a class="skip-link" href="#main-content">
        Skip to content
      </a>
      <Menubar />
      <Dock />
      <main id="main-content" tabIndex={-1} class="site-main min-h-screen pt-14 pb-32 px-4 md:px-8">
        <Slot />
      </main>
      <SiteFooter />
    </div>
  );
});

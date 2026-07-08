import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { MacWindow } from "@/components/mac/MacWindow";
import { AboutPanel } from "@/components/sections/AboutPanel";

export default component$(() => (
  <MacWindow title="whoami.txt">
    <AboutPanel />
  </MacWindow>
));

export const head: DocumentHead = {
  title: "About - bellechillguy",
  meta: [
    {
      name: "description",
      content:
        "About Nisrina Zakiyah (bellechillguy) - Information Systems & Technology student at ITB exploring security, networking, DevOps, game dev, and design.",
    },
    { property: "og:title", content: "About - bellechillguy" },
    {
      property: "og:description",
      content:
        "About Nisrina Zakiyah - ITB student exploring security, networking, DevOps, game dev, and design.",
    },
  ],
};

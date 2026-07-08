import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { MacWindow } from "@/components/mac/MacWindow";
import { TechStackPanel } from "@/components/sections/TechStackPanel";

export default component$(() => (
  <MacWindow title="tech-stack.ts">
    <TechStackPanel />
  </MacWindow>
));

export const head: DocumentHead = {
  title: "Tech Stack - bellechillguy",
  meta: [
    {
      name: "description",
      content:
        "Tools and languages bellechillguy works with - across web, security, IoT, data, DevOps, game dev, and design.",
    },
    { property: "og:title", content: "Tech Stack - bellechillguy" },
    {
      property: "og:description",
      content:
        "Languages, web, databases, data, IoT/CV, DevOps, security, game dev, and design tools.",
    },
  ],
};

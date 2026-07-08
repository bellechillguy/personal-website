import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { MacWindow } from "@/components/mac/MacWindow";
import { ExperiencePanel } from "@/components/sections/ExperiencePanel";

export default component$(() => (
  <MacWindow title="experience.json">
    <ExperiencePanel />
  </MacWindow>
));

export const head: DocumentHead = {
  title: "Experience - bellechillguy",
  meta: [
    {
      name: "description",
      content:
        "Education, certification, organizations, and volunteer experience of Nisrina Zakiyah.",
    },
    { property: "og:title", content: "Experience - bellechillguy" },
    {
      property: "og:description",
      content: "ITB, Aksantara, GIM ITB, and event-organizer volunteer work.",
    },
  ],
};

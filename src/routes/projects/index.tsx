import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { MacWindow } from "@/components/mac/MacWindow";
import { ProjectsPanel } from "@/components/sections/ProjectsPanel";

export default component$(() => (
  <MacWindow title="projects/">
    <ProjectsPanel />
  </MacWindow>
));

export const head: DocumentHead = {
  title: "Projects - bellechillguy",
  meta: [
    {
      name: "description",
      content:
        "Selected projects by bellechillguy - AquaWatch drowning detection, Moody mood tracker, SIMFASOR, NimonsCooked!, and more.",
    },
    { property: "og:title", content: "Projects - bellechillguy" },
    { property: "og:description", content: "Computer vision, IoT, full-stack, and game projects." },
  ],
};

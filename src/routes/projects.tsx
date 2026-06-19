import { createFileRoute } from "@tanstack/react-router";
import { MacWindow } from "@/components/mac/MacWindow";
import { ProjectsPanel } from "@/components/sections/ProjectsPanel";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — bellechillguy" },
      {
        name: "description",
        content:
          "Selected projects by bellechillguy — AquaWatch drowning detection, Moody mood tracker, SIMFASOR, NimonsCooked!, and more.",
      },
      { property: "og:title", content: "Projects — bellechillguy" },
      {
        property: "og:description",
        content: "Computer vision, IoT, full-stack, and game projects.",
      },
    ],
  }),
  component: () => (
    <MacWindow title="projects/">
      <ProjectsPanel />
    </MacWindow>
  ),
});

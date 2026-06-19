import { createFileRoute } from "@tanstack/react-router";
import { MacWindow } from "@/components/mac/MacWindow";
import TechStackPanel from "@/components/sections/TechStackPanel";

export const Route = createFileRoute("/tech-stack")({
  head: () => ({
    meta: [
      { title: "Tech Stack — bellechillguy" },
      {
        name: "description",
        content:
          "Tools and languages bellechillguy works with — across web, security, IoT, data, DevOps, game dev, and design.",
      },
      { property: "og:title", content: "Tech Stack — bellechillguy" },
      {
        property: "og:description",
        content:
          "Languages, web, databases, data, IoT/CV, DevOps, security, game dev, and design tools.",
      },
    ],
  }),
  component: () => (
    <MacWindow title="tech-stack.ts">
      <TechStackPanel />
    </MacWindow>
  ),
});

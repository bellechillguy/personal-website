import { createFileRoute } from "@tanstack/react-router";
import { MacWindow } from "@/components/mac/MacWindow";
import { ExperiencePanel } from "@/components/sections/ExperiencePanel";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — bellechillguy" },
      {
        name: "description",
        content:
          "Education, certification, organizations, and volunteer experience of Nisrina Zakiyah.",
      },
      { property: "og:title", content: "Experience — bellechillguy" },
      {
        property: "og:description",
        content: "ITB, Aksantara, GIM ITB, and event-organizer volunteer work.",
      },
    ],
  }),
  component: () => (
    <MacWindow title="experience.json">
      <ExperiencePanel />
    </MacWindow>
  ),
});

import { createFileRoute } from "@tanstack/react-router";
import { MacWindow } from "@/components/mac/MacWindow";
import InterestsPanel from "@/components/sections/InterestsPanel";

export const Route = createFileRoute("/interests")({
  head: () => ({
    meta: [
      { title: "Interests — bellechillguy" },
      {
        name: "description",
        content:
          "Things outside of IT — what I'm reading, listening, and a small gallery of day-in-life.",
      },
      { property: "og:title", content: "Interests — bellechillguy" },
      {
        property: "og:description",
        content: "Books, music, and a small day-in-life gallery.",
      },
    ],
  }),

  component: () => (
    <MacWindow title="other-interests/">
      <InterestsPanel />
    </MacWindow>
  ),
});
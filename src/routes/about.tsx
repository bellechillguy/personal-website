import { createFileRoute } from "@tanstack/react-router";
import { MacWindow } from "@/components/mac/MacWindow";
import { AboutPanel } from "@/components/sections/AboutPanel";
import { PhotoCard } from "@/components/mac/PhotoCard";

<PhotoCard
  src="/nisrina.jpg"
  caption="nisrina"
  rotate={-3}
/>

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — bellechillguy" },
      {
        name: "description",
        content:
          "About Nisrina Zakiyah (bellechillguy) — Information Systems & Technology student at ITB exploring security, networking, DevOps, game dev, and design.",
      },
      { property: "og:title", content: "About — bellechillguy" },
      {
        property: "og:description",
        content:
          "About Nisrina Zakiyah — ITB student exploring security, networking, DevOps, game dev, and design.",
      },
    ],
  }),
  component: () => (
    <MacWindow title="whoami.txt">
      <AboutPanel />
    </MacWindow>
  ),
});

import { createFileRoute } from "@tanstack/react-router";
import { MacWindow } from "@/components/mac/MacWindow";
import { ContactPanel } from "@/components/sections/ContactPanel";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — bellechillguy" },
      { name: "description", content: "Reach Nisrina Zakiyah on LinkedIn, GitHub, or Medium." },
      { property: "og:title", content: "Contact — bellechillguy" },
      { property: "og:description", content: "LinkedIn · GitHub · Medium" },
    ],
  }),
  component: () => (
    <MacWindow title="mail.app" maxWidth="720px">
      <p className="text-[14px] text-ink-2 mb-4">
        DMs open. Easiest place to reach me is LinkedIn or GitHub.
      </p>
      <ContactPanel />
    </MacWindow>
  ),
});

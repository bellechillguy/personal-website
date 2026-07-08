import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { MacWindow } from "@/components/mac/MacWindow";
import { ContactPanel } from "@/components/sections/ContactPanel";

export default component$(() => (
  <MacWindow title="mail.app" maxWidth="720px">
    <ContactPanel />
  </MacWindow>
));

export const head: DocumentHead = {
  title: "Contact - bellechillguy",
  meta: [
    { name: "description", content: "Reach Nisrina Zakiyah on LinkedIn, GitHub, or Medium." },
    { property: "og:title", content: "Contact - bellechillguy" },
    { property: "og:description", content: "LinkedIn - GitHub - Medium" },
  ],
};

import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { MacWindow } from "@/components/mac/MacWindow";
import { InterestsPanel } from "@/components/sections/InterestsPanel";

export default component$(() => (
  <MacWindow title="other-interests/">
    <InterestsPanel />
  </MacWindow>
));

export const head: DocumentHead = {
  title: "Interests - bellechillguy",
  meta: [
    {
      name: "description",
      content:
        "Things outside of IT - what I'm reading, listening, and a small gallery of day-in-life.",
    },
    { property: "og:title", content: "Interests - bellechillguy" },
    { property: "og:description", content: "Books, music, and a small day-in-life gallery." },
  ],
};

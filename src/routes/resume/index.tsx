import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { MacWindow } from "@/components/mac/MacWindow";

export default component$(() => {
  return (
    <MacWindow title="resume.pdf" maxWidth="900px" bodyClass="resume-gradient">
      <div class="space-y-5">
        <div class="flex items-center justify-between gap-3 px-1 flex-wrap">
          <div>
            <h1 class="text-sm font-bold text-foreground">Nisrina Zakiyah</h1>
            <p class="text-xs text-foreground/60 mt-0.5">Updated 2026</p>
          </div>

          <div class="flex items-center gap-2">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer noopener"
              class="hidden items-center rounded-full border border-border bg-white/85 px-3.5 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-white sm:inline-flex"
            >
              Open
            </a>

            <a
              href="/resume.pdf"
              download
              class="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-xs font-bold text-white transition-opacity hover:opacity-90"
            >
              Download PDF
              <span>↓</span>
            </a>
          </div>
        </div>

        <div class="resume-pdf-shell rounded-2xl border border-border bg-[#d1d5db] p-2 shadow-[var(--sh-2)]">
          <div class="resume-pdf-viewport overflow-hidden rounded-xl border border-border bg-white">
            <iframe
              src="/resume.pdf#page=1&view=FitH&zoom=page-width&toolbar=0&navpanes=0"
              title="Resume PDF"
              class="resume-pdf-frame"
            />
          </div>
        </div>

        <div class="flex sm:hidden justify-center">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer noopener"
            class="text-xs font-semibold text-foreground/70 underline underline-offset-4"
          >
            Open PDF in browser
          </a>
        </div>
      </div>
    </MacWindow>
  );
});

export const head: DocumentHead = {
  title: "Resume - bellechillguy",
  meta: [
    { name: "description", content: "Resume / CV of Nisrina Zakiyah (bellechillguy)." },
    { property: "og:title", content: "Resume - bellechillguy" },
    { property: "og:description", content: "Resume / CV viewer." },
  ],
};

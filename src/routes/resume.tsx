import { createFileRoute } from "@tanstack/react-router";
import { MacWindow } from "@/components/mac/MacWindow";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — bellechillguy" },
      {
        name: "description",
        content: "Resume / CV of Nisrina Zakiyah (bellechillguy).",
      },
      { property: "og:title", content: "Resume — bellechillguy" },
      { property: "og:description", content: "Resume / CV viewer." },
    ],
  }),
  component: ResumePage,
});

function ResumePage() {
  return (
    <MacWindow title="resume.pdf" maxWidth="900px">
      <div className="space-y-5">

        {/* DOCUMENT HEADER */}
        <div
          className="
            flex items-center justify-between
            gap-3
            px-1
            flex-wrap
          "
        >
          <div>
            <h1
              className="
                text-sm
                font-bold
                text-foreground
              "
            >
              Nisrina Zakiyah
            </h1>

            <p
              className="
                text-xs
                text-foreground/60
                mt-0.5
              "
            >
              Resume · Updated 2026
            </p>
          </div>


          <div className="flex items-center gap-2">

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer noopener"
              className="
                hidden sm:inline-flex
                items-center
                rounded-full
                border border-border
                bg-surface
                px-3.5 py-2
                text-xs
                font-semibold
                text-foreground
                hover:bg-surface-2
                transition-colors
              "
            >
              Open
            </a>


            <a
              href="/resume.pdf"
              download
              className="
                inline-flex
                items-center
                gap-1.5
                rounded-full
                bg-foreground
                px-4 py-2
                text-xs
                font-bold
                text-background
                hover:opacity-90
                transition-opacity
              "
            >
              Download PDF
              <span>↓</span>
            </a>

          </div>
        </div>


        {/* PDF FRAME */}
        <div
          className="
            rounded-2xl
            border border-border
            bg-surface-2
            p-2
            shadow-[var(--sh-2)]
          "
        >

          <div
            className="
              overflow-hidden
              rounded-xl
              border border-border
              bg-white
            "
          >

            <iframe
              src="/resume.pdf#toolbar=0&navpanes=0"
              title="Resume PDF"
              className="
                block
                w-full
                h-[65vh]
                sm:h-[75vh]
              "
            />

          </div>

        </div>


        {/* MOBILE ACTION */}
        <div
          className="
            flex
            sm:hidden
            justify-center
          "
        >
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer noopener"
            className="
              text-xs
              font-semibold
              text-foreground/70
              underline
              underline-offset-4
            "
          >
            Open PDF in browser
          </a>
        </div>

      </div>
    </MacWindow>
  );
}
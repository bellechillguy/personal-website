import { PhotoCard } from "@/components/mac/PhotoCard";

export function AboutPanel() {
  return (
    <div
      className="
        grid
        grid-cols-1
        md:grid-cols-[1fr_260px]
        gap-10
        md:gap-14
        items-center
      "
    >

      <div
        className="
          order-2
          md:order-1
          space-y-7
        "
      >

        <header className="space-y-2">
          <h1
            className="
              font-display
              tracking-tight
              select-none
            "
          >

            <span
              className="
                block
                text-[18px]
                md:text-[22px]
                font-medium
                text-foreground/60
                lowercase
              "
            >
              hi! this is
            </span>


            <span
              className="
                block
                name-highlight
                text-[38px]
                sm:text-[58px]
                md:text-[56px]
                font-black
                leading-[1.05]
                tracking-tighter
                my-2 w-fit inline-block whitespace-nowrap
              "
            >
              𑣲⋆｡˚ bellechillguy˙⋆
            </span>


            <span
              className="
                block
                text-[18px]
                md:text-[22px]
                font-medium
                text-foreground/60
                lowercase
                mt-2
                md:pl-122
              "
            >
              speaking
            </span>

          </h1>
        </header>


        <div className="space-y-5 max-w-xl">

          <p
            className="
              text-[15px]
              md:text-[16px]
              text-foreground/80
              leading-relaxed
            "
          >
            I'm <span className="font-semibold text-foreground">Nisrina</span>, a{" "}
            <span className="font-semibold text-foreground">
              System & Information Technology
            </span>{" "}
            student at <span className="font-semibold text-foreground">ITB</span>.
            I build things across{" "}
            <span className="italic text-foreground/90">web</span>,{" "}
            <span className="italic text-foreground/90">terminal</span>, and{" "}
            <span className="italic text-foreground/90">embedded systems</span>.
            I enjoy understanding{" "}
            <span className="italic font-medium">
              how systems work together
            </span>.
          </p>


          <p
            className="
              text-[15px]
              md:text-[16px]
              text-foreground/80
              leading-relaxed
            "
          >
            Outside academics, I’m part of{" "}
            <span className="font-semibold text-foreground">
              Aksantara ITB
            </span>{" "}
            (Robotic Software Control),{" "}
            <span className="font-semibold text-foreground">
              GIM ITB
            </span>{" "}
            (Visual Artist), and enjoy{" "}
            <span className="italic">CTFs</span>,{" "}
            <span className="italic">art</span>,{" "}
            <span className="italic">reading</span>, and{" "}
            <span className="italic">music</span>.
          </p>

        </div>


        <div
          className="
            flex
            flex-wrap
            gap-2
            pt-1
          "
        >

          <span className="tag-chip text-[12px] px-3 py-1 bg-surface-2 border border-border/60 rounded-full font-medium">
            Bandung, ID
          </span>

          <span className="tag-chip text-[12px] px-3 py-1 bg-surface-2 border border-border/60 rounded-full font-medium">
            ITB &apos;24
          </span>

          <span className="tag-chip text-[12px] px-3 py-1 bg-emerald-500/5 border border-border/60 rounded-full font-medium text-emerald-600 dark:text-emerald-400">
            open to collab
          </span>

        </div>

      </div>


      <div
        className="
          order-1
          md:order-2
          justify-self-center
          md:justify-self-end
        "
      >

        <div
          className="
            relative
            transition-transform
            duration-300
            hover:scale-[1.03]
          "
        >

          <div
            className="
              absolute
              inset-4
              rounded-2xl
              bg-surface-2
              -z-10
              rotate-3
            "
          />

          <PhotoCard
            src="/nisrina.jpg"
            caption="bellechillguy"
            rotate={-3}
          />

        </div>

      </div>

    </div>
  );
}
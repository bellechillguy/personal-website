import { interests } from "@/data/interests";
import { IconAppleMusic, IconGoodreads } from "@/components/icons/SystemIcons";
import { PhotoCard } from "@/components/mac/PhotoCard";

export default function InterestsPanel() {
  const navLinks = [
    {
      label: interests.reading.label,
      note: interests.reading.note,
      url: interests.reading.url,
      icon: <IconGoodreads className="w-5 h-5" />,
      type: "Reading",
    },
    {
      label: interests.music.label,
      note: interests.music.note,
      url: interests.music.url,
      icon: <IconAppleMusic className="w-5 h-5" />,
      type: "Music",
    },
  ];

  return (
    <div className="space-y-8">

      <div className="grid sm:grid-cols-2 gap-4">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noreferrer noopener"
            className="
              group
              relative
              flex
              items-center
              gap-4
              p-4
              rounded-2xl
              border border-border
              bg-surface
              transition-all duration-300
              hover:-translate-y-1
              hover:shadow-md
            "
          >

            <div
              className="
                flex
                items-center
                justify-center
                w-12
                h-12
                rounded-xl
                bg-surface-2
                border border-border/50
                transition-transform
                duration-300
                group-hover:scale-110
              "
            >
              {link.icon}
            </div>


            <div className="flex-1">

              <p
                className="
                  text-[11px]
                  uppercase
                  tracking-widest
                  font-bold
                  text-foreground/40
                "
              >
                {link.type}
              </p>

              <h3
                className="
                  mt-0.5
                  font-display
                  text-[16px]
                  font-bold
                  text-foreground
                "
              >
                {link.label}
              </h3>

              <p
                className="
                  text-[13px]
                  text-foreground/60
                  mt-1
                "
              >
                {link.note}
              </p>

            </div>


            <span
              className="
                text-foreground/40
                transition-all
                duration-300
                group-hover:translate-x-1
                group-hover:text-foreground
              "
            >
              ↗
            </span>

          </a>
        ))}
      </div>



      <section>

        <div className="flex items-center gap-3 mb-5">

          <span
            className="
              w-1.5
              h-6
              rounded-full
              bg-border
            "
          />

          <div>
            <h2
              className="
                font-display
                text-[17px]
                font-bold
                text-foreground
              "
            >
              Photography
            </h2>

            <p
              className="
                text-[13px]
                text-foreground/50
                mt-0.5
              "
            >
              
            </p>
          </div>

        </div>


        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            gap-5
          "
        >
          {interests.gallery.map((item, index) => (
            <PhotoCard
              key={item.caption}
              src={item.src || "/placeholder.jpg"}
              caption={item.caption}
              rotate={index % 3 === 0 ? -3 : index % 3 === 1 ? 2 : -1}
            />
          ))}
        </div>

      </section>

    </div>
  );
}
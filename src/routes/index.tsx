import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { StickyNote } from "@/components/mac/StickyNote";
import { PhotoCard } from "@/components/mac/PhotoCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "bellechillguy — Portfolio" },
      {
        name: "description",
        content:
          "Mac-style portfolio of Nisrina Zakiyah — System & Information Technology @ ITB. Cyber security, networking, DevOps, game dev, and design.",
      },
      { property: "og:title", content: "bellechillguy — Portfolio" },
      { property: "og:description", content: "Cyber security, networking, DevOps, game dev, and design — by Nisrina Zakiyah." },
    ],
  }),
  component: Desktop,
});

function Desktop() {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-0">
      
      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-[1.2fr_auto] gap-12 md:gap-16 items-center pt-12 md:pt-28 pb-12 md:pb-20">
        
        {/* TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="space-y-6 md:space-y-8"
        >
          {/* HEADER TYPOGRAPHY */}
          <h1 className="font-display flex flex-col gap-1 tracking-tight select-none">
            <span className="text-[20px] md:text-[24px] font-medium text-foreground/60 lowercase">
              hi! this is
            </span>

            <span className="name-highlight text-[40px] sm:text-[60px] md:text-[80px] font-black leading-[1.1] tracking-tighter my-2 w-fit inline-block whitespace-nowrap">
              𑣲⋆｡˚ bellechillguy˙⋆
            </span>

            <span className="text-[20px] md:text-[24px] font-medium text-foreground/60 lowercase md:pl-160">
              speaking!
            </span>
          </h1>

          {/* BIO PARAGRAPH */}
          <p className="text-[16px] md:text-[18px] text-foreground/80 max-w-[50ch] leading-relaxed">
            A System & Information Technology student who loves to explore{" "}
            <span className="font-bold text-foreground">Cyber Security</span>,{" "}
            <span className="font-bold text-foreground">Networking</span>,{" "}
            <span className="font-bold text-foreground">DevOps</span>,{" "}
            <span className="font-bold text-foreground">Game Development</span>, and{" "}
            <span className="font-bold text-foreground">Design</span>.
          </p>
          
          {/* CALL TO ACTION BUTTONS */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              to="/projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-[14px] font-bold text-background hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              See projects 
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
            
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border/80 bg-surface px-6 py-3 text-[14px] font-bold text-foreground hover:bg-surface-2 hover:border-border hover:scale-105 transition-all duration-300 shadow-sm"
            >
              Say hi
            </Link>
          </div>
        </motion.div>

        {/* SIDE VISUALS (PHOTO & STICKY NOTE) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="relative flex flex-col sm:flex-row md:flex-col items-center gap-6 md:gap-4 justify-self-center md:justify-self-end mt-4 md:mt-0"
        >
          {/* PhotoCard */}
          <div className="transform hover:scale-[1.02] hover:rotate-1 transition-all duration-300 ease-out z-10">
            <
              PhotoCard caption="𐙚 ˚🍰 ⋆｡˚ ᡣ𐭩" 
              rotate={-4} 
              src="/pinkie.gif"
            />
          </div>
          
          {/* StickyNote */}
          <div className="transform hover:-translate-y-1 hover:-rotate-2 transition-all duration-300 ease-out md:-mt-8 md:-ml-12 z-20">
            <StickyNote rotate={4}>
              i'm a girl who feels <span className="font-bold text-foreground">everything</span>
            </StickyNote>
          </div>
        </motion.div>

      </section>
    </div>
  );
}
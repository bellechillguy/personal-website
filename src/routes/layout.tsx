import { component$, Slot } from "@builder.io/qwik";
import { Dock } from "@/components/mac/Dock";
import { Menubar } from "@/components/mac/Menubar";

export default component$(() => {
  return (
    <>
      <Menubar />
      <main class="min-h-screen pt-10 pb-32 px-4 md:px-8">
        <Slot />
      </main>
      <Dock />
    </>
  );
});

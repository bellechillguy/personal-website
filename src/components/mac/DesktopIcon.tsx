import { component$, type Component, type QwikIntrinsicElements } from "@builder.io/qwik";

type IconProps = QwikIntrinsicElements["svg"] & { className?: string };

interface DesktopIconProps {
  to:
    | "/about"
    | "/projects"
    | "/tech-stack"
    | "/experience"
    | "/blog"
    | "/interests"
    | "/contact"
    | "/resume";
  label: string;
  Icon: Component<IconProps>;
}

export const DesktopIcon = component$(({ to, label, Icon }: DesktopIconProps) => {
  return (
    <a href={to} class="group flex flex-col items-center gap-1.5 w-[88px] text-center select-none">
      <span class="icon-hover">
        <Icon className="w-14 h-14 md:w-16 md:h-16" />
      </span>
      <span class="px-1.5 py-0.5 rounded text-[12px] font-medium text-foreground/80 group-hover:text-foreground group-hover:bg-foreground/5">
        {label}
      </span>
    </a>
  );
});

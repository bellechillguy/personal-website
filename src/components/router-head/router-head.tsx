import { component$ } from "@builder.io/qwik";
import { useDocumentHead, useLocation } from "@builder.io/qwik-city";

export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();

  return (
    <>
      <title>{head.title}</title>
      <link rel="canonical" href={loc.url.href} />
      {head.meta.map((meta, i) => (
        <meta key={`meta-${i}`} {...meta} />
      ))}
      {head.links.map((link, i) => (
        <link key={`link-${i}`} {...link} />
      ))}
      {head.styles.map((style, i) => (
        <style key={`style-${i}`} {...style.props} dangerouslySetInnerHTML={style.style} />
      ))}
    </>
  );
});

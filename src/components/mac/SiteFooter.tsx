import { component$ } from "@builder.io/qwik";

const currentYear = new Date().getFullYear();

export const SiteFooter = component$(() => {
  return (
    <footer class="site-footer" aria-label="Site footer">
      <div class="site-footer__inner">
        <div class="site-footer__identity">
          <p class="site-footer__copyright">
            <span>
              © {currentYear} <strong>bellechillguy</strong>
            </span>
          </p>
          <p class="site-footer__note">Designed and built by Nisrina Zakiyah.</p>
        </div>

        <p class="site-footer__build">
          <span>Built with</span>
          <a href="https://qwik.dev/" target="_blank" rel="noreferrer noopener">
            Qwik
          </a>
          <span aria-hidden="true">·</span>
          <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer noopener">
            TypeScript
          </a>
          <span aria-hidden="true">·</span>
          <a href="https://vite.dev/" target="_blank" rel="noreferrer noopener">
            Vite
          </a>
        </p>
      </div>
    </footer>
  );
});

import { Logo } from "./Logo";
import { site, waLink } from "../_lib/site";

const message = "Olá, Kasadi! Quero um orçamento de móvel sob medida.";

export const Header = () => (
  <header className="sticky top-0 z-20 bg-concrete/90 backdrop-blur border-b border-concrete-2">
    <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
      <a href="#topo" aria-label="Kasadi Móveis, início">
        <Logo />
      </a>
      <div className="flex items-center gap-4">
        <span className="hidden text-sm text-muted sm:block">{site.city}</span>
        <a
          href={waLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md bg-ink px-4 py-2 font-display text-lg font-semibold text-paper hover:bg-steel-2"
        >
          WhatsApp
        </a>
      </div>
    </div>
  </header>
);

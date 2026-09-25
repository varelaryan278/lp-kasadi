import { Logo } from "./Logo";
import { site } from "../_lib/site";

const links = [
  { label: "Instagram", href: site.instagram },
  { label: "Facebook", href: site.facebook },
  { label: "Pinterest", href: site.pinterest },
];

export const Footer = () => (
  <footer className="border-t border-concrete-2">
    <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
      <Logo />
      <ul className="flex gap-5 text-sm text-muted">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
      <p className="text-sm text-muted">© {new Date().getFullYear()} {site.name}</p>
    </div>
  </footer>
);

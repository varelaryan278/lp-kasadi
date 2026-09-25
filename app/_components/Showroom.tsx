import { site } from "../_lib/site";

export const Showroom = () => (
  <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
    <div className="grid gap-8 border-t-2 border-ink pt-8 sm:grid-cols-3">
      <h2 className="font-display text-4xl font-bold leading-none tracking-tight">Passe no showroom</h2>
      <dl className="grid gap-6 sm:col-span-2 sm:grid-cols-2">
        <div>
          <dt className="text-sm text-muted">Onde</dt>
          <dd className="mt-1 font-display text-2xl font-semibold leading-tight">{site.city}</dd>
        </div>
        <div>
          <dt className="text-sm text-muted">WhatsApp</dt>
          <dd className="mt-1 font-display text-2xl font-semibold leading-tight">
            <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-coral">
              {site.phoneDisplay}
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-sm text-muted">Bastidores da oficina</dt>
          <dd className="mt-1 font-display text-2xl font-semibold leading-tight">
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-coral">
              @kasadimoveis
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-sm text-muted">Atendimento</dt>
          <dd className="mt-1 font-display text-2xl font-semibold leading-tight">Segunda a sábado</dd>
        </div>
      </dl>
    </div>
  </section>
);

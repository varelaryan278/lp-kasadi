import { Cotas } from "./Cotas";
import { Video } from "./Video";

const facts = [
  "Produção própria, sem intermediário",
  "Entrega e instalação inclusas",
  "Presidente Epitácio e região",
];

export const Hero = () => (
  <section id="topo" className="bg-ink text-paper">
    <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-16 pt-14 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:pb-24 lg:pt-20">
      <div>
        <h1 className="font-display text-[44px] font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
          Móvel sob medida, fabricado na nossa oficina em Presidente Epitácio.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-dark sm:text-xl">
          Metalon e MDF premium para casa e comércio. Você manda o espaço, a
          gente desenha, fabrica e instala.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#orcamento"
            className="rounded-md bg-coral px-6 py-3.5 text-center font-display text-xl font-semibold text-paper hover:bg-coral-deep"
          >
            Pedir orçamento
          </a>
          <a
            href="#como-funciona"
            className="rounded-md border border-steel-2 px-6 py-3.5 text-center font-display text-xl font-semibold text-paper hover:border-muted-dark"
          >
            Como funciona
          </a>
        </div>
        <ul className="mt-10 flex flex-col gap-2 text-sm text-muted-dark sm:flex-row sm:gap-6">
          {facts.map((f) => (
            <li key={f} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-coral" aria-hidden="true" />
              {f}
            </li>
          ))}
        </ul>
      </div>
      <div className="relative aspect-video overflow-hidden rounded-lg border border-steel-2 bg-steel">
        <Video src="/video/hero.mp4" poster="/fotos/mesa.jpg" />
        <Cotas />
      </div>
    </div>
  </section>
);

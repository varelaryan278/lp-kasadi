import Image from "next/image";

const fotos = [
  { arquivo: "solda", alt: "Solda de tubo de metalon na oficina da Kasadi" },
  { arquivo: "faisca", alt: "Acabamento de cordão de solda com esmerilhadeira" },
  { arquivo: "furadeira", alt: "Furadeira de bancada perfurando tubo de metalon" },
];

const razoes = [
  { titulo: "Quem desenha é quem solda", texto: "Não terceirizamos nada. O mesmo time que projeta acompanha a peça até a instalação." },
  { titulo: "Prazo que a gente controla", texto: "A oficina é nossa. Sem esperar fornecedor, sem depender de fábrica de fora." },
  { titulo: "Ajuste no detalhe", texto: "Medida fora, parede torta, tomada no meio do caminho. A gente resolve na produção, não depois." },
];

export const Fabrica = () => (
  <section className="bg-ink text-paper">
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <h2 className="font-display text-4xl font-bold leading-none tracking-tight sm:text-5xl">
            Quem fabrica, responde.
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-muted-dark">
            Loja de móveis revende. A Kasadi corta, solda, pinta e monta cada peça na própria oficina.
          </p>
          <blockquote className="mt-8 border-l-2 border-coral pl-4 font-display text-2xl font-medium leading-tight">
            “Eu sei o quanto cobro pra entregar algo bom.”
            <footer className="mt-2 font-body text-sm font-normal text-muted-dark">Kasadi, no Instagram</footer>
          </blockquote>
        </div>
        <ul className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1">
          {razoes.map((r) => (
            <li key={r.titulo} className="border-t border-steel-2 pt-4">
              <h3 className="font-display text-2xl font-semibold leading-tight">{r.titulo}</h3>
              <p className="mt-1.5 text-muted-dark">{r.texto}</p>
            </li>
          ))}
        </ul>
      </div>
      <ul className="mt-12 grid gap-2 sm:grid-cols-3">
        {fotos.map((f) => (
          <li key={f.arquivo} className="relative aspect-video overflow-hidden rounded-md bg-steel">
            <Image src={`/fotos/${f.arquivo}.jpg`} alt={f.alt} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover" />
          </li>
        ))}
      </ul>
    </div>
  </section>
);

const etapas = [
  { titulo: "Você manda o espaço", texto: "Foto do ambiente e as medidas pelo WhatsApp. Se preferir, a gente vai até você medir." },
  { titulo: "Projeto e orçamento", texto: "Desenho do móvel, lista de materiais e valor fechado antes de começar." },
  { titulo: "Fabricação na oficina", texto: "Corte, solda, pintura e montagem feitos pela nossa equipe, aqui na cidade." },
  { titulo: "Entrega e instalação", texto: "Levamos, montamos e ajustamos no lugar. Você recebe pronto para usar." },
];

export const Processo = () => (
  <section id="como-funciona" className="border-y border-concrete-2 bg-paper">
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
      <h2 className="max-w-2xl font-display text-4xl font-bold leading-none tracking-tight sm:text-5xl">
        Do espaço vazio ao móvel instalado
      </h2>
      <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {etapas.map((e, i) => (
          <li key={e.titulo} className="border-t-2 border-ink pt-4">
            <span className="font-display text-5xl font-bold leading-none text-coral">{i + 1}</span>
            <h3 className="mt-3 font-display text-2xl font-semibold leading-tight">{e.titulo}</h3>
            <p className="mt-2 text-muted">{e.texto}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

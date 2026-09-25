import Image from "next/image";

const ambientes = [
  { titulo: "Cozinhas", texto: "Armários, bancadas e ilhas em MDF com estrutura de metalon.", foto: "estruturas" },
  { titulo: "Área gourmet", texto: "Mesas, bancos e balcões feitos para uso pesado.", foto: "mesa" },
  { titulo: "Home office e quartos", texto: "Escrivaninhas, estantes e closets no tamanho exato da parede.", foto: "estante" },
  { titulo: "Salas", texto: "Racks, aparadores, cadeiras e mesas de centro.", foto: "cadeiras" },
  { titulo: "Lojas e comércio", texto: "Prateleiras, balcões, expositores e mobiliário de atendimento.", foto: "balcao" },
  { titulo: "Acabamento", texto: "Pintura eletrostática, tampos em madeira e mármore orgânico.", foto: "pintura" },
];

export const Ambientes = () => (
  <section id="ambientes" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
    <div className="max-w-2xl">
      <h2 className="font-display text-4xl font-bold leading-none tracking-tight sm:text-5xl">
        O que fabricamos sob medida
      </h2>
      <p className="mt-4 text-lg leading-relaxed text-muted">
        Cada projeto nasce do seu espaço. Sem catálogo fixo: você escolhe medida, material e acabamento.
      </p>
    </div>
    <ul className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      {ambientes.map((a) => (
        <li key={a.titulo}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-concrete-2">
            <Image
              src={`/fotos/${a.foto}.jpg`}
              alt=""
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
          <h3 className="mt-4 font-display text-2xl font-semibold leading-none">{a.titulo}</h3>
          <p className="mt-1.5 text-muted">{a.texto}</p>
        </li>
      ))}
    </ul>
  </section>
);

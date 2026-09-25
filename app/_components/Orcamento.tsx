"use client";

import { useState } from "react";
import { waLink } from "../_lib/site";

const ambientes = ["Cozinha", "Área gourmet", "Home office", "Quarto ou closet", "Sala", "Loja ou comércio", "Outro"];
const medidas = ["Já tenho as medidas", "Quero visita técnica"];
const prazos = ["Até 30 dias", "1 a 3 meses", "Sem pressa"];

const Chips = ({ opcoes, valor, onChange, nome }: { opcoes: string[]; valor: string; onChange: (v: string) => void; nome: string }) => (
  <div role="radiogroup" aria-label={nome} className="flex flex-wrap gap-2">
    {opcoes.map((o) => {
      const ativo = o === valor;
      return (
        <button
          key={o}
          type="button"
          role="radio"
          aria-checked={ativo}
          onClick={() => onChange(o)}
          className={`rounded-md border px-3.5 py-2 text-sm font-medium ${
            ativo ? "border-coral bg-coral text-paper" : "border-concrete-2 bg-paper text-ink hover:border-muted"
          }`}
        >
          {o}
        </button>
      );
    })}
  </div>
);

const Campo = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div>
    <p className="mb-2 font-display text-xl font-semibold leading-none">{label}</p>
    {children}
  </div>
);

const inputClass = "w-full rounded-md border border-concrete-2 bg-paper px-3.5 py-2.5 text-ink placeholder:text-muted";

export const Orcamento = () => {
  const [ambiente, setAmbiente] = useState("");
  const [cidade, setCidade] = useState("");
  const [medida, setMedida] = useState("");
  const [prazo, setPrazo] = useState("");
  const [nome, setNome] = useState("");

  const linhas = [
    ["Ambiente", ambiente],
    ["Cidade", cidade],
    ["Medidas", medida],
    ["Prazo", prazo],
    ["Nome", nome],
  ] as const;

  const mensagem = [
    "Olá, Kasadi! Quero um orçamento de projeto sob medida.",
    ...linhas.filter(([, v]) => v.trim()).map(([k, v]) => `${k}: ${v.trim()}`),
  ].join("\n");

  const pronto = Boolean(ambiente && cidade.trim());

  return (
    <section id="orcamento" className="border-t border-concrete-2 bg-concrete">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-24">
        <div>
          <h2 className="font-display text-4xl font-bold leading-none tracking-tight sm:text-5xl">
            Peça seu orçamento
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
            Responda quatro perguntas e a mensagem chega pronta no nosso WhatsApp. A gente retorna com os próximos passos.
          </p>
          <div className="mt-8 grid gap-7">
            <Campo label="Qual ambiente?">
              <Chips nome="Ambiente" opcoes={ambientes} valor={ambiente} onChange={setAmbiente} />
            </Campo>
            <Campo label="Em qual cidade?">
              <input
                className={inputClass}
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
                placeholder="Presidente Epitácio"
                autoComplete="address-level2"
                aria-label="Cidade"
              />
            </Campo>
            <Campo label="Já tem as medidas?">
              <Chips nome="Medidas" opcoes={medidas} valor={medida} onChange={setMedida} />
            </Campo>
            <Campo label="Para quando?">
              <Chips nome="Prazo" opcoes={prazos} valor={prazo} onChange={setPrazo} />
            </Campo>
            <Campo label="Como podemos te chamar?">
              <input
                className={inputClass}
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Seu nome"
                autoComplete="given-name"
                aria-label="Nome"
              />
            </Campo>
          </div>
        </div>

        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-lg bg-ink p-6 text-paper">
            <p className="font-display text-xl font-semibold leading-none">Sua mensagem</p>
            <pre className="mt-4 whitespace-pre-wrap font-body text-base leading-relaxed text-muted-dark">{mensagem}</pre>
            <a
              href={pronto ? waLink(mensagem) : undefined}
              target="_blank"
              rel="noopener noreferrer"
              aria-disabled={!pronto}
              className={`mt-6 block rounded-md px-6 py-3.5 text-center font-display text-xl font-semibold ${
                pronto ? "bg-coral text-paper hover:bg-coral-deep" : "cursor-not-allowed bg-steel-2 text-muted-dark"
              }`}
            >
              Enviar pelo WhatsApp
            </a>
            {!pronto && <p className="mt-3 text-sm text-muted-dark">Escolha o ambiente e informe a cidade para enviar.</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

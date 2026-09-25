export const Cotas = () => (
  <div aria-hidden="true" className="pointer-events-none absolute inset-0 font-display text-sm font-semibold text-coral">
    <div className="cota cota-y absolute bottom-10 left-5 top-5 w-px bg-coral">
      <span className="absolute -left-1.5 top-0 h-px w-3.5 bg-coral" />
      <span className="absolute -left-1.5 bottom-0 h-px w-3.5 bg-coral" />
    </div>
    <span className="cota cota-fade absolute left-7 top-1/2 -translate-y-1/2 [writing-mode:vertical-rl] rotate-180">760</span>

    <div className="cota cota-x absolute bottom-5 left-10 right-5 h-px bg-coral">
      <span className="absolute -top-1.5 left-0 h-3.5 w-px bg-coral" />
      <span className="absolute -top-1.5 right-0 h-3.5 w-px bg-coral" />
    </div>
    <span className="cota cota-fade absolute bottom-7 left-1/2 -translate-x-1/2">1.800</span>

    <div className="cota cota-fade absolute right-5 top-5 flex items-center gap-2">
      <span className="h-px w-10 bg-coral" />
      <span className="rounded-sm bg-ink/70 px-1.5 py-0.5 text-paper">metalon 30×30 · MDF 25 mm</span>
    </div>
  </div>
);

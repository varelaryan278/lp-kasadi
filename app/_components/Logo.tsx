export const Logo = ({ light = false }: { light?: boolean }) => (
  <span className="inline-flex items-center gap-2.5">
    <svg width="34" height="34" viewBox="0 0 34 34" aria-hidden="true">
      <rect width="34" height="34" rx="8" fill="#e8503a" />
      <path
        d="M17 8.5 8.5 15.5V25.5h6v-6h5v6h6V15.5Z"
        fill="none"
        stroke="#fff"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
    </svg>
    <span
      className={`font-display leading-none ${light ? "text-paper" : "text-ink"}`}
    >
      <span className="block text-[26px] font-bold tracking-tight">kasadi</span>
      <span className="block text-[11px] font-semibold tracking-[0.18em] -mt-0.5">
        MÓVEIS
      </span>
    </span>
  </span>
);

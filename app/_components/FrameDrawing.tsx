export const FrameDrawing = () => (
  <svg
    viewBox="0 0 520 400"
    className="h-auto w-full"
    role="img"
    aria-label="Desenho técnico de uma mesa em metalon com tampo de madeira e cotas"
  >
    <defs>
      <pattern id="hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <line x1="0" y1="0" x2="0" y2="8" stroke="#b98b5e" strokeWidth="1.2" strokeOpacity="0.55" />
      </pattern>
    </defs>
    <g stroke="#dddbd5" strokeWidth="1.6" fill="none" strokeLinejoin="round">
      <polygon points="120,150 360,90 470,140 230,200" fill="url(#hatch)" />
      <polygon points="120,150 120,164 230,214 230,200" fill="#151515" />
      <polygon points="230,200 230,214 470,154 470,140" fill="#151515" />
      <polygon points="120,150 360,90 470,140 230,200" />
      <line x1="120" y1="164" x2="230" y2="214" />
      <line x1="230" y1="214" x2="470" y2="154" />
      <line x1="470" y1="140" x2="470" y2="154" />
      <line x1="120" y1="150" x2="120" y2="164" />
      <line x1="120" y1="164" x2="120" y2="300" />
      <line x1="230" y1="214" x2="230" y2="350" />
      <line x1="470" y1="154" x2="470" y2="290" />
      <line x1="360" y1="104" x2="360" y2="240" strokeDasharray="4 5" />
      <line x1="120" y1="290" x2="230" y2="340" />
      <line x1="230" y1="340" x2="470" y2="280" />
      <line x1="120" y1="290" x2="360" y2="230" strokeDasharray="4 5" />
      <line x1="360" y1="230" x2="470" y2="280" strokeDasharray="4 5" />
    </g>
    <g stroke="#e8503a" strokeWidth="1.2" fill="#e8503a" fontFamily="var(--font-barlow-condensed)" fontSize="15" fontWeight="600">
      <line x1="118" y1="176" x2="118" y2="300" strokeDasharray="0" />
      <line x1="94" y1="176" x2="94" y2="300" />
      <line x1="90" y1="176" x2="120" y2="176" />
      <line x1="90" y1="300" x2="120" y2="300" />
      <text x="70" y="244" textAnchor="middle" stroke="none" transform="rotate(-90 70 244)">760</text>
      <line x1="230" y1="380" x2="470" y2="320" />
      <line x1="230" y1="360" x2="230" y2="386" />
      <line x1="470" y1="300" x2="470" y2="326" />
      <text x="356" y="368" textAnchor="middle" stroke="none" transform="rotate(-14 356 368)">1.800</text>
      <line x1="100" y1="322" x2="212" y2="372" />
      <line x1="92" y1="310" x2="108" y2="334" />
      <line x1="204" y1="360" x2="220" y2="384" />
      <text x="146" y="362" textAnchor="middle" stroke="none" transform="rotate(24 146 362)">800</text>
      <circle cx="360" cy="90" r="3.5" stroke="none" />
      <line x1="360" y1="90" x2="400" y2="52" />
      <line x1="400" y1="52" x2="452" y2="52" />
      <text x="404" y="46" stroke="none">tampo MDF 25 mm</text>
      <circle cx="230" cy="350" r="3.5" stroke="none" />
      <line x1="230" y1="350" x2="290" y2="390" />
      <line x1="290" y1="390" x2="380" y2="390" />
      <text x="294" y="384" stroke="none">metalon 30×30</text>
    </g>
  </svg>
);

import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "./_lib/site";

export const alt = "Kasadi Móveis, móveis sob medida em Presidente Epitácio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const assets = join(process.cwd(), "app/_assets");

export default async function Image() {
  const [condensed, regular] = await Promise.all([
    readFile(join(assets, "BarlowCondensed-Bold.ttf")),
    readFile(join(assets, "Barlow-Regular.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#151515",
          color: "#ffffff",
          fontFamily: "Barlow",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <svg width="64" height="64" viewBox="0 0 34 34">
            <rect width="34" height="34" rx="8" fill="#e8503a" />
            <path
              d="M17 8.5 8.5 15.5V25.5h6v-6h5v6h6V15.5Z"
              fill="none"
              stroke="#fff"
              strokeWidth="2.4"
              strokeLinejoin="round"
            />
          </svg>
          <div style={{ display: "flex", flexDirection: "column", fontFamily: "Barlow Condensed" }}>
            <span style={{ fontSize: 44, lineHeight: 0.9 }}>kasadi</span>
            <span style={{ fontSize: 18, letterSpacing: 4 }}>MÓVEIS</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontFamily: "Barlow Condensed", fontSize: 104, lineHeight: 0.92, letterSpacing: -2, maxWidth: 1000 }}>
            Móvel sob medida, fabricado na nossa oficina.
          </div>
          <div style={{ fontSize: 34, color: "#a3a19a" }}>
            {`Metalon e MDF para casa e comércio · ${site.city}`}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28, color: "#a3a19a" }}>
          <span>Produção própria · Entrega e instalação</span>
          <span style={{ color: "#e8503a" }}>{`WhatsApp ${site.phoneDisplay}`}</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Barlow Condensed", data: condensed, style: "normal", weight: 700 },
        { name: "Barlow", data: regular, style: "normal", weight: 400 },
      ],
    }
  );
}

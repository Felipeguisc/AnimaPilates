import { ImageResponse } from "next/og";

export const alt =
  "AnimaPilates — fisioterapia e Pilates com Anielle Pereira em Lages, SC";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
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
          background: "#f4efe4",
          color: "#1f3328",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#3f6b52",
          }}
        >
          Lages, Santa Catarina
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 72, fontWeight: 600, lineHeight: 1.05 }}>
            AnimaPilates
          </div>
          <div style={{ fontSize: 32, color: "#4a5c50", maxWidth: 840 }}>
            Fisioterapia e Pilates com Anielle Pereira
          </div>
        </div>
        <div style={{ fontSize: 24, color: "#3f6b52" }}>
          Pilates · Massagem miofascial · Fisioterapia
        </div>
      </div>
    ),
    { ...size },
  );
}

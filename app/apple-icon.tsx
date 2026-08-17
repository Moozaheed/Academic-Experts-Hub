import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 40,
          background: "linear-gradient(135deg, #6366f1 0%, #9333ea 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 72, fontWeight: 900, letterSpacing: "-2px", lineHeight: 1 }}>
          AH
        </div>
        <div style={{ fontSize: 18, fontWeight: 600, opacity: 0.85, marginTop: 6, letterSpacing: "1px" }}>
          ACADEMIC
        </div>
      </div>
    ),
    { ...size }
  );
}

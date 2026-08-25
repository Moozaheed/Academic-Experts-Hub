import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 8,
          background: "linear-gradient(135deg, #2563EB 0%, #1E40AF 100%)",
        }}
      >
        {/* Graduation cap shape */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1,
          }}
        >
          {/* Cap top (diamond) */}
          <div
            style={{
              width: 16,
              height: 7,
              background: "white",
              clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
              display: "flex",
            }}
          />
          {/* Cap brim */}
          <div
            style={{
              width: 14,
              height: 5,
              background: "#38BDF8",
              borderRadius: 2,
              display: "flex",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}

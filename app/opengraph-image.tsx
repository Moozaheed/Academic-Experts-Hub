import { ImageResponse } from "next/og";
import { OgTemplate } from "@/lib/og-template";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Academic Experts Hub — Professional Academic Consulting";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <OgTemplate
        title="Professional Academic Consulting"
        subtitle="Thesis, dissertation, research methodology, data analysis & software engineering support for international students."
      />
    ),
    { ...size }
  );
}

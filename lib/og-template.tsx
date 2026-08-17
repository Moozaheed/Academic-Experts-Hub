export function OgTemplate({
  title,
  subtitle,
  eyebrow,
}: {
  title: string;
  subtitle?: string;
  eyebrow?: string;
}) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)",
        position: "relative",
        padding: "60px",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          background:
            "radial-gradient(circle at 30% 30%, rgba(99,102,241,0.35), transparent 60%)",
        }}
      />
      {eyebrow && (
        <div
          style={{
            display: "flex",
            fontSize: 22,
            color: "#a5b4fc",
            marginBottom: 18,
            fontWeight: 600,
            letterSpacing: 1,
            textTransform: "uppercase",
          }}
        >
          {eyebrow}
        </div>
      )}
      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: 14,
            background: "linear-gradient(135deg,#6366f1,#9333ea)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 28,
            color: "white",
            fontWeight: 800,
          }}
        >
          A
        </div>
        <div style={{ display: "flex", fontSize: 30, fontWeight: 700, color: "#e2e8f0" }}>
          Academic Experts Hub
        </div>
      </div>
      <div
        style={{
          display: "flex",
          fontSize: title.length > 60 ? 40 : 48,
          fontWeight: 800,
          color: "white",
          textAlign: "center",
          maxWidth: 980,
          lineHeight: 1.25,
        }}
      >
        {title}
      </div>
      {subtitle && (
        <div
          style={{
            display: "flex",
            fontSize: 24,
            color: "#cbd5e1",
            maxWidth: 860,
            textAlign: "center",
            marginTop: 20,
            lineHeight: 1.4,
          }}
        >
          {subtitle}
        </div>
      )}
    </div>
  );
}

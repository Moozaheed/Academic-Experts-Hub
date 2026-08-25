import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "12px", textDecoration: "none", fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
      {/* Icon Mark */}
      <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
        <defs>
          <linearGradient id="logoGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#1E40AF" />
          </linearGradient>
          <linearGradient id="logoGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#0284C7" />
          </linearGradient>
        </defs>
        <rect width="48" height="48" rx="12" fill="url(#logoGrad1)" />
        <path d="M24 13L36 19L24 25L12 19L24 13Z" fill="#FFFFFF" />
        <path d="M16 22.5V28C16 30.5 19.5 33 24 33C28.5 33 32 30.5 32 28V22.5L24 27L16 22.5Z" fill="url(#logoGrad2)" fillOpacity="0.95" />
        <path d="M35 20V26" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="35" cy="27" r="1.5" fill="#38BDF8" />
      </svg>

      {/* Typography */}
      <div style={{ display: "flex", flexDirection: "column", lineHeight: "1.15" }}>
        <span style={{ fontSize: "18px", fontWeight: 800, color: "#FFFFFF", letterSpacing: "-0.02em" }}>
          Academic<span style={{ color: "#60a5fa" }}>Experts</span>
        </span>
        <span style={{ fontSize: "10px", fontWeight: 600, color: "#94a3b8", letterSpacing: "0.12em", textTransform: "uppercase" }}>
          Hub
        </span>
      </div>
    </Link>
  );
}

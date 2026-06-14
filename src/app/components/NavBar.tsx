import { Layers } from "lucide-react";

export function NavBar() {
  return (
    <nav
      className="sticky top-0 z-50 flex items-center justify-between px-6 py-4"
      style={{
        background: "rgba(255,255,255,0.75)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(99,102,241,0.08)",
      }}
    >
      <div className="flex items-center gap-2.5">
        <div
          style={{
            width: 34,
            height: 34,
            borderRadius: 10,
            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 12px rgba(99,102,241,0.35)",
          }}
        >
          <Layers size={18} color="#fff" />
        </div>
        <div>
          <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "#1e1b4b", lineHeight: 1.1 }}>
            ToolKit
          </div>
          <div style={{ fontSize: "10px", color: "#94a3b8", fontWeight: 500 }}>
            by Lethe222
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <a
          href="https://github.com/lethe222"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: "0.8rem",
            fontWeight: 600,
            color: "#6366f1",
            padding: "6px 14px",
            borderRadius: 10,
            background: "#eef2ff",
            textDecoration: "none",
            transition: "background 0.2s",
          }}
        >
          GitHub
        </a>
      </div>
    </nav>
  );
}

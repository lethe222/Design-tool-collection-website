export function Footer() {
  return (
    <footer
      className="py-10 px-6 text-center"
      style={{
        background: "linear-gradient(135deg, #f8f7ff 0%, #f0f4ff 100%)",
        borderTop: "1px solid rgba(99,102,241,0.08)",
      }}
    >
      <div className="max-w-5xl mx-auto">
        <div style={{ fontSize: "0.85rem", color: "#94a3b8", marginBottom: 6 }}>
          Crafted with care by{" "}
          <span style={{ color: "#6366f1", fontWeight: 600 }}>Lethe222</span>
        </div>
        <div style={{ fontSize: "0.75rem", color: "#cbd5e1" }}>
          Tools for designers and developers — continuously updated.
        </div>
        <div className="flex items-center justify-center gap-6 mt-6">
          {["WebP Compress", "AE Script", "Lottie Player"].map((name) => (
            <span key={name} style={{ fontSize: "0.75rem", color: "#b0b8cc" }}>
              {name}
            </span>
          ))}
        </div>
        <div style={{ fontSize: "0.7rem", color: "#d1d5db", marginTop: 20 }}>
          © 2026 Lethe222 · All rights reserved
        </div>
      </div>
    </footer>
  );
}

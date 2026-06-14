export function EcosystemSection() {
  const stack = [
    { icon: "⚛️", name: "React" },
    { icon: "🎨", name: "Figma" },
    { icon: "🎬", name: "After Effects" },
    { icon: "🖼️", name: "WebP" },
    { icon: "🔠", name: "Typography" },
    { icon: "✨", name: "Lottie" },
    { icon: "🌐", name: "Web" },
    { icon: "📦", name: "Scripts" },
  ];

  const features = [
    {
      icon: "🚀",
      title: "Lightweight & Fast",
      desc: "Every tool is optimized for speed. No bloated UIs, just the functionality you need.",
    },
    {
      icon: "🔒",
      title: "Privacy First",
      desc: "Local processing where possible. Your files stay on your machine.",
    },
    {
      icon: "🛠️",
      title: "Workflow Focused",
      desc: "Each tool targets a specific pain point in the design-to-production workflow.",
    },
  ];

  return (
    <>
      {/* Features strip */}
      <section
        className="py-16 px-6"
        style={{
          background: "linear-gradient(135deg, #f5f3ff 0%, #eff6ff 50%, #f0fdf4 100%)",
        }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#1e1b4b", marginBottom: 8 }}>
              Why These Tools?
            </h2>
            <p style={{ fontSize: "0.875rem", color: "#94a3b8" }}>
              Each tool solves a real problem from real workflows.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
            {features.map((f) => (
              <div
                key={f.title}
                style={{
                  background: "rgba(255,255,255,0.8)",
                  borderRadius: 16,
                  padding: "24px",
                  border: "1px solid rgba(255,255,255,0.9)",
                  boxShadow: "0 2px 16px rgba(99,102,241,0.06)",
                }}
              >
                <div style={{ fontSize: 28, marginBottom: 12 }}>{f.icon}</div>
                <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#1e1b4b", marginBottom: 6 }}>
                  {f.title}
                </h4>
                <p style={{ fontSize: "0.825rem", color: "#64748b", lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem grid */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#1e1b4b", marginBottom: 8 }}>
            Built Around Your Stack
          </h2>
          <p style={{ fontSize: "0.875rem", color: "#94a3b8" }}>
            Integrates with the technologies and formats you already use.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {stack.map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-2.5 px-5 py-3 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.85)",
                border: "1px solid rgba(99,102,241,0.1)",
                boxShadow: "0 2px 12px rgba(99,102,241,0.06)",
              }}
            >
              <span style={{ fontSize: 20 }}>{item.icon}</span>
              <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "#374151" }}>{item.name}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

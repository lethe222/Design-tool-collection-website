export function AppFooter() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(51,112,255,0.08)",
        backgroundColor: "#F7F8FC",
      }}
    >
      <div
        style={{
          maxWidth: 960,
          margin: "0 auto",
          padding: "24px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div
            style={{
              width: 20,
              height: 20,
              borderRadius: 5,
              background: "#3370FF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
              <rect x="1" y="1" width="5" height="5" rx="1.5" fill="white" />
              <rect x="8" y="1" width="5" height="5" rx="1.5" fill="white" fillOpacity="0.6" />
              <rect x="1" y="8" width="5" height="5" rx="1.5" fill="white" fillOpacity="0.6" />
              <rect x="8" y="8" width="5" height="5" rx="1.5" fill="white" />
            </svg>
          </div>
          <span style={{ fontSize: 13, fontWeight: 600, color: "#1F2329" }}>工具集</span>
        </div>
        <span style={{ fontSize: 12, color: "#B0B7C3" }}>
          © 2026 Lethe222 · 持续更新中
        </span>
      </div>
    </footer>
  );
}

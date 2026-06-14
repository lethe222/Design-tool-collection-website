import { useState } from "react";
import { Search } from "lucide-react";

interface AppHeaderProps {
  searchQuery: string;
  onSearch: (q: string) => void;
}

export function AppHeader({ searchQuery, onSearch }: AppHeaderProps) {
  const [focused, setFocused] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        backgroundColor: "rgba(248,249,252,0.88)",
        backdropFilter: "saturate(180%) blur(20px)",
        WebkitBackdropFilter: "saturate(180%) blur(20px)",
        borderBottom: "1px solid rgba(51,112,255,0.08)",
      }}
    >
      <div
        style={{
          maxWidth: 960,
          margin: "0 auto",
          padding: "0 24px",
          height: 56,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
          <div
            style={{
              width: 24,
              height: 24,
              borderRadius: 6,
              background: "#3370FF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <rect x="1" y="1" width="5" height="5" rx="1.5" fill="white" />
              <rect x="8" y="1" width="5" height="5" rx="1.5" fill="white" fillOpacity="0.6" />
              <rect x="1" y="8" width="5" height="5" rx="1.5" fill="white" fillOpacity="0.6" />
              <rect x="8" y="8" width="5" height="5" rx="1.5" fill="white" />
            </svg>
          </div>
          <span
            style={{
              fontSize: 15,
              fontWeight: 600,
              color: "#1F2329",
              letterSpacing: "-0.01em",
            }}
          >
            工具集
          </span>
        </div>

        {/* Search */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            flex: 1,
            maxWidth: 260,
            height: 32,
            borderRadius: 8,
            border: focused ? "1px solid rgba(51,112,255,0.5)" : "1px solid rgba(0,0,0,0.08)",
            backgroundColor: focused ? "#fff" : "rgba(0,0,0,0.03)",
            padding: "0 10px",
            transition: "border-color 0.15s, background-color 0.15s, box-shadow 0.15s",
            boxShadow: focused ? "0 0 0 3px rgba(51,112,255,0.08)" : "none",
          }}
        >
          <Search size={13} strokeWidth={1.8} color="#9A9A9A" style={{ flexShrink: 0 }} />
          <input
            type="text"
            placeholder="搜索工具..."
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            style={{
              flex: 1,
              border: "none",
              outline: "none",
              background: "transparent",
              fontSize: 13,
              color: "#1F2329",
              fontFamily: "inherit",
            }}
          />
          {searchQuery && (
            <button
              onClick={() => onSearch("")}
              style={{
                border: "none",
                background: "none",
                cursor: "pointer",
                padding: 0,
                color: "#B0B0B0",
                fontSize: 16,
                lineHeight: 1,
                flexShrink: 0,
              }}
            >
              ×
            </button>
          )}
        </div>

        {/* Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: 24, flexShrink: 0 }}>
          {[
            { label: "关于", href: "#" },
            { label: "GitHub", href: "https://github.com/lethe222" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              style={{
                fontSize: 13,
                color: "#646A73",
                textDecoration: "none",
                fontWeight: 400,
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "#1F2329")}
              onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "#646A73")}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

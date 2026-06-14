import { useState } from "react";
import { Search, Sparkles } from "lucide-react";

interface HeroSectionProps {
  onSearch: (query: string) => void;
}

export function HeroSection({ onSearch }: HeroSectionProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, #c7d9ff 0%, #e8d5ff 40%, transparent 70%)",
          }}
        />
        <div
          className="absolute -top-20 -right-24 w-[500px] h-[500px] rounded-full opacity-25"
          style={{
            background:
              "radial-gradient(circle, #b8f0e0 0%, #d4eaff 50%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-40 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(ellipse, #ddd6ff 0%, #c9e8ff 50%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
          style={{ background: "linear-gradient(135deg, #ede9fe, #dbeafe)", border: "1px solid rgba(139,92,246,0.15)" }}>
          <Sparkles size={13} style={{ color: "#7c3aed" }} />
          <span style={{ fontSize: "12px", color: "#6d28d9", fontWeight: 500, letterSpacing: "0.03em" }}>
            Design & Development Toolkit
          </span>
        </div>

        {/* Heading */}
        <h1
          className="mb-3"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.25rem)",
            fontWeight: 800,
            lineHeight: 1.15,
            background: "linear-gradient(135deg, #1e1b4b 0%, #4338ca 50%, #7c3aed 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          My Creative Toolbox
        </h1>
        <p style={{ fontSize: "1.05rem", color: "#64748b", maxWidth: 480, margin: "0 auto 2.5rem", lineHeight: 1.7 }}>
          A curated collection of tools for design, development, and media processing — built to streamline your workflow.
        </p>

        {/* Search */}
        <form onSubmit={handleSubmit} className="relative max-w-xl mx-auto">
          <div
            className="flex items-center rounded-2xl px-5 py-3 gap-3"
            style={{
              background: "rgba(255,255,255,0.85)",
              backdropFilter: "blur(16px)",
              boxShadow: "0 4px 32px rgba(99,102,241,0.12), 0 1px 4px rgba(0,0,0,0.05)",
              border: "1px solid rgba(139,92,246,0.15)",
            }}
          >
            <Search size={18} style={{ color: "#a78bfa", flexShrink: 0 }} />
            <input
              type="text"
              placeholder="Search tools..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                onSearch(e.target.value);
              }}
              className="flex-1 bg-transparent outline-none"
              style={{ fontSize: "0.95rem", color: "#1e1b4b" }}
            />
            {query && (
              <button
                type="button"
                onClick={() => { setQuery(""); onSearch(""); }}
                style={{ fontSize: "11px", color: "#94a3b8", cursor: "pointer", padding: "2px 8px", borderRadius: 8, background: "#f1f5f9" }}
              >
                Clear
              </button>
            )}
          </div>
        </form>

        {/* Stats */}
        <div className="flex items-center justify-center gap-8 mt-10">
          {[
            { value: "6", label: "Tools" },
            { value: "4", label: "Active" },
            { value: "2", label: "Coming Soon" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "#4f46e5", lineHeight: 1 }}>{stat.value}</div>
              <div style={{ fontSize: "0.75rem", color: "#94a3b8", marginTop: 4, fontWeight: 500 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

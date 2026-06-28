import { useState } from "react";
import { ArrowUpRight, Download, Clock, WifiOff } from "lucide-react";
import { ToolIcon } from "./ToolIcon";

export type ToolStatus = "active" | "coming-soon" | "download" | "unavailable" | "placeholder";

export interface Tool {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  tags: string[];
  status: ToolStatus;
  url?: string;
  downloadFile?: string;
  category: string;
}

interface ToolCardProps {
  tool: Tool;
}

export function ToolCard({ tool }: ToolCardProps) {
  const [hovered, setHovered] = useState(false);
  const isInteractive = tool.status === "active" || tool.status === "download";
  const isPlaceholder = tool.status === "placeholder";

  const handleClick = () => {
    if (!isInteractive) return;
    if (tool.status === "download" && tool.downloadFile) {
      const a = document.createElement("a");
      a.href = tool.downloadFile;
      a.download = "";
      a.click();
    } else if (tool.url) {
      window.open(tool.url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: isPlaceholder ? "#F8F9FC" : "#FFFFFF",
        borderRadius: 12,
        overflow: "hidden",
        border: `1px solid ${isPlaceholder ? "rgba(0,0,0,0.04)" : "rgba(0,0,0,0.06)"}`,
        cursor: isInteractive ? "pointer" : "default",
        boxShadow: hovered && isInteractive
          ? "0 4px 20px rgba(51,112,255,0.1), 0 1px 4px rgba(0,0,0,0.06)"
          : "0 1px 4px rgba(0,0,0,0.05)",
        transform: hovered && isInteractive ? "translateY(-2px)" : "translateY(0)",
        transition: "box-shadow 0.22s ease, transform 0.22s ease, border-color 0.22s ease",
        borderColor: hovered && isInteractive ? "rgba(51,112,255,0.2)" : (isPlaceholder ? "rgba(0,0,0,0.04)" : "rgba(0,0,0,0.06)"),
        display: "flex",
        flexDirection: "column",
        opacity: (tool.status === "coming-soon" || tool.status === "unavailable") ? 0.75 : (isPlaceholder ? 0.9 : 1),
      }}
    >
      {/* Icon preview area */}
      <div
        style={{
          width: "100%",
          aspectRatio: "280/148",
          overflow: "hidden",
          position: "relative",
          flexShrink: 0,
        }}
      >
        <ToolIcon toolId={tool.id} />
        {/* Coming soon / unavailable / placeholder overlay */}
        {(tool.status === "coming-soon" || tool.status === "unavailable" || isPlaceholder) && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: isPlaceholder ? "rgba(248,249,252,0.85)" : "rgba(248,249,252,0.6)",
              backdropFilter: "blur(2px)",
              WebkitBackdropFilter: "blur(2px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "6px 14px",
                borderRadius: 100,
                backgroundColor: "white",
                border: "1px solid rgba(0,0,0,0.1)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              }}
            >
              {tool.status === "unavailable" ? (
                <>
                  <WifiOff size={11} color="#8F959E" strokeWidth={2} />
                  <span style={{ fontSize: 12, color: "#646A73", fontWeight: 500 }}>链接维护中</span>
                </>
              ) : isPlaceholder ? (
                <>
                  <Clock size={11} color="#8F959E" strokeWidth={2} />
                  <span style={{ fontSize: 12, color: "#646A73", fontWeight: 500 }}>持续更新中</span>
                </>
              ) : (
                <>
                  <Clock size={11} color="#8F959E" strokeWidth={2} />
                  <span style={{ fontSize: 12, color: "#646A73", fontWeight: 500 }}>即将推出</span>
                </>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Text content */}
      <div
        style={{
          padding: "16px 20px 18px",
          display: "flex",
          flexDirection: "column",
          gap: 8,
          flex: 1,
        }}
      >
        {/* Title row */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 8 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <h3
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: "#1F2329",
                margin: 0,
                letterSpacing: "-0.01em",
                lineHeight: 1.3,
              }}
            >
              {tool.name}
            </h3>
            <span style={{ fontSize: 11, color: "#B0B7C3", fontWeight: 400 }}>{tool.nameEn}</span>
          </div>

          {/* Action indicator */}
          {isInteractive && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 4,
                padding: "4px 10px",
                borderRadius: 100,
                backgroundColor: hovered ? "#EEF3FF" : "transparent",
                border: `1px solid ${hovered ? "#3370FF" : "rgba(0,0,0,0.08)"}`,
                transition: "all 0.2s ease",
                flexShrink: 0,
              }}
            >
              {tool.status === "download" ? (
                <>
                  <Download size={11} color={hovered ? "#3370FF" : "#AEAEB2"} strokeWidth={2} />
                  <span style={{ fontSize: 11, color: hovered ? "#3370FF" : "#AEAEB2", fontWeight: 500, whiteSpace: "nowrap" }}>下载</span>
                </>
              ) : (
                <>
                  <span style={{ fontSize: 11, color: hovered ? "#3370FF" : "#AEAEB2", fontWeight: 500, whiteSpace: "nowrap" }}>打开</span>
                  <ArrowUpRight
                    size={11}
                    color={hovered ? "#3370FF" : "#AEAEB2"}
                    strokeWidth={2}
                    style={{
                      transform: hovered ? "translate(1px,-1px)" : "none",
                      transition: "transform 0.2s",
                    }}
                  />
                </>
              )}
            </div>
          )}
        </div>

        {/* Description */}
        <p
          style={{
            fontSize: 12,
            color: "#646A73",
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          {tool.description}
        </p>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 2 }}>
          {tool.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: 11,
                color: "#B0B7C3",
                fontWeight: 400,
              }}
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

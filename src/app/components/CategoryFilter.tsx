export type Category = "全部" | "图片处理" | "动效工具" | "字体工具" | "脚本自动化" | "即将推出";

export const CATEGORIES: Category[] = [
  "全部",
  "图片处理",
  "动效工具",
  "字体工具",
  "脚本自动化",
  "即将推出",
];

interface CategoryFilterProps {
  active: Category;
  onChange: (c: Category) => void;
  counts: Record<string, number>;
}

export function CategoryFilter({ active, onChange, counts }: CategoryFilterProps) {
  return (
    <div
      style={{
        maxWidth: 960,
        margin: "0 auto",
        padding: "0 24px",
        marginBottom: 32,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 4,
          overflowX: "auto",
          scrollbarWidth: "none",
        }}
      >
        {CATEGORIES.map((cat) => {
          const isActive = active === cat;
          return (
            <button
              key={cat}
              onClick={() => onChange(cat)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 5,
                padding: "6px 14px",
                borderRadius: 100,
                border: isActive ? "1px solid rgba(51,112,255,0.3)" : "1px solid transparent",
                background: isActive ? "#EEF3FF" : "transparent",
                cursor: "pointer",
                fontSize: 13,
                fontWeight: isActive ? 600 : 400,
                color: isActive ? "#3370FF" : "#8F959E",
                whiteSpace: "nowrap",
                transition: "all 0.15s ease",
                fontFamily: "inherit",
              }}
            >
              {cat}
              {counts[cat] !== undefined && counts[cat] > 0 && (
                <span
                  style={{
                    fontSize: 11,
                    color: isActive ? "#3370FF" : "#C0C7D0",
                    fontWeight: 500,
                    opacity: isActive ? 0.8 : 1,
                  }}
                >
                  {counts[cat]}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

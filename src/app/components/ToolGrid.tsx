import { ToolCard, type Tool } from "./ToolCard";
import type { Category } from "./CategoryFilter";

interface ToolGridProps {
  tools: Tool[];
  searchQuery: string;
  activeCategory: Category;
}

export function ToolGrid({ tools, searchQuery, activeCategory }: ToolGridProps) {
  const filtered = tools.filter((t) => {
    const matchCat =
      activeCategory === "全部" ||
      (activeCategory === "即将推出" ? t.status === "coming-soon" : t.category === activeCategory);

    const q = searchQuery.trim().toLowerCase();
    const matchSearch =
      !q ||
      t.name.toLowerCase().includes(q) ||
      t.nameEn.toLowerCase().includes(q) ||
      t.description.toLowerCase().includes(q) ||
      t.tags.some((tag) => tag.toLowerCase().includes(q));

    // placeholder 卡片只在 "全部" 分类且无搜索词时显示
    if (t.status === "placeholder") {
      return activeCategory === "全部" && !q;
    }

    return matchCat && matchSearch;
  });

  return (
    <section
      style={{
        maxWidth: 960,
        margin: "0 auto",
        padding: "0 24px 80px",
      }}
    >
      {filtered.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            padding: "80px 0",
            color: "#C0C0C0",
            fontSize: 14,
          }}
        >
          没有找到相关工具
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: 16,
          }}
        >
          {filtered.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      )}
    </section>
  );
}

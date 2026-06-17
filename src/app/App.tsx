import { useState, useMemo } from "react";
import { AppHeader } from "./components/AppHeader";
import { HeroText } from "./components/HeroText";
import {
  CategoryFilter,
  CATEGORIES,
  type Category,
} from "./components/CategoryFilter";
import { ToolGrid } from "./components/ToolGrid";
import { AppFooter } from "./components/AppFooter";
import type { Tool } from "./components/ToolCard";
import organizerScriptUrl from "../imports/files/项目整理1.5.jsxbin?url";

const TOOLS: Tool[] = [
  {
    id: "webp-compress",
    name: "WebP 图片压缩",
    nameEn: "WebP Compression",
    description:
      "将 PNG / JPG 图片转换并压缩为 WebP 格式，可自由调节质量参数，大幅减小图片体积。",
    tags: ["图片", "压缩", "WebP"],
    status: "active",
    url: "http://101.200.38.189:18793/",
    category: "图片处理",
  },
  {
    id: "lottie-player",
    name: "Lottie 预览 & 图片替换",
    nameEn: "Lottie Preview & Replace",
    description:
      "实时预览 Lottie JSON 动画，并在线替换动画内嵌的 Base64 图片资源，无需手动编辑 JSON。",
    tags: ["Lottie", "动效", "JSON"],
    status: "active",
    url: "https://lethe222.github.io/lottie-preview-huanfu/",
    category: "动效工具",
  },
  {
    id: "asspp-web",
    name: "Asspp Web",
    nameEn: "Asspp Web",
    description:
      "一键检索与提取 Apple 应用历史版本。支持国内外 Apple ID 登录，直观获取 App Store 历史版本包，让旧版 App 触手可及。",
    tags: ["App Store", "历史版本", "Apple ID"],
    status: "active",
    url: "https://101.200.38.189.nip.io/",
    category: "苹果工具",
  },
  {
    id: "ae-script",
    name: "AE 项目整理脚本",
    nameEn: "AE Project Organizer",
    description:
      "一键自动整理 After Effects 项目面板内的合成、素材和文件夹，告别混乱的项目结构。",
    tags: ["AE", "脚本", "自动化"],
    status: "download",
    downloadFile: organizerScriptUrl,
    category: "脚本自动化",
  },
  {
    id: "eagle-lottie",
    name: "Eagle——Lottie 预览 (Vue 3)",
    nameEn: "Eagle Lottie Plugin (Vue 3)",
    description:
      "在 Eagle 内随心预览 Lottie 动画，支持外部图片资源的 Lottie 文件和 ZIP 包，Vue 3 重写版。",
    tags: ["Eagle", "Lottie", "插件", "Vue 3"],
    status: "active",
    url: "https://community-cn.eagle.cool/plugin/b27b746f-9ff6-4c59-b4a3-a689d43a9cd1",
    category: "动效工具",
  },
  {
    id: "font-trim",
    name: "字体裁剪",
    nameEn: "Font Subsetting",
    description:
      "输入目标字符集，从完整字体文件中提取所需字形，生成极小体积的子集字体文件。",
    tags: ["字体", "子集化", "Web字体"],
    status: "active",
    url: "https://lethe222.github.io/Font-editor-website/",
    category: "字体工具",
  },
  {
    id: "font-base64",
    name: "字体转 Base64",
    nameEn: "Font to Base64",
    description:
      "上传 TTF / OTF / WOFF 字体文件，即刻生成 Base64 编码字符串，方便内联嵌入 CSS。",
    tags: ["字体", "Base64", "CSS内联"],
    status: "coming-soon",
    category: "字体工具",
  },
];

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category>("全部");

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    CATEGORIES.forEach((cat) => {
      if (cat === "全部") counts[cat] = TOOLS.length;
      else if (cat === "即将推出")
        counts[cat] = TOOLS.filter((t) => t.status === "coming-soon").length;
      else counts[cat] = TOOLS.filter((t) => t.category === cat).length;
    });
    return counts;
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#F7F8FC",
        fontFamily:
          '"Inter", -apple-system, BlinkMacSystemFont, "PingFang SC", "Helvetica Neue", sans-serif',
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <AppHeader searchQuery={searchQuery} onSearch={setSearchQuery} />
      <main style={{ flex: 1 }}>
        <HeroText />
        <CategoryFilter
          active={activeCategory}
          onChange={setActiveCategory}
          counts={categoryCounts}
        />
        <ToolGrid
          tools={TOOLS}
          searchQuery={searchQuery}
          activeCategory={activeCategory}
        />
      </main>
      <AppFooter />
    </div>
  );
}

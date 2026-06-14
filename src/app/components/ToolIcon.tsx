// Custom SVG mini-UI preview for each tool card
import { ImageWithFallback } from "./figma/ImageWithFallback";
import eagleLottieImg from "../../imports/f2a3cd754bbc19a6962bb05f4f06cf39-1.jpg";

function EagleLottieIcon() {
  return (
    <ImageWithFallback
      src={eagleLottieImg}
      alt="Eagle Lottie 预览插件"
      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
    />
  );
}

function WebPIcon() {
  return (
    <svg viewBox="0 0 280 148" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
      <rect width="280" height="148" fill="#EEF3FF" />
      {/* Original image panel */}
      <rect x="24" y="22" width="96" height="72" rx="8" fill="white" />
      <rect x="24" y="22" width="96" height="72" rx="8" stroke="#D8E3FF" strokeWidth="1" />
      {/* Image placeholder mountains */}
      <rect x="32" y="30" width="80" height="56" rx="5" fill="#F0F4FF" />
      <path d="M44 74 L60 52 L76 74Z" fill="#C5D5FF" />
      <path d="M60 74 L76 58 L96 74Z" fill="#A8BFFF" />
      <circle cx="80" cy="44" r="6" fill="#FFD166" />
      {/* File size label */}
      <rect x="30" y="88" width="52" height="14" rx="4" fill="#EEF3FF" />
      <rect x="30" y="88" width="52" height="14" rx="4" stroke="#D0DCFF" strokeWidth="0.5" />
      <text x="56" y="98.5" fontSize="7.5" fill="#3370FF" textAnchor="middle" fontWeight="500" fontFamily="system-ui">2.4 MB</text>

      {/* Arrow */}
      <circle cx="140" cy="58" r="14" fill="#3370FF" fillOpacity="0.1" />
      <path d="M133 58H147" stroke="#3370FF" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M143 54L147 58L143 62" stroke="#3370FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

      {/* Compressed image panel */}
      <rect x="160" y="30" width="72" height="56" rx="8" fill="white" />
      <rect x="160" y="30" width="72" height="56" rx="8" stroke="#D8E3FF" strokeWidth="1" />
      <rect x="167" y="37" width="58" height="42" rx="4" fill="#F0F4FF" />
      <path d="M176 66 L187 51 L198 66Z" fill="#C5D5FF" />
      <path d="M187 66 L197 56 L213 66Z" fill="#A8BFFF" />
      <circle cx="200" cy="44" r="5" fill="#FFD166" />
      {/* Compressed size badge */}
      <rect x="165" y="80" width="62" height="14" rx="4" fill="#3370FF" />
      <text x="196" y="90.5" fontSize="7.5" fill="white" textAnchor="middle" fontWeight="600" fontFamily="system-ui">↓ 78%  0.5 MB</text>

      {/* Bottom label */}
      <text x="24" y="116" fontSize="9" fill="#8F9BB3" fontFamily="system-ui">支持 PNG · JPG · GIF → WebP</text>
    </svg>
  );
}

function LottieIcon() {
  return (
    <svg viewBox="0 0 280 148" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
      <rect width="280" height="148" fill="#F3F0FF" />
      {/* Player canvas */}
      <rect x="24" y="16" width="164" height="100" rx="10" fill="#1F1535" />
      {/* Animation paths */}
      <circle cx="106" cy="66" r="28" stroke="#7B61FF" strokeWidth="1.5" strokeDasharray="4 3" />
      <circle cx="106" cy="66" r="16" fill="#7B61FF" fillOpacity="0.15" />
      {/* Animated dot */}
      <circle cx="134" cy="66" r="5" fill="#7B61FF" />
      <circle cx="106" cy="38" r="4" fill="#C4B5FD" />
      {/* Motion trail */}
      <path d="M134 66 Q130 50 118 44 Q110 40 106 38" stroke="#7B61FF" strokeWidth="1" strokeOpacity="0.5" strokeLinecap="round" />
      {/* Play controls */}
      <rect x="24" y="120" width="164" height="20" rx="5" fill="white" fillOpacity="0.05" />
      <path d="M33 130 L40 126 L40 134Z" fill="#C4B5FD" />
      {/* Timeline */}
      <rect x="46" y="128" width="100" height="4" rx="2" fill="white" fillOpacity="0.1" />
      <rect x="46" y="128" width="38" height="4" rx="2" fill="#7B61FF" />
      <circle cx="84" cy="130" r="4" fill="white" />
      {/* Frame counter */}
      <text x="155" y="132" fontSize="7" fill="#C4B5FD" fontFamily="system-ui">24f</text>

      {/* Right panel - JSON info */}
      <rect x="196" y="16" width="60" height="100" rx="8" fill="white" />
      <rect x="196" y="16" width="60" height="100" rx="8" stroke="#E8E0FF" strokeWidth="1" />
      <text x="204" y="32" fontSize="7" fill="#8F959E" fontFamily="system-ui">图层</text>
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect x="204" y={40 + i * 16} width="8" height="8" rx="2" fill={["#7B61FF","#C4B5FD","#A78BFA","#7B61FF"][i]} fillOpacity="0.7" />
          <rect x="216" y={42 + i * 16} width={[28,20,24,16][i]} height="4" rx="2" fill="#E8E0FF" />
        </g>
      ))}
      {/* Replace button */}
      <rect x="200" y="100" width="48" height="12" rx="4" fill="#7B61FF" />
      <text x="224" y="109" fontSize="6.5" fill="white" textAnchor="middle" fontWeight="600" fontFamily="system-ui">替换图片</text>
    </svg>
  );
}

function AssppIcon() {
  return (
    <svg viewBox="0 0 280 148" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
      <rect width="280" height="148" fill="#EDFBF7" />
      {/* Main panel */}
      <rect x="24" y="16" width="232" height="112" rx="10" fill="white" />
      <rect x="24" y="16" width="232" height="112" rx="10" stroke="#D0F0E6" strokeWidth="1" />
      {/* Toolbar */}
      <rect x="24" y="16" width="232" height="30" rx="10" fill="#F6FDF9" />
      <rect x="24" y="36" width="232" height="10" fill="#F6FDF9" />
      <text x="36" y="35" fontSize="9" fill="#1F2329" fontWeight="600" fontFamily="system-ui">资源处理工具</text>
      {/* Upload area */}
      <rect x="36" y="52" width="96" height="64" rx="6" fill="#F0FBF7" strokeDasharray="3 2" stroke="#34C48B" strokeWidth="1" />
      <circle cx="84" cy="72" r="10" fill="#34C48B" fillOpacity="0.15" />
      <path d="M84 67 L84 77M79 72 L89 72" stroke="#34C48B" strokeWidth="1.5" strokeLinecap="round" />
      <text x="84" y="92" fontSize="7" fill="#34C48B" textAnchor="middle" fontFamily="system-ui">拖拽上传</text>
      <text x="84" y="104" fontSize="6.5" fill="#8F959E" textAnchor="middle" fontFamily="system-ui">PNG · SVG · JPG</text>
      {/* File list */}
      {[
        { name: "logo.png", size: "24KB", color: "#4A8CFF" },
        { name: "banner.jpg", size: "186KB", color: "#FF8C42" },
        { name: "icon.svg", size: "8KB", color: "#34C48B" },
      ].map((f, i) => (
        <g key={i}>
          <rect x="144" y={52 + i * 22} width="100" height="18" rx="5" fill="#F8FBFF" />
          <rect x="148" y={56 + i * 22} width="10" height="10" rx="2" fill={f.color} fillOpacity="0.2" />
          <rect x="150" y={58.5 + i * 22} width="6" height="5" rx="1" fill={f.color} />
          <text x="164" y={64 + i * 22} fontSize="7" fill="#1F2329" fontFamily="system-ui">{f.name}</text>
          <text x="236" y={64 + i * 22} fontSize="6.5" fill="#8F959E" textAnchor="end" fontFamily="system-ui">{f.size}</text>
        </g>
      ))}
    </svg>
  );
}

function AEScriptIcon() {
  return (
    <svg viewBox="0 0 280 148" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
      <rect width="280" height="148" fill="#FFF8F0" />
      {/* Before panel */}
      <rect x="16" y="16" width="108" height="116" rx="10" fill="white" />
      <rect x="16" y="16" width="108" height="116" rx="10" stroke="#FFE4C8" strokeWidth="1" />
      <text x="26" y="32" fontSize="7.5" fill="#8F959E" fontFamily="system-ui">整理前</text>
      {/* Messy file list */}
      {["Comp 1","footage_v2","FINAL_v3","temp copy","old backup","render out","Comp final"].map((name, i) => (
        <g key={i}>
          <rect x="24" y={38 + i * 13} width="8" height="8" rx="1.5"
            fill={["#FFB347","#A8BFFF","#FFB347","#D1D5DB","#D1D5DB","#FFB347","#A8BFFF"][i]}
            fillOpacity="0.6"
          />
          <rect x="36" y={40 + i * 13} width={[44,36,50,30,40,38,46][i]} height="4" rx="2" fill="#F0F0F0" />
        </g>
      ))}

      {/* Arrow */}
      <path d="M132 74 L148 74" stroke="#FF8C42" strokeWidth="2" strokeLinecap="round" />
      <path d="M144 70 L148 74 L144 78" stroke="#FF8C42" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

      {/* After panel */}
      <rect x="156" y="16" width="108" height="116" rx="10" fill="white" />
      <rect x="156" y="16" width="108" height="116" rx="10" stroke="#FFE4C8" strokeWidth="1" />
      <text x="166" y="32" fontSize="7.5" fill="#8F959E" fontFamily="system-ui">整理后</text>
      {/* Organized folders */}
      {[
        { label: "📁 Comps", color: "#FFB347", files: ["Main", "UI", "BG"] },
        { label: "📁 Footage", color: "#4A8CFF", files: ["Video", "Img"] },
        { label: "📁 Renders", color: "#34C48B", files: ["Output"] },
      ].map((folder, fi) => (
        <g key={fi}>
          <rect x="164" y={38 + fi * 32} width="92" height="11" rx="3" fill={folder.color} fillOpacity="0.12" />
          <text x="170" y={46.5 + fi * 32} fontSize="7.5" fill="#1F2329" fontFamily="system-ui" fontWeight="500">{folder.label}</text>
          {folder.files.map((f, i) => (
            <g key={i}>
              <text x="178" y={57 + fi * 32 + i * 0} fontSize="6.5" fill="#8F959E" fontFamily="system-ui">— {f}</text>
            </g>
          ))}
        </g>
      ))}
      {/* Script badge */}
      <rect x="164" y="122" width="88" height="6" rx="3" fill="#FF8C42" fillOpacity="0.15" />
      <rect x="164" y="122" width="52" height="6" rx="3" fill="#FF8C42" fillOpacity="0.4" />
    </svg>
  );
}

function FontTrimIcon() {
  return (
    <svg viewBox="0 0 280 148" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
      <rect width="280" height="148" fill="#F0F2FF" />
      {/* Input panel */}
      <rect x="16" y="16" width="148" height="116" rx="10" fill="white" />
      <rect x="16" y="16" width="148" height="116" rx="10" stroke="#DDE1FF" strokeWidth="1" />
      <text x="26" y="32" fontSize="7.5" fill="#8F959E" fontFamily="system-ui">输入字符集</text>
      {/* Character grid */}
      {["字","体","裁","剪","工","具","设","计","开","发","前","端","排","版","印","刷"].map((char, i) => {
        const isSelected = [0,1,2,3,6,8,10].includes(i);
        const col = i % 6;
        const row = Math.floor(i / 6);
        return (
          <g key={i}>
            <rect
              x={24 + col * 21} y={38 + row * 24}
              width="17" height="17" rx="3"
              fill={isSelected ? "#5A6AE8" : "#F5F6FF"}
              stroke={isSelected ? "#5A6AE8" : "#E8EAFF"}
              strokeWidth="0.5"
            />
            <text
              x={32.5 + col * 21} y={50 + row * 24}
              fontSize="9" fill={isSelected ? "white" : "#8F959E"}
              textAnchor="middle" fontFamily="system-ui"
            >{char}</text>
          </g>
        );
      })}
      <text x="26" y="118" fontSize="7" fill="#5A6AE8" fontFamily="system-ui">已选 7 字符</text>

      {/* Output panel */}
      <rect x="172" y="16" width="92" height="116" rx="10" fill="white" />
      <rect x="172" y="16" width="92" height="116" rx="10" stroke="#DDE1FF" strokeWidth="1" />
      <text x="182" y="32" fontSize="7.5" fill="#8F959E" fontFamily="system-ui">裁剪结果</text>
      {/* File size comparison */}
      <text x="182" y="50" fontSize="7" fill="#1F2329" fontFamily="system-ui">原始字体</text>
      <rect x="182" y="54" width="72" height="6" rx="3" fill="#E8EAFF" />
      <text x="254" y="66" fontSize="6.5" fill="#8F959E" textAnchor="end" fontFamily="system-ui">12.4 MB</text>
      <text x="182" y="80" fontSize="7" fill="#1F2329" fontFamily="system-ui">裁剪后</text>
      <rect x="182" y="84" width="22" height="6" rx="3" fill="#5A6AE8" />
      <text x="254" y="96" fontSize="6.5" fill="#5A6AE8" textAnchor="end" fontFamily="system-ui">42 KB</text>
      <rect x="182" y="106" width="72" height="18" rx="5" fill="#5A6AE8" />
      <text x="218" y="118" fontSize="7.5" fill="white" textAnchor="middle" fontWeight="600" fontFamily="system-ui">下载字体</text>
    </svg>
  );
}

function FontBase64Icon() {
  return (
    <svg viewBox="0 0 280 148" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
      <rect width="280" height="148" fill="#EDFAF5" />
      {/* Upload area */}
      <rect x="16" y="16" width="248" height="44" rx="8" fill="white" />
      <rect x="16" y="16" width="248" height="44" rx="8" stroke="#C8F0E0" strokeWidth="1" />
      <circle cx="44" cy="38" r="12" fill="#34C48B" fillOpacity="0.1" />
      <path d="M44 33 L44 43M39 38 L49 38" stroke="#34C48B" strokeWidth="1.5" strokeLinecap="round" />
      <text x="62" y="35" fontSize="8.5" fill="#1F2329" fontFamily="system-ui" fontWeight="500">拖拽字体文件至此</text>
      <text x="62" y="48" fontSize="7" fill="#8F959E" fontFamily="system-ui">支持 .ttf · .otf · .woff · .woff2</text>
      <rect x="220" y="26" width="36" height="16" rx="4" fill="#34C48B" />
      <text x="238" y="37" fontSize="7" fill="white" textAnchor="middle" fontWeight="600" fontFamily="system-ui">上传</text>

      {/* Code output */}
      <rect x="16" y="68" width="248" height="64" rx="8" fill="#1F2329" />
      <text x="26" y="84" fontSize="6.5" fill="#8F959E" fontFamily="monospace">/* CSS 内联字体 */</text>
      <text x="26" y="96" fontSize="6.5" fill="#C4B5FD" fontFamily="monospace">@font-face {"{"}</text>
      <text x="34" y="107" fontSize="6.5" fill="#7DD3FC" fontFamily="monospace">  src: url('data:font/ttf;</text>
      <text x="34" y="118" fontSize="6.5" fill="#86EFAC" fontFamily="monospace">  base64,AAEAAAARAQAA...</text>
      <text x="26" y="129" fontSize="6.5" fill="#C4B5FD" fontFamily="monospace">{"}"}</text>
      {/* Copy button */}
      <rect x="224" y="74" width="32" height="14" rx="3" fill="white" fillOpacity="0.1" />
      <text x="240" y="84" fontSize="6" fill="#8F959E" textAnchor="middle" fontFamily="system-ui">复制</text>
    </svg>
  );
}

const iconMap: Record<string, () => JSX.Element> = {
  "webp-compress": WebPIcon,
  "lottie-player": LottieIcon,
  "asspp-web": AssppIcon,
  "ae-script": AEScriptIcon,
  "font-trim": FontTrimIcon,
  "font-base64": FontBase64Icon,
  "eagle-lottie": EagleLottieIcon,
};

interface ToolIconProps {
  toolId: string;
}

export function ToolIcon({ toolId }: ToolIconProps) {
  const Icon = iconMap[toolId];
  if (!Icon) return null;
  return <Icon />;
}

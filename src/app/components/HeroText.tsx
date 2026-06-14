export function HeroText() {
  return (
    <section
      style={{
        maxWidth: 960,
        margin: "0 auto",
        padding: "72px 24px 56px",
      }}
    >
      <p
        style={{
          fontSize: 12,
          fontWeight: 500,
          color: "#3370FF",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          marginBottom: 14,
        }}
      >
        Personal Toolkit · Lethe222
      </p>
      <h1
        style={{
          fontSize: "clamp(30px, 5vw, 48px)",
          fontWeight: 700,
          color: "#1F2329",
          lineHeight: 1.12,
          letterSpacing: "-0.025em",
          margin: "0 0 18px",
          maxWidth: 520,
        }}
      >
        打磨你的创作流。
      </h1>
      <p
        style={{
          fontSize: 15,
          color: "#646A73",
          lineHeight: 1.75,
          maxWidth: 420,
          fontWeight: 400,
          margin: 0,
        }}
      >
        从像素到代码。这是一个由懂设计、也懂研发的创作者为你构建的轻量工具箱。精选图像处理、字体工程与自动化脚本，克制、利落、即开即用。
      </p>
    </section>
  );
}

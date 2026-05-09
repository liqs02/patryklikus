import { motion } from "framer-motion";
import GridOverlay from "./GridOverlay";

const CODE_LINES: { indent: number; tokens: { text: string; tone?: "kw" | "type" | "str" | "fn" | "mut" | "cmt" }[] }[] = [
  { indent: 0, tokens: [{ text: "@GetMapping", tone: "type" }, { text: "(" }, { text: "\"/tiles/{z}/{x}/{y}\"", tone: "str" }, { text: ")" }] },
  { indent: 0, tokens: [{ text: "Mono", tone: "type" }, { text: "<", tone: "mut" }, { text: "TileBundle", tone: "type" }, { text: "> ", tone: "mut" }, { text: "tile", tone: "fn" }, { text: "(" }, { text: "int ", tone: "kw" }, { text: "z, " }, { text: "int ", tone: "kw" }, { text: "x, " }, { text: "int ", tone: "kw" }, { text: "y) {" }] },
  { indent: 1, tokens: [{ text: "return ", tone: "kw" }, { text: "cache." }, { text: "getOrLoad", tone: "fn" }, { text: "(" }, { text: "key", tone: "fn" }, { text: "(z, x, y), () ->" }] },
  { indent: 2, tokens: [{ text: "repo." }, { text: "findInBBox", tone: "fn" }, { text: "(" }, { text: "BBox", tone: "type" }, { text: "." }, { text: "of", tone: "fn" }, { text: "(z, x, y))" }] },
  { indent: 3, tokens: [{ text: "." }, { text: "collectList", tone: "fn" }, { text: "()" }] },
  { indent: 3, tokens: [{ text: "." }, { text: "map", tone: "fn" }, { text: "(" }, { text: "TileBundle::pack", tone: "type" }, { text: "));" }] },
  { indent: 0, tokens: [{ text: "}" }] },
  { indent: 0, tokens: [{ text: "// 2.1B tiles served · 99.97% cache hit", tone: "cmt" }] },
];

const TONE: Record<string, string> = {
  kw: "text-[var(--color-accent)]",
  type: "text-[#9bd9d2]",
  str: "text-[#d6a96b]",
  fn: "text-[#cfe9e6]",
  mut: "text-[var(--color-muted)]",
  cmt: "text-[var(--color-subtle)] italic",
};

export default function RightPanel() {
  return (
    <div
      className="relative hidden lg:block"
      style={{ perspective: "1600px" }}
    >
      <div
        className="absolute inset-0 opacity-60"
        style={{ transform: "rotateY(-14deg) rotateX(6deg)", transformOrigin: "center" }}
      >
        <GridOverlay />
      </div>

      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ transformStyle: "preserve-3d" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40, rotateY: -26, rotateX: 14 }}
          animate={{ opacity: 1, y: 0, rotateY: -16, rotateX: 6 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative w-[480px] rounded-xl border border-[var(--color-accent)]/30 bg-[#0d1117] shadow-[0_0_60px_-20px_rgba(45,212,191,0.25)]"
          style={{ transformStyle: "preserve-3d", transformOrigin: "center" }}
        >
          <div className="flex items-center gap-2 border-b border-[var(--color-accent)]/10 px-4 py-3">
            <span className="h-[10px] w-[10px] rounded-full bg-[#ff5f57]/70" />
            <span className="h-[10px] w-[10px] rounded-full bg-[#febc2e]/70" />
            <span className="h-[10px] w-[10px] rounded-full bg-[#28c840]/70" />
            <span className="ml-3 font-mono text-[11px] text-[var(--color-subtle)]">
              TileController.java
            </span>
          </div>
          <pre className="overflow-hidden px-5 py-4 font-mono text-[12.5px] leading-[1.7]">
            {CODE_LINES.map((line, i) => (
              <div key={i} className="flex gap-4">
                <span className="w-4 shrink-0 select-none text-right text-[var(--color-subtle)]/40">
                  {i + 1}
                </span>
                <span style={{ paddingLeft: `${line.indent * 16}px` }}>
                  {line.tokens.map((t, j) => (
                    <span key={j} className={t.tone ? TONE[t.tone] : "text-[var(--color-text)]"}>
                      {t.text}
                    </span>
                  ))}
                </span>
              </div>
            ))}
          </pre>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40, rotateY: -30 }}
          animate={{ opacity: 1, x: 0, rotateY: -14 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          className="absolute right-[8%] top-[14%] flex h-[64px] w-[64px] items-center justify-center rounded-xl border border-[var(--color-accent)]/40 bg-[var(--color-surface)] font-mono text-[11px] text-[var(--color-accent)] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.6)]"
          style={{ transform: "translateZ(60px) rotateY(-14deg)" }}
        >
          p99
          <br />
          80ms
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -40, rotateY: -10 }}
          animate={{ opacity: 1, x: 0, rotateY: -14 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
          className="absolute bottom-[14%] left-[10%] rounded-lg border border-[var(--color-accent)]/30 bg-[var(--color-surface)] px-3 py-2 font-mono text-[10px] text-[var(--color-muted)] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.6)]"
          style={{ transform: "translateZ(40px) rotateY(-14deg)" }}
        >
          <span className="text-[var(--color-accent)]">●</span> kafka · 60k msg/s
        </motion.div>
      </div>

    </div>
  );
}

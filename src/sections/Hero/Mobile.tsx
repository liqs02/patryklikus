import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { EASE } from "../../lib/motion";
import {
  DASHBOARD,
  GITHUB_HREF,
  GITHUB_LABEL,
  LINKEDIN_HREF,
  LINKEDIN_LABEL,
  NAME,
  ROLE,
  SKILLS_MOBILE,
  TAGLINE_PARTS,
} from "./data";

const NAME_CONTAINER = {
  hidden: {},
  show: { transition: { staggerChildren: 0.03, delayChildren: 0.05 } },
};
const NAME_CHAR = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: EASE },
  },
};

const SPARK_POINTS = 24;
const SPARK_W = 320;
const SPARK_H = 44;

function jitter(prev: number, range: [number, number], step: number) {
  const next = prev + (Math.random() - 0.5) * step;
  return Math.min(range[1], Math.max(range[0], next));
}

function buildSparkPath(values: number[]) {
  if (values.length === 0) return "";
  const min = Math.min(...values);
  const max = Math.max(...values);
  const span = max - min || 1;
  const step = SPARK_W / (values.length - 1);
  return values
    .map((v, i) => {
      const x = i * step;
      const y = SPARK_H - ((v - min) / span) * SPARK_H;
      return `${i === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`;
    })
    .join(" ");
}

export default function HeroMobile() {
  const reduced = useReducedMotion();
  const [p99, setP99] = useState(DASHBOARD.initialP99);
  const [rps, setRps] = useState(DASHBOARD.initialRps);
  const [spark, setSpark] = useState<number[]>(() =>
    Array.from({ length: SPARK_POINTS }, (_, i) =>
      26 + Math.sin(i / 2) * 2 + Math.random() * 2,
    ),
  );
  const sparkRef = useRef(spark);
  sparkRef.current = spark;

  useEffect(() => {
    if (reduced) return;
    const a = setInterval(() => {
      setP99((v) => Math.round(jitter(v, [24, 34], 1.5)));
      const last = sparkRef.current[sparkRef.current.length - 1] ?? 28;
      setSpark((s) => [...s.slice(1), jitter(last, [22, 36], 3)]);
    }, 2400);
    const b = setInterval(() => {
      setRps((v) => +jitter(v, [59.4, 61.2], 0.6).toFixed(1));
    }, 1900);
    return () => {
      clearInterval(a);
      clearInterval(b);
    };
  }, [reduced]);

  const sparkPath = buildSparkPath(spark);

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden px-6 pt-20 pb-16 sm:px-10 lg:hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 80% 20%, rgba(245,158,11,0.08), transparent 50%), radial-gradient(circle at 10% 70%, rgba(16,185,129,0.10), transparent 55%), radial-gradient(circle at 60% 95%, rgba(167,139,250,0.07), transparent 50%)",
        }}
      />

      <CornerTicks />

      <motion.h1
        variants={NAME_CONTAINER}
        initial="hidden"
        animate="show"
        aria-label={NAME}
        className="relative text-[44px] font-bold leading-[1.05] tracking-tight text-[var(--color-text)] sm:text-[56px]"
      >
        {NAME.split(" ").map((word, wi, words) => (
          <span
            key={wi}
            style={{ display: "inline-block", whiteSpace: "nowrap" }}
          >
            {word.split("").map((c, ci) => (
              <motion.span
                key={ci}
                variants={NAME_CHAR}
                aria-hidden
                style={{ display: "inline-block" }}
              >
                {c}
              </motion.span>
            ))}
            {wi < words.length - 1 && " "}
          </span>
        ))}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="relative mt-5 text-[22px] font-medium text-[var(--color-accent)]"
      >
        {ROLE}
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.78 }}
        className="relative mt-4 max-w-[28rem] text-[15px] leading-[1.6] text-[var(--color-muted)]"
      >
        {TAGLINE_PARTS.map((part, i) =>
          part.emphasis ? (
            <span key={i} className="font-semibold text-[var(--color-ink)]">
              {part.text}
            </span>
          ) : (
            part.text
          ),
        )}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.92 }}
        className="relative mt-12"
      >
        <div className="flex items-center gap-2.5">
          <span aria-hidden className="h-px w-5 bg-[var(--color-accent)]/40" />
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)]">
            Roles
          </p>
        </div>
        <p className="mt-3 flex items-center gap-2.5 text-[17px] font-semibold tracking-tight text-[var(--color-text)]">
          <span className="relative flex h-2 w-2" aria-hidden>
            <span className="absolute inset-0 animate-ping rounded-full bg-[var(--color-accent)]/55" />
            <span className="relative h-2 w-2 rounded-full bg-[var(--color-accent)]" />
          </span>
          TomTom
          <span className="text-[#475569]">·</span>
          <span className="text-[#cbd5e1]/85">Motorola Solutions</span>
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.15 }}
        className="relative mt-10"
      >
        <div className="flex items-center gap-2.5">
          <span aria-hidden className="h-px w-5 bg-[#94a3b8]/30" />
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#64748b]">
            Stack
          </p>
        </div>
        <p className="mt-3 font-mono text-[12.5px] leading-[1.9] tracking-wide text-[#cbd5e1]/85">
          {SKILLS_MOBILE.map((s, i) => (
            <span key={s}>
              {i > 0 && <span className="text-[var(--color-amber)]/70">{"  ·  "}</span>}
              {s}
            </span>
          ))}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.25, ease: EASE }}
        className="relative mt-12 overflow-hidden rounded-xl border border-[var(--color-border)] bg-[#0d1117]/95 backdrop-blur shadow-[0_20px_50px_-25px_rgba(0,0,0,0.7)] sm:max-w-md"
      >
        <header className="flex items-center justify-between border-b border-[var(--color-border)] px-4 py-2.5">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent)] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-accent)]" />
            </span>
            <span className="font-mono text-[12px] text-[var(--color-text)]">
              {DASHBOARD.service}
            </span>
            <span className="rounded border border-[var(--color-accent)]/30 px-1.5 py-px font-mono text-[9px] uppercase tracking-wider text-[var(--color-accent)]">
              {DASHBOARD.env}
            </span>
          </div>
          <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--color-subtle)]">
            {DASHBOARD.status}
          </span>
        </header>

        <div className="grid grid-cols-3 divide-x divide-[var(--color-border)]">
          <Metric label="p99" value={`${p99}`} unit="ms" accent="var(--color-accent)" />
          <Metric label="rps" value={`${rps.toFixed(1)}k`} unit="req/s" accent="var(--color-amber)" />
          <Metric label="cache" value={DASHBOARD.cacheHit.toFixed(2)} unit="%" accent="var(--color-violet)" />
        </div>

        <div className="border-t border-[var(--color-border)] px-4 py-3">
          <div className="flex items-baseline justify-between">
            <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--color-subtle)]">
              p99 · last 60s
            </span>
            <span className="font-mono text-[9px] text-[var(--color-subtle)]">
              ms
            </span>
          </div>
          <svg
            viewBox={`0 0 ${SPARK_W} ${SPARK_H}`}
            preserveAspectRatio="none"
            className="mt-1.5 h-[44px] w-full overflow-visible"
          >
            <defs>
              <linearGradient id="mSparkFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.25" />
                <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d={`${sparkPath} L ${SPARK_W},${SPARK_H} L 0,${SPARK_H} Z`}
              fill="url(#mSparkFill)"
              style={{ transition: "d 1.4s ease" }}
            />
            <path
              d={sparkPath}
              fill="none"
              stroke="var(--color-accent)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ transition: "d 1.4s ease" }}
            />
          </svg>
        </div>

        <footer className="flex items-center justify-between border-t border-[var(--color-border)] px-4 py-2">
          <span className="font-mono text-[9px] text-[var(--color-subtle)]">
            {DASHBOARD.footerLeft}
          </span>
          <span className="font-mono text-[9px] text-[var(--color-subtle)]">
            {DASHBOARD.footerRight}
          </span>
        </footer>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.45 }}
        className="relative mt-auto flex items-center justify-center gap-3 pt-10 text-[11.5px] text-[#475569]"
      >
        <a
          href={GITHUB_HREF}
          target="_blank"
          rel="noreferrer"
          className="transition-colors active:text-[var(--color-accent)]"
        >
          {GITHUB_LABEL}
        </a>
        <span className="text-[var(--color-subtle)]/40">·</span>
        <a
          href={LINKEDIN_HREF}
          target="_blank"
          rel="noreferrer"
          className="transition-colors active:text-[var(--color-accent)]"
        >
          {LINKEDIN_LABEL}
        </a>
      </motion.div>
    </div>
  );
}

function Metric({
  label,
  value,
  unit,
  accent,
}: {
  label: string;
  value: string;
  unit: string;
  accent: string;
}) {
  return (
    <div className="flex flex-col items-center px-2 py-2.5">
      <div className="flex items-baseline gap-1">
        <span className="font-mono text-[16px] font-semibold tabular-nums text-[var(--color-text)]">
          {value}
        </span>
        <span className="font-mono text-[9px] text-[var(--color-muted)]">
          {unit}
        </span>
      </div>
      <div
        className="mt-1 flex items-center gap-1 font-mono text-[8.5px] uppercase tracking-[0.18em]"
        style={{ color: accent }}
      >
        <span
          className="h-[3px] w-[3px] rounded-full"
          style={{ backgroundColor: accent }}
        />
        {label}
      </div>
    </div>
  );
}

function CornerTicks() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <span className="absolute left-3 top-3 h-3 w-3">
        <span className="absolute inset-y-0 left-0 w-px bg-[var(--color-accent)]/55" />
        <span className="absolute inset-x-0 top-0 h-px bg-[var(--color-accent)]/55" />
      </span>
      <span className="absolute right-3 top-3 h-3 w-3">
        <span className="absolute inset-y-0 right-0 w-px bg-[var(--color-accent)]/55" />
        <span className="absolute inset-x-0 top-0 h-px bg-[var(--color-accent)]/55" />
      </span>
      <span className="absolute bottom-3 left-3 h-3 w-3">
        <span className="absolute inset-y-0 left-0 w-px bg-[var(--color-accent)]/55" />
        <span className="absolute inset-x-0 bottom-0 h-px bg-[var(--color-accent)]/55" />
      </span>
      <span className="absolute bottom-3 right-3 h-3 w-3">
        <span className="absolute inset-y-0 right-0 w-px bg-[var(--color-accent)]/55" />
        <span className="absolute inset-x-0 bottom-0 h-px bg-[var(--color-accent)]/55" />
      </span>
    </div>
  );
}

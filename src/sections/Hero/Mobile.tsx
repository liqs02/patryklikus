import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const NAME = "Patryk Likus";

const NAME_CONTAINER = {
  hidden: {},
  show: { transition: { staggerChildren: 0.03, delayChildren: 0.05 } },
};
const NAME_CHAR = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const SKILLS = [
  "Java",
  "Spring Boot",
  "Kubernetes",
  "Azure",
  "PostgreSQL",
  "Kafka",
  "Redis",
];

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
  const [p99, setP99] = useState(28);
  const [rps, setRps] = useState(60.4);
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
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden px-6 pt-14 pb-12 sm:px-10 lg:hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 80% 20%, rgba(245,158,11,0.08), transparent 50%), radial-gradient(circle at 10% 70%, rgba(16,185,129,0.10), transparent 55%), radial-gradient(circle at 60% 95%, rgba(167,139,250,0.07), transparent 50%)",
        }}
      />

      <CornerTicks />

      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="relative flex items-center gap-3"
      >
        <span aria-hidden className="h-px w-6 bg-[var(--color-accent)]/45" />
        <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-[var(--color-accent)]">
          Index
        </span>
        <span aria-hidden className="h-px w-3 bg-[#94a3b8]/30" />
        <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#64748b]">
          00 / 03
        </span>
      </motion.div>

      <motion.h1
        variants={NAME_CONTAINER}
        initial="hidden"
        animate="show"
        aria-label={NAME}
        className="relative mt-6 text-[44px] font-bold leading-[1.05] tracking-tight text-[var(--color-text)] sm:text-[56px]"
      >
        {NAME.split("").map((c, i) => (
          <motion.span
            key={i}
            variants={NAME_CHAR}
            aria-hidden
            style={{ display: "inline-block" }}
          >
            {c === " " ? " " : c}
          </motion.span>
        ))}
      </motion.h1>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "left" }}
        className="relative mt-5 h-[3px] w-[64px] rounded-sm bg-[var(--color-accent)]"
      />

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="relative mt-5 text-[22px] font-medium text-[var(--color-accent)]"
      >
        Software Engineer
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.78 }}
        className="relative mt-3 max-w-[28rem] text-[15px] leading-[1.55] text-[var(--color-muted)]"
      >
        Building data-heavy systems, from global maps to emergency dispatch.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.92 }}
        className="relative mt-9"
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
        className="relative mt-7"
      >
        <div className="flex items-center gap-2.5">
          <span aria-hidden className="h-px w-5 bg-[#94a3b8]/30" />
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#64748b]">
            Stack
          </p>
        </div>
        <p className="mt-3 font-mono text-[12.5px] leading-[1.9] tracking-wide text-[#cbd5e1]/85">
          {SKILLS.map((s, i) => (
            <span key={s}>
              {i > 0 && <span className="text-[#f59e0b]/70">{"  ·  "}</span>}
              {s}
            </span>
          ))}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.25, ease: [0.22, 1, 0.36, 1] }}
        className="relative mt-9 overflow-hidden rounded-xl border border-[var(--color-border)] bg-[#0d1117]/95 backdrop-blur shadow-[0_20px_50px_-25px_rgba(0,0,0,0.7)]"
      >
        <header className="flex items-center justify-between border-b border-[var(--color-border)] px-4 py-2.5">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent)] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-accent)]" />
            </span>
            <span className="font-mono text-[12px] text-[var(--color-text)]">
              tile-service
            </span>
            <span className="rounded border border-[var(--color-accent)]/30 px-1.5 py-px font-mono text-[9px] uppercase tracking-wider text-[var(--color-accent)]">
              prod
            </span>
          </div>
          <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--color-subtle)]">
            live
          </span>
        </header>

        <div className="grid grid-cols-3 divide-x divide-[var(--color-border)]">
          <Metric label="p99" value={`${p99}`} unit="ms" accent="var(--color-accent)" />
          <Metric label="rps" value={`${rps.toFixed(1)}k`} unit="req/s" accent="#f59e0b" />
          <Metric label="cache" value="99.97" unit="%" accent="#a78bfa" />
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
            ── 2.1B tiles served today
          </span>
          <span className="font-mono text-[9px] text-[var(--color-subtle)]">
            uptime 99.99%
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
          href="https://github.com/liqs02"
          target="_blank"
          rel="noreferrer"
          className="transition-colors active:text-[var(--color-accent)]"
        >
          github.com/liqs02
        </a>
        <span className="text-[var(--color-subtle)]/40">·</span>
        <a
          href="https://linkedin.com/in/patryklikus"
          target="_blank"
          rel="noreferrer"
          className="transition-colors active:text-[var(--color-accent)]"
        >
          linkedin.com/in/patryklikus
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

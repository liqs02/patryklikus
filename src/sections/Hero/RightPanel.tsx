import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { EASE } from "../../lib/motion";
import { DASHBOARD } from "./data";
import GridOverlay from "./GridOverlay";

const SPARK_POINTS = 28;
const SPARK_W = 400;
const SPARK_H = 56;

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

function formatRps(v: number) {
  return `${v.toFixed(1)}k`;
}

export default function RightPanel() {
  const reduced = useReducedMotion();

  const [p99, setP99] = useState(DASHBOARD.initialP99);
  const [rps, setRps] = useState(DASHBOARD.initialRps);
  const cacheHit = DASHBOARD.cacheHit;
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
      const next = jitter(last, [22, 36], 3);
      setSpark((s) => [...s.slice(1), next]);
    }, 2200);
    const b = setInterval(() => {
      setRps((v) => +jitter(v, [59.4, 61.2], 0.6).toFixed(1));
    }, 1700);
    return () => {
      clearInterval(a);
      clearInterval(b);
    };
  }, [reduced]);

  return (
    <div className="relative hidden lg:block" style={{ perspective: "1800px" }}>
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(closest-side at 55% 50%, rgba(255,255,255,0.035), transparent 70%)",
        }}
      />
      <motion.div
        aria-hidden
        animate={{ opacity: [0.38, 0.5, 0.38] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0"
        style={{
          transform: "perspective(1400px) rotateY(-8deg) rotateX(3deg)",
          transformOrigin: "center",
          maskImage:
            "radial-gradient(ellipse 70% 70% at 55% 50%, black 40%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 70% at 55% 50%, black 40%, transparent 85%)",
        }}
      >
        <GridOverlay />
      </motion.div>

      <div
        className="absolute inset-0 flex items-center justify-center px-8"
        style={{ transformStyle: "preserve-3d" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30, rotateY: -22, rotateX: 10 }}
          animate={{ opacity: 1, y: 0, rotateY: -12, rotateX: 6 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
          className="relative w-[460px]"
          style={{
            transformStyle: "preserve-3d",
            transformOrigin: "center",
          }}
        >
          <div
            aria-hidden
            className="absolute -inset-12 -z-10 rounded-[32px] opacity-70 blur-3xl"
            style={{
              background:
                "radial-gradient(60% 60% at 50% 50%, rgba(16,185,129,0.20), transparent 75%)",
            }}
          />

          <DashboardCard
            p99={p99}
            rps={rps}
            cacheHit={cacheHit}
            spark={spark}
          />

          <motion.div
            initial={{ opacity: 0, y: 12, x: 12 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="absolute -right-2 -top-10 rounded-lg border border-[var(--color-border)] bg-[#0d1117]/95 px-3.5 py-2.5 backdrop-blur shadow-[0_30px_50px_-20px_rgba(0,0,0,0.8)] xl:-right-16"
            style={{ transform: "translateZ(80px)" }}
          >
            <div className="flex items-center gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent)] opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-muted)]">
                deploy
              </span>
            </div>
            <div className="mt-1 font-mono text-[12px] text-[var(--color-text)]">
              v2.34.1 <span className="text-[var(--color-subtle)]">·</span> 4h
              ago
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12, x: -12 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="absolute -bottom-12 -left-2 rounded-lg border border-[var(--color-border)] bg-[#0d1117]/95 px-3.5 py-2.5 backdrop-blur shadow-[0_30px_50px_-20px_rgba(0,0,0,0.8)] xl:-left-16"
            style={{ transform: "translateZ(60px)" }}
          >
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-muted)]">
                regions
              </span>
              <span className="font-mono text-[12px] text-[var(--color-text)]">
                3 active
              </span>
            </div>
            <div className="mt-1.5 flex gap-1">
              <RegionDot label="eu-west" healthy />
              <RegionDot label="us-east" healthy />
              <RegionDot label="ap-south" healthy />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

function DashboardCard({
  p99,
  rps,
  cacheHit,
  spark,
}: {
  p99: number;
  rps: number;
  cacheHit: number;
  spark: number[];
}) {
  const path = buildSparkPath(spark);
  return (
    <div className="rounded-xl border border-[var(--color-border)] bg-[#0d1117]/95 backdrop-blur shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]">
      <header className="flex items-center justify-between border-b border-[var(--color-border)] px-5 py-3">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent)] opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-accent)]" />
          </span>
          <span className="font-mono text-[12.5px] text-[var(--color-text)]">
            {DASHBOARD.service}
          </span>
          <span className="rounded border border-[var(--color-accent)]/30 px-1.5 py-px font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent)]">
            {DASHBOARD.env}
          </span>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-subtle)]">
          {DASHBOARD.status}
        </span>
      </header>

      <div className="grid grid-cols-3 divide-x divide-[var(--color-border)]">
        <Metric
          label="p99 latency"
          value={`${p99}`}
          unit="ms"
          accent="var(--color-accent)"
          delay={0.4}
        />
        <Metric
          label="throughput"
          value={formatRps(rps)}
          unit="req/s"
          accent="var(--color-amber)"
          delay={0.5}
        />
        <Metric
          label="cache hit"
          value={cacheHit.toFixed(2)}
          unit="%"
          accent="var(--color-violet)"
          delay={0.6}
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.75 }}
        className="border-t border-[var(--color-border)] px-5 py-4"
      >
        <div className="flex items-baseline justify-between">
          <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-subtle)]">
            p99 · last 60s
          </span>
          <span className="font-mono text-[10px] text-[var(--color-subtle)]">
            ms
          </span>
        </div>
        <svg
          viewBox={`0 0 ${SPARK_W} ${SPARK_H}`}
          preserveAspectRatio="none"
          className="mt-2 h-[56px] w-full overflow-visible"
        >
          <defs>
            <linearGradient id="sparkFill" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="0%"
                stopColor="var(--color-accent)"
                stopOpacity="0.25"
              />
              <stop
                offset="100%"
                stopColor="var(--color-accent)"
                stopOpacity="0"
              />
            </linearGradient>
          </defs>
          <path
            d={`${path} L ${SPARK_W},${SPARK_H} L 0,${SPARK_H} Z`}
            fill="url(#sparkFill)"
            style={{ transition: "d 1.4s ease" }}
          />
          <path
            d={path}
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ transition: "d 1.4s ease" }}
          />
        </svg>
      </motion.div>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.85 }}
        className="flex items-center justify-between border-t border-[var(--color-border)] px-5 py-2.5"
      >
        <span className="font-mono text-[10px] text-[var(--color-subtle)]">
          {DASHBOARD.footerLeft}
        </span>
        <span className="font-mono text-[10px] text-[var(--color-subtle)]">
          {DASHBOARD.footerRight}
        </span>
      </motion.footer>
    </div>
  );
}

function Metric({
  label,
  value,
  unit,
  accent,
  delay,
}: {
  label: string;
  value: string;
  unit: string;
  accent: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: EASE }}
      className="px-5 py-4"
    >
      <div
        className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider"
        style={{ color: accent }}
      >
        <span
          className="h-1 w-1 rounded-full"
          style={{ backgroundColor: accent }}
        />
        {label}
      </div>
      <div className="mt-2 flex items-baseline gap-1">
        <span className="font-mono text-[26px] font-semibold tabular-nums text-[var(--color-text)]">
          {value}
        </span>
        <span className="font-mono text-[11px] text-[var(--color-muted)]">
          {unit}
        </span>
      </div>
    </motion.div>
  );
}

function RegionDot({ label, healthy }: { label: string; healthy: boolean }) {
  return (
    <span
      title={label}
      className={`h-1 w-6 rounded-full ${
        healthy ? "bg-[var(--color-accent)]/70" : "bg-[var(--color-subtle)]"
      }`}
    />
  );
}

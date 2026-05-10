import { motion } from "framer-motion";
import { EntryType, TIMELINE } from "../../data/timeline";
import { slideIn } from "./fade";

const NAME = "Patryk Likus";

const NAME_CONTAINER = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.035, delayChildren: 0.05 },
  },
};

const NAME_CHAR = {
  hidden: { opacity: 0, x: -10 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const SKILLS = [
  "Java",
  "Spring Boot",
  "Kubernetes",
  "Azure",
  "PostgreSQL",
  "Redis",
  "Kafka",
];

const HERO_JOBS = TIMELINE.filter((e) => e.type !== EntryType.Education);

export default function LeftPanel() {
  return (
    <div className="relative flex flex-col justify-center px-6 py-16 sm:px-12 sm:py-24 lg:px-20">
      <DotGrid />
      <EdgeMarkers />
      <motion.div
        aria-hidden
        animate={{ scale: [1, 1.08, 1], opacity: [0.55, 0.75, 0.55] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-20 top-1/2 hidden h-[520px] w-[520px] -translate-y-1/2 rounded-full blur-3xl lg:block"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,255,255,0.12), transparent 75%)",
        }}
      />
      <div className="relative flex max-w-xl flex-col">
        <motion.h1
          variants={NAME_CONTAINER}
          initial="hidden"
          animate="show"
          aria-label={NAME}
          className="text-[44px] font-bold leading-[1.1] tracking-tight text-[var(--color-text)] sm:text-6xl lg:text-[70px]"
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
              {wi < words.length - 1 && " "}
            </span>
          ))}
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "left center" }}
          className="mt-6 h-[3px] w-[72px] rounded-sm bg-[var(--color-accent)]"
        />

        <motion.p
          {...slideIn(0.7)}
          className="mt-5 text-2xl font-medium text-[var(--color-accent)]"
        >
          Software Engineer
        </motion.p>

        <motion.p
          {...slideIn(0.78)}
          className="mt-6 max-w-[560px] text-[17px] leading-snug text-[var(--color-muted)]"
        >
          Building data-heavy systems, from global maps to emergency dispatch.
        </motion.p>

        <motion.ul
          {...slideIn(0.86)}
          className="mt-8 hidden flex-col gap-2 lg:flex"
        >
          {HERO_JOBS.map((job) => (
            <li
              key={`${job.title}-${job.year}`}
              className="flex items-center gap-3 text-[14px]"
            >
              {job.active ? (
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent)] opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-accent)]" />
                </span>
              ) : (
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-subtle)]/60" />
              )}
              <span className="text-[var(--color-text)]">{job.title}</span>
              <span className="font-mono text-[12px] text-[var(--color-subtle)]">
                {job.year}
              </span>
            </li>
          ))}
        </motion.ul>

        <motion.p
          {...slideIn(0.96)}
          className="mt-8 font-mono text-[13px] leading-relaxed tracking-wide text-[#cbd5e1]/85"
        >
          {SKILLS.map((s, i) => (
            <span key={s}>
              {i > 0 && <span className="text-[#f59e0b]/70">{"  ·  "}</span>}
              {s}
            </span>
          ))}
        </motion.p>

        <motion.div
          {...slideIn(1.05)}
          className="mt-12 flex flex-col items-center gap-1 text-xs text-[#475569] sm:flex-row sm:items-center sm:gap-3"
        >
          <a
            href="https://github.com/liqs02"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-1.5 transition-colors hover:text-[var(--color-accent)]"
          >
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5"
              fill="currentColor"
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.18-.02-2.14-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18.92-.26 1.91-.39 2.89-.39.98 0 1.97.13 2.89.39 2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.06.78 2.13 0 1.54-.01 2.78-.01 3.16 0 .31.21.67.8.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
            </svg>
            github.com/liqs02
          </a>
          <span className="hidden text-[var(--color-subtle)]/50 sm:inline">
            ·
          </span>
          <a
            href="https://linkedin.com/in/patryklikus"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-1.5 transition-colors hover:text-[var(--color-accent)]"
          >
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              className="h-3.5 w-3.5"
              fill="currentColor"
            >
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67h-3.55V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
            </svg>
            linkedin.com/in/patryklikus
          </a>
        </motion.div>
      </div>
    </div>
  );
}

function EdgeMarkers() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 hidden lg:block">
      <motion.span
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="absolute left-8 top-8 h-3 w-3"
      >
        <span className="absolute inset-y-0 left-0 w-px bg-[var(--color-accent)]/55" />
        <span className="absolute inset-x-0 top-0 h-px bg-[var(--color-accent)]/55" />
      </motion.span>
      <motion.span
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.55 }}
        className="absolute bottom-8 left-8 h-3 w-3"
      >
        <span className="absolute inset-y-0 left-0 w-px bg-[var(--color-accent)]/55" />
        <span className="absolute inset-x-0 bottom-0 h-px bg-[var(--color-accent)]/55" />
      </motion.span>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        className="absolute left-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3"
      >
        <span className="h-12 w-px bg-gradient-to-b from-transparent to-[#94a3b8]/30" />
        <span
          className="font-mono text-[10px] uppercase tracking-[0.32em] text-[#64748b]"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          Index · 00 / 03
        </span>
        <span className="h-12 w-px bg-gradient-to-b from-[#94a3b8]/30 to-transparent" />
      </motion.div>
    </div>
  );
}

function DotGrid() {
  const cols = 8;
  const rows = 10;
  const dots: { x: number; y: number }[] = [];
  for (let r = 1; r <= rows; r++) {
    for (let c = 1; c <= cols; c++) {
      dots.push({
        x: (c / (cols + 1)) * 100,
        y: (r / (rows + 1)) * 100,
      });
    }
  }
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
      preserveAspectRatio="none"
    >
      {dots.map((d, i) => (
        <circle
          key={i}
          cx={`${d.x}%`}
          cy={`${d.y}%`}
          r="1"
          fill="var(--color-accent)"
          fillOpacity="0.18"
        />
      ))}
    </svg>
  );
}

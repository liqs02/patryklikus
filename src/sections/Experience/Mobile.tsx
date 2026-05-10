import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import overtureLogo from "../../assets/overture-logo.svg";
import {
  EDUCATION,
  MOTOROLA,
  PROJECTS,
  TOMTOM,
  type JobCard,
  type ProjectKey,
} from "./data";
import { formatPeriod } from "./duration";

const LOGOS: Record<string, string> = {
  overture: overtureLogo,
};

const PROJECT_TITLE: Record<ProjectKey, string> = {
  overture: "Overture Maps",
  orbis: "Orbis Maps",
  "ai-dispatch": "AI Emergency Dispatch",
  "geo-redundancy": "Geo-redundant Architecture",
  fedramp: "FedRAMP Compliance",
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10% 0px" },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as const },
});

function ProjectBlock({ projectKey }: { projectKey: ProjectKey }) {
  const [open, setOpen] = useState(false);
  const p = PROJECTS[projectKey];
  const title = PROJECT_TITLE[projectKey];

  return (
    <motion.div
      {...fadeUp(0.05)}
      className="relative border-t border-[#1e293b]"
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between py-4 text-left active:opacity-75"
      >
        <span
          className={
            "text-[18px] font-semibold tracking-tight transition-colors " +
            (open ? "text-[var(--color-accent)]" : "text-[var(--color-text)]")
          }
        >
          {title}
        </span>
        <span
          aria-hidden
          className={
            "ml-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-all duration-300 " +
            (open
              ? "rotate-45 border-[var(--color-accent)]/60 text-[var(--color-accent)]"
              : "border-[#334155] text-[#94a3b8]")
          }
        >
          <span className="text-[14px] leading-none">+</span>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-5">
              {p.logo && LOGOS[p.logo] && (
                <img
                  src={LOGOS[p.logo]}
                  alt={title}
                  className="h-10 w-auto select-none"
                  draggable={false}
                />
              )}

              <div className={(p.logo && LOGOS[p.logo] ? "mt-3 " : "") + "space-y-2.5"}>
                {p.description.map((par, i) => (
                  <p key={i} className="text-[13.5px] leading-[1.65] text-[#cbd5e1]/85">
                    {par}
                  </p>
                ))}
              </div>

              {p.usedBy && p.usedBy.length > 0 && (
                <div className="mt-4 border-t border-[#1e293b]/70 pt-3">
                  <div className="flex items-baseline gap-2.5">
                    <span aria-hidden className="h-px w-4 bg-[var(--color-accent)]/40" />
                    <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-[var(--color-accent)]">
                      Used by
                    </p>
                  </div>
                  <div className="mt-2 flex flex-wrap items-baseline gap-x-5 gap-y-1.5">
                    {p.usedBy.map((b) => (
                      <span
                        key={b.label}
                        className="text-[16px] leading-none tracking-[-0.01em] text-[#cbd5e1]/75"
                        style={{ fontWeight: b.weight }}
                      >
                        {b.label}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {p.reference && (
                <div className="mt-4">
                  <a
                    href={p.reference.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-baseline gap-1.5 text-[12px] tracking-[0.01em] text-[var(--color-accent)] active:opacity-75"
                  >
                    <span>{p.reference.label}</span>
                    <span>↗</span>
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function JobBlock({ job, active }: { job: JobCard; active?: boolean }) {
  return (
    <motion.div {...fadeUp()} className="relative pt-6">
      <div className="flex items-center gap-2.5">
        <span
          className={
            "font-mono text-[10px] uppercase tracking-[0.22em] " +
            (active ? "text-[var(--color-accent)]" : "text-[#94a3b8]")
          }
        >
          {formatPeriod(job.period)}
        </span>
        {active && (
          <span className="relative flex h-2 w-2" aria-hidden>
            <span className="absolute inset-0 animate-ping rounded-full bg-[var(--color-accent)]/55" />
            <span className="relative h-2 w-2 rounded-full bg-[var(--color-accent)]" />
          </span>
        )}
      </div>
      <h3 className="mt-2 text-[34px] font-bold leading-[1.04] tracking-[-0.022em] text-[var(--color-text)]">
        {job.company}
      </h3>
      <p className="mt-1.5 text-[13.5px] text-[var(--color-muted)]">
        {job.role}
      </p>
      {job.description && (
        <p className="mt-3 text-[13.5px] leading-[1.6] text-[#cbd5e1]/80">
          {job.description}
        </p>
      )}

      <div className="mt-5">
        <div className="mb-3 flex items-center gap-2.5">
          <span aria-hidden className="h-px w-4 bg-[var(--color-accent)]/40" />
          <p className="font-mono text-[9.5px] uppercase tracking-[0.3em] text-[var(--color-accent)]">
            Projects
          </p>
        </div>
        {job.chips.map((c) => (
          <ProjectBlock key={c.key} projectKey={c.key} />
        ))}
      </div>
    </motion.div>
  );
}

export default function ExperienceMobile() {
  return (
    <section
      id="experience-mobile"
      className="relative w-full overflow-hidden px-6 pt-16 pb-20 sm:px-10 lg:hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 85% 15%, rgba(16,185,129,0.10), transparent 50%), radial-gradient(circle at 10% 85%, rgba(16,185,129,0.06), transparent 55%)",
        }}
      />

      <motion.div {...fadeUp()} className="relative">
        <div className="flex items-center gap-2.5">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)]">
            Experience
          </span>
          <span aria-hidden className="h-px w-8 bg-[var(--color-accent)]/40" />
          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#64748b]">
            01 / 03
          </span>
        </div>
        <h2 className="mt-4 text-[40px] font-bold leading-[1.04] tracking-[-0.02em] text-[var(--color-text)]">
          Where I've <span className="text-[var(--color-accent)]">built</span> things.
        </h2>
        <div
          aria-hidden
          className="mt-4 h-[3px] w-[64px] rounded-sm bg-[var(--color-accent)]"
        />
        <p className="mt-4 text-[14px] leading-[1.6] text-[var(--color-muted)]">
          Two roles, many projects — the work that shaped the engineer.
        </p>
      </motion.div>

      <div className="relative mt-12">
        <JobBlock job={TOMTOM} active />

        <motion.div
          {...fadeUp()}
          className="relative mt-10 flex items-center gap-3 border-y border-[#1e293b] py-6"
          aria-label="Education milestone"
        >
          <span
            aria-hidden
            className="h-2 w-2 rotate-45 border border-[var(--color-accent)]/60"
          />
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] leading-[1.7] text-[#94a3b8]/85">
            {EDUCATION.line1}
            <br />
            {EDUCATION.line2}
          </span>
        </motion.div>

        <div className="mt-4">
          <JobBlock job={MOTOROLA} />
        </div>
      </div>
    </section>
  );
}

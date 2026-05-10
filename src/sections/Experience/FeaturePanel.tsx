import { AnimatePresence, motion } from "framer-motion";
import overtureLogo from "../../assets/overture-logo.png";
import { PROJECTS, type JobCard, type ProjectKey } from "./data";

type Props = {
  inView: boolean;
  selected: ProjectKey;
  activeJob: JobCard;
  onSelect: (key: ProjectKey) => void;
};

const LOGOS: Record<string, string> = {
  overture: overtureLogo,
};

const PROJECT_TRANSITION = { duration: 0.22, ease: [0.22, 1, 0.36, 1] as const };

export default function FeaturePanel({ inView, selected, activeJob, onSelect }: Props) {
  const project = PROJECTS[selected];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.7, delay: inView ? 0.55 : 0, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      <div className="flex items-baseline gap-3">
        <span aria-hidden className="h-px w-6 bg-[var(--color-accent)]/40" />
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)]">
          Projects
        </p>
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={activeJob.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="mt-5 flex flex-wrap items-center gap-2.5"
        >
          {activeJob.chips.map((c, i) => {
            const isActive = selected === c.key;
            return (
              <button
                key={c.key}
                type="button"
                onClick={() => onSelect(c.key)}
                aria-pressed={isActive}
                className={
                  "group relative flex cursor-pointer items-baseline gap-2 rounded-sm border px-3 py-1.5 transition-all duration-200 " +
                  (isActive
                    ? "border-[var(--color-accent)]/45 bg-[var(--color-accent)]/[0.07]"
                    : "border-[#1e293b] hover:border-[#334155] hover:bg-[#0e1116]")
                }
              >
                <span
                  className={
                    "font-mono text-[9.5px] tracking-[0.28em] transition-colors duration-200 " +
                    (isActive ? "text-[var(--color-accent)]" : "text-[#64748b]")
                  }
                >
                  0{i + 1}
                </span>
                <span
                  className={
                    "font-mono text-[10.5px] uppercase tracking-[0.2em] transition-colors duration-200 " +
                    (isActive
                      ? "text-[var(--color-accent)]"
                      : "text-[#94a3b8] group-hover:text-[#e2e8f0]")
                  }
                >
                  {c.label}
                </span>
              </button>
            );
          })}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={selected}
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -8 }}
          transition={PROJECT_TRANSITION}
          className="relative mt-8"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-[#64748b]">
            {project.caption}
          </p>

          <div className="mt-4">
            {project.logo && LOGOS[project.logo] ? (
              <img
                src={LOGOS[project.logo]}
                alt={project.title ?? project.caption}
                className="h-14 w-auto select-none"
                draggable={false}
              />
            ) : (
              <h4 className="text-[36px] font-bold leading-[1.05] tracking-[-0.018em] text-[var(--color-text)]">
                {project.title}
              </h4>
            )}
          </div>

          <div className="mt-6 max-w-[640px] space-y-3.5">
            {project.description.map((p, i) => (
              <p key={i} className="text-[14px] leading-[1.7] text-[#cbd5e1]/85">
                {p}
              </p>
            ))}
          </div>

          {project.usedBy && project.usedBy.length > 0 && (
            <div className="mt-8 border-t border-[#1e293b] pt-5">
              <div className="flex items-baseline gap-3">
                <span aria-hidden className="h-px w-6 bg-[var(--color-accent)]/40" />
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-accent)]">
                  Used by
                </p>
              </div>
              <div className="mt-4 flex flex-wrap items-baseline gap-x-8 gap-y-3">
                {project.usedBy.map((b) => (
                  <span
                    key={b.label}
                    className="text-[26px] leading-none tracking-[-0.01em] text-[#cbd5e1]/75"
                    style={{ fontWeight: b.weight }}
                  >
                    {b.label}
                  </span>
                ))}
              </div>
            </div>
          )}

          {project.reference && (
            <div className="mt-8 border-t border-[#1e293b] pt-5">
              <a
                href={project.reference.href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-baseline gap-2 text-[12.5px] tracking-[0.01em] text-[var(--color-accent)] transition-opacity hover:opacity-85"
              >
                <span>{project.reference.label}</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

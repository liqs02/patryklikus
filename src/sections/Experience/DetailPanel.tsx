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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
  exit: { opacity: 0, transition: { duration: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
  exit: {
    opacity: 0,
    y: -8,
    filter: "blur(6px)",
    transition: { duration: 0.2 },
  },
};

export default function DetailPanel({
  inView,
  selected,
  activeJob,
  onSelect,
}: Props) {
  const project = PROJECTS[selected];

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
      transition={{ duration: 0.7, delay: inView ? 0.6 : 0, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-[512px]"
    >
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={selected}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.p
            variants={itemVariants}
            className="text-[11px] text-[var(--color-accent)]"
          >
            {project.caption}
          </motion.p>

          <motion.div variants={itemVariants}>
            {project.logo && LOGOS[project.logo] ? (
              <img
                src={LOGOS[project.logo]}
                alt={project.title ?? project.caption}
                className="mt-5 h-20 w-auto select-none"
                draggable={false}
              />
            ) : (
              <h3 className="mt-5 text-[40px] font-bold leading-none tracking-tight text-[var(--color-text)]">
                {project.title}
              </h3>
            )}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-7 space-y-4 max-w-[512px]"
          >
            {project.description.map((p, i) => (
              <p key={i} className="text-sm leading-snug text-[var(--color-muted)]">
                {p}
              </p>
            ))}
          </motion.div>

          {project.usedBy && project.usedBy.length > 0 && (
            <motion.div variants={itemVariants} className="mt-7">
              <p className="text-[10px] text-[var(--color-accent)]">USED BY</p>
              <div className="mt-2 flex flex-wrap items-baseline gap-x-7 gap-y-2">
                {project.usedBy.map((b) => (
                  <span
                    key={b.label}
                    className="text-xl text-[#cbd5e1]/70"
                    style={{ fontWeight: b.weight }}
                  >
                    {b.label}
                  </span>
                ))}
              </div>
            </motion.div>
          )}

          {project.reference && (
            <motion.a
              variants={itemVariants}
              href={project.reference.href}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block text-[11px] text-[var(--color-accent)]/85 transition-colors hover:text-[var(--color-accent)]"
            >
              Reference  ·  {project.reference.label} →
            </motion.a>
          )}
        </motion.div>
      </AnimatePresence>

      <motion.div
        layout
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="mt-10"
      >
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]/60">
          Switch project
        </p>
        <div className="flex flex-wrap gap-x-8 gap-y-2 border-b border-[#94a3b8]/15 pb-3">
          {activeJob.chips.map((c, i) => {
            const isActive = selected === c.key;
            return (
              <button
                key={c.key}
                type="button"
                onClick={() => onSelect(c.key)}
                aria-pressed={isActive}
                className="relative flex cursor-pointer items-baseline gap-2"
              >
                <span
                  className={
                    "font-mono text-[11px] transition-colors " +
                    (isActive
                      ? "text-[var(--color-accent)]"
                      : "text-[#94a3b8]/60")
                  }
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={
                    "text-[14px] font-bold transition-colors " +
                    (isActive
                      ? "text-[var(--color-accent)]"
                      : "text-[#94a3b8] hover:text-[#e2e8f0]")
                  }
                >
                  {c.label}
                </span>
                {isActive && (
                  <motion.span
                    layoutId={`switch-active-${activeJob.id}`}
                    aria-hidden
                    className="absolute inset-x-0 -bottom-3 h-[2px] bg-[var(--color-accent)]"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
}

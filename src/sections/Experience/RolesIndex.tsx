import { motion } from "framer-motion";
import { EASE } from "../../lib/motion";
import {
  EDUCATION,
  MOTOROLA,
  TOMTOM,
  type JobCard,
  type JobId,
} from "./data";
import { formatPeriod } from "./duration";

const JOBS: JobCard[] = [TOMTOM, MOTOROLA];

type Props = {
  inView: boolean;
  activeJobId: JobId;
  onSelectJob: (id: JobId) => void;
};

function RoleButton({
  job,
  index,
  isActive,
  inView,
  onSelectJob,
}: {
  job: JobCard;
  index: number;
  isActive: boolean;
  inView: boolean;
  onSelectJob: (id: JobId) => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={() => !isActive && onSelectJob(job.id)}
      aria-pressed={isActive}
      initial={{ opacity: 0, y: 14 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
      transition={{
        duration: 0.55,
        delay: inView ? 0.5 + index * 0.12 : 0,
        ease: EASE,
      }}
      className={
        "group relative block w-full pt-7 pb-8 text-left " +
        (isActive ? "cursor-default" : "cursor-pointer")
      }
    >
      <span aria-hidden className="absolute inset-x-0 top-0 h-px bg-[#1e293b]" />
      {isActive && (
        <motion.span
          layoutId="role-active-rail"
          aria-hidden
          className="absolute inset-x-0 top-0 h-px bg-[var(--color-accent)]"
          transition={{ type: "spring", stiffness: 380, damping: 32 }}
        />
      )}

      <div className="flex items-baseline gap-4">
        <span
          className={
            "font-mono text-[11px] tracking-[0.3em] transition-colors duration-300 " +
            (isActive ? "text-[var(--color-accent)]" : "text-[#64748b]")
          }
        >
          0{index + 1}
        </span>
        <span
          className={
            "font-mono text-[10.5px] uppercase tracking-[0.22em] transition-colors duration-300 " +
            (isActive ? "text-[var(--color-accent)]" : "text-[#94a3b8]/85")
          }
        >
          {formatPeriod(job.period)}
        </span>
        {isActive && (
          <span className="relative flex h-2 w-2" aria-hidden>
            <span className="absolute inset-0 animate-ping rounded-full bg-[var(--color-accent)]/55" />
            <span className="relative h-2 w-2 rounded-full bg-[var(--color-accent)]" />
          </span>
        )}
        {!isActive && (
          <span
            aria-hidden
            className="ml-auto text-[15px] leading-none text-[#475569] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[var(--color-accent)]"
          >
            →
          </span>
        )}
      </div>

      <h3
        className={
          "mt-3 text-[40px] font-bold leading-[1.02] tracking-[-0.022em] transition-colors duration-300 " +
          (isActive
            ? "text-[var(--color-text)]"
            : "text-[#cbd5e1] group-hover:text-[var(--color-text)]")
        }
      >
        {job.company}
      </h3>
      <p className="mt-2 text-[14px] tracking-[0.01em] text-[var(--color-muted)]">
        {job.role}
      </p>
      {job.description && (
        <p className="mt-3 max-w-[460px] text-[14px] leading-[1.65] text-[#cbd5e1]/80">
          {job.description}
        </p>
      )}
    </motion.button>
  );
}

export default function RolesIndex({ inView, activeJobId, onSelectJob }: Props) {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: inView ? 0.4 : 0 }}
        className="flex items-baseline gap-3"
      >
        <span aria-hidden className="h-px w-6 bg-[#94a3b8]/30" />
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#64748b]">
          Roles
        </p>
      </motion.div>

      <div className="mt-5">
        <RoleButton
          job={JOBS[0]!}
          index={0}
          isActive={activeJobId === JOBS[0]!.id}
          inView={inView}
          onSelectJob={onSelectJob}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: inView ? 0.7 : 0 }}
          className="relative flex items-center gap-3 py-5"
          aria-label="Education milestone"
        >
          <span
            aria-hidden
            className="h-2 w-2 rotate-45 border border-[var(--color-accent)]/60"
          />
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] leading-[1.7] text-[#94a3b8]/80">
            {EDUCATION.line1}
            <br />
            {EDUCATION.line2}
          </span>
          <span aria-hidden className="ml-auto h-px flex-1 max-w-[60px] bg-[#1e293b]" />
        </motion.div>

        <RoleButton
          job={JOBS[1]!}
          index={1}
          isActive={activeJobId === JOBS[1]!.id}
          inView={inView}
          onSelectJob={onSelectJob}
        />
      </div>
    </div>
  );
}

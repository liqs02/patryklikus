import { AnimatePresence, motion } from "framer-motion";
import TimelineRail, { type RailRow } from "../../components/TimelineRail";
import {
  EDUCATION,
  JOB_OF_PROJECT,
  MOTOROLA,
  TOMTOM,
  type JobCard,
  type ProjectKey,
} from "./data";
import { formatPeriod } from "./duration";

type Props = {
  inView: boolean;
  selected: ProjectKey;
  onSelect: (key: ProjectKey) => void;
};

const CARD_TRANSITION = { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const };

function CardView({
  job,
  active,
  onSelect,
}: {
  job: JobCard;
  active: boolean;
  onSelect: (k: ProjectKey) => void;
}) {
  const handleClick = () => {
    if (!active) onSelect(job.chips[0]!.key);
  };

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      layout
      transition={{ layout: CARD_TRANSITION }}
      aria-pressed={active}
      className={
        "group relative block w-full overflow-hidden rounded-xl p-6 text-left transition-[background-color,border-color,padding,transform,box-shadow] duration-300 " +
        (active
          ? "cursor-default border border-[var(--color-accent)]/40 bg-[var(--color-accent)]/[0.06] pl-7"
          : "cursor-pointer border border-[#94a3b8]/[0.18] bg-[#94a3b8]/[0.04] hover:-translate-y-0.5 hover:border-[var(--color-accent)]/45 hover:bg-[var(--color-accent)]/[0.05] hover:shadow-[0_18px_48px_-18px_rgba(16,185,129,0.35)]")
      }
    >
      <AnimatePresence>
        {active && (
          <motion.span
            key="stripe"
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute left-0 top-3 bottom-3 w-[3px] bg-[var(--color-accent)]"
          />
        )}
      </AnimatePresence>

      {!active && (
        <span
          aria-hidden
          className="absolute right-5 top-5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#94a3b8]/60 transition-colors duration-200 group-hover:text-[var(--color-accent)]"
        >
          Open →
        </span>
      )}

      <p
        className={
          "font-mono text-xs transition-colors duration-300 " +
          (active ? "text-[var(--color-accent)]" : "text-[var(--color-muted)]")
        }
      >
        {formatPeriod(job.period)}
      </p>

      <motion.h3
        animate={{ fontSize: active ? 28 : 24 }}
        transition={{ duration: 0.3 }}
        className={
          "mt-3 font-bold leading-none transition-colors duration-300 " +
          (active
            ? "text-[var(--color-text)]"
            : "text-[#cbd5e1] group-hover:text-[var(--color-text)]")
        }
      >
        {job.company}
      </motion.h3>

      <p className="mt-3 text-base text-[var(--color-muted)]">{job.role}</p>

      <AnimatePresence initial={false}>
        {active && job.description && (
          <motion.div
            key="desc"
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: 12 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={CARD_TRANSITION}
            className="overflow-hidden"
          >
            <p className="max-w-[512px] text-[13px] leading-snug text-[var(--color-muted)]">
              {job.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

export default function Cards({ inView, selected, onSelect }: Props) {
  const tomtomActive = JOB_OF_PROJECT[selected] === "tomtom";

  const rows: RailRow[] = [
    {
      active: tomtomActive,
      dotTop: "top-[24px]",
      content: (
        <CardView job={TOMTOM} active={tomtomActive} onSelect={onSelect} />
      ),
    },
    {
      milestone: true,
      dotTop: "top-1/2 -translate-y-1/2",
      content: (
        <div>
          <p className="text-[13px] font-medium text-[#cbd5e1]/85">
            {EDUCATION.line1}
          </p>
          <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.6px] text-[var(--color-accent)]/70">
            {EDUCATION.line2}
          </p>
        </div>
      ),
    },
    {
      active: !tomtomActive,
      dotTop: "top-[24px]",
      content: (
        <CardView job={MOTOROLA} active={!tomtomActive} onSelect={onSelect} />
      ),
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ duration: 0.6, delay: inView ? 0.4 : 0, ease: [0.22, 1, 0.36, 1] }}
    >
      <TimelineRail
        rows={rows}
        gapClass="gap-7"
        spineTop="top-[31px]"
        spineBottom="bottom-0"
      />
    </motion.div>
  );
}

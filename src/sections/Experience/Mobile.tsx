import { useState } from "react";
import overtureLogo from "../../assets/overture-logo.png";
import {
  EDUCATION,
  MOTOROLA,
  PROJECTS,
  TOMTOM,
  type JobCard,
  type ProjectKey,
} from "./data";
import { formatPeriod } from "./duration";

const LOGOS: Record<string, string> = { overture: overtureLogo };

function JobCardMobile({
  job,
  selected,
  onSelect,
}: {
  job: JobCard;
  selected: ProjectKey;
  onSelect: (k: ProjectKey) => void;
}) {
  const project = PROJECTS[selected];
  const isCurrent = !!job.active;

  return (
    <article
      className={
        "relative overflow-hidden rounded-xl p-5 " +
        (isCurrent
          ? "border border-[var(--color-accent)]/40 bg-[var(--color-accent)]/[0.06] pl-6"
          : "border border-[#cbd5e1]/15 bg-[#cbd5e1]/[0.02]")
      }
    >
      {isCurrent && (
        <span
          aria-hidden
          className="absolute left-0 top-3 bottom-3 w-[3px] bg-[var(--color-accent)]"
        />
      )}
      {isCurrent && (
        <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-[var(--color-accent)]/[0.18] px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.12em] text-[var(--color-accent)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
          Active
        </span>
      )}

      <p
        className={
          "font-mono text-[11px] " +
          (isCurrent
            ? "text-[var(--color-accent)]"
            : "text-[#cbd5e1]/75")
        }
      >
        {formatPeriod(job.period)}
      </p>
      <h3 className="mt-2 text-[24px] font-bold leading-none text-[var(--color-text)]">
        {job.company}
      </h3>
      <p className="mt-2 text-sm text-[var(--color-muted)]">{job.role}</p>

      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 border-b border-[#94a3b8]/15 pb-2.5">
        {job.chips.map((c, i) => {
          const tabActive = selected === c.key;
          return (
            <button
              type="button"
              key={c.key}
              onClick={() => onSelect(c.key)}
              className="relative flex items-baseline gap-1.5 py-1"
            >
              <span
                className={
                  "font-mono text-[10px] transition-colors " +
                  (tabActive
                    ? "text-[var(--color-accent)]"
                    : "text-[#94a3b8]/60")
                }
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className={
                  "text-[12px] font-bold transition-colors " +
                  (tabActive
                    ? "text-[var(--color-accent)]"
                    : "text-[#cbd5e1]")
                }
              >
                {c.label}
              </span>
              {tabActive && (
                <span
                  aria-hidden
                  className="absolute inset-x-0 -bottom-2.5 h-[2px] rounded-sm bg-[var(--color-accent)]"
                />
              )}
            </button>
          );
        })}
      </div>

      <div className="mt-4">
        {project.logo && LOGOS[project.logo] ? (
          <img
            src={LOGOS[project.logo]}
            alt={project.title ?? project.caption}
            className="h-12 w-auto select-none"
            draggable={false}
          />
        ) : (
          <h4 className="text-[20px] font-bold leading-tight text-[var(--color-text)]">
            {project.title}
          </h4>
        )}
        <p className="mt-3 text-[13px] leading-snug text-[#cbd5e1]/85">
          {project.description[0]}
        </p>
        {project.usedBy && project.usedBy.length > 0 && (
          <div className="mt-4">
            <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-[var(--color-accent)]">
              Used by
            </p>
            <div className="mt-1.5 flex flex-wrap items-baseline gap-x-4 gap-y-1">
              {project.usedBy.map((b) => (
                <span
                  key={b.label}
                  className="text-[15px] text-[#cbd5e1]/75"
                  style={{ fontWeight: b.weight }}
                >
                  {b.label}
                </span>
              ))}
            </div>
          </div>
        )}
        {project.reference && (
          <a
            href={project.reference.href}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-block text-[11px] text-[var(--color-accent)]/85 transition-colors hover:text-[var(--color-accent)]"
          >
            {project.reference.label} →
          </a>
        )}
      </div>
    </article>
  );
}

export default function ExperienceMobile() {
  const [tomtomProject, setTomtomProject] = useState<ProjectKey>("overture");
  const [motoProject, setMotoProject] = useState<ProjectKey>("ai-dispatch");

  return (
    <section className="relative w-full px-6 py-16 sm:px-10 lg:hidden">
      <p className="text-[11px] uppercase tracking-[0.12em] text-[var(--color-accent)]">
        Experience
      </p>
      <h2 className="mt-3 text-[32px] font-bold leading-tight text-[var(--color-text)]">
        Where I've built things
      </h2>
      <div className="mt-3 h-[3px] w-[56px] rounded-sm bg-[var(--color-accent)]" />

      <div className="mt-8 space-y-5">
        <JobCardMobile
          job={TOMTOM}
          selected={tomtomProject}
          onSelect={setTomtomProject}
        />

        <div className="px-1">
          <p className="text-[12px] font-medium text-[#cbd5e1]/85">
            {EDUCATION.line1}
          </p>
          <p className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.6px] text-[var(--color-accent)]/70">
            {EDUCATION.line2}
          </p>
        </div>

        <JobCardMobile
          job={MOTOROLA}
          selected={motoProject}
          onSelect={setMotoProject}
        />
      </div>
    </section>
  );
}

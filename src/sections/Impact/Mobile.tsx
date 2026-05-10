import { motion } from "framer-motion";
import { fadeUp } from "../../lib/motion";
import {
  COPY,
  GITHUB_PROFILE_HREF,
  LINKEDIN_PROFILE_HREF,
  POSTS,
  PUBLICATION,
} from "./data";

const VIOLET = "#a78bfa";

export default function ImpactMobile() {
  return (
    <section className="relative w-full overflow-hidden px-6 pt-16 pb-20 sm:px-10 lg:hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 85% 15%, rgba(167,139,250,0.10), transparent 50%), radial-gradient(circle at 12% 85%, rgba(167,139,250,0.06), transparent 55%)",
        }}
      />

      <motion.div {...fadeUp()} className="relative">
        <div className="flex items-center gap-2.5">
          <span
            className="font-mono text-[10px] uppercase tracking-[0.3em]"
            style={{ color: VIOLET }}
          >
            {COPY.eyebrow}
          </span>
          <span aria-hidden className="h-px w-8" style={{ backgroundColor: `${VIOLET}55` }} />
          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#64748b]">
            {COPY.counter}
          </span>
        </div>
        <h2 className="mt-4 text-[40px] font-bold leading-[1.04] tracking-[-0.02em] text-[var(--color-text)]">
          {COPY.titleStart}<span style={{ color: VIOLET }}>{COPY.titleAccent}</span>{COPY.titleEnd}
        </h2>
        <div
          aria-hidden
          className="mt-4 h-[3px] w-[64px] rounded-sm"
          style={{ backgroundColor: VIOLET }}
        />
        <p className="mt-4 text-[14px] leading-[1.6] text-[var(--color-muted)]">
          {COPY.subtitle}
        </p>
      </motion.div>

      <motion.a
        {...fadeUp(0.05)}
        href={PUBLICATION.href}
        target="_blank"
        rel="noreferrer"
        className="relative mt-12 block active:opacity-85"
      >
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-[11px] tracking-[0.3em] text-[#64748b]">
            01
          </span>
          <span aria-hidden className="h-px flex-1 bg-[#1e293b]" />
          <span
            className="font-mono text-[9px] font-medium uppercase tracking-[0.28em]"
            style={{ color: VIOLET }}
          >
            {PUBLICATION.chip}
          </span>
        </div>

        <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.3em] text-[#64748b]">
          {PUBLICATION.venue}
        </p>
        <h3 className="mt-2.5 text-[26px] font-bold leading-[1.1] tracking-[-0.015em] text-[var(--color-text)]">
          {PUBLICATION.title}
        </h3>
        <p className="mt-2 text-[12px] tracking-[0.02em] text-[#cbd5e1]/75">
          {PUBLICATION.authors}
        </p>

        <p className="mt-4 text-[13.5px] leading-[1.65] text-[#cbd5e1]/80">
          {PUBLICATION.abstractShort}
        </p>

        <div className="mt-5">
          <span
            className="font-mono text-[10px] uppercase tracking-[0.3em]"
            style={{ color: VIOLET }}
          >
            — Finding
          </span>
          <p className="mt-2 text-[15px] italic leading-[1.5] text-[var(--color-text)]/95">
            {PUBLICATION.keyFinding}
          </p>
        </div>

        <div className="mt-5 flex items-baseline justify-between gap-3">
          <span className="font-mono text-[10.5px] tracking-[0.08em] text-[#64748b]">
            {PUBLICATION.hint}
          </span>
          <span
            className="text-[13px] tracking-[0.02em]"
            style={{ color: VIOLET }}
          >
            {PUBLICATION.cta} →
          </span>
        </div>
      </motion.a>

      <div className="relative mt-10 flex flex-col">
        {POSTS.map((p, i) => (
          <motion.a
            key={p.title}
            {...fadeUp(0.1 + i * 0.06)}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            className="relative block py-6 active:opacity-85"
          >
            {i === 0 && (
              <span aria-hidden className="absolute inset-x-0 top-0 h-px bg-[#1e293b]" />
            )}
            <span aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-[#1e293b]" />

            <div className="flex items-baseline gap-3">
              <span className="font-mono text-[11px] tracking-[0.3em] text-[#64748b]">
                0{i + 2}
              </span>
              <p className="font-mono text-[9px] font-medium uppercase tracking-[0.22em] text-[#94a3b8]/85">
                {p.tag}
              </p>
            </div>

            <h4 className="mt-2.5 text-[18px] font-semibold leading-[1.22] tracking-[-0.005em] text-[var(--color-text)]">
              {p.title}
            </h4>
            <p className="mt-2 text-[13px] leading-[1.55] text-[#cbd5e1]/70">
              {p.snippet}
            </p>

            <div className="mt-3 flex items-baseline justify-between">
              <span className="font-mono text-[10.5px] tracking-[0.08em] text-[#94a3b8]/70">
                {p.metric}
              </span>
              <span
                className="text-[12.5px] tracking-[0.02em]"
                style={{ color: VIOLET }}
              >
                Read →
              </span>
            </div>
          </motion.a>
        ))}
      </div>

      <motion.div {...fadeUp(0.25)} className="relative mt-10">
        <div className="flex items-center gap-2.5">
          <span aria-hidden className="h-px w-5 bg-[#1e293b]" />
          <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-[#64748b]">
            {COPY.moreOn}
          </span>
        </div>
        <div className="mt-4 flex items-center gap-6">
          <a
            href={LINKEDIN_PROFILE_HREF}
            target="_blank"
            rel="noreferrer"
            className="text-[14px] tracking-[0.02em] text-[var(--color-text)]/85 active:opacity-75"
          >
            LinkedIn →
          </a>
          <span aria-hidden className="h-px flex-1 bg-[#1e293b]" />
          <a
            href={GITHUB_PROFILE_HREF}
            target="_blank"
            rel="noreferrer"
            className="text-[14px] tracking-[0.02em] text-[var(--color-text)]/85 active:opacity-75"
          >
            GitHub →
          </a>
        </div>
      </motion.div>
    </section>
  );
}

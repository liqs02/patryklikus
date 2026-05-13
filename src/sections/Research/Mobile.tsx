import { motion } from "framer-motion";
import CPU from "./CPU";
import { renderHighlights } from "../../lib/highlights";
import { fadeUp } from "../../lib/motion";
import {
  COPY,
  GITHUB_PROFILE_HREF,
  LINKEDIN_PROFILE_HREF,
  PUBLICATION,
} from "./data";

const VIOLET = "#a78bfa";
const GREEN = "#10b981";

export default function ResearchMobile() {
  return (
    <section className="relative w-full overflow-hidden px-6 pt-24 pb-24 sm:px-10 lg:hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 85% 12%, rgba(167,139,250,0.10), transparent 50%), radial-gradient(circle at 12% 90%, rgba(167,139,250,0.06), transparent 55%)",
        }}
      />

      <motion.div {...fadeUp()} className="relative">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="inline-flex items-center gap-2">
            <span
              aria-hidden
              className="h-[6px] w-[6px] rounded-full"
              style={{
                backgroundColor: GREEN,
                boxShadow: `0 0 4px ${GREEN}cc, 0 0 8px ${GREEN}66`,
              }}
            />
            <span className="font-medium text-[9.5px] font-medium uppercase tracking-[0.3em] text-[#cbd5e1]/85">
              {PUBLICATION.chip}
            </span>
          </span>
          <span aria-hidden className="h-px w-4 bg-[#1e293b]" />
          <span className="font-medium text-[9.5px] uppercase tracking-[0.28em] text-[#64748b]">
            {PUBLICATION.venue}
          </span>
        </div>

        <h2 className="mt-7 text-[36px] font-bold leading-[1.05] tracking-[-0.02em] text-[var(--color-text)] sm:text-[44px]">
          {PUBLICATION.title}
        </h2>

        <p className="mt-6 text-[12.5px] tracking-[0.02em] text-[#cbd5e1]/75">
          {PUBLICATION.authors}
        </p>

        <p className="mt-7 text-[15px] leading-[1.6] text-[var(--color-muted)]">
          {renderHighlights(PUBLICATION.abstract)}
        </p>
      </motion.div>

      <motion.div {...fadeUp(0.1)} className="relative mt-12">
        <div className="flex items-center gap-2.5">
          <span aria-hidden className="h-px w-5" style={{ backgroundColor: `${VIOLET}55` }} />
          <span
            className="font-medium text-[10px] uppercase tracking-[0.32em]"
            style={{ color: VIOLET }}
          >
            Finding
          </span>
        </div>
        <p className="mt-4 text-[16px] italic leading-[1.55] text-[var(--color-text)]/95">
          {PUBLICATION.keyFinding}
        </p>
      </motion.div>

      <motion.div
        {...fadeUp(0.15)}
        className="relative mt-14 flex justify-center"
      >
        <div
          className="w-full max-w-[320px]"
          style={{ transform: "translateX(14px)" }}
        >
          <CPU
            tiltY={16}
            tiltX={16}
            ihsInsetTop={34}
            ihsInsetLeft={26}
            ihsInsetBottom={26}
            ihsInsetRight={34}
            animateEntry={false}
          />
        </div>
      </motion.div>

      <motion.div
        {...fadeUp(0.2)}
        className="relative mt-14 flex flex-wrap items-baseline gap-x-4 gap-y-2"
      >
        <span className="font-medium text-[10px] tracking-[0.08em] text-[#64748b]">
          {PUBLICATION.hint}
        </span>
        <span aria-hidden className="h-px w-7 bg-[#1e293b]" />
        <a
          href={PUBLICATION.href}
          target="_blank"
          rel="noreferrer"
          className="text-[15px] tracking-[0.01em] active:opacity-75"
          style={{ color: VIOLET }}
        >
          {PUBLICATION.cta} →
        </a>
      </motion.div>

      <motion.div {...fadeUp(0.28)} className="relative mt-16">
        <div className="flex items-center gap-2.5">
          <span aria-hidden className="h-px w-5 bg-[#1e293b]" />
          <span className="font-medium text-[10px] uppercase tracking-[0.32em] text-[#64748b]">
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

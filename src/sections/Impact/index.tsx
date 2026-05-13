import { motion } from "framer-motion";
import { renderHighlights } from "../../lib/highlights";
import { EASE, fadeIn, useSectionInView } from "../../lib/motion";
import CPU from "./CPU";
import {
  COPY,
  GITHUB_PROFILE_HREF,
  LINKEDIN_PROFILE_HREF,
  PUBLICATION,
} from "./data";

const VIOLET = "#a78bfa";

export default function Impact() {
  const { sectionRef, inView } = useSectionInView();
  const a = (delay: number) => fadeIn(inView, delay);

  return (
    <section
      ref={sectionRef}
      className="relative hidden min-h-screen w-full overflow-hidden bg-[var(--color-bg)] lg:block lg:[scroll-snap-align:start] lg:[scroll-snap-stop:always]"
    >
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 1.2, ease: EASE, delay: 0.15 }}
        style={{
          background:
            "radial-gradient(circle at 85% 30%, rgba(167,139,250,0.10), transparent 45%), radial-gradient(circle at 12% 78%, rgba(167,139,250,0.06), transparent 48%), radial-gradient(ellipse at 50% 0%, rgba(15,23,42,0.55), transparent 55%)",
        }}
        className="pointer-events-none absolute inset-0"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#1e293b] to-transparent"
      />

      <div className="relative mx-auto flex min-h-screen max-w-[1500px] flex-col px-12 pb-14 xl:px-20">
        <div className="flex flex-1 items-center">
          <div className="grid w-full grid-cols-12 items-center gap-x-16">
            <div className="col-span-8 flex flex-col">
              <motion.div
                {...a(0.1)}
                aria-hidden
                className="mb-7 flex flex-wrap items-center gap-x-4 gap-y-2"
              >
                <span className="inline-flex items-center gap-2">
                  <span
                    className="h-[7px] w-[7px] rounded-full"
                    style={{
                      backgroundColor: "#10b981",
                      boxShadow: "0 0 5px #10b981cc, 0 0 10px #10b98166",
                    }}
                  />
                  <span className="font-mono text-[10.5px] font-medium uppercase tracking-[0.32em] text-[#cbd5e1]/85">
                    {PUBLICATION.chip}
                  </span>
                </span>
                <span aria-hidden className="h-px w-6 bg-[#1e293b]" />
                <span className="font-mono text-[10.5px] uppercase tracking-[0.32em] text-[#64748b]">
                  {PUBLICATION.venue}
                </span>
              </motion.div>
              <motion.h2
                {...a(0.18)}
                className="text-[60px] font-bold leading-[1.05] tracking-[-0.02em] text-[var(--color-text)]"
              >
                {PUBLICATION.title}
              </motion.h2>

              <motion.p
                {...a(0.34)}
                className="mt-6 text-[13.5px] tracking-[0.02em] text-[#cbd5e1]/75"
              >
                {PUBLICATION.authors}
              </motion.p>

              <motion.p
                {...a(0.44)}
                className="mt-6 max-w-[600px] text-[17px] leading-[1.55] text-[var(--color-muted)]"
              >
                {renderHighlights(PUBLICATION.abstract)}
              </motion.p>

            <motion.div {...a(0.6)} className="mt-8">
              <span
                className="font-mono text-[10px] uppercase tracking-[0.32em]"
                style={{ color: VIOLET }}
              >
                Finding
              </span>
              <p className="mt-3 max-w-[560px] text-[17px] italic leading-[1.5] text-[var(--color-text)]/95">
                {PUBLICATION.keyFinding}
              </p>
            </motion.div>

            <motion.div
              {...a(0.7)}
              className="mt-12 flex items-baseline gap-5"
            >
              <span className="font-mono text-[10.5px] tracking-[0.08em] text-[#64748b]">
                {PUBLICATION.hint}
              </span>
              <span aria-hidden className="h-px w-10 bg-[#1e293b]" />
              <a
                href={PUBLICATION.href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center text-[17px] tracking-[0.01em] transition-colors"
                style={{ color: VIOLET, ["--violet" as string]: VIOLET }}
              >
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  {PUBLICATION.cta} →
                </span>
              </a>
            </motion.div>
          </div>

            <motion.div {...a(0.5)} className="col-span-4">
              <CPU />
            </motion.div>
          </div>
        </div>

        <motion.div
          {...a(0.85)}
          className="mt-10 flex items-center justify-between"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-[#64748b]">
            {COPY.moreOn}
          </span>
          <div className="flex items-center gap-10">
            <a
              href={LINKEDIN_PROFILE_HREF}
              target="_blank"
              rel="noreferrer"
              className="text-[14px] tracking-[0.02em] text-[var(--color-text)]/85 transition-colors hover:text-[color:var(--violet)]"
              style={{ ["--violet" as string]: VIOLET }}
            >
              LinkedIn →
            </a>
            <span aria-hidden className="h-px w-12 bg-[#1e293b]" />
            <a
              href={GITHUB_PROFILE_HREF}
              target="_blank"
              rel="noreferrer"
              className="text-[14px] tracking-[0.02em] text-[var(--color-text)]/85 transition-colors hover:text-[color:var(--violet)]"
              style={{ ["--violet" as string]: VIOLET }}
            >
              GitHub →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

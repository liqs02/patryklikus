import { motion } from "framer-motion";
import { fadeIn, useSectionInView } from "../../lib/motion";
import {
  GITHUB_PROFILE_HREF,
  LINKEDIN_PROFILE_HREF,
  POSTS,
  PUBLICATION,
} from "./data";

const VIOLET = "#a78bfa";

export default function Impact() {
  const { sectionRef, inView } = useSectionInView();
  const a = (delay: number) => fadeIn(inView, delay);

  return (
    <section
      ref={sectionRef}
      className="relative hidden h-screen w-full overflow-hidden bg-[var(--color-bg)] lg:block lg:[scroll-snap-align:start] lg:[scroll-snap-stop:always]"
    >
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
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

      <div className="relative mx-auto flex h-full max-w-[1500px] flex-col px-12 pt-[10vh] pb-14 xl:px-20">
        <div className="flex items-end justify-between">
          <div className="max-w-[760px]">
            <motion.div
              {...a(0.1)}
              className="flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase"
            >
              <span style={{ color: VIOLET }}>Impact</span>
              <span aria-hidden className="h-px w-10" style={{ backgroundColor: `${VIOLET}55` }} />
              <span className="text-[#64748b]">03 / 03</span>
            </motion.div>
            <motion.h2
              {...a(0.18)}
              className="mt-5 text-[64px] font-bold leading-[1.02] tracking-[-0.02em] text-[var(--color-text)]"
            >
              Sharing <span style={{ color: VIOLET }}>what I learn</span>.
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.5, delay: inView ? 0.3 : 0 }}
              style={{ transformOrigin: "left", backgroundColor: VIOLET }}
              className="mt-4 h-[3px] w-[88px] rounded-sm"
            />
            <motion.p
              {...a(0.4)}
              className="mt-5 max-w-[540px] text-[15px] leading-relaxed text-[var(--color-muted)]"
            >
              A peer-reviewed paper and a couple of posts that resonated.
            </motion.p>
          </div>

        </div>

        <div className="mt-14 flex flex-1 items-start">
          <div className="grid w-full grid-cols-12 gap-x-12 gap-y-10">
            {/* Featured publication — editorial column, no card chrome */}
            <motion.a
              {...a(0.5)}
              href={PUBLICATION.href}
              target="_blank"
              rel="noreferrer"
              className="group relative col-span-7 flex flex-col"
              style={{ ["--violet" as string]: VIOLET }}
            >
              <div className="flex items-baseline gap-5">
                <span className="font-mono text-[11px] tracking-[0.3em] text-[#64748b]">01</span>
                <span aria-hidden className="h-px flex-1 bg-[#1e293b]" />
                <span
                  className="text-[10px] font-medium uppercase tracking-[0.28em]"
                  style={{ color: VIOLET }}
                >
                  {PUBLICATION.chip}
                </span>
              </div>

              <p className="mt-7 text-[10.5px] uppercase tracking-[0.32em] text-[#64748b]">
                {PUBLICATION.venue}
              </p>
              <h3
                className="mt-3 text-[40px] font-bold leading-[1.05] tracking-[-0.015em] text-[var(--color-text)] transition-colors duration-300 group-hover:text-[color:var(--violet)]"
              >
                {PUBLICATION.title}
              </h3>
              <p className="mt-3 text-[12.5px] tracking-[0.02em] text-[#cbd5e1]/75">
                {PUBLICATION.authors}
              </p>

              <p className="mt-6 max-w-[640px] text-[13.5px] leading-[1.7] text-[#cbd5e1]/80">
                {PUBLICATION.abstractFull}
              </p>

              <div className="mt-7 flex items-baseline gap-4">
                <span
                  className="font-mono text-[10px] uppercase tracking-[0.3em] whitespace-nowrap"
                  style={{ color: VIOLET }}
                >
                  — Finding
                </span>
                <p className="text-[16px] italic leading-[1.55] text-[var(--color-text)]/95">
                  {PUBLICATION.keyFinding}
                </p>
              </div>

              <div className="mt-7 flex items-baseline justify-between">
                <span className="font-mono text-[10.5px] tracking-[0.08em] text-[#64748b]">
                  {PUBLICATION.hint}
                </span>
                <span
                  className="text-sm tracking-[0.02em] transition-transform duration-300 group-hover:translate-x-1"
                  style={{ color: VIOLET }}
                >
                  {PUBLICATION.cta} →
                </span>
              </div>
            </motion.a>

            {/* Posts — index list with hairlines */}
            <div className="col-span-5 flex flex-col">
              {POSTS.map((p, i) => (
                <motion.a
                  key={p.title}
                  {...a(0.62 + i * 0.1)}
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative flex flex-col py-7"
                  style={{ ["--violet" as string]: VIOLET }}
                >
                  {i === 0 && (
                    <span aria-hidden className="absolute inset-x-0 top-0 h-px bg-[#1e293b]" />
                  )}
                  <span aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-[#1e293b]" />
                  <span
                    aria-hidden
                    className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                    style={{ backgroundColor: VIOLET }}
                  />

                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-[11px] tracking-[0.3em] text-[#64748b]">
                      0{i + 2}
                    </span>
                    <p
                      className="text-[9.5px] font-medium uppercase tracking-[0.22em] text-[#94a3b8]/85"
                    >
                      {p.tag}
                    </p>
                  </div>

                  <h4
                    className="mt-3 text-[20px] font-semibold leading-[1.2] tracking-[-0.005em] text-[var(--color-text)] transition-colors duration-300 group-hover:text-[color:var(--violet)]"
                  >
                    {p.title}
                  </h4>
                  <p className="mt-2 text-[12.5px] leading-[1.55] text-[#cbd5e1]/70">
                    {p.snippet}
                  </p>

                  <div className="mt-4 flex items-baseline justify-between">
                    <span className="font-mono text-[10.5px] tracking-[0.08em] text-[#94a3b8]/70">
                      {p.metric}
                    </span>
                    <span
                      className="text-xs tracking-[0.02em] transition-transform duration-300 group-hover:translate-x-1"
                      style={{ color: VIOLET }}
                    >
                      Read →
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          {...a(0.85)}
          className="mt-10 flex items-center justify-between"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-[#64748b]">
            More on
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

import { motion } from "framer-motion";
import AccentUnderline from "../../components/AccentUnderline";
import { EASE, fadeIn, useSectionInView } from "../../lib/motion";
import { formatLong } from "../../lib/format";
import { COPY, RECOMMENDATIONS_HREF, THEMES } from "./data";

export default function Beyond() {
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
        transition={{ duration: 1.1, ease: EASE, delay: 0.15 }}
        style={{
          background:
            "radial-gradient(circle at 18% 70%, rgba(16,185,129,0.06), transparent 42%), radial-gradient(circle at 50% 78%, rgba(245,158,11,0.06), transparent 42%), radial-gradient(circle at 82% 70%, rgba(167,139,250,0.06), transparent 42%), radial-gradient(ellipse at 50% 0%, rgba(15,23,42,0.55), transparent 55%)",
        }}
        className="pointer-events-none absolute inset-0"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#1e293b] to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#1e293b] to-transparent"
      />
      <div className="relative mx-auto flex min-h-screen max-w-[1500px] flex-col px-12 pt-[10vh] pb-14 xl:px-20">
        <div className="max-w-[700px]">
          <motion.h2
            {...a(0.15)}
            className="text-[64px] font-bold leading-[1.02] tracking-[-0.02em] text-[var(--color-text)]"
          >
            {COPY.titleStart}<span className="text-[var(--color-amber)]">{COPY.titleAccent}</span>{COPY.titleEnd}
          </motion.h2>
        </div>

        <div className="mt-12 flex flex-1 flex-col justify-center">
          <div className="mx-auto mb-6 w-full max-w-[1200px]">
            <motion.div
              {...a(0.18)}
              className="h-px"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(148,163,184,0.22) 8%, rgba(148,163,184,0.22) 92%, transparent)",
              }}
            />
            <div className="grid grid-cols-3 gap-6">
              {THEMES.map((t, i) => (
                <motion.div
                  key={`rail-${t.id}`}
                  {...a(0.22 + i * 0.06)}
                  className="flex flex-col items-center"
                >
                  <span
                    className="-mt-[5px] h-[10px] w-[10px] rounded-full"
                    style={{
                      backgroundColor: t.accent,
                      boxShadow: `0 0 4px ${t.accent}, 0 0 12px ${t.accent}aa, 0 0 24px ${t.accent}55`,
                    }}
                  />
                  <span
                    className="mt-2 h-10 w-px"
                    style={{
                      background: `linear-gradient(to bottom, ${t.accent}88, transparent)`,
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
          <div className="mx-auto w-full max-w-[1200px]">
            <div className="grid grid-cols-3 gap-6">
              {THEMES.map((t, i) => (
                <motion.article
                  key={t.id}
                  {...a(0.4 + i * 0.08)}
                  className="group relative flex flex-col overflow-hidden rounded-xl border border-[#1e293b] bg-[#0e1116] transition-colors duration-300 hover:border-[color:var(--card-accent)]/40"
                  style={{ "--card-accent": t.accent } as never}
                >
                  <div
                    className="absolute inset-x-0 top-0 h-[2px]"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${t.accent}, transparent)`,
                    }}
                  />
                  <div
                    className="pointer-events-none absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full opacity-[0.08] blur-3xl transition-opacity duration-300 group-hover:opacity-[0.18]"
                    style={{ backgroundColor: t.accent }}
                  />

                  <div className="flex items-center gap-2 px-7 pt-7">
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: t.accent }}
                    />
                    <p
                      className="text-[10px] font-semibold tracking-[0.22em]"
                      style={{ color: t.accent }}
                    >
                      {t.theme}
                    </p>
                  </div>

                  <div className="px-7 pt-5">
                    <p className="text-[52px] font-bold leading-none tracking-tight text-[var(--color-text)] tabular-nums">
                      {formatLong(t.stat.value)}
                      {t.stat.suffix ?? ""}
                    </p>
                    <p className="mt-3 text-[13px] text-[#cbd5e1]/85">
                      {t.stat.label}
                    </p>
                    <p className="mt-1 text-[11px] text-[#64748b]">
                      {t.stat.sublabel}
                    </p>
                  </div>

                  <div
                    className="mx-7 my-6 h-px"
                    style={{
                      background: `linear-gradient(90deg, ${t.accent}33, transparent)`,
                    }}
                  />

                  <div className="flex flex-1 flex-col px-7 pb-7">
                    <p className="text-[13px] italic leading-[1.6] text-[#cbd5e1]/85">
                      “{t.quote.body}”
                    </p>
                    <div className="mt-auto pt-6">
                      <p className="text-[13px] font-bold text-[var(--color-text)]">
                        {t.quote.author}
                      </p>
                      <p className="mt-1 text-[11px] text-[#64748b]">
                        {t.quote.role}
                      </p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.8 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="mt-8 text-center"
            >
              <a
                href={RECOMMENDATIONS_HREF}
                target="_blank"
                rel="noreferrer"
                className="inline-block text-[13px] tracking-[0.3px] text-[var(--color-amber)] transition-opacity hover:opacity-80"
              >
                {COPY.cta}
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { formatLong } from "../../lib/format";
import { fadeUp } from "../../lib/motion";
import { COPY, RECOMMENDATIONS_HREF, THEMES } from "./data";

export default function BeyondMobile() {
  return (
    <section className="relative w-full overflow-hidden px-6 pt-16 pb-20 sm:px-10 lg:hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 85% 8%, rgba(16,185,129,0.08), transparent 45%), radial-gradient(circle at 12% 42%, rgba(245,158,11,0.07), transparent 45%), radial-gradient(circle at 80% 78%, rgba(167,139,250,0.08), transparent 45%)",
        }}
      />

      <motion.div {...fadeUp()} className="relative">
        <div className="flex items-center gap-2.5">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-amber)]">
            {COPY.eyebrow}
          </span>
          <span aria-hidden className="h-px w-8 bg-[var(--color-amber)]/40" />
          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#64748b]">
            {COPY.counter}
          </span>
        </div>
        <h2 className="mt-4 text-[40px] font-bold leading-[1.04] tracking-[-0.02em] text-[var(--color-text)]">
          {COPY.titleStart}<span className="text-[var(--color-amber)]">{COPY.titleAccent}</span>{COPY.titleEnd}
        </h2>
        <div
          aria-hidden
          className="mt-4 h-[3px] w-[64px] rounded-sm bg-[var(--color-amber)]"
        />
        <p className="mt-4 text-[14px] leading-[1.6] text-[var(--color-muted)]">
          {COPY.subtitle}
        </p>
      </motion.div>

      <div className="relative mt-10 flex flex-col gap-5">
        {THEMES.map((t, i) => (
          <motion.article
            key={t.id}
            {...fadeUp(0.05 + i * 0.05)}
            className="relative overflow-hidden rounded-xl border border-[#1e293b] bg-[#0e1116]"
          >
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 h-[2px]"
              style={{
                background: `linear-gradient(90deg, transparent, ${t.accent}, transparent)`,
              }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -top-16 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full opacity-[0.10] blur-3xl"
              style={{ backgroundColor: t.accent }}
            />

            <div className="relative px-5 pt-5">
              <div className="flex items-center gap-2">
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: t.accent }}
                />
                <p
                  className="font-mono text-[10px] font-semibold tracking-[0.22em]"
                  style={{ color: t.accent }}
                >
                  {t.theme}
                </p>
              </div>

              <p className="mt-3 text-[42px] font-bold leading-none tracking-tight tabular-nums text-[var(--color-text)]">
                {formatLong(t.stat.value)}
                {t.stat.suffix ?? ""}
              </p>
              <p className="mt-2.5 text-[13px] text-[#cbd5e1]/85">
                {t.stat.label}
              </p>
              <p className="mt-0.5 text-[11px] text-[#64748b]">
                {t.stat.sublabel}
              </p>
            </div>

            <div
              aria-hidden
              className="mx-5 my-5 h-px"
              style={{
                background: `linear-gradient(90deg, ${t.accent}33, transparent)`,
              }}
            />

            <div className="relative px-5 pb-5">
              <p className="text-[13px] italic leading-[1.6] text-[#cbd5e1]/85">
                "{t.quote.body}"
              </p>
              <div className="mt-4">
                <p className="text-[13px] font-bold text-[var(--color-text)]">
                  {t.quote.author}
                </p>
                <p className="mt-0.5 text-[11px] text-[#64748b]">
                  {t.quote.role}
                </p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div {...fadeUp(0.3)} className="relative mt-8 text-center">
        <a
          href={RECOMMENDATIONS_HREF}
          target="_blank"
          rel="noreferrer"
          className="inline-block text-[13px] tracking-[0.3px] text-[var(--color-amber)] active:opacity-75"
        >
          {COPY.cta}
        </a>
      </motion.div>
    </section>
  );
}

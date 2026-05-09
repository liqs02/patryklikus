import { POSTS, PUBLICATION } from "./data";
import {
  GITHUB_PROFILE_URL,
  LINKEDIN_PROFILE_URL,
} from "../../data/links";

export default function ImpactMobile() {
  return (
    <section className="relative w-full px-6 py-16 sm:px-10 lg:hidden">
      <p className="text-[11px] uppercase tracking-[0.12em] text-[var(--color-accent)]">
        Impact
      </p>
      <h2 className="mt-3 text-[32px] font-bold leading-tight text-[var(--color-text)]">
        Sharing what I learn
      </h2>
      <div className="mt-3 h-[3px] w-[56px] rounded-sm bg-[var(--color-accent)]" />
      <p className="mt-4 text-[14px] leading-snug text-[var(--color-muted)]">
        A peer-reviewed paper and a couple of posts that resonated.
      </p>

      <a
        href={PUBLICATION.href}
        target="_blank"
        rel="noreferrer"
        className="relative mt-8 flex flex-col overflow-hidden rounded-xl border border-[#1e293b] bg-[#0e1116] p-6"
      >
        <span
          aria-hidden
          className="absolute inset-x-0 top-0 h-[3px] bg-[var(--color-accent)]"
        />
        <span className="inline-flex h-[24px] w-fit items-center rounded-[12px] border border-[var(--color-accent)]/40 bg-[var(--color-accent)]/[0.12] px-3 text-[10px] font-medium uppercase tracking-[1.2px] text-[var(--color-accent)]">
          {PUBLICATION.chip}
        </span>
        <p className="mt-5 text-[11px] uppercase tracking-[0.4px] text-[var(--color-muted)]/90">
          {PUBLICATION.venue}
        </p>
        <h3 className="mt-2 text-[22px] font-bold leading-tight text-[var(--color-text)]">
          {PUBLICATION.title}
        </h3>
        <p className="mt-3 text-[12px] text-[#cbd5e1]/85">
          {PUBLICATION.authors}
        </p>
        <p className="mt-3 text-[13px] leading-snug text-[#cbd5e1]/85">
          {PUBLICATION.abstractShort}
        </p>

        <div className="mt-4 border-l-[3px] border-[var(--color-accent)]/60 pl-3">
          <p className="text-[9px] font-bold uppercase tracking-[1.2px] text-[var(--color-accent)]/90">
            KEY FINDING
          </p>
          <p className="mt-1 text-[12px] text-[var(--color-text)]/90">
            {PUBLICATION.keyFinding}
          </p>
        </div>

        <span className="mt-5 self-end text-[13px] text-[var(--color-accent)]">
          {PUBLICATION.cta} →
        </span>
      </a>

      <div className="mt-5 flex flex-col gap-4">
        {POSTS.map((p) => (
          <a
            key={p.title}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col rounded-xl border border-[#1e293b] bg-[#0e1116] p-5"
          >
            <p className="text-[9px] font-medium uppercase tracking-[1px] text-[var(--color-accent)]/80">
              {p.tag}
            </p>
            <h4 className="mt-2 text-[16px] leading-tight text-[var(--color-text)]">
              {p.title}
            </h4>
            <p className="mt-2 text-[12px] leading-snug text-[#cbd5e1]/70">
              {p.snippet}
            </p>
            <div className="mt-3 flex items-baseline justify-between">
              <span className="text-[11px] tracking-[0.3px] text-[#94a3b8]/70">
                {p.metric}
              </span>
              <span className="text-[12px] text-[var(--color-accent)]/90">
                Read →
              </span>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center gap-10">
        <a
          href={LINKEDIN_PROFILE_URL}
          target="_blank"
          rel="noreferrer"
          className="text-[14px] text-[var(--color-accent)]"
        >
          LinkedIn →
        </a>
        <a
          href={GITHUB_PROFILE_URL}
          target="_blank"
          rel="noreferrer"
          className="text-[14px] text-[var(--color-accent)]"
        >
          GitHub →
        </a>
      </div>
    </section>
  );
}

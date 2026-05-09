import { motion } from "framer-motion";
import Timeline from "../../components/Timeline";
import { EntryType, TIMELINE } from "../../data/timeline";
import { GITHUB_PROFILE_URL, LINKEDIN_PROFILE_URL } from "../../data/links";
import { fade } from "./fade";

const SKILLS_ROW_1 = ["Java", "Spring Boot", "K8s", "Azure"];
const SKILLS_ROW_2 = ["Kafka", "PostgreSQL", "Redis"];

const HERO_TIMELINE = TIMELINE.filter(
  (e) => e.type !== EntryType.Education,
).map((e) => (e.active ? { ...e, year: `${e.year} →` } : e));

export default function HeroMobile() {
  return (
    <div className="relative flex min-h-screen flex-col justify-between px-6 py-24 sm:px-10 sm:py-28 lg:hidden">
      <motion.div {...fade(0.05)}>
        <h1 className="text-[44px] font-bold leading-[1.05] tracking-tight text-[var(--color-text)] sm:text-6xl">
          Patryk Likus
        </h1>
        <div className="mt-5 h-[3px] w-[64px] rounded-sm bg-[var(--color-accent)]" />
        <p className="mt-5 text-[22px] font-medium text-[var(--color-accent)]">
          Software Engineer
        </p>
        <p className="mt-4 text-[15px] leading-snug text-[var(--color-muted)]">
          Building data-heavy systems, from global maps to emergency dispatch.
        </p>
      </motion.div>

      <motion.div {...fade(0.15)} className="mt-10">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]/70">
          Stack
        </p>
        <p className="mt-3 text-[14px] leading-relaxed text-[#cbd5e1]/90">
          {SKILLS_ROW_1.join("  ·  ")}
        </p>
        <p className="mt-1 text-[14px] leading-relaxed text-[#cbd5e1]/90">
          {SKILLS_ROW_2.join("  ·  ")}
        </p>
      </motion.div>

      <motion.div {...fade(0.25)} className="mt-10">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--color-accent)]/70">
          Timeline
        </p>
        <div className="mt-3">
          <Timeline entries={HERO_TIMELINE} />
        </div>
      </motion.div>

      <motion.div {...fade(0.35)} className="mt-10 flex flex-col gap-3">
        <a
          href="#experience"
          className="inline-flex h-[52px] w-full items-center justify-center gap-2 rounded-lg bg-[var(--color-accent)] text-[15px] font-semibold text-[#0a0a0f] transition-colors hover:bg-[var(--color-accent)]/90"
        >
          View Experience
          <span aria-hidden>↓</span>
        </a>
        <a
          href="https://linkedin.com/in/patryklikus"
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-[52px] w-full items-center justify-center gap-2 rounded-lg border-[1.5px] border-[var(--color-accent)] text-[15px] font-semibold text-[var(--color-accent)] transition-colors hover:bg-[var(--color-accent)]/[0.08]"
        >
          LinkedIn
          <span aria-hidden>↗</span>
        </a>
      </motion.div>

      <motion.p
        {...fade(0.45)}
        className="mt-8 text-center text-[12px] text-[#475569]"
      >
        <a
          href={GITHUB_PROFILE_URL}
          target="_blank"
          rel="noreferrer"
          className="transition-colors active:text-[var(--color-accent)]"
        >
          github.com/liqs02
        </a>
        {" · "}
        <a
          href={LINKEDIN_PROFILE_URL}
          target="_blank"
          rel="noreferrer"
          className="transition-colors active:text-[var(--color-accent)]"
        >
          linkedin.com/in/patryklikus
        </a>
      </motion.p>
    </div>
  );
}

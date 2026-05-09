import { motion } from "framer-motion";
import Chip from "../../components/Chip";
import Timeline from "../../components/Timeline";
import { EntryType, TIMELINE } from "../../data/timeline";
import { GITHUB_PROFILE_URL, LINKEDIN_PROFILE_URL } from "../../data/links";
import { fade } from "./fade";

const SKILLS = [
  "Java",
  "Spring Boot",
  "K8s",
  "Azure",
  "PostgreSQL",
  "Redis",
  "Kafka",
];

const SKILL_GROUPS_DESKTOP: string[][] = [];
for (let i = 0; i < SKILLS.length; i += 2) {
  SKILL_GROUPS_DESKTOP.push(SKILLS.slice(i, i + 2));
}

const HERO_TIMELINE = TIMELINE.filter(
  (e) => e.type !== EntryType.Education,
).map((e) => (e.active ? { ...e, year: `${e.year} →` } : e));

export default function LeftPanel() {
  return (
    <div className="relative flex flex-col justify-center px-6 py-16 sm:px-12 sm:py-24 lg:px-20">
      <div className="flex max-w-xl flex-col">
        <motion.h1
          {...fade(0.05)}
          className="text-[44px] font-bold leading-[1.1] tracking-tight text-[var(--color-text)] sm:text-6xl lg:text-[70px]"
        >
          Patryk Likus
        </motion.h1>

        <motion.div
          {...fade(0.1)}
          className="mt-6 h-[3px] w-[72px] rounded-sm bg-[var(--color-accent)]"
        />

        <motion.p
          {...fade(0.15)}
          className="mt-5 text-2xl font-medium text-[var(--color-accent)]"
        >
          Software Engineer
        </motion.p>

        <motion.p
          {...fade(0.2)}
          className="mt-6 max-w-[560px] text-[17px] leading-snug text-[var(--color-muted)]"
        >
          Building data-heavy systems, from global maps to emergency dispatch.
        </motion.p>

        <motion.p
          {...fade(0.25)}
          className="mt-8 text-[13px] leading-relaxed text-[#cbd5e1]/80 lg:hidden"
        >
          {SKILLS.join(" · ")}
        </motion.p>

        <motion.ul
          {...fade(0.25)}
          className="mt-10 hidden flex-wrap gap-2 lg:flex"
        >
          {SKILL_GROUPS_DESKTOP.map((group) => (
            <li key={group.join("|")}>
              <Chip label={group.join(" · ")} shape="pill" />
            </li>
          ))}
        </motion.ul>

        <motion.div
          {...fade(0.3)}
          className="order-2 mt-6 flex flex-col gap-3 sm:flex-row sm:gap-4 lg:order-none"
        >
          <a
            href="#experience"
            className="inline-flex h-[50px] w-full items-center justify-center rounded-lg bg-[var(--color-accent)] text-[15px] font-medium text-[#0a0a0f] transition-colors hover:bg-[var(--color-accent)]/90 sm:w-auto sm:max-w-[196px] sm:flex-1"
          >
            View Experience
          </a>
          <a
            href="https://linkedin.com/in/patryklikus"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-[50px] w-full items-center justify-center rounded-lg border-[1.5px] border-[var(--color-accent)] text-[15px] font-medium text-[var(--color-accent)] transition-colors hover:bg-[var(--color-accent)]/[0.08] sm:w-auto sm:max-w-[196px] sm:flex-1"
          >
            LinkedIn →
          </a>
        </motion.div>

        <motion.div {...fade(0.35)} className="order-1 mt-7 lg:order-none">
          <Timeline entries={HERO_TIMELINE} />
        </motion.div>

        <motion.p
          {...fade(0.4)}
          className="order-3 mt-12 text-center text-xs text-[#475569] sm:text-left lg:order-none"
        >
          <a
            href={GITHUB_PROFILE_URL}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-[var(--color-accent)]"
          >
            github.com/liqs02
          </a>
          {" · "}
          <a
            href={LINKEDIN_PROFILE_URL}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-[var(--color-accent)]"
          >
            linkedin.com/in/patryklikus
          </a>
        </motion.p>
      </div>
    </div>
  );
}

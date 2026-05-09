import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AccentUnderline from "../../components/AccentUnderline";
import { fadeIn, useSectionInView } from "../../lib/motion";

const HOVER_READY =
  "transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)]/30 hover:shadow-[0_12px_30px_-12px_rgba(45,212,191,0.25)]";

const PUBLICATION = {
  chip: "PEER-REVIEWED",
  venue: "ECMS 2025  ·  European Conference on Modelling and Simulation",
  title: "Analysis of Virtual Threads in Spring Applications",
  authors: "Lead author  ·  Patryk Likus  ·  with Filip Krużel (CUT)",
  abstract:
    "Empirical comparison of Java 21 virtual threads against traditional platform threads in Spring REST APIs. Tests sweep across different mixes of computational work and I/O wait, throughput levels, and JVM choices — run on Spring Boot 3.4 + JDK 21 with Gatling load tests in controlled Docker workloads.",
  keyFinding:
    "Virtual threads ≠ free scalability — gains depend on workload mix.",
  cta: "Read the paper",
  href: "https://github.com/liqs02/research/blob/master/ecms2025.pdf",
  hint: "GitHub  ·  ecms2025.pdf",
};

type Post = {
  tag: string;
  title: string;
  snippet: string;
  metric: string;
  href: string;
};

const POSTS: Post[] = [
  {
    tag: "LINKEDIN POST  ·  JAVA QUIZ",
    title: "Non-static inner class instantiation",
    snippet:
      "A quick quiz that surfaced how rarely we reach for non-static inner classes in modern Java.",
    metric: "40+ reactions",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7432017165056307201/",
  },
  {
    tag: "LINKEDIN POST  ·  EXPLAINER",
    title: "How Spring + Virtual Threads scale blocking code",
    snippet:
      "A walkthrough of platform vs virtual threads — write simple blocking code, get high concurrency.",
    metric: "20+ reactions",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7424492459734487040/",
  },
];

export default function Impact() {
  const { sectionRef, inView } = useSectionInView();
  const [hoverReady, setHoverReady] = useState(false);

  useEffect(() => {
    if (!inView) {
      setHoverReady(false);
      return;
    }
    const t = setTimeout(() => setHoverReady(true), 1300);
    return () => clearTimeout(t);
  }, [inView]);

  const a = (delay: number) => fadeIn(inView, delay);

  return (
    <section
      ref={sectionRef}
      className="relative hidden h-screen w-full lg:block lg:[scroll-snap-align:start] lg:[scroll-snap-stop:always]"
    >
      <div className="mx-auto flex h-full max-w-[1500px] flex-col px-12 pt-[10vh] pb-14 xl:px-20">
        <div className="max-w-[700px]">
          <motion.p
            {...a(0.1)}
            className="text-[11px] text-[var(--color-accent)]"
          >
            Impact
          </motion.p>
          <motion.h2
            {...a(0.15)}
            className="mt-4 text-[44px] font-bold leading-tight text-[var(--color-text)]"
          >
            Sharing what I learn
          </motion.h2>
          <AccentUnderline inView={inView} />
          <motion.p
            {...a(0.35)}
            className="mt-4 text-[15px] text-[var(--color-muted)]"
          >
            A peer-reviewed paper and a couple of posts that resonated.
          </motion.p>
        </div>

        <div className="flex flex-1 flex-col justify-center">
          <div className="mx-auto grid w-full max-w-[1280px] grid-cols-[1.25fr_1fr] gap-8">
            <motion.a
              {...a(0.4)}
              href={PUBLICATION.href}
              target="_blank"
              rel="noreferrer"
              className={`group relative flex flex-col rounded-xl border border-[#1e293b] bg-[#0e1116] p-7 ${hoverReady ? HOVER_READY : ""}`}
            >
              <span className="inline-flex h-[26px] w-fit items-center rounded-[13px] border border-[var(--color-accent)]/40 bg-[var(--color-accent)]/[0.12] px-3 text-[10px] font-medium uppercase tracking-[1.2px] text-[var(--color-accent)]">
                {PUBLICATION.chip}
              </span>
              <p className="mt-6 text-xs uppercase tracking-[0.4px] text-[var(--color-muted)]/90">
                {PUBLICATION.venue}
              </p>
              <h3 className="mt-3 text-[28px] font-bold leading-tight text-[var(--color-text)]">
                {PUBLICATION.title}
              </h3>
              <p className="mt-4 text-[13px] text-[#cbd5e1]/85">
                {PUBLICATION.authors}
              </p>
              <p className="mt-3 text-sm leading-snug text-[#cbd5e1]/85">
                {PUBLICATION.abstract}
              </p>

              <div className="mt-5 flex border-l-[3px] border-[var(--color-accent)]/60 pl-4">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[1.2px] text-[var(--color-accent)]/90">
                    KEY FINDING
                  </p>
                  <p className="mt-1.5 text-[13px] text-[var(--color-text)]/90">
                    {PUBLICATION.keyFinding}
                  </p>
                </div>
              </div>

              <div className="mt-auto flex items-baseline justify-between pt-5">
                <span className="text-[11px] text-[var(--color-muted)]/50">
                  {PUBLICATION.hint}
                </span>
                <span className="text-sm text-[var(--color-accent)]">
                  {PUBLICATION.cta} →
                </span>
              </div>
            </motion.a>

            <div className="flex flex-col gap-6">
              {POSTS.map((p, i) => (
                <motion.a
                  key={p.title}
                  {...a(0.5 + i * 0.08)}
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`group relative flex h-[190px] flex-col rounded-xl border border-[#1e293b] bg-[#0e1116] p-5 ${hoverReady ? HOVER_READY : ""}`}
                >
                  <p className="text-[9px] font-medium uppercase tracking-[1px] text-[var(--color-accent)]/80">
                    {p.tag}
                  </p>
                  <h4 className="mt-2 text-lg leading-tight text-[var(--color-text)]">
                    {p.title}
                  </h4>
                  <p className="mt-4 text-[13px] leading-snug text-[#cbd5e1]/70">
                    {p.snippet}
                  </p>
                  <div className="mt-auto flex items-baseline justify-between">
                    <span className="text-[11px] tracking-[0.3px] text-[#94a3b8]/70">
                      {p.metric}
                    </span>
                    <span className="text-xs text-[var(--color-accent)]/90">
                      Read →
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          <motion.div
            {...a(0.7)}
            className="mx-auto mt-10 flex w-full max-w-[1280px] items-center justify-center gap-12"
          >
            <a
              href="https://linkedin.com/in/patryklikus"
              target="_blank"
              rel="noreferrer"
              className="text-[15px] tracking-[0.2px] text-[var(--color-accent)] transition-opacity hover:opacity-80"
            >
              LinkedIn →
            </a>
            <a
              href="https://github.com/liqs02"
              target="_blank"
              rel="noreferrer"
              className="text-[15px] tracking-[0.2px] text-[var(--color-accent)] transition-opacity hover:opacity-80"
            >
              GitHub →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import AccentUnderline from "../../components/AccentUnderline";
import { fadeIn, useSectionInView } from "../../lib/motion";

const SOFTWARE_START_YEAR = 2021;
const yearsWriting = `${new Date().getFullYear() - SOFTWARE_START_YEAR}+`;

type Stat = {
  value: string;
  label: string;
  sublabel: string;
};

const STATS: Stat[] = [
  {
    value: yearsWriting,
    label: "years writing software",
    sublabel: `since ${SOFTWARE_START_YEAR}`,
  },
  {
    value: "50,000+",
    label: "lines across private projects",
    sublabel: "always cooking",
  },
  {
    value: "10,000+",
    label: "flashcard reviews",
    sublabel: "Anki, since mid-2025",
  },
];

type Quote = {
  theme: string;
  body: string;
  author: string;
  role: string;
};

const QUOTES: Quote[] = [
  {
    theme: "SKILL",
    body: "He had a natural talent for solving complex technical problems. In no time, Patryk mastered new technologies and applied them with precision.",
    author: "Iwona S.",
    role: "Senior Software Engineer",
  },
  {
    theme: "PASSION",
    body: "Working with Patryk means working with someone whose passion for programming truly stands out. He frequently brings forward ideas that reflect the latest industry trends.",
    author: "Tomasz W.",
    role: "Tech Leader",
  },
  {
    theme: "GROWTH",
    body: "What impressed me most is how quickly he turned initial inexperience into strength — learning from tough feedback, adapting rapidly, and consistently delivering clean, well-architected solutions.",
    author: "Mateusz S.",
    role: "Senior Software Engineer",
  },
];

export default function Beyond() {
  const { sectionRef, inView } = useSectionInView();
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
            Beyond
          </motion.p>
          <motion.h2
            {...a(0.15)}
            className="mt-4 text-[44px] font-bold leading-tight text-[var(--color-text)]"
          >
            Beyond the code
          </motion.h2>
          <AccentUnderline inView={inView} />
          <motion.p
            {...a(0.35)}
            className="mt-4 text-[15px] text-[var(--color-muted)]"
          >
            Daily flashcards, side projects, and a few people who liked working
            with me.
          </motion.p>
        </div>

        <div className="flex flex-1 flex-col justify-center">
          <motion.div
            {...a(0.4)}
            className="mx-auto grid w-full max-w-[1000px] grid-cols-3 divide-x divide-[var(--color-accent)]/[0.18]"
          >
            {STATS.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center px-8 text-center"
              >
                <p className="text-[44px] font-bold leading-none text-[var(--color-text)]">
                  {s.value}
                </p>
                <p className="mt-4 text-sm text-[#cbd5e1]/85">{s.label}</p>
                <p className="mt-2 text-xs text-[#64748b]">{s.sublabel}</p>
              </div>
            ))}
          </motion.div>

          <div className="mx-auto mt-14 w-full max-w-[1200px]">
            <div className="grid grid-cols-3 gap-6">
              {QUOTES.map((q, i) => (
                <motion.article
                  key={q.theme}
                  {...a(0.5 + i * 0.08)}
                  className="flex flex-col rounded-xl border border-[#1e293b] bg-[#0e1116] p-6"
                >
                  <p className="text-[9px] font-medium tracking-[0.155em] text-[var(--color-accent)]/80">
                    {q.theme}
                  </p>
                  <p className="mt-5 text-[13px] italic leading-[1.55] text-[#cbd5e1]/85">
                    {q.body}
                  </p>
                  <div className="mt-auto pt-6">
                    <p className="text-[13px] font-bold text-[var(--color-text)]">
                      {q.author}
                    </p>
                    <p className="mt-1 text-[11px] text-[#64748b]">{q.role}</p>
                  </div>
                </motion.article>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.8 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 text-center"
            >
              <a
                href="https://www.linkedin.com/in/patryklikus/details/recommendations"
                target="_blank"
                rel="noreferrer"
                className="inline-block text-[13px] tracking-[0.3px] text-[var(--color-accent)] transition-opacity hover:opacity-80"
              >
                View on LinkedIn →
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

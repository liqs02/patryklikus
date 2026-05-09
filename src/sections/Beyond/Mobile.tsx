const SOFTWARE_START_YEAR = 2021;
const yearsWriting = `${new Date().getFullYear() - SOFTWARE_START_YEAR}+`;

const STATS = [
  {
    value: yearsWriting,
    label: "years writing software",
    sublabel: `since ${SOFTWARE_START_YEAR}`,
  },
  {
    value: "50K+",
    label: "lines across private projects",
    sublabel: "always cooking",
  },
  {
    value: "10K+",
    label: "flashcard reviews",
    sublabel: "Anki, since mid-2025",
  },
];

const QUOTES = [
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

export default function BeyondMobile() {
  return (
    <section className="relative w-full px-6 py-16 sm:px-10 lg:hidden">
      <p className="text-[11px] uppercase tracking-[0.12em] text-[var(--color-accent)]">
        Beyond
      </p>
      <h2 className="mt-3 text-[32px] font-bold leading-tight text-[var(--color-text)]">
        Beyond the code
      </h2>
      <div className="mt-3 h-[3px] w-[56px] rounded-sm bg-[var(--color-accent)]" />
      <p className="mt-4 text-[14px] leading-snug text-[var(--color-muted)]">
        Daily flashcards, side projects, and a few people who liked working with
        me.
      </p>

      <ul className="mt-8 grid grid-cols-3">
        {STATS.map((s) => (
          <li
            key={s.label}
            className="flex flex-col items-center px-2 text-center"
          >
            <span className="text-[30px] font-bold leading-none tracking-tight text-[var(--color-text)] tabular-nums">
              {s.value}
            </span>
            <span className="mt-2 text-[12px] leading-tight text-[#cbd5e1]/85">
              {s.label}
            </span>
            <span className="mt-1 text-[10px] text-[#64748b]">
              {s.sublabel}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-12 flex flex-col gap-4">
        {QUOTES.map((q) => (
          <article
            key={q.theme}
            className="flex flex-col rounded-xl border border-[#1e293b] bg-[#0e1116] p-5"
          >
            <p className="text-[10px] font-medium tracking-[0.155em] text-[var(--color-accent)]/85">
              {q.theme}
            </p>
            <p className="mt-3 text-[13px] italic leading-[1.55] text-[#cbd5e1]/85">
              {q.body}
            </p>
            <div className="mt-4">
              <p className="text-[13px] font-bold text-[var(--color-text)]">
                {q.author}
              </p>
              <p className="mt-0.5 text-[11px] text-[#64748b]">{q.role}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 text-center">
        <a
          href="https://www.linkedin.com/in/patryklikus/details/recommendations"
          target="_blank"
          rel="noreferrer"
          className="inline-block text-[13px] tracking-[0.3px] text-[var(--color-accent)]"
        >
          View on LinkedIn →
        </a>
      </div>
    </section>
  );
}

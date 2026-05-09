export const SOFTWARE_START_YEAR = 2021;

export const yearsWritingSoftware = () =>
  new Date().getFullYear() - SOFTWARE_START_YEAR;

export type Stat = {
  value: number;
  suffix?: string;
  label: string;
  sublabel: string;
};

export const STATS: Stat[] = [
  {
    value: yearsWritingSoftware(),
    suffix: "+",
    label: "years writing software",
    sublabel: `since ${SOFTWARE_START_YEAR}`,
  },
  {
    value: 50_000,
    suffix: "+",
    label: "lines across private projects",
    sublabel: "always cooking",
  },
  {
    value: 10_000,
    suffix: "+",
    label: "flashcard reviews",
    sublabel: "Anki, since mid-2025",
  },
];

export type Quote = {
  theme: string;
  body: string;
  author: string;
  role: string;
};

export const QUOTES: Quote[] = [
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

export const RECOMMENDATIONS_HREF =
  "https://www.linkedin.com/in/patryklikus/details/recommendations";

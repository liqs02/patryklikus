export const SOFTWARE_START_YEAR = 2021;

export const yearsWritingSoftware = () =>
  new Date().getFullYear() - SOFTWARE_START_YEAR;

export type ThemeId = "skill" | "passion" | "growth";

export type ThemeCard = {
  id: ThemeId;
  theme: string;
  accent: string;
  stat: {
    value: number;
    suffix?: string;
    label: string;
    sublabel: string;
  };
  quote: {
    body: string;
    author: string;
    role: string;
  };
};

export const THEMES: ThemeCard[] = [
  {
    id: "skill",
    theme: "SKILL",
    accent: "#10b981",
    stat: {
      value: yearsWritingSoftware(),
      suffix: "+",
      label: "years writing software",
      sublabel: `since ${SOFTWARE_START_YEAR}`,
    },
    quote: {
      body: "He had a natural talent for solving complex technical problems. In no time, Patryk mastered new technologies and applied them with precision.",
      author: "Iwona S.",
      role: "Senior Software Engineer",
    },
  },
  {
    id: "passion",
    theme: "PASSION",
    accent: "#f59e0b",
    stat: {
      value: 50_000,
      suffix: "+",
      label: "lines across private projects",
      sublabel: "always cooking",
    },
    quote: {
      body: "Working with Patryk means working with someone whose passion for programming truly stands out. He frequently brings forward ideas that reflect the latest industry trends.",
      author: "Tomasz W.",
      role: "Tech Leader",
    },
  },
  {
    id: "growth",
    theme: "GROWTH",
    accent: "#a78bfa",
    stat: {
      value: 10_000,
      suffix: "+",
      label: "flashcard reviews",
      sublabel: "Anki, since mid-2025",
    },
    quote: {
      body: "What impressed me most is how quickly he turned initial inexperience into strength — learning from tough feedback, adapting rapidly, and consistently delivering clean, well-architected solutions.",
      author: "Mateusz S.",
      role: "Senior Software Engineer",
    },
  },
];

export const RECOMMENDATIONS_HREF =
  "https://www.linkedin.com/in/patryklikus/details/recommendations";

export const COPY = {
  eyebrow: "Beyond",
  counter: "02 / 03",
  titleStart: "Beyond the ",
  titleAccent: "code",
  titleEnd: ".",
  subtitle:
    "Three things people keep noticing — paired with the numbers behind them.",
  cta: "View recommendations on LinkedIn →",
};

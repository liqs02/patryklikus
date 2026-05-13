export const NAME = "Patryk Likus";
export const ROLE = "Software Engineer";
export const TAGLINE_PARTS: ReadonlyArray<{
  text: string;
  emphasis?: boolean;
}> = [
  { text: "Building planet-scale systems used by " },
  { text: "Microsoft, Meta, Amazon,", emphasis: true },
  { text: " " },
  { text: "Uber,", emphasis: true },
  { text: " and " },
  { text: "US Federal", emphasis: true },
  { text: "." },
];

export const SKILLS_DESKTOP = [
  "Java",
  "Spring Boot",
  "Kubernetes",
  "Azure",
  "PostgreSQL",
  "Redis",
  "Kafka",
];

export const SKILLS_MOBILE = [
  "Java",
  "Spring Boot",
  "Kubernetes",
  "Azure",
  "PostgreSQL",
  "Kafka",
  "Redis",
];

export const GITHUB_HREF = "https://github.com/liqs02";
export const GITHUB_LABEL = "github.com/liqs02";
export const LINKEDIN_HREF = "https://linkedin.com/in/patryklikus";
export const LINKEDIN_LABEL = "linkedin.com/in/patryklikus";

export const DASHBOARD = {
  service: "tile-service",
  env: "prod",
  status: "live",
  initialP99: 28,
  initialRps: 60.4,
  cacheHit: 99.97,
  footerLeft: "── 2.1B tiles served today",
  footerRight: "uptime 99.99%",
};

export const PUBLICATION = {
  chip: "PEER-REVIEWED",
  venue: "ECMS 2025  ·  European Conference on Modelling and Simulation",
  title: "Analysis of Virtual Threads in Spring Applications",
  authors: "Lead author  ·  Patryk Likus  ·  with Filip Krużel (CUT)",
  abstractFull:
    "Empirical comparison of Java 21 virtual threads against traditional platform threads in Spring REST APIs. Tests sweep across different mixes of computational work and I/O wait, throughput levels, and JVM choices — run on Spring Boot 3.4 + JDK 21 with Gatling load tests in controlled Docker workloads.",
  abstractShort:
    "Empirical comparison of Java 21 virtual threads against traditional platform threads in Spring REST APIs across mixes of computational work and I/O wait, throughput levels, and JVM choices.",
  keyFinding:
    "Virtual threads ≠ free scalability — gains depend on workload mix.",
  cta: "Read the paper",
  href: "https://github.com/liqs02/research/blob/master/ecms2025.pdf",
  hint: "GitHub  ·  ecms2025.pdf",
};

export type Post = {
  tag: string;
  title: string;
  snippet: string;
  metric: string;
  href: string;
};

export const POSTS: Post[] = [
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

export const LINKEDIN_PROFILE_HREF = "https://linkedin.com/in/patryklikus";
export const GITHUB_PROFILE_HREF = "https://github.com/liqs02";

export const COPY = {
  eyebrow: "Impact",
  counter: "03 / 03",
  titleStart: "Sharing ",
  titleAccent: "what I learn",
  titleEnd: ".",
  subtitle: "A peer-reviewed paper and a couple of posts that resonated.",
  moreOn: "More on",
};

import type { Period } from "./duration";

export type JobId = "tomtom" | "motorola";

export const JOB_OF_PROJECT: Record<
  "overture" | "orbis" | "ai-dispatch" | "geo-redundancy" | "fedramp",
  JobId
> = {
  overture: "tomtom",
  orbis: "tomtom",
  "ai-dispatch": "motorola",
  "geo-redundancy": "motorola",
  fedramp: "motorola",
};

export type ProjectKey =
  | "overture"
  | "orbis"
  | "ai-dispatch"
  | "geo-redundancy"
  | "fedramp";

export type Chip = { key: ProjectKey; label: string };

export type JobCard = {
  id: JobId;
  period: Period;
  company: string;
  role: string;
  description?: string;
  tech: string[];
  chips: Chip[];
  active?: boolean;
};

export const TOMTOM: JobCard = {
  id: "tomtom",
  period: { startYear: 2025, end: "present" },
  company: "TomTom",
  role: "Software Engineer II",
  description: "*Tens of billions* of road segments and nodes · used by *Microsoft*, *Meta*, *Amazon*, *Uber*.",
  tech: ["Java", "Spring Boot", "Kubernetes", "PostgreSQL", "Kafka"],
  chips: [
    { key: "overture", label: "Overture Maps" },
    { key: "orbis", label: "Orbis Maps" },
  ],
  active: true,
};

export const MOTOROLA: JobCard = {
  id: "motorola",
  period: { startYear: 2023, end: { year: 2025, month: 6 } },
  company: "Motorola Solutions",
  role: "Software Engineer",
  description: "*99.99%* availability · *sub-150ms* latency SLA · *1,000+* req/s · used by *US Federal*.",
  tech: ["Java", "Spring Boot", "AWS", "Terraform", "PostgreSQL"],
  chips: [
    { key: "ai-dispatch", label: "AI Dispatch" },
    { key: "geo-redundancy", label: "Geo-redundancy" },
    { key: "fedramp", label: "FedRAMP" },
  ],
};

export const COPY = {
  eyebrow: "Experience",
  counter: "01 / 03",
  titleStart: "Where I've ",
  titleAccent: "built",
  titleEnd: " things.",
  subtitle: "Two roles, many projects — the work that shaped the engineer.",
};

export const EDUCATION = {
  line1: "Cracow University of Technology · Computer Science",
  line2: "Graduated Jun 2025  ·  while working full-time",
};

export type ProjectDetail = {
  caption: string;
  logo?: string;
  title?: string;
  description: string[];
  usedBy?: { label: string; weight: number }[];
  reference?: { label: string; href: string };
};

export const PROJECTS: Record<ProjectKey, ProjectDetail> = {
  overture: {
    caption: "TomTom · Project",
    logo: "overture",
    title: "Overture Maps",
    description: [
      "Co-led the data ingestion pipeline behind the Overture Maps Foundation's open base map — an openly licensed dataset powering routing and location intelligence at *planet scale*.",
      "Engineered for complex conflation across providers and reproducible builds.",
    ],
    usedBy: [
      { label: "Microsoft", weight: 400 },
      { label: "amazon", weight: 700 },
      { label: "Meta", weight: 700 },
    ],
    reference: { label: "overturemaps.org", href: "https://overturemaps.org" },
  },
  orbis: {
    caption: "TomTom · Project",
    title: "Orbis Maps",
    description: [
      "Centimetre-accurate (HD) mapping software for automotive and mobility partners — processing *tens of billions* of road segments and nodes with high-throughput updates, powering self-driving features in production fleets.",
      "Engineered around continuous map freshness, lane-level accuracy, and the reliability automotive customers need to ship safely.",
    ],
    usedBy: [
      { label: "Uber", weight: 700 },
      { label: "Bolt", weight: 700 },
      { label: "Volkswagen / CARIAD", weight: 400 },
    ],
    reference: {
      label: "tomtom.com/tomtom-orbis-maps",
      href: "https://www.tomtom.com/tomtom-orbis-maps/",
    },
  },
  "ai-dispatch": {
    caption: "Motorola Solutions · Project",
    title: "AI Emergency Dispatch",
    description: [
      "Voice-recognition pipeline integrated into CommandCentral Aware — transcribing live 911 calls into structured, actionable data at *over 1,000 req/s* under a *sub-150ms response-time SLA*.",
      "Real-time transcription and structured event extraction designed for the operational tempo of a 911 floor — boosting dispatch time and accuracy.",
    ],
    usedBy: [{ label: "US Public Safety", weight: 600 }],
    reference: {
      label: "motorolasolutions.com",
      href: "https://www.motorolasolutions.com/en_us/products/command-center-software/public-safety-software/real-time-intelligence-operations/commandcentral-aware.html",
    },
  },
  "geo-redundancy": {
    caption: "Motorola Solutions · Architecture",
    title: "Geo-redundant Architecture",
    description: [
      "Multi-region architecture for mission-critical 911 systems delivering *99.99% availability* (only *~52 min downtime/year*), preserving data integrity and *event ordering* under regional failover.",
      "Owned production reliability via 24/7 on-call rotations — rapid alert response and root-cause discipline minimizing downtime.",
    ],
    usedBy: [{ label: "US Public Safety", weight: 600 }],
  },
  fedramp: {
    caption: "Motorola Solutions · Compliance",
    title: "FedRAMP Compliance",
    description: [
      "Delivered security controls — data handling, audit trails, access — meeting the *US federal* FedRAMP standard required for sensitive federal cloud workloads.",
      "Hardening, access management, and audit trails to meet federal cloud security baselines.",
    ],
    usedBy: [{ label: "US Federal", weight: 700 }],
  },
};

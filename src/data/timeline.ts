export enum EntryType {
  Job = "job",
  Education = "education",
}

export type TimelineEntry = {
  type: EntryType;
  year: string;
  title: string;
  tags: string[];
  active?: boolean;
};

export const TIMELINE: TimelineEntry[] = [
  {
    type: EntryType.Job,
    year: "2025",
    title: "TomTom",
    tags: ["Overture Maps", "Orbis Maps", "Automotive HD"],
    active: true,
  },
  {
    type: EntryType.Education,
    year: "Jun 2025",
    title: "Cracow University of Technology",
    tags: ["Computer Science", "Graduated"],
  },
  {
    type: EntryType.Job,
    year: "2023",
    title: "Motorola Solutions",
    tags: ["AI Dispatch", "FedRAMP", "Geo-redundancy"],
  },
];

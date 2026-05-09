const MONTHS_SHORT = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

export type EndPoint = { year: number; month: number } | "present";

export type Period = {
  startYear: number;
  end: EndPoint;
};

function monthsBetween(startYear: number, end: EndPoint): number {
  const start = new Date(startYear, 0, 1);
  const e = end === "present" ? new Date() : new Date(end.year, end.month - 1, 1);
  return (
    (e.getFullYear() - start.getFullYear()) * 12 +
    (e.getMonth() - start.getMonth()) +
    1
  );
}

function formatDuration(totalMonths: number): string {
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const yearStr = years > 0 ? `${years} year${years === 1 ? "" : "s"}` : "";
  const monthStr = months > 0 ? `${months} month${months === 1 ? "" : "s"}` : "";
  return [yearStr, monthStr].filter(Boolean).join(" ") || "less than a month";
}

function formatEnd(end: EndPoint): string {
  if (end === "present") return "present";
  return `${end.year} ${MONTHS_SHORT[end.month - 1]}`;
}

export function formatPeriod({ startYear, end }: Period): string {
  return `${startYear} — ${formatEnd(end)}  ·  ${formatDuration(monthsBetween(startYear, end))}`;
}

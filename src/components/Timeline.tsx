import type { TimelineEntry } from "../data/timeline";
import TimelineRail, { type RailRow } from "./TimelineRail";

type Props = {
  entries: TimelineEntry[];
};

export default function Timeline({ entries }: Props) {
  const rows: RailRow[] = entries.map((item) => ({
    active: !!item.active,
    content: (
      <div className="pb-7">
        <div className="flex items-baseline gap-5">
          <span
            className={
              "w-[60px] shrink-0 text-[11px] font-medium " +
              (item.active
                ? "text-[var(--color-accent)]"
                : "text-[var(--color-muted)]")
            }
          >
            {item.year}
          </span>
          <span className="text-sm font-semibold text-[var(--color-text)]">
            {item.title}
          </span>
        </div>
        <p className="ml-[80px] mt-1 text-xs text-[var(--color-subtle)]">
          {item.tags.join(" · ")}
        </p>
      </div>
    ),
  }));
  return <TimelineRail rows={rows} gapClass="gap-7" />;
}

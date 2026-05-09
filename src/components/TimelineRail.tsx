import type { ReactNode } from "react";

export type RailRow = {
  active?: boolean;
  milestone?: boolean;
  content: ReactNode;
  /** Tailwind class for the dot's vertical position within its row, e.g. "top-[24px]" or "top-1/2 -translate-y-1/2" */
  dotTop?: string;
};

type Props = {
  rows: RailRow[];
  /** Tailwind class for the gap between rows, e.g. "gap-7" */
  gapClass?: string;
  /** Tailwind class for spine top offset, e.g. "top-[10px]" */
  spineTop?: string;
  /** Tailwind class for spine bottom offset, e.g. "bottom-[10px]" */
  spineBottom?: string;
};

export default function TimelineRail({
  rows,
  gapClass = "gap-7",
  spineTop = "top-[10px]",
  spineBottom = "bottom-[10px]",
}: Props) {
  return (
    <ol className={"relative flex flex-col " + gapClass}>
      <span
        aria-hidden
        className={
          "pointer-events-none absolute left-[7px] w-[2px] rounded-sm bg-[var(--color-accent)]/30 " +
          spineTop +
          " " +
          spineBottom
        }
      />
      {rows.map((row, i) => {
        const dotTop = row.dotTop ?? "top-[3px]";
        return (
          <li
            key={i}
            className="relative grid grid-cols-[16px_1fr] items-start gap-x-5"
          >
            <div className="relative">
              {row.milestone ? (
                <span
                  aria-hidden
                  className={
                    "absolute left-1/2 -translate-x-1/2 h-[10px] w-[10px] rounded-full border-[1.5px] border-[var(--color-accent)]/50 bg-[var(--color-bg)] " +
                    dotTop
                  }
                />
              ) : (
                <span
                  aria-hidden
                  className={
                    "absolute left-1/2 -translate-x-1/2 h-[14px] w-[14px] rounded-full transition-colors duration-300 " +
                    dotTop +
                    " " +
                    (row.active ? "bg-[var(--color-accent)]" : "bg-[#414753]")
                  }
                />
              )}
            </div>
            <div className="min-w-0">{row.content}</div>
          </li>
        );
      })}
    </ol>
  );
}

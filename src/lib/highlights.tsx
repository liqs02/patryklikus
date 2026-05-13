import { Fragment, type ReactNode } from "react";

const PATTERN = /\*([^*]+)\*/g;

/**
 * Parse inline highlights: `*1k req/s*` → <mark> with green accent.
 * Returns a stable ReactNode array. Uses semantic <mark> so screen readers
 * and search-highlight tooling treat it correctly.
 */
export function renderHighlights(text: string): ReactNode {
  if (!text) return text;
  if (!text.includes("*")) return text;

  const nodes: ReactNode[] = [];
  let last = 0;
  let match: RegExpExecArray | null;
  let i = 0;

  PATTERN.lastIndex = 0;
  while ((match = PATTERN.exec(text)) !== null) {
    if (match.index > last) {
      nodes.push(
        <Fragment key={`t-${i}`}>{text.slice(last, match.index)}</Fragment>,
      );
    }
    nodes.push(
      <mark key={`h-${i}`} className="highlight">
        {match[1]}
      </mark>,
    );
    last = match.index + match[0].length;
    i++;
  }
  if (last < text.length) {
    nodes.push(<Fragment key={`t-${i}`}>{text.slice(last)}</Fragment>);
  }
  return nodes;
}

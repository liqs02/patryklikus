type Variant = "teal" | "slate";
type Tone = "filled" | "subtle";
type Shape = "pill" | "tag";

type Props = {
  label: string;
  variant?: Variant;
  tone?: Tone;
  shape?: Shape;
  interactive?: boolean;
  onClick?: () => void;
};

const VARIANTS: Record<Variant, Record<Tone, { base: string; hover: string }>> = {
  teal: {
    filled: {
      base:
        "border-[var(--color-accent)]/80 bg-[var(--color-accent)]/[0.18] text-[var(--color-accent)]",
      hover: "hover:bg-[var(--color-accent)]/[0.26]",
    },
    subtle: {
      base:
        "border-[var(--color-accent)]/30 bg-[var(--color-accent)]/[0.06] text-[var(--color-accent)]/70",
      hover:
        "hover:border-[var(--color-accent)]/55 hover:bg-[var(--color-accent)]/[0.12] hover:text-[var(--color-accent)]",
    },
  },
  slate: {
    filled: {
      base: "border-[#cbd5e1]/45 bg-[#cbd5e1]/[0.16] text-[#cbd5e1]",
      hover: "hover:bg-[#cbd5e1]/[0.22]",
    },
    subtle: {
      base: "border-[#94a3b8]/25 bg-[#94a3b8]/[0.06] text-[#94a3b8]",
      hover:
        "hover:border-[#94a3b8]/45 hover:bg-[#94a3b8]/[0.12] hover:text-[#cbd5e1]",
    },
  },
};

const SHAPES: Record<Shape, string> = {
  pill: "rounded-full px-3 py-1",
  tag: "rounded-xl h-[25px] px-3",
};

export default function Chip({
  label,
  variant = "teal",
  tone = "filled",
  shape = "tag",
  interactive = false,
  onClick,
}: Props) {
  const v = VARIANTS[variant][tone];
  const className =
    "inline-flex items-center border text-[11px] font-semibold " +
    SHAPES[shape] +
    " " +
    v.base +
    (interactive ? " cursor-pointer transition-colors duration-200 " + v.hover : "");

  if (interactive) {
    return (
      <button type="button" onClick={onClick} className={className}>
        {label}
      </button>
    );
  }
  return <span className={className}>{label}</span>;
}

import { ACCENT_GREEN } from "./constants";

const TRACE_VIOLET: ReadonlyArray<readonly [number, number]> = [
  [10, 14],
  [22, 18],
  [68, 9],
  [4, 28],
  [11, 72],
  [96, 42],
  [96, 52],
  [84, 93],
];

const SOLDER_PADS: ReadonlyArray<readonly [number, number]> = [
  [50, 96.5],
  [54, 96.5],
  [58, 96.5],
  [62, 96.5],
  [3.5, 64],
  [3.5, 68],
  [3.5, 72],
  [3.5, 76],
];

const COMPONENTS: ReadonlyArray<{
  left: number;
  top: number;
  w: number;
  h: number;
  kind: "cap" | "ic" | "res";
}> = [
  { left: 16, top: 7, w: 14, h: 4, kind: "cap" },
  { left: 5, top: 38, w: 5, h: 16, kind: "ic" },
  { left: 86, top: 38, w: 4, h: 8, kind: "cap" },
  { left: 38, top: 3, w: 10, h: 4, kind: "ic" },
  { left: 86, top: 82, w: 5, h: 8, kind: "cap" },
  { left: 18, top: 85, w: 5, h: 5, kind: "res" },
  { left: 26, top: 85, w: 5, h: 5, kind: "res" },
];

export default function PCBTop() {
  return (
    <>
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        aria-hidden
      >
        <defs>
          <pattern
            id="pcb-grid"
            width="4"
            height="4"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 4 0 L 0 0 L 0 4"
              fill="none"
              stroke="rgba(167,139,250,0.05)"
              strokeWidth="0.2"
            />
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#pcb-grid)" />

        <g
          stroke="rgba(196,181,253,0.3)"
          strokeWidth="0.35"
          fill="none"
        >
          <path d="M 10,6 L 10,14 L 22,14 L 22,18" />
          <path d="M 60,3 L 60,9 L 68,9 L 68,15" />
          <path d="M 4,28 L 11,28 L 11,40" />
          <path d="M 5,72 L 11,72 L 11,78 L 18,78" />
          <path d="M 86,42 L 96,42 L 96,52" />
          <path d="M 84,86 L 84,93" />
        </g>
        <g
          stroke="rgba(245,158,11,0.45)"
          strokeWidth="0.35"
          fill="none"
        >
          <path d="M 88,68 L 92,68 L 92,76 L 96,76" />
          <path d="M 16,90 L 16,96 L 28,96" />
        </g>

        <g fill="rgba(196,181,253,0.42)">
          {TRACE_VIOLET.map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="0.55" />
          ))}
        </g>

        <g fill="rgba(16,185,129,0.7)">
          {SOLDER_PADS.map(([cx, cy], i) => (
            <rect key={i} x={cx - 0.5} y={cy - 1} width="1" height="2" />
          ))}
        </g>
      </svg>

      {COMPONENTS.map((c, i) => (
        <span
          key={i}
          aria-hidden
          className="absolute rounded-[1px]"
          style={{
            left: `${c.left}%`,
            top: `${c.top}%`,
            width: `${c.w}%`,
            height: `${c.h}%`,
            background:
              c.kind === "ic"
                ? "linear-gradient(to bottom, #1a1428 0%, #0a0712 60%, #050309 100%)"
                : c.kind === "res"
                  ? "linear-gradient(to bottom, #45381f 0%, #1f1810 70%, #0b0807 100%)"
                  : "linear-gradient(to bottom, #322640 0%, #18121f 70%, #0a0712 100%)",
            border:
              c.kind === "ic"
                ? "1px solid rgba(196,181,253,0.32)"
                : c.kind === "res"
                  ? "1px solid rgba(218,165,90,0.35)"
                  : "1px solid rgba(167,139,250,0.28)",
            boxShadow:
              c.kind === "ic"
                ? "inset 0 1px 0 rgba(196,181,253,0.28), inset 0 -1px 0 rgba(0,0,0,0.4)"
                : "inset 0 1px 0 rgba(196,181,253,0.22)",
          }}
        />
      ))}

      <span
        aria-hidden
        className="absolute"
        style={{
          left: "12%",
          top: "13%",
          width: 3,
          height: 3,
          borderRadius: "50%",
          backgroundColor: ACCENT_GREEN,
          boxShadow: `0 0 4px ${ACCENT_GREEN}cc, 0 0 9px ${ACCENT_GREEN}88`,
        }}
      />
    </>
  );
}

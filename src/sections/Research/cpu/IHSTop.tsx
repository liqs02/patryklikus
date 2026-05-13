import { motion } from "framer-motion";
import { VIOLET, VIOLET_BRIGHT } from "./constants";

const QUADRANTS: ReadonlyArray<readonly [number, number]> = [
  [22, 22],
  [78, 22],
  [22, 78],
  [78, 78],
];

export default function IHSTop({ reduced }: { reduced: boolean }) {
  return (
    <div className="absolute inset-0">
      <div
        className="absolute inset-[6px] rounded-[2px]"
        style={{
          border: "1px solid rgba(196,181,253,0.24)",
          boxShadow:
            "inset 0 0 16px rgba(0,0,0,0.4), inset 0 1px 0 rgba(196,181,253,0.2)",
        }}
      />

      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-[12px] h-[calc(100%-24px)] w-[calc(100%-24px)]"
        aria-hidden
      >
        <defs>
          <pattern
            id="ihs-grid"
            width="5"
            height="5"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 5 0 L 0 0 L 0 5"
              fill="none"
              stroke="rgba(196,181,253,0.16)"
              strokeWidth="0.25"
            />
          </pattern>
          <linearGradient id="ihs-trace" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={VIOLET_BRIGHT} stopOpacity="0" />
            <stop offset="50%" stopColor={VIOLET_BRIGHT} stopOpacity="0.6" />
            <stop offset="100%" stopColor={VIOLET_BRIGHT} stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect width="100" height="100" fill="url(#ihs-grid)" />
        <line
          x1="50"
          y1="6"
          x2="50"
          y2="94"
          stroke="rgba(196,181,253,0.28)"
          strokeWidth="0.5"
        />
        <line
          x1="6"
          y1="50"
          x2="94"
          y2="50"
          stroke="rgba(196,181,253,0.28)"
          strokeWidth="0.5"
        />
        {QUADRANTS.map(([cx, cy], i) => (
          <g key={i}>
            <rect
              x={cx - 14}
              y={cy - 14}
              width="28"
              height="28"
              fill="rgba(167,139,250,0.07)"
              stroke="rgba(196,181,253,0.4)"
              strokeWidth="0.5"
            />
            <rect
              x={cx - 10}
              y={cy - 10}
              width="20"
              height="20"
              fill="none"
              stroke="rgba(196,181,253,0.22)"
              strokeWidth="0.3"
            />
            <rect
              x={cx - 4}
              y={cy - 4}
              width="8"
              height="8"
              fill="none"
              stroke="rgba(196,181,253,0.28)"
              strokeWidth="0.25"
            />
            <circle
              cx={cx}
              cy={cy}
              r="1.4"
              fill={VIOLET_BRIGHT}
              opacity="0.8"
            />
          </g>
        ))}
        <rect
          x="42"
          y="42"
          width="16"
          height="16"
          fill="rgba(167,139,250,0.12)"
          stroke="rgba(196,181,253,0.6)"
          strokeWidth="0.55"
        />
        {!reduced && (
          <rect
            x="0"
            y="0"
            width="100"
            height="2"
            fill="url(#ihs-trace)"
            opacity="0.5"
          >
            <animate
              attributeName="y"
              from="0"
              to="100"
              dur="5s"
              repeatCount="indefinite"
            />
          </rect>
        )}
      </svg>

      <motion.div
        aria-hidden
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={reduced ? {} : { opacity: [0.55, 1, 0.55], scale: [0.92, 1.08, 0.92] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        style={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "#ffffff",
          boxShadow: `0 0 6px ${VIOLET_BRIGHT}, 0 0 14px ${VIOLET}, 0 0 28px ${VIOLET}88`,
        }}
      />

      <span
        aria-hidden
        className="absolute"
        style={{
          left: "50%",
          top: "9%",
          transform: "translateX(-50%)",
          fontFamily: "monospace",
          fontSize: 9,
          letterSpacing: "0.32em",
          color: "rgba(196,181,253,0.85)",
          textShadow: `0 0 8px ${VIOLET}99`,
        }}
      >
        PL-CORE
      </span>
      <span
        aria-hidden
        className="absolute"
        style={{
          left: "50%",
          bottom: "8%",
          transform: "translateX(-50%)",
          fontFamily: "monospace",
          fontSize: 7,
          letterSpacing: "0.28em",
          color: "rgba(167,139,250,0.6)",
        }}
      >
        VT-1024
      </span>

      <span
        aria-hidden
        className="absolute"
        style={{
          top: 5,
          left: 5,
          width: 4,
          height: 4,
          borderRadius: "50%",
          backgroundColor: VIOLET_BRIGHT,
          boxShadow: `0 0 5px ${VIOLET_BRIGHT}`,
        }}
      />
    </div>
  );
}

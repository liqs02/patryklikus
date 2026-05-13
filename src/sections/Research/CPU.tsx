import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "../../lib/motion";

const PCB_W = 280;
const PCB_D = 14;
const IHS_INSET_TOP = 36;
const IHS_INSET_LEFT = 36;
const IHS_INSET_BOTTOM = 24;
const IHS_INSET_RIGHT = 24;
const IHS_D = 12;

const VIOLET = "#a78bfa";
const VIOLET_BRIGHT = "#c4b5fd";
const ACCENT_GREEN = "#10b981";

const PCB_TOP_BG =
  "linear-gradient(135deg, #15101f 0%, #0a0712 55%, #120e1c 100%)";
const PCB_SIDE_BG =
  "linear-gradient(to bottom, #1d1428 0%, #0d0916 50%, #050309 100%)";
const IHS_TOP_BG =
  "linear-gradient(135deg, #4a3f64 0%, #1f1830 45%, #322647 75%, #2a2240 100%)";
const IHS_SIDE_BG =
  "linear-gradient(to bottom, #322647 0%, #1a1428 50%, #0d0916 100%)";

const TILT_X = 22;
const TILT_Y = -26;

type CPUProps = {
  tiltY?: number;
  tiltX?: number;
  ihsInsetTop?: number;
  ihsInsetLeft?: number;
  ihsInsetBottom?: number;
  ihsInsetRight?: number;
  animateEntry?: boolean;
};

export default function CPU({
  tiltY = TILT_Y,
  tiltX = TILT_X,
  ihsInsetTop = IHS_INSET_TOP,
  ihsInsetLeft = IHS_INSET_LEFT,
  ihsInsetBottom = IHS_INSET_BOTTOM,
  ihsInsetRight = IHS_INSET_RIGHT,
  animateEntry = true,
}: CPUProps = {}) {
  const reduced = useReducedMotion();
  const skipEntry = !animateEntry || !!reduced;
  const ihsW = PCB_W - ihsInsetLeft - ihsInsetRight;
  const ihsH = PCB_W - ihsInsetTop - ihsInsetBottom;
  const lightFromRight = tiltY > 0;
  const gradientAngle = lightFromRight ? "225deg" : "135deg";
  const radialX = lightFromRight ? "75%" : "25%";

  const pcbHalf = PCB_D / 2;
  const ihsHalf = IHS_D / 2;

  return (
    <motion.div
      initial={skipEntry ? { opacity: 1, x: 0 } : { opacity: 0, x: 36 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, margin: "-15% 0px" }}
      transition={{ duration: skipEntry ? 0 : 0.85, ease: EASE }}
      className="relative flex aspect-square items-center justify-center self-start"
      style={{ perspective: 1700 }}
    >
      <Backdrop />
      <FloorShadow />

      <motion.div
        animate={
          reduced
            ? {}
            : { rotateY: [tiltY - 0.7, tiltY + 0.7, tiltY - 0.7] }
        }
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{
          width: PCB_W,
          height: PCB_W,
          position: "relative",
          transformStyle: "preserve-3d",
          rotateX: tiltX,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            transform: `translateZ(${pcbHalf}px)`,
            background: PCB_TOP_BG,
            border: "1px solid rgba(167,139,250,0.24)",
            borderRadius: 4,
            overflow: "hidden",
            boxShadow:
              "inset 0 1px 0 rgba(196,181,253,0.14), inset 0 -1px 0 rgba(0,0,0,0.6)",
          }}
        >
          <PCBTop />
        </div>

        <div
          className="absolute"
          style={{
            width: PCB_W,
            height: PCB_D,
            top: -pcbHalf,
            left: 0,
            transform: "rotateX(90deg)",
            background: PCB_SIDE_BG,
            borderTop: "1px solid rgba(167,139,250,0.16)",
            borderBottom: "1px solid rgba(0,0,0,0.55)",
          }}
        />
        <div
          className="absolute"
          style={{
            width: PCB_W,
            height: PCB_D,
            top: PCB_W - pcbHalf,
            left: 0,
            transform: "rotateX(90deg)",
            background: PCB_SIDE_BG,
            borderTop: "1px solid rgba(167,139,250,0.16)",
            borderBottom: "1px solid rgba(0,0,0,0.55)",
          }}
        >
          <PinStrip count={36} horizontal />
        </div>
        <div
          className="absolute"
          style={{
            width: PCB_D,
            height: PCB_W,
            top: 0,
            left: -pcbHalf,
            transform: "rotateY(90deg)",
            background: PCB_SIDE_BG,
            borderLeft: "1px solid rgba(167,139,250,0.16)",
            borderRight: "1px solid rgba(0,0,0,0.55)",
          }}
        >
          <PinStrip count={36} horizontal={false} />
        </div>
        <div
          className="absolute"
          style={{
            width: PCB_D,
            height: PCB_W,
            top: 0,
            left: PCB_W - pcbHalf,
            transform: "rotateY(90deg)",
            background: PCB_SIDE_BG,
            borderLeft: "1px solid rgba(167,139,250,0.16)",
            borderRight: "1px solid rgba(0,0,0,0.55)",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            transform: `translateZ(-${pcbHalf}px) rotateY(180deg)`,
            background: "#030206",
            borderRadius: 4,
            overflow: "hidden",
          }}
        >
          <PinGrid />
        </div>

        <div
          style={{
            position: "absolute",
            left: ihsInsetLeft,
            top: ihsInsetTop,
            width: ihsW,
            height: ihsH,
            transformStyle: "preserve-3d",
            transform: `translateZ(${pcbHalf + ihsHalf}px)`,
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              transform: `translateZ(${ihsHalf}px)`,
              background: IHS_TOP_BG,
              border: "1px solid rgba(196,181,253,0.45)",
              borderRadius: 3,
              overflow: "hidden",
              boxShadow:
                "inset 0 1.5px 0 rgba(196,181,253,0.4), inset 0 -1.5px 0 rgba(0,0,0,0.55), 0 8px 16px -4px rgba(0,0,0,0.6)",
            }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background: `linear-gradient(${gradientAngle}, rgba(255,255,255,0.16) 0%, rgba(196,181,253,0.1) 25%, transparent 55%)`,
              }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background: `radial-gradient(ellipse 60% 60% at ${radialX} 20%, rgba(255,255,255,0.12), transparent 60%)`,
              }}
            />
            <IHSTop reduced={!!reduced} />
          </div>

          <div
            className="absolute"
            style={{
              width: ihsW,
              height: IHS_D,
              top: -ihsHalf,
              left: 0,
              transform: "rotateX(90deg)",
              background: IHS_SIDE_BG,
              borderTop: "1px solid rgba(196,181,253,0.36)",
              borderBottom: "1px solid rgba(0,0,0,0.55)",
            }}
          />
          <div
            className="absolute"
            style={{
              width: ihsW,
              height: IHS_D,
              top: ihsH - ihsHalf,
              left: 0,
              transform: "rotateX(90deg)",
              background: IHS_SIDE_BG,
              borderTop: "1px solid rgba(196,181,253,0.36)",
              borderBottom: "1px solid rgba(0,0,0,0.55)",
            }}
          />
          <div
            className="absolute"
            style={{
              width: IHS_D,
              height: ihsH,
              top: 0,
              left: -ihsHalf,
              transform: "rotateY(90deg)",
              background: IHS_SIDE_BG,
              borderLeft: "1px solid rgba(196,181,253,0.36)",
              borderRight: "1px solid rgba(0,0,0,0.55)",
            }}
          />
          <div
            className="absolute"
            style={{
              width: IHS_D,
              height: ihsH,
              top: 0,
              left: ihsW - ihsHalf,
              transform: "rotateY(90deg)",
              background: IHS_SIDE_BG,
              borderLeft: "1px solid rgba(196,181,253,0.36)",
              borderRight: "1px solid rgba(0,0,0,0.55)",
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

function FloorShadow() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute"
        style={{
          width: PCB_W * 1.4,
          height: PCB_W * 0.28,
          left: "50%",
          top: "78%",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.75), transparent 70%)",
          filter: "blur(22px)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute"
        style={{
          width: PCB_W * 1.2,
          height: PCB_W * 0.6,
          left: "50%",
          top: "58%",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(ellipse at center, rgba(167,139,250,0.42), transparent 72%)",
          filter: "blur(48px)",
        }}
      />
    </>
  );
}

function Backdrop() {
  const SIZE = 360;
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute"
      style={{
        width: SIZE,
        height: SIZE,
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
        className="h-full w-full"
        style={{ overflow: "visible" }}
      >
        <defs>
          <radialGradient id="bd-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={VIOLET} stopOpacity="0.55" />
            <stop offset="35%" stopColor={VIOLET} stopOpacity="0.22" />
            <stop offset="70%" stopColor={VIOLET} stopOpacity="0.05" />
            <stop offset="100%" stopColor={VIOLET} stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="50" fill="url(#bd-glow)" />
        <circle
          cx="50"
          cy="50"
          r="34"
          fill="none"
          stroke={VIOLET}
          strokeOpacity="0.2"
          strokeWidth="0.2"
          strokeDasharray="0.6 2.2"
        />
        <circle
          cx="50"
          cy="50"
          r="42"
          fill="none"
          stroke={VIOLET}
          strokeOpacity="0.12"
          strokeWidth="0.18"
          strokeDasharray="0.6 2.2"
        />
        <circle
          cx="50"
          cy="50"
          r="48"
          fill="none"
          stroke={VIOLET}
          strokeOpacity="0.07"
          strokeWidth="0.16"
          strokeDasharray="0.6 2.2"
        />
      </svg>
    </div>
  );
}

function PCBTop() {
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
          {[
            [10, 14],
            [22, 18],
            [68, 9],
            [4, 28],
            [11, 72],
            [96, 42],
            [96, 52],
            [84, 93],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="0.55" />
          ))}
        </g>

        <g fill="rgba(16,185,129,0.7)">
          {[
            [50, 96.5],
            [54, 96.5],
            [58, 96.5],
            [62, 96.5],
            [3.5, 64],
            [3.5, 68],
            [3.5, 72],
            [3.5, 76],
          ].map(([cx, cy], i) => (
            <rect
              key={i}
              x={cx - 0.5}
              y={cy - 1}
              width="1"
              height="2"
            />
          ))}
        </g>
      </svg>

      {[
        { left: 16, top: 7, w: 14, h: 4, kind: "cap" },
        { left: 5, top: 38, w: 5, h: 16, kind: "ic" },
        { left: 86, top: 38, w: 4, h: 8, kind: "cap" },
        { left: 38, top: 3, w: 10, h: 4, kind: "ic" },
        { left: 86, top: 82, w: 5, h: 8, kind: "cap" },
        { left: 18, top: 85, w: 5, h: 5, kind: "res" },
        { left: 26, top: 85, w: 5, h: 5, kind: "res" },
      ].map((c, i) => (
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

function IHSTop({ reduced }: { reduced: boolean }) {
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
        {[
          [22, 22],
          [78, 22],
          [22, 78],
          [78, 78],
        ].map(([cx, cy], i) => (
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

function PinStrip({
  count,
  horizontal,
}: {
  count: number;
  horizontal: boolean;
}) {
  return (
    <div
      className={`absolute inset-0 flex ${
        horizontal
          ? "items-end justify-around px-[6px] pb-[2px]"
          : "flex-col justify-around py-[6px] pl-[2px] items-start"
      }`}
    >
      {Array.from({ length: count }, (_, i) => (
        <span
          key={i}
          aria-hidden
          style={
            horizontal
              ? {
                  width: 2,
                  height: PCB_D * 0.55,
                  background:
                    "linear-gradient(to bottom, rgba(196,181,253,0.65), rgba(196,181,253,0.15))",
                }
              : {
                  width: PCB_D * 0.55,
                  height: 2,
                  background:
                    "linear-gradient(to right, rgba(196,181,253,0.65), rgba(196,181,253,0.15))",
                }
          }
        />
      ))}
    </div>
  );
}

function PinGrid() {
  const dots: { x: number; y: number }[] = [];
  const N = 18;
  const step = 100 / (N + 1);
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      const x = i * step;
      const y = j * step;
      const dx = x - 50;
      const dy = y - 50;
      if (Math.hypot(dx, dy) < 44) {
        dots.push({ x, y });
      }
    }
  }
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="absolute inset-0 h-full w-full"
      aria-hidden
    >
      {dots.map((d, i) => (
        <circle
          key={i}
          cx={d.x}
          cy={d.y}
          r="0.7"
          fill="rgba(196,181,253,0.4)"
        />
      ))}
    </svg>
  );
}

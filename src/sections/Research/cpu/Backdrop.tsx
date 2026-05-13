import { VIOLET } from "./constants";

export default function Backdrop() {
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

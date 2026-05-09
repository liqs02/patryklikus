export default function GridOverlay() {
  const cols = 6;
  const rows = 6;
  const dots: { x: number; y: number }[] = [];
  for (let r = 1; r <= rows; r++) {
    for (let c = 1; c <= cols; c++) {
      dots.push({
        x: (c / (cols + 1)) * 100,
        y: (r / (rows + 1)) * 100,
      });
    }
  }
  const lines = Array.from({ length: cols }, (_, i) => ((i + 1) / (cols + 1)) * 100);

  return (
    <svg
      aria-hidden
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="none"
    >
      {lines.map((p) => (
        <line
          key={`h-${p}`}
          x1="0"
          y1={`${p}%`}
          x2="100%"
          y2={`${p}%`}
          stroke="var(--color-accent)"
          strokeOpacity="0.08"
          strokeWidth="1"
        />
      ))}
      {lines.map((p) => (
        <line
          key={`v-${p}`}
          x1={`${p}%`}
          y1="0"
          x2={`${p}%`}
          y2="100%"
          stroke="var(--color-accent)"
          strokeOpacity="0.08"
          strokeWidth="1"
        />
      ))}
      {dots.map((d, i) => (
        <circle
          key={i}
          cx={`${d.x}%`}
          cy={`${d.y}%`}
          r="2"
          fill="var(--color-accent)"
          fillOpacity="0.35"
        />
      ))}
    </svg>
  );
}

export default function PinGrid() {
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

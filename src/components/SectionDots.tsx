import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "hero", label: "Hero", color: "#10b981", glow: "rgba(16,185,129,0.5)" },
  { id: "experience", label: "Experience", color: "#10b981", glow: "rgba(16,185,129,0.5)" },
  { id: "beyond", label: "Beyond", color: "#f59e0b", glow: "rgba(245,158,11,0.5)" },
  { id: "impact", label: "Impact", color: "#a78bfa", glow: "rgba(167,139,250,0.5)" },
];

export default function SectionDots() {
  const [active, setActive] = useState(SECTIONS[0]!.id);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActive(id);
          });
        },
        { threshold: 0.5 },
      );
      io.observe(el);
      observers.push(io);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className="fixed right-6 top-1/2 z-50 hidden -translate-y-1/2 lg:block"
    >
      <ul className="flex flex-col gap-4">
        {SECTIONS.map(({ id, label, color, glow }) => {
          const isActive = active === id;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-label={label}
                aria-current={isActive ? "true" : undefined}
                className="group relative flex h-3 w-3 items-center justify-center"
              >
                <span
                  aria-hidden
                  className={
                    "h-2 w-2 rounded-full transition-all duration-300 " +
                    (isActive
                      ? "scale-125"
                      : "bg-[#94a3b8]/30 group-hover:bg-[#94a3b8]/70")
                  }
                  style={
                    isActive
                      ? { backgroundColor: color, boxShadow: `0 0 12px ${glow}` }
                      : undefined
                  }
                />
                <span className="pointer-events-none absolute right-6 whitespace-nowrap rounded-md border border-[var(--color-border)] bg-[#0e1116] px-2.5 py-1 text-[11px] text-[var(--color-muted)] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  {label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

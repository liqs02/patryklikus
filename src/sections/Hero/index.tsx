import HeroMobile from "./Mobile";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full overflow-hidden lg:[scroll-snap-align:start] lg:[scroll-snap-stop:always]"
    >
      <HeroMobile />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden lg:block"
        style={{
          background:
            "radial-gradient(circle at 18% 75%, rgba(16,185,129,0.10), transparent 45%), radial-gradient(circle at 82% 25%, rgba(245,158,11,0.07), transparent 45%), radial-gradient(circle at 60% 90%, rgba(167,139,250,0.06), transparent 45%), radial-gradient(ellipse at 50% 0%, rgba(15,23,42,0.55), transparent 55%), radial-gradient(ellipse at 50% 100%, rgba(15,23,42,0.55), transparent 55%)",
        }}
      />
      <div className="relative mx-auto hidden min-h-screen max-w-[1500px] grid-cols-2 lg:grid">
        <LeftPanel />
        <RightPanel />
      </div>
    </section>
  );
}

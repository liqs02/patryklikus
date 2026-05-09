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
      <div className="mx-auto hidden min-h-screen max-w-[1500px] grid-cols-2 lg:grid">
        <LeftPanel />
        <RightPanel />
      </div>
    </section>
  );
}

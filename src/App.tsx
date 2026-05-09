import Hero from "./sections/Hero";
import Experience from "./sections/Experience";
import ExperienceMobile from "./sections/Experience/Mobile";
import Beyond from "./sections/Beyond";
import BeyondMobile from "./sections/Beyond/Mobile";
import Impact from "./sections/Impact";
import ImpactMobile from "./sections/Impact/Mobile";
import SectionDots from "./components/SectionDots";

export default function App() {
  return (
    <>
      <SectionDots />
      <Hero />
      <div id="experience">
        <Experience />
        <ExperienceMobile />
      </div>
      <div id="beyond">
        <Beyond />
        <BeyondMobile />
      </div>
      <div id="impact">
        <Impact />
        <ImpactMobile />
      </div>
    </>
  );
}

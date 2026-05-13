import Hero from "./sections/Hero";
import Experience from "./sections/Experience";
import ExperienceMobile from "./sections/Experience/Mobile";
import Beyond from "./sections/Beyond";
import BeyondMobile from "./sections/Beyond/Mobile";
import Research from "./sections/Research";
import ResearchMobile from "./sections/Research/Mobile";
import SectionDots from "./components/SectionDots";

export default function App() {
  return (
    <>
      <SectionDots />
      <main>
        <Hero />
        <div id="experience">
          <Experience />
          <ExperienceMobile />
        </div>
        <div id="beyond">
          <Beyond />
          <BeyondMobile />
        </div>
        <div id="research">
          <Research />
          <ResearchMobile />
        </div>
      </main>
    </>
  );
}

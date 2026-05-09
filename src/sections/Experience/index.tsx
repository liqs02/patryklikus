import { useState } from "react";
import { motion } from "framer-motion";
import AccentUnderline from "../../components/AccentUnderline";
import { useSectionInView } from "../../lib/motion";
import Cards from "./Cards";
import DetailPanel from "./DetailPanel";
import { JOB_OF_PROJECT, MOTOROLA, TOMTOM, type ProjectKey } from "./data";

export default function Experience() {
  const { sectionRef, inView } = useSectionInView();
  const [selected, setSelected] = useState<ProjectKey>("overture");
  const activeJob = JOB_OF_PROJECT[selected] === "tomtom" ? TOMTOM : MOTOROLA;

  return (
    <section
      ref={sectionRef}
      className="relative hidden h-screen w-full overflow-hidden lg:block lg:[scroll-snap-align:start] lg:[scroll-snap-stop:always]"
    >
      <motion.div
        aria-hidden
        initial={{ x: "100%" }}
        animate={inView ? { x: "0%" } : { x: "100%" }}
        transition={{ duration: 0.7, delay: inView ? 0.2 : 0, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-0 top-0 bottom-0 w-1/2 bg-[#0e1116]"
      />
      <div className="relative mx-auto grid h-full w-full max-w-[1500px] grid-cols-2">
        <div className="relative px-12 pt-[10vh] pb-14 xl:px-20">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.5, delay: inView ? 0.1 : 0 }}
            className="text-[11px] text-[var(--color-accent)]"
          >
            Experience
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: inView ? 0.15 : 0 }}
            className="mt-5 text-[44px] font-bold leading-tight text-[var(--color-text)]"
          >
            Where I've built things
          </motion.h2>
          <AccentUnderline inView={inView} />
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: inView ? 0.4 : 0 }}
            className="mt-4 text-[15px] text-[var(--color-muted)]"
          >
            Click a company to explore its projects.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.7, x: "-6%" }}
            animate={
              inView
                ? { opacity: 1, scale: 1, x: "0%" }
                : { opacity: 0, scale: 0.7, x: "-6%" }
            }
            transition={{ duration: 0.7, delay: inView ? 0.2 : 0, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "left top" }}
            className="mt-16"
          >
            <Cards inView={inView} selected={selected} onSelect={setSelected} />
          </motion.div>
        </div>

        <div className="relative flex items-center px-12 pb-24 xl:px-20">
          <DetailPanel
            inView={inView}
            selected={selected}
            activeJob={activeJob}
            onSelect={setSelected}
          />
        </div>
      </div>
    </section>
  );
}

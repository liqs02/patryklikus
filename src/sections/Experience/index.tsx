import { useState } from "react";
import { motion } from "framer-motion";
import { EASE, useSectionInView } from "../../lib/motion";
import RolesIndex from "./RolesIndex";
import FeaturePanel from "./FeaturePanel";
import { COPY, JOB_OF_PROJECT, MOTOROLA, TOMTOM, type JobId, type ProjectKey } from "./data";

const FIRST_PROJECT_OF: Record<JobId, ProjectKey> = {
  tomtom: "overture",
  motorola: "ai-dispatch",
};

export default function Experience() {
  const { sectionRef, inView } = useSectionInView();
  const [selected, setSelected] = useState<ProjectKey>("overture");
  const activeJob = JOB_OF_PROJECT[selected] === "tomtom" ? TOMTOM : MOTOROLA;
  const handleSelectJob = (id: JobId) => setSelected(FIRST_PROJECT_OF[id]);

  return (
    <section
      ref={sectionRef}
      className="relative hidden min-h-screen w-full overflow-hidden bg-[var(--color-bg)] lg:block lg:[scroll-snap-align:start] lg:[scroll-snap-stop:always]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#1e293b] to-transparent"
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.2, delay: inView ? 0.3 : 0, ease: EASE }}
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 85% 30%, rgba(16,185,129,0.10), transparent 45%), radial-gradient(circle at 12% 78%, rgba(16,185,129,0.06), transparent 48%)",
        }}
      />

      <div className="relative mx-auto flex min-h-screen max-w-[1500px] flex-col px-12 pt-[10vh] pb-14 xl:px-20">
        <div className="flex items-end justify-between">
          <div className="max-w-[760px]">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: inView ? 0.15 : 0 }}
              className="text-[64px] font-bold leading-[1.02] tracking-[-0.02em] text-[var(--color-text)]"
            >
              {COPY.titleStart}<span className="text-[var(--color-accent)]">{COPY.titleAccent}</span>{COPY.titleEnd}
            </motion.h2>
          </div>
        </div>

        <div className="mt-16 flex flex-1 items-start">
          <div className="grid w-full grid-cols-12 gap-x-16">
            <div className="col-span-5">
              <RolesIndex
                inView={inView}
                activeJobId={activeJob.id}
                onSelectJob={handleSelectJob}
              />
            </div>
            <div className="col-span-7">
              <FeaturePanel
                inView={inView}
                selected={selected}
                activeJob={activeJob}
                onSelect={setSelected}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

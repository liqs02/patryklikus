import { useRef } from "react";
import { useInView } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export function useSectionInView() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { amount: 0.3, once: false });
  return { sectionRef, inView };
}

export const fadeIn = (inView: boolean, delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
  transition: { duration: 0.5, delay: inView ? delay : 0, ease: EASE },
});

import { EASE } from "../../lib/motion";

export const slideIn = (delay = 0) => ({
  initial: { opacity: 0, x: -18 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5, delay, ease: EASE },
});

import { motion } from "framer-motion";

type Props = {
  inView: boolean;
  delay?: number;
  className?: string;
};

export default function AccentUnderline({
  inView,
  delay = 0.3,
  className = "mt-3 h-[3px] w-[72px] rounded-sm bg-[var(--color-accent)]",
}: Props) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
      transition={{ duration: 0.5, delay: inView ? delay : 0 }}
      style={{ transformOrigin: "left" }}
      className={className}
    />
  );
}

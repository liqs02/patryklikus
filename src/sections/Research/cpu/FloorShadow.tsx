import { PCB_W } from "./constants";

export default function FloorShadow() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute"
        style={{
          width: PCB_W * 1.4,
          height: PCB_W * 0.28,
          left: "50%",
          top: "78%",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.75), transparent 70%)",
          filter: "blur(22px)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute"
        style={{
          width: PCB_W * 1.2,
          height: PCB_W * 0.6,
          left: "50%",
          top: "58%",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(ellipse at center, rgba(167,139,250,0.42), transparent 72%)",
          filter: "blur(48px)",
        }}
      />
    </>
  );
}

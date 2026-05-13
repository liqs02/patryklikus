import { PCB_D } from "./constants";

type PinStripProps = {
  count: number;
  horizontal: boolean;
};

export default function PinStrip({ count, horizontal }: PinStripProps) {
  return (
    <div
      className={`absolute inset-0 flex ${
        horizontal
          ? "items-end justify-around px-[6px] pb-[2px]"
          : "flex-col justify-around py-[6px] pl-[2px] items-start"
      }`}
    >
      {Array.from({ length: count }, (_, i) => (
        <span
          key={i}
          aria-hidden
          style={
            horizontal
              ? {
                  width: 2,
                  height: PCB_D * 0.55,
                  background:
                    "linear-gradient(to bottom, rgba(196,181,253,0.65), rgba(196,181,253,0.15))",
                }
              : {
                  width: PCB_D * 0.55,
                  height: 2,
                  background:
                    "linear-gradient(to right, rgba(196,181,253,0.65), rgba(196,181,253,0.15))",
                }
          }
        />
      ))}
    </div>
  );
}

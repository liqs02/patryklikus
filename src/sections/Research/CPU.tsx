import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "../../lib/motion";
import Backdrop from "./cpu/Backdrop";
import FloorShadow from "./cpu/FloorShadow";
import IHSTop from "./cpu/IHSTop";
import PCBTop from "./cpu/PCBTop";
import PinGrid from "./cpu/PinGrid";
import PinStrip from "./cpu/PinStrip";
import {
  IHS_D,
  IHS_INSET_BOTTOM,
  IHS_INSET_LEFT,
  IHS_INSET_RIGHT,
  IHS_INSET_TOP,
  PCB_D,
  PCB_SIDE_BG,
  PCB_TOP_BG,
  PCB_W,
  IHS_SIDE_BG,
  IHS_TOP_BG,
  TILT_X,
  TILT_Y,
} from "./cpu/constants";

type CPUProps = {
  tiltY?: number;
  tiltX?: number;
  ihsInsetTop?: number;
  ihsInsetLeft?: number;
  ihsInsetBottom?: number;
  ihsInsetRight?: number;
  animateEntry?: boolean;
};

export default function CPU({
  tiltY = TILT_Y,
  tiltX = TILT_X,
  ihsInsetTop = IHS_INSET_TOP,
  ihsInsetLeft = IHS_INSET_LEFT,
  ihsInsetBottom = IHS_INSET_BOTTOM,
  ihsInsetRight = IHS_INSET_RIGHT,
  animateEntry = true,
}: CPUProps = {}) {
  const reduced = useReducedMotion();
  const skipEntry = !animateEntry || !!reduced;
  const ihsW = PCB_W - ihsInsetLeft - ihsInsetRight;
  const ihsH = PCB_W - ihsInsetTop - ihsInsetBottom;
  const lightFromRight = tiltY > 0;
  const gradientAngle = lightFromRight ? "225deg" : "135deg";
  const radialX = lightFromRight ? "75%" : "25%";

  const pcbHalf = PCB_D / 2;
  const ihsHalf = IHS_D / 2;

  return (
    <motion.div
      initial={skipEntry ? { opacity: 1, x: 0 } : { opacity: 0, x: 36 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, margin: "-15% 0px" }}
      transition={{ duration: skipEntry ? 0 : 0.85, ease: EASE }}
      className="relative flex aspect-square items-center justify-center self-start"
      style={{ perspective: 1700 }}
    >
      <Backdrop />
      <FloorShadow />

      <motion.div
        animate={
          reduced
            ? {}
            : { rotateY: [tiltY - 0.7, tiltY + 0.7, tiltY - 0.7] }
        }
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{
          width: PCB_W,
          height: PCB_W,
          position: "relative",
          transformStyle: "preserve-3d",
          rotateX: tiltX,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            transform: `translateZ(${pcbHalf}px)`,
            background: PCB_TOP_BG,
            border: "1px solid rgba(167,139,250,0.24)",
            borderRadius: 4,
            overflow: "hidden",
            boxShadow:
              "inset 0 1px 0 rgba(196,181,253,0.14), inset 0 -1px 0 rgba(0,0,0,0.6)",
          }}
        >
          <PCBTop />
        </div>

        <div
          className="absolute"
          style={{
            width: PCB_W,
            height: PCB_D,
            top: -pcbHalf,
            left: 0,
            transform: "rotateX(90deg)",
            background: PCB_SIDE_BG,
            borderTop: "1px solid rgba(167,139,250,0.16)",
            borderBottom: "1px solid rgba(0,0,0,0.55)",
          }}
        />
        <div
          className="absolute"
          style={{
            width: PCB_W,
            height: PCB_D,
            top: PCB_W - pcbHalf,
            left: 0,
            transform: "rotateX(90deg)",
            background: PCB_SIDE_BG,
            borderTop: "1px solid rgba(167,139,250,0.16)",
            borderBottom: "1px solid rgba(0,0,0,0.55)",
          }}
        >
          <PinStrip count={36} horizontal />
        </div>
        <div
          className="absolute"
          style={{
            width: PCB_D,
            height: PCB_W,
            top: 0,
            left: -pcbHalf,
            transform: "rotateY(90deg)",
            background: PCB_SIDE_BG,
            borderLeft: "1px solid rgba(167,139,250,0.16)",
            borderRight: "1px solid rgba(0,0,0,0.55)",
          }}
        >
          <PinStrip count={36} horizontal={false} />
        </div>
        <div
          className="absolute"
          style={{
            width: PCB_D,
            height: PCB_W,
            top: 0,
            left: PCB_W - pcbHalf,
            transform: "rotateY(90deg)",
            background: PCB_SIDE_BG,
            borderLeft: "1px solid rgba(167,139,250,0.16)",
            borderRight: "1px solid rgba(0,0,0,0.55)",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            transform: `translateZ(-${pcbHalf}px) rotateY(180deg)`,
            background: "#030206",
            borderRadius: 4,
            overflow: "hidden",
          }}
        >
          <PinGrid />
        </div>

        <div
          style={{
            position: "absolute",
            left: ihsInsetLeft,
            top: ihsInsetTop,
            width: ihsW,
            height: ihsH,
            transformStyle: "preserve-3d",
            transform: `translateZ(${pcbHalf + ihsHalf}px)`,
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              transform: `translateZ(${ihsHalf}px)`,
              background: IHS_TOP_BG,
              border: "1px solid rgba(196,181,253,0.45)",
              borderRadius: 3,
              overflow: "hidden",
              boxShadow:
                "inset 0 1.5px 0 rgba(196,181,253,0.4), inset 0 -1.5px 0 rgba(0,0,0,0.55), 0 8px 16px -4px rgba(0,0,0,0.6)",
            }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background: `linear-gradient(${gradientAngle}, rgba(255,255,255,0.16) 0%, rgba(196,181,253,0.1) 25%, transparent 55%)`,
              }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background: `radial-gradient(ellipse 60% 60% at ${radialX} 20%, rgba(255,255,255,0.12), transparent 60%)`,
              }}
            />
            <IHSTop reduced={!!reduced} />
          </div>

          <div
            className="absolute"
            style={{
              width: ihsW,
              height: IHS_D,
              top: -ihsHalf,
              left: 0,
              transform: "rotateX(90deg)",
              background: IHS_SIDE_BG,
              borderTop: "1px solid rgba(196,181,253,0.36)",
              borderBottom: "1px solid rgba(0,0,0,0.55)",
            }}
          />
          <div
            className="absolute"
            style={{
              width: ihsW,
              height: IHS_D,
              top: ihsH - ihsHalf,
              left: 0,
              transform: "rotateX(90deg)",
              background: IHS_SIDE_BG,
              borderTop: "1px solid rgba(196,181,253,0.36)",
              borderBottom: "1px solid rgba(0,0,0,0.55)",
            }}
          />
          <div
            className="absolute"
            style={{
              width: IHS_D,
              height: ihsH,
              top: 0,
              left: -ihsHalf,
              transform: "rotateY(90deg)",
              background: IHS_SIDE_BG,
              borderLeft: "1px solid rgba(196,181,253,0.36)",
              borderRight: "1px solid rgba(0,0,0,0.55)",
            }}
          />
          <div
            className="absolute"
            style={{
              width: IHS_D,
              height: ihsH,
              top: 0,
              left: ihsW - ihsHalf,
              transform: "rotateY(90deg)",
              background: IHS_SIDE_BG,
              borderLeft: "1px solid rgba(196,181,253,0.36)",
              borderRight: "1px solid rgba(0,0,0,0.55)",
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

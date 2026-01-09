"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function BackgroundParallax() {
  // normalized cursor offsets
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // smooth inertia (critical)
  const smoothX = useSpring(x, { stiffness: 40, damping: 25, mass: 1 });
  const smoothY = useSpring(y, { stiffness: 40, damping: 25, mass: 1 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      const cx = e.clientX / window.innerWidth - 0.5;
      const cy = e.clientY / window.innerHeight - 0.5;

      x.set(cx);
      y.set(cy);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      
      {/* LAYER 1 – slow, deep */}
      <motion.div
        style={{
          x: smoothX.get() * 20,
          y: smoothY.get() * 20,
        }}
        className="absolute inset-0"
      >
        <div
          className="absolute left-1/4 top-1/4 w-[600px] h-[600px]"
          style={{
            background:
              "radial-gradient(circle, rgba(99,102,241,0.25), transparent 70%)",
            filter: "blur(120px)",
          }}
        />
      </motion.div>

      {/* LAYER 2 – medium depth */}
      <motion.div
        style={{
          x: smoothX.get() * 35,
          y: smoothY.get() * 35,
        }}
        className="absolute inset-0"
      >
        <div
          className="absolute right-1/4 bottom-1/4 w-[450px] h-[450px]"
          style={{
            background:
              "radial-gradient(circle, rgba(236,72,153,0.25), transparent 70%)",
            filter: "blur(90px)",
          }}
        />
      </motion.div>

      {/* LAYER 3 – fast, subtle */}
      <motion.div
        style={{
          x: smoothX.get() * 50,
          y: smoothY.get() * 50,
        }}
        className="absolute inset-0"
      >
        <div
          className="absolute left-1/2 top-1/3 w-[300px] h-[300px]"
          style={{
            background:
              "radial-gradient(circle, rgba(34,211,238,0.25), transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </motion.div>
    </div>
  );
}

"use client";

import { useEffect, useMemo } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

// Subtle, depthy parallax background that reacts to cursor without following it
export default function BackgroundParallax() {

    // Normalized cursor position in range [-0.5, 0.5]
    const normX = useMotionValue(0);
    const normY = useMotionValue(0);

    // Spring smoothing for inertial feel
    const smoothX = useSpring(normX, { stiffness: 120, damping: 22, mass: 0.6 });
    const smoothY = useSpring(normY, { stiffness: 120, damping: 22, mass: 0.6 });

    useEffect(() => {
        const mql = window.matchMedia("(pointer: coarse)");

        const handleMove = (event: MouseEvent) => {
            const x = event.clientX / window.innerWidth - 0.5;
            const y = event.clientY / window.innerHeight - 0.5;
            normX.set(x);
            normY.set(y);
        };

        if (!mql.matches) {
            window.addEventListener("mousemove", handleMove, { passive: true });
        }

        return () => {
            window.removeEventListener("mousemove", handleMove);
        };
    }, [normX, normY]);

    // Layer strengths for parallax offsets (px)
    const layers = useMemo(
        () => [
            { strength: 18, size: 520, opacity: 0.55, colors: ["rgba(139,92,246,0.45)", "rgba(139,92,246,0)"] },
            { strength: 32, size: 680, opacity: 0.5, colors: ["rgba(59,130,246,0.4)", "rgba(59,130,246,0)"] },
            { strength: 46, size: 820, opacity: 0.45, colors: ["rgba(45,212,191,0.38)", "rgba(45,212,191,0)"] },
        ],
        []
    );

    return (
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
            {layers.map(({ strength, size, opacity, colors }, idx) => {
                const translateX = useTransform(smoothX, (v) => v * strength);
                const translateY = useTransform(smoothY, (v) => v * strength);

                return (
                    <motion.div
                        key={strength}
                        aria-hidden
                        style={{ translateX, translateY }}
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        <div
                            className="rounded-full"
                            style={{
                                width: size,
                                height: size,
                                opacity,
                                filter: "blur(90px)",
                                background: `radial-gradient(circle at center, ${colors[0]}, ${colors[1]})`,
                                mixBlendMode: "screen",
                                willChange: "transform",
                            }}
                        />
                    </motion.div>
                );
            })}
        </div>
    );
}

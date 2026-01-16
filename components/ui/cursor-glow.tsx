"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// Premium cursor-following glow that stays behind content
export default function CursorGlow() {
    const [enabled, setEnabled] = useState(false);

    // Track raw pointer position
    const x = useMotionValue(-1000);
    const y = useMotionValue(-1000);

    // Smooth inertia using springs
    const smoothX = useSpring(x, { stiffness: 180, damping: 24, mass: 0.6 });
    const smoothY = useSpring(y, { stiffness: 180, damping: 24, mass: 0.6 });

    useEffect(() => {
        // Disable on touch / coarse pointers
        const mql = window.matchMedia("(pointer: coarse)");
        const update = () => setEnabled(!mql.matches);
        update();
        mql.addEventListener("change", update);

        const handleMove = (event: MouseEvent) => {
            x.set(event.clientX);
            y.set(event.clientY);
        };

        if (!mql.matches) {
            window.addEventListener("mousemove", handleMove);
        }

        return () => {
            mql.removeEventListener("change", update);
            window.removeEventListener("mousemove", handleMove);
        };
    }, [x, y]);

    if (!enabled) return null;

    return (
        <motion.div
            aria-hidden
            style={{ translateX: smoothX, translateY: smoothY }}
            className="pointer-events-none fixed inset-0 z-0"
        >
            <div
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{
                    width: 520,
                    height: 520,
                    background: "radial-gradient(circle at center, rgba(99,102,241,0.35), rgba(99,102,241,0))",
                    filter: "blur(90px)",
                    opacity: 0.35,
                    mixBlendMode: "screen",
                }}
            />
        </motion.div>
    );
}

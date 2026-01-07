"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AnimatedBackground() {
    const blobRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const blob = blobRef.current;
        if (!blob) return;

        const moveBlob = (e: MouseEvent) => {
            const x = e.clientX;
            const y = e.clientY;

            gsap.to(blob, {
                x: x,
                y: y,
                duration: 2, // Slower duration for a "laggy" ambient feel
                ease: "power2.out",
            });
        };

        window.addEventListener("mousemove", moveBlob);

        return () => {
            window.removeEventListener("mousemove", moveBlob);
        };
    }, []);

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
            <div
                ref={blobRef}
                className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 mix-blend-screen opacity-50 will-change-transform"
            />
        </div>
    );
}

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const followerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;

        if (!cursor || !follower) return;

        const moveCursor = (e: MouseEvent) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
            });
            gsap.to(follower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.3,
            });
        };

        window.addEventListener("mousemove", moveCursor);

        // Add hover effect for links and buttons
        const handleHoverStart = () => {
            gsap.to(cursor, { scale: 0.5, duration: 0.2 });
            gsap.to(follower, { scale: 2, backgroundColor: "var(--accent)", opacity: 0.5, duration: 0.2 });
        };

        const handleHoverEnd = () => {
            gsap.to(cursor, { scale: 1, duration: 0.2 });
            gsap.to(follower, { scale: 1, backgroundColor: "transparent", opacity: 1, duration: 0.2 });
        };

        const targets = document.querySelectorAll("a, button");
        targets.forEach((target) => {
            target.addEventListener("mouseenter", handleHoverStart);
            target.addEventListener("mouseleave", handleHoverEnd);
        });

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            targets.forEach((target) => {
                target.removeEventListener("mouseenter", handleHoverStart);
                target.removeEventListener("mouseleave", handleHoverEnd);
            });
        };
    }, []);

    return (
        <>
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-3 h-3 bg-accent rounded-full pointer-events-none z-50 mix-blend-difference -translate-x-1/2 -translate-y-1/2"
            />
            <div
                ref={followerRef}
                className="fixed top-0 left-0 w-8 h-8 border border-accent rounded-full pointer-events-none z-50 mix-blend-difference -translate-x-1/2 -translate-y-1/2 transition-colors"
            />
        </>
    );
}

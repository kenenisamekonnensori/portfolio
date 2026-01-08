"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const updateProgress = () => {
            const scrollY = window.scrollY;
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const ratio = maxScroll > 0 ? scrollY / maxScroll : 0;
            setProgress(Math.min(Math.max(ratio, 0), 1));
        };

        const handleScroll = () => requestAnimationFrame(updateProgress);

        updateProgress();
        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    return (
        <div className="fixed left-0 top-0 w-full h-[3px] bg-border/40 z-40 pointer-events-none">
            <div
                className="absolute left-0 top-0 h-full bg-accent"
                style={{ width: `${progress * 100}%` }}
            />
        </div>
    );
}

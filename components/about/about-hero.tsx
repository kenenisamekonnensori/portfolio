"use client";

import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import MagneticButton from "@/components/ui/magnetic-button";
import { useEffect, useRef, useState } from "react";

function CountUp({ to, duration = 1200, prefix = "", suffix = "" }: { to: number; duration?: number; prefix?: string; suffix?: string }) {
    const ref = useRef<HTMLDivElement | null>(null);
    const [value, setValue] = useState(0);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        let started = false;
        let raf = 0;
        const obs = new IntersectionObserver(
            (entries) => {
                if (!started && entries[0]?.isIntersecting) {
                    started = true;
                    const start = performance.now();
                    const step = (t: number) => {
                        const p = Math.min((t - start) / duration, 1);
                        setValue(Math.round(p * to));
                        if (p < 1) raf = requestAnimationFrame(step);
                    };
                    raf = requestAnimationFrame(step);
                }
            },
            { threshold: 0.4 }
        );
        obs.observe(el);
        return () => {
            cancelAnimationFrame(raf);
            obs.disconnect();
        };
    }, [to, duration]);

    return (
        <div ref={ref}>
            <span className="text-3xl font-bold text-accent">{prefix}{value}{suffix}</span>
        </div>
    );
}

export default function AboutHero() {
    return (
        <section className="px-6 md:px-20 bg-[radial-gradient(circle_at_15%_20%,#141414,transparent_35%),linear-gradient(140deg,#080808,#0e0f13)] min-h-[calc(100vh-5rem)] flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
                {/* Left: professional narrative */}
                <div className="flex flex-col gap-6 lg:pt-6">
                    <motion.h2
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-3xl md:text-4xl font-display font-bold leading-tight"
                    >
                        Full‑stack developer.
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-muted text-lg leading-relaxed max-w-2xl"
                    >
                        My journey started with curiosity about how things work and grew into a career across frontend, backend, and everything between.
                    </motion.p>
                    {/* <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-muted text-lg leading-relaxed max-w-2xl"
                    >
                        Today I focus on crafting seamless user experiences while maintaining robust, scalable infrastructure. I believe the best software blends intuitive design with sound engineering principles.
                    </motion.p> */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-muted text-lg leading-relaxed max-w-2xl"
                    >
                        When I'm not coding, you’ll find me exploring new technologies, contributing to open‑source, or writing about the craft.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex items-center gap-6"
                    >
                        <MagneticButton className="flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-full text-sm font-bold uppercase tracking-wider hover:bg-white transition-colors">
                            <span>Download Resume</span>
                            <div className="w-2 h-2 bg-black rounded-full" />
                        </MagneticButton>
                        <div className="flex gap-4">
                            <a href="#" className="p-3 border border-border rounded-full hover:border-accent hover:text-accent transition-colors">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="p-3 border border-border rounded-full hover:border-accent hover:text-accent transition-colors">
                                <Github size={20} />
                            </a>
                        </div>
                    </motion.div>
                    {/* Metrics inline to keep section full-screen */}
                    <div className="grid grid-cols-3 gap-6 max-w-4xl pt-4">
                        <div>
                            <CountUp to={5} suffix="+" />
                            <div className="text-sm text-muted">Years Experience</div>
                        </div>
                        <div>
                            <CountUp to={20} suffix="+" />
                            <div className="text-sm text-muted">Projects Delivered</div>
                        </div>
                        <div>
                            <CountUp to={10} suffix="+" />
                            <div className="text-sm text-muted">Technologies</div>
                        </div>
                    </div>
                </div>

                {/* Right: code profile card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full overflow-x-auto rounded-3xl border border-accent/30 bg-[linear-gradient(180deg,#0b0f15,#0a0a0a)] p-4 md:p-6 shadow-[0_0_60px_-30px_rgba(212,255,0,.4)]"
                >
                    <pre className="text-sm md:text-base font-mono leading-relaxed text-foreground/90 whitespace-pre-wrap wrap-break-word">
                        <span className="text-sky-300">const</span> <span className="text-emerald-300">developer</span> = {'{'}
                        {"\n"}  <span className="text-muted">name</span>: <span className="text-accent">"Kenenisa Mekonnen"</span>,
                        {"\n"}  <span className="text-muted">location</span>: <span className="text-accent">"Ethiopia"</span>,
                        {"\n"}  <span className="text-muted">role</span>: <span className="text-accent">"Full‑Stack Developer"</span>,
                        {"\n"}  <span className="text-muted">focus</span>: [<span className="text-accent">"React"</span>, <span className="text-accent">"Node.js"</span>, <span className="text-accent">"TypeScript"</span>],
                        {"\n"}  <span className="text-muted">passion</span>: <span className="text-accent">"Clean Code & Great UX"</span>
                        {"\n"}{'}'};<span className="caret-blink">|</span>
                    </pre>
                </motion.div>
            </div>
        </section>
    );
}

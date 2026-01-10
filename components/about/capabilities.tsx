"use client";

import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiFramer, SiGreensock, SiTypescript } from "react-icons/si";
import { Code2, Database, GitBranch, Cloud, Server } from "lucide-react";

const skills = [
    { name: "HTML", icon: FaHtml5, color: "#E34F26" },
    { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
    { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#38B2AC" },
    { name: "Framer", icon: SiFramer, color: "#0055FF" },
    { name: "GSAP", icon: SiGreensock, color: "#88CE02" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Node.js", icon: FaNodeJs, color: "#339933" },
];

export default function Capabilities() {
    const lanes = [
        {
            title: "Frontend",
            accent: "text-sky-300",
            underline: "bg-sky-300/70",
            items: [
                { label: "React / Next.js", icon: Code2 },
                { label: "TypeScript", icon: Code2 },
                { label: "Tailwind CSS", icon: Code2 },
                { label: "Framer Motion", icon: Code2 },
            ],
        },
        {
            title: "Backend",
            accent: "text-amber-300",
            underline: "bg-amber-300/70",
            items: [
                { label: "Node.js / Express", icon: Server },
                { label: "PostgreSQL", icon: Database },
                { label: "API Design", icon: GitBranch },
                { label: "Authentication", icon: GitBranch },
            ],
        },
        {
            title: "DevOps & Tools",
            accent: "text-emerald-300",
            underline: "bg-emerald-300/70",
            items: [
                { label: "Docker", icon: Cloud },
                { label: "Git / GitHub", icon: GitBranch },
                { label: "AWS", icon: Cloud },
                { label: "CI/CD Pipelines", icon: Cloud },
            ],
        },
    ];

    const laneVariants = {
        hidden: { opacity: 0, y: 24 },
        show: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
        }),
    };

    return (
        <section className="py-24 px-6 md:px-20 bg-[radial-gradient(circle_at_80%_30%,#0d1824,transparent_35%),linear-gradient(135deg,#080808,#0c1118)] overflow-hidden min-h-[80vh] flex items-center">
            <div className="flex flex-col gap-12 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-6xl font-display font-bold uppercase mb-8"
                        >
                            My Capabilities
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-muted text-lg leading-relaxed max-w-lg"
                        >
                            I am always looking to add more skills. Constantly learning and experimenting with new technologies to build better web experiences.
                        </motion.p>
                    </div>

                    <div className="relative flex justify-center items-center h-125">
                        {/* Rotating Circle Container */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="relative w-100 h-100 rounded-full border border-white/10"
                        >
                            {skills.map((skill, index) => {
                                const angle = (index / skills.length) * 360;
                                const radius = 200; // Half of width/height
                                const x = Math.cos((angle * Math.PI) / 180) * radius;
                                const y = Math.sin((angle * Math.PI) / 180) * radius;

                                return (
                                    <motion.div
                                        key={skill.name}
                                        className="absolute top-1/2 left-1/2 w-16 h-16 bg-card border border-white/10 rounded-full flex items-center justify-center text-3xl shadow-lg"
                                        style={{
                                            x,
                                            y,
                                            marginLeft: "-32px", // Half of width
                                            marginTop: "-32px", // Half of height
                                            color: skill.color
                                        }}
                                    >
                                        {/* Counter-rotate icons so they stay upright */}
                                        <motion.div
                                            animate={{ rotate: -360 }}
                                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                        >
                                            <skill.icon />
                                        </motion.div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>

                        {/* Central Text or Logo (Optional) */}
                        <div className="absolute text-center">
                            <span className="text-xl font-bold uppercase tracking-widest text-muted">Tech<br />Stack</span>
                        </div>
                    </div>
                </div>

                {/* Horizontal lanes */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {lanes.map((lane, idx) => (
                        <motion.div
                            key={lane.title}
                            custom={idx}
                            variants={laneVariants}
                            className="rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-5 flex flex-col gap-4"
                        >
                            <div>
                                <div className={`text-lg font-semibold ${lane.accent}`}>{lane.title}</div>
                                <div className={`mt-2 h-0.5 w-24 ${lane.underline}`} />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {lane.items.map((item) => (
                                    <motion.div
                                        key={item.label}
                                        whileHover={{ y: -4, scale: 1.02 }}
                                        transition={{ type: "spring", stiffness: 240, damping: 18 }}
                                        className="flex flex-col items-center gap-2 text-center"
                                    >
                                        <div className="h-12 w-12 rounded-full border border-border/60 bg-background/60 flex items-center justify-center">
                                            <item.icon className="h-5 w-5 text-muted" />
                                        </div>
                                        <span className="text-sm text-foreground/90 leading-snug">{item.label}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

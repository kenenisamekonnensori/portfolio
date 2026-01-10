"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "@/lib/data";

const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export default function Experience() {
    return (
        <section className="py-24 px-6 md:px-20 bg-[radial-gradient(circle_at_20%_30%,#141414,transparent_35%),linear-gradient(135deg,#080808,#101010)]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="text-5xl md:text-6xl font-display font-bold uppercase"
                    >
                        My Experience
                    </motion.h2>
                </div>

                <div className="flex flex-col gap-16">
                    {EXPERIENCE.map((job, index) => (
                        <motion.div
                            key={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            transition={{ delay: index * 0.2 }}
                            className="flex flex-col gap-4 border-b border-border pb-12 last:border-0"
                        >
                            <div className="flex justify-between items-baseline mb-2">
                                <h3 className="text-2xl font-bold font-display">{job.role}</h3>
                                <span className="text-sm text-muted uppercase tracking-wider">{job.period}</span>
                            </div>

                            <h4 className={`text-lg font-medium ${index === 1 ? "text-accent" : "text-white"}`}>{job.company}</h4>

                            <p className="text-muted leading-relaxed max-w-xl">
                                {job.description}
                            </p>
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
}

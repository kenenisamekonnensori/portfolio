"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Download } from "lucide-react";
import MagneticButton from "@/components/ui/magnetic-button";

const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export default function AboutHero() {
    return (
        <section className="pt-32 pb-16 px-6 md:px-20 bg-background">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                {/* Left Content */}
                <div className="flex flex-col gap-12">
                    <motion.h1
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="text-6xl md:text-8xl font-display font-bold uppercase leading-[0.9]"
                    >
                        About Me
                    </motion.h1>

                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        transition={{ delay: 0.2 }}
                        className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-card"
                    >
                        <Image
                            src="/images/hero.JPG"
                            alt="About"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </div>

                {/* Right Content */}
                <div className="flex flex-col gap-10 lg:pt-24">
                    <motion.h2
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-3xl md:text-4xl font-display font-medium leading-tight"
                    >
                        I am a Full Stack developer based in Adama. Studied Computer Science and Engineering.
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-muted text-lg leading-relaxed"
                    >
                        I am a Full Stack developer based in Adama. Studied Computer Science and Engineering. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I'm exploring Reactjs, Webflow and a bit of Designing. While I am not programming, I enjoy playing football, photography and playing Valorant. Learning more to improve skill.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
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
                </div>
            </div>
        </section>
    );
}

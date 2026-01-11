"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, ArrowDown } from "lucide-react";
import MagneticButton from "@/components/ui/magnetic-button";
import Link from "next/link";
import { SOCIAL_LINKS } from "@/lib/data";

const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const staggerContainer = {
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

export default function Hero() {
    return (
        <section className="min-h-[calc(100vh-4rem)] flex flex-col justify-center px-6 md:px-20 pt-4 md:pt-6 pb-8 overflow-hidden bg-[radial-gradient(circle_at_20%_20%,#1a1a1a,transparent_35%),radial-gradient(circle_at_80%_0%,#141414,transparent_30%),linear-gradient(135deg,#080808,#0f1018)]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col gap-8"
                >
                    <div>
                        <motion.h1 variants={fadeUp} className="text-4xl md:text-7xl font-display font-bold uppercase leading-[0.9]">
                            Hi, I Am
                            <br />
                            <span className="text-white">Kenenisa Mekonnen.</span>
                        </motion.h1>
                    </div>

                    <motion.p variants={fadeUp} className="text-muted text-lg md:text-xl max-w-md leading-relaxed">
                        A highly creative Full Stack developer Building projects that solves problem
                    </motion.p>

                    <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-6">
                        <MagneticButton className="px-8 py-4 bg-accent text-accent-foreground rounded-full text-sm font-bold uppercase tracking-wider hover:bg-white transition-colors">
                            <Link href="#work" className="flex items-center gap-2">
                                View My Work <ArrowDown size={16} />
                            </Link>
                        </MagneticButton>

                        <div className="flex gap-4">
                            {SOCIAL_LINKS.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 border border-border rounded-full hover:border-accent hover:text-accent transition-colors duration-300"
                                >
                                    {link.icon === "Linkedin" && <Linkedin size={20} />}
                                    {link.icon === "Github" && <Github size={20} />}
                                    {link.icon === "Twitter" && <Twitter size={20} />}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                    className="relative w-full max-w-xs sm:max-w-sm md:max-w-sm lg:max-w-md aspect-square md:aspect-4/5 bg-card rounded-2xl overflow-hidden mx-auto lg:mr-0"
                >
                    <Image
                        src="/images/hero.JPG"
                        alt="Kenenisa Mekonnen"
                        fill
                        className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 ease-out"
                        priority
                    />
                </motion.div>
            </div>
        </section>
    );
}

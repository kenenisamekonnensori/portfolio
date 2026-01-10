"use client";

import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/magnetic-button";
import { Github, Linkedin, Twitter, Mail, MapPin, CheckCircle2, Copy } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/data";
import { useCallback, useState } from "react";

const container = {
    hidden: { opacity: 0, y: 12 },
    show: {
        opacity: 1,
        y: 0,
        transition: { staggerChildren: 0.08 },
    },
};

const item = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Contact() {
    const email = "Kenenisamekonnensori@gmail.com";
    const [copied, setCopied] = useState(false);

    const copyEmail = useCallback(async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 1400);
        } catch (_) {
            // noop
        }
    }, [email]);

    return (
        <section
            id="contact"
            className="relative py-28 px-6 md:px-20 min-h-[80vh] overflow-hidden"
        >
            {/* subtle animated accent line */}
            <motion.span
                aria-hidden
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="absolute left-6 md:left-20 top-24 h-0.75 w-24 origin-left bg-accent/90"
            />

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="mx-auto max-w-6xl"
            >
                {/* Header */}
                <motion.div variants={item} className="mb-12">
                    <h2 className="text-4xl md:text-6xl font-display font-bold">
                        Let's Work Together
                    </h2>
                    <p className="text-muted mt-3 max-w-2xl">
                        I'm always interested in hearing about new projects and opportunities.
                    </p>
                </motion.div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {/* Email card */}
                    <motion.div
                        variants={item}
                        className="md:col-span-2 group rounded-2xl border border-border bg-[radial-gradient(1200px_400px_at_10%_-20%,#0f1117_30%,transparent),linear-gradient(180deg,#0b0f15,#0a0a0a)] p-6 md:p-8 shadow-[0_0_40px_-20px_rgba(212,255,0,.25)]"
                    >
                        <div className="flex items-center gap-3 text-muted uppercase tracking-widest text-xs">
                            <Mail className="h-4 w-4 text-accent" />
                            <span>Email</span>
                        </div>
                        <div className="mt-4 flex flex-wrap items-center gap-4">
                            <a
                                href={`mailto:${email}`}
                                className="text-2xl md:text-3xl font-medium hover:text-accent transition-colors"
                            >
                                {email}
                            </a>
                            <button
                                onClick={copyEmail}
                                aria-label="Copy email"
                                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted hover:border-accent hover:text-foreground transition-colors"
                            >
                                {copied ? (
                                    <>
                                        <CheckCircle2 className="h-4 w-4 text-accent" /> Copied
                                    </>
                                ) : (
                                    <>
                                        <Copy className="h-4 w-4" /> Copy
                                    </>
                                )}
                            </button>
                        </div>

                        <div className="mt-8">
                            <MagneticButton className="bg-accent text-accent-foreground px-6 py-3 rounded-full font-semibold tracking-wide hover:bg-white transition-colors">
                                Say Hello
                            </MagneticButton>
                        </div>
                    </motion.div>

                    {/* Details */}
                    <motion.div
                        variants={item}
                        className="rounded-2xl border border-border bg-[radial-gradient(800px_300px_at_80%_-20%,#0f1117_30%,transparent),linear-gradient(180deg,#0b0f15,#0a0a0a)] p-6 md:p-8"
                    >
                        <div className="flex items-center gap-3 text-muted uppercase tracking-widest text-xs">
                            <MapPin className="h-4 w-4 text-accent" />
                            <span>Location</span>
                        </div>
                        <p className="mt-3 text-lg">Ethiopia</p>

                        <div className="mt-8 flex items-center gap-2 text-muted">
                            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                            <span className="uppercase tracking-widest text-xs">Open to opportunities</span>
                        </div>
                    </motion.div>
                </div>

                {/* Social row */}
                <motion.div variants={item} className="mt-10">
                    <div className="flex items-center gap-3 text-muted uppercase tracking-widest text-xs">
                        <span>Connect</span>
                    </div>
                    <div className="mt-4 flex gap-3">
                        {SOCIAL_LINKS.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card/40 backdrop-blur-sm transition-colors hover:border-accent"
                                aria-label={link.name}
                            >
                                {link.icon === "Linkedin" && (
                                    <Linkedin className="h-5 w-5 text-muted group-hover:text-foreground transition-colors" />
                                )}
                                {link.icon === "Github" && (
                                    <Github className="h-5 w-5 text-muted group-hover:text-foreground transition-colors" />
                                )}
                                {link.icon === "Twitter" && (
                                    <Twitter className="h-5 w-5 text-muted group-hover:text-foreground transition-colors" />
                                )}
                            </a>
                        ))}
                    </div>
                </motion.div>

                <motion.p variants={item} className="text-muted mt-16 text-xs">
                    © 2026 Kenenisa Mekonnen
                </motion.p>
            </motion.div>
        </section>
    );
}

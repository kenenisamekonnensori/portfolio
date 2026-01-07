"use client";

import MagneticButton from "@/components/ui/magnetic-button";
import { Github, Linkedin, Twitter } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/data";

export default function Contact() {
    return (
        <section id="contact" className="py-24 px-6 md:px-20 bg-background min-h-screen flex flex-col justify-between">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">

                {/* Left Side: Info */}
                <div className="flex flex-col gap-8">
                    <h2 className="text-4xl md:text-6xl font-display font-bold uppercase">
                        Let's Connect
                    </h2>
                    <p className="text-muted text-lg max-w-md">
                        Say hello at <a href="mailto:robert@gmail.com" className="text-white hover:text-accent transition-colors">robert@gmail.com</a>
                        <br />
                        For more info, here's my <a href="/resume.pdf" className="text-white hover:text-accent transition-colors">resume</a>.
                    </p>

                    <div className="flex gap-6 mt-8">
                        {SOCIAL_LINKS.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-accent hover:text-white transition-colors"
                            >
                                {link.icon === "Linkedin" && <Linkedin size={24} />}
                                {link.icon === "Github" && <Github size={24} />}
                                {link.icon === "Twitter" && <Twitter size={24} />}
                            </a>
                        ))}
                    </div>

                    <div className="mt-auto pt-20">
                        <p className="text-muted text-sm">© 2023 Robert Garcia</p>
                    </div>
                </div>

                {/* Right Side: Form */}
                <form className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="uppercase text-sm font-bold tracking-wider text-muted">Name</label>
                        <input
                            type="text"
                            id="name"
                            className="bg-card border border-border p-4 rounded-lg focus:outline-none focus:border-accent transition-colors text-white"
                            placeholder="John Doe"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="uppercase text-sm font-bold tracking-wider text-muted">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="bg-card border border-border p-4 rounded-lg focus:outline-none focus:border-accent transition-colors text-white"
                            placeholder="john@example.com"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="subject" className="uppercase text-sm font-bold tracking-wider text-muted">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            className="bg-card border border-border p-4 rounded-lg focus:outline-none focus:border-accent transition-colors text-white"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="message" className="uppercase text-sm font-bold tracking-wider text-muted">Message</label>
                        <textarea
                            id="message"
                            rows={6}
                            className="bg-card border border-border p-4 rounded-lg focus:outline-none focus:border-accent transition-colors text-white resize-none"
                        ></textarea>
                    </div>

                    <div className="mt-4">
                        <MagneticButton className="bg-accent text-accent-foreground px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-white transition-colors">
                            Submit
                        </MagneticButton>
                    </div>
                </form>

            </div>
        </section>
    );
}

"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedProjects() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const projects = gsap.utils.toArray<HTMLElement>(".project-card");
            if (!projects.length) return;

            const triggerTarget = containerRef.current ?? projects[0];

            // Reveal all project cards together when the section enters view
            gsap
                .timeline({
                    scrollTrigger: {
                        trigger: triggerTarget,
                        start: "top 80%",
                        toggleActions: "play none none none", // don't hide on scroll out
                    },
                })
                .from(projects, {
                    opacity: 0,
                    y: 80,
                    duration: 0.9,
                    ease: "power3.out",
                    stagger: 0, // simultaneous
                });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="work" ref={containerRef} className="py-24 px-6 md:px-20 bg-background">
            <div className="mb-16">
                <h2 className="text-4xl md:text-6xl font-display font-bold uppercase mb-4">
                    Featured Projects
                </h2>
                <p className="text-muted text-lg max-w-xl">
                    Here are some of the selected projects that showcase my passion for featured development.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10">
                {PROJECTS.map((project) => (
                    <div key={project.id} className="project-card flex flex-col gap-6 h-full">
                        {/* Image */}
                        <div className="relative aspect-video w-full bg-card rounded-xl overflow-hidden group">
                            <div className="absolute inset-0 bg-neutral-800 transition-transform duration-500 group-hover:scale-105" />
                            <div className="absolute inset-0 flex items-center justify-center text-muted">
                                [Project Image Placeholder]
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex flex-col gap-4 flex-1">
                            <h3 className="text-2xl font-display font-bold leading-tight">
                                {project.title}
                            </h3>

                            <div className="flex justify-between items-center text-muted uppercase text-sm tracking-wider border-t border-border pt-4">
                                <span>{project.category}</span>
                                <span>{project.year}</span>
                            </div>

                            <div className="flex gap-6 mt-auto">
                                <Link href={project.link} className="flex items-center gap-2 text-accent uppercase font-bold tracking-wider hover:text-white transition-colors">
                                    View Project <ArrowUpRight size={18} />
                                </Link>
                                <Link href={project.link} className="flex items-center gap-2 text-accent uppercase font-bold tracking-wider hover:text-white transition-colors">
                                    See on Github <ArrowUpRight size={18} />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

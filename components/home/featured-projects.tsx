"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS, ProjectCategory } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedProjects() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeCategory, setActiveCategory] = useState<"All" | ProjectCategory>("All");

    const filteredProjects = useMemo(
        () =>
            activeCategory === "All"
                ? PROJECTS
                : PROJECTS.filter((project) => project.category === activeCategory),
        [activeCategory]
    );

    useEffect(() => {
        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray<HTMLElement>(".project-card");
            if (!cards.length) return;

            // On initial load or category change: reveal cards immediately
            gsap.from(cards, {
                opacity: 0,
                y: 40,
                duration: 0.7,
                ease: "power3.out",
                stagger: 0.08,
                clearProps: "transform,opacity",
            });
        }, containerRef);

        return () => ctx.revert();
    }, [filteredProjects]);

    const categories: ("All" | ProjectCategory)[] = [
        "All",
        "Frontend",
        "Backend",
        "Fullstack",
        "Mobile",
    ];

    return (
        <section
            id="work"
            ref={containerRef}
            className="py-24 px-6 md:px-20 bg-[radial-gradient(circle_at_15%_30%,#0f1a2e,transparent_35%),radial-gradient(circle_at_85%_20%,#0b1222,transparent_30%),linear-gradient(135deg,#08090d,#0b0f1a)]"
        >
            <div className="mb-16">
                <h2 className="text-4xl md:text-6xl font-display font-bold uppercase mb-4">
                    Featured Projects
                </h2>
                <p className="text-muted text-lg max-w-xl">
                    Here are some of the selected projects that showcase my passion for featured development.
                </p>
            </div>

            <div className="flex flex-wrap gap-3 mb-12">
                {categories.map((category) => {
                    const isActive = activeCategory === category;
                    return (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 py-2 rounded-full border text-sm tracking-wide uppercase transition-colors duration-200 ${
                                isActive
                                    ? "bg-accent text-accent-foreground border-accent"
                                    : "border-border text-muted hover:text-white hover:border-accent"
                            }`}
                        >
                            {category}
                        </button>
                    );
                })}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10">
                {filteredProjects.map((project) => (
                    <Link
                        href={`/projects/${project.slug}`}
                        key={project.id}
                        className="project-card group flex flex-col gap-5 h-full rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm p-4 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.8)] hover:-translate-y-1 hover:border-accent transition-all duration-300"
                    >
                        <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl bg-neutral-900">
                            <Image
                                src={project.thumbnail}
                                alt={project.title}
                                fill
                                sizes="(min-width: 1280px) 33vw, (min-width: 768px) 45vw, 90vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                priority={project.id <= 2}
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-80" />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm uppercase tracking-wide text-white backdrop-blur">
                                    View details <ArrowUpRight size={16} />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 flex-1">
                            <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-muted">
                                <span>{project.category}</span>
                                <span>{project.year}</span>
                            </div>

                            <h3 className="text-2xl font-display font-bold leading-tight text-white">
                                {project.title}
                            </h3>

                            <p className="text-muted text-sm leading-relaxed line-clamp-3">
                                {project.shortDescription}
                            </p>

                            <div className="flex flex-wrap gap-2 pt-1">
                                {project.tech.slice(0, 5).map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-[12px] uppercase tracking-wide rounded-full bg-white/5 px-3 py-1 text-muted border border-border/60"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-auto flex gap-4 text-sm font-semibold uppercase tracking-wide text-accent">
                                {project.links.demo && (
                                    <span className="inline-flex items-center gap-2">
                                        Demo <ArrowUpRight size={16} />
                                    </span>
                                )}
                                {project.links.repo && (
                                    <span className="inline-flex items-center gap-2 text-muted group-hover:text-white transition-colors">
                                        Code <ArrowUpRight size={16} />
                                    </span>
                                )}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}

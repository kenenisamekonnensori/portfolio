import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/data";

type ProjectPageProps = {
    params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
    return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = PROJECTS.find((item) => item.slug === slug);
    if (!project) {
        return { title: "Project not found" };
    }
    return {
        title: `${project.title} | Projects`,
        description: project.shortDescription,
    };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = PROJECTS.find((item) => item.slug === slug);

    if (!project) {
        return notFound();
    }

    return (
        <main className="min-h-screen bg-background text-foreground pt-24 pb-16 px-6 md:px-10 max-w-5xl mx-auto">
            <div className="flex items-center justify-between gap-4 mb-6">
                <Link
                    href="/#work"
                    className="inline-flex items-center gap-2 text-sm uppercase tracking-wide text-muted hover:text-white transition-colors"
                >
                    <ArrowLeft size={18} /> Back to projects
                </Link>
                <div className="text-xs uppercase tracking-[0.25em] text-muted">
                    {project.category} • {project.year}
                </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card shadow-[0_30px_80px_-50px_rgba(0,0,0,0.9)]">
                <div className="relative h-80 sm:h-105 w-full">
                    <Image
                        src={project.thumbnail}
                        alt={project.title}
                        fill
                        sizes="(min-width: 1024px) 900px, 95vw"
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
                        <div>
                            <p className="text-sm uppercase tracking-[0.25em] text-muted">Case study</p>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white leading-tight">
                                {project.title}
                            </h1>
                        </div>
                        <div className="flex gap-3">
                            {project.links.demo && (
                                <Link
                                    href={project.links.demo}
                                    className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm uppercase tracking-wide text-white backdrop-blur hover:bg-white/20 transition-colors"
                                >
                                    Live demo <ArrowUpRight size={16} />
                                </Link>
                            )}
                            {project.links.repo && (
                                <Link
                                    href={project.links.repo}
                                    className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm uppercase tracking-wide text-white hover:border-accent hover:text-accent transition-colors"
                                >
                                    Code <ArrowUpRight size={16} />
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-10 mt-10">
                <div className="space-y-6 text-lg leading-relaxed text-muted">
                    <p>{project.description}</p>
                    <p>
                        This deep dive walks through the product story end-to-end—from the initial problem, the architectural
                        decisions, and the interactions that make the experience feel polished. The writeup mirrors how an
                        e-commerce product page reveals richer details as you scroll.
                    </p>
                    <div className="grid gap-4 rounded-2xl border border-border/60 bg-card/40 p-6">
                        <h2 className="text-xl font-display font-semibold text-white">Highlights</h2>
                        <ul className="space-y-3 text-sm leading-relaxed list-disc list-inside">
                            <li>Problem framing and goals: reduce friction, boost speed, and add trust at every step.</li>
                            <li>Architecture choices to balance resilience, performance, and developer velocity.</li>
                            <li>UX polish: micro-interactions, empty/loading states, and accessible navigation.</li>
                            <li>Observability and rollout strategy with feature flags and structured logging.</li>
                        </ul>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="rounded-2xl border border-border/50 bg-card/30 p-4">
                            <p className="text-xs uppercase tracking-[0.2em] text-muted mb-2">Role</p>
                            <p className="text-white font-semibold">Full build & polish</p>
                        </div>
                        <div className="rounded-2xl border border-border/50 bg-card/30 p-4">
                            <p className="text-xs uppercase tracking-[0.2em] text-muted mb-2">Scope</p>
                            <p className="text-white font-semibold">Product, UI, API</p>
                        </div>
                        <div className="rounded-2xl border border-border/50 bg-card/30 p-4">
                            <p className="text-xs uppercase tracking-[0.2em] text-muted mb-2">Status</p>
                            <p className="text-white font-semibold">Shipped</p>
                        </div>
                    </div>
                </div>

                <aside className="space-y-6">
                    <div className="rounded-2xl border border-border/50 bg-card/40 p-6">
                        <h3 className="text-lg font-display font-semibold text-white mb-4">Tech stack</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((item) => (
                                <span
                                    key={item}
                                    className="rounded-full border border-border/60 bg-white/5 px-3 py-1 text-xs uppercase tracking-wide text-muted"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-2xl border border-border/50 bg-card/40 p-6 space-y-3">
                        <h3 className="text-lg font-display font-semibold text-white">Project info</h3>
                        <div className="flex justify-between text-sm text-muted">
                            <span>Category</span>
                            <span className="text-white">{project.category}</span>
                        </div>
                        <div className="flex justify-between text-sm text-muted">
                            <span>Year</span>
                            <span className="text-white">{project.year}</span>
                        </div>
                        <p className="text-sm leading-relaxed text-muted">
                            Each case study is documented like a product detail page: overview up top, proof points in the
                            middle, and links to explore more when you are ready.
                        </p>
                    </div>
                </aside>
            </div>
        </main>
    );
}

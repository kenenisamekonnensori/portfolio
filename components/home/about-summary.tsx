"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutSummary() {
    return (
        <section id="about" className="py-24 px-6 md:px-20 bg-background flex flex-col md:flex-row gap-12 md:gap-24">
            <div className="md:w-1/3">
                <h2 className="text-4xl md:text-6xl font-display font-bold uppercase sticky top-32">
                    About Me
                </h2>
            </div>

            <div className="md:w-2/3 flex flex-col gap-8">
                <h3 className="text-2xl md:text-4xl font-display font-bold leading-tight text-muted">
                    I am a Full Stack developer based in Adama. Studied Computer Science and Engineering at Adama Science and Technology University.
                </h3>

                <p className="text-lg text-muted leading-relaxed max-w-2xl">
                    I am a specialized Full Stack developer based in Adama looking for opportunities to work with like-minded individuals and companies. I currently focus on Building Full Stack and AI powered applications.
                    <br /><br />
                    My passionate start in web development was building websites. After discovering programming I began focusing on Full Stack development.
                </p>

                <Link href="/about" className="inline-flex items-center gap-2 text-accent uppercase font-bold tracking-wider hover:text-white transition-colors mt-4">
                    More About Me <ArrowRight size={18} />
                </Link>
            </div>
        </section>
    );
}

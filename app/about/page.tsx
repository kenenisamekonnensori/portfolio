import Navbar from "@/components/ui/navbar";
import AboutHero from "@/components/about/about-hero";
import Capabilities from "@/components/about/capabilities";
import Experience from "@/components/about/experience";
import Contact from "@/components/home/contact";

export default function About() {
    return (
        <main className="min-h-screen bg-background text-foreground relative selection:bg-accent selection:text-accent-foreground pt-20 max-w-5xl mx-auto px-6 md:px-10">
            <Navbar />
            <AboutHero />
            <Capabilities />
            <Experience />
            <Contact />
        </main>
    );
}

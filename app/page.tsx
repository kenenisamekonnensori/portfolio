import Navbar from "@/components/ui/navbar";
import Hero from "@/components/home/hero";
import FeaturedProjects from "@/components/home/featured-projects";
import AboutSummary from "@/components/home/about-summary";
import Contact from "@/components/home/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground relative selection:bg-accent selection:text-accent-foreground pl-20">
      <Navbar />
      <Hero />
      <FeaturedProjects />
      <AboutSummary />
      <Contact />
    </main>
  );
}

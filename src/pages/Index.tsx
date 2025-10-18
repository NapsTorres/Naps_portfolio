import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import BeyondCoding from "@/components/BeyondCoding";
import Education from "@/components/Education"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-5xl mx-auto px-4 py-12 space-y-12">
        <Hero />
        
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-8">
            <About />
            <BeyondCoding />
          </div>
          
          <div className="space-y-8">
            <Experience />
          </div>
        </div>

        <Education/>
        <TechStack />
        <Projects />

        <footer className="text-center text-sm text-muted-foreground pt-8 pb-4">
          <p>Built with React, TypeScript & Tailwind CSS</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;

import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import BeyondCoding from "@/components/BeyondCoding";
import Education from "@/components/Education"
import Certificates from "@/components/Certificates";
import SocialMedia from "@/components/SocialMedia";

const Index = () => {
  return (
    <div className="min-h-screen bg-background dark:bg-black">
      <div className="container max-w-5xl mx-auto px-4 py-12 space-y-4">
        <Hero />
      </div>

        <div className="container max-w-5xl mx-auto px-4 mt-[40px] space-y-2">

          <div className="-mt-8 md:-mt-10 relative z-[5] grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch">
            <div className="lg:col-span-8 space-y-2 flex flex-col">
              <About />
              <BeyondCoding/>
            </div>

            <div className="lg:col-span-4 flex flex-col">
              <Experience />
            </div>
          </div>


          <div className="-mt-8 md:-mt-10 relative z-[5]">
            <Education />
          </div>

          
          <div className="-mt-8 md:-mt-10 relative z-[5] grid grid-cols-1 lg:grid-cols-12 gap-2 items-stretch">
            <div className="lg:col-span-5 flex flex-col">
              <Certificates />
            </div>
            <div className="lg:col-span-7 flex flex-col">
              <TechStack />
            </div>
          </div>

          <div className="-mt-8 md:-mt-10 relative z-[5] grid grid-cols-1 xl:grid-cols-12 gap-2 items-stretch">
            <div className="xl:col-span-10 flex flex-col">
              <Projects />
            </div>
            <div className="xl:col-span-2 flex flex-col">
              <SocialMedia />
            </div>
          </div>

          <footer className="text-center text-sm text-muted-foreground dark:text-gray-400 pt-8 pb-4">
            <p>Built with React, TypeScript & Tailwind CSS</p>
          </footer>
        </div>
      </div>
  );
};

export default Index;

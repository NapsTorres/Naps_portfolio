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

          <div className="-mt-8 md:-mt-10 relative z-[5] flex flex-col md:flex-row gap-2 items-start">
            <div className="md:w-[63%] w-full space-y-2">
              <About />
              <BeyondCoding/>
            </div>

            <div className="md:w-[36%] w-full space-y-6">
              <Experience />
            </div>
          </div>


          <div className="-mt-8 md:-mt-10 relative z-[5]">
            <Education />
          </div>

          
          <div className="-mt-8 md:-mt-10 relative z-[5] flex flex-col md:flex-row gap-2 items-start">
            <div className="md:w-[40%] w-full space-y-2">
              <Certificates />
            </div>
            <div className="md:w-[60%] w-full space-y-6">
              <TechStack />
            </div>
          </div>

          <div className="-mt-8 md:-mt-10 relative z-[5] flex flex-col md:flex-row gap-2 items-start">
            <div className="md:w-[80%] w-full space-y-6">
              <Projects />
            </div>
            <div className="md:w-[20%] w-full space-y-2">
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

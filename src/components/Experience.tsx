import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  year: string;
  description?: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "IT Specialist Intern",
    company: "Regional Anti-Cybercrime Unit 5",
    year: "Feb - Jun 2025",
    description:
      "Provided IT support, configured networks, and co-developed a secure file management system."
  },
  {
    title: "Legislative Officer",
    company: "Central Student Government – Naga College Foundation",
    year: "2024 - 2025",
    description: "Developed student policies and coordinated legislative sessions."
  },
  {
    title: "Auditor",
    company: "College of Computer Studies – Naga College Foundation",
    year: "2022 - 2024",
    description: "Reviewed financial records and ensured transparency."
  },
  {
    title: "Team Leader",
    company: "Regional Startup Bootcamp",
    year: "Dec 3 - 6, 2022",
    description: "Led startup ideation and pitching using lean methodologies."
  },
];

const Experience = () => {
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-bold">
          <Briefcase className="w-5 h-5" /> Experience
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-2.5 top-2 bottom-0 w-[1px] bg-muted-foreground/30" />

          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const isTopItem = index === 0;
              return (
                <div key={index} className="relative pl-8 group cursor-pointer">
                  {/* Dot */}
                  <div
                    className={`absolute left-2.5 top-[0.5rem] w-3 h-3 rounded-full border-2 transform -translate-x-1/2 transition-all duration-200
                      ${isTopItem ? "bg-black border-black scale-110" 
                      : "bg-background border-muted-foreground group-hover:bg-black group-hover:border-white"}`}
                  />

                  {/* Title & Date in the Same Row */}
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-lg">{exp.title}</h3>
                    <span className="text-sm text-black-foreground bg-white px-2 py-1 rounded-full">
                      {exp.year}
                    </span>
                  </div>

                  {/* Company */}
                  <p className="text-foreground/70">{exp.company}</p>
                  
                  {/* Description */}
                  {exp.description && (
                    <p className="text-sm text-foreground/60">{exp.description}</p>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </CardContent>
    </Card>
  );
};

export default Experience;

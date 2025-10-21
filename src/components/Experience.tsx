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
  {
    title: "Team Leader",
    company: "Regional Startup Bootcamp",
    year: "Dec 3 - 6, 2022",
    description: "Led startup ideation and pitching using lean methodologies."
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
        <div className="h-[535px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          <div className="relative">
            {/* Simple timeline line */}
            <div className="absolute left-4 top-2 bottom-0 w-0.5 bg-gray-300" />
            
            <div className="space-y-6">
              {experiences.map((exp, index) => {
                const isTopItem = index === 0;
                return (
                  <div key={index} className="relative flex items-start">
                    {/* Dot */}
                    <div className="relative z-10 flex-shrink-0 w-8 h-8 flex items-start justify-center pt-2">
                      <div
                        className={`w-3 h-3 rounded-full border-2 transition-all duration-200
                          ${isTopItem ? "bg-black border-black" 
                          : "bg-white border-gray-400"}`}
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="ml-4 flex-1 -pt-4">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-semibold text-lg">{exp.title}</h3>
                        <span className="text-sm text-gray-600">
                          {exp.year}
                        </span>
                      </div>
                      
                      <p className="text-gray-700 font-medium mb-1">{exp.company}</p>
                      
                      {exp.description && (
                        <p className="text-sm text-gray-600">{exp.description}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </CardContent>
    </Card>
  );
};

export default Experience;

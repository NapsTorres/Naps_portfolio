import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
    year: "Feb 2025 - June 2025",
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
        <CardTitle className="flex items-center gap-2">
          <span>💼</span> Experience
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative">
          {/* Centered Timeline Line */}
          <div className="absolute left-2 top-0 bottom-0 w-[2px] bg-muted-foreground/30 transform -translate-x-1/2" />

          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const isTopItem = index === 0;
              return (
                <div
                  key={index}
                  className="relative pl-8 group cursor-pointer"
                >
                  {/* Centered Dot */}
                  <div
                    className={`absolute left-2 top-1 w-4 h-4 rounded-full border-2 transform -translate-x-1/2 shadow-sm transition-all duration-200
                      ${isTopItem
                        ? "bg-primary border-primary scale-110"
                        : "bg-background border-muted-foreground group-hover:bg-primary group-hover:border-primary"
                      }`}
                  />

                  <div className="space-y-1">
                    <h3 className="font-semibold text-lg">{exp.title}</h3>
                    <p className="text-foreground/70">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.year}</p>
                    {exp.description && (
                      <p className="text-sm text-foreground/60">{exp.description}</p>
                    )}
                  </div>
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

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ExperienceItem {
  title: string;
  company: string;
  year: string;
  description?: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "Ayaw ko na suko na",
    company: "Tech Company",
    year: "2023 - Present",
    description: "Leading development of scalable web applications"
  },
  {
    title: "Hirap",
    company: "Startup Inc",
    year: "2021 - 2023",
    description: "Built modern web apps with React and Node.js"
  },
  {
    title: "Bruh",
    company: "Digital Agency",
    year: "2019 - 2021",
    description: "Created responsive and accessible user interfaces"
  },
  {
    title: "Junior Developer",
    company: "Software Solutions",
    year: "2018 - 2019",
    description: "Started my journey in web development"
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
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-6 pb-6 last:pb-0 border-l-2 border-primary/20 hover:border-primary/40 transition-colors"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gradient-primary ring-4 ring-background" />
              <div className="space-y-1">
                <h3 className="font-semibold text-lg">{exp.title}</h3>
                <p className="text-foreground/70">{exp.company}</p>
                <p className="text-sm text-muted-foreground">{exp.year}</p>
                {exp.description && (
                  <p className="text-sm text-foreground/60 pt-1">{exp.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Experience;

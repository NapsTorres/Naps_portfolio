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
      "Provided end-to-end IT support including hardware/software troubleshooting, network configuration, and system maintenance. Co-developed a secure file management system using React.js, Vite, TypeScript, Supabase, and PostgreSQL to improve digital evidence documentation efficiency."
  },
  {
    title: "Legislative Officer",
    company: "Central Student Government – Naga College Foundation",
    year: "2024 - 2025",
    description:
      "Drafted and reviewed institutional student policies, facilitated legislative sessions, and coordinated communication between departments to support student welfare initiatives."
  },
  {
    title: "Auditor",
    company: "College of Computer Studies – Naga College Foundation",
    year: "2022 - 2024",
    description:
      "Ensured financial transparency by reviewing organization funds, managing budgets, and providing recommendations for optimal financial management."
  },
  {
    title: "Team Leader",
    company: "Regional Startup Bootcamp",
    year: "Dec 3 - 6, 2022",
    description:
      "Led a team in developing a startup concept using design thinking and lean startup methodologies. Engaged in pitching, market validation, and business model development."
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

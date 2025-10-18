import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface EducationItem {
  level: string;
  institution: string;
  year: string;
  description?: string;
}

const education: EducationItem[] = [
  {
    level: "Bachelor of Science in Information Technology (Cum Laude)",
    institution: "Naga College Foundation, Inc.",
    year: "2021 - 2025",
    description: `GWA: 1.36 / 5.00 • Dean’s Lister • MTV Leadership Awardee (Silver Medallion) • Excellence in Practicum Awardee`
  },
  {
    level: "Senior High School – GAS (Top 5% of Class)",
    institution: "Dominican School of Calabanga",
    year: "2019 - 2021",
    description: "Graduated with Academic Honors"
  },
  {
    level: "High School (Top 10% of Class)",
    institution: "Dominican School of Calabanga",
    year: "2015 - 2019",
    description: "Consistent Honor Student and active leadership involvement"
  },
  {
    level: "Elementary (1st Honorable Mention)",
    institution: "Calabanga West Central School",
    year: "2009 - 2015",
    description: "Graduated with honors and early academic excellence"
  }
];

const Education = () => {
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span>🎓</span> Education
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="relative pl-6 pb-6 last:pb-0 border-l-2 border-primary/20 hover:border-primary/40 transition-colors"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gradient-primary ring-4 ring-background" />
              <div className="space-y-1">
                <h3 className="font-semibold text-lg">{edu.level}</h3>
                <p className="text-foreground/70">{edu.institution}</p>
                <p className="text-sm text-muted-foreground">{edu.year}</p>
                {edu.description && (
                  <p className="text-sm text-foreground/60 pt-1">{edu.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Education;

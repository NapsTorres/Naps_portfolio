import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import ncfLogo from "@/assets/ncf.jpg";
import dominicanLogo from "@/assets/dsc.jpg";
import calabangaLogo from "@/assets/cwcs.jpg";

interface EducationItem {
  level: string;
  institution: string;
  year: string;
  image: string;
  description?: string;
}

const education: EducationItem[] = [
  {
    level: "Bachelor of Science in Information Technology (Cum Laude)",
    institution: "Naga College Foundation, Inc.",
    year: "2021 - 2025",
    image: ncfLogo,
    description: `• GWA: 1.36 / 5.00 
• Dean’s Lister 
• MTV Leadership Awardee (Silver Medallion) 
• Excellence in Practicum Awardee
• DBP Rise Scholar`
  },
  {
    level: "Senior High School – GAS (Top 5% of Class)",
    institution: "Dominican School of Calabanga",
    year: "2019 - 2021",
    image: dominicanLogo,
    description: "• Graduated with Academic Honors"
  },
  {
    level: "High School (Top 10% of Class)",
    institution: "Dominican School of Calabanga",
    year: "2015 - 2019",
    image: dominicanLogo,
    description: "• Consistent Honor Student and active in leadership roles"
  },
  {
    level: "Elementary (1st Honorable Mention)",
    institution: "Calabanga West Central School",
    year: "2008 - 2015",
    image: calabangaLogo,
    description: "• Graduated with honors and demonstrated early academic excellence"
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/30 transition-colors border border-border shadow-sm"
            >
              <img
                src={edu.image}
                alt={edu.institution}
                className="w-16 h-16 rounded-full object-cover ring-2 ring-primary/20 shadow-sm"
              />
              <div className="flex-1 space-y-1">
                <h3 className="font-semibold text-lg">{edu.level}</h3>
                <p className="text-foreground/70">{edu.institution}</p>
                <p className="text-sm text-muted-foreground">{edu.year}</p>
                {edu.description && (
                  <p className="text-sm text-foreground/60 pt-1 whitespace-pre-line">
                    {edu.description}
                  </p>
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

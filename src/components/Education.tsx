import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, MoreHorizontal } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
        <CardTitle className="flex items-center gap-2 font-bold">
          <GraduationCap className="w-5 h-5" /> Education
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 rounded-lg hover:-translate-y-1 transition-all duration-200 border border-border shadow-sm"
            >
              <img
                src={edu.image}
                alt={edu.institution}
                className="w-16 h-16 rounded-full object-cover ring-2 ring-primary/20 shadow-sm"
              />
              <div className="flex-1 space-y-1">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg dark:text-white">{edu.level}</h3>
                    <p className="text-foreground/70 dark:text-gray-300">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground dark:text-gray-400">{edu.year}</p>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <button 
                        className="text-xs text-black dark:text-white hover:underline transition-all duration-200 flex items-center gap-1 hover:-translate-y-1"
                        title="Details"
                      >
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle className="font-bold flex items-center gap-2 dark:text-white">
                          <GraduationCap className="w-5 h-5" /> {edu.level}
                        </DialogTitle>
                      </DialogHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <img
                          src={edu.image}
                          alt={edu.institution}
                          className="w-20 h-20 rounded-full object-cover ring-2 ring-primary/20 shadow-sm"
                        />
                        <div>
                          <p className="text-lg font-semibold text-foreground/70 dark:text-gray-300">{edu.institution}</p>
                          <p className="text-sm text-muted-foreground dark:text-gray-400">{edu.year}</p>
                        </div>
                      </div>
                      {edu.description && (
                        <div className="p-4 rounded-lg">
                          <h4 className="font-semibold mb-2 dark:text-white">Achievements & Details:</h4>
                          <p className="text-sm text-foreground/80 dark:text-gray-300 whitespace-pre-line">
                            {edu.description}
                          </p>
                        </div>
                      )}
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Education;

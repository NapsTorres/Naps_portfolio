import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { GraduationCap, Eye } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
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
    level: "Bachelor of Science in Information Technology (Cum Laude - 1.36 GPA)",
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
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedEdu, setSelectedEdu] = useState<EducationItem | null>(null);

  const openDetails = (edu: EducationItem) => {
    setSelectedEdu(edu);
    setIsDialogOpen(true);
  };

  return (
    <>
      <Card className="section-card">
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
                role="button"
                tabIndex={0}
                onClick={() => openDetails(edu)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openDetails(edu);
                  }
                }}
                className="item-box flex items-center gap-4 p-4 cursor-pointer"
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
                    <span className="flex items-center hover:-translate-y-1 transition-all duration-200">
                      <Eye className="w-4 h-4 text-black dark:text-white" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl">
          {selectedEdu && (
            <>
              <DialogHeader>
                <DialogTitle className="font-bold flex items-center gap-2 dark:text-white">
                  <GraduationCap className="w-5 h-5" /> {selectedEdu.level}
                </DialogTitle>
              </DialogHeader>
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={selectedEdu.image}
                  alt={selectedEdu.institution}
                  className="w-20 h-20 rounded-full object-cover ring-2 ring-primary/20 shadow-sm"
                />
                <div>
                  <p className="text-lg font-semibold text-foreground/70 dark:text-gray-300">
                    {selectedEdu.institution}
                  </p>
                  <p className="text-sm text-muted-foreground dark:text-gray-400">
                    {selectedEdu.year}
                  </p>
                </div>
              </div>
              {selectedEdu.description && (
                <div className="p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 dark:text-white">Achievements & Details:</h4>
                  <p className="text-sm text-foreground/80 dark:text-gray-300 whitespace-pre-line">
                    {selectedEdu.description}
                  </p>
                </div>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Education;

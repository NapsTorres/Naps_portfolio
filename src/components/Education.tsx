import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { GraduationCap, Eye, FileText, ExternalLink, ArrowLeft } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import ncfLogo from "@/assets/ncf.jpg";
import dominicanLogo from "@/assets/dsc.jpg";
import calabangaLogo from "@/assets/cwcs.jpg";

interface EducationPreview {
  title: string;
  pdfUrl?: string;
}

interface EducationItem {
  level: string;
  institution: string;
  year: string;
  image: string;
  description?: string;
  previews?: EducationPreview[];
}

const education: EducationItem[] = [
  {
    level: "Bachelor of Science in Information Technology (Cum Laude - 1.36 GPA)",
    institution: "Naga College Foundation, Inc.",
    year: "2021 - 2025",
    image: ncfLogo,
    description: `• GWA: 1.36 / 5.00 
• Dean's Lister 
• MTV Leadership Awardee (Silver Medallion) 
• Excellence in Practicum Awardee
• DBP Rise Scholar`,
    previews: [
      { title: "Diploma", pdfUrl: "/education/ncf-diploma.pdf" },
      { title: "Cum Laude Certificate", pdfUrl: "/education/ncf-cum-laude.pdf" },
      { title: "MTV Leadership Award (Silver Medallion)", pdfUrl: "/education/ncf-leadership.pdf" },
      { title: "Excellence in Practicum", pdfUrl: "/education/ncf-practicum.pdf" },
      { title: "DBP Rise Scholar", pdfUrl: "/education/ncf-dbp-rise.pdf" },
    ],
  },
  {
    level: "Senior High School – GAS (Top 5% of Class)",
    institution: "Dominican School of Calabanga",
    year: "2019 - 2021",
    image: dominicanLogo,
    description: "• Graduated with Academic Honors",
  },
  {
    level: "High School (Top 10% of Class)",
    institution: "Dominican School of Calabanga",
    year: "2015 - 2019",
    image: dominicanLogo,
    description: "• Consistent Honor Student and active in leadership roles",
  },
  {
    level: "Elementary (1st Honorable Mention)",
    institution: "Calabanga West Central School",
    year: "2008 - 2015",
    image: calabangaLogo,
    description: "• Graduated with honors and demonstrated early academic excellence",
  },
];

const Education = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedEdu, setSelectedEdu] = useState<EducationItem | null>(null);
  const [selectedPreview, setSelectedPreview] = useState<EducationPreview | null>(null);

  const openDetails = (edu: EducationItem) => {
    setSelectedEdu(edu);
    setSelectedPreview(null);
    setIsDialogOpen(true);
  };

  const openPreview = (preview: EducationPreview) => {
    setSelectedPreview(preview);
  };

  const handleDialogChange = (open: boolean) => {
    setIsDialogOpen(open);
    if (!open) {
      setSelectedEdu(null);
      setSelectedPreview(null);
    }
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

      <Dialog open={isDialogOpen} onOpenChange={handleDialogChange}>
        <DialogContent className="max-w-2xl w-[95vw] max-h-[85vh] overflow-y-auto p-4">
          {selectedPreview ? (
            <>
              <DialogHeader className="space-y-1">
                <DialogTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  {selectedPreview.title}
                </DialogTitle>
                {selectedEdu && (
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {selectedEdu.institution} · {selectedEdu.year}
                  </div>
                )}
              </DialogHeader>

              <div className="flex-1 min-h-0 overflow-hidden rounded-lg border-2 border-gray-400/70 dark:border-white/30 p-1">
                {selectedPreview.pdfUrl ? (
                  <iframe
                    src={selectedPreview.pdfUrl}
                    title={`${selectedPreview.title} preview`}
                    className="w-full h-full min-h-[65vh] rounded-md"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full min-h-[65vh] rounded-md">
                    <p className="text-gray-500">Document preview unavailable.</p>
                  </div>
                )}
              </div>

              <div className="flex justify-between gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setSelectedPreview(null)}
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md border border-gray-400/70 dark:border-white/30 bg-transparent text-black dark:text-white hover:bg-black/[0.07] dark:hover:bg-white/[0.12] hover:-translate-y-0.5 transition-all duration-200"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>

                {selectedPreview.pdfUrl && (
                  <button
                    type="button"
                    onClick={() =>
                      window.open(selectedPreview.pdfUrl, "_blank", "noopener,noreferrer")
                    }
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md border border-gray-400/70 dark:border-white/30 bg-transparent text-black dark:text-white hover:bg-black/[0.07] dark:hover:bg-white/[0.12] hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <FileText className="w-4 h-4" />
                    Open PDF
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </>
          ) : (
            selectedEdu && (
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
                {selectedEdu.previews && selectedEdu.previews.length > 0 && (
                  <div className="mt-4">
                    <h4 className="font-semibold mb-3 dark:text-white">Documents & Awards:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedEdu.previews.map((preview, index) => (
                        <div
                          key={index}
                          role="button"
                          tabIndex={0}
                          onClick={() => openPreview(preview)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              openPreview(preview);
                            }
                          }}
                          className="item-box flex items-center justify-between gap-3 p-3 cursor-pointer"
                        >
                          <div className="flex items-center gap-2 min-w-0">
                            <FileText className="w-4 h-4 shrink-0 text-black dark:text-white" />
                            <span className="text-sm font-medium text-black dark:text-white truncate">
                              {preview.title}
                            </span>
                          </div>
                          <span className="flex items-center hover:-translate-y-1 transition-all duration-200">
                            <Eye className="w-4 h-4 shrink-0 text-black dark:text-white" />
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Education;

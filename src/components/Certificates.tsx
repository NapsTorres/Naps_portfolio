import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Clock, Award, Eye } from "lucide-react";

interface Certification {
  title: string;
  organization: string;
  url?: string;
}

const certifications: Certification[] = [
  {
    title: "Data Analytics Essentials",
    organization: "Cisco",
    url: "https://drive.google.com/file/d/1_fHUSI36sXlfjwaAp0eI3jw1dusq7-T8/view?usp=sharing"
  },
  {
    title: "Introduction to Cybersecurity",
    organization: "Cisco",
    url: "https://drive.google.com/file/d/1Tb-1BuZdAwKoh2YcMcqPGTLB85opxlfP/view?usp=sharing"
  },
  {
    title: "CompTIA A+",
    organization: "CompTIA",
    url: "https://www.comptia.org/certifications/a"
  },
  {
    title: "DICT Cybersecurity",
    organization: "DICT",
    url: "https://drive.google.com/file/d/1kIa-A_PStKon2ebRSD70_a9LPxup22GE/view?usp=sharing"
  },
  {
    title: "ICIP (Critical Infrastructure Protection)",
    organization: "OPSWAT",
    url: "https://drive.google.com/file/d/1wcqiEl4fSL90twNzLMAIvgVgVIRK9wBX/view?usp=sharing"
  },
  {
    title: "Microsoft PowerPoint Associate",
    organization: "Certiport",
    url: "https://drive.google.com/file/d/1gZL3IS4rnBJFKKr-LV1Ht-xFaU_degSA/view?usp=sharing"
  },
  {
    title: "TOPCIT Level 2",
    organization: "IITP",
    url: "https://drive.google.com/file/d/1VxUoBVxtJvOdeOOueZXSiK4OIxhixBaO/view?usp=sharing"
  }
];

const Certifications = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  // Limit to first 4 certifications for initial display
  const getLimitedCertifications = (certifications: Certification[], limit: number = 4) => {
    return certifications.slice(0, limit);
  };

  return (
    <>
      <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-bold dark:text-white">
              <Clock className="w-5 h-5" /> Recent Certifications
            </div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <span 
                  className="text-sm text-black dark:text-white cursor-pointer hover:underline flex items-center gap-1 hover:-translate-y-1 transition-all duration-200"
                  title="View All"
                >
                  <Eye className="w-4 h-4" />
                </span>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2 font-bold dark:text-white">
                    <Award className="w-5 h-5" /> All Certifications
                  </DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {certifications.map((cert, index) => (
                    cert.url ? (
                      <a
                        key={index}
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-3 rounded-lg border border-gray-200 dark:border-gray-600 hover:-translate-y-1 transition-all duration-200"
                      >
                        <div className="font-semibold text-black dark:text-white hover:underline">{cert.title}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">{cert.organization}</div>
                      </a>
                    ) : (
                      <div
                        key={index}
                        className="p-3 rounded-lg border border-gray-200 dark:border-gray-600 hover:-translate-y-1 transition-all duration-200"
                      >
                        <div className="font-semibold text-black dark:text-white">{cert.title}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">{cert.organization}</div>
                      </div>
                    )
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {getLimitedCertifications(certifications).map((cert, index) => (
            cert.url ? (
              <a
                key={index}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-2.5 rounded-lg border border-gray-200 dark:border-gray-600 hover:-translate-y-1 transition-all duration-200"
              >
                <div className="font-semibold text-black dark:text-white hover:underline">{cert.title}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">{cert.organization}</div>
              </a>
            ) : (
              <div
                key={index}
                className="p-2.5 rounded-lg border border-gray-200 dark:border-gray-600 hover:-translate-y-1 transition-all duration-200"
              >
                <div className="font-semibold text-black dark:text-white">{cert.title}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">{cert.organization}</div>
              </div>
            )
          ))}
        </CardContent>
      </Card>
    </>
  );
};

export default Certifications;

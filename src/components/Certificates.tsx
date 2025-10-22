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

const recentCertifications: Certification[] = [
  {
    title: "Introduction to Cybersecurity",
    organization: "Cisco",
    url: "https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/ccna.html"
  },
  {
    title: "CompTIA A+",
    organization: "CompTIA",
    url: "https://www.comptia.org/certifications/a"
  },
  {
    title: "Data Analytics Essentials",
    organization: "Cisco",
    url: "https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/ccna.html"
  },
  {
    title: "Microsoft PowerPoint Associate",
    organization: "Certiport",
    url: "https://certiport.pearsonvue.com/Certifications/Microsoft/MOS/Overview"
  }
];

const Certifications = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  // All certifications for the modal
  const allCertifications: Certification[] = [
    {
      title: "Introduction to Cybersecurity",
      organization: "Cisco",
      url: "https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/ccna.html"
    },
    {
      title: "DICT Cybersecurity",
      organization: "DICT",
      url: "https://dict.gov.ph/"
    },
    {
      title: "ICIP (Critical Infrastructure Protection)",
      organization: "OPSWAT",
      url: "https://www.opswat.com/"
    },
    {
      title: "CompTIA A+",
      organization: "CompTIA",
      url: "https://www.comptia.org/certifications/a"
    },
    {
      title: "TOPCIT Level 2",
      organization: "IITP",
      url: "https://www.iitp.or.kr/"
    },
    {
      title: "Data Analytics Essentials",
      organization: "Cisco",
      url: "https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/ccna.html"
    },
    {
      title: "Microsoft PowerPoint Associate",
      organization: "Certiport",
      url: "https://certiport.pearsonvue.com/Certifications/Microsoft/MOS/Overview"
    }
  ];

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
                  {allCertifications.map((cert, index) => (
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
          {recentCertifications.map((cert, index) => (
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

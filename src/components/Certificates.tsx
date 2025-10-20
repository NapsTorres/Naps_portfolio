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
import { Clock, Award } from "lucide-react";

interface Certification {
  title: string;
  organization: string;
}

const recentCertifications: Certification[] = [
  {
    title: "Introduction to Cybersecurity",
    organization: "Cisco"
  },
  {
    title: "CompTIA A+",
    organization: "CompTIA"
  },
  {
    title: "Data Analytics Essentials",
    organization: "Cisco"
  },
  {
    title: "Microsoft PowerPoint Associate",
    organization: "Certiport"
  }
];

const Certifications = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  // All certifications for the modal
  const allCertifications: Certification[] = [
    {
      title: "Introduction to Cybersecurity",
      organization: "Cisco"
    },
    {
      title: "DICT Cybersecurity",
      organization: "DICT"
    },
    {
      title: "ICIP (Critical Infrastructure Protection)",
      organization: "OPSWAT"
    },
    {
      title: "CompTIA A+",
      organization: "CompTIA"
    },
    {
      title: "TOPCIT Level 2",
      organization: "IITP"
    },
    {
      title: "Data Analytics Essentials",
      organization: "Cisco"
    },
    {
      title: "Microsoft PowerPoint Associate",
      organization: "Certiport"
    }
  ];

  return (
    <>
      <Card className="border border-gray">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-bold">
              <Clock className="w-5 h-5" /> Recent Certifications
            </div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <span className="text-sm text-black cursor-pointer hover:underline">
                  View All &gt;
                </span>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2 font-bold">
                    <Award className="w-5 h-5" /> All Certifications
                  </DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {allCertifications.map((cert, index) => (
                    <div
                      key={index}
                      className="p-3 bg-gray-50 rounded-lg border border-gray-200"
                    >
                      <div className="font-semibold text-black">{cert.title}</div>
                      <div className="text-sm text-gray-600">{cert.organization}</div>
                    </div>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {recentCertifications.map((cert, index) => (
            <div
              key={index}
              className="p-3 bg-gray-50 rounded-lg border border-gray-200"
            >
              <div className="font-semibold text-black">{cert.title}</div>
              <div className="text-sm text-gray-600">{cert.organization}</div>
            </div>
          ))}
        </CardContent>
      </Card>
    </>
  );
};

export default Certifications;

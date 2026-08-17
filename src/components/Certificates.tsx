import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Award,
  Eye,
  ExternalLink,
  FileText,
} from "lucide-react";

interface Certification {
  title: string;
  organization: string;
  program?: string;
  date?: string;
  pdfUrl?: string;
  credentialUrl?: string;
}

const certifications: Certification[] = [
  {
    title: "Cloud Computing Fundamentals",
    organization: "IBM",
    pdfUrl: "/certificates/cloud-computing-fundamentals.pdf",
    credentialUrl: "YOUR_CREDLY_BADGE_URL",
  },
  {
    title: "Introduction to Cybersecurity",
    organization: "Cisco Networking Academy",
    pdfUrl: "/certificates/introduction-to-cybersecurity.pdf",
    credentialUrl: "YOUR_CREDLY_BADGE_URL",
  },
  {
    title: "ICIP (Critical Infrastructure Protection)",
    organization: "OPSWAT",
    pdfUrl: "/certificates/icip.pdf",
    credentialUrl: "YOUR_CREDLY_BADGE_URL",
  },
  {
    title: "Getting Started with Cybersecurity",
    organization: "IBM",
    pdfUrl: "/certificates/getting-started-cybersecurity.pdf",
    credentialUrl: "YOUR_CREDLY_BADGE_URL",
  },
  {
    title: "Data Analytics Essentials",
    organization: "Cisco Networking Academy",
    pdfUrl: "/certificates/data-analytics-essentials.pdf",
    credentialUrl: "YOUR_CREDLY_BADGE_URL",
  },
  {
    title: "Enterprise Design Thinking Practitioner",
    organization: "IBM",
    pdfUrl: "/certificates/enterprise-design-thinking.pdf",
    credentialUrl: "YOUR_CREDLY_BADGE_URL",
  },
  {
    title: "Agile Explorer",
    organization: "IBM",
    pdfUrl: "/certificates/agile-explorer.pdf",
    credentialUrl: "YOUR_CREDLY_BADGE_URL",
  },
  {
    title: "C++ Essentials 1",
    organization: "Cisco Networking Academy",
    pdfUrl: "/certificates/microsoft-powerpoint-associate.pdf",
    credentialUrl: "YOUR_CREDLY_BADGE_URL",
  },
  {
    title: "IBM Garage Essentials",
    organization: "IBM",
    pdfUrl: "/certificates/ibm-garage-essentials.pdf",
    credentialUrl: "YOUR_CREDLY_BADGE_URL",
  },
  {
    title: "Finance & Accounting Essentials",
    organization: "IBM",
    pdfUrl: "/certificates/finance-accounting-essentials.pdf",
    credentialUrl: "YOUR_CREDLY_BADGE_URL",
  },
  {
    title: "Microsoft PowerPoint Associate",
    organization: "Certiport",
    pdfUrl: "/certificates/microsoft-powerpoint-associate.pdf",
    credentialUrl: "YOUR_CREDLY_BADGE_URL",
  },
  {
    title: "TOPCIT Level 2",
    organization: "IITP",
    pdfUrl: "/certificates/topcit-level-2.pdf",
  },
];

const Certifications = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedCert, setSelectedCert] =
    useState<Certification | null>(null);

  const visibleCertifications = certifications.slice(0, 4);

  const openPreview = (cert: Certification) => {
    setSelectedCert(cert);
    setIsDialogOpen(true);
  };

  const openAll = () => {
    setSelectedCert(null);
    setIsDialogOpen(true);
  };

  return (
    <>
      <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-bold dark:text-white">
              <Award className="w-5 h-5" />
              Certifications & Credentials
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={openAll}
              title="View All Certifications"
              className="hover:-translate-y-1 transition-all duration-200"
            >
              <Eye className="w-4 h-4" />
            </Button>
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-3">
          {visibleCertifications.map((cert, index) => (
            <button
              key={index}
              onClick={() => openPreview(cert)}
              className="w-full text-left p-3 rounded-lg border border-gray-200 dark:border-gray-600 hover:-translate-y-1 hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <div className="font-semibold text-black dark:text-white">
                    {cert.title}
                  </div>

                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {cert.organization}
                  </div>

                  {cert.program && (
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {cert.program}
                    </div>
                  )}

                  {cert.date && (
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {cert.date}
                    </div>
                  )}
                </div>

                <Eye className="w-4 h-4 shrink-0 text-gray-500" />
              </div>
            </button>
          ))}
        </CardContent>
      </Card>

      {/* Main Certification Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent
          className={
            selectedCert
              ? "max-w-5xl w-[95vw] h-[90vh] p-4"
              : "max-w-4xl w-[95vw] max-h-[85vh]"
          }
        >
          {selectedCert ? (
            <>
              {/* Certificate Preview */}
              <DialogHeader className="space-y-1">
                <DialogTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  {selectedCert.title}
                </DialogTitle>

                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {selectedCert.organization}

                  {selectedCert.program &&
                    ` · ${selectedCert.program}`}

                  {selectedCert.date &&
                    ` · ${selectedCert.date}`}
                </div>
              </DialogHeader>

              {/* PDF */}
              <div className="flex-1 min-h-0 overflow-hidden">
                {selectedCert.pdfUrl ? (
                  <iframe
                    src={selectedCert.pdfUrl}
                    title={`${selectedCert.title} certificate`}
                    className="w-full h-full min-h-[65vh] rounded-lg border border-gray-200 dark:border-gray-700"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full min-h-[65vh] border rounded-lg">
                    <p className="text-gray-500">
                      Certificate preview unavailable.
                    </p>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="flex justify-end gap-2 pt-2">
                {selectedCert.credentialUrl && (
                  <Button
                    variant="default"
                    onClick={() =>
                      window.open(
                        selectedCert.credentialUrl,
                        "_blank",
                        "noopener,noreferrer"
                      )
                    }
                  >
                    <Award className="w-4 h-4 mr-2" />
                    Verify Credential
                    <ExternalLink className="w-3.5 h-3.5 ml-2" />
                  </Button>
                )}

                {selectedCert.pdfUrl && (
                  <Button
                    variant="outline"
                    onClick={() =>
                      window.open(
                        selectedCert.pdfUrl,
                        "_blank",
                        "noopener,noreferrer"
                      )
                    }
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Open PDF
                    <ExternalLink className="w-3.5 h-3.5 ml-2" />
                  </Button>
                )}
              </div>
            </>
          ) : (
            <>
              {/* All Certifications */}
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  All Certifications & Credentials
                </DialogTitle>
              </DialogHeader>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 overflow-y-auto pr-2">
                {certifications.map((cert, index) => (
                  <button
                    key={index}
                    onClick={() => openPreview(cert)}
                    className="text-left p-4 rounded-lg border border-gray-200 dark:border-gray-600 hover:-translate-y-1 hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <div className="font-semibold text-black dark:text-white">
                          {cert.title}
                        </div>

                        <div className="text-sm text-gray-600 dark:text-gray-300">
                          {cert.organization}
                        </div>

                        {cert.program && (
                          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            {cert.program}
                          </div>
                        )}

                        {cert.date && (
                          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            {cert.date}
                          </div>
                        )}
                      </div>

                      <Eye className="w-4 h-4 shrink-0 text-gray-500" />
                    </div>
                  </button>
                ))}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Certifications;
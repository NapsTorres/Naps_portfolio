import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
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
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [returnToList, setReturnToList] = useState(false);

  const visibleCertifications = certifications.slice(0, 4);

  const openPreview = (cert: Certification, fromList = false) => {
    setSelectedCert(cert);
    setReturnToList(fromList);
    setIsDialogOpen(true);
  };

  const openAll = () => {
    setSelectedCert(null);
    setReturnToList(false);
    setIsDialogOpen(true);
  };

  const handleBack = () => {
    if (returnToList) {
      setSelectedCert(null);
      setReturnToList(false);
      return;
    }
    setIsDialogOpen(false);
  };

  const handleDialogChange = (open: boolean) => {
    setIsDialogOpen(open);
    if (!open) {
      setSelectedCert(null);
      setReturnToList(false);
    }
  };

  return (
    <>
      <Card className="section-card">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-bold dark:text-white">
              <Award className="w-5 h-5" />
              Certifications & Credentials
            </div>

            <button
              type="button"
              onClick={openAll}
              title="View All Certifications"
              className="p-1 rounded-md text-black dark:text-white hover:-translate-y-1 transition-all duration-200"
            >
              <Eye className="w-4 h-4" />
            </button>
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-3">
          {visibleCertifications.map((cert, index) => (
            <div
              key={index}
              role="button"
              tabIndex={0}
              onClick={() => openPreview(cert)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openPreview(cert);
                }
              }}
              className="item-box w-full text-left p-3 cursor-pointer"
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

                <span className="flex items-center hover:-translate-y-1 transition-all duration-200">
                  <Eye className="w-4 h-4 shrink-0 text-black dark:text-white" />
                </span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Main Certification Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={handleDialogChange}>
        <DialogContent className={`max-w-5xl w-[95vw] p-4 ${selectedCert ? "h-[90vh]" : "max-h-[85vh] overflow-y-auto"}`}>
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
              <div className="flex-1 min-h-0 overflow-hidden rounded-lg border-2 border-gray-400/70 dark:border-white/30 p-1">
                {selectedCert.pdfUrl ? (
                  <iframe
                    src={selectedCert.pdfUrl}
                    title={`${selectedCert.title} certificate`}
                    className="w-full h-full min-h-[65vh] rounded-md"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full min-h-[65vh] rounded-md">
                    <p className="text-gray-500">
                      Certificate preview unavailable.
                    </p>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="flex justify-between gap-2 pt-2">
                <button
                  type="button"
                  onClick={handleBack}
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md border border-gray-400/70 dark:border-white/30 bg-transparent text-black dark:text-white hover:bg-black/[0.07] dark:hover:bg-white/[0.12] hover:-translate-y-0.5 transition-all duration-200"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>

                <div className="flex gap-2">
                  {selectedCert.credentialUrl && (
                    <button
                      type="button"
                      onClick={() =>
                        window.open(selectedCert.credentialUrl, "_blank", "noopener,noreferrer")
                      }
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md border border-gray-400/70 dark:border-white/30 bg-transparent text-black dark:text-white hover:bg-black/[0.07] dark:hover:bg-white/[0.12] hover:-translate-y-0.5 transition-all duration-200"
                    >
                      <Award className="w-4 h-4" />
                      Verify Credential
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  )}

                  {selectedCert.pdfUrl && (
                    <button
                      type="button"
                      onClick={() =>
                        window.open(selectedCert.pdfUrl, "_blank", "noopener,noreferrer")
                      }
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md border border-gray-400/70 dark:border-white/30 bg-transparent text-black dark:text-white hover:bg-black/[0.07] dark:hover:bg-white/[0.12] hover:-translate-y-0.5 transition-all duration-200"
                    >
                      <FileText className="w-4 h-4" />
                      Open PDF
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            </>
          ) : (
            <>
              {/* All Certifications */}
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2 font-bold dark:text-white">
                  <Award className="w-5 h-5" />
                  All Certifications & Credentials
                </DialogTitle>
              </DialogHeader>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    role="button"
                    tabIndex={0}
                    onClick={() => openPreview(cert, true)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        openPreview(cert, true);
                      }
                    }}
                    className="item-box p-4 flex flex-col h-full cursor-pointer"
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-semibold text-lg dark:text-white">{cert.title}</h3>
                      <Eye className="w-4 h-4 shrink-0 text-black dark:text-white" />
                    </div>
                    <p className="text-sm text-muted-foreground dark:text-gray-300">
                      {cert.organization}
                      {cert.program && ` · ${cert.program}`}
                      {cert.date && ` · ${cert.date}`}
                    </p>
                  </div>
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
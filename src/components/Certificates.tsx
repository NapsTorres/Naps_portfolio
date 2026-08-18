import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useRef } from "react";
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
    title: "OPIT Bootcamp 2026 – From Zero to Tech",
    organization: "OPIT (Open Institute of Technology)",
    program: "Cloud Dev · AI Applications · Cybersecurity",
    pdfUrl: "/Certificates/OPIT Bootcamp Certificate - NAPOLEON R. TORRES_page-0001.pdf",
  },
  {
    title: "2026 IBMer watsonx Challenge",
    organization: "IBM",
    program: "AI Software Development · watsonx · IBM Consulting Advantage",
    pdfUrl: "/Certificates/2026IBMerwatsonxChallenge_Badge20260818-20-3ad733.pdf",
    credentialUrl: "https://www.credly.com/badges/6e382fd8-0232-4377-a025-7c700cfd2d9f/public_url",
  },
  {
    title: "Cloud Computing Fundamentals",
    organization: "IBM",
    program: "Cloud Architecture · Virtualization · Hybrid Cloud",
    pdfUrl: "/Certificates/Cloud computing.pdf",
    credentialUrl: "https://www.credly.com/badges/a5a514db-2a1d-412b-9704-68afe1dc6f0e/public_url",
  },
  {
    title: "Getting Started with Cybersecurity",
    organization: "IBM",
    program: "Threat Awareness · Security Fundamentals · Risk Management",
    pdfUrl: "/Certificates/Cyber sec.pdf",
    credentialUrl: "https://www.credly.com/badges/01955cfa-1acd-41d6-b8f3-e905f5f50aef/public_url",
  },
  {
    title: "Introduction to Cybersecurity",
    organization: "Cisco Networking Academy",
    program: "Network Security · Online Safety · Cyber Threats",
    pdfUrl: "/Certificates/Introduction to Cybersecurity.pdf",
    credentialUrl: "https://www.credly.com/badges/82e6fa48-b631-4d4f-9d71-090b0677f42c/public_url",
  },
  {
    title: "ICIP (Critical Infrastructure Protection)",
    organization: "OPSWAT",
    program: "OT/ICS Security · SCADA · Critical Infrastructure Protection",
    pdfUrl: "/Certificates/introduction_to_cip.pdf",
    credentialUrl: "https://www.credly.com/badges/b99e3593-16f6-4b90-86b2-4991f363619e/public_url",
  },
  {
    title: "Data Analytics Essentials",
    organization: "Cisco Networking Academy",
    program: "Data Analysis · Visualization · Decision Making",
    pdfUrl: "/Certificates/DataAnalyticsEssentialsUpdate20251022-29-3omtph.pdf",
    credentialUrl: "https://www.credly.com/badges/986c2b90-f24a-45e1-8497-8106a6bee2b1/public_url",
  },
  {
    title: "Enterprise Design Thinking Practitioner",
    organization: "IBM",
    program: "Human-Centered Design · Empathy Maps · Problem Framing",
    pdfUrl: "/Certificates/EnterpriseDesignThinkingPractitioner_Badge20260708-7-gtk4vd.pdf",
    credentialUrl: "https://www.credly.com/badges/e878eaa6-22bc-43e7-92a5-743507d556a9/public_url",
  },
  {
    title: "Agile Explorer",
    organization: "IBM",
    program: "Project Management · Scrum · Iterative Development",
    pdfUrl: "/Certificates/Agile.pdf",
    credentialUrl: "https://www.credly.com/badges/a62ad237-c0e9-42eb-ab3a-28ee69b7e3a2/public_url",
  },
  {
    title: "C++ Essentials 1",
    organization: "Cisco Networking Academy",
    program: "Object-Oriented Programming · Memory Management · STL",
    pdfUrl: "/Certificates/CEssentials1Update20251022-29-t18m2k.pdf",
    credentialUrl: "https://www.credly.com/badges/a0baa8b3-4ed9-4c60-9c5f-9ffe57c01229/public_url",
  },
  {
    title: "IBM Garage Essentials",
    organization: "IBM",
    program: "Innovation · DevOps · Lean Startup Methodology",
    pdfUrl: "/Certificates/Garage.pdf",
    credentialUrl: "https://www.credly.com/badges/19066bee-2541-451c-aad0-87156b079417/public_url",
  },
  {
    title: "Finance & Accounting Essentials",
    organization: "IBM",
    program: "Financial Statements · Business Fundamentals · Accounting",
    pdfUrl: "/Certificates/Finance.pdf",
    credentialUrl: "https://www.credly.com/badges/4a4aeb25-8de8-4154-8eb8-763bcad4ef76/public_url",
  },
  {
    title: "Microsoft PowerPoint Associate",
    organization: "Certiport",
    program: "Slide Design · Presentation Skills · Office Productivity",
    pdfUrl: "/Certificates/View Transcript.pdf",
    credentialUrl: "https://www.credly.com/badges/ce0a2ed2-252a-4d91-a22f-7e7ecc20019b/public_url",
  },
  {
    title: "TOPCIT Level 2",
    organization: "IITP",
    program: "Software Competency · IT Fundamentals · Korea",
    pdfUrl: "/Certificates/Topcit Level 2.pdf",
  },
];

const Certifications = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [returnToList, setReturnToList] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const savedScroll = useRef(0);

  const visibleCertifications = certifications.slice(0, 4);

  const openPreview = (cert: Certification, fromList = false) => {
    if (fromList && scrollRef.current) {
      savedScroll.current = scrollRef.current.scrollTop;
    }
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
      requestAnimationFrame(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollTop = savedScroll.current;
        }
      });
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
      <Card className="section-card h-full">
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

              <div ref={scrollRef} className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 overflow-y-auto max-h-[70vh] pr-1">
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
                    className="item-box p-3 flex flex-col cursor-pointer"
                  >
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="font-semibold text-base dark:text-white line-clamp-1">{cert.title}</h3>
                      <Eye className="w-4 h-4 shrink-0 text-black dark:text-white" />
                    </div>
                    <p className="text-sm text-muted-foreground dark:text-gray-300 line-clamp-1">
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
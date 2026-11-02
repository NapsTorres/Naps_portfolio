import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRef, useState } from "react";
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
  imageUrl?: string;
  credentialUrl?: string;
}

const certifications: Certification[] = [
  // ── Cloud & Infrastructure ──────────────────────────────
  {
    title: "AWS Certified Cloud Practitioner",
    organization: "Amazon Web Services (AWS)",
    program: "AWS Cloud Concepts · Security · Technology · Billing & Pricing",
    pdfUrl: "/Certificates/AWS Certified Cloud Practitioner certificate.pdf",
    imageUrl: "/Certificates/images/AWS Certified Cloud Practitioner certificate.webp",
    credentialUrl: "https://www.credly.com/earner/earned/badge/3f0dae20-dd47-49e2-a759-616697af9066",
  },
  {
    title: "Microsoft Certified: Azure Fundamentals",
    organization: "Microsoft",
    program: "Azure Services · Cloud Concepts · Governance & Security",
    date: "October 18, 2026",
    pdfUrl: "/Certificates/Microsoft Certified Azure Fundamentals.pdf",
    imageUrl: "/Certificates/images/Microsoft Certified Azure Fundamentals.webp",
    credentialUrl: "https://learn.microsoft.com/api/credentials/share/en-us/NapoleonTorres-8484/26AA9170A52FD0E?sharingId=7E6B5C88088D4B5E",
  },
  {
    title: "Cloud Computing Fundamentals",
    organization: "IBM",
    program: "Cloud Architecture · Virtualization · Hybrid Cloud",
    pdfUrl: "/Certificates/Cloud computing.pdf",
    imageUrl: "/Certificates/images/Cloud computing.webp",
    credentialUrl: "https://www.credly.com/badges/a5a514db-2a1d-412b-9704-68afe1dc6f0e/public_url",
  },
  {
    title: "OPIT Bootcamp 2026 – From Zero to Tech",
    organization: "OPIT (Open Institute of Technology)",
    program: "Cloud Dev · AI Applications · Cybersecurity",
    pdfUrl: "/Certificates/OPIT Bootcamp Certificate - NAPOLEON R. TORRES_page-0001.pdf",
    imageUrl: "/Certificates/images/OPIT Bootcamp Certificate - NAPOLEON R. TORRES_page-0001.webp",
  },
  {
    title: "ICIP (Critical Infrastructure Protection)",
    organization: "OPSWAT",
    program: "OT/ICS Security · SCADA · Critical Infrastructure Protection",
    pdfUrl: "/Certificates/introduction_to_cip.pdf",
    imageUrl: "/Certificates/images/introduction_to_cip.webp",
    credentialUrl: "https://www.credly.com/badges/b99e3593-16f6-4b90-86b2-4991f363619e/public_url",
  },
  // ── Network & Cybersecurity ─────────────────────────────
  {
    title: "Introduction to Cybersecurity",
    organization: "Cisco Networking Academy",
    program: "Network Security · Online Safety · Cyber Threats",
    pdfUrl: "/Certificates/Introduction to Cybersecurity.pdf",
    imageUrl: "/Certificates/images/Introduction to Cybersecurity.webp",
    credentialUrl: "https://www.credly.com/badges/82e6fa48-b631-4d4f-9d71-090b0677f42c/public_url",
  },
  {
    title: "Getting Started with Cybersecurity",
    organization: "IBM",
    program: "Threat Awareness · Security Fundamentals · Risk Management",
    pdfUrl: "/Certificates/Cyber sec.pdf",
    imageUrl: "/Certificates/images/Cyber sec.webp",
    credentialUrl: "https://www.credly.com/badges/01955cfa-1acd-41d6-b8f3-e905f5f50aef/public_url",
  },
  {
    title: "BlackStride Cyber Webinar Series",
    organization: "BlackStride Cyber",
    program: "Cybersecurity Awareness · Emerging Threats · Defensive Skills",
    pdfUrl: "/Certificates/BlackStride Cyber Cert.pdf",
    imageUrl: "/Certificates/images/BlackStride Cyber Cert.webp",
    credentialUrl: "https://credsverse.com/credentials/be65ba47-c23d-4436-a64c-567f98e2ba9c?preview=1",
  },
  // ── Data & Development ──────────────────────────────────
  {
    title: "Data Analytics Essentials",
    organization: "Cisco Networking Academy",
    program: "Data Analysis · Visualization · Decision Making",
    pdfUrl: "/Certificates/DataAnalyticsEssentialsUpdate20251022-29-3omtph.pdf",
    imageUrl: "/Certificates/images/DataAnalyticsEssentialsUpdate20251022-29-3omtph.webp",
    credentialUrl: "https://www.credly.com/badges/986c2b90-f24a-45e1-8497-8106a6bee2b1/public_url",
  },
  {
    title: "C++ Essentials 1",
    organization: "Cisco Networking Academy",
    program: "Object-Oriented Programming · Memory Management · STL",
    pdfUrl: "/Certificates/CEssentials1Update20251022-29-t18m2k.pdf",
    imageUrl: "/Certificates/images/CEssentials1Update20251022-29-t18m2k.webp",
    credentialUrl: "https://www.credly.com/badges/a0baa8b3-4ed9-4c60-9c5f-9ffe57c01229/public_url",
  },
  // ── AI & Emerging Tech ──────────────────────────────────
  {
    title: "Generative & Agentic AI Foundation",
    organization: "IBM",
    program: "Generative AI · Agentic AI · AI Foundations",
    pdfUrl: "/Certificates/IBM Generative & Agentic AI Foundation.pdf",
    imageUrl: "/Certificates/images/IBM Generative & Agentic AI Foundation.webp",
    credentialUrl: "https://www.credly.com/earner/earned/badge/0398ccab-fed5-4feb-b3e4-bff3990aaaf4",
  },
  {
    title: "2026 IBMer watsonx Challenge",
    organization: "IBM",
    program: "AI Software Development · watsonx · IBM Consulting Advantage",
    pdfUrl: "/Certificates/2026IBMerwatsonxChallenge_Badge20260818-20-3ad733.pdf",
    imageUrl: "/Certificates/images/2026IBMerwatsonxChallenge_Badge20260818-20-3ad733.webp",
    credentialUrl: "https://www.credly.com/badges/6e382fd8-0232-4377-a025-7c700cfd2d9f/public_url",
  },
  {
    title: "AI Skills Fest 2026",
    organization: "Microsoft",
    program: "AI Productivity · Content Creation · Responsible AI",
    imageUrl: "/Certificates/ai-skills-fest-2026.png",
    credentialUrl: "https://www.credly.com/badges/6a94ef2b-12e1-4d15-a359-040c3b4f6b61/public_url",
  },
  // ── Methodology & Professional ──────────────────────────
  {
    title: "IBM Garage Essentials",
    organization: "IBM",
    program: "Innovation · DevOps · Lean Startup Methodology",
    pdfUrl: "/Certificates/Garage.pdf",
    imageUrl: "/Certificates/images/Garage.webp",
    credentialUrl: "https://www.credly.com/badges/19066bee-2541-451c-aad0-87156b079417/public_url",
  },
  {
    title: "Enterprise Design Thinking Practitioner",
    organization: "IBM",
    program: "Human-Centered Design · Empathy Maps · Problem Framing",
    pdfUrl: "/Certificates/EnterpriseDesignThinkingPractitioner_Badge20260708-7-gtk4vd.pdf",
    imageUrl: "/Certificates/images/EnterpriseDesignThinkingPractitioner_Badge20260708-7-gtk4vd.webp",
    credentialUrl: "https://www.credly.com/badges/e878eaa6-22bc-43e7-92a5-743507d556a9/public_url",
  },
  {
    title: "Agile Explorer",
    organization: "IBM",
    program: "Project Management · Scrum · Iterative Development",
    pdfUrl: "/Certificates/Agile.pdf",
    imageUrl: "/Certificates/images/Agile.webp",
    credentialUrl: "https://www.credly.com/badges/a62ad237-c0e9-42eb-ab3a-28ee69b7e3a2/public_url",
  },
  // ── General & Business ──────────────────────────────────
  {
    title: "TOPCIT Level 2",
    organization: "IITP",
    program: "Software Competency · IT Fundamentals · Korea",
    pdfUrl: "/Certificates/Topcit Level 2.pdf",
    imageUrl: "/Certificates/images/Topcit Level 2.webp",
  },
  {
    title: "Finance & Accounting Essentials",
    organization: "IBM",
    program: "Financial Statements · Business Fundamentals · Accounting",
    pdfUrl: "/Certificates/Finance.pdf",
    imageUrl: "/Certificates/images/Finance.webp",
    credentialUrl: "https://www.credly.com/badges/4a4aeb25-8de8-4154-8eb8-763bcad4ef76/public_url",
  },
  {
    title: "Microsoft PowerPoint Associate",
    organization: "Certiport",
    program: "Slide Design · Presentation Skills · Office Productivity",
    pdfUrl: "/Certificates/View Transcript.pdf",
    imageUrl: "/Certificates/images/View Transcript.webp",
    credentialUrl: "https://www.credly.com/badges/ce0a2ed2-252a-4d91-a22f-7e7ecc20019b/public_url",
  },
];

const actionButtonClass =
  "inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md border border-gray-400/70 dark:border-white/30 bg-transparent text-black dark:text-white hover:bg-black/[0.07] dark:hover:bg-white/[0.12] hover:-translate-y-0.5 transition-all duration-200";

// Shortest signed distance from the active card, so the carousel wraps around
const circularOffset = (index: number, active: number, total: number) => {
  let d = (((index - active) % total) + total) % total;
  if (d > total / 2) d -= total;
  return d;
};

const Certifications = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const dragRef = useRef<{ startX: number } | null>(null);
  const didDragRef = useRef(false);

  const visibleCertifications = certifications.slice(0, 4);
  const activeCert = activeIndex !== null ? certifications[activeIndex] : null;

  const goTo = (index: number) => {
    const total = certifications.length;
    setActiveIndex(((index % total) + total) % total);
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
              onClick={() => goTo(0)}
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
              onClick={() => goTo(index)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  goTo(index);
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

      {/* Certificate Carousel */}
      <Dialog
        open={activeCert !== null}
        onOpenChange={(open) => {
          if (!open) setActiveIndex(null);
        }}
      >
        <DialogContent
          className="max-w-5xl w-[95vw] h-[90vh] p-4 flex flex-col"
          onKeyDown={(e) => {
            if (activeIndex === null) return;
            if (e.key === "ArrowLeft") goTo(activeIndex - 1);
            if (e.key === "ArrowRight") goTo(activeIndex + 1);
          }}
        >
          {activeCert && activeIndex !== null && (
            <>
              <DialogHeader className="space-y-1 pr-6">
                <DialogTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 shrink-0" />
                  <span className="truncate">{activeCert.title}</span>
                </DialogTitle>

                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {activeCert.organization}
                  {activeCert.program && ` · ${activeCert.program}`}
                  {activeCert.date && ` · ${activeCert.date}`}
                </div>
              </DialogHeader>

              {/* 3D rotating carousel — drag/swipe, or click a side card */}
              <div
                className="relative flex-1 min-h-0 overflow-hidden select-none cursor-grab active:cursor-grabbing touch-pan-y"
                style={{ perspective: "1400px" }}
                onPointerDown={(e) => {
                  dragRef.current = { startX: e.clientX };
                  didDragRef.current = false;
                }}
                onPointerMove={(e) => {
                  const d = dragRef.current;
                  if (d && Math.abs(e.clientX - d.startX) > 8) didDragRef.current = true;
                }}
                onPointerUp={(e) => {
                  const d = dragRef.current;
                  dragRef.current = null;
                  if (!d) return;
                  const dx = e.clientX - d.startX;
                  if (Math.abs(dx) > 50) goTo(activeIndex + (dx < 0 ? 1 : -1));
                }}
                onPointerLeave={() => {
                  dragRef.current = null;
                }}
              >
                {certifications.map((cert, i) => {
                  const offset = circularOffset(i, activeIndex, certifications.length);
                  const abs = Math.abs(offset);
                  if (abs > 3) return null;
                  const sign = Math.sign(offset);
                  const isActive = offset === 0;

                  return (
                    <div
                      key={cert.title}
                      onClick={() => {
                        if (didDragRef.current || isActive) return;
                        goTo(i);
                      }}
                      className={`absolute left-1/2 top-1/2 h-[82%] aspect-[4/3] max-w-[78%] rounded-lg border-2 border-gray-400/70 dark:border-white/30 bg-white dark:bg-neutral-900 p-1 transition-[transform,opacity,filter] duration-500 ease-out ${
                        isActive ? "shadow-2xl" : "cursor-pointer"
                      }`}
                      style={{
                        transform: `translate(-50%, -50%) translateX(${offset * 58}%) translateZ(${-abs * 160}px) rotateY(${-sign * Math.min(abs, 1) * 48}deg)`,
                        opacity: abs > 2 ? 0 : 1,
                        filter: isActive ? "none" : "brightness(0.55)",
                        zIndex: 10 - abs,
                        pointerEvents: abs > 2 ? "none" : "auto",
                      }}
                    >
                      {cert.imageUrl ? (
                        <img
                          src={cert.imageUrl}
                          alt={`${cert.title} certificate`}
                          draggable={false}
                          className="w-full h-full object-contain rounded-md"
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full rounded-md">
                          <p className="text-gray-500">Certificate preview unavailable.</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Footer: dots + actions */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {activeIndex + 1} / {certifications.length}
                  </span>
                  <div className="flex flex-wrap items-center gap-1.5">
                    {certifications.map((cert, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => goTo(i)}
                        title={cert.title}
                        aria-label={`Go to ${cert.title}`}
                        className={`h-2 rounded-full transition-all duration-200 ${
                          i === activeIndex
                            ? "w-5 bg-black dark:bg-white"
                            : "w-2 bg-gray-400/70 dark:bg-white/30 hover:bg-gray-600 dark:hover:bg-white/60"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  {activeCert.credentialUrl && (
                    <button
                      type="button"
                      onClick={() =>
                        window.open(activeCert.credentialUrl, "_blank", "noopener,noreferrer")
                      }
                      className={actionButtonClass}
                    >
                      <Award className="w-4 h-4" />
                      Verify Credential
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  )}

                  {activeCert.pdfUrl && (
                    <button
                      type="button"
                      onClick={() =>
                        window.open(activeCert.pdfUrl, "_blank", "noopener,noreferrer")
                      }
                      className={actionButtonClass}
                    >
                      <FileText className="w-4 h-4" />
                      Open PDF
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Certifications;

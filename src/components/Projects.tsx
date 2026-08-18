import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, FolderOpen, Eye, Globe, PlayCircle, ArrowLeft } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ProjectPreview {
  title: string;
  type: "website" | "video" | "external";
  url: string;
}

interface Project {
  title: string;
  description: string;
  previews?: ProjectPreview[];
}

const projects: Project[] = [
  {
    title: "Deduction Workflow Automation Platform",
    description:
      "Developed a Python and Streamlit web application that automated the trade promotion deduction investigation process. Integrated reference, promotional event, and shipment datasets into a unified search platform, reducing manual investigation time through high-performance data processing, automated Excel reporting, and optimized CSV-based data retrieval.",
    previews: [
      { title: "Live Demo", type: "website", url: "https://upclp-automation.streamlit.app/" },
    ],
  },
  {
    title: "CRIMS – Cybercrime Records & Incident Management System",
    description:
      "Designed and developed a secure cybercrime records management system during my internship with the Philippine National Police. Features include role-based access control, encrypted evidence management, case tracking, dashboard analytics, and centralized file storage using React, Node.js, Supabase, and PostgreSQL.",
    previews: [
      { title: "Demo Walkthrough", type: "video", url: "https://tinyurl.com/CRIMS-DEMO" },
    ],
  },
  {
    title: "SEMS – Sports Event Management System",
    description:
      "Built a full-stack web application that automates sports tournament management, including team registration, scheduling, score management, and standings. Supports both Single & Double elimination and also round-robin tournament formats while utilizing AWS S3 for media storage.",
    previews: [
      { title: "Live Demo", type: "website", url: "https://ncf-sems.vercel.app" },
    ],
  },
  {
    title: "Clickay - E-Commerce Platform for Used Items",
    description:
      "MERN-based marketplace for buying and selling second-hand products with authentication, filtering, and responsive UI (MongoDB, Express, React, Node.js).",
    previews: [
      { title: "Live Demo", type: "website", url: "https://clickay.vercel.app" },
    ],
  },
  {
    title: "Circular Coin Detection Web App (OpenCV)",
    description:
      "Detects circular coins from images using edge detection and Hough Transform (Python, OpenCV, Streamlit).",
    previews: [
      {
        title: "Live Demo",
        type: "website",
        url: "https://circular-coin-detection.streamlit.app/",
      },
    ],
  },
  {
    title: "Coin Counting Detection (Watershed + OpenCV)",
    description:
      "Counts overlapping coins using image segmentation and Watershed algorithm (Python, OpenCV, Streamlit).",
    previews: [
      {
        title: "Live Demo",
        type: "website",
        url: "https://counting-coins-using-watershed-algorithm.streamlit.app/",
      },
    ],
  },
  {
    title: "Coin Recognition Web App (OpenCV + MLPClassifier)",
    description:
      "Recognizes coin denominations using image processing and machine learning classifier (Python, OpenCV, scikit-learn, Streamlit).",
    previews: [
      {
        title: "Live Demo",
        type: "website",
        url: "https://coin-recognition-web-app-opencv-mlpclassifier.streamlit.app/",
      },
    ],
  },
  {
    title: "Face & Hand Landmark Detection Web App",
    description:
      "Real-time facial and hand landmark detection using Mediapipe and OpenCV (Python, Streamlit).",
    previews: [
      {
        title: "Live Demo",
        type: "website",
        url: "https://face-hand-landmark-detection-web-app.streamlit.app/",
      },
    ],
  },
  {
    title: "Sales and Product Analysis Report of A Small Business",
    description:
      "Data analysis on sales trends and product performance using statistical visualization techniques (Python, Pandas, Seaborn, Matplotlib).",
    previews: [
      {
        title: "View Notebook",
        type: "external",
        url: "https://colab.research.google.com/drive/1_gVO7ELQ62ghUys923DA4dywx4dxZDF4?usp=sharing",
      },
    ],
  },
  {
    title: "Maternal Health and Delivery Trends in the Philippines",
    description:
      "Exploratory data analysis on healthcare delivery trends with comparative visual insights (Python, Pandas, Matplotlib, Seaborn).",
    previews: [
      {
        title: "View Notebook",
        type: "external",
        url: "https://colab.research.google.com/drive/1iyLBTTDLLPInOjp7V9JN0ZBJJLV0_cDn?usp=sharing",
      },
    ],
  },
  {
    title: "Heat Index Monitoring in Bicol Region",
    description:
      "Heatmap visualization of heat index trends across stations using R and data transformation techniques (R, ggplot2, dplyr).",
    previews: [
      { title: "View Report", type: "external", url: "http://rpubs.com/NapsTorres/HeatmapBicol" },
    ],
  },
  {
    title: "Typhoon Bicol Analysis",
    description:
      "Analysis of typhoon Bicol using R and data transformation techniques (R, ggplot2, dplyr).",
    previews: [
      { title: "View Report", type: "external", url: "http://rpubs.com/NapsTorres/Typhoon_Bicol" },
    ],
  },
];

const getEmbedUrl = (preview: ProjectPreview): string | null => {
  const { url, type } = preview;

  if (type === "external") return null;

  if (type === "website") return url;

  const youtubeMatch = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]+)/
  );
  if (youtubeMatch) return `https://www.youtube.com/embed/${youtubeMatch[1]}`;

  const driveMatch = url.match(/drive\.google\.com\/file\/d\/([\w-]+)/);
  if (driveMatch) return `https://drive.google.com/file/d/${driveMatch[1]}/preview`;

  return url;
};

const PreviewIcon = ({ type }: { type: ProjectPreview["type"] }) => {
  if (type === "video") return <PlayCircle className="w-4 h-4 shrink-0 text-primary" />;
  if (type === "website") return <Globe className="w-4 h-4 shrink-0 text-primary" />;
  return <ExternalLink className="w-4 h-4 shrink-0 text-primary" />;
};

const Projects = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedPreview, setSelectedPreview] = useState<ProjectPreview | null>(null);
  const [returnToList, setReturnToList] = useState(false);

  const visibleProjects = projects.slice(0, 4);

  const openPreview = (project: Project, fromList = false) => {
    setSelectedProject(project);
    setSelectedPreview(project.previews?.[0] ?? null);
    setReturnToList(fromList);
    setIsDialogOpen(true);
  };

  const openAll = () => {
    setSelectedProject(null);
    setSelectedPreview(null);
    setReturnToList(false);
    setIsDialogOpen(true);
  };

  const handleBack = () => {
    if (returnToList) {
      setSelectedProject(null);
      setSelectedPreview(null);
      return;
    }
    setIsDialogOpen(false);
  };

  const handleDialogChange = (open: boolean) => {
    setIsDialogOpen(open);
    if (!open) {
      setSelectedProject(null);
      setSelectedPreview(null);
      setReturnToList(false);
    }
  };

  const embedUrl = selectedPreview ? getEmbedUrl(selectedPreview) : null;

  return (
    <>
      <Card className="section-card">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-bold dark:text-white">
              <FolderOpen className="w-5 h-5" /> Featured Projects
            </div>
            <button
              type="button"
              onClick={openAll}
              title="View All Projects"
              className="p-1 rounded-md text-black dark:text-white hover:-translate-y-1 transition-all duration-200"
            >
              <Eye className="w-4 h-4" />
            </button>
          </CardTitle>
          <CardDescription className="dark:text-gray-300">Some of my recent work</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {visibleProjects.map((project, index) => (
              <div
                key={index}
                role="button"
                tabIndex={0}
                onClick={() => openPreview(project)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openPreview(project);
                  }
                }}
                className="item-box p-3 flex flex-col h-full cursor-pointer"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="font-semibold text-black dark:text-white">{project.title}</div>
                  <Eye className="w-4 h-4 shrink-0 text-black dark:text-white" />
                </div>
                <p className="text-sm text-muted-foreground dark:text-gray-300 line-clamp-2">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={handleDialogChange}>
        <DialogContent className="max-w-5xl w-[95vw] h-[90vh] p-4 overflow-y-auto">
          {selectedPreview && selectedProject ? (
            <>
              <DialogHeader className="space-y-1">
                <DialogTitle className="flex items-center gap-2 dark:text-white">
                  <FolderOpen className="w-5 h-5" />
                  {selectedProject.title}
                </DialogTitle>
                <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                  {selectedProject.description}
                </p>
              </DialogHeader>

              {embedUrl ? (
                <div className="flex-1 min-h-0 overflow-hidden rounded-lg border-2 border-gray-400/70 dark:border-white/30 p-1">
                  <iframe
                    src={embedUrl}
                    title={`${selectedProject.title} preview`}
                    className="w-full h-full min-h-[65vh] rounded-md"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center gap-4 min-h-[40vh] border-2 border-gray-400/70 dark:border-white/30 rounded-lg p-6 text-center">
                  <PreviewIcon type={selectedPreview.type} />
                  <p className="text-gray-500 dark:text-gray-400">
                    This preview opens in a new tab.
                  </p>
                  <button
                    type="button"
                    onClick={() =>
                      window.open(selectedPreview.url, "_blank", "noopener,noreferrer")
                    }
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md border border-gray-400/70 dark:border-white/30 bg-transparent text-black dark:text-white hover:bg-black/[0.07] dark:hover:bg-white/[0.12] hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Open {selectedPreview.title}
                  </button>
                </div>
              )}

              <div className="flex justify-between gap-2 pt-2">
                <button
                  type="button"
                  onClick={handleBack}
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md border border-gray-400/70 dark:border-white/30 bg-transparent text-black dark:text-white hover:bg-black/[0.07] dark:hover:bg-white/[0.12] hover:-translate-y-0.5 transition-all duration-200"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>

                <button
                  type="button"
                  onClick={() =>
                    window.open(selectedPreview.url, "_blank", "noopener,noreferrer")
                  }
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md border border-gray-400/70 dark:border-white/30 bg-transparent text-black dark:text-white hover:bg-black/[0.07] dark:hover:bg-white/[0.12] hover:-translate-y-0.5 transition-all duration-200"
                >
                  <ExternalLink className="w-4 h-4" />
                  Open in New Tab
                </button>
              </div>
            </>
          ) : (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2 font-bold dark:text-white">
                  <FolderOpen className="w-5 h-5" /> All Projects
                </DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 md:grid-cols-2 mt-4">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    role="button"
                    tabIndex={0}
                    onClick={() => openPreview(project, true)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        openPreview(project, true);
                      }
                    }}
                    className="item-box p-4 flex flex-col h-full cursor-pointer"
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-semibold text-lg dark:text-white">{project.title}</h3>
                      <Eye className="w-4 h-4 shrink-0 text-black dark:text-white" />
                    </div>
                    <p className="text-sm text-muted-foreground dark:text-gray-300 line-clamp-3">
                      {project.description}
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

export default Projects;

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, FolderOpen, Eye, MoreHorizontal } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Project {
  title: string;
  description: string;
  link?: string;
  video?: string;

}

const projects: Project[] = [
  {
  title: "Deduction Workflow Automation Platform",
  description:
    "Developed a Python and Streamlit web application that automated the trade promotion deduction investigation process. Integrated reference, promotional event, and shipment datasets into a unified search platform, reducing manual investigation time through high-performance data processing, automated Excel reporting, and optimized CSV-based data retrieval.",
  link: "https://upclp-automation.streamlit.app",
  },
  {
  title: "CRIMS – Cybercrime Records & Incident Management System",
  description:
    "Designed and developed a secure cybercrime records management system during my internship with the Philippine National Police. Features include role-based access control, encrypted evidence management, case tracking, dashboard analytics, and centralized file storage using React, Node.js, Supabase, and PostgreSQL.",
  link: "https://crims-alpha.vercel.app",
  video: "https://tinyurl.com/CRIMS-DEMO"
  },
  {
  title: "SEMS – Sports Event Management System",
  description:
    "Built a full-stack web application that automates sports tournament management, including team registration, scheduling, score management, and standings. Supports both Single & Double elimination and also round-robin tournament formats while utilizing AWS S3 for media storage.",
  link: "https://ncf-sems.vercel.app"
  },
  {
    title: "Clickay - E-Commerce Platform for Used Items",
    description: "MERN-based marketplace for buying and selling second-hand products with authentication, filtering, and responsive UI (MongoDB, Express, React, Node.js).",
    link: "https://clickay.vercel.app"
  },
  {
    title: "Circular Coin Detection Web App (OpenCV)",
    description: "Detects circular coins from images using edge detection and Hough Transform (Python, OpenCV, Streamlit).",
    link: "https://circular-coin-detection.streamlit.app/"
  },
  {
    title: "Coin Counting Detection (Watershed + OpenCV)",
    description: "Counts overlapping coins using image segmentation and Watershed algorithm (Python, OpenCV, Streamlit).",
    link: "https://counting-coins-using-watershed-algorithm.streamlit.app/"
  },
  {
    title: "Coin Recognition Web App (OpenCV + MLPClassifier)",
    description: "Recognizes coin denominations using image processing and machine learning classifier (Python, OpenCV, scikit-learn, Streamlit).",
    link: "https://coin-recognition-web-app-opencv-mlpclassifier.streamlit.app/"
  },
  {
    title: "Face & Hand Landmark Detection Web App",
    description: "Real-time facial and hand landmark detection using Mediapipe and OpenCV (Python, Streamlit).",
    link: "https://face-hand-landmark-detection-web-app.streamlit.app/"
  },
  {
    title: "Sales and Product Analysis Report of A Small Business",
    description: "Data analysis on sales trends and product performance using statistical visualization techniques (Python, Pandas, Seaborn, Matplotlib).",
    link: "https://colab.research.google.com/drive/1_gVO7ELQ62ghUys923DA4dywx4dxZDF4?usp=sharing"
  },
  {
    title: "Maternal Health and Delivery Trends in the Philippines",
    description: "Exploratory data analysis on healthcare delivery trends with comparative visual insights (Python, Pandas, Matplotlib, Seaborn).",
    link: "https://colab.research.google.com/drive/1iyLBTTDLLPInOjp7V9JN0ZBJJLV0_cDn?usp=sharing"
  },
  {
    title: "Heat Index Monitoring in Bicol Region",
    description: "Heatmap visualization of heat index trends across stations using R and data transformation techniques (R, ggplot2, dplyr).",
    link: "http://rpubs.com/NapsTorres/HeatmapBicol"
  },
  {
    title: "Typhoon Bicol Analysis",
    description: "Analysis of typhoon Bicol using R and data transformation techniques (R, ggplot2, dplyr).",
    link: "http://rpubs.com/NapsTorres/Typhoon_Bicol"
  }

];

const Projects = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  // Limit to first 2 projects for initial display
  const getLimitedProjects = (projects: Project[], limit: number = 4) => {
    return projects.slice(0, limit);
  };

  return (
    <>
      <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center gap-2 font-bold dark:text-white">
              <FolderOpen className="w-5 h-5" /> Featured Projects
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
                  <FolderOpen className="w-5 h-5" /> All Projects
                </DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 md:grid-cols-2 mt-4">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg border border-gray-200 dark:border-gray-600 hover:-translate-y-1 flex flex-col h-full transition-all duration-200"
                  >
                    <h3 className="font-semibold text-lg mb-2 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                      <div className="flex-1"></div>
                      <div className="flex gap-2 flex-wrap mt-auto">
                        {project.link && (
                          <a 
                            href={project.link.startsWith('http') ? project.link : `https://${project.link}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-black dark:text-white hover:underline transition-all duration-200"
                          >
                            {project.link.replace('https://', '').replace('http://', '')}
                          </a>
                        )}
                        {project.video && (
                          <a 
                            href={project.video}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-black dark:text-white hover:underline transition-all duration-200"
                          >
                            {project.video.replace('https://', '').replace('http://', '')}
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          </CardTitle>
          <CardDescription className="dark:text-gray-300">Some of my recent work</CardDescription>
        </CardHeader>
        <CardContent>
          {/* Mobile: Single column layout */}
          <div className="md:hidden space-y-3">
            {getLimitedProjects(projects).map((project, index) => (
              <div
                key={index}
                className="p-3 rounded-lg border border-gray-200 dark:border-gray-600 hover:-translate-y-1 flex flex-col h-full transition-all duration-200"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="font-semibold text-black dark:text-white text-sm">{project.title}</div>
                  <Dialog>
                    <DialogTrigger asChild>
                        <button 
                          className="text-xs text-black dark:text-white hover:underline transition-all duration-200 flex items-center gap-1 hover:-translate-y-1"
                          title="Details"
                        >
                          <MoreHorizontal className="w-4 h-4" />
                        </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle className="font-bold flex items-center gap-2 dark:text-white">
                          <FolderOpen className="w-5 h-5" /> {project.title}
                        </DialogTitle>
                      </DialogHeader>
                      <p className="text-sm text-muted-foreground dark:text-gray-300">
                        {project.description}
                      </p>
                      <div className="mt-4 flex gap-2 flex-wrap">
                        {project.link && (
                          <a 
                            href={project.link.startsWith('http') ? project.link : `https://${project.link}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-black dark:text-white hover:underline transition-all duration-200"
                          >
                            {project.link.replace('https://', '').replace('http://', '')}
                          </a>
                        )}
                        {project.video && (
                          <a 
                            href={project.video}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-black dark:text-white hover:underline transition-all duration-200"
                          >
                            {project.video.replace('https://', '').replace('http://', '')}
                          </a>
                        )}
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {project.link && (
                    <a 
                      href={project.link.startsWith('http') ? project.link : `https://${project.link}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-black dark:text-white hover:underline transition-all duration-200"
                    >
                      {project.link.replace('https://', '').replace('http://', '')}
                    </a>
                  )}
                  {project.video && (
                    <a 
                      href={project.video}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-black dark:text-white hover:underline transition-all duration-200"
                    >
                      {project.video.replace('https://', '').replace('http://', '')}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Desktop/Tablet: 2x2 grid layout */}
          <div className="hidden md:grid grid-cols-2 gap-2">
            {getLimitedProjects(projects).map((project, index) => (
              <div
                key={index}
                className="p-3 rounded-lg border border-gray-200 dark:border-gray-600 hover:-translate-y-1 flex flex-col h-full transition-all duration-200"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="font-semibold text-black dark:text-white">{project.title}</div>
                  <Dialog>
                    <DialogTrigger asChild>
                        <button 
                          className="text-xs text-black dark:text-white hover:underline transition-all duration-200 flex items-center gap-1 hover:-translate-y-1"
                          title="Details"
                        >
                          <MoreHorizontal className="w-4 h-4" />
                        </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle className="font-bold flex items-center gap-2 dark:text-white">
                          <FolderOpen className="w-5 h-5" /> {project.title}
                        </DialogTitle>
                      </DialogHeader>
                      <p className="text-sm text-muted-foreground dark:text-gray-300">
                        {project.description}
                      </p>
                      <div className="mt-4 flex gap-2 flex-wrap">
                        {project.link && (
                          <a 
                            href={project.link.startsWith('http') ? project.link : `https://${project.link}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-black dark:text-white hover:underline transition-all duration-200"
                          >
                            {project.link.replace('https://', '').replace('http://', '')}
                          </a>
                        )}
                        {project.video && (
                          <a 
                            href={project.video}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-black dark:text-white hover:underline transition-all duration-200"
                          >
                            {project.video.replace('https://', '').replace('http://', '')}
                          </a>
                        )}
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
                <div className="flex-1"></div>
                <div className="flex gap-2 flex-wrap mt-auto">
                  {project.link && (
                    <a 
                      href={project.link.startsWith('http') ? project.link : `https://${project.link}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-black dark:text-white hover:underline transition-all duration-200"
                    >
                      {project.link.replace('https://', '').replace('http://', '')}
                    </a>
                  )}
                  {project.video && (
                    <a 
                      href={project.video}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-black dark:text-white hover:underline transition-all duration-200"
                    >
                      {project.video.replace('https://', '').replace('http://', '')}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Projects;

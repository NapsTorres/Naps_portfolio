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
    title: "CRIMS - Cybercrime Records & Incident Management System",
    description:
      "Secure file and evidence management system for Regional Anti-Cybercrime Unit with access control and digital evidence handling.",
    link: "crims-alpha.vercel.app", 
    video: "https://tinyurl.com/CRIMS-DEMO",
    // Example of new link types:
    // documentation: "https://docs.example.com",
    // video: "https://youtube.com/watch?v=example",
    // figma: "https://figma.com/design/example"
  },
  {
    title: "SEMS - Sport Event Management System",
    description:
      "Full-stack web app that automates sports tournament scheduling using elimination and round-robin algorithms.",
    link: "http://sems-frontend.s3-website-ap-northeast-1.amazonaws.com", // optional
  },
  {
    title: "Clickay - E-Commerce Platform for Used Items",
    description:
      "MERN-based marketplace for buying and selling second-hand products with user authentication and filtering.",
    link: "https://clickay.vercel.app", // optional
  },
  {
    title: "Data Analytics Dashboard",
    description:
      "Data visualization project using Python, Pandas, and Matplotlib to analyze trade trends and generate insights.",
  },
  {
    title: "Circular Coin Detection Web App (OpenCV)",
    description:
      "Web application that detects circular coins in images using OpenCV and Python.",
    link: "https://circularcoindetection.streamlit.app/",
  },
  {
    title: "Coin Counting Detection (Watershed + OpenCV)",
    description:
      "Web application that detects circular coins and count the number of coins in images using Watershed and OpenCV algorithms.",
      link: "https://counting-coins-using-watershed-algorithm.streamlit.app/",
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

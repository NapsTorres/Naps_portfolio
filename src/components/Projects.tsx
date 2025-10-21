import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, FolderOpen } from "lucide-react";
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
    link: "https://your-live-demo-link.com", // optional
  },
  {
    title: "Clickay - E-Commerce Platform for Used Items",
    description:
      "MERN-based marketplace for buying and selling second-hand products with user authentication and filtering.",
    link: "https://your-live-demo-link.com", // optional
  },
  {
    title: "Data Analytics Dashboard",
    description:
      "Data visualization project using Python, Pandas, and Matplotlib to analyze trade trends and generate insights.",
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
            <div className="flex items-center gap-2 font-bold">
              <FolderOpen className="w-5 h-5" /> Featured Projects
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
                    <FolderOpen className="w-5 h-5" /> All Projects
                  </DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 md:grid-cols-2 mt-4">
                  {projects.map((project, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg border border-border flex flex-col h-full"
                    >
                      <h3 className="font-semibold text-lg mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {project.description}
                      </p>
                      <div className="flex-1"></div>
                      <div className="flex gap-2 flex-wrap mt-auto">
                        {project.link && (
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="h-8 px-2 hover:text-black hover:underline transition-colors"
                            asChild
                          >
                            <a 
                              href={project.link.startsWith('http') ? project.link : `https://${project.link}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block px-2 py-1 bg-gray-100 rounded text-xs text-black hover:bg-gray-200 hover:underline transition-colors"
                          >
                              {project.link.replace('https://', '').replace('http://', '')}
                            </a>

                          </Button>
                        )}
                        {project.video && (
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="h-8 px-2 hover:text-black hover:underline transition-colors"
                            asChild
                          >
                            <a 
                              href={project.video}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block px-2 py-1 bg-gray-100 rounded text-xs text-black hover:bg-gray-200 hover:underline transition-colors"
                            >
                              {project.video.replace('https://', '').replace('http://', '')}
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          </CardTitle>
          <CardDescription>Some of my recent work</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-2">
            {getLimitedProjects(projects).map((project, index) => (
              <div
                key={index}
                className="p-3 bg-gray-50 rounded-lg border border-gray-200 flex flex-col h-full"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="font-semibold text-black">{project.title}</div>
                  {/* Details modal trigger per project */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="text-xs text-black hover:underline transition-all duration-200">Details</button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle className="font-bold flex items-center gap-2">
                          <FolderOpen className="w-5 h-5" /> {project.title}
                        </DialogTitle>
                      </DialogHeader>
                      <p className="text-sm text-muted-foreground">
                        {project.description}
                      </p>
                      <div className="mt-4 flex gap-2 flex-wrap">
                        {project.link && (
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="h-8 px-2 hover:text-black hover:underline transition-colors"
                            asChild
                          >
                            <a 
                                href={project.link.startsWith('http') ? project.link : `https://${project.link}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-2 py-1 bg-gray-100 rounded text-xs text-black hover:bg-gray-200 hover:underline transition-colors"
                          >
                                {project.link.replace('https://', '').replace('http://', '')}
                            </a>
                          </Button>
                        )}
                        {project.video && (
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="h-8 px-2 hover:text-black hover:underline transition-colors"
                            asChild
                          >
                            <a 
                              href={project.video}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block px-2 py-1 bg-gray-100 rounded text-xs text-black hover:bg-gray-200 hover:underline transition-colors"
                            >
                              {project.video.replace('https://', '').replace('http://', '')}
                            </a>
                          </Button>
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
                      className="inline-block px-2 py-1 bg-gray-100 rounded text-xs text-black hover:bg-gray-200 hover:underline transition-colors"
                    >
                      {project.link.replace('https://', '').replace('http://', '')}
                    </a>
                  )}
                  {project.video && (
                    <a 
                      href={project.video}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-2 py-1 bg-gray-100 rounded text-xs text-black hover:bg-gray-200 hover:underline transition-colors"
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

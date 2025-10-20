import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, FolderOpen } from "lucide-react";
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
  github?: string;
}

const projects: Project[] = [
  {
    title: "CRIMS - Cybercrime Records & Incident Management System",
    description:
      "Secure file and evidence management system for Regional Anti-Cybercrime Unit with access control and digital evidence handling.",
    link: "https://your-live-demo-link.com", // Replace if applicable
    github: "https://github.com/your-username/CRIMS" // Replace with your repo link
  },
  {
    title: "SEMS - Sport Event Management System",
    description:
      "Full-stack web app that automates sports tournament scheduling using elimination and round-robin algorithms.",
    link: "https://your-live-demo-link.com", // optional
    github: "https://github.com/your-username/SEMS" // optional
  },
  {
    title: "Clickay - E-Commerce Platform for Used Items",
    description:
      "MERN-based marketplace for buying and selling second-hand products with user authentication and filtering.",
    link: "https://your-live-demo-link.com", // optional
    github: "https://github.com/your-username/Clickay" // optional
  },
  {
    title: "Data Analytics Dashboard",
    description:
      "Data visualization project using Python, Pandas, and Matplotlib to analyze trade trends and generate insights.",
    github: "https://github.com/your-username/data-analytics-dashboard" // optional
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
                      className="p-4 rounded-lg border border-border hover:border-primary/50 hover:shadow-md transition-all duration-300 group"
                    >
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {project.description}
                      </p>
                      <div className="flex gap-2">
                        {project.link && (
                          <Button variant="ghost" size="sm" className="h-8 px-2">
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        )}
                        {project.github && (
                          <Button variant="ghost" size="sm" className="h-8 px-2">
                            <Github className="w-4 h-4" />
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
                className="p-3 bg-gray-50 rounded-lg border border-gray-200"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="font-semibold text-black">{project.title}</div>
                  {/* Details modal trigger per project */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="text-xs text-black underline">Details</button>
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
                      <div className="mt-4 flex gap-2">
                        {project.link && (
                          <Button variant="ghost" size="sm" className="h-8 px-2">
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        )}
                        {project.github && (
                          <Button variant="ghost" size="sm" className="h-8 px-2">
                            <Github className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
                {project.link && (
                  <div className="inline-block mt-2 px-2 py-1 bg-gray-100 rounded text-xs text-black">
                    {project.link.replace('https://', '').replace('http://', '')}
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Projects;

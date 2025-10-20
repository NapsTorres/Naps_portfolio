import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, FolderOpen } from "lucide-react";

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
      "A secure file and evidence management system for the Regional Anti-Cybercrime Unit. Features include folder categorization, access control, search functionality, and digital evidence handling. Built using React, TypeScript, Supabase, and PostgreSQL.",
    link: "https://your-live-demo-link.com", // Replace if applicable
    github: "https://github.com/your-username/CRIMS" // Replace with your repo link
  },
  {
    title: "SEMS - Sport Event Management System",
    description:
      "Full-stack web application that automates sports tournament scheduling using single elimination, double elimination, and round-robin algorithms. Developed with React Vite, Node.js, and SQL.",
    link: "https://your-live-demo-link.com", // optional
    github: "https://github.com/your-username/SEMS" // optional
  },
  {
    title: "Clickay - E-Commerce Platform for Used Items",
    description:
      "MERN-based marketplace for buying and selling second-hand products. Implemented user authentication, product filtering, and responsive UI for seamless buying and selling.",
    link: "https://your-live-demo-link.com", // optional
    github: "https://github.com/your-username/Clickay" // optional
  },
  {
    title: "Data Analytics Dashboard",
    description:
      "A data visualization and analytics project using Python, Pandas, SQL, and Matplotlib to analyze trade trends and generate actionable insights via automated dashboards.",
    github: "https://github.com/your-username/data-analytics-dashboard" // optional
  }
];

const Projects = () => {
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-bold">
          <FolderOpen className="w-5 h-5" /> Featured Projects
        </CardTitle>
        <CardDescription>Some of my recent work</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
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
      </CardContent>
    </Card>
  );
};

export default Projects;

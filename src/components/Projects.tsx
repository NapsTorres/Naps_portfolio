import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  link?: string;
  github?: string;
}

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration and admin dashboard",
    link: "https://example.com",
    github: "https://github.com"
  },
  {
    title: "Task Management App",
    description: "Collaborative task manager with real-time updates and team features",
    link: "https://example.com",
    github: "https://github.com"
  },
  {
    title: "Portfolio Generator",
    description: "AI-powered tool to create beautiful developer portfolios in minutes",
    link: "https://example.com",
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather tracking with beautiful visualizations",
    github: "https://github.com"
  },
];

const Projects = () => {
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span>🚀</span> Featured Projects
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

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TechCategory {
  category: string;
  icon: string;
  technologies: string[];
}

const techStack: TechCategory[] = [
  {
    category: "Frontend",
    icon: "🎨",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js"]
  },
  {
    category: "Backend",
    icon: "⚙️",
    technologies: ["Node.js", "Python", "Express", "PostgreSQL", "MongoDB"]
  },
  {
    category: "DevOps & Cloud",
    icon: "☁️",
    technologies: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "Vercel"]
  },
];

const TechStack = () => {
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span>⚡</span> Tech Stack
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {techStack.map((category, index) => (
          <div key={index} className="space-y-3">
            <h3 className="text-sm font-semibold text-muted-foreground flex items-center gap-2">
              <span>{category.icon}</span>
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.technologies.map((tech, techIndex) => (
                <Badge
                  key={techIndex}
                  variant="secondary"
                  className="hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default TechStack;

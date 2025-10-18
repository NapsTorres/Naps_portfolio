import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TechCategory {
  category: string;
  icon: string;
  technologies: string[];
}

const techStack: TechCategory[] = [
  {
    category: "Web & Software Development",
    icon: "💻",
    technologies: [
      "JavaScript", "Python", "Node.js", "React.js", "TypeScript", 
      "PHP", "C", "C++", "HTML", "CSS", "Tailwind",
      "Laravel", "Supabase",
      "SQL", "PostgreSQL", "MongoDB"  // ✅ As backend databases
    ]
  },
  {
    category: "Data & Analytics",
    icon: "📊",
    technologies: [
      "Python", "R", "Pandas", "Matplotlib", "Orange",
      "SQL", "PostgreSQL", "MongoDB" // ✅ As analytical databases/tools
    ]
  },
  {
    category: "Networking & IT Support",
    icon: "🌐",
    technologies: [
      "Troubleshooting", "System Maintenance", "Hardware Support",
      "TCP/IP", "DNS", "DHCP", "VPN", "Firewalls", 
      "Switches", "Wireless Access Points", 
      "Cisco Packet Tracer"
    ]
  },
  {
    category: "Tools & Platforms",
    icon: "🛠️",
    technologies: [
      "GitHub", "Jira", "Figma", "Microsoft Office Suite",
      "Orange", "TeamViewer", "AnyDesk"
    ]
  }
];

const TechStack = () => {
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span>⚡</span> Technical Skills
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

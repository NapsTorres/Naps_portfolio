import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
      "SQL" // ✅ As analytical databases/tools
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
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  // Limit to first 4 skills per category for initial display
  const getLimitedSkills = (skills: string[], limit: number = 4) => {
    return skills.slice(0, limit);
  };

  const getRemainingSkillsCount = (skills: string[], limit: number = 4) => {
    return Math.max(0, skills.length - limit);
  };

  return (
    <>
      <Card className="border border-gray">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span>⚡</span> Technical Skills
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <span className="text-sm text-black cursor-pointer hover:underline">
                View All &gt;
              </span>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <span>⚡</span> Complete Technical Skills
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-6 mt-4">
                {techStack.map((category, index) => (
                  <div key={index} className="space-y-3">
                    <h3 className="text-lg font-semibold text-muted-foreground flex items-center gap-2">
                      <span>{category.icon}</span>
                      {category.category}
                    </h3>
                      <div className="flex flex-wrap gap-2">
                        {category.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 text-xs bg-white border border-gray text-black rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                  </div>
                ))}
              </div>
            </DialogContent>
          </Dialog>
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
                {getLimitedSkills(category.technologies).map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 text-xs bg-white border border-gray text-black rounded"
                  >
                    {tech}
                  </span>
                ))}
                {getRemainingSkillsCount(category.technologies) > 0 && (
                  <span className="px-2 py-1 text-xs bg-white border border-gray text-black rounded">
                    +{getRemainingSkillsCount(category.technologies)} more
                  </span>
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </>
  );
};

export default TechStack;

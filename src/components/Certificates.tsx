import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CertCategory {
  category: string;
  icon: string;
  items: string[];
}

const certifications: CertCategory[] = [
  {
    category: "Cybersecurity",
    icon: "🔐",
    items: [
      "Introduction to Cybersecurity - Cisco",
      "DICT Cybersecurity - DICT",
      "ICIP (Critical Infrastructure Protection) - OPSWAT"
    ]
  },
  {
    category: " IT & Technical Foundation",
    icon: "🛡️",
    items: ["CompTIA A+ - CompTIA", "TOPCIT Level 2 - IITP"]
  },
  {
    category: "Data & Analytics",
    icon: "📊",
    items: ["Data Analytics Essentials - Cisco"]
  },
  {
    category: "Productivity & Professional Skills",
    icon: "📜",
    items: ["Microsoft PowerPoint Associate - Certiport"]
  }
];

const Certifications = () => {
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span>📜</span> Certifications
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {certifications.map((category, index) => (
          <div key={index} className="space-y-3">
            <h3 className="text-sm font-semibold text-muted-foreground flex items-center gap-2">
              <span>{category.icon}</span>
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((cert, certIndex) => (
                <Badge
                  key={certIndex}
                  variant="secondary"
                  className="hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                >
                  {cert}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default Certifications;

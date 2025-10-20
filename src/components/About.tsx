import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";

const About = () => {
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="w-5 h-5" /> About
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-foreground/80">
    <p>
  I am a multi-disciplinary IT professional specializing in data engineering, analytics, and IT infrastructure. I work with Python (Pandas, NumPy, Matplotlib), SQL, R, and Orange to transform data into actionable insights.
</p>
<p>
  I also have hands-on experience in network configuration, system administration, and IT support, as well as full-stack web development using the MERN stack.
</p>
<p>
  I aim to grow in roles such as Data Engineer, Data Scientist, or IT Specialist, where I can apply my expertise in data, software, and infrastructure to build secure and scalable solutions.
</p>

      </CardContent>
    </Card>
  );
};

export default About;

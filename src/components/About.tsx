import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";

const About = () => {
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-bold">
          <FileText className="w-5 h-5" /> About
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-foreground/80">
 <p>
  I'm an IT professional passionate about cloud computing, networking, infrastructure, automation, and software engineering. Through my experience at IBM and my internship with the Regional Anti-Cybercrime Unit, I've developed practical skills in enterprise operations, IT support, networking, and secure application development.
</p>

<p>
  My technical background includes Python, JavaScript, TypeScript, SQL, PostgreSQL, React, Node.js, and Power BI, and I'm actively building expertise in Microsoft Azure, Linux, Docker, and cloud networking.
</p>

<p>
  My goal is to become a Cloud Engineer who designs secure, scalable, and reliable cloud solutions while continuously learning new technologies and industry best practices.
</p>

      </CardContent>
    </Card>
  );
};

export default About;

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span>📖</span> About
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-foreground/80">
        <p>
          I'm a full-stack software engineer specializing in developing modern web applications 
          with React, TypeScript, and Node.js. I focus on creating elegant solutions that solve 
          real-world problems.
        </p>
        <p>
          With years of experience building scalable applications, I've helped startups and 
          established companies bring their ideas to life. I'm passionate about clean code, 
          user experience, and continuous learning.
        </p>
        <p>
          Currently exploring the intersection of AI and web development, building intelligent 
          applications that leverage cutting-edge technologies to deliver exceptional user experiences.
        </p>
      </CardContent>
    </Card>
  );
};

export default About;

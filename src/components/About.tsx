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
          I am a multi-disciplinary IT professional specializing in data engineering, data analytics, and IT
          infrastructure. I have experience working with Python (Pandas, NumPy, Matplotlib), SQL, R, and Orange to
          process data, build insights, and support data-driven solutions.
        </p>
        <p>
          In addition to my data expertise, I have hands-on experience in network configuration, system
          administration, and IT support, enabling me to manage and troubleshoot real-world infrastructure
          environments efficiently. I have also developed modern web applications using the MERN stack, allowing me
          to build full-stack solutions that integrate both software and data capabilities.
        </p>
        <p>
          My primary career focus is to grow in roles such as Data Engineer, Data Scientist, and IT Specialist, while
          continuously expanding my expertise in network engineering, cloud technologies, and system
          administration. I am passionate about delivering secure, scalable, and innovative solutions that bridge data,
          software, and infrastructure.
        </p>
      </CardContent>
    </Card>
  );
};

export default About;
